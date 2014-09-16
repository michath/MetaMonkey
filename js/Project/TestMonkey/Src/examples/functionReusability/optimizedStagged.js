function genMultiParameterOptimizer() {
    var optimizedAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"FunctionExpression", id:null, params:[{loc:null, type:"Identifier", name:"events"},{loc:null, type:"Identifier", name:"args"}], defaults:[], body:{loc:null, type:"BlockStatement", body:[{loc:null, type:"VariableDeclaration", kind:"var", declarations:[{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"ev"}, init:null},{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"i"}, init:{loc:null, type:"UnaryExpression", operator:"-", argument:{loc:null, type:"Literal", value:1}, prefix:true}},{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"l"}, init:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"events"}, property:{loc:null, type:"Identifier", name:"length"}, computed:false}}]},{loc:null, type:"SwitchStatement", discriminant:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"args"}, property:{loc:null, type:"Identifier", name:"length"}, computed:false}, cases:[{loc:null, type:"SwitchCase", test:{loc:null, type:"Literal", value:0}, consequent:[{loc:null, type:"WhileStatement", test:{loc:null, type:"BinaryExpression", operator:"<", left:{loc:null, type:"UpdateExpression", operator:"++", argument:{loc:null, type:"Identifier", name:"i"}, prefix:true}, right:{loc:null, type:"Identifier", name:"l"}}, body:{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"CallExpression", callee:{loc:null, type:"MemberExpression", object:{loc:null, type:"MemberExpression", object:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"ev"}, right:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"events"}, property:{loc:null, type:"Identifier", name:"i"}, computed:true}}, property:{loc:null, type:"Identifier", name:"callback"}, computed:false}, property:{loc:null, type:"Identifier", name:"call"}, computed:false}, arguments:[{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"ev"}, property:{loc:null, type:"Identifier", name:"ctx"}, computed:false}]}}},{loc:null, type:"ReturnStatement", argument:null}]},{loc:null, type:"SwitchCase", test:null, consequent:[{loc:null, type:"WhileStatement", test:{loc:null, type:"BinaryExpression", operator:"<", left:{loc:null, type:"UpdateExpression", operator:"++", argument:{loc:null, type:"Identifier", name:"i"}, prefix:true}, right:{loc:null, type:"Identifier", name:"l"}}, body:{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"CallExpression", callee:{loc:null, type:"MemberExpression", object:{loc:null, type:"MemberExpression", object:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"ev"}, right:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"events"}, property:{loc:null, type:"Identifier", name:"i"}, computed:true}}, property:{loc:null, type:"Identifier", name:"callback"}, computed:false}, property:{loc:null, type:"Identifier", name:"apply"}, computed:false}, arguments:[{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"ev"}, property:{loc:null, type:"Identifier", name:"ctx"}, computed:false},{loc:null, type:"Identifier", name:"args"}]}}},{loc:null, type:"ReturnStatement", argument:null}]}], lexical:false}]}, rest:null, generator:false, expression:false}}]};
    var switchAst = optimizedAst.body[0].expression.body.body[1];
for (var i = 1; i < 6; ++i) {
    var newoptimizedFuncall = switchAst.cases[0];
    newoptimizedFuncall.test.value = i;
    switchAst.cases.splice(i, 0, newoptimizedFuncall);
    }
    return optimizedAst;
}

var triggerEvents = (function (events, args) {
    var ev, i = -1, l = events.length;
    switch (args.length) {
    case 5:
        while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
                return;
    case 5:
        while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
                return;
    case 5:
        while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
                return;
    case 5:
        while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
                return;
    case 5:
        while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
                return;
    case 5:
        while (++i < l)
            (ev = events[i]).callback.call(ev.ctx);
                return;
    default:
        while (++i < l)
            (ev = events[i]).callback.apply(ev.ctx, args);
                return;
    }
}
);
;
