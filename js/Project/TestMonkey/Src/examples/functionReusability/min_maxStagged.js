function genCompare(sign) {
    var arrayCompAst;
    var objCompAst;
    var infCompAst;
    if (sign) {
    arrayCompAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"BinaryExpression", operator:"<", left:{loc:null, type:"Identifier", name:"value"}, right:{loc:null, type:"Identifier", name:"result"}}}]};
    objCompAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"BinaryExpression", operator:"<", left:{loc:null, type:"Identifier", name:"computed"}, right:{loc:null, type:"Identifier", name:"lastComputed"}}}]};
    infCompAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"Identifier", name:"Infinity"}}]};
    } else {
    arrayCompAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"BinaryExpression", operator:">", left:{loc:null, type:"Identifier", name:"value"}, right:{loc:null, type:"Identifier", name:"result"}}}]};
    objCompAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"BinaryExpression", operator:">", left:{loc:null, type:"Identifier", name:"computed"}, right:{loc:null, type:"Identifier", name:"lastComputed"}}}]};
    infCompAst = {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"UnaryExpression", operator:"-", argument:{loc:null, type:"Identifier", name:"Infinity"}, prefix:true}}]};
    }
    return {loc:null, type:"Program", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"FunctionExpression", id:null, params:[{loc:null, type:"Identifier", name:"obj"},{loc:null, type:"Identifier", name:"iteratee"},{loc:null, type:"Identifier", name:"context"}], defaults:[], body:{loc:null, type:"BlockStatement", body:[{loc:null, type:"VariableDeclaration", kind:"var", declarations:[{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"result"}, init:{loc:null, type:"Identifier", name:"Infinity"}},{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"lastComputed"}, init:{loc:null, type:"Identifier", name:"Infinity"}},{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"value"}, init:null},{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"computed"}, init:null}]},{loc:null, type:"IfStatement", test:{loc:null, type:"LogicalExpression", operator:"&&", left:{loc:null, type:"BinaryExpression", operator:"==", left:{loc:null, type:"Identifier", name:"iteratee"}, right:{loc:null, type:"Literal", value:null}}, right:{loc:null, type:"BinaryExpression", operator:"!=", left:{loc:null, type:"Identifier", name:"obj"}, right:{loc:null, type:"Literal", value:null}}}, consequent:{loc:null, type:"BlockStatement", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"obj"}, right:{loc:null, type:"ConditionalExpression", test:{loc:null, type:"BinaryExpression", operator:"===", left:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"obj"}, property:{loc:null, type:"Identifier", name:"length"}, computed:false}, right:{loc:null, type:"UnaryExpression", operator:"+", argument:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"obj"}, property:{loc:null, type:"Identifier", name:"length"}, computed:false}, prefix:true}}, consequent:{loc:null, type:"Identifier", name:"obj"}, alternate:{loc:null, type:"CallExpression", callee:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"_"}, property:{loc:null, type:"Identifier", name:"values"}, computed:false}, arguments:[{loc:null, type:"Identifier", name:"obj"}]}}}},{loc:null, type:"ForStatement", init:{loc:null, type:"VariableDeclaration", kind:"var", declarations:[{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"i"}, init:{loc:null, type:"Literal", value:0}},{loc:null, type:"VariableDeclarator", id:{loc:null, type:"Identifier", name:"length"}, init:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"obj"}, property:{loc:null, type:"Identifier", name:"length"}, computed:false}}]}, test:{loc:null, type:"BinaryExpression", operator:"<", left:{loc:null, type:"Identifier", name:"i"}, right:{loc:null, type:"Identifier", name:"length"}}, update:{loc:null, type:"UpdateExpression", operator:"++", argument:{loc:null, type:"Identifier", name:"i"}, prefix:false}, body:{loc:null, type:"BlockStatement", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"value"}, right:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"obj"}, property:{loc:null, type:"Identifier", name:"i"}, computed:true}}},{loc:null, type:"IfStatement", test:meta_escape( false,arrayCompAst,false), consequent:{loc:null, type:"BlockStatement", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"result"}, right:{loc:null, type:"Identifier", name:"value"}}}]}, alternate:null}]}}]}, alternate:{loc:null, type:"BlockStatement", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"iteratee"}, right:{loc:null, type:"CallExpression", callee:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"_"}, property:{loc:null, type:"Identifier", name:"iteratee"}, computed:false}, arguments:[{loc:null, type:"Identifier", name:"iteratee"},{loc:null, type:"Identifier", name:"context"}]}}},{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"CallExpression", callee:{loc:null, type:"MemberExpression", object:{loc:null, type:"Identifier", name:"_"}, property:{loc:null, type:"Identifier", name:"each"}, computed:false}, arguments:[{loc:null, type:"Identifier", name:"obj"},{loc:null, type:"FunctionExpression", id:null, params:[{loc:null, type:"Identifier", name:"value"},{loc:null, type:"Identifier", name:"index"},{loc:null, type:"Identifier", name:"list"}], defaults:[], body:{loc:null, type:"BlockStatement", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"computed"}, right:{loc:null, type:"CallExpression", callee:{loc:null, type:"Identifier", name:"iteratee"}, arguments:[{loc:null, type:"Identifier", name:"value"},{loc:null, type:"Identifier", name:"index"},{loc:null, type:"Identifier", name:"list"}]}}},{loc:null, type:"IfStatement", test:{loc:null, type:"LogicalExpression", operator:"||", left:meta_escape( false,objCompAst,false), right:{loc:null, type:"LogicalExpression", operator:"&&", left:{loc:null, type:"BinaryExpression", operator:"===", left:{loc:null, type:"Identifier", name:"computed"}, right:meta_escape( false,infCompAst,false)}, right:{loc:null, type:"BinaryExpression", operator:"===", left:{loc:null, type:"Identifier", name:"result"}, right:meta_escape( false,infCompAst,false)}}}, consequent:{loc:null, type:"BlockStatement", body:[{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"result"}, right:{loc:null, type:"Identifier", name:"value"}}},{loc:null, type:"ExpressionStatement", expression:{loc:null, type:"AssignmentExpression", operator:"=", left:{loc:null, type:"Identifier", name:"lastComputed"}, right:{loc:null, type:"Identifier", name:"computed"}}}]}, alternate:null}]}, rest:null, generator:false, expression:false}]}}]}},{loc:null, type:"ReturnStatement", argument:{loc:null, type:"Identifier", name:"result"}}]}, rest:null, generator:false, expression:false}}]};
}

_.max = (function (obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity, value, computed;
    if (iteratee == null && obj != null) {
    obj = obj.length === +obj.length?obj:_.values(obj);
for (var i = 0, length = obj.length; i < length; i++) {
    value = obj[i];
    if (value < result) {
    result = value;
    }
    }
    } else {
    iteratee = _.iteratee(iteratee, context);
    _.each(obj, function (value, index, list) {
    computed = iteratee(value, index, list);
    if (computed < lastComputed || computed === Infinity && result === Infinity) {
    result = value;
    lastComputed = computed;
    }
}
);
    }
    return result;
}
);
;
_.min = (function (obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity, value, computed;
    if (iteratee == null && obj != null) {
    obj = obj.length === +obj.length?obj:_.values(obj);
for (var i = 0, length = obj.length; i < length; i++) {
    value = obj[i];
    if (value > result) {
    result = value;
    }
    }
    } else {
    iteratee = _.iteratee(iteratee, context);
    _.each(obj, function (value, index, list) {
    computed = iteratee(value, index, list);
    if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
    result = value;
    lastComputed = computed;
    }
}
);
    }
    return result;
}
);
;
