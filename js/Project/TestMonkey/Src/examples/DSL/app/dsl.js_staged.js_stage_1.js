 {
    var DSL_PATH = "Src\\examples\\DSL\\app\\dsl.json";
    function jsonToAst(jsonFilename) {
    function Ast_esc(ast, isStmt) {
    return (isStmt?ast.body[0]:ast.body[0].expression);
    }

    function Ast_GetBody(root) {
    return root.body[0].expression.callee.body.body;
    }

    var dslParser = {parseItems: {show: function (obj) {
    var value = obj.value;
    var whenObj = obj.when;
    return {loc:{start:{line:65, column:12}, end:{line:70, column:13}, source:null}, type:"Program", body:[{loc:{start:{line:66, column:9}, end:{line:70, column:13}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:66, column:9}, end:{line:70, column:9}, source:null}, type:"CallExpression", callee:{loc:{start:{line:66, column:9}, end:{line:70, column:9}, source:null}, type:"FunctionExpression", id:null, params:[], defaults:[], body:{loc:{start:{line:66, column:19}, end:{line:69, column:27}, source:null}, type:"BlockStatement", body:meta_escape( true,[{loc:{start:{line:67, column:9}, end:{line:67, column:23}, source:null}, type:"VariableDeclaration", kind:"var", declarations:[{loc:{start:{line:67, column:13}, end:{line:67, column:48}, source:null}, type:"VariableDeclarator", id:{loc:{start:{line:67, column:13}, end:{line:67, column:48}, source:null}, type:"Identifier", name:"dependency"}, init:{loc:{start:{line:67, column:26}, end:{line:67, column:48}, source:null}, type:"NewExpression", callee:{loc:{start:{line:67, column:30}, end:{line:67, column:40}, source:null}, type:"Identifier", name:"Dependency"}, arguments:[meta_escapejsvalue( value)]}}]},{loc:{start:{line:69, column:9}, end:{line:69, column:27}, source:null}, type:"ReturnStatement", argument:{loc:{start:{line:69, column:16}, end:{line:69, column:26}, source:null}, type:"Identifier", name:"dependency"}}],[{index:1,expr:this.when(whenObj, {loc:{start:{line:68, column:30}, end:{line:68, column:44}, source:null}, type:"Program", body:[{loc:{start:{line:68, column:33}, end:{line:68, column:44}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:68, column:33}, end:{line:68, column:43}, source:null}, type:"Identifier", name:"dependency"}}]})}],true)}, rest:null, generator:false, expression:false}, arguments:[]}}]};
}
,when: function (obj, parent) {
    var value = obj.value;
    var isObj = obj.is;
    return {loc:{start:{line:78, column:12}, end:{line:82, column:21}, source:null}, type:"Program", body:[{loc:{start:{line:79, column:9}, end:{line:82, column:21}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:79, column:9}, end:{line:82, column:19}, source:null}, type:"CallExpression", callee:{loc:{start:{line:79, column:9}, end:{line:82, column:9}, source:null}, type:"FunctionExpression", id:null, params:[{loc:{start:{line:79, column:18}, end:{line:79, column:24}, source:null}, type:"Identifier", name:"parent"}], defaults:[], body:{loc:{start:{line:79, column:25}, end:{line:81, column:52}, source:null}, type:"BlockStatement", body:meta_escape( true,[{loc:{start:{line:80, column:9}, end:{line:80, column:30}, source:null}, type:"VariableDeclaration", kind:"var", declarations:[{loc:{start:{line:80, column:13}, end:{line:80, column:70}, source:null}, type:"VariableDeclarator", id:{loc:{start:{line:80, column:13}, end:{line:80, column:70}, source:null}, type:"Identifier", name:"dependencyTrigger"}, init:{loc:{start:{line:80, column:33}, end:{line:80, column:70}, source:null}, type:"NewExpression", callee:{loc:{start:{line:80, column:37}, end:{line:80, column:54}, source:null}, type:"Identifier", name:"DependencyTrigger"}, arguments:[meta_escapejsvalue( value),{loc:{start:{line:80, column:64}, end:{line:80, column:70}, source:null}, type:"Identifier", name:"parent"}]}}]}],[{index:1,expr:this.is(isObj, {loc:{start:{line:81, column:26}, end:{line:81, column:47}, source:null}, type:"Program", body:[{loc:{start:{line:81, column:29}, end:{line:81, column:47}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:81, column:29}, end:{line:81, column:46}, source:null}, type:"Identifier", name:"dependencyTrigger"}}]})}],true)}, rest:null, generator:false, expression:false}, arguments:meta_escape( true,[],[{index:0,expr:parent}],false)}}]};
}
,is: function (obj, parent) {
    var value = obj.value;
    return {loc:{start:{line:89, column:12}, end:{line:96, column:21}, source:null}, type:"Program", body:[{loc:{start:{line:90, column:9}, end:{line:96, column:21}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:90, column:9}, end:{line:96, column:19}, source:null}, type:"CallExpression", callee:{loc:{start:{line:90, column:9}, end:{line:96, column:9}, source:null}, type:"FunctionExpression", id:null, params:[{loc:{start:{line:90, column:18}, end:{line:90, column:24}, source:null}, type:"Identifier", name:"parent"}], defaults:[], body:{loc:{start:{line:90, column:25}, end:{line:95, column:12}, source:null}, type:"BlockStatement", body:[{loc:{start:{line:91, column:9}, end:{line:91, column:33}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:91, column:9}, end:{line:91, column:32}, source:null}, type:"AssignmentExpression", operator:"=", left:{loc:{start:{line:91, column:9}, end:{line:91, column:22}, source:null}, type:"MemberExpression", object:{loc:{start:{line:91, column:9}, end:{line:91, column:15}, source:null}, type:"Identifier", name:"parent"}, property:{loc:null, type:"Identifier", name:"values"}, computed:false}, right:meta_escapejsvalue( value)}},{loc:{start:{line:92, column:9}, end:{line:92, column:29}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:92, column:9}, end:{line:92, column:26}, source:null}, type:"CallExpression", callee:{loc:{start:{line:92, column:9}, end:{line:92, column:26}, source:null}, type:"MemberExpression", object:{loc:{start:{line:92, column:9}, end:{line:92, column:15}, source:null}, type:"Identifier", name:"parent"}, property:{loc:null, type:"Identifier", name:"addHandler"}, computed:false}, arguments:[]}},{loc:{start:{line:93, column:9}, end:{line:95, column:12}, source:null}, type:"ExpressionStatement", expression:{loc:{start:{line:93, column:9}, end:{line:94, column:112}, source:null}, type:"CallExpression", callee:{loc:{start:{line:93, column:9}, end:{line:93, column:20}, source:null}, type:"MemberExpression", object:{loc:{start:{line:93, column:9}, end:{line:93, column:16}, source:null}, type:"Identifier", name:"console"}, property:{loc:null, type:"Identifier", name:"log"}, computed:false}, arguments:[{loc:{start:{line:94, column:11}, end:{line:94, column:112}, source:null}, type:"CallExpression", callee:{loc:{start:{line:94, column:11}, end:{line:94, column:108}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:11}, end:{line:94, column:103}, source:null}, type:"ArrayExpression", elements:[{loc:{start:{line:94, column:13}, end:{line:94, column:22}, source:null}, type:"Literal", value:"showing"},{loc:{start:{line:94, column:24}, end:{line:94, column:52}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:24}, end:{line:94, column:49}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:24}, end:{line:94, column:41}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:24}, end:{line:94, column:30}, source:null}, type:"Identifier", name:"parent"}, property:{loc:null, type:"Identifier", name:"dependency"}, computed:false}, property:{loc:null, type:"Identifier", name:"element"}, computed:false}, property:{loc:null, type:"Identifier", name:"id"}, computed:false},{loc:{start:{line:94, column:54}, end:{line:94, column:60}, source:null}, type:"Literal", value:"when"},{loc:{start:{line:94, column:62}, end:{line:94, column:79}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:62}, end:{line:94, column:76}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:62}, end:{line:94, column:68}, source:null}, type:"Identifier", name:"parent"}, property:{loc:null, type:"Identifier", name:"element"}, computed:false}, property:{loc:null, type:"Identifier", name:"id"}, computed:false},{loc:{start:{line:94, column:81}, end:{line:94, column:85}, source:null}, type:"Literal", value:"is"},{loc:{start:{line:94, column:87}, end:{line:94, column:100}, source:null}, type:"MemberExpression", object:{loc:{start:{line:94, column:87}, end:{line:94, column:93}, source:null}, type:"Identifier", name:"parent"}, property:{loc:null, type:"Identifier", name:"values"}, computed:false}]}, property:{loc:null, type:"Identifier", name:"join"}, computed:false}, arguments:[{loc:{start:{line:94, column:109}, end:{line:94, column:112}, source:null}, type:"Literal", value:" "}]}]}}]}, rest:null, generator:false, expression:false}, arguments:meta_escape( true,[],[{index:0,expr:parent}],false)}}]};
}
},startParser: function (obj) {
    var showObj = obj.show;
    return this.parseItems.show(showObj);
}
};
    var jsonDsl = read(jsonFilename);
    var dslObj = JSON.parse(jsonDsl);
    return dslParser.startParser(dslObj);
    }

}
inline( jsonToAst(DSL_PATH) );