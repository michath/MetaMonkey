// stagedlib.js
// Library for debugging spidermonkey staged code 
// Giannis Apostolidis
// March 2015.
//

( function(global) {

	///////////////////////////////////////////////////////////

	  // A module that can be mixed in to *any object* in order to provide it with
	  // custom events. You may bind with `on` or remove with `off` callback
	  // functions to an event; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //

	  // Regular expression used to split event strings.

	  var array = [];
	  var slice = array.slice;

	  var eventSplitter = /\s+/;

	  // Implement fancy features of the Events API such as multiple event
	  // names `"change blur"` and jQuery-style event maps `{change: action}`
	  // in terms of the existing API.
	  var eventsApi = function(obj, action, name, rest) {
	    if (!name) return true;

	    // Handle event maps.
	    if (typeof name === 'object') {
	      for (var key in name) {
	        obj[action].apply(obj, [key, name[key]].concat(rest));
	      }
	      return false;
	    }

	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        obj[action].apply(obj, [names[i]].concat(rest));
	      }
	      return false;
	    }

	    return true;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };
	  var STG_Events = global.STG_Events = {

	    // Bind an event to a `callback` function. Passing `"all"` will bind
	    // the callback to all events fired.
	    on: function(name, callback, context) {
	      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	      this._events || (this._events = {});
	      var events = this._events[name] || (this._events[name] = []);
	      events.push({callback: callback, context: context, ctx: context || this});
	      return this;
	    },

	    // Bind an event to only be triggered a single time. After the first time
	    // the callback is invoked, it will be removed.
	    once: function(name, callback, context) {
	      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	      var self = this;
	      var once = _.once(function() {
	        self.off(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	      return this.on(name, once, context);
	    },

	    // Remove one or many callbacks. If `context` is null, removes all
	    // callbacks with that function. If `callback` is null, removes all
	    // callbacks for the event. If `name` is null, removes all bound
	    // callbacks for all events.
	    off: function(name, callback, context) {
	      var retain, ev, events, names, i, l, j, k;
	      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	      if (!name && !callback && !context) {
	        this._events = void 0;
	        return this;
	      }
	      names = name ? [name] : _.keys(this._events);
	      for (i = 0, l = names.length; i < l; i++) {
	        name = names[i];
	        if (events = this._events[name]) {
	          this._events[name] = retain = [];
	          if (callback || context) {
	            for (j = 0, k = events.length; j < k; j++) {
	              ev = events[j];
	              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                  (context && context !== ev.context)) {
	                retain.push(ev);
	              }
	            }
	          }
	          if (!retain.length) delete this._events[name];
	        }
	      }

	      return this;
	    },

	    // Trigger one or many events, firing all bound callbacks. Callbacks are
	    // passed the same arguments as `trigger` is, apart from the event name
	    // (unless you're listening on `"all"`, which will cause your callback to
	    // receive the true name of the event as the first argument).
	    trigger: function(name) {
	      if (!this._events) return this;
	      var args = slice.call(arguments, 1);
	      if (!eventsApi(this, 'trigger', name, args)) return this;
	      var events = this._events[name];
	      var allEvents = this._events.all;
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, arguments);
	      return this;
	    },

	    // Tell this object to stop listening to either specific events ... or
	    // to every object it's currently listening to.
	    stopListening: function(obj, name, callback) {
	      var listeningTo = this._listeningTo;
	      if (!listeningTo) return this;
	      var remove = !name && !callback;
	      if (!callback && typeof name === 'object') callback = this;
	      if (obj) (listeningTo = {})[obj._listenId] = obj;
	      for (var id in listeningTo) {
	        obj = listeningTo[id];
	        obj.off(name, callback, this);
	        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	      }
	      return this;
	    }

	  };


	///////////////////////////////////////////////////////////
	//	Options
	var STG_Opts = 			{};
	STG_Opts.MODE = 		'dev'; // dev, release
	STG_Opts.SERVER_IP = 	'http://localhost:8085';
	///////////////////////////////////////////////////////////


	///////////////////////////////////////////////////////////
	//	Assertion mechanism
	var STG_Assert = (function( cond, msg ) {
	    if( STG_Opts.MODE === 'dev' ) {
	      return function( cond, msg ) {
	        if( !cond ) {
	          throw Error( 'Assertion failed: ' + ( msg || '' ) );
	        }
	      };
	    }else {
	      return function( cond, msg ) {
	        if( !cond ) {
	          console.error( 'Assertion failed: ' + ( msg || '' ) );
	        }
	      };
	    }
	})();
	///////////////////////////////////////////////////////////


	// dependent external libraries loaded 
	STG_Assert( typeof global.jQuery === 'function' 
				&& typeof global.$ === 'function', 'jquery is not included' 
			);
	STG_Assert( typeof global._ === 'function', 'underscore is not included' );

	///////////////////////////////////////////////////////////
	//	Utilities
	var STG_Get = global.STG_Get = function( obj, key ) {
		STG_Assert( _.isObject(obj) );
		var val = obj[key];
		STG_Assert( !_.isUndefined(val) );
		return val;
	};

	var STG_Q = global.STG_Q = function( q ) {
		var sel = $(q);
		STG_Assert( sel.length === 1 );
		return sel;
	}

	var Report = function( msg ) {
		console.log( msg );
	};

	var ReportError = function( msg ) {
		console.error( msg );
	};
	///////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////
	//	Server Communication
	var STG_ProcessEvents = global.STG_ProcessEvents = _.extend( {}, STG_Events);

	var STG_ServerSend = global.STG_ServerSend = (function(){

		var serverRoutes = (function() {
			var genRoute = function( url, type, dataType  ) {
				dataType = dataType || 'json';
				var contentType = 'application/json';
				return {
					url: 			url,
					type: 			type,
					dataType: 		dataType,
					contentType: 	contentType
				};
			};
			var serverRoutes = {};
			serverRoutes.NEXT_STAGE = 		genRoute( 'nextstage', 		'post' );
			serverRoutes.EXEC_INLINE = 		genRoute( 'execinline', 	'post' );
			serverRoutes.GET_AST = 			genRoute( 'getast', 		'post' );
			serverRoutes.CLOSE_SESSION = 	genRoute( 'closesession', 	'post' );
			return serverRoutes;
		})();

		return function( args ) {

			var routeInf = STG_Get( serverRoutes, args.routeId );
			var ajaxOpts = {
	            type: 			routeInf.type,
	            url: 			STG_Opts.SERVER_IP + '/' + routeInf.url,
	            async: 			args.async,
	            cache: 			false,
	            data: 			args.data,
	            dataType: 		routeInf.dataType,
	            contentType: 	routeInf.contentType,

	            success: function( resp ) { 
	            	var msg = STG_Get( resp, 'msg' );
	            	return args.success( msg );
	            },
	            error: 	function( resp ) {	
	            	return args.fail( resp );
	            }
	        };
	        $.ajax( ajaxOpts );
		};

	})();

	// default communication error behavior
	var onServerCommunicationError = function( resp ) {
		ReportError( 'server communication error: ' + resp.responseText );
	};
	///////////////////////////////////////////////////////////


	var StagedException = function( msg ) {
		this.msg = msg
	};

	var isAstObj = function( astObj ) {
		return _.property( 'type' )( astObj ) === 'Program';
	};

	var mngGetBody = function( node, fromStmt ) {
		if( !isAstObj( node ) )
			return;

		var body = node.body;
		if( body ) {
			if( fromStmt ) {
				return _.toArray( body );
			}else {
				return _.map( body, function( stmt ) {
					return stmt.expression;
				} );
			}
		}
	};

	///////////////////////////////////////////////////////////
	//	Staged Escape Library Function
	(function() {
		var mEscapeArray = function( normalNodes, escapeNodes, fromStmt ) {
			_.each( escapeNodes, function( pair ) {
				var body = mngGetBody( pair.expr, fromStmt );
				if( !body ) {
					throw new StagedException( 'body not found in ast' );
				}
				body.unshift( pair.index, 0 );
				splice.apply( normalNodes, body );
			} );
		}

		var mEscapeNode = function( node, fromStmt ) {
			var body = mngGetBody( node, fromStmt );
			if( !body ) {
				throw new StagedException( 'body not found in ast' );
			}
			return body.length === 1 ? body[0] : body;
		}

		var mEscape = function( fromArray ) {
			return ( fromArray ? mEscapeArray : mEscapeNode )
			    	.apply( undefined, _.toArray(arguments).slice(1) );
		}

		global.meta_escape = mEscape;
	})();
	///////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////
	//	Staged Inline Library Function
	(function() {
		var onServerInlineSuccess = function( resp ) {
			STG_ProcessEvents.trigger( 'inline:success', resp );
		};
		var onServerInlineError = function( resp ) {
			STG_ProcessEvents.trigger( 'inline:error', resp );
		};
		var mInline = function( astObj ) {
			if( !isAstObj( astObj ) ) {
				throw new StagedException( 'trying to inline a non-ast object' );
			}
			var astStr = JSON.stringify( astObj );
			STG_ServerSend( {
				routeId: 	'EXEC_INLINE', 
				data: 		astStr, 
				async: 		false,
				success: 	onServerInlineSuccess, 
				fail: 		onServerInlineError
			} );
		};

		global.inline = mInline;
	})();

	///////////////////////////////////////////////////////////


	// ///////////////////////////////////////////////////////////
	// //	Prettify prints 
	// var STG_PrintAstAsGraph = global.STG_PrintAstAsGraph = (function( ast ) {

	// 	var printWindow = window.open( '', 'print' );
 //                var printLayoutHtml = that.printLayoutTemplate( {  
 //                    content:    formsHtml,
 //                    css:        '',
 //                    title:      'μπλα μπλα μπλα',
 //                    user:       'Τεστόπουλος Γιάννης'
 //                } );
 //                printWindow.document.write( printLayoutHtml );
 //                printWindow.document.close();
 //                printWindow.focus();
 //                $( printWindow ).ready( function() {
 //                    printWindow.print();
 //                } );
	// })();
	// ///////////////////////////////////////////////////////////

} )(window);


