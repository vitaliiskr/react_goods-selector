(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o.n(c),a=o(2),r=o.n(a),s=o(3),l=o(4),i=o(6),d=o(5),u=(o(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),m=function(e){Object(i.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(s.a)(this,o);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.selectGood=function(t){e.setState({selectedGood:t})},e.removeSelected=function(){e.setState({selectedGood:[]})},e}return Object(l.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Selected good:"," ",t?"".concat(t," is selected"):"No goods selected"),t?n.a.createElement("button",{type:"button",onClick:this.removeSelected},"X"):"",n.a.createElement("ul",{className:"goods"},u.map((function(o){return n.a.createElement("li",{className:"goods__item  ".concat(t===o?"active":""),key:o},o,t!==o?n.a.createElement("button",{type:"button",onClick:function(){return e.selectGood(o)}},"Select"):"")}))))}}]),o}(n.a.Component);r.a.render(n.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,o){e.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.79a43392.chunk.js.map