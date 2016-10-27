/**
 * Created by na3im on 27/07/2016.
 */
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
        return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/**
 * Created by na3im on 28/08/2016.
 */
$(document).ready(function () {
   
   $('#alert-container')
       .delay(4000)
       .slideUp(500)
});    
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($) {


	//	LOCAL

	if ( $.fn.carouFredSel )
	{
		return;
	}

	$.fn.caroufredsel = $.fn.carouFredSel = function(options, configs)
	{

		//	no element
		if (this.length == 0)
		{
			debug( true, 'No element found for "' + this.selector + '".' );
			return this;
		}

		//	multiple elements
		if (this.length > 1)
		{
			return this.each(function() {
				$(this).carouFredSel(options, configs);
			});
		}


		var $cfs = this,
			$tt0 = this[0],
			starting_position = false;

		if ($cfs.data('_cfs_isCarousel'))
		{
			starting_position = $cfs.triggerHandler('_cfs_triggerEvent', 'currentPosition');
			$cfs.trigger('_cfs_triggerEvent', ['destroy', true]);
		}

		var FN = {};

		FN._init = function(o, setOrig, start)
		{
			o = go_getObject($tt0, o);

			o.items = go_getItemsObject($tt0, o.items);
			o.scroll = go_getScrollObject($tt0, o.scroll);
			o.auto = go_getAutoObject($tt0, o.auto);
			o.prev = go_getPrevNextObject($tt0, o.prev);
			o.next = go_getPrevNextObject($tt0, o.next);
			o.pagination = go_getPaginationObject($tt0, o.pagination);
			o.swipe = go_getSwipeObject($tt0, o.swipe);
			o.mousewheel = go_getMousewheelObject($tt0, o.mousewheel);

			if (setOrig)
			{
				opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
			}

			opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
			opts.d = cf_getDimensions(opts);

			crsl.direction = (opts.direction == 'up' || opts.direction == 'left') ? 'next' : 'prev';

			var	a_itm = $cfs.children(),
				avail_primary = ms_getParentSize($wrp, opts, 'width');

			if (is_true(opts.cookie))
			{
				opts.cookie = 'caroufredsel_cookie_' + conf.serialNumber;
			}

			opts.maxDimension = ms_getMaxDimension(opts, avail_primary);

			//	complement items and sizes
			opts.items = in_complementItems(opts.items, opts, a_itm, start);
			opts[opts.d['width']] = in_complementPrimarySize(opts[opts.d['width']], opts, a_itm);
			opts[opts.d['height']] = in_complementSecondarySize(opts[opts.d['height']], opts, a_itm);

			//	primary size not set for a responsive carousel
			if (opts.responsive)
			{
				if (!is_percentage(opts[opts.d['width']]))
				{
					opts[opts.d['width']] = '100%';
				}
			}

			//	primary size is percentage
			if (is_percentage(opts[opts.d['width']]))
			{
				crsl.upDateOnWindowResize = true;
				crsl.primarySizePercentage = opts[opts.d['width']];
				opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
				if (!opts.items.visible)
				{
					opts.items.visibleConf.variable = true;
				}
			}

			if (opts.responsive)
			{
				opts.usePadding = false;
				opts.padding = [0, 0, 0, 0];
				opts.align = false;
				opts.items.visibleConf.variable = false;
			}
			else
			{
				//	visible-items not set
				if (!opts.items.visible)
				{
					opts = in_complementVisibleItems(opts, avail_primary);
				}

				//	primary size not set -> calculate it or set to "variable"
				if (!opts[opts.d['width']])
				{
					if (!opts.items.visibleConf.variable && is_number(opts.items[opts.d['width']]) && opts.items.filter == '*')
					{
						opts[opts.d['width']] = opts.items.visible * opts.items[opts.d['width']];
						opts.align = false;
					}
					else
					{
						opts[opts.d['width']] = 'variable';
					}
				}
				//	align not set -> set to center if primary size is number
				if (is_undefined(opts.align))
				{
					opts.align = (is_number(opts[opts.d['width']]))
						? 'center'
						: false;
				}
				//	set variabe visible-items
				if (opts.items.visibleConf.variable)
				{
					opts.items.visible = gn_getVisibleItemsNext(a_itm, opts, 0);
				}
			}

			//	set visible items by filter
			if (opts.items.filter != '*' && !opts.items.visibleConf.variable)
			{
				opts.items.visibleConf.org = opts.items.visible;
				opts.items.visible = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
			}

			opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
			opts.items.visibleConf.old = opts.items.visible;

			if (opts.responsive)
			{
				if (!opts.items.visibleConf.min)
				{
					opts.items.visibleConf.min = opts.items.visible;
				}
				if (!opts.items.visibleConf.max)
				{
					opts.items.visibleConf.max = opts.items.visible;
				}
				opts = in_getResponsiveValues(opts, a_itm, avail_primary);
			}
			else
			{
				opts.padding = cf_getPadding(opts.padding);

				if (opts.align == 'top')
				{
					opts.align = 'left';
				}
				else if (opts.align == 'bottom')
				{
					opts.align = 'right';
				}

				switch (opts.align)
				{
					//	align: center, left or right
					case 'center':
					case 'left':
					case 'right':
						if (opts[opts.d['width']] != 'variable')
						{
							opts = in_getAlignPadding(opts, a_itm);
							opts.usePadding = true;
						}
						break;

					//	padding
					default:
						opts.align = false;
						opts.usePadding = (
							opts.padding[0] == 0 && 
							opts.padding[1] == 0 && 
							opts.padding[2] == 0 && 
							opts.padding[3] == 0
						) ? false : true;
						break;
				}
			}

			if (!is_number(opts.scroll.duration))
			{
				opts.scroll.duration = 500;
			}
			if (is_undefined(opts.scroll.items))
			{
				opts.scroll.items = (opts.responsive || opts.items.visibleConf.variable || opts.items.filter != '*') 
					? 'visible'
					: opts.items.visible;
			}

			opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
			opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
			opts.next = $.extend(true, {}, opts.scroll, opts.next);
			opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
			//	swipe and mousewheel extend later on, per direction

			opts.auto = go_complementAutoObject($tt0, opts.auto);
			opts.prev = go_complementPrevNextObject($tt0, opts.prev);
			opts.next = go_complementPrevNextObject($tt0, opts.next);
			opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
			opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
			opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);

			if (opts.synchronise)
			{
				opts.synchronise = cf_getSynchArr(opts.synchronise);
			}


			//	DEPRECATED
			if (opts.auto.onPauseStart)
			{
				opts.auto.onTimeoutStart = opts.auto.onPauseStart;
				deprecated('auto.onPauseStart', 'auto.onTimeoutStart');
			}
			if (opts.auto.onPausePause)
			{
				opts.auto.onTimeoutPause = opts.auto.onPausePause;
				deprecated('auto.onPausePause', 'auto.onTimeoutPause');
			}
			if (opts.auto.onPauseEnd)
			{
				opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
				deprecated('auto.onPauseEnd', 'auto.onTimeoutEnd');
			}
			if (opts.auto.pauseDuration)
			{
				opts.auto.timeoutDuration = opts.auto.pauseDuration;
				deprecated('auto.pauseDuration', 'auto.timeoutDuration');
			}
			//	/DEPRECATED


		};	//	/init


		FN._build = function() {
			$cfs.data('_cfs_isCarousel', true);

			var a_itm = $cfs.children(),
				orgCSS = in_mapCss($cfs, ['textAlign', 'float', 'position', 'top', 'right', 'bottom', 'left', 'zIndex', 'width', 'height', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft']),
				newPosition = 'relative';

			switch (orgCSS.position)
			{
				case 'absolute':
				case 'fixed':
					newPosition = orgCSS.position;
					break;
			}

			if (conf.wrapper == 'parent')
			{
				sz_storeOrigCss($wrp);
			}
			else
			{
				$wrp.css(orgCSS);
			}
			$wrp.css({
				'overflow'		: 'hidden',
				'position'		: newPosition
			});

			sz_storeOrigCss($cfs);
			$cfs.data('_cfs_origCssZindex', orgCSS.zIndex);
			$cfs.css({
				'textAlign'		: 'left',
				'float'			: 'none',
				'position'		: 'absolute',
				'top'			: 0,
				'right'			: 'auto',
				'bottom'		: 'auto',
				'left'			: 0,
				'marginTop'		: 0,
				'marginRight'	: 0,
				'marginBottom'	: 0,
				'marginLeft'	: 0
			});

			sz_storeMargin(a_itm, opts);
			sz_storeOrigCss(a_itm);
			if (opts.responsive)
			{
				sz_setResponsiveSizes(opts, a_itm);
			}

		};	//	/build


		FN._bind_events = function() {
			FN._unbind_events();


			//	stop event
			$cfs.bind(cf_e('stop', conf), function(e, imm) {
				e.stopPropagation();

				//	button
				if (!crsl.isStopped)
				{
					if (opts.auto.button)
					{
						opts.auto.button.addClass(cf_c('stopped', conf));
					}
				}

				//	set stopped
				crsl.isStopped = true;

				if (opts.auto.play)
				{
					opts.auto.play = false;
					$cfs.trigger(cf_e('pause', conf), imm);
				}
				return true;
			});


			//	finish event
			$cfs.bind(cf_e('finish', conf), function(e) {
				e.stopPropagation();
				if (crsl.isScrolling)
				{
					sc_stopScroll(scrl);
				}
				return true;
			});


			//	pause event
			$cfs.bind(cf_e('pause', conf), function(e, imm, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	immediately pause
				if (imm && crsl.isScrolling)
				{
					scrl.isStopped = true;
					var nst = getTime() - scrl.startTime;
					scrl.duration -= nst;
					if (scrl.pre)
					{
						scrl.pre.duration -= nst;
					}
					if (scrl.post)
					{
						scrl.post.duration -= nst;
					}
					sc_stopScroll(scrl, false);
				}

				//	update remaining pause-time
				if (!crsl.isPaused && !crsl.isScrolling)
				{
					if (res)
					{
						tmrs.timePassed += getTime() - tmrs.startTime;
					}
				}

				//	button
				if (!crsl.isPaused)
				{
					if (opts.auto.button)
					{
						opts.auto.button.addClass(cf_c('paused', conf));
					}
				}

				//	set paused
				crsl.isPaused = true;

				//	pause pause callback
				if (opts.auto.onTimeoutPause)
				{
					var dur1 = opts.auto.timeoutDuration - tmrs.timePassed,
						perc = 100 - Math.ceil( dur1 * 100 / opts.auto.timeoutDuration );

					opts.auto.onTimeoutPause.call($tt0, perc, dur1);
				}
				return true;
			});


			//	play event
			$cfs.bind(cf_e('play', conf), function(e, dir, del, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	sort params
				var v = [dir, del, res],
					t = ['string', 'number', 'boolean'],
					a = cf_sortParams(v, t);

				dir = a[0];
				del = a[1];
				res = a[2];

				if (dir != 'prev' && dir != 'next')
				{
					dir = crsl.direction;
				}
				if (!is_number(del))
				{
					del = 0;
				}
				if (!is_boolean(res))
				{
					res = false;
				}

				//	stopped?
				if (res)
				{
					crsl.isStopped = false;
					opts.auto.play = true;
				}
				if (!opts.auto.play)
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped: Not scrolling.');
				}

				//	button
				if (crsl.isPaused)
				{
					if (opts.auto.button)
					{
						opts.auto.button.removeClass(cf_c('stopped', conf));
						opts.auto.button.removeClass(cf_c('paused', conf));
					}
				}

				//	set playing
				crsl.isPaused = false;
				tmrs.startTime = getTime();

				//	timeout the scrolling
				var dur1 = opts.auto.timeoutDuration + del;
					dur2 = dur1 - tmrs.timePassed;
					perc = 100 - Math.ceil(dur2 * 100 / dur1);

				if (opts.auto.progress)
				{
					tmrs.progress = setInterval(function() {
						var pasd = getTime() - tmrs.startTime + tmrs.timePassed,
							perc = Math.ceil(pasd * 100 / dur1);
						opts.auto.progress.updater.call(opts.auto.progress.bar[0], perc);
					}, opts.auto.progress.interval);
				}

				tmrs.auto = setTimeout(function() {
					if (opts.auto.progress)
					{
						opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100);
					}
					if (opts.auto.onTimeoutEnd)
					{
						opts.auto.onTimeoutEnd.call($tt0, perc, dur2);
					}
					if (crsl.isScrolling)
					{
						$cfs.trigger(cf_e('play', conf), dir);
					}
					else
					{
						$cfs.trigger(cf_e(dir, conf), opts.auto);
					}
				}, dur2);

				//	pause start callback
				if (opts.auto.onTimeoutStart)
				{
					opts.auto.onTimeoutStart.call($tt0, perc, dur2);
				}

				return true;
			});


			//	resume event
			$cfs.bind(cf_e('resume', conf), function(e) {
				e.stopPropagation();
				if (scrl.isStopped)
				{
					scrl.isStopped = false;
					crsl.isPaused = false;
					crsl.isScrolling = true;
					scrl.startTime = getTime();
					sc_startScroll(scrl, conf);
				}
				else
				{
					$cfs.trigger(cf_e('play', conf));
				}
				return true;
			});


			//	prev + next events
			$cfs.bind(cf_e('prev', conf)+' '+cf_e('next', conf), function(e, obj, num, clb, que) {
				e.stopPropagation();

				//	stopped or hidden carousel, don't scroll, don't queue
				if (crsl.isStopped || $cfs.is(':hidden'))
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped or hidden: Not scrolling.');
				}

				//	not enough items
				var minimum = (is_number(opts.items.minimum)) ? opts.items.minimum : opts.items.visible + 1;
				if (minimum > itms.total)
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');
				}

				//	get config
				var v = [obj, num, clb, que],
					t = ['object', 'number/string', 'function', 'boolean'],
					a = cf_sortParams(v, t);

				obj = a[0];
				num = a[1];
				clb = a[2];
				que = a[3];

				var eType = e.type.slice(conf.events.prefix.length);

				if (!is_object(obj))
				{
					obj = {};
				}
				if (is_function(clb))
				{
					obj.onAfter = clb;
				}
				if (is_boolean(que))
				{
					obj.queue = que;
				}
				obj = $.extend(true, {}, opts[eType], obj);

				//	test conditions callback
				if (obj.conditions && !obj.conditions.call($tt0, eType))
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Callback "conditions" returned false.');
				}

				if (!is_number(num))
				{
					if (opts.items.filter != '*')
					{
						num = 'visible';
					}
					else
					{
						var arr = [num, obj.items, opts[eType].items];
						for (var a = 0, l = arr.length; a < l; a++)
						{
							if (is_number(arr[a]) || arr[a] == 'page' || arr[a] == 'visible') {
								num = arr[a];
								break;
							}
						}
					}
					switch(num) {
						case 'page':
							e.stopImmediatePropagation();
							return $cfs.triggerHandler(cf_e(eType+'Page', conf), [obj, clb]);
							break;

						case 'visible':
							if (!opts.items.visibleConf.variable && opts.items.filter == '*')
							{
								num = opts.items.visible;
							}
							break;
					}
				}

				//	resume animation, add current to queue
				if (scrl.isStopped)
				{
					$cfs.trigger(cf_e('resume', conf));
					$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel resumed scrolling.');
				}

				//	queue if scrolling
				if (obj.duration > 0)
				{
					if (crsl.isScrolling)
					{
						if (obj.queue)
						{
							if (obj.queue == 'last')
							{
								queu = [];
							}
							if (obj.queue != 'first' || queu.length == 0)
							{
								$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
							}
						}
						e.stopImmediatePropagation();
						return debug(conf, 'Carousel currently scrolling.');
					}
				}

				tmrs.timePassed = 0;
				$cfs.trigger(cf_e('slide_'+eType, conf), [obj, num]);

				//	synchronise
				if (opts.synchronise)
				{
					var s = opts.synchronise,
						c = [obj, num];

					for (var j = 0, l = s.length; j < l; j++) {
						var d = eType;
						if (!s[j][2])
						{
							d = (d == 'prev') ? 'next' : 'prev';
						}
						if (!s[j][1])
						{
							c[0] = s[j][0].triggerHandler('_cfs_triggerEvent', ['configuration', d]);
						}
						c[1] = num + s[j][3];
						s[j][0].trigger('_cfs_triggerEvent', ['slide_'+d, c]);
					}
				}
				return true;
			});


			//	prev event
			$cfs.bind(cf_e('slide_prev', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at start, scroll to end
				if (!opts.circular)
				{
					if (itms.first == 0)
					{
						if (opts.infinite)
						{
							$cfs.trigger(cf_e('next', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (!is_number(nI))
				{
					if (opts.items.visibleConf.variable)
					{
						nI = gn_getVisibleItemsPrev(a_itm, opts, itms.total-1);
					}
					else if (opts.items.filter != '*')
					{
						var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsPrevFilter(a_itm, opts, itms.total-1, xI);
					}
					else
					{
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				//	prevent non-circular from scrolling to far
				if (!opts.circular)
				{
					if (itms.total - nI < itms.first)
					{
						nI = itms.total - itms.first;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable)
				{
					var vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
					if (opts.items.visible+nI <= vI && nI < itms.total)
					{
						nI++;
						vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
					}
					opts.items.visible = vI;
				}
				else if (opts.items.filter != '*')
				{
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, itms.total-nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0)
				{
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items backward.');


				//	save new config
				itms.first += nI;
				while (itms.first >= itms.total)
				{
					itms.first -= itms.total;
				}

				//	non-circular callback
				if (!opts.circular)
				{
					if (itms.first == 0 && sO.onEnd)
					{
						sO.onEnd.call($tt0, 'prev');
					}
					if (!opts.infinite)
					{
						nv_enableNavi(opts, itms.first, conf);
					}
				}

				//	rearrange items
				$cfs.children().slice(itms.total-nI, itms.total).prependTo($cfs);
				if (itms.total < opts.items.visible + nI)
				{
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					i_old = gi_getOldItemsPrev(a_itm, opts, nI),
					i_new = gi_getNewItemsPrev(a_itm, opts),
					i_cur_l = a_itm.eq(nI-1),
					i_old_l = i_old.last(),
					i_new_l = i_new.last();

				sz_resetMargin(a_itm, opts);

				var pL = 0,
					pR = 0;

				if (opts.align)
				{
					var p = cf_getAlignPadding(i_new, opts);
					pL = p[0];
					pR = p[1];
				}
				var oL = (pL < 0) ? opts.padding[opts.d[3]] : 0;

				//	hide items for fx directscroll
				var hiddenitems = false,
					i_skp = $();
				if (opts.items.visible < nI)
				{
					i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
					if (sO.fx == 'directscroll')
					{
						var orgW = opts.items[opts.d['width']];
						hiddenitems = i_skp;
						i_cur_l = i_new_l;
						sc_hideHiddenItems(hiddenitems);
						opts.items[opts.d['width']] = 'variable';
					}
				}

				//	save new sizes
				var $cf2 = false,
					i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
					i_siz_vis = 0,
					a_cfs = {},
					a_wsz = {},
					a_cur = {},
					a_old = {},
					a_new = {},
					a_lef = {},
					a_lef_vis = {},
					a_dur = sc_getDuration(sO, opts, nI, i_siz);

				switch(sO.fx)
				{
					case 'cover':
					case 'cover-fade':
						i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visible), opts, 'width');
						break;
				}

				if (hiddenitems)
				{
					opts.items[opts.d['width']] = orgW;
				}

				sz_resetMargin(a_itm, opts, true);
				if (pR >= 0)
				{
					sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);
				}
				if (pL >= 0)
				{
					sz_resetMargin(i_cur_l, opts, opts.padding[opts.d[3]]);
				}

				if (opts.align)
				{
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				a_lef[opts.d['left']] = -(i_siz - oL);
				a_lef_vis[opts.d['left']] = -(i_siz_vis - oL);
				a_wsz[opts.d['left']] = w_siz[opts.d['width']];

				//	scrolling functions
				var _s_wrapper = function() {},
					_a_wrapper = function() {},
					_s_paddingold = function() {},
					_a_paddingold = function() {},
					_s_paddingnew = function() {},
					_a_paddingnew = function() {},
					_s_paddingcur = function() {},
					_a_paddingcur = function() {},
					_onafter = function() {},
					_moveitems = function() {},
					_position = function() {};

				//	clone carousel
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
					case 'uncover':
					case 'uncover-fade':
						$cf2 = $cfs.clone(true).appendTo($wrp);
						break;
				}
				switch(sO.fx)
				{
					case 'crossfade':
					case 'uncover':
					case 'uncover-fade':
						$cf2.children().slice(0, nI).remove();
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;

					case 'cover':
					case 'cover-fade':
						$cf2.children().slice(opts.items.visible).remove();
						$cf2.css(a_lef_vis);
						break;
				}

				$cfs.css(a_lef);

				//	reset all scrolls
				scrl = sc_setScroll(a_dur, sO.easing, conf);

				//	animate / set carousel
				a_cfs[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

				//	animate / set wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
				{
					_s_wrapper = function() {
						$wrp.css(w_siz);
					};
					_a_wrapper = function() {
						scrl.anims.push([$wrp, w_siz]);
					};
				}

				//	animate / set items
				if (opts.usePadding)
				{
					if (i_new_l.not(i_cur_l).length)
					{
			 			a_cur[opts.d['marginRight']] = i_cur_l.data('_cfs_origCssMargin');

						if (pL < 0)
						{
							i_cur_l.css(a_cur);
						}
						else
						{
							_s_paddingcur = function() {
								i_cur_l.css(a_cur);
							};
							_a_paddingcur = function() {
								scrl.anims.push([i_cur_l, a_cur]);
							};
						}
					}
					switch(sO.fx)
					{
						case 'cover':
						case 'cover-fade':
							$cf2.children().eq(nI-1).css(a_cur);
							break;
					}

					if (i_new_l.not(i_old_l).length)
					{
						a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
						_s_paddingold = function() {
							i_old_l.css(a_old);
						};
						_a_paddingold = function() {
							scrl.anims.push([i_old_l, a_old]);
						};
					}

					if (pR >= 0)
					{
						a_new[opts.d['marginRight']] = i_new_l.data('_cfs_origCssMargin') + opts.padding[opts.d[1]];
						_s_paddingnew = function() {
							i_new_l.css(a_new);
						};
						_a_paddingnew = function() {
							scrl.anims.push([i_new_l, a_new]);
						};
					}
				}

				//	set position
				_position = function() {
					$cfs.css(a_cfs);
				};


				var overFill = opts.items.visible+nI-itms.total;

				//	rearrange items
				_moveitems = function() {
					if (overFill > 0)
					{
						$cfs.children().slice(itms.total).remove();
						i_old = $( $cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat( $cfs.children().slice(0, overFill).get() ) );
					}
					sc_showHiddenItems(hiddenitems);

					if (opts.usePadding)
					{
						var l_itm = $cfs.children().eq(opts.items.visible+nI-1);
						l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
					}
				};


				var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'prev', a_dur, w_siz);

				//	fire onAfter callbacks
				_onafter = function() {
					sc_afterScroll($cfs, $cf2, sO);
					crsl.isScrolling = false;
					clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
					queu = sc_fireQueue($cfs, queu, conf);

					if (!crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
				};

				//	fire onBefore callback
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

				switch(sO.fx)
				{
					case 'none':
						$cfs.css(a_cfs);
						_s_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						_onafter();
						break;

					case 'fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
							_s_wrapper();
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							scrl = sc_setScroll(a_dur, sO.easing, conf);
							scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
							sc_startScroll(scrl, conf);
						}]);
						break;

					case 'crossfade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'cover':
						scrl.anims.push([$cf2, a_cfs, function() {
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						break;

					case 'cover-fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }]);
						scrl.anims.push([$cf2, a_cfs, function() {
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						break;

					case 'uncover':
						scrl.anims.push([$cf2, a_wsz, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'uncover-fade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cfs, { 'opacity': 1 }]);
						scrl.anims.push([$cf2, a_wsz, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					default:
						scrl.anims.push([$cfs, a_cfs, function() {
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						_a_paddingold();
						_a_paddingnew();
						_a_paddingcur();
						break;
				}

				sc_startScroll(scrl, conf);
				cf_setCookie(opts.cookie, $cfs, conf);

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});


			//	next event
			$cfs.bind(cf_e('slide_next', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at end, scroll to start
				if (!opts.circular)
				{
					if (itms.first == opts.items.visible)
					{
						if (opts.infinite)
						{
							$cfs.trigger(cf_e('prev', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (!is_number(nI))
				{
					if (opts.items.filter != '*')
					{
						var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsNextFilter(a_itm, opts, 0, xI);
					}
					else
					{
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				var lastItemNr = (itms.first == 0) ? itms.total : itms.first;

				//	prevent non-circular from scrolling to far
				if (!opts.circular)
				{
					if (opts.items.visibleConf.variable)
					{
						var vI = gn_getVisibleItemsNext(a_itm, opts, nI),
							xI = gn_getVisibleItemsPrev(a_itm, opts, lastItemNr-1);
					}
					else
					{
						var vI = opts.items.visible,
							xI = opts.items.visible;
					}

					if (nI + vI > lastItemNr)
					{
						nI = lastItemNr - xI;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable)
				{
					var vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
					while (opts.items.visible-nI >= vI && nI < itms.total)
					{
						nI++;
						vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
					}
					opts.items.visible = vI;
				}
				else if (opts.items.filter != '*')
				{
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0)
				{
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items forward.');


				//	save new config
				itms.first -= nI;
				while (itms.first < 0)
				{
					itms.first += itms.total;
				}

				//	non-circular callback
				if (!opts.circular)
				{
					if (itms.first == opts.items.visible && sO.onEnd)
					{
						sO.onEnd.call($tt0, 'next');
					}
					if (!opts.infinite)
					{
						nv_enableNavi(opts, itms.first, conf);
					}
				}

				//	rearrange items
				if (itms.total < opts.items.visible+nI)
				{
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					i_old = gi_getOldItemsNext(a_itm, opts),
					i_new = gi_getNewItemsNext(a_itm, opts, nI),
					i_cur_l = a_itm.eq(nI-1),
					i_old_l = i_old.last(),
					i_new_l = i_new.last();

				sz_resetMargin(a_itm, opts);

				var pL = 0,
					pR = 0;

				if (opts.align)
				{
					var p = cf_getAlignPadding(i_new, opts);
					pL = p[0];
					pR = p[1];
				}

				//	hide items for fx directscroll
				var hiddenitems = false,
					i_skp = $();
				if (opts.items.visibleConf.old < nI)
				{
					i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
					if (sO.fx == 'directscroll')
					{
						var orgW = opts.items[opts.d['width']];
						hiddenitems = i_skp;
						i_cur_l = i_old_l;
						sc_hideHiddenItems(hiddenitems);
						opts.items[opts.d['width']] = 'variable';
					}
				}

				//	save new sizes
				var $cf2 = false,
					i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
					i_siz_vis = 0,
					a_cfs = {},
					a_cfs_vis = {},
					a_cur = {},
					a_old = {},
					a_lef = {},
					a_dur = sc_getDuration(sO, opts, nI, i_siz);

				switch(sO.fx)
				{
					case 'uncover':
					case 'uncover-fade':
						i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visibleConf.old), opts, 'width');
						break;
				}

				if (hiddenitems)
				{
					opts.items[opts.d['width']] = orgW;
				}

				if (opts.align)
				{
					if (opts.padding[opts.d[1]] < 0)
					{
						opts.padding[opts.d[1]] = 0;
					}
				}
				sz_resetMargin(a_itm, opts, true);
				sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);

				if (opts.align)
				{
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				a_lef[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

				//	scrolling functions
				var _s_wrapper = function() {},
					_a_wrapper = function() {},
					_s_paddingold = function() {},
					_a_paddingold = function() {},
					_s_paddingcur = function() {},
					_a_paddingcur = function() {},
					_onafter = function() {},
					_moveitems = function() {},
					_position = function() {};

				//	clone carousel
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
					case 'uncover':
					case 'uncover-fade':
						$cf2 = $cfs.clone(true).appendTo($wrp);
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;
				}
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
						$cfs.css('zIndex', 1);
						$cf2.css('zIndex', 0);
						break;
				}

				//	reset all scrolls
				scrl = sc_setScroll(a_dur, sO.easing, conf);

				//	animate / set carousel
				a_cfs[opts.d['left']] = -i_siz;
				a_cfs_vis[opts.d['left']] = -i_siz_vis;

				if (pL < 0)
				{
					a_cfs[opts.d['left']] += pL;
				}

				//	animate / set wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
				{
					_s_wrapper = function() {
						$wrp.css(w_siz);
					};
					_a_wrapper = function() {
						scrl.anims.push([$wrp, w_siz]);
					};
				}

				//	animate / set items
				if (opts.usePadding)
				{
					var i_new_l_m = i_new_l.data('_cfs_origCssMargin');

					if (pR >= 0)
					{
						i_new_l_m += opts.padding[opts.d[1]];
					}
					i_new_l.css(opts.d['marginRight'], i_new_l_m);

					if (i_cur_l.not(i_old_l).length)
					{
						a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
					}
					_s_paddingold = function() {
						i_old_l.css(a_old);
					};
					_a_paddingold = function() {
						scrl.anims.push([i_old_l, a_old]);
					};

					var i_cur_l_m = i_cur_l.data('_cfs_origCssMargin');
					if (pL > 0)
					{
						i_cur_l_m += opts.padding[opts.d[3]];
					}

					a_cur[opts.d['marginRight']] = i_cur_l_m;

					_s_paddingcur = function() {
						i_cur_l.css(a_cur);
					};
					_a_paddingcur = function() {
						scrl.anims.push([i_cur_l, a_cur]);
					};
				}

				//	set position
				_position = function() {
					$cfs.css(a_lef);
				};


				var overFill = opts.items.visible+nI-itms.total;

				//	rearrange items
				_moveitems = function() {
					if (overFill > 0)
					{
						$cfs.children().slice(itms.total).remove();
					}
					var l_itm = $cfs.children().slice(0, nI).appendTo($cfs).last();
					if (overFill > 0)
					{
						i_new = gi_getCurrentItems(a_itm, opts);
					}
					sc_showHiddenItems(hiddenitems);

					if (opts.usePadding)
					{
						if (itms.total < opts.items.visible+nI) {
							var i_cur_l = $cfs.children().eq(opts.items.visible-1);
							i_cur_l.css(opts.d['marginRight'], i_cur_l.data('_cfs_origCssMargin') + opts.padding[opts.d[1]]);
						}
						l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
					}
				};


				var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'next', a_dur, w_siz);

				//	fire onAfter callbacks
				_onafter = function() {
					$cfs.css('zIndex', $cfs.data('_cfs_origCssZindex'));
					sc_afterScroll($cfs, $cf2, sO);
					crsl.isScrolling = false;
					clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
					queu = sc_fireQueue($cfs, queu, conf);
					
					if (!crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
				};

				//	fire onBefore callbacks
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

				switch(sO.fx)
				{
					case 'none':
						$cfs.css(a_cfs);
						_s_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						_onafter();
						break;

					case 'fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
							_s_wrapper();
							_s_paddingold();
							_s_paddingcur();
							_position();
							_moveitems();
							scrl = sc_setScroll(a_dur, sO.easing, conf);
							scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
							sc_startScroll(scrl, conf);
						}]);
						break;

					case 'crossfade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'cover':
						$cfs.css(opts.d['left'], $wrp[opts.d['width']]());
						scrl.anims.push([$cfs, a_lef, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_moveitems();
						break;

					case 'cover-fade':
						$cfs.css(opts.d['left'], $wrp[opts.d['width']]());
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, a_lef, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_moveitems();
						break;

					case 'uncover':
						scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'uncover-fade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cfs, { 'opacity': 1 }]);
						scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					default:
						scrl.anims.push([$cfs, a_cfs, function() {
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						_a_paddingold();
						_a_paddingcur();
						break;
				}

				sc_startScroll(scrl, conf);
				cf_setCookie(opts.cookie, $cfs, conf);

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});


			//	slideTo event
			$cfs.bind(cf_e('slideTo', conf), function(e, num, dev, org, obj, dir, clb) {
				e.stopPropagation();

				var v = [num, dev, org, obj, dir, clb],
					t = ['string/number/object', 'number', 'boolean', 'object', 'string', 'function'],
					a = cf_sortParams(v, t);

				obj = a[3];
				dir = a[4];
				clb = a[5];

				num = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs);

				if (num == 0)
				{
					return false;
				}
				if (!is_object(obj))
				{
					obj = false;
				}

				if (dir != 'prev' && dir != 'next')
				{
					if (opts.circular)
					{
						dir = (num <= itms.total / 2) ? 'next' : 'prev';
					}
					else
					{
						dir = (itms.first == 0 || itms.first > num) ? 'next' : 'prev';
					}
				}

				if (dir == 'prev')
				{
					num = itms.total-num;
				}
				$cfs.trigger(cf_e(dir, conf), [obj, num, clb]);

				return true;
			});


			//	prevPage event
			$cfs.bind(cf_e('prevPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur-1, obj, 'prev', clb]);
			});


			//	nextPage event
			$cfs.bind(cf_e('nextPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur+1, obj, 'next', clb]);
			});


			//	slideToPage event
			$cfs.bind(cf_e('slideToPage', conf), function(e, pag, obj, dir, clb) {
				e.stopPropagation();
				if (!is_number(pag))
				{
					pag = $cfs.triggerHandler(cf_e('currentPage', conf));
				}
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total / ipp)-1;

				if (pag < 0)
				{
					pag = max;
				}
				if (pag > max)
				{
					pag = 0;
				}
				return $cfs.triggerHandler(cf_e('slideTo', conf), [pag*ipp, 0, true, obj, dir, clb]);
			});

			//	jumpToStart event
			$cfs.bind(cf_e('jumpToStart', conf), function(e, s) {
				e.stopPropagation();
				if (s)
				{
					s = gn_getItemIndex(s, 0, true, itms, $cfs);
				}
				else
				{
					s = 0;
				}

				s += itms.first;
				if (s != 0)
				{
					if (itms.total > 0)
					{
						while (s > itms.total)
						{
							s -= itms.total;
						}
					}
					$cfs.prepend($cfs.children().slice(s, itms.total));
				}
				return true;
			});


			//	synchronise event
			$cfs.bind(cf_e('synchronise', conf), function(e, s) {
				e.stopPropagation();
				if (s)
				{
					s = cf_getSynchArr(s);
				}
				else if (opts.synchronise)
				{
					s = opts.synchronise;
				}
				else
				{
					return debug(conf, 'No carousel to synchronise.');
				}

				var n = $cfs.triggerHandler(cf_e('currentPosition', conf)),
					x = true;

				for (var j = 0, l = s.length; j < l; j++)
				{
					if (!s[j][0].triggerHandler(cf_e('slideTo', conf), [n, s[j][3], true]))
					{
						x = false;
					}
				}
				return x;
			});


			//	queue event
			$cfs.bind(cf_e('queue', conf), function(e, dir, opt) {
				e.stopPropagation();
				if (is_function(dir))
				{
					dir.call($tt0, queu);
				}
				else if (is_array(dir))
				{
					queu = dir;
				}
				else if (!is_undefined(dir))
				{
					queu.push([dir, opt]);
				}
				return queu;
			});


			//	insertItem event
			$cfs.bind(cf_e('insertItem', conf), function(e, itm, num, org, dev) {
				e.stopPropagation();

				var v = [itm, num, org, dev],
					t = ['string/object', 'string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);

				itm = a[0];
				num = a[1];
				org = a[2];
				dev = a[3];

				if (is_object(itm) && !is_jquery(itm))
				{ 
					itm = $(itm);
				}
				else if (is_string(itm))
				{
					itm = $(itm);
				}
				if (!is_jquery(itm) || itm.length == 0)
				{
					return debug(conf, 'Not a valid object.');
				}

				if (is_undefined(num))
				{
					num = 'end';
				}

				sz_storeMargin(itm, opts);
				sz_storeOrigCss(itm);

				var orgNum = num,
					before = 'before';

				if (num == 'end')
				{
					if (org)
					{
						if (itms.first == 0)
						{
							num = itms.total-1;
							before = 'after';
						}
						else
						{
							num = itms.first;
							itms.first += itm.length;
						}
						if (num < 0)
						{
							num = 0;
						}
					}
					else
					{
						num = itms.total-1;
						before = 'after';
					}
				}
				else
				{
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
				}

				var $cit = $cfs.children().eq(num);
				if ($cit.length)
				{
					$cit[before](itm);
				}
				else
				{
					debug(conf, 'Correct insert-position not found! Appending item to the end.');
					$cfs.append(itm);
				}

				if (orgNum != 'end' && !org)
				{
					if (num < itms.first)
					{
						itms.first += itm.length;
					}
				}
				itms.total = $cfs.children().length;
				if (itms.first >= itms.total)
				{
					itms.first -= itms.total;
				}

				$cfs.trigger(cf_e('updateSizes', conf));
				$cfs.trigger(cf_e('linkAnchors', conf));

				return true;
			});


			//	removeItem event
			$cfs.bind(cf_e('removeItem', conf), function(e, num, org, dev) {
				e.stopPropagation();

				var v = [num, org, dev],
					t = ['string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);

				num = a[0];
				org = a[1];
				dev = a[2];

				var removed = false;

				if (num instanceof $ && num.length > 1)
				{
					$removed = $();
					num.each(function(i, el) {
						var $rem = $cfs.trigger(cf_e('removeItem', conf), [$(this), org, dev]);
						if ( $rem ) 
						{
							$removed = $removed.add($rem);
						}
					});
					return $removed;
				}

				if (is_undefined(num) || num == 'end')
				{
					$removed = $cfs.children().last();
				}
				else
				{
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
					var $removed = $cfs.children().eq(num);
					if ( $removed.length )
					{
						if (num < itms.first)
						{
							itms.first -= $removed.length;
						}
					}
				}
				if ( $removed && $removed.length )
				{
					$removed.detach();
					itms.total = $cfs.children().length;
					$cfs.trigger(cf_e('updateSizes', conf));
				}

				return $removed;
			});


			//	onBefore and onAfter event
			$cfs.bind(cf_e('onBefore', conf)+' '+cf_e('onAfter', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length);
				if (is_array(fn))
				{
					clbk[eType] = fn;
				}
				if (is_function(fn))
				{
					clbk[eType].push(fn);
				}
				return clbk[eType];
			});


			//	currentPosition event
			$cfs.bind(cf_e('currentPosition', conf), function(e, fn) {
				e.stopPropagation();
				if (itms.first == 0)
				{
					var val = 0;
				}
				else
				{
					var val = itms.total - itms.first;
				}
				if (is_function(fn))
				{
					fn.call($tt0, val);
				}
				return val;
			});


			//	currentPage event
			$cfs.bind(cf_e('currentPage', conf), function(e, fn) {
				e.stopPropagation();
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total/ipp-1),
					nr;
				if (itms.first == 0)
				{
					nr = 0;
				}
				else if (itms.first < itms.total % ipp)
				{
					nr = 0;
				}
				else if (itms.first == ipp && !opts.circular)
				{
					nr = max;
				}
				else 
				{
					 nr = Math.round((itms.total-itms.first)/ipp);
				}
				if (nr < 0)
				{
					nr = 0;
				}
				if (nr > max)
				{
					nr = max;
				}
				if (is_function(fn))
				{
					fn.call($tt0, nr);
				}
				return nr;
			});


			//	currentVisible event
			$cfs.bind(cf_e('currentVisible', conf), function(e, fn) {
				e.stopPropagation();
				var $i = gi_getCurrentItems($cfs.children(), opts);
				if (is_function(fn))
				{
					fn.call($tt0, $i);
				}
				return $i;
			});


			//	slice event
			$cfs.bind(cf_e('slice', conf), function(e, f, l, fn) {
				e.stopPropagation();

				if (itms.total == 0)
				{
					return false;
				}

				var v = [f, l, fn],
					t = ['number', 'number', 'function'],
					a = cf_sortParams(v, t);

				f = (is_number(a[0])) ? a[0] : 0;
				l = (is_number(a[1])) ? a[1] : itms.total;
				fn = a[2];

				f += itms.first;
				l += itms.first;

				if (items.total > 0)
				{
					while (f > itms.total)
					{
						f -= itms.total;
					}
					while (l > itms.total)
					{
						l -= itms.total;
					}
					while (f < 0)
					{
						f += itms.total;
					}
					while (l < 0)
					{
						l += itms.total;
					}
				}
				var $iA = $cfs.children(),
					$i;

				if (l > f)
				{
					$i = $iA.slice(f, l);
				}
				else
				{
					$i = $( $iA.slice(f, itms.total).get().concat( $iA.slice(0, l).get() ) );
				}

				if (is_function(fn))
				{
					fn.call($tt0, $i);
				}
				return $i;
			});


			//	isPaused, isStopped and isScrolling events
			$cfs.bind(cf_e('isPaused', conf)+' '+cf_e('isStopped', conf)+' '+cf_e('isScrolling', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length),
					value = crsl[eType];
				if (is_function(fn))
				{
					fn.call($tt0, value);
				}
				return value;
			});


			//	configuration event
			$cfs.bind(cf_e('configuration', conf), function(e, a, b, c) {
				e.stopPropagation();
				var reInit = false;

				//	return entire configuration-object
				if (is_function(a))
				{
					a.call($tt0, opts);
				}
				//	set multiple options via object
				else if (is_object(a))
				{
					opts_orig = $.extend(true, {}, opts_orig, a);
					if (b !== false) reInit = true;
					else opts = $.extend(true, {}, opts, a);

				}
				else if (!is_undefined(a))
				{

					//	callback function for specific option
					if (is_function(b))
					{
						var val = eval('opts.'+a);
						if (is_undefined(val))
						{
							val = '';
						}
						b.call($tt0, val);
					}
					//	set individual option
					else if (!is_undefined(b))
					{
						if (typeof c !== 'boolean') c = true;
						eval('opts_orig.'+a+' = b');
						if (c !== false) reInit = true;
						else eval('opts.'+a+' = b');
					}
					//	return value for specific option
					else
					{
						return eval('opts.'+a);
					}
				}
				if (reInit)
				{
					sz_resetMargin($cfs.children(), opts);
					FN._init(opts_orig);
					FN._bind_buttons();
					var sz = sz_setSizes($cfs, opts);
					$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				}
				return opts;
			});


			//	linkAnchors event
			$cfs.bind(cf_e('linkAnchors', conf), function(e, $con, sel) {
				e.stopPropagation();

				if (is_undefined($con))
				{
					$con = $('body');
				}
				else if (is_string($con))
				{
					$con = $($con);
				}
				if (!is_jquery($con) || $con.length == 0)
				{
					return debug(conf, 'Not a valid object.');
				}
				if (!is_string(sel))
				{
					sel = 'a.caroufredsel';
				}

				$con.find(sel).each(function() {
					var h = this.hash || '';
					if (h.length > 0 && $cfs.children().index($(h)) != -1)
					{
						$(this).unbind('click').click(function(e) {
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), h);
						});
					}
				});
				return true;
			});


			//	updatePageStatus event
			$cfs.bind(cf_e('updatePageStatus', conf), function(e, build, sizes) {
				e.stopPropagation();
				if (!opts.pagination.container)
				{
					return;
				}

				var ipp = opts.pagination.items || opts.items.visible,
					pgs = Math.ceil(itms.total/ipp);

				if (build)
				{
					if (opts.pagination.anchorBuilder)
					{
						opts.pagination.container.children().remove();
						opts.pagination.container.each(function() {
							for (var a = 0; a < pgs; a++)
							{
								var i = $cfs.children().eq( gn_getItemIndex(a*ipp, 0, true, itms, $cfs) );
								$(this).append(opts.pagination.anchorBuilder.call(i[0], a+1));
							}
						});
					}
					opts.pagination.container.each(function() {
						$(this).children().unbind(opts.pagination.event).each(function(a) {
							$(this).bind(opts.pagination.event, function(e) {
								e.preventDefault();
								$cfs.trigger(cf_e('slideTo', conf), [a*ipp, -opts.pagination.deviation, true, opts.pagination]);
							});
						});
					});
				}

				var selected = $cfs.triggerHandler(cf_e('currentPage', conf)) + opts.pagination.deviation;
				if (selected >= pgs)
				{
					selected = 0;
				}
				if (selected < 0)
				{
					selected = pgs-1;
				}
				opts.pagination.container.each(function() {
					$(this).children().removeClass(cf_c('selected', conf)).eq(selected).addClass(cf_c('selected', conf));
				});
				return true;
			});


			//	updateSizes event
			$cfs.bind(cf_e('updateSizes', conf), function(e) {
				var vI = opts.items.visible,
					a_itm = $cfs.children(),
					avail_primary = ms_getParentSize($wrp, opts, 'width');

				itms.total = a_itm.length;

				if (crsl.primarySizePercentage)
				{
					opts.maxDimension = avail_primary;
					opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
				}
				else
				{
					opts.maxDimension = ms_getMaxDimension(opts, avail_primary);
				}

				if (opts.responsive)
				{
					opts.items.width = opts.items.sizesConf.width;
					opts.items.height = opts.items.sizesConf.height;
					opts = in_getResponsiveValues(opts, a_itm, avail_primary);
					vI = opts.items.visible;
					sz_setResponsiveSizes(opts, a_itm);
				}
				else if (opts.items.visibleConf.variable)
				{
					vI = gn_getVisibleItemsNext(a_itm, opts, 0);
				}
				else if (opts.items.filter != '*')
				{
					vI = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
				}

				if (!opts.circular && itms.first != 0 && vI > itms.first) {
					if (opts.items.visibleConf.variable)
					{
						var nI = gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first;
					}
					else if (opts.items.filter != '*')
					{
						var nI = gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) - itms.first;
					}
					else
					{
						var nI = opts.items.visible - itms.first;
					}
					debug(conf, 'Preventing non-circular: sliding '+nI+' items backward.');
					$cfs.trigger(cf_e('prev', conf), nI);
				}

				opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				opts.items.visibleConf.old = opts.items.visible;
				opts = in_getAlignPadding(opts, a_itm);

				var sz = sz_setSizes($cfs, opts);
				$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				nv_showNavi(opts, itms.total, conf);
				nv_enableNavi(opts, itms.first, conf);

				return sz;
			});


			//	destroy event
			$cfs.bind(cf_e('destroy', conf), function(e, orgOrder) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				$cfs.data('_cfs_isCarousel', false);
				$cfs.trigger(cf_e('finish', conf));
				if (orgOrder)
				{
					$cfs.trigger(cf_e('jumpToStart', conf));
				}
				sz_restoreOrigCss($cfs.children());
				sz_restoreOrigCss($cfs);
				FN._unbind_events();
				FN._unbind_buttons();
				if (conf.wrapper == 'parent')
				{
					sz_restoreOrigCss($wrp);
				}
				else
				{
					$wrp.replaceWith($cfs);
				}

				return true;
			});


			//	debug event
			$cfs.bind(cf_e('debug', conf), function(e) {
				debug(conf, 'Carousel width: ' + opts.width);
				debug(conf, 'Carousel height: ' + opts.height);
				debug(conf, 'Item widths: ' + opts.items.width);
				debug(conf, 'Item heights: ' + opts.items.height);
				debug(conf, 'Number of items visible: ' + opts.items.visible);
				if (opts.auto.play)
				{
					debug(conf, 'Number of items scrolled automatically: ' + opts.auto.items);
				}
				if (opts.prev.button)
				{
					debug(conf, 'Number of items scrolled backward: ' + opts.prev.items);
				}
				if (opts.next.button)
				{
					debug(conf, 'Number of items scrolled forward: ' + opts.next.items);
				}
				return conf.debug;
			});


			//	triggerEvent, making prefixed and namespaced events accessible from outside
			$cfs.bind('_cfs_triggerEvent', function(e, n, o) {
				e.stopPropagation();
				return $cfs.triggerHandler(cf_e(n, conf), o);
			});
		};	//	/bind_events


		FN._unbind_events = function() {
			$cfs.unbind(cf_e('', conf));
			$cfs.unbind(cf_e('', conf, false));
			$cfs.unbind('_cfs_triggerEvent');
		};	//	/unbind_events


		FN._bind_buttons = function() {
			FN._unbind_buttons();
			nv_showNavi(opts, itms.total, conf);
			nv_enableNavi(opts, itms.first, conf);

			if (opts.auto.pauseOnHover)
			{
				var pC = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
				$wrp.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
					.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
			}

			//	play button
			if (opts.auto.button)
			{
				opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
					e.preventDefault();
					var ev = false,
						pC = null;

					if (crsl.isPaused)
					{
						ev = 'play';
					}
					else if (opts.auto.pauseOnEvent)
					{
						ev = 'pause';
						pC = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);
					}
					if (ev)
					{
						$cfs.trigger(cf_e(ev, conf), pC);
					}
				});
			}

			//	prev button
			if (opts.prev.button)
			{
				opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('prev', conf));
				});
				if (opts.prev.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
					opts.prev.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
									.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			//	next butotn
			if (opts.next.button)
			{
				opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('next', conf));
				});
				if (opts.next.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
					opts.next.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC); 	})
									.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			//	pagination
			if (opts.pagination.container)
			{
				if (opts.pagination.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
					opts.pagination.container.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
											 .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));	});
				}
			}

			//	prev/next keys
			if (opts.prev.key || opts.next.key)
			{
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k == opts.next.key)
					{
						e.preventDefault();
						$cfs.trigger(cf_e('next', conf));
					}
					if (k == opts.prev.key)
					{
						e.preventDefault();
						$cfs.trigger(cf_e('prev', conf));
					}
				});
			}

			//	pagination keys
			if (opts.pagination.keys)
			{
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k >= 49 && k < 58)
					{
						k = (k-49) * opts.items.visible;
						if (k <= itms.total)
						{
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), [k, 0, true, opts.pagination]);
						}
					}
				});
			}

			//	swipe
			if ($.fn.swipe)
			{
				var isTouch = 'ontouchstart' in window;
				if ((isTouch && opts.swipe.onTouch) || (!isTouch && opts.swipe.onMouse))
				{
					var scP = $.extend(true, {}, opts.prev, opts.swipe),
						scN = $.extend(true, {}, opts.next, opts.swipe),
						swP = function() { $cfs.trigger(cf_e('prev', conf), [scP]) },
						swN = function() { $cfs.trigger(cf_e('next', conf), [scN]) };

					switch (opts.direction)
					{
						case 'up':
						case 'down':
							opts.swipe.options.swipeUp = swN;
							opts.swipe.options.swipeDown = swP;
							break;
						default:
							opts.swipe.options.swipeLeft = swN;
							opts.swipe.options.swipeRight = swP;
					}
					if (crsl.swipe)
					{
						$cfs.swipe('destroy');
					}
					$wrp.swipe(opts.swipe.options);
					$wrp.css('cursor', 'move');
					crsl.swipe = true;
				}
			}

			//	mousewheel
			if ($.fn.mousewheel)
			{

				if (opts.mousewheel)
				{
					var mcP = $.extend(true, {}, opts.prev, opts.mousewheel),
						mcN = $.extend(true, {}, opts.next, opts.mousewheel);

					if (crsl.mousewheel)
					{
						$wrp.unbind(cf_e('mousewheel', conf, false));
					}
					$wrp.bind(cf_e('mousewheel', conf, false), function(e, delta) { 
						e.preventDefault();
						if (delta > 0)
						{
							$cfs.trigger(cf_e('prev', conf), [mcP]);
						}
						else
						{
							$cfs.trigger(cf_e('next', conf), [mcN]);
						}
					});
					crsl.mousewheel = true;
				}
			}

			if (opts.auto.play)
			{
				$cfs.trigger(cf_e('play', conf), opts.auto.delay);
			}

			if (crsl.upDateOnWindowResize)
			{
				var resizeFn = function(e) {
					$cfs.trigger(cf_e('finish', conf));
					if (opts.auto.pauseOnResize && !crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
					sz_resetMargin($cfs.children(), opts);
					$cfs.trigger(cf_e('updateSizes', conf));
				};

				var $w = $(window),
					onResize = null;

				if ($.debounce && conf.onWindowResize == 'debounce')
				{
					onResize = $.debounce(200, resizeFn);
				}
				else if ($.throttle && conf.onWindowResize == 'throttle')
				{
					onResize = $.throttle(300, resizeFn);
				}
				else
				{
					var _windowWidth = 0,
						_windowHeight = 0;

					onResize = function() {
						var nw = $w.width(),
							nh = $w.height();

						if (nw != _windowWidth || nh != _windowHeight)
						{
							resizeFn();
							_windowWidth = nw;
							_windowHeight = nh;
						}
					};
				}
				$w.bind(cf_e('resize', conf, false, true, true), onResize);
			}
		};	//	/bind_buttons


		FN._unbind_buttons = function() {
			var ns1 = cf_e('', conf),
				ns2 = cf_e('', conf, false);
				ns3 = cf_e('', conf, false, true, true);

			$(document).unbind(ns3);
			$(window).unbind(ns3);
			$wrp.unbind(ns2);

			if (opts.auto.button)
			{
				opts.auto.button.unbind(ns2);
			}
			if (opts.prev.button)
			{
				opts.prev.button.unbind(ns2);
			}
			if (opts.next.button)
			{
				opts.next.button.unbind(ns2);
			}
			if (opts.pagination.container)
			{
				opts.pagination.container.unbind(ns2);
				if (opts.pagination.anchorBuilder)
				{
					opts.pagination.container.children().remove();
				}
			}
			if (crsl.swipe)
			{
				$cfs.swipe('destroy');
				$wrp.css('cursor', 'default');
				crsl.swipe = false;
			}
			if (crsl.mousewheel)
			{
				crsl.mousewheel = false;
			}

			nv_showNavi(opts, 'hide', conf);
			nv_enableNavi(opts, 'removeClass', conf);

		};	//	/unbind_buttons



		//	START

		if (is_boolean(configs))
		{
			configs = {
				'debug': configs
			};
		}

		//	set vars
		var crsl = {
				'direction'		: 'next',
				'isPaused'		: true,
				'isScrolling'	: false,
				'isStopped'		: false,
				'mousewheel'	: false,
				'swipe'			: false
			},
			itms = {
				'total'			: $cfs.children().length,
				'first'			: 0
			},
			tmrs = {
				'auto'			: null,
				'progress'		: null,
				'startTime'		: getTime(),
				'timePassed'	: 0
			},
			scrl = {
				'isStopped'		: false,
				'duration'		: 0,
				'startTime'		: 0,
				'easing'		: '',
				'anims'			: []
			},
			clbk = {
				'onBefore'		: [],
				'onAfter'		: []
			},
			queu = [],
			conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs),
			opts = {},
			opts_orig = $.extend(true, {}, options),
			$wrp = (conf.wrapper == 'parent')
				? $cfs.parent()
				: $cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();


		conf.selector		= $cfs.selector;
		conf.serialNumber	= $.fn.carouFredSel.serialNumber++;

		conf.transition = (conf.transition && $.fn.transition) ? 'transition' : 'animate';

		//	create carousel
		FN._init(opts_orig, true, starting_position);
		FN._build();
		FN._bind_events();
		FN._bind_buttons();

		//	find item to start
		if (is_array(opts.items.start))
		{
			var start_arr = opts.items.start;
		}
		else
		{
			var start_arr = [];
			if (opts.items.start != 0)
			{
				start_arr.push(opts.items.start);
			}
		}
		if (opts.cookie)
		{
			start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10));
		}

		if (start_arr.length > 0)
		{
			for (var a = 0, l = start_arr.length; a < l; a++)
			{
				var s = start_arr[a];
				if (s == 0)
				{
					continue;
				}
				if (s === true)
				{
					s = window.location.hash;
					if (s.length < 1)
					{
						continue;
					}
				}
				else if (s === 'random')
				{
					s = Math.floor(Math.random()*itms.total);
				}
				if ($cfs.triggerHandler(cf_e('slideTo', conf), [s, 0, true, { fx: 'none' }]))
				{
					break;
				}
			}
		}
		var siz = sz_setSizes($cfs, opts),
			itm = gi_getCurrentItems($cfs.children(), opts);

		if (opts.onCreate)
		{
			opts.onCreate.call($tt0, {
				'width': siz.width,
				'height': siz.height,
				'items': itm
			});
		}

		$cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
		$cfs.trigger(cf_e('linkAnchors', conf));

		if (conf.debug)
		{
			$cfs.trigger(cf_e('debug', conf));
		}

		return $cfs;
	};



	//	GLOBAL PUBLIC

	$.fn.carouFredSel.serialNumber = 1;
	$.fn.carouFredSel.defaults = {
		'synchronise'	: false,
		'infinite'		: true,
		'circular'		: true,
		'responsive'	: false,
		'direction'		: 'left',
		'items'			: {
			'start'			: 0
		},
		'scroll'		: {
			'easing'		: 'swing',
			'duration'		: 500,
			'pauseOnHover'	: false,
			'event'			: 'click',
			'queue'			: false
		}
	};
	$.fn.carouFredSel.configs = {
		'debug'			: false,
		'transition'	: false,
		'onWindowResize': 'throttle',
		'events'		: {
			'prefix'		: '',
			'namespace'		: 'cfs'
		},
		'wrapper'		: {
			'element'		: 'div',
			'classname'		: 'caroufredsel_wrapper'
		},
		'classnames'	: {}
	};
	$.fn.carouFredSel.pageAnchorBuilder = function(nr) {
		return '<a href="#"><span>'+nr+'</span></a>';
	};
	$.fn.carouFredSel.progressbarUpdater = function(perc) {
		$(this).css('width', perc+'%');
	};

	$.fn.carouFredSel.cookie = {
		get: function(n) {
			n += '=';
			var ca = document.cookie.split(';');
			for (var a = 0, l = ca.length; a < l; a++)
			{
				var c = ca[a];
				while (c.charAt(0) == ' ')
				{
					c = c.slice(1);
				}
				if (c.indexOf(n) == 0)
				{
					return c.slice(n.length);
				}
			}
			return 0;
		},
		set: function(n, v, d) {
			var e = "";
			if (d)
			{
				var date = new Date();
				date.setTime(date.getTime() + (d * 24 * 60 * 60 * 1000));
				e = "; expires=" + date.toGMTString();
			}
			document.cookie = n + '=' + v + e + '; path=/';
		},
		remove: function(n) {
			$.fn.carouFredSel.cookie.set(n, "", -1);
		}
	};


	//	GLOBAL PRIVATE

	//	scrolling functions
	function sc_setScroll(d, e, c) {
		if (c.transition == 'transition')
		{
			if (e == 'swing')
			{
				e = 'ease';
			}
		}
		return {
			anims: [],
			duration: d,
			orgDuration: d,
			easing: e,
			startTime: getTime()
		};
	}
	function sc_startScroll(s, c) {
		for (var a = 0, l = s.anims.length; a < l; a++)
		{
			var b = s.anims[a];
			if (!b)
			{
				continue;
			}
			b[0][c.transition](b[1], s.duration, s.easing, b[2]);
		}
	}
	function sc_stopScroll(s, finish) {
		if (!is_boolean(finish))
		{
			finish = true;
		}
		if (is_object(s.pre))
		{
			sc_stopScroll(s.pre, finish);
		}
		for (var a = 0, l = s.anims.length; a < l; a++)
		{
			var b = s.anims[a];
			b[0].stop(true);
			if (finish)
			{
				b[0].css(b[1]);
				if (is_function(b[2]))
				{
					b[2]();
				}
			}
		}
		if (is_object(s.post))
		{
			sc_stopScroll(s.post, finish);
		}
	}
	function sc_afterScroll( $c, $c2, o ) {
		if ($c2)
		{
			$c2.remove();
		}

		switch(o.fx) {
			case 'fade':
			case 'crossfade':
			case 'cover-fade':
			case 'uncover-fade':
				$c.css('opacity', 1);
				$c.css('filter', '');
				break;
		}
	}
	function sc_fireCallbacks($t, o, b, a, c) {
		if (o[b])
		{
			o[b].call($t, a);
		}
		if (c[b].length)
		{
			for (var i = 0, l = c[b].length; i < l; i++)
			{
				c[b][i].call($t, a);
			}
		}
		return [];
	}
	function sc_fireQueue($c, q, c) {

		if (q.length)
		{
			$c.trigger(cf_e(q[0][0], c), q[0][1]);
			q.shift();
		}
		return q;
	}
	function sc_hideHiddenItems(hiddenitems) {
		hiddenitems.each(function() {
			var hi = $(this);
			hi.data('_cfs_isHidden', hi.is(':hidden')).hide();
		});
	}
	function sc_showHiddenItems(hiddenitems) {
		if (hiddenitems)
		{
			hiddenitems.each(function() {
				var hi = $(this);
				if (!hi.data('_cfs_isHidden'))
				{
					hi.show();
				}
			});
		}
	}
	function sc_clearTimers(t) {
		if (t.auto)
		{
			clearTimeout(t.auto);
		}
		if (t.progress)
		{
			clearInterval(t.progress);
		}
		return t;
	}
	function sc_mapCallbackArguments(i_old, i_skp, i_new, s_itm, s_dir, s_dur, w_siz) {
		return {
			'width': w_siz.width,
			'height': w_siz.height,
			'items': {
				'old': i_old,
				'skipped': i_skp,
				'visible': i_new
			},
			'scroll': {
				'items': s_itm,
				'direction': s_dir,
				'duration': s_dur
			}
		};
	}
	function sc_getDuration( sO, o, nI, siz ) {
		var dur = sO.duration;
		if (sO.fx == 'none')
		{
			return 0;
		}
		if (dur == 'auto')
		{
			dur = o.scroll.duration / o.scroll.items * nI;
		}
		else if (dur < 10)
		{
			dur = siz / dur;
		}
		if (dur < 1)
		{
			return 0;
		}
		if (sO.fx == 'fade')
		{
			dur = dur / 2;
		}
		return Math.round(dur);
	}

	//	navigation functions
	function nv_showNavi(o, t, c) {
		var minimum = (is_number(o.items.minimum)) ? o.items.minimum : o.items.visible + 1;
		if (t == 'show' || t == 'hide')
		{
			var f = t;
		}
		else if (minimum > t)
		{
			debug(c, 'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');
			var f = 'hide';
		}
		else
		{
			var f = 'show';
		}
		var s = (f == 'show') ? 'removeClass' : 'addClass',
			h = cf_c('hidden', c);

		if (o.auto.button)
		{
			o.auto.button[f]()[s](h);
		}
		if (o.prev.button)
		{
			o.prev.button[f]()[s](h);
		}
		if (o.next.button)
		{
			o.next.button[f]()[s](h);
		}
		if (o.pagination.container)
		{
			o.pagination.container[f]()[s](h);
		}
	}
	function nv_enableNavi(o, f, c) {
		if (o.circular || o.infinite) return;
		var fx = (f == 'removeClass' || f == 'addClass') ? f : false,
			di = cf_c('disabled', c);

		if (o.auto.button && fx)
		{
			o.auto.button[fx](di);
		}
		if (o.prev.button)
		{
			var fn = fx || (f == 0) ? 'addClass' : 'removeClass';
			o.prev.button[fn](di);
		}
		if (o.next.button)
		{
			var fn = fx || (f == o.items.visible) ? 'addClass' : 'removeClass';
			o.next.button[fn](di);
		}
	}

	//	get object functions
	function go_getObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		else if (is_undefined(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getItemsObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_number(obj))
		{
			obj	= {
				'visible': obj
			};
		}
		else if (obj == 'variable')
		{
			obj = {
				'visible': obj,
				'width': obj, 
				'height': obj
			};
		}
		else if (!is_object(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getScrollObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_number(obj))
		{
			if (obj <= 50)
			{
				obj = {
					'items': obj
				};
			}
			else
			{
				obj = {
					'duration': obj
				};
			}
		}
		else if (is_string(obj))
		{
			obj = {
				'easing': obj
			};
		}
		else if (!is_object(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getNaviObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_string(obj))
		{
			var temp = cf_getKeyCode(obj);
			if (temp == -1)
			{
				obj = $(obj);
			}
			else
			{
				obj = temp;
			}
		}
		return obj;
	}

	function go_getAutoObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'button': obj
			};
		}
		else if (is_boolean(obj))
		{
			obj = {
				'play': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'timeoutDuration': obj
			};
		}
		if (obj.progress)
		{
			if (is_string(obj.progress) || is_jquery(obj.progress))
			{
				obj.progress = {
					'bar': obj.progress
				};
			}
		}
		return obj;
	}
	function go_complementAutoObject($tt, obj) {
		if (is_function(obj.button))
		{
			obj.button = obj.button.call($tt);
		}
		if (is_string(obj.button))
		{
			obj.button = $(obj.button);
		}
		if (!is_boolean(obj.play))
		{
			obj.play = true;
		}
		if (!is_number(obj.delay))
		{
			obj.delay = 0;
		}
		if (is_undefined(obj.pauseOnEvent))
		{
			obj.pauseOnEvent = true;
		}
		if (!is_boolean(obj.pauseOnResize))
		{
			obj.pauseOnResize = true;
		}
		if (!is_number(obj.timeoutDuration))
		{
			obj.timeoutDuration = (obj.duration < 10)
				? 2500
				: obj.duration * 5;
		}
		if (obj.progress)
		{
			if (is_function(obj.progress.bar))
			{
				obj.progress.bar = obj.progress.bar.call($tt);
			}
			if (is_string(obj.progress.bar))
			{
				obj.progress.bar = $(obj.progress.bar);
			}
			if (obj.progress.bar)
			{
				if (!is_function(obj.progress.updater))
				{
					obj.progress.updater = $.fn.carouFredSel.progressbarUpdater;
				}
				if (!is_number(obj.progress.interval))
				{
					obj.progress.interval = 50;
				}
			}
			else
			{
				obj.progress = false;
			}
		}
		return obj;
	}

	function go_getPrevNextObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'button': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'key': obj
			};
		}
		return obj;
	}
	function go_complementPrevNextObject($tt, obj) {
		if (is_function(obj.button))
		{
			obj.button = obj.button.call($tt);
		}
		if (is_string(obj.button))
		{
			obj.button = $(obj.button);
		}
		if (is_string(obj.key))
		{
			obj.key = cf_getKeyCode(obj.key);
		}
		return obj;
	}

	function go_getPaginationObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'container': obj
			};
		}
		else if (is_boolean(obj))
		{
			obj = {
				'keys': obj
			};
		}
		return obj;
	}
	function go_complementPaginationObject($tt, obj) {
		if (is_function(obj.container))
		{
			obj.container = obj.container.call($tt);
		}
		if (is_string(obj.container))
		{
			obj.container = $(obj.container);
		}
		if (!is_number(obj.items))
		{
			obj.items = false;
		}
		if (!is_boolean(obj.keys))
		{
			obj.keys = false;
		}
		if (!is_function(obj.anchorBuilder) && !is_false(obj.anchorBuilder))
		{
			obj.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder;
		}
		if (!is_number(obj.deviation))
		{
			obj.deviation = 0;
		}
		return obj;
	}

	function go_getSwipeObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		if (is_undefined(obj))
		{
			obj = {
				'onTouch': false
			};
		}
		if (is_true(obj))
		{
			obj = {
				'onTouch': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'items': obj
			};
		}
		return obj;
	}
	function go_complementSwipeObject($tt, obj) {
		if (!is_boolean(obj.onTouch))
		{
			obj.onTouch = true;
		}
		if (!is_boolean(obj.onMouse))
		{
			obj.onMouse = false;
		}
		if (!is_object(obj.options))
		{
			obj.options = {};
		}
		if (!is_boolean(obj.options.triggerOnTouchEnd))
		{
			obj.options.triggerOnTouchEnd = false;
		}
		return obj;
	}
	function go_getMousewheelObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		if (is_true(obj))
		{
			obj = {};
		}
		else if (is_number(obj))
		{
			obj = {
				'items': obj
			};
		}
		else if (is_undefined(obj))
		{
			obj = false;
		}
		return obj;
	}
	function go_complementMousewheelObject($tt, obj) {
		return obj;
	}

	//	get number functions
	function gn_getItemIndex(num, dev, org, items, $cfs) {
		if (is_string(num))
		{
			num = $(num, $cfs);
		}

		if (is_object(num))
		{
			num = $(num, $cfs);
		}
		if (is_jquery(num))
		{
			num = $cfs.children().index(num);
			if (!is_boolean(org))
			{
				org = false;
			}
		}
		else
		{
			if (!is_boolean(org))
			{
				org = true;
			}
		}
		if (!is_number(num))
		{
			num = 0;
		}
		if (!is_number(dev))
		{
			dev = 0;
		}

		if (org)
		{
			num += items.first;
		}
		num += dev;
		if (items.total > 0)
		{
			while (num >= items.total)
			{
				num -= items.total;
			}
			while (num < 0)
			{
				num += items.total;
			}
		}
		return num;
	}

	//	items prev
	function gn_getVisibleItemsPrev(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s; a >= 0; a--)
		{
			var j = i.eq(a);
			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimension)
			{
				return x;
			}
			if (a == 0)
			{
				a = i.length;
			}
			x++;
		}
	}
	function gn_getVisibleItemsPrevFilter(i, o, s) {
		return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s);
	}
	function gn_getScrollItemsPrevFilter(i, o, s, m) {
		return gn_getItemsPrevFilter(i, o.items.filter, m, s);
	}
	function gn_getItemsPrevFilter(i, f, m, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length; a >= 0; a--)
		{
			x++;
			if (x == l)
			{
				return x;
			}

			var j = i.eq(a);
			if (j.is(f))
			{
				t++;
				if (t == m)
				{
					return x;
				}
			}
			if (a == 0)
			{
				a = l;
			}
		}
	}

	function gn_getVisibleOrg($c, o) {
		return o.items.visibleConf.org || $c.children().slice(0, o.items.visible).filter(o.items.filter).length;
	}

	//	items next
	function gn_getVisibleItemsNext(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++)
		{
			var j = i.eq(a);

			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimension)
			{
				return x;
			}

			x++;
			if (x == l+1)
			{
				return x;
			}
			if (a == l)
			{
				a = -1;
			}
		}
	}
	function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
		var v = gn_getVisibleItemsNext(i, o, s);
		if (!o.circular)
		{
			if (s + v > l)
			{
				v = l - s;
			}
		}
		return v;
	}
	function gn_getVisibleItemsNextFilter(i, o, s) {
		return gn_getItemsNextFilter(i, o.items.filter, o.items.visibleConf.org, s, o.circular);
	}
	function gn_getScrollItemsNextFilter(i, o, s, m) {
		return gn_getItemsNextFilter(i, o.items.filter, m+1, s, o.circular) - 1;
	}
	function gn_getItemsNextFilter(i, f, m, s, c) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++)
		{
			x++;
			if (x >= l)
			{
				return x;
			}

			var j = i.eq(a);
			if (j.is(f))
			{
				t++;
				if (t == m)
				{
					return x;
				}
			}
			if (a == l)
			{
				a = -1;
			}
		}
	}

	//	get items functions
	function gi_getCurrentItems(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsPrev(i, o, n) {
		return i.slice(n, o.items.visibleConf.old+n);
	}
	function gi_getNewItemsPrev(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsNext(i, o) {
		return i.slice(0, o.items.visibleConf.old);
	}
	function gi_getNewItemsNext(i, o, n) {
		return i.slice(n, o.items.visible+n);
	}

	//	sizes functions
	function sz_storeMargin(i, o, d) {
		if (o.usePadding)
		{
			if (!is_string(d))
			{
				d = '_cfs_origCssMargin';
			}
			i.each(function() {
				var j = $(this),
					m = parseInt(j.css(o.d['marginRight']), 10);
				if (!is_number(m)) 
				{
					m = 0;
				}
				j.data(d, m);
			});
		}
	}
	function sz_resetMargin(i, o, m) {
		if (o.usePadding)
		{
			var x = (is_boolean(m)) ? m : false;
			if (!is_number(m))
			{
				m = 0;
			}
			sz_storeMargin(i, o, '_cfs_tempCssMargin');
			i.each(function() {
				var j = $(this);
				j.css(o.d['marginRight'], ((x) ? j.data('_cfs_tempCssMargin') : m + j.data('_cfs_origCssMargin')));
			});
		}
	}
	function sz_storeOrigCss(i) {
		i.each(function() {
			var j = $(this);
			j.data('_cfs_origCss', j.attr('style') || '');
		});
	}
	function sz_restoreOrigCss(i) {
		i.each(function() {
			var j = $(this);
			j.attr('style', j.data('_cfs_origCss') || '');
		});
	}
	function sz_setResponsiveSizes(o, all) {
		var visb = o.items.visible,
			newS = o.items[o.d['width']],
			seco = o[o.d['height']],
			secp = is_percentage(seco);

		all.each(function() {
			var $t = $(this),
				nw = newS - ms_getPaddingBorderMargin($t, o, 'Width');

			$t[o.d['width']](nw);
			if (secp)
			{
				$t[o.d['height']](ms_getPercentage(nw, seco));
			}
		});
	}
	function sz_setSizes($c, o) {
		var $w = $c.parent(),
			$i = $c.children(),
			$v = gi_getCurrentItems($i, o),
			sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, false);

		$w.css(sz);

		if (o.usePadding)
		{
			var p = o.padding,
				r = p[o.d[1]];

			if (o.align && r < 0)
			{
				r = 0;
			}
			var $l = $v.last();
			$l.css(o.d['marginRight'], $l.data('_cfs_origCssMargin') + r);
			$c.css(o.d['top'], p[o.d[0]]);
			$c.css(o.d['left'], p[o.d[3]]);
		}

		$c.css(o.d['width'], sz[o.d['width']]+(ms_getTotalSize($i, o, 'width')*2));
		$c.css(o.d['height'], ms_getLargestSize($i, o, 'height'));
		return sz;
	}

	//	measuring functions
	function ms_getSizes(i, o, wrapper) {
		return [ms_getTotalSize(i, o, 'width', wrapper), ms_getLargestSize(i, o, 'height', wrapper)];
	}
	function ms_getLargestSize(i, o, dim, wrapper) {
		if (!is_boolean(wrapper))
		{
			wrapper = false;
		}
		if (is_number(o[o.d[dim]]) && wrapper)
		{
			return o[o.d[dim]];
		}
		if (is_number(o.items[o.d[dim]]))
		{
			return o.items[o.d[dim]];
		}
		dim = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight';
		return ms_getTrueLargestSize(i, o, dim);
	}
	function ms_getTrueLargestSize(i, o, dim) {
		var s = 0;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);

			var m = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s < m)
			{
				s = m;
			}
		}
		return s;
	}

	function ms_getTotalSize(i, o, dim, wrapper) {
		if (!is_boolean(wrapper))
		{
			wrapper = false;
		}
		if (is_number(o[o.d[dim]]) && wrapper)
		{
			return o[o.d[dim]];
		}
		if (is_number(o.items[o.d[dim]]))
		{
			return o.items[o.d[dim]] * i.length;
		}

		var d = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight',
			s = 0;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);
			s += (j.is(':visible')) ? j[o.d[d]](true) : 0;
		}
		return s;
	}
	function ms_getParentSize($w, o, d) {
		var isVisible = $w.is(':visible');
		if (isVisible)
		{
			$w.hide();
		}
		var s = $w.parent()[o.d[d]]();
		if (isVisible)
		{
			$w.show();
		}
		return s;
	}
	function ms_getMaxDimension(o, a) {
		return (is_number(o[o.d['width']])) ? o[o.d['width']] : a;
	}
	function ms_hasVariableSizes(i, o, dim) {
		var s = false,
			v = false;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);

			var c = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s === false)
			{
				s = c;
			}
			else if (s != c)
			{
				v = true;
			}
			if (s == 0)
			{
				v = true;
			}
		}
		return v;
	}
	function ms_getPaddingBorderMargin(i, o, d) {
		return i[o.d['outer'+d]](true) - i[o.d[d.toLowerCase()]]();
	}
	function ms_getPercentage(s, o) {
		if (is_percentage(o))
		{
			o = parseInt( o.slice(0, -1), 10 );
			if (!is_number(o))
			{
				return s;
			}
			s *= o/100;
		}
		return s;
	}

	//	config functions
	function cf_e(n, c, pf, ns, rd) {
		if (!is_boolean(pf))
		{
			pf = true;
		}
		if (!is_boolean(ns))
		{
			ns = true;
		}
		if (!is_boolean(rd))
		{
			rd = false;
		}

		if (pf)
		{
			n = c.events.prefix + n;
		}
		if (ns)
		{
			n = n +'.'+ c.events.namespace;
		}
		if (ns && rd)
		{
			n += c.serialNumber;
		}

		return n;
	}
	function cf_c(n, c) {
		return (is_string(c.classnames[n])) ? c.classnames[n] : n;
	}
	function cf_mapWrapperSizes(ws, o, p) {
		if (!is_boolean(p))
		{
			p = true;
		}
		var pad = (o.usePadding && p) ? o.padding : [0, 0, 0, 0];
		var wra = {};

		wra[o.d['width']] = ws[0] + pad[1] + pad[3];
		wra[o.d['height']] = ws[1] + pad[0] + pad[2];

		return wra;
	}
	function cf_sortParams(vals, typs) {
		var arr = [];
		for (var a = 0, l1 = vals.length; a < l1; a++)
		{
			for (var b = 0, l2 = typs.length; b < l2; b++)
			{
				if (typs[b].indexOf(typeof vals[a]) > -1 && is_undefined(arr[b]))
				{
					arr[b] = vals[a];
					break;
				}
			}
		}
		return arr;
	}
	function cf_getPadding(p) {
		if (is_undefined(p))
		{
			return [0, 0, 0, 0];
		}
		if (is_number(p))
		{
			return [p, p, p, p];
		}
		if (is_string(p))
		{
			p = p.split('px').join('').split('em').join('').split(' ');
		}

		if (!is_array(p))
		{
			return [0, 0, 0, 0];
		}
		for (var i = 0; i < 4; i++)
		{
			p[i] = parseInt(p[i], 10);
		}
		switch (p.length)
		{
			case 0:
				return [0, 0, 0, 0];
			case 1:
				return [p[0], p[0], p[0], p[0]];
			case 2:
				return [p[0], p[1], p[0], p[1]];
			case 3:
				return [p[0], p[1], p[2], p[1]];
			default:
				return [p[0], p[1], p[2], p[3]];
		}
	}
	function cf_getAlignPadding(itm, o) {
		var x = (is_number(o[o.d['width']])) ? Math.ceil(o[o.d['width']] - ms_getTotalSize(itm, o, 'width')) : 0;
		switch (o.align)
		{
			case 'left': 
				return [0, x];
			case 'right':
				return [x, 0];
			case 'center':
			default:
				return [Math.ceil(x/2), Math.floor(x/2)];
		}
	}
	function cf_getDimensions(o) {
		var dm = [
				['width'	, 'innerWidth'	, 'outerWidth'	, 'height'	, 'innerHeight'	, 'outerHeight'	, 'left', 'top'	, 'marginRight'	, 0, 1, 2, 3],
				['height'	, 'innerHeight'	, 'outerHeight'	, 'width'	, 'innerWidth'	, 'outerWidth'	, 'top'	, 'left', 'marginBottom', 3, 2, 1, 0]
			];

		var dl = dm[0].length,
			dx = (o.direction == 'right' || o.direction == 'left') ? 0 : 1;

		var dimensions = {};
		for (var d = 0; d < dl; d++)
		{
			dimensions[dm[0][d]] = dm[dx][d];
		}
		return dimensions;
	}
	function cf_getAdjust(x, o, a, $t) {
		var v = x;
		if (is_function(a))
		{
			v = a.call($t, v);

		}
		else if (is_string(a))
		{
			var p = a.split('+'),
				m = a.split('-');

			if (m.length > p.length)
			{
				var neg = true,
					sta = m[0],
					adj = m[1];
			}
			else
			{
				var neg = false,
					sta = p[0],
					adj = p[1];
			}

			switch(sta)
			{
				case 'even':
					v = (x % 2 == 1) ? x-1 : x;
					break;
				case 'odd':
					v = (x % 2 == 0) ? x-1 : x;
					break;
				default:
					v = x;
					break;
			}
			adj = parseInt(adj, 10);
			if (is_number(adj))
			{
				if (neg)
				{
					adj = -adj;
				}
				v += adj;
			}
		}
		if (!is_number(v) || v < 1)
		{
			v = 1;
		}
		return v;
	}
	function cf_getItemsAdjust(x, o, a, $t) {
		return cf_getItemAdjustMinMax(cf_getAdjust(x, o, a, $t), o.items.visibleConf);
	}
	function cf_getItemAdjustMinMax(v, i) {
		if (is_number(i.min) && v < i.min)
		{
			v = i.min;
		}
		if (is_number(i.max) && v > i.max)
		{
			v = i.max;
		}
		if (v < 1)
		{
			v = 1;
		}
		return v;
	}
	function cf_getSynchArr(s) {
		if (!is_array(s))
		{
			s = [[s]];
		}
		if (!is_array(s[0]))
		{
			s = [s];
		}
		for (var j = 0, l = s.length; j < l; j++)
		{
			if (is_string(s[j][0]))
			{
				s[j][0] = $(s[j][0]);
			}
			if (!is_boolean(s[j][1]))
			{
				s[j][1] = true;
			}
			if (!is_boolean(s[j][2]))
			{
				s[j][2] = true;
			}
			if (!is_number(s[j][3]))
			{
				s[j][3] = 0;
			}
		}
		return s;
	}
	function cf_getKeyCode(k) {
		if (k == 'right')
		{
			return 39;
		}
		if (k == 'left')
		{
			return 37;
		}
		if (k == 'up')
		{
			return 38;
		}
		if (k == 'down')
		{
			return 40;
		}
		return -1;
	}
	function cf_setCookie(n, $c, c) {
		if (n)
		{
			var v = $c.triggerHandler(cf_e('currentPosition', c));
			$.fn.carouFredSel.cookie.set(n, v);
		}
	}
	function cf_getCookie(n) {
		var c = $.fn.carouFredSel.cookie.get(n);
		return (c == '') ? 0 : c;
	}

	//	init function
	function in_mapCss($elem, props) {
		var css = {};
		for (var p = 0, l = props.length; p < l; p++)
		{
			css[props[p]] = $elem.css(props[p]);
		}
		return css;
	}
	function in_complementItems(obj, opt, itm, sta) {
		if (!is_object(obj.visibleConf))
		{
			obj.visibleConf = {};
		}
		if (!is_object(obj.sizesConf))
		{
			obj.sizesConf = {};
		}

		if (obj.start == 0 && is_number(sta))
		{
			obj.start = sta;
		}

		//	visible items
		if (is_object(obj.visible))
		{
			obj.visibleConf.min = obj.visible.min;
			obj.visibleConf.max = obj.visible.max;
			obj.visible = false;
		}
		else if (is_string(obj.visible))
		{
			//	variable visible items
			if (obj.visible == 'variable')
			{
				obj.visibleConf.variable = true;
			}
			//	adjust string visible items
			else
			{
				obj.visibleConf.adjust = obj.visible;
			}
			obj.visible = false;
		}
		else if (is_function(obj.visible))
		{
			obj.visibleConf.adjust = obj.visible;
			obj.visible = false;
		}

		//	set items filter
		if (!is_string(obj.filter))
		{
			obj.filter = (itm.filter(':hidden').length > 0) ? ':visible' : '*';
		}

		//	primary item-size not set
		if (!obj[opt.d['width']])
		{
			//	responsive carousel -> set to largest
			if (opt.responsive)
			{
				debug(true, 'Set a '+opt.d['width']+' for the items!');
				obj[opt.d['width']] = ms_getTrueLargestSize(itm, opt, 'outerWidth');
			}
			//	 non-responsive -> measure it or set to "variable"
			else
			{
				obj[opt.d['width']] = (ms_hasVariableSizes(itm, opt, 'outerWidth')) 
					? 'variable' 
					: itm[opt.d['outerWidth']](true);
			}
		}

		//	secondary item-size not set -> measure it or set to "variable"
		if (!obj[opt.d['height']])
		{
			obj[opt.d['height']] = (ms_hasVariableSizes(itm, opt, 'outerHeight')) 
				? 'variable' 
				: itm[opt.d['outerHeight']](true);
		}

		obj.sizesConf.width = obj.width;
		obj.sizesConf.height = obj.height;
		return obj;
	}
	function in_complementVisibleItems(opt, avl) {
		//	primary item-size variable -> set visible items variable
		if (opt.items[opt.d['width']] == 'variable')
		{
			opt.items.visibleConf.variable = true;
		}
		if (!opt.items.visibleConf.variable) {
			//	primary size is number -> calculate visible-items
			if (is_number(opt[opt.d['width']]))
			{
				opt.items.visible = Math.floor(opt[opt.d['width']] / opt.items[opt.d['width']]);
			}
			//	measure and calculate primary size and visible-items
			else
			{
				opt.items.visible = Math.floor(avl / opt.items[opt.d['width']]);
				opt[opt.d['width']] = opt.items.visible * opt.items[opt.d['width']];
				if (!opt.items.visibleConf.adjust)
				{
					opt.align = false;
				}
			}
			if (opt.items.visible == 'Infinity' || opt.items.visible < 1)
			{
				debug(true, 'Not a valid number of visible items: Set to "variable".');
				opt.items.visibleConf.variable = true;
			}
		}
		return opt;
	}
	function in_complementPrimarySize(obj, opt, all) {
		//	primary size set to auto -> measure largest item-size and set it
		if (obj == 'auto')
		{
			obj = ms_getTrueLargestSize(all, opt, 'outerWidth');
		}
		return obj;
	}
	function in_complementSecondarySize(obj, opt, all) {
		//	secondary size set to auto -> measure largest item-size and set it
		if (obj == 'auto')
		{
			obj = ms_getTrueLargestSize(all, opt, 'outerHeight');
		}
		//	secondary size not set -> set to secondary item-size
		if (!obj)
		{
			obj = opt.items[opt.d['height']];
		}
		return obj;
	}
	function in_getAlignPadding(o, all) {
		var p = cf_getAlignPadding(gi_getCurrentItems(all, o), o);
		o.padding[o.d[1]] = p[1];
		o.padding[o.d[3]] = p[0];
		return o;
	}
	function in_getResponsiveValues(o, all, avl) {

		var visb = cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']] / o.items[o.d['width']]), o.items.visibleConf);
		if (visb > all.length)
		{
			visb = all.length;
		}

		var newS = Math.floor(o[o.d['width']]/visb);

		o.items.visible = visb;
		o.items[o.d['width']] = newS;
		o[o.d['width']] = visb * newS;
		return o;
	}


	//	buttons functions
	function bt_pauseOnHoverConfig(p) {
		if (is_string(p))
		{
			var i = (p.indexOf('immediate') > -1) ? true : false,
				r = (p.indexOf('resume') 	> -1) ? true : false;
		}
		else
		{
			var i = r = false;
		}
		return [i, r];
	}
	function bt_mousesheelNumber(mw) {
		return (is_number(mw)) ? mw : null
	}

	//	helper functions
	function is_null(a) {
		return (a === null);
	}
	function is_undefined(a) {
		return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined');
	}
	function is_array(a) {
		return (a instanceof Array);
	}
	function is_jquery(a) {
		return (a instanceof jQuery);
	}
	function is_object(a) {
		return ((a instanceof Object || typeof a == 'object') && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a));
	}
	function is_number(a) {
		return ((a instanceof Number || typeof a == 'number') && !isNaN(a));
	}
	function is_string(a) {
		return ((a instanceof String || typeof a == 'string') && !is_undefined(a) && !is_true(a) && !is_false(a));
	}
	function is_function(a) {
		return (a instanceof Function || typeof a == 'function');
	}
	function is_boolean(a) {
		return (a instanceof Boolean || typeof a == 'boolean' || is_true(a) || is_false(a));
	}
	function is_true(a) {
		return (a === true || a === 'true');
	}
	function is_false(a) {
		return (a === false || a === 'false');
	}
	function is_percentage(x) {
		return (is_string(x) && x.slice(-1) == '%');
	}


	function getTime() {
		return new Date().getTime();
	}

	function deprecated( o, n ) {
		debug(true, o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');
	}
	function debug(d, m) {
		if (!is_undefined(window.console) && !is_undefined(window.console.log))
		{
			if (is_object(d))
			{
				var s = ' ('+d.selector+')';
				d = d.debug;
			}
			else
			{
				var s = '';
			}
			if (!d)
			{
				return false;
			}
	
			if (is_string(m))
			{
				m = 'carouFredSel'+s+': ' + m;
			}
			else
			{
				m = ['carouFredSel'+s+':', m];
			}
			window.console.log(m);
		}
		return false;
	}



	//	EASING FUNCTIONS
	$.extend($.easing, {
		'quadratic': function(t) {
			var t2 = t * t;
			return t * (-t2 * t + 4 * t2 - 6 * t + 4);
		},
		'cubic': function(t) {
			return t * (4 * t * t - 9 * t + 6);
		},
		'elastic': function(t) {
			var t2 = t * t;
			return t * (33 * t2 * t2 - 106 * t2 * t + 126 * t2 - 67 * t + 15);
		}
	});


})(jQuery);
/**
 * Created by na3im on 10/08/2016.
 */
$(document).ready(function () {
    
    
    
    $('#slide-content').carouFredSel({
        width: 1180.72 ,
        height: 250 ,
        scroll : 1 ,
        responsive : true ,
        debug : true ,
        items : {
            height : 250,
            visible :{
                min : 1 ,
                max : 3
            }
        },
        prev:{
            button : "#prev",
            key : "left"
        },
        next:{
            button : "#next",
            key : "right"
        },
        auto:{
            pauseOnHover:true,
            easing : "swing"
        }
    });

}) ;
/**
 * Created by na3im on 10/08/2016.
 */
$(document).ready(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var img = $('#uploadedFile_preview') ;
                img.show().attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    var img  =  $('#uploadedFile_preview') ;

    var old_img  =  $('#uploadedFile_preview_old') ;

    $.get(img.attr('src')).done(console.log('exist')) ;


    $("#uploadedFile_input").change(function(){
        old_img.hide() ;
        readURL(this);
    });

    $('#uploadedFile_preview_container').click(function(){
        $('#uploadedFile_input').click() ;
    });

});
/**
 * Created by na3im on 09/08/2016.
 */
/**
 * select2 plugin init
 */

$(document).ready(function () {
    $('.select').select2()   ;


    /**
     * tinymce plugin init
     */
    tinymce.init({
        selector: '#content',
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "table contextmenu directionality emoticons template textcolor paste textcolor colorpicker textpattern"
        ],
        height : 690 ,
        toolbar1: "newdocument | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        paste_as_text: true
    });

}) ;
$(document).ready(function () {
    var form = $('.form') ;
    var form_control = $('.f-control') ;
    var field =  $('input.f-control,textarea.f-control') ;
    for(var i = 0 ; i < field.length ; i++){
        if(field[i].value != ''){
            $(field[i]).parent('.f-group').addClass('is-focused') ;
        }
    }
    form_control.focus(function () {
        $(this).parent('.f-group').addClass('is-focused')  ;
    }) ;
    form_control.blur(function () {
        if($(this).val() == ''){
            $(this).parent('.f-group').removeClass('is-focused')  ;
        }
    });
}) ;

/**
 * Created by na3im on 08/08/2016.
 */
$(document).ready(function(){
    var title = $('#title') ;
    var slug = $('#slug') ;
    title.keyup(function(){
        var title_val = title.val() ;
        slug.parent('.f-group').addClass('is-focused') ;
        slug.val(title_val.trim().replace(/ +/g , '-')) ;
    });
});
/**
 * Created by na3im on 04/08/2016.
 */

$(document).ready(function(){
    var items = $('#navbar--secondary').children('a.item') ;

    var hrefs = window.location.pathname ;

    var href = hrefs.split('/') ;

    for(var i = 0 ; i < items.length ; i++ ){
       var id = items[i].getAttribute('id') ;
       var itemWithSlash = new RegExp('/'+id+'/', "i") ;
       var itemWithOutSlash = new RegExp('/'+id, "i") ;
       if(itemWithSlash.test(hrefs)|| itemWithOutSlash.test(hrefs)){
         $("#"+id).addClass('is-active') ;
       }
    }
    
    var more_items =  $('#more-items');
    var more_items_length =  $('#more-items').children('a.item').length ;

    var more_items_trigger =  $('#more-items-trigger');
    if(more_items_length > 0 ){
        more_items_trigger.addClass("show") ; 
    }
    
    more_items_trigger.click(function () {
        more_items.toggleClass('is-active');
    });
    
    $('.site-content').mouseup(function () {
        more_items.removeClass('is-active') ;
    });

    $('#setting-dropdown').click(function (e) {
        e.preventDefault() ;
        $('#item-container').toggleClass('open') ;
    })
    
    
    
});
/**
 * Created by na3im on 27/07/2016.
 */
$(document).ready(function(){
    var body = $('body') ;
    var more_items =  $('#more-items');
    var siteHeader = $('.site-header') ;

    $('#header--trigger-box').click(function(){
        body.toggleClass('with-slider') ;
        more_items.toggleClass('is-active') ;
    });
    $('#site-cache').click(function(){
        body.removeClass('with-slider') ;
    });

    $(window).resize(function () {
        if(body.width() > 760){
            body.removeClass('with-slider');
            more_items.removeClass('is-active');
        }
    })


});
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
    if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);

$( document ).ready(function( $ ) {
    
    var tabs = $('.tabs') ;
    var contents = $('.intro-section .content') ;
    var items = tabs.find('.item') ;
    
    items.click(function (e) {
        e.preventDefault() ;
        var self = $(this);
        if(self.hasClass('is-active')){
            return false ;
        }else{
            self.parent().find('.is-active').removeClass('is-active') ;
            self.addClass('is-active');
            var id = self.attr('href') ;
            $(id).parent().find('.is-active').stop().fadeOut(300,'linear',function () {
                $(this).removeClass('is-active') ;
                $(id).stop().fadeIn(300).addClass('is-active') ;
            });
        }
    });

   
});
// 4.4.1 (2016-07-26)
!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){var r,i,o,a,l;for(r=0;r<n.length;r++){i=e,o=n[r],a=o.split(/[.\/]/);for(var c=0;c<a.length-1;++c)i[a[c]]===t&&(i[a[c]]={}),i=i[a[c]];i[a[a.length-1]]=s[o]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(o in s)l[o]=s[o];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var s={},l="tinymce/geom/Rect",c="tinymce/util/Promise",u="tinymce/util/Delay",d="tinymce/Env",f="tinymce/dom/EventUtils",h="tinymce/dom/Sizzle",p="tinymce/util/Arr",m="tinymce/util/Tools",g="tinymce/dom/DomQuery",v="tinymce/html/Styles",y="tinymce/dom/TreeWalker",b="tinymce/dom/Range",C="tinymce/html/Entities",x="tinymce/dom/StyleSheetLoader",w="tinymce/dom/DOMUtils",N="tinymce/dom/ScriptLoader",E="tinymce/AddOnManager",_="tinymce/dom/NodeType",S="tinymce/text/Zwsp",k="tinymce/caret/CaretContainer",T="tinymce/dom/RangeUtils",R="tinymce/NodeChange",A="tinymce/html/Node",B="tinymce/html/Schema",D="tinymce/html/SaxParser",L="tinymce/html/DomParser",M="tinymce/html/Writer",P="tinymce/html/Serializer",H="tinymce/dom/Serializer",O="tinymce/dom/TridentSelection",I="tinymce/util/VK",F="tinymce/dom/ControlSelection",z="tinymce/util/Fun",U="tinymce/caret/CaretCandidate",W="tinymce/geom/ClientRect",V="tinymce/text/ExtendingChar",$="tinymce/caret/CaretPosition",q="tinymce/caret/CaretBookmark",j="tinymce/dom/BookmarkManager",Y="tinymce/dom/Selection",X="tinymce/dom/ElementUtils",K="tinymce/fmt/Preview",G="tinymce/fmt/Hooks",J="tinymce/Formatter",Q="tinymce/UndoManager",Z="tinymce/EnterKey",ee="tinymce/ForceBlocks",te="tinymce/caret/CaretUtils",ne="tinymce/caret/CaretWalker",re="tinymce/InsertList",ie="tinymce/InsertContent",oe="tinymce/EditorCommands",ae="tinymce/util/URI",se="tinymce/util/Class",le="tinymce/util/EventDispatcher",ce="tinymce/data/Binding",ue="tinymce/util/Observable",de="tinymce/data/ObservableObject",fe="tinymce/ui/Selector",he="tinymce/ui/Collection",pe="tinymce/ui/DomUtils",me="tinymce/ui/BoxUtils",ge="tinymce/ui/ClassList",ve="tinymce/ui/ReflowQueue",ye="tinymce/ui/Control",be="tinymce/ui/Factory",Ce="tinymce/ui/KeyboardNavigation",xe="tinymce/ui/Container",we="tinymce/ui/DragHelper",Ne="tinymce/ui/Scrollable",Ee="tinymce/ui/Panel",_e="tinymce/ui/Movable",Se="tinymce/ui/Resizable",ke="tinymce/ui/FloatPanel",Te="tinymce/ui/Window",Re="tinymce/ui/MessageBox",Ae="tinymce/WindowManager",Be="tinymce/ui/Tooltip",De="tinymce/ui/Widget",Le="tinymce/ui/Progress",Me="tinymce/ui/Notification",Pe="tinymce/NotificationManager",He="tinymce/dom/NodePath",Oe="tinymce/util/Quirks",Ie="tinymce/EditorObservable",Fe="tinymce/Mode",ze="tinymce/Shortcuts",Ue="tinymce/file/Uploader",We="tinymce/file/Conversions",Ve="tinymce/file/ImageScanner",$e="tinymce/file/BlobCache",qe="tinymce/file/UploadStatus",je="tinymce/EditorUpload",Ye="tinymce/caret/FakeCaret",Xe="tinymce/dom/Dimensions",Ke="tinymce/caret/LineWalker",Ge="tinymce/caret/LineUtils",Je="tinymce/DragDropOverrides",Qe="tinymce/SelectionOverrides",Ze="tinymce/util/Uuid",et="tinymce/Editor",tt="tinymce/util/I18n",nt="tinymce/FocusManager",rt="tinymce/EditorManager",it="tinymce/LegacyInput",ot="tinymce/util/XHR",at="tinymce/util/JSON",st="tinymce/util/JSONRequest",lt="tinymce/util/JSONP",ct="tinymce/util/LocalStorage",ut="tinymce/Compat",dt="tinymce/ui/Layout",ft="tinymce/ui/AbsoluteLayout",ht="tinymce/ui/Button",pt="tinymce/ui/ButtonGroup",mt="tinymce/ui/Checkbox",gt="tinymce/ui/ComboBox",vt="tinymce/ui/ColorBox",yt="tinymce/ui/PanelButton",bt="tinymce/ui/ColorButton",Ct="tinymce/util/Color",xt="tinymce/ui/ColorPicker",wt="tinymce/ui/Path",Nt="tinymce/ui/ElementPath",Et="tinymce/ui/FormItem",_t="tinymce/ui/Form",St="tinymce/ui/FieldSet",kt="tinymce/ui/FilePicker",Tt="tinymce/ui/FitLayout",Rt="tinymce/ui/FlexLayout",At="tinymce/ui/FlowLayout",Bt="tinymce/ui/FormatControls",Dt="tinymce/ui/GridLayout",Lt="tinymce/ui/Iframe",Mt="tinymce/ui/InfoBox",Pt="tinymce/ui/Label",Ht="tinymce/ui/Toolbar",Ot="tinymce/ui/MenuBar",It="tinymce/ui/MenuButton",Ft="tinymce/ui/MenuItem",zt="tinymce/ui/Throbber",Ut="tinymce/ui/Menu",Wt="tinymce/ui/ListBox",Vt="tinymce/ui/Radio",$t="tinymce/ui/ResizeHandle",qt="tinymce/ui/SelectBox",jt="tinymce/ui/Slider",Yt="tinymce/ui/Spacer",Xt="tinymce/ui/SplitButton",Kt="tinymce/ui/StackLayout",Gt="tinymce/ui/TabPanel",Jt="tinymce/ui/TextBox",Qt="tinymce/Register";r(l,[],function(){function e(e,t,n){var r,i,a,s,l,u;return r=t.x,i=t.y,a=e.w,s=e.h,l=t.w,u=t.h,n=(n||"").split(""),"b"===n[0]&&(i+=u),"r"===n[1]&&(r+=l),"c"===n[0]&&(i+=c(u/2)),"c"===n[1]&&(r+=c(l/2)),"b"===n[3]&&(i-=s),"r"===n[4]&&(r-=a),"c"===n[3]&&(i-=c(s/2)),"c"===n[4]&&(r-=c(a/2)),o(r,i,a,s)}function t(t,n,r,i){var o,a;for(a=0;a<i.length;a++)if(o=e(t,n,i[a]),o.x>=r.x&&o.x+o.w<=r.w+r.x&&o.y>=r.y&&o.y+o.h<=r.h+r.y)return i[a];return null}function n(e,t,n){return o(e.x-t,e.y-n,e.w+2*t,e.h+2*n)}function r(e,t){var n,r,i,a;return n=l(e.x,t.x),r=l(e.y,t.y),i=s(e.x+e.w,t.x+t.w),a=s(e.y+e.h,t.y+t.h),0>i-n||0>a-r?null:o(n,r,i-n,a-r)}function i(e,t,n){var r,i,a,s,c,u,d,f,h,p;return c=e.x,u=e.y,d=e.x+e.w,f=e.y+e.h,h=t.x+t.w,p=t.y+t.h,r=l(0,t.x-c),i=l(0,t.y-u),a=l(0,d-h),s=l(0,f-p),c+=r,u+=i,n&&(d+=r,f+=i,c-=a,u-=s),d-=a,f-=s,o(c,u,d-c,f-u)}function o(e,t,n,r){return{x:e,y:t,w:n,h:r}}function a(e){return o(e.left,e.top,e.width,e.height)}var s=Math.min,l=Math.max,c=Math.round;return{inflate:n,relativePosition:e,findBestRelativePosition:t,intersect:r,clamp:i,create:o,fromClientRect:a}}),r(c,[],function(){function e(e,t){return function(){e.apply(t,arguments)}}function t(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(t,e(r,this),e(i,this))}function n(e){var t=this;return null===this._state?void this._deferreds.push(e):void l(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function r(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void s(e(n,t),e(r,this),e(i,this))}this._state=!0,this._value=t,o.call(this)}catch(a){i.call(this,a)}}function i(e){this._state=!1,this._value=e,o.call(this)}function o(){for(var e=0,t=this._deferreds.length;t>e;e++)n.call(this,this._deferreds[e]);this._deferreds=null}function a(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function s(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}if(window.Promise)return window.Promise;var l=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,r){var i=this;return new t(function(t,o){n.call(i,new a(e,r,t,o))})},t.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&c(arguments[0])?arguments[0]:arguments);return new t(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},t}),r(u,[c],function(e){function t(e,t){function n(e){window.setTimeout(e,0)}var r,i=window.requestAnimationFrame,o=["ms","moz","webkit"];for(r=0;r<o.length&&!i;r++)i=window[o[r]+"RequestAnimationFrame"];i||(i=n),i(e,t)}function n(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)}function r(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)}function i(e){return clearTimeout(e)}function o(e){return clearInterval(e)}var a;return{requestAnimationFrame:function(n,r){return a?void a.then(n):void(a=new e(function(e){r||(r=document.body),t(e,r)}).then(n))},setTimeout:n,setInterval:r,setEditorTimeout:function(e,t,r){return n(function(){e.removed||t()},r)},setEditorInterval:function(e,t,n){var i;return i=r(function(){e.removed?clearInterval(i):t()},n)},throttle:function(e,t){var r,i;return i=function(){var i=arguments;clearTimeout(r),r=n(function(){e.apply(this,i)},t)},i.stop=function(){clearTimeout(r)},i},clearInterval:o,clearTimeout:i}}),r(d,[],function(){function e(e){return"matchMedia"in window?matchMedia(e).matches:!1}var t=navigator,n=t.userAgent,r,i,o,a,s,l,c,u,d,f,h,p,m;r=window.opera&&window.opera.buildNumber,d=/Android/.test(n),i=/WebKit/.test(n),o=!i&&!r&&/MSIE/gi.test(n)&&/Explorer/gi.test(t.appName),o=o&&/MSIE (\w+)\./.exec(n)[1],a=-1==n.indexOf("Trident/")||-1==n.indexOf("rv:")&&-1==t.appName.indexOf("Netscape")?!1:11,s=-1==n.indexOf("Edge/")||o||a?!1:12,o=o||a||s,l=!i&&!a&&/Gecko/.test(n),c=-1!=n.indexOf("Mac"),u=/(iPad|iPhone)/.test(n),f="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,h=e("only screen and (max-device-width: 480px)")&&(d||u),p=e("only screen and (min-width: 800px)")&&(d||u),m=-1!=n.indexOf("Windows Phone"),s&&(i=!1);var g=!u||f||n.match(/AppleWebKit\/(\d*)/)[1]>=534;return{opera:r,webkit:i,ie:o,gecko:l,mac:c,iOS:u,android:d,contentEditable:g,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!=o,range:window.getSelection&&"Range"in window,documentMode:o&&!s?document.documentMode||7:10,fileApi:f,ceFalse:o===!1||o>8,desktop:!h&&!p,windowsPhone:m}}),r(f,[u,d],function(e,t){function n(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function r(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)}function i(e,t){var n,r=t;return n=e.path,n&&n.length>0&&(r=n[0]),e.deepPath&&(n=e.deepPath(),n&&n.length>0&&(r=n[0])),r}function o(e,n){function r(){return!1}function o(){return!0}var a,s=n||{},l;for(a in e)u[a]||(s[a]=e[a]);if(s.target||(s.target=s.srcElement||document),t.experimentalShadowDom&&(s.target=i(e,s.target)),e&&c.test(e.type)&&e.pageX===l&&e.clientX!==l){var d=s.target.ownerDocument||document,f=d.documentElement,h=d.body;s.pageX=e.clientX+(f&&f.scrollLeft||h&&h.scrollLeft||0)-(f&&f.clientLeft||h&&h.clientLeft||0),s.pageY=e.clientY+(f&&f.scrollTop||h&&h.scrollTop||0)-(f&&f.clientTop||h&&h.clientTop||0)}return s.preventDefault=function(){s.isDefaultPrevented=o,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},s.stopPropagation=function(){s.isPropagationStopped=o,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=o,s.stopPropagation()},s.isDefaultPrevented||(s.isDefaultPrevented=r,s.isPropagationStopped=r,s.isImmediatePropagationStopped=r),"undefined"==typeof s.metaKey&&(s.metaKey=!1),s}function a(t,i,o){function a(){o.domLoaded||(o.domLoaded=!0,i(u))}function s(){("complete"===c.readyState||"interactive"===c.readyState&&c.body)&&(r(c,"readystatechange",s),a())}function l(){try{c.documentElement.doScroll("left")}catch(t){return void e.setTimeout(l)}a()}var c=t.document,u={type:"ready"};return o.domLoaded?void i(u):(c.addEventListener?"complete"===c.readyState?a():n(t,"DOMContentLoaded",a):(n(c,"readystatechange",s),c.documentElement.doScroll&&t.self===t.top&&l()),void n(t,"load",a))}function s(){function e(e,t){var n,r,o,a,s=i[t];if(n=s&&s[e.type])for(r=0,o=n.length;o>r;r++)if(a=n[r],a&&a.func.call(a.scope,e)===!1&&e.preventDefault(),e.isImmediatePropagationStopped())return}var t=this,i={},s,c,u,d,f;c=l+(+new Date).toString(32),d="onmouseenter"in document.documentElement,u="onfocusin"in document.documentElement,f={mouseenter:"mouseover",mouseleave:"mouseout"},s=1,t.domLoaded=!1,t.events=i,t.bind=function(r,l,h,p){function m(t){e(o(t||N.event),g)}var g,v,y,b,C,x,w,N=window;if(r&&3!==r.nodeType&&8!==r.nodeType){for(r[c]?g=r[c]:(g=s++,r[c]=g,i[g]={}),p=p||r,l=l.split(" "),y=l.length;y--;)b=l[y],x=m,C=w=!1,"DOMContentLoaded"===b&&(b="ready"),t.domLoaded&&"ready"===b&&"complete"==r.readyState?h.call(p,o({type:b})):(d||(C=f[b],C&&(x=function(t){var n,r;if(n=t.currentTarget,r=t.relatedTarget,r&&n.contains)r=n.contains(r);else for(;r&&r!==n;)r=r.parentNode;r||(t=o(t||N.event),t.type="mouseout"===t.type?"mouseleave":"mouseenter",t.target=n,e(t,g))})),u||"focusin"!==b&&"focusout"!==b||(w=!0,C="focusin"===b?"focus":"blur",x=function(t){t=o(t||N.event),t.type="focus"===t.type?"focusin":"focusout",e(t,g)}),v=i[g][b],v?"ready"===b&&t.domLoaded?h({type:b}):v.push({func:h,scope:p}):(i[g][b]=v=[{func:h,scope:p}],v.fakeName=C,v.capture=w,v.nativeHandler=x,"ready"===b?a(r,x,t):n(r,C||b,x,w)));return r=v=0,h}},t.unbind=function(e,n,o){var a,s,l,u,d,f;if(!e||3===e.nodeType||8===e.nodeType)return t;if(a=e[c]){if(f=i[a],n){for(n=n.split(" "),l=n.length;l--;)if(d=n[l],s=f[d]){if(o)for(u=s.length;u--;)if(s[u].func===o){var h=s.nativeHandler,p=s.fakeName,m=s.capture;s=s.slice(0,u).concat(s.slice(u+1)),s.nativeHandler=h,s.fakeName=p,s.capture=m,f[d]=s}o&&0!==s.length||(delete f[d],r(e,s.fakeName||d,s.nativeHandler,s.capture))}}else{for(d in f)s=f[d],r(e,s.fakeName||d,s.nativeHandler,s.capture);f={}}for(d in f)return t;delete i[a];try{delete e[c]}catch(g){e[c]=null}}return t},t.fire=function(n,r,i){var a;if(!n||3===n.nodeType||8===n.nodeType)return t;i=o(null,i),i.type=r,i.target=n;do a=n[c],a&&e(i,a),n=n.parentNode||n.ownerDocument||n.defaultView||n.parentWindow;while(n&&!i.isPropagationStopped());return t},t.clean=function(e){var n,r,i=t.unbind;if(!e||3===e.nodeType||8===e.nodeType)return t;if(e[c]&&i(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(i(e),r=e.getElementsByTagName("*"),n=r.length;n--;)e=r[n],e[c]&&i(e);return t},t.destroy=function(){i={}},t.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}}var l="mce-data-",c=/^(?:mouse|contextmenu)|click/,u={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1};return s.Event=new s,s.Event.bind(window,"ready",function(){}),s}),r(h,[],function(){function e(e,t,n,r){var i,o,a,s,l,c,d,h,p,m;if((t?t.ownerDocument||t:z)!==D&&B(t),t=t||D,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(M&&!r){if(i=ve.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&I(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&x.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(x.qsa&&(!P||!P.test(e))){if(h=d=F,p=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=_(e),(d=t.getAttribute("id"))?h=d.replace(be,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=c.length;l--;)c[l]=h+f(c[l]);p=ye.test(e)&&u(t.parentNode)||t,m=c.join(",")}if(m)try{return Z.apply(n,p.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return k(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=D.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)w.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&typeof e.getElementsByTagName!==Y&&e}function d(){}function f(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=W++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,c=[U,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[F]||(t[F]={}),(s=l[r])&&s[0]===U&&s[1]===o)return c[2]=s[2];if(l[r]=c,c[2]=e(t,n,a))return!0}}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(t,n,r){for(var i=0,o=n.length;o>i;i++)e(t,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,c=null!=t;l>s;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),c&&t.push(s)));return a}function v(e,t,n,i,o,a){return i&&!i[F]&&(i=v(i)),o&&!o[F]&&(o=v(o,a)),r(function(r,a,s,l){var c,u,d,f=[],h=[],p=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:g(v,f,e,s,l),b=n?o||(r?e:p||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(c=g(b,h),i(c,[],s,l),u=c.length;u--;)(d=c[u])&&(b[h[u]]=!(y[h[u]]=d));if(r){if(o||e){if(o){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d);o(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=o?te.call(r,d):f[u])>-1&&(r[c]=!(a[c]=d))}}else b=g(b===a?b.splice(p,b.length):b),o?o(null,a,b,l):Z.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,l=h(function(e){return e===t},a,!0),c=h(function(e){return te.call(t,e)>-1},a,!0),u=[function(e,n,r){return!o&&(r||n!==T)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];i>s;s++)if(n=w.relative[e[s].type])u=[h(p(u),n)];else{if(n=w.filter[e[s].type].apply(null,e[s].matches),n[F]){for(r=++s;i>r&&!w.relative[e[r].type];r++);return v(s>1&&p(u),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))}u.push(n)}return p(u)}function b(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,l,c){var u,d,f,h=0,p="0",m=r&&[],v=[],y=T,b=r||o&&w.find.TAG("*",c),C=U+=null==y?1:Math.random()||.1,x=b.length;for(c&&(T=a!==D&&a);p!==x&&null!=(u=b[p]);p++){if(o&&u){for(d=0;f=t[d++];)if(f(u,a,s)){l.push(u);break}c&&(U=C)}i&&((u=!f&&u)&&h--,r&&m.push(u))}if(h+=p,i&&p!==h){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(h>0)for(;p--;)m[p]||v[p]||(v[p]=J.call(l));v=g(v)}Z.apply(l,v),c&&!r&&v.length>0&&h+n.length>1&&e.uniqueSort(l)}return c&&(U=C,T=y),m};return i?r(a):a}var C,x,w,N,E,_,S,k,T,R,A,B,D,L,M,P,H,O,I,F="sizzle"+-new Date,z=window.document,U=0,W=0,V=n(),$=n(),q=n(),j=function(e,t){return e===t&&(A=!0),0},Y=typeof t,X=1<<31,K={}.hasOwnProperty,G=[],J=G.pop,Q=G.push,Z=G.push,ee=G.slice,te=G.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+re+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),le=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),ue=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(ae),fe=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,be=/'|\\/g,Ce=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=ee.call(z.childNodes),z.childNodes),G[z.childNodes.length].nodeType}catch(we){Z={apply:G.length?function(e,t){Q.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=e.support={},E=e.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},B=e.setDocument=function(e){function t(e){try{return e.top}catch(t){}return null}var n,r=e?e.ownerDocument||e:z,o=r.defaultView;return r!==D&&9===r.nodeType&&r.documentElement?(D=r,L=r.documentElement,M=!E(r),o&&o!==t(o)&&(o.addEventListener?o.addEventListener("unload",function(){B()},!1):o.attachEvent&&o.attachEvent("onunload",function(){B()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ge.test(r.getElementsByClassName),x.getById=i(function(e){return L.appendChild(e).id=F,!r.getElementsByName||!r.getElementsByName(F).length}),x.getById?(w.find.ID=function(e,t){if(typeof t.getElementById!==Y&&M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){return e.getAttribute("id")===t}}):(delete w.find.ID,w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){var n=typeof e.getAttributeNode!==Y&&e.getAttributeNode("id");return n&&n.value===t}}),w.find.TAG=x.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==Y?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=x.getElementsByClassName&&function(e,t){return M?t.getElementsByClassName(e):void 0},H=[],P=[],(x.qsa=ge.test(r.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll(":checked").length||P.push(":checked")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+re+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=ge.test(O=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&i(function(e){x.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),H.push("!=",ae)}),P=P.length&&new RegExp(P.join("|")),H=H.length&&new RegExp(H.join("|")),n=ge.test(L.compareDocumentPosition),I=n||ge.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=n?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===z&&I(z,e)?-1:t===r||t.ownerDocument===z&&I(z,t)?1:R?te.call(R,e)-te.call(R,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,l=[e],c=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:R?te.call(R,e)-te.call(R,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;l[i]===c[i];)i++;return i?a(l[i],c[i]):l[i]===z?-1:c[i]===z?1:0},r):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&B(t),n=n.replace(ue,"='$1']"),x.matchesSelector&&M&&(!H||!H.test(n))&&(!P||!P.test(n)))try{var r=O.call(t,n);if(r||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,D,null,[t]).length>0},e.contains=function(e,t){return(e.ownerDocument||e)!==D&&B(e),I(e,t)},e.attr=function(e,n){(e.ownerDocument||e)!==D&&B(e);var r=w.attrHandle[n.toLowerCase()],i=r&&K.call(w.attrHandle,n.toLowerCase())?r(e,n,!M):t;return i!==t?i:x.attributes||!M?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null},e.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},e.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!x.detectDuplicates,R=!x.sortStable&&e.slice(0),e.sort(j),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return R=null,e},N=e.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=N(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=N(t);return n},w=e.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ce,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(Ce,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=_(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ce,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=V[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&V(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Y&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,f,h,p,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?g.firstChild:g.lastChild],a&&y){for(u=g[F]||(g[F]={}),c=u[e]||[],h=c[0]===U&&c[1],f=c[0]===U&&c[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(f=h=0)||p.pop();)if(1===d.nodeType&&++f&&d===t){u[e]=[U,h,f];break}}else if(y&&(c=(t[F]||(t[F]={}))[e])&&c[0]===U)f=c[1];else for(;(d=++h&&d&&d[m]||(f=h=0)||p.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[F]||(d[F]={}))[e]=[U,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(t,n){var i,o=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[F]?o(n):o.length>1?(i=[t,t,"",n],w.setFilters.hasOwnProperty(t.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(se,"$1"));return i[F]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(e){return e=e.replace(Ce,xe),function(t){return(t.textContent||t.innerText||N(t)).indexOf(e)>-1}}),lang:r(function(t){return fe.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(Ce,xe).toLowerCase(),function(e){var n;do if(n=M?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===L},focus:function(e){return e===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[C]=s(C);for(C in{submit:!0,reset:!0})w.pseudos[C]=l(C);return d.prototype=w.filters=w.pseudos,w.setFilters=new d,_=e.tokenize=function(t,n){var r,i,o,a,s,l,c,u=$[t+" "];if(u)return n?0:u.slice(0);for(s=t,l=[],c=w.preFilter;s;){r&&!(i=le.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in w.filter)!(i=he[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?e.error(t):$(t,l).slice(0)},S=e.compile=function(e,t){var n,r=[],i=[],o=q[e+" "];if(!o){for(t||(t=_(e)),n=t.length;n--;)o=y(t[n]),o[F]?r.push(o):i.push(o);o=q(e,b(i,r)),o.selector=e}return o},k=e.select=function(e,t,n,r){var i,o,a,s,l,c="function"==typeof e&&e,d=!r&&_(e=c.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&x.getById&&9===t.nodeType&&M&&w.relative[o[1].type]){if(t=(w.find.ID(a.matches[0].replace(Ce,xe),t)||[])[0],!t)return n;c&&(t=t.parentNode),
    e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((l=w.find[s])&&(r=l(a.matches[0].replace(Ce,xe),ye.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return Z.apply(n,r),n;break}}return(c||S(e,d))(r,t,!M,n,ye.test(e)&&u(t.parentNode)||t),n},x.sortStable=F.split("").sort(j).join("")===F,x.detectDuplicates=!!A,B(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(D.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),e}),r(p,[],function(){function e(e){var t=e,n,r;if(!u(e))for(t=[],n=0,r=e.length;r>n;n++)t[n]=e[n];return t}function n(e,n,r){var i,o;if(!e)return 0;if(r=r||e,e.length!==t){for(i=0,o=e.length;o>i;i++)if(n.call(r,e[i],i,e)===!1)return 0}else for(i in e)if(e.hasOwnProperty(i)&&n.call(r,e[i],i,e)===!1)return 0;return 1}function r(e,t){var r=[];return n(e,function(n,i){r.push(t(n,i,e))}),r}function i(e,t){var r=[];return n(e,function(n,i){t&&!t(n,i,e)||r.push(n)}),r}function o(e,t){var n,r;if(e)for(n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function a(e,t,n,r){var i=0;for(arguments.length<3&&(n=e[0]);i<e.length;i++)n=t.call(r,n,e[i],i);return n}function s(e,t,n){var r,i;for(r=0,i=e.length;i>r;r++)if(t.call(n,e[r],r,e))return r;return-1}function l(e,n,r){var i=s(e,n,r);return-1!==i?e[i]:t}function c(e){return e[e.length-1]}var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return{isArray:u,toArray:e,each:n,map:r,filter:i,indexOf:o,reduce:a,findIndex:s,find:l,last:c}}),r(m,[d,p],function(e,n){function r(e){return null===e||e===t?"":(""+e).replace(h,"")}function i(e,r){return r?"array"==r&&n.isArray(e)?!0:typeof e==r:e!==t}function o(e,t,n){var r;for(e=e||[],t=t||",","string"==typeof e&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n}function a(e,t,n){var r=this,i,o,a,s,l,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),a=e[3].match(/(^|\.)(\w+)$/i)[2],o=r.createNS(e[3].replace(/\.\w+$/,""),n),!o[a]){if("static"==e[2])return o[a]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[a]));t[a]||(t[a]=function(){},c=1),o[a]=t[a],r.extend(o[a].prototype,t),e[5]&&(i=r.resolve(e[5]).prototype,s=e[5].match(/\.(\w+)$/i)[1],l=o[a],c?o[a]=function(){return i[s].apply(this,arguments)}:o[a]=function(){return this.parent=i[s],l.apply(this,arguments)},o[a].prototype[a]=o[a],r.each(i,function(e,t){o[a].prototype[t]=i[t]}),r.each(t,function(e,t){i[t]?o[a].prototype[t]=function(){return this.parent=i[t],e.apply(this,arguments)}:t!=a&&(o[a].prototype[t]=e)})),r.each(t["static"],function(e,t){o[a][t]=e})}}function s(e,n){var r,i,o,a=arguments,s;for(r=1,i=a.length;i>r;r++){n=a[r];for(o in n)n.hasOwnProperty(o)&&(s=n[o],s!==t&&(e[o]=s))}return e}function l(e,t,r,i){i=i||this,e&&(r&&(e=e[r]),n.each(e,function(e,n){return t.call(i,e,n,r)===!1?!1:void l(e,t,r,i)}))}function c(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)r=e[n],t[r]||(t[r]={}),t=t[r];return t}function u(e,t){var n,r;for(t=t||window,e=e.split("."),n=0,r=e.length;r>n&&(t=t[e[n]],t);n++);return t}function d(e,t){return!e||i(e,"array")?e:n.map(e.split(t||","),r)}function f(t){var n=e.cacheSuffix;return n&&(t+=(-1===t.indexOf("?")?"?":"&")+n),t}var h=/^\s*|\s*$/g;return{trim:r,isArray:n.isArray,is:i,toArray:n.toArray,makeMap:o,each:n.each,map:n.map,grep:n.filter,inArray:n.indexOf,extend:s,create:a,walk:l,createNS:c,resolve:u,explode:d,_addCacheSuffix:f}}),r(g,[f,h,m,d],function(e,n,r,i){function o(e){return"undefined"!=typeof e}function a(e){return"string"==typeof e}function s(e){return e&&e==e.window}function l(e,t){var n,r,i;for(t=t||w,i=t.createElement("div"),n=t.createDocumentFragment(),i.innerHTML=e;r=i.firstChild;)n.appendChild(r);return n}function c(e,t,n,r){var i;if(a(t))t=l(t,v(e[0]));else if(t.length&&!t.nodeType){if(t=f.makeArray(t),r)for(i=t.length-1;i>=0;i--)c(e,t[i],n,r);else for(i=0;i<t.length;i++)c(e,t[i],n,r);return e}if(t.nodeType)for(i=e.length;i--;)n.call(e[i],t);return e}function u(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function d(e,t,n){var r,i;return t=f(t)[0],e.each(function(){var e=this;n&&r==e.parentNode?i.appendChild(e):(r=e.parentNode,i=t.cloneNode(!1),e.parentNode.insertBefore(i,e),i.appendChild(e))}),e}function f(e,t){return new f.fn.init(e,t)}function h(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1}function p(e){return null===e||e===k?"":(""+e).replace(P,"")}function m(e,t){var n,r,i,o,a;if(e)if(n=e.length,n===o){for(r in e)if(e.hasOwnProperty(r)&&(a=e[r],t.call(a,r,a)===!1))break}else for(i=0;n>i&&(a=e[i],t.call(a,i,a)!==!1);i++);return e}function g(e,t){var n=[];return m(e,function(e,r){t(r,e)&&n.push(r)}),n}function v(e){return e?9==e.nodeType?e:e.ownerDocument:w}function y(e,n,r){var i=[],o=e[n];for("string"!=typeof r&&r instanceof f&&(r=r[0]);o&&9!==o.nodeType;){if(r!==t){if(o===r)break;if("string"==typeof r&&f(o).is(r))break}1===o.nodeType&&i.push(o),o=o[n]}return i}function b(e,n,r,i){var o=[];for(i instanceof f&&(i=i[0]);e;e=e[n])if(!r||e.nodeType===r){if(i!==t){if(e===i)break;if("string"==typeof i&&f(e).is(i))break}o.push(e)}return o}function C(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType==n)return e;return null}function x(e,t,n){m(n,function(n,r){e[n]=e[n]||{},e[n][t]=r})}var w=document,N=Array.prototype.push,E=Array.prototype.slice,_=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,S=e.Event,k,T=r.makeMap("children,contents,next,prev"),R=r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),A=r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),B={"for":"htmlFor","class":"className",readonly:"readOnly"},D={"float":"cssFloat"},L={},M={},P=/^\s*|\s*$/g;return f.fn=f.prototype={constructor:f,selector:"",context:null,length:0,init:function(e,t){var n=this,r,i;if(!e)return n;if(e.nodeType)return n.context=n[0]=e,n.length=1,n;if(t&&t.nodeType)n.context=t;else{if(t)return f(e).attr(t);n.context=t=document}if(a(e)){if(n.selector=e,r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:_.exec(e),!r)return f(t).find(e);if(r[1])for(i=l(e,v(t)).firstChild;i;)N.call(n,i),i=i.nextSibling;else{if(i=v(t).getElementById(r[2]),!i)return n;if(i.id!==r[2])return n.find(e);n.length=1,n[0]=i}}else this.add(e,!1);return n},toArray:function(){return r.toArray(this)},add:function(e,t){var n=this,r,i;if(a(e))return n.add(f(e));if(t!==!1)for(r=f.unique(n.toArray().concat(f.makeArray(e))),n.length=r.length,i=0;i<r.length;i++)n[i]=r[i];else N.apply(n,f.makeArray(e));return n},attr:function(e,t){var n=this,r;if("object"==typeof e)m(e,function(e,t){n.attr(e,t)});else{if(!o(t)){if(n[0]&&1===n[0].nodeType){if(r=L[e],r&&r.get)return r.get(n[0],e);if(A[e])return n.prop(e)?e:k;t=n[0].getAttribute(e,2),null===t&&(t=k)}return t}this.each(function(){var n;if(1===this.nodeType){if(n=L[e],n&&n.set)return void n.set(this,t);null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}})}return n},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if(e=B[e]||e,"object"==typeof e)m(e,function(e,t){n.prop(e,t)});else{if(!o(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1==this.nodeType&&(this[e]=t)})}return n},css:function(e,t){function n(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})}function r(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})}var i=this,a,s;if("object"==typeof e)m(e,function(e,t){i.css(e,t)});else if(o(t))e=n(e),"number"!=typeof t||R[e]||(t+="px"),i.each(function(){var n=this.style;if(s=M[e],s&&s.set)return void s.set(this,t);try{this.style[D[e]||e]=t}catch(i){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(r(e)):n.removeAttribute(e))});else{if(a=i[0],s=M[e],s&&s.get)return s.get(a);if(a.ownerDocument.defaultView)try{return a.ownerDocument.defaultView.getComputedStyle(a,null).getPropertyValue(r(e))}catch(l){return k}else if(a.currentStyle)return a.currentStyle[n(e)]}return i},remove:function(){for(var e=this,t,n=this.length;n--;)t=e[n],S.clean(t),t.parentNode&&t.parentNode.removeChild(t);return this},empty:function(){for(var e=this,t,n=this.length;n--;)for(t=e[n];t.firstChild;)t.removeChild(t.firstChild);return this},html:function(e){var t=this,n;if(o(e)){n=t.length;try{for(;n--;)t[n].innerHTML=e}catch(r){f(t[n]).empty().append(e)}return t}return t[0]?t[0].innerHTML:""},text:function(e){var t=this,n;if(o(e)){for(n=t.length;n--;)"innerText"in t[n]?t[n].innerText=e:t[0].textContent=e;return t}return t[0]?t[0].innerText||t[0].textContent:""},append:function(){return c(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)})},prepend:function(){return c(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)},!0)},before:function(){var e=this;return e[0]&&e[0].parentNode?c(e,arguments,function(e){this.parentNode.insertBefore(e,this)}):e},after:function(){var e=this;return e[0]&&e[0].parentNode?c(e,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):e},appendTo:function(e){return f(e).append(this),this},prependTo:function(e){return f(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return d(this,e)},wrapAll:function(e){return d(this,e,!0)},wrapInner:function(e){return this.each(function(){f(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){f(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),f(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this;return"string"!=typeof e?n:(-1!==e.indexOf(" ")?m(e.split(" "),function(){n.toggleClass(this,t)}):n.each(function(n,r){var i,o;o=u(r,e),o!==t&&(i=r.className,o?r.className=p((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e)}),n)},hasClass:function(e){return u(this[0],e)},each:function(e){return m(this,e)},on:function(e,t){return this.each(function(){S.bind(this,e,t)})},off:function(e,t){return this.each(function(){S.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?S.fire(this,e.type,e):S.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new f(E.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;n>t;t++)f.find(e,this[t],r);return f(r)},filter:function(e){return f("function"==typeof e?g(this.toArray(),function(t,n){return e(n,t)}):f.filter(e,this.toArray()))},closest:function(e){var t=[];return e instanceof f&&(e=e[0]),this.each(function(n,r){for(;r;){if("string"==typeof e&&f(r).is(e)){t.push(r);break}if(r==e){t.push(r);break}r=r.parentNode}}),f(t)},offset:function(e){var t,n,r,i=0,o=0,a;return e?this.css(e):(t=this[0],t&&(n=t.ownerDocument,r=n.documentElement,t.getBoundingClientRect&&(a=t.getBoundingClientRect(),i=a.left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,o=a.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:o})},push:N,sort:[].sort,splice:[].splice},r.extend(f,{extend:r.extend,makeArray:function(e){return s(e)||e.nodeType?[e]:r.toArray(e)},inArray:h,isArray:r.isArray,each:m,trim:p,grep:g,find:n,expr:n.selectors,unique:n.uniqueSort,text:n.getText,contains:n.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!=t[r].nodeType&&t.splice(r,1);return t=1===t.length?f.find.matchesSelector(t[0],e)?[t[0]]:[]:f.find.matches(e,t)}}),m({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return y(e,"parentNode")},next:function(e){return C(e,"nextSibling",1)},prev:function(e){return C(e,"previousSibling",1)},children:function(e){return b(e.firstChild,"nextSibling",1)},contents:function(e){return r.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,t){f.fn[e]=function(n){var r=this,i=[];return r.each(function(){var e=t.call(i,this,n,i);e&&(f.isArray(e)?i.push.apply(i,e):i.push(e))}),this.length>1&&(T[e]||(i=f.unique(i)),0===e.indexOf("parents")&&(i=i.reverse())),i=f(i),n?i.filter(n):i}}),m({parentsUntil:function(e,t){return y(e,"parentNode",t)},nextUntil:function(e,t){return b(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return b(e,"previousSibling",1,t).slice(1)}},function(e,t){f.fn[e]=function(n,r){var i=this,o=[];return i.each(function(){var e=t.call(o,this,n,o);e&&(f.isArray(e)?o.push.apply(o,e):o.push(e))}),this.length>1&&(o=f.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse())),o=f(o),r?o.filter(r):o}}),f.fn.is=function(e){return!!e&&this.filter(e).length>0},f.fn.init.prototype=f.fn,f.overrideDefaults=function(e){function t(r,i){return n=n||e(),0===arguments.length&&(r=n.element),i||(i=n.context),new t.fn.init(r,i)}var n;return f.extend(t,this),t},i.ie&&i.ie<8&&(x(L,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?k:t},size:function(e){var t=e.size;return 20===t?k:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?k:t}}),x(L,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),i.ie&&i.ie<9&&(D["float"]="styleFloat",x(M,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),f.attrHooks=L,f.cssHooks=M,f}),r(v,[],function(){return function(e,t){function n(e,t,n,r){function i(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+i(t)+i(n)+i(r)}var r=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,o=/\s*([^:]+):\s*([^;]+);?/g,a=/\s+$/,s,l,c={},u,d,f,h="\ufeff";for(e=e||{},t&&(d=t.getValidStyles(),f=t.getInvalidStyles()),u=("\\\" \\' \\; \\: ; : "+h).split(" "),l=0;l<u.length;l++)c[u[l]]=h+l,c[h+l]=u[l];return{toHex:function(e){return e.replace(r,n)},parse:function(t){function s(e,t,n){var r,i,o,a;if(r=m[e+"-top"+t],r&&(i=m[e+"-right"+t],i&&(o=m[e+"-bottom"+t],o&&(a=m[e+"-left"+t])))){var s=[r,i,o,a];for(l=s.length-1;l--&&s[l]===s[l+1];);l>-1&&n||(m[e+t]=-1==l?s[0]:s.join(" "),delete m[e+"-top"+t],delete m[e+"-right"+t],delete m[e+"-bottom"+t],delete m[e+"-left"+t])}}function u(e){var t=m[e],n;if(t){for(t=t.split(" "),n=t.length;n--;)if(t[n]!==t[0])return!1;return m[e]=t[0],!0}}function d(e,t,n,r){u(t)&&u(n)&&u(r)&&(m[e]=m[t]+" "+m[n]+" "+m[r],delete m[t],delete m[n],delete m[r])}function f(e){return b=!0,c[e]}function h(e,t){return b&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return c[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e}function p(t,n,r,i,o,a){if(o=o||a)return o=h(o),"'"+o.replace(/\'/g,"\\'")+"'";if(n=h(n||r||i),!e.allow_script_urls){var s=n.replace(/[\s\r\n]+/,"");if(/(java|vb)script:/i.test(s))return"";if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(s))return""}return C&&(n=C.call(x,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}var m={},g,v,y,b,C=e.url_converter,x=e.url_converter_scope||this;if(t){for(t=t.replace(/[\u0000-\u001F]/g,""),t=t.replace(/\\[\"\';:\uFEFF]/g,f).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,f)});g=o.exec(t);){if(v=g[1].replace(a,"").toLowerCase(),y=g[2].replace(a,""),y=y.replace(/\\[0-9a-f]+/g,function(e){return String.fromCharCode(parseInt(e.substr(1),16))}),v&&y.length>0){if(!e.allow_script_urls&&("behavior"==v||/expression\s*\(|\/\*|\*\//.test(y)))continue;"font-weight"===v&&"700"===y?y="bold":"color"!==v&&"background-color"!==v||(y=y.toLowerCase()),y=y.replace(r,n),y=y.replace(i,p),m[v]=b?h(y,!0):y}o.lastIndex=g.index+g[0].length}s("border","",!0),s("border","-width"),s("border","-color"),s("border","-style"),s("padding",""),s("margin",""),d("border","border-width","border-style","border-color"),"medium none"===m.border&&delete m.border,"none"===m["border-image"]&&delete m["border-image"]}return m},serialize:function(e,t){function n(t){var n,r,o,a;if(n=d[t])for(r=0,o=n.length;o>r;r++)t=n[r],a=e[t],a!==s&&a.length>0&&(i+=(i.length>0?" ":"")+t+": "+a+";")}function r(e,t){var n;return n=f["*"],n&&n[e]?!1:(n=f[t],!n||!n[e])}var i="",o,a;if(t&&d)n("*"),n(t);else for(o in e)a=e[o],a!==s&&a.length>0&&(f&&!r(o,t)||(i+=(i.length>0?" ":"")+o+": "+a+";"));return i}}}}),r(y,[],function(){return function(e,t){function n(e,n,r,i){var o,a;if(e){if(!i&&e[n])return e[n];if(e!=t){if(o=e[r])return o;for(a=e.parentNode;a&&a!=t;a=a.parentNode)if(o=a[r])return o}}}function r(e,n,r,i){var o,a,s;if(e){if(o=e[r],t&&o===t)return;if(o){if(!i)for(s=o[n];s;s=s[n])if(!s[n])return s;return o}if(a=e.parentNode,a&&a!==t)return a}}var i=e;this.current=function(){return i},this.next=function(e){return i=n(i,"firstChild","nextSibling",e)},this.prev=function(e){return i=n(i,"lastChild","previousSibling",e)},this.prev2=function(e){return i=r(i,"lastChild","previousSibling",e)}}}),r(b,[m],function(e){function t(n){function r(){return P.createDocumentFragment()}function i(e,t){N(F,e,t)}function o(e,t){N(z,e,t)}function a(e){i(e.parentNode,j(e))}function s(e){i(e.parentNode,j(e)+1)}function l(e){o(e.parentNode,j(e))}function c(e){o(e.parentNode,j(e)+1)}function u(e){e?(M[V]=M[W],M[$]=M[U]):(M[W]=M[V],M[U]=M[$]),M.collapsed=F}function d(e){a(e),c(e)}function f(e){i(e,0),o(e,1===e.nodeType?e.childNodes.length:e.nodeValue.length)}function h(e,t){var n=M[W],r=M[U],i=M[V],o=M[$],a=t.startContainer,s=t.startOffset,l=t.endContainer,c=t.endOffset;return 0===e?w(n,r,a,s):1===e?w(i,o,a,s):2===e?w(i,o,l,c):3===e?w(n,r,l,c):void 0}function p(){E(I)}function m(){return E(H)}function g(){return E(O)}function v(e){var t=this[W],r=this[U],i,o;3!==t.nodeType&&4!==t.nodeType||!t.nodeValue?(t.childNodes.length>0&&(o=t.childNodes[r]),o?t.insertBefore(e,o):3==t.nodeType?n.insertAfter(e,t):t.appendChild(e)):r?r>=t.nodeValue.length?n.insertAfter(e,t):(i=t.splitText(r),t.parentNode.insertBefore(e,i)):t.parentNode.insertBefore(e,t)}function y(e){var t=M.extractContents();M.insertNode(e),e.appendChild(t),M.selectNode(e)}function b(){return q(new t(n),{startContainer:M[W],startOffset:M[U],endContainer:M[V],endOffset:M[$],collapsed:M.collapsed,commonAncestorContainer:M.commonAncestorContainer})}function C(e,t){var n;if(3==e.nodeType)return e;if(0>t)return e;for(n=e.firstChild;n&&t>0;)--t,n=n.nextSibling;return n?n:e}function x(){return M[W]==M[V]&&M[U]==M[$]}function w(e,t,r,i){var o,a,s,l,c,u;if(e==r)return t==i?0:i>t?-1:1;for(o=r;o&&o.parentNode!=e;)o=o.parentNode;if(o){for(a=0,s=e.firstChild;s!=o&&t>a;)a++,s=s.nextSibling;return a>=t?-1:1}for(o=e;o&&o.parentNode!=r;)o=o.parentNode;if(o){for(a=0,s=r.firstChild;s!=o&&i>a;)a++,s=s.nextSibling;return i>a?-1:1}for(l=n.findCommonAncestor(e,r),c=e;c&&c.parentNode!=l;)c=c.parentNode;for(c||(c=l),u=r;u&&u.parentNode!=l;)u=u.parentNode;if(u||(u=l),c==u)return 0;for(s=l.firstChild;s;){if(s==c)return-1;if(s==u)return 1;s=s.nextSibling}}function N(e,t,r){var i,o;for(e?(M[W]=t,M[U]=r):(M[V]=t,M[$]=r),i=M[V];i.parentNode;)i=i.parentNode;for(o=M[W];o.parentNode;)o=o.parentNode;o==i?w(M[W],M[U],M[V],M[$])>0&&M.collapse(e):M.collapse(e),M.collapsed=x(),M.commonAncestorContainer=n.findCommonAncestor(M[W],M[V])}function E(e){var t,n=0,r=0,i,o,a,s,l,c;if(M[W]==M[V])return _(e);for(t=M[V],i=t.parentNode;i;t=i,i=i.parentNode){if(i==M[W])return S(t,e);++n}for(t=M[W],i=t.parentNode;i;t=i,i=i.parentNode){if(i==M[V])return k(t,e);++r}for(o=r-n,a=M[W];o>0;)a=a.parentNode,o--;for(s=M[V];0>o;)s=s.parentNode,o++;for(l=a.parentNode,c=s.parentNode;l!=c;l=l.parentNode,c=c.parentNode)a=l,s=c;return T(a,s,e)}function _(e){var t,n,i,o,a,s,l,c,u;if(e!=I&&(t=r()),M[U]==M[$])return t;if(3==M[W].nodeType){if(n=M[W].nodeValue,i=n.substring(M[U],M[$]),e!=O&&(o=M[W],c=M[U],u=M[$]-M[U],0===c&&u>=o.nodeValue.length-1?o.parentNode.removeChild(o):o.deleteData(c,u),M.collapse(F)),e==I)return;return i.length>0&&t.appendChild(P.createTextNode(i)),t}for(o=C(M[W],M[U]),a=M[$]-M[U];o&&a>0;)s=o.nextSibling,l=D(o,e),t&&t.appendChild(l),--a,o=s;return e!=O&&M.collapse(F),t}function S(e,t){var n,i,o,a,s,l;if(t!=I&&(n=r()),i=R(e,t),n&&n.appendChild(i),o=j(e),a=o-M[U],0>=a)return t!=O&&(M.setEndBefore(e),M.collapse(z)),n;for(i=e.previousSibling;a>0;)s=i.previousSibling,l=D(i,t),n&&n.insertBefore(l,n.firstChild),--a,i=s;return t!=O&&(M.setEndBefore(e),M.collapse(z)),n}function k(e,t){var n,i,o,a,s,l;for(t!=I&&(n=r()),o=A(e,t),n&&n.appendChild(o),i=j(e),++i,a=M[$]-i,o=e.nextSibling;o&&a>0;)s=o.nextSibling,l=D(o,t),n&&n.appendChild(l),--a,o=s;return t!=O&&(M.setStartAfter(e),M.collapse(F)),n}function T(e,t,n){var i,o,a,s,l,c,u;for(n!=I&&(o=r()),i=A(e,n),o&&o.appendChild(i),a=j(e),s=j(t),++a,l=s-a,c=e.nextSibling;l>0;)u=c.nextSibling,i=D(c,n),o&&o.appendChild(i),c=u,--l;return i=R(t,n),o&&o.appendChild(i),n!=O&&(M.setStartAfter(e),M.collapse(F)),o}function R(e,t){var n=C(M[V],M[$]-1),r,i,o,a,s,l=n!=M[V];if(n==e)return B(n,l,z,t);for(r=n.parentNode,i=B(r,z,z,t);r;){for(;n;)o=n.previousSibling,a=B(n,l,z,t),t!=I&&i.insertBefore(a,i.firstChild),l=F,n=o;if(r==e)return i;n=r.previousSibling,r=r.parentNode,s=B(r,z,z,t),t!=I&&s.appendChild(i),i=s}}function A(e,t){var n=C(M[W],M[U]),r=n!=M[W],i,o,a,s,l;if(n==e)return B(n,r,F,t);for(i=n.parentNode,o=B(i,z,F,t);i;){for(;n;)a=n.nextSibling,s=B(n,r,F,t),t!=I&&o.appendChild(s),r=F,n=a;if(i==e)return o;n=i.nextSibling,i=i.parentNode,l=B(i,z,F,t),t!=I&&l.appendChild(o),o=l}}function B(e,t,r,i){var o,a,s,l,c;if(t)return D(e,i);if(3==e.nodeType){if(o=e.nodeValue,r?(l=M[U],a=o.substring(l),s=o.substring(0,l)):(l=M[$],a=o.substring(0,l),s=o.substring(l)),i!=O&&(e.nodeValue=s),i==I)return;return c=n.clone(e,z),c.nodeValue=a,c}if(i!=I)return n.clone(e,z)}function D(e,t){return t!=I?t==O?n.clone(e,F):e:void e.parentNode.removeChild(e)}function L(){return n.create("body",null,g()).outerText}var M=this,P=n.doc,H=0,O=1,I=2,F=!0,z=!1,U="startOffset",W="startContainer",V="endContainer",$="endOffset",q=e.extend,j=n.nodeIndex;return q(M,{startContainer:P,startOffset:0,endContainer:P,endOffset:0,collapsed:F,commonAncestorContainer:P,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:i,setEnd:o,setStartBefore:a,setStartAfter:s,setEndBefore:l,setEndAfter:c,collapse:u,selectNode:d,selectNodeContents:f,compareBoundaryPoints:h,deleteContents:p,extractContents:m,cloneContents:g,insertNode:v,surroundContents:y,cloneRange:b,toStringIE:L}),M}return t.prototype.toString=function(){return this.toStringIE()},t}),r(C,[m],function(e){function t(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.textContent||t.innerText||e}function n(e,t){var n,r,i,a={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),o[r]||(i="&"+e[n+1]+";",a[r]=i,a[i]=r);return a}}var r=e.makeMap,i,o,a,s=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=/[<>&\"\']/g,u=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,d={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},a={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},i=n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var f={encodeRaw:function(e,t){return e.replace(t?s:l,function(e){return o[e]||e})},encodeAllRaw:function(e){return(""+e).replace(c,function(e){return o[e]||e})},encodeNumeric:function(e,t){return e.replace(t?s:l,function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":o[e]||"&#"+e.charCodeAt(0)+";"})},encodeNamed:function(e,t,n){return n=n||i,e.replace(t?s:l,function(e){return o[e]||n[e]||e})},getEncodeFunc:function(e,t){function a(e,n){return e.replace(n?s:l,function(e){return o[e]||t[e]||"&#"+e.charCodeAt(0)+";"||e})}function c(e,n){return f.encodeNamed(e,n,t)}return t=n(t)||i,e=r(e.replace(/\+/g,",")),e.named&&e.numeric?a:e.named?t?c:f.encodeNamed:e.numeric?f.encodeNumeric:f.encodeRaw},decode:function(e){return e.replace(u,function(e,n){return n?(n="x"===n.charAt(0).toLowerCase()?parseInt(n.substr(1),16):parseInt(n,10),n>65535?(n-=65536,String.fromCharCode(55296+(n>>10),56320+(1023&n))):d[n]||String.fromCharCode(n)):a[e]||i[e]||t(e)})}};return f}),r(x,[m,u],function(e,t){return function(n,r){function i(e){n.getElementsByTagName("head")[0].appendChild(e)}function o(r,o,c){function u(){for(var e=b.passed,t=e.length;t--;)e[t]();b.status=2,b.passed=[],b.failed=[]}function d(){for(var e=b.failed,t=e.length;t--;)e[t]();b.status=3,b.passed=[],b.failed=[]}function f(){var e=navigator.userAgent.match(/WebKit\/(\d*)/);return!!(e&&e[1]<536)}function h(e,n){e()||((new Date).getTime()-y<l?t.setTimeout(n):d())}function p(){h(function(){for(var e=n.styleSheets,t,r=e.length,i;r--;)if(t=e[r],i=t.ownerNode?t.ownerNode:t.owningElement,i&&i.id===g.id)return u(),!0},p)}function m(){h(function(){try{var e=v.sheet.cssRules;return u(),!!e}catch(t){}},m)}var g,v,y,b;if(r=e._addCacheSuffix(r),s[r]?b=s[r]:(b={passed:[],failed:[]},s[r]=b),o&&b.passed.push(o),c&&b.failed.push(c),1!=b.status){if(2==b.status)return void u();if(3==b.status)return void d();if(b.status=1,g=n.createElement("link"),g.rel="stylesheet",g.type="text/css",g.id="u"+a++,g.async=!1,g.defer=!1,y=(new Date).getTime(),"onload"in g&&!f())g.onload=p,g.onerror=d;else{if(navigator.userAgent.indexOf("Firefox")>0)return v=n.createElement("style"),v.textContent='@import "'+r+'"',m(),void i(v);p()}i(g),g.href=r}}var a=0,s={},l;r=r||{},l=r.maxLoadTime||5e3,this.load=o}}),r(w,[h,g,v,f,y,b,C,d,m,x],function(e,n,r,i,o,a,s,l,c,u){function d(e,t){var n={},r=t.keep_values,i;return i={set:function(n,r,i){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||e,r,i,n[0])),n.attr("data-mce-"+i,r).attr(i,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},n={style:{set:function(e,t){return null!==t&&"object"==typeof t?void e.css(t):(r&&e.attr("data-mce-style",t),void e.attr("style",t))},get:function(t){var n=t.attr("data-mce-style")||t.attr("style");return n=e.serializeStyle(e.parseStyle(n),t[0].nodeName)}}},r&&(n.href=n.src=i),n}function f(e,t){var n=t.attr("style");n=e.serializeStyle(e.parseStyle(n),t[0].nodeName),n||(n=null),t.attr("data-mce-style",n)}function h(e,t){var n=0,r,i;if(e)for(r=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)i=e.nodeType,(!t||3!=i||i!=r&&e.nodeValue.length)&&(n++,r=i);return n}function p(e,t){var o=this,a;o.doc=e,o.win=window,o.files={},o.counter=0,o.stdMode=!b||e.documentMode>=8,o.boxModel=!b||"CSS1Compat"==e.compatMode||o.stdMode,o.styleSheetLoader=new u(e),o.boundEvents=[],o.settings=t=t||{},o.schema=t.schema,o.styles=new r({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),o.fixDoc(e),o.events=t.ownEvents?new i(t.proxy):i.Event,o.attrHooks=d(o,t),a=t.schema?t.schema.getBlockElements():{},o.$=n.overrideDefaults(function(){return{context:e,element:o.getRoot()}}),o.isBlock=function(e){if(!e)return!1;var t=e.nodeType;return t?!(1!==t||!a[e.nodeName]):!!a[e]}}var m=c.each,g=c.is,v=c.grep,y=c.trim,b=l.ie,C=/^([a-z0-9],?)+$/i,x=/^[ \t\r\n]*$/;return p.prototype={$$:function(e){return"string"==typeof e&&(e=this.get(e)),this.$(e)},root:null,fixDoc:function(e){var t=this.settings,n;if(b&&t.schema){"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g,function(t){e.createElement(t)});for(n in t.schema.getCustomElements())e.createElement(n)}},clone:function(e,t){var n=this,r,i;return!b||1!==e.nodeType||t?e.cloneNode(t):(i=n.doc,t?r.firstChild:(r=i.createElement(e.nodeName),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),r))},getRoot:function(){var e=this;return e.settings.root_element||e.doc.body},getViewPort:function(e){var t,n;return e=e?e:this.win,t=e.document,n=this.boxModel?t.documentElement:t.body,{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop,w:e.innerWidth||n.clientWidth,h:e.innerHeight||n.clientHeight}},getRect:function(e){var t=this,n,r;return e=t.get(e),n=t.getPos(e),r=t.getSize(e),{x:n.x,y:n.y,w:r.w,h:r.h}},getSize:function(e){var t=this,n,r;return e=t.get(e),n=t.getStyle(e,"width"),r=t.getStyle(e,"height"),-1===n.indexOf("px")&&(n=0),-1===r.indexOf("px")&&(r=0),{w:parseInt(n,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}},getParent:function(e,t,n){return this.getParents(e,t,n,!1)},getParents:function(e,n,r,i){var o=this,a,s=[];for(e=o.get(e),i=i===t,r=r||("BODY"!=o.getRoot().nodeName?o.getRoot().parentNode:null),g(n,"string")&&(a=n,n="*"===n?function(e){
    return 1==e.nodeType}:function(e){return o.is(e,a)});e&&e!=r&&e.nodeType&&9!==e.nodeType;){if(!n||n(e)){if(!i)return e;s.push(e)}e=e.parentNode}return i?s:null},get:function(e){var t;return e&&this.doc&&"string"==typeof e&&(t=e,e=this.doc.getElementById(e),e&&e.id!==t)?this.doc.getElementsByName(t)[1]:e},getNext:function(e,t){return this._findSib(e,t,"nextSibling")},getPrev:function(e,t){return this._findSib(e,t,"previousSibling")},select:function(t,n){var r=this;return e(t,r.get(n)||r.settings.root_element||r.doc,[])},is:function(n,r){var i;if(n.length===t){if("*"===r)return 1==n.nodeType;if(C.test(r)){for(r=r.toLowerCase().split(/,/),n=n.nodeName.toLowerCase(),i=r.length-1;i>=0;i--)if(r[i]==n)return!0;return!1}}if(n.nodeType&&1!=n.nodeType)return!1;var o=n.nodeType?[n]:n;return e(r,o[0].ownerDocument||o[0],null,o).length>0},add:function(e,t,n,r,i){var o=this;return this.run(e,function(e){var a;return a=g(t,"string")?o.doc.createElement(t):t,o.setAttribs(a,n),r&&(r.nodeType?a.appendChild(r):o.setHTML(a,r)),i?a:e.appendChild(a)})},create:function(e,t,n){return this.add(this.doc.createElement(e),e,t,n,1)},createHTML:function(e,t,n){var r="",i;r+="<"+e;for(i in t)t.hasOwnProperty(i)&&null!==t[i]&&"undefined"!=typeof t[i]&&(r+=" "+i+'="'+this.encode(t[i])+'"');return"undefined"!=typeof n?r+">"+n+"</"+e+">":r+" />"},createFragment:function(e){var t,n,r=this.doc,i;for(i=r.createElement("div"),t=r.createDocumentFragment(),e&&(i.innerHTML=e);n=i.firstChild;)t.appendChild(n);return t},remove:function(e,t){return e=this.$$(e),t?e.each(function(){for(var e;e=this.firstChild;)3==e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():e.remove(),e.length>1?e.toArray():e[0]},setStyle:function(e,t,n){e=this.$$(e).css(t,n),this.settings.update_styles&&f(this,e)},getStyle:function(e,n,r){return e=this.$$(e),r?e.css(n):(n=n.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}),"float"==n&&(n=l.ie&&l.ie<12?"styleFloat":"cssFloat"),e[0]&&e[0].style?e[0].style[n]:t)},setStyles:function(e,t){e=this.$$(e).css(t),this.settings.update_styles&&f(this,e)},removeAllAttribs:function(e){return this.run(e,function(e){var t,n=e.attributes;for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))})},setAttrib:function(e,t,n){var r=this,i,o,a=r.settings;""===n&&(n=null),e=r.$$(e),i=e.attr(t),e.length&&(o=r.attrHooks[t],o&&o.set?o.set(e,n,t):e.attr(t,n),i!=n&&a.onSetAttrib&&a.onSetAttrib({attrElm:e,attrName:t,attrValue:n}))},setAttribs:function(e,t){var n=this;n.$$(e).each(function(e,r){m(t,function(e,t){n.setAttrib(r,t,e)})})},getAttrib:function(e,t,n){var r=this,i,o;return e=r.$$(e),e.length&&(i=r.attrHooks[t],o=i&&i.get?i.get(e,t):e.attr(t)),"undefined"==typeof o&&(o=n||""),o},getPos:function(e,t){var r=this,i=0,o=0,a,s=r.doc,l=s.body,c;if(e=r.get(e),t=t||l,e){if(t===l&&e.getBoundingClientRect&&"static"===n(l).css("position"))return c=e.getBoundingClientRect(),t=r.boxModel?s.documentElement:l,i=c.left+(s.documentElement.scrollLeft||l.scrollLeft)-t.clientLeft,o=c.top+(s.documentElement.scrollTop||l.scrollTop)-t.clientTop,{x:i,y:o};for(a=e;a&&a!=t&&a.nodeType;)i+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=e.parentNode;a&&a!=t&&a.nodeType;)i-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode}return{x:i,y:o}},parseStyle:function(e){return this.styles.parse(e)},serializeStyle:function(e,t){return this.styles.serialize(e,t)},addStyle:function(e){var t=this,n=t.doc,r,i;if(t!==p.DOM&&n===document){var o=p.DOM.addedStyles;if(o=o||[],o[e])return;o[e]=!0,p.DOM.addedStyles=o}i=n.getElementById("mceDefaultStyles"),i||(i=n.createElement("style"),i.id="mceDefaultStyles",i.type="text/css",r=n.getElementsByTagName("head")[0],r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(n.createTextNode(e))},loadCSS:function(e){var t=this,n=t.doc,r;return t!==p.DOM&&n===document?void p.DOM.loadCSS(e):(e||(e=""),r=n.getElementsByTagName("head")[0],void m(e.split(","),function(e){var i;e=c._addCacheSuffix(e),t.files[e]||(t.files[e]=!0,i=t.create("link",{rel:"stylesheet",href:e}),b&&n.documentMode&&n.recalc&&(i.onload=function(){n.recalc&&n.recalc(),i.onload=null}),r.appendChild(i))}))},addClass:function(e,t){this.$$(e).addClass(t)},removeClass:function(e,t){this.toggleClass(e,t,!1)},hasClass:function(e,t){return this.$$(e).hasClass(t)},toggleClass:function(e,t,r){this.$$(e).toggleClass(t,r).each(function(){""===this.className&&n(this).attr("class",null)})},show:function(e){this.$$(e).show()},hide:function(e){this.$$(e).hide()},isHidden:function(e){return"none"==this.$$(e).css("display")},uniqueId:function(e){return(e?e:"mce_")+this.counter++},setHTML:function(e,t){e=this.$$(e),b?e.each(function(e,r){if(r.canHaveHTML!==!1){for(;r.firstChild;)r.removeChild(r.firstChild);try{r.innerHTML="<br>"+t,r.removeChild(r.firstChild)}catch(i){n("<div>").html("<br>"+t).contents().slice(1).appendTo(r)}return t}}):e.html(t)},getOuterHTML:function(e){return e=this.get(e),1==e.nodeType&&"outerHTML"in e?e.outerHTML:n("<div>").append(n(e).clone()).html()},setOuterHTML:function(e,t){var r=this;r.$$(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}r.remove(n(this).html(t),!0)})},decode:s.decode,encode:s.encodeAllRaw,insertAfter:function(e,t){return t=this.get(t),this.run(e,function(e){var n,r;return n=t.parentNode,r=t.nextSibling,r?n.insertBefore(e,r):n.appendChild(e),e})},replace:function(e,t,n){var r=this;return r.run(t,function(t){return g(t,"array")&&(e=e.cloneNode(!0)),n&&m(v(t.childNodes),function(t){e.appendChild(t)}),t.parentNode.replaceChild(e,t)})},rename:function(e,t){var n=this,r;return e.nodeName!=t.toUpperCase()&&(r=n.create(t),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),n.replace(r,e,1)),r||e},findCommonAncestor:function(e,t){for(var n=e,r;n;){for(r=t;r&&n!=r;)r=r.parentNode;if(n==r)break;n=n.parentNode}return!n&&e.ownerDocument?e.ownerDocument.documentElement:n},toHex:function(e){return this.styles.toHex(c.trim(e))},run:function(e,t,n){var r=this,i;return"string"==typeof e&&(e=r.get(e)),e?(n=n||this,e.nodeType||!e.length&&0!==e.length?t.call(n,e):(i=[],m(e,function(e,o){e&&("string"==typeof e&&(e=r.get(e)),i.push(t.call(n,e,o)))}),i)):!1},getAttribs:function(e){var t;if(e=this.get(e),!e)return[];if(b){if(t=[],"OBJECT"==e.nodeName)return e.attributes;"OPTION"===e.nodeName&&this.getAttrib(e,"selected")&&t.push({specified:1,nodeName:"selected"});var n=/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;return e.cloneNode(!1).outerHTML.replace(n,"").replace(/[\w:\-]+/gi,function(e){t.push({specified:1,nodeName:e})}),t}return e.attributes},isEmpty:function(e,t){var n=this,r,i,a,s,l,c=0;if(e=e.firstChild){s=new o(e,e.parentNode),t=t||(n.schema?n.schema.getNonEmptyElements():null);do{if(a=e.nodeType,1===a){if(e.getAttribute("data-mce-bogus"))continue;if(l=e.nodeName.toLowerCase(),t&&t[l]){if("br"===l){c++;continue}return!1}for(i=n.getAttribs(e),r=i.length;r--;)if(l=i[r].nodeName,"name"===l||"data-mce-bookmark"===l)return!1}if(8==a)return!1;if(3===a&&!x.test(e.nodeValue))return!1}while(e=s.next())}return 1>=c},createRng:function(){var e=this.doc;return e.createRange?e.createRange():new a(this)},nodeIndex:h,split:function(e,t,n){function r(e){function t(e){var t=e.previousSibling&&"SPAN"==e.previousSibling.nodeName,n=e.nextSibling&&"SPAN"==e.nextSibling.nodeName;return t&&n}var n,o=e.childNodes,a=e.nodeType;if(1!=a||"bookmark"!=e.getAttribute("data-mce-type")){for(n=o.length-1;n>=0;n--)r(o[n]);if(9!=a){if(3==a&&e.nodeValue.length>0){var s=y(e.nodeValue).length;if(!i.isBlock(e.parentNode)||s>0||0===s&&t(e))return}else if(1==a&&(o=e.childNodes,1==o.length&&o[0]&&1==o[0].nodeType&&"bookmark"==o[0].getAttribute("data-mce-type")&&e.parentNode.insertBefore(o[0],e),o.length||/^(br|hr|input|img)$/i.test(e.nodeName)))return;i.remove(e)}return e}}var i=this,o=i.createRng(),a,s,l;return e&&t?(o.setStart(e.parentNode,i.nodeIndex(e)),o.setEnd(t.parentNode,i.nodeIndex(t)),a=o.extractContents(),o=i.createRng(),o.setStart(t.parentNode,i.nodeIndex(t)+1),o.setEnd(e.parentNode,i.nodeIndex(e)+1),s=o.extractContents(),l=e.parentNode,l.insertBefore(r(a),e),n?l.insertBefore(n,e):l.insertBefore(t,e),l.insertBefore(r(s),e),i.remove(e),n||t):void 0},bind:function(e,t,n,r){var i=this;if(c.isArray(e)){for(var o=e.length;o--;)e[o]=i.bind(e[o],t,n,r);return e}return!i.settings.collect||e!==i.doc&&e!==i.win||i.boundEvents.push([e,t,n,r]),i.events.bind(e,t,n,r||i)},unbind:function(e,t,n){var r=this,i;if(c.isArray(e)){for(i=e.length;i--;)e[i]=r.unbind(e[i],t,n);return e}if(r.boundEvents&&(e===r.doc||e===r.win))for(i=r.boundEvents.length;i--;){var o=r.boundEvents[i];e!=o[0]||t&&t!=o[1]||n&&n!=o[2]||this.events.unbind(o[0],o[1],o[2])}return this.events.unbind(e,t,n)},fire:function(e,t,n){return this.events.fire(e,t,n)},getContentEditable:function(e){var t;return e&&1==e.nodeType?(t=e.getAttribute("data-mce-contenteditable"),t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null):null},getContentEditableParent:function(e){for(var t=this.getRoot(),n=null;e&&e!==t&&(n=this.getContentEditable(e),null===n);e=e.parentNode);return n},destroy:function(){var t=this;if(t.boundEvents){for(var n=t.boundEvents.length;n--;){var r=t.boundEvents[n];this.events.unbind(r[0],r[1],r[2])}t.boundEvents=null}e.setDocument&&e.setDocument(),t.win=t.doc=t.root=t.events=t.frag=null},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset},_findSib:function(e,t,n){var r=this,i=t;if(e)for("string"==typeof i&&(i=function(e){return r.is(e,t)}),e=e[n];e;e=e[n])if(i(e))return e;return null}},p.DOM=new p(document),p.nodeIndex=h,p}),r(N,[w,m],function(e,t){function n(){function e(e,n){function i(){a.remove(l),s&&(s.onreadystatechange=s.onload=s=null),n()}function o(){"undefined"!=typeof console&&console.log&&console.log("Failed to load: "+e)}var a=r,s,l;l=a.uniqueId(),s=document.createElement("script"),s.id=l,s.type="text/javascript",s.src=t._addCacheSuffix(e),"onreadystatechange"in s?s.onreadystatechange=function(){/loaded|complete/.test(s.readyState)&&i()}:s.onload=i,s.onerror=o,(document.getElementsByTagName("head")[0]||document.body).appendChild(s)}var n=0,a=1,s=2,l={},c=[],u={},d=[],f=0,h;this.isDone=function(e){return l[e]==s},this.markDone=function(e){l[e]=s},this.add=this.load=function(e,t,r){var i=l[e];i==h&&(c.push(e),l[e]=n),t&&(u[e]||(u[e]=[]),u[e].push({func:t,scope:r||this}))},this.remove=function(e){delete l[e],delete u[e]},this.loadQueue=function(e,t){this.loadScripts(c,e,t)},this.loadScripts=function(t,n,r){function c(e){i(u[e],function(e){e.func.call(e.scope)}),u[e]=h}var p;d.push({func:n,scope:r||this}),(p=function(){var n=o(t);t.length=0,i(n,function(t){return l[t]==s?void c(t):void(l[t]!=a&&(l[t]=a,f++,e(t,function(){l[t]=s,f--,c(t),p()})))}),f||(i(d,function(e){e.func.call(e.scope)}),d.length=0)})()}}var r=e.DOM,i=t.each,o=t.grep;return n.ScriptLoader=new n,n}),r(E,[N,m],function(e,n){function r(){var e=this;e.items=[],e.urls={},e.lookup={}}var i=n.each;return r.prototype={get:function(e){return this.lookup[e]?this.lookup[e].instance:t},dependencies:function(e){var t;return this.lookup[e]&&(t=this.lookup[e].dependencies),t||[]},requireLangPack:function(t,n){var i=r.language;if(i&&r.languageLoad!==!1){if(n)if(n=","+n+",",-1!=n.indexOf(","+i.substr(0,2)+","))i=i.substr(0,2);else if(-1==n.indexOf(","+i+","))return;e.ScriptLoader.add(this.urls[t]+"/langs/"+i+".js")}},add:function(e,t,n){return this.items.push(t),this.lookup[e]={instance:t,dependencies:n},t},remove:function(e){delete this.urls[e],delete this.lookup[e]},createUrl:function(e,t){return"object"==typeof t?t:{prefix:e.prefix,resource:t,suffix:e.suffix}},addComponents:function(t,n){var r=this.urls[t];i(n,function(t){e.ScriptLoader.add(r+"/"+t)})},load:function(n,o,a,s){function l(){var r=c.dependencies(n);i(r,function(e){var n=c.createUrl(o,e);c.load(n.resource,n,t,t)}),a&&(s?a.call(s):a.call(e))}var c=this,u=o;c.urls[n]||("object"==typeof o&&(u=o.prefix+o.resource+o.suffix),0!==u.indexOf("/")&&-1==u.indexOf("://")&&(u=r.baseURL+"/"+u),c.urls[n]=u.substring(0,u.lastIndexOf("/")),c.lookup[n]?l():e.ScriptLoader.add(u,l,s))}},r.PluginManager=new r,r.ThemeManager=new r,r}),r(_,[],function(){function e(e){return function(t){return!!t&&t.nodeType==e}}function t(e){return e=e.toLowerCase().split(" "),function(t){var n,r;if(t&&t.nodeType)for(r=t.nodeName.toLowerCase(),n=0;n<e.length;n++)if(r===e[n])return!0;return!1}}function n(e,t){return t=t.toLowerCase().split(" "),function(n){var r,i;if(s(n))for(r=0;r<t.length;r++)if(i=getComputedStyle(n,null).getPropertyValue(e),i===t[r])return!0;return!1}}function r(e,t){return function(n){return s(n)&&n[e]===t}}function i(e,t){return function(n){return s(n)&&n.getAttribute(e)===t}}function o(e){return s(e)&&e.hasAttribute("data-mce-bogus")}function a(e){return function(t){if(s(t)){if(t.contentEditable===e)return!0;if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}}var s=e(1);return{isText:e(3),isElement:s,isComment:e(8),isBr:t("br"),isContentEditableTrue:a("true"),isContentEditableFalse:a("false"),matchNodeNames:t,hasPropValue:r,hasAttributeValue:i,matchStyleValues:n,isBogus:o}}),r(S,[],function(){function e(e){return e==n}function t(e){return e.replace(new RegExp(n,"g"),"")}var n="\u200b";return{isZwsp:e,ZWSP:n,trim:t}}),r(k,[_,S],function(e,t){function n(e){return d(e)&&(e=e.parentNode),u(e)&&e.hasAttribute("data-mce-caret")}function r(e){return d(e)&&t.isZwsp(e.data)}function i(e){return n(e)||r(e)}function o(e,n){var r,o,a,s;if(r=e.ownerDocument,a=r.createTextNode(t.ZWSP),s=e.parentNode,n){if(o=e.previousSibling,d(o)){if(i(o))return o;if(c(o))return o.splitText(o.data.length-1)}s.insertBefore(a,e)}else{if(o=e.nextSibling,d(o)){if(i(o))return o;if(l(o))return o.splitText(1),o}e.nextSibling?s.insertBefore(a,e.nextSibling):s.appendChild(a)}return a}function a(e,t,n){var r,i,o;return r=t.ownerDocument,i=r.createElement(e),i.setAttribute("data-mce-caret",n?"before":"after"),i.setAttribute("data-mce-bogus","all"),i.appendChild(r.createTextNode("\xa0")),o=t.parentNode,n?o.insertBefore(i,t):t.nextSibling?o.insertBefore(i,t.nextSibling):o.appendChild(i),i}function s(e){var n;u(e)&&i(e)&&("&nbsp;"!=e.innerHTML?e.removeAttribute("data-mce-caret"):e.parentNode&&e.parentNode.removeChild(e)),d(e)&&(n=t.trim(e.data),0===n.length&&e.parentNode&&e.parentNode.removeChild(e),e.nodeValue=n)}function l(e){return d(e)&&e.data[0]==t.ZWSP}function c(e){return d(e)&&e.data[e.data.length-1]==t.ZWSP}var u=e.isElement,d=e.isText;return{isCaretContainer:i,isCaretContainerBlock:n,isCaretContainerInline:r,insertInline:o,insertBlock:a,remove:s,startsWithCaretContainer:l,endsWithCaretContainer:c}}),r(T,[m,y,_,b,k],function(e,t,n,r,i){function o(e,t){var n=e.childNodes;return t--,t>n.length-1?t=n.length-1:0>t&&(t=0),n[t]||e}function a(e){this.walk=function(t,n){function r(e){var t;return t=e[0],3===t.nodeType&&t===c&&u>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===f&&e.length>0&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e}function i(e,t,n){for(var r=[];e&&e!=n;e=e[t])r.push(e);return r}function a(e,t){do{if(e.parentNode==t)return e;e=e.parentNode}while(e)}function s(e,t,o){var a=o?"nextSibling":"previousSibling";for(g=e,v=g.parentNode;g&&g!=t;g=v)v=g.parentNode,y=i(g==e?g:g[a],a),y.length&&(o||y.reverse(),n(r(y)))}var c=t.startContainer,u=t.startOffset,d=t.endContainer,f=t.endOffset,h,p,m,g,v,y,b;if(b=e.select("td[data-mce-selected],th[data-mce-selected]"),b.length>0)return void l(b,function(e){n([e])});if(1==c.nodeType&&c.hasChildNodes()&&(c=c.childNodes[u]),1==d.nodeType&&d.hasChildNodes()&&(d=o(d,f)),c==d)return n(r([c]));for(h=e.findCommonAncestor(c,d),g=c;g;g=g.parentNode){if(g===d)return s(c,h,!0);if(g===h)break}for(g=d;g;g=g.parentNode){if(g===c)return s(d,h);if(g===h)break}p=a(c,h)||c,m=a(d,h)||d,s(c,p,!0),y=i(p==c?p:p.nextSibling,"nextSibling",m==d?m.nextSibling:m),y.length&&n(r(y)),s(d,m)},this.split=function(e){function t(e,t){return e.splitText(t)}var n=e.startContainer,r=e.startOffset,i=e.endContainer,o=e.endOffset;return n==i&&3==n.nodeType?r>0&&r<n.nodeValue.length&&(i=t(n,r),n=i.previousSibling,o>r?(o-=r,n=i=t(i,o).previousSibling,o=i.nodeValue.length,r=0):o=0):(3==n.nodeType&&r>0&&r<n.nodeValue.length&&(n=t(n,r),r=0),3==i.nodeType&&o>0&&o<i.nodeValue.length&&(i=t(i,o).previousSibling,o=i.nodeValue.length)),{startContainer:n,startOffset:r,endContainer:i,endOffset:o}},this.normalize=function(n){function r(r){function a(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function s(n,r){for(var i=new t(n,e.getParent(n.parentNode,e.isBlock)||g);n=i[r?"prev":"next"]();)if("BR"===n.nodeName)return!0}function l(e){for(;e&&e!=g;){if(c(e))return!0;e=e.parentNode}return!1}function d(e,t){return e.previousSibling&&e.previousSibling.nodeName==t}function f(n,r){var a,s,l;if(r=r||h,l=e.getParent(r.parentNode,e.isBlock)||g,n&&"BR"==r.nodeName&&C&&e.isEmpty(l))return h=r.parentNode,p=e.nodeIndex(r),void(i=!0);for(a=new t(r,l);v=a[n?"prev":"next"]();){if("false"===e.getContentEditableParent(v)||u(v))return;if(3===v.nodeType&&v.nodeValue.length>0)return h=v,p=n?v.nodeValue.length:0,void(i=!0);if(e.isBlock(v)||y[v.nodeName.toLowerCase()])return;s=v}o&&s&&(h=s,i=!0,p=0)}var h,p,m,g=e.getRoot(),v,y,b,C;if(h=n[(r?"start":"end")+"Container"],p=n[(r?"start":"end")+"Offset"],C=1==h.nodeType&&p===h.childNodes.length,y=e.schema.getNonEmptyElements(),b=r,!u(h)){if(1==h.nodeType&&p>h.childNodes.length-1&&(b=!1),9===h.nodeType&&(h=e.getRoot(),p=0),h===g){if(b&&(v=h.childNodes[p>0?p-1:0])){if(u(v))return;if(y[v.nodeName]||"TABLE"==v.nodeName)return}if(h.hasChildNodes()){if(p=Math.min(!b&&p>0?p-1:p,h.childNodes.length-1),h=h.childNodes[p],p=0,!o&&h===g.lastChild&&"TABLE"===h.nodeName)return;if(l(h)||u(h))return;if(h.hasChildNodes()&&!/TABLE/.test(h.nodeName)){v=h,m=new t(h,g);do{if(c(v)||u(v)){i=!1;break}if(3===v.nodeType&&v.nodeValue.length>0){p=b?0:v.nodeValue.length,h=v,i=!0;break}if(y[v.nodeName.toLowerCase()]&&!a(v)){p=e.nodeIndex(v),h=v.parentNode,"IMG"!=v.nodeName||b||p++,i=!0;break}}while(v=b?m.next():m.prev())}}}o&&(3===h.nodeType&&0===p&&f(!0),1===h.nodeType&&(v=h.childNodes[p],v||(v=h.childNodes[p-1]),!v||"BR"!==v.nodeName||d(v,"A")||s(v)||s(v,!0)||f(!0,v))),b&&!o&&3===h.nodeType&&p===h.nodeValue.length&&f(!1),i&&n["set"+(r?"Start":"End")](h,p)}}var i,o;return o=n.collapsed,r(!0),o||r(),i&&o&&n.collapse(!0),i}}function s(t,n,r){var i,o,a;if(i=r.elementFromPoint(t,n),o=r.body.createTextRange(),i&&"HTML"!=i.tagName||(i=r.body),o.moveToElementText(i),a=e.toArray(o.getClientRects()),a=a.sort(function(e,t){return e=Math.abs(Math.max(e.top-n,e.bottom-n)),t=Math.abs(Math.max(t.top-n,t.bottom-n)),e-t}),a.length>0){n=(a[0].bottom+a[0].top)/2;try{return o.moveToPoint(t,n),o.collapse(!0),o}catch(s){}}return null}var l=e.each,c=n.isContentEditableFalse,u=i.isCaretContainer;return a.compareRanges=function(e,t){if(e&&t){if(!e.item&&!e.duplicate)return e.startContainer==t.startContainer&&e.startOffset==t.startOffset;if(e.item&&t.item&&e.item(0)===t.item(0))return!0;if(e.isEqual&&t.isEqual&&t.isEqual(e))return!0}return!1},a.getCaretRangeFromPoint=function(e,t,n){var r,i;if(n.caretPositionFromPoint)i=n.caretPositionFromPoint(e,t),r=n.createRange(),r.setStart(i.offsetNode,i.offset),r.collapse(!0);else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(n.body.createTextRange){r=n.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=s(e,t,n)}}return r},a.getSelectedNode=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset==n+1?t.childNodes[n]:null},a.getNode=function(e,t){return 1==e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},a}),r(R,[T,d,u],function(e,t,n){return function(r){function i(e){var t,n;if(n=r.$(e).parentsUntil(r.getBody()).add(e),n.length===a.length){for(t=n.length;t>=0&&n[t]===a[t];t--);if(-1===t)return a=n,!0}return a=n,!1}var o,a=[];"onselectionchange"in r.getDoc()||r.on("NodeChange Click MouseUp KeyUp Focus",function(t){var n,i;n=r.selection.getRng(),i={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset},"nodechange"!=t.type&&e.compareRanges(i,o)||r.fire("SelectionChange"),o=i}),r.on("contextmenu",function(){r.fire("SelectionChange")}),r.on("SelectionChange",function(){var e=r.selection.getStart(!0);!t.range&&r.selection.isCollapsed()||!i(e)&&r.dom.isChildOf(e,r.getBody())&&r.nodeChanged({selectionChange:!0})}),r.on("MouseUp",function(e){e.isDefaultPrevented()||("IMG"==r.selection.getNode().nodeName?n.setEditorTimeout(r,function(){r.nodeChanged()}):r.nodeChanged())}),this.nodeChanged=function(e){var t=r.selection,n,i,o;r.initialized&&t&&!r.settings.disable_nodechange&&!r.readonly&&(o=r.getBody(),n=t.getStart()||o,n.ownerDocument==r.getDoc()&&r.dom.isChildOf(n,o)||(n=o),"IMG"==n.nodeName&&t.isCollapsed()&&(n=n.parentNode),i=[],r.dom.getParent(n,function(e){return e===o?!0:void i.push(e)}),e=e||{},e.element=n,e.parents=i,r.fire("NodeChange",e))}}}),r(A,[],function(){function e(e,t,n){var r,i,o=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[o])return e[o];if(e!==t){if(r=e[a])return r;for(i=e.parent;i&&i!==t;i=i.parent)if(r=i[a])return r}}function t(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}var n=/^[ \t\r\n]*$/,r={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11};return t.prototype={replace:function(e){var t=this;return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},attr:function(e,t){var n=this,r,i,o;if("string"!=typeof e){for(i in e)n.attr(i,e[i]);return n}if(r=n.attributes){if(t!==o){if(null===t){if(e in r.map)for(delete r.map[e],i=r.length;i--;)if(r[i].name===e)return r=r.splice(i,1),n;return n}if(e in r.map){for(i=r.length;i--;)if(r[i].name===e){r[i].value=t;break}}else r.push({name:e,value:t});return r.map[e]=t,n}return r.map[e]}},clone:function(){var e=this,n=new t(e.name,e.type),r,i,o,a,s;if(o=e.attributes){for(s=[],s.map={},r=0,i=o.length;i>r;r++)a=o[r],"id"!==a.name&&(s[s.length]={name:a.name,value:a.value},s.map[a.name]=a.value);n.attributes=s}return n.value=e.value,n.shortEnded=e.shortEnded,n},wrap:function(e){var t=this;return t.parent.insert(e,t),e.append(t),t},unwrap:function(){var e=this,t,n;for(t=e.firstChild;t;)n=t.next,e.insert(t,e,!0),t=n;e.remove()},remove:function(){var e=this,t=e.parent,n=e.next,r=e.prev;return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):r.next=n,t.lastChild===e?(t.lastChild=r,r&&(r.next=null)):n.prev=r,e.parent=e.next=e.prev=null),e},append:function(e){var t=this,n;return e.parent&&e.remove(),n=t.lastChild,n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e},insert:function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},getAll:function(t){var n=this,r,i=[];for(r=n.firstChild;r;r=e(r,n))r.name===t&&i.push(r);return i},empty:function(){var t=this,n,r,i;if(t.firstChild){for(n=[],i=t.firstChild;i;i=e(i,t))n.push(i);for(r=n.length;r--;)i=n[r],i.parent=i.firstChild=i.lastChild=i.next=i.prev=null}return t.firstChild=t.lastChild=null,t},isEmpty:function(t){var r=this,i=r.firstChild,o,a;if(i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(t[i.name])return!1;for(o=i.attributes.length;o--;)if(a=i.attributes[o].name,"name"===a||0===a.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!n.test(i.value))return!1}while(i=e(i,r));return!0},walk:function(t){return e(this,null,t)}},t.create=function(e,n){var i,o;if(i=new t(e,r[e]||1),n)for(o in n)i.attr(o,n[o]);return i},t}),r(B,[m],function(e){function t(e,t){return e?e.split(t||" "):[]}function n(e){function n(e,n,r){function i(e,t){var n={},r,i;for(r=0,i=e.length;i>r;r++)n[e[r]]=t||{};return n}var s,c,u,d=arguments;for(r=r||[],n=n||"","string"==typeof r&&(r=t(r)),c=3;c<d.length;c++)"string"==typeof d[c]&&(d[c]=t(d[c])),r.push.apply(r,d[c]);for(e=t(e),s=e.length;s--;)u=[].concat(l,t(n)),a[e[s]]={attributes:i(u),attributesOrder:u,children:i(r,o)}}function r(e,n){var r,i,o,s;for(e=t(e),r=e.length,n=t(n);r--;)for(i=a[e[r]],o=0,s=n.length;s>o;o++)i.attributes[n[o]]={},i.attributesOrder.push(n[o])}var a={},l,c,u,d,f,h;return i[e]?i[e]:(l=t("id accesskey class dir lang style tabindex title"),c=t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),u=t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),"html4"!=e&&(l.push.apply(l,t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")),c.push.apply(c,t("article aside details dialog figure header footer hgroup section nav")),u.push.apply(u,t("audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"))),"html5-strict"!=e&&(l.push("xml:lang"),h=t("acronym applet basefont big font strike tt"),u.push.apply(u,h),s(h,function(e){n(e,"",u)}),f=t("center dir isindex noframes"),c.push.apply(c,f),d=[].concat(c,u),s(f,function(e){n(e,"",d)})),d=d||[].concat(c,u),n("html","manifest","head body"),n("head","","base command link meta noscript script style title"),n("title hr noscript br"),n("base","href target"),n("link","href rel media hreflang type sizes hreflang"),n("meta","name http-equiv content charset"),n("style","media type scoped"),n("script","src async defer type charset"),n("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",d),n("address dt dd div caption","",d),n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",u),n("blockquote","cite",d),n("ol","reversed start type","li"),n("ul","","li"),n("li","value",d),n("dl","","dt dd"),n("a","href target rel media hreflang type",u),n("q","cite",u),n("ins del","cite datetime",d),n("img","src sizes srcset alt usemap ismap width height"),n("iframe","src name width height",d),n("embed","src type width height"),n("object","data type typemustmatch name usemap form width height",d,"param"),n("param","name value"),n("map","name",d,"area"),n("area","alt coords shape href target rel media hreflang type"),n("table","border","caption colgroup thead tfoot tbody tr"+("html4"==e?" col":"")),n("colgroup","span","col"),n("col","span"),n("tbody thead tfoot","","tr"),n("tr","","td th"),n("td","colspan rowspan headers",d),n("th","colspan rowspan headers scope abbr",d),n("form","accept-charset action autocomplete enctype method name novalidate target",d),n("fieldset","disabled form name",d,"legend"),n("label","form for",u),n("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),n("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"==e?d:u),n("select","disabled form multiple name required size","option optgroup"),n("optgroup","disabled label","option"),n("option","disabled label selected value"),n("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),n("menu","type label",d,"li"),n("noscript","",d),"html4"!=e&&(n("wbr"),n("ruby","",u,"rt rp"),n("figcaption","",d),n("mark rt rp summary bdi","",u),n("canvas","width height",d),n("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",d,"track source"),n("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",d,"track source"),n("picture","","img source"),n("source","src srcset type media sizes"),n("track","kind src srclang label default"),n("datalist","",u,"option"),n("article section nav aside header footer","",d),n("hgroup","","h1 h2 h3 h4 h5 h6"),n("figure","",d,"figcaption"),n("time","datetime",u),n("dialog","open",d),n("command","type label icon disabled checked radiogroup command"),n("output","for form name",u),n("progress","value max",u),n("meter","value min max low high optimum",u),n("details","open",d,"summary"),n("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!=e&&(r("script","language xml:space"),r("style","xml:space"),r("object","declare classid code codebase codetype archive standby align border hspace vspace"),r("embed","align name hspace vspace"),r("param","valuetype type"),r("a","charset name rev shape coords"),r("br","clear"),r("applet","codebase archive code object alt name width height align hspace vspace"),r("img","name longdesc align border hspace vspace"),r("iframe","longdesc frameborder marginwidth marginheight scrolling align"),r("font basefont","size color face"),r("input","usemap align"),r("select","onchange"),r("textarea"),r("h1 h2 h3 h4 h5 h6 div p legend caption","align"),r("ul","type compact"),r("li","type"),r("ol dl menu dir","compact"),r("pre","width xml:space"),r("hr","align noshade size width"),r("isindex","prompt"),r("table","summary width frame rules cellspacing cellpadding align bgcolor"),r("col","width align char charoff valign"),r("colgroup","width align char charoff valign"),r("thead","align char charoff valign"),r("tr","align char charoff valign bgcolor"),r("th","axis align char charoff valign nowrap bgcolor width height"),r("form","accept"),r("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),r("tfoot","align char charoff valign"),r("tbody","align char charoff valign"),r("area","nohref"),r("body","background bgcolor text link vlink alink")),"html4"!=e&&(r("input button select textarea","autofocus"),r("input textarea","placeholder"),r("a","download"),r("link script img","crossorigin"),r("iframe","sandbox seamless allowfullscreen")),s(t("a form meter progress dfn"),function(e){a[e]&&delete a[e].children[e]}),delete a.caption.children.table,delete a.script,i[e]=a,a)}function r(e,t){var n;return e&&(n={},"string"==typeof e&&(e={"*":e}),s(e,function(e,r){n[r]=n[r.toUpperCase()]="map"==t?a(e,/[, ]/):c(e,/[, ]/)})),n}var i={},o={},a=e.makeMap,s=e.each,l=e.extend,c=e.explode,u=e.inArray;return function(e){function o(t,n,r){var o=e[t];return o?o=a(o,/[, ]/,a(o.toUpperCase(),/[, ]/)):(o=i[t],o||(o=a(n," ",a(n.toUpperCase()," ")),o=l(o,r),i[t]=o)),o}function d(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}function f(e){var n,r,i,o,s,l,c,f,h,p,m,g,v,b,x,w,N,E,_,S=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,k=/^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,T=/[*?+]/;if(e)for(e=t(e,","),y["@"]&&(w=y["@"].attributes,N=y["@"].attributesOrder),n=0,r=e.length;r>n;n++)if(s=S.exec(e[n])){if(b=s[1],h=s[2],x=s[3],f=s[5],g={},v=[],l={attributes:g,attributesOrder:v},"#"===b&&(l.paddEmpty=!0),"-"===b&&(l.removeEmpty=!0),"!"===s[4]&&(l.removeEmptyAttrs=!0),w){for(E in w)g[E]=w[E];v.push.apply(v,N)}if(f)for(f=t(f,"|"),i=0,o=f.length;o>i;i++)if(s=k.exec(f[i])){if(c={},m=s[1],p=s[2].replace(/::/g,":"),b=s[3],_=s[4],"!"===m&&(l.attributesRequired=l.attributesRequired||[],l.attributesRequired.push(p),c.required=!0),"-"===m){delete g[p],v.splice(u(v,p),1);continue}b&&("="===b&&(l.attributesDefault=l.attributesDefault||[],l.attributesDefault.push({name:p,value:_}),c.defaultValue=_),":"===b&&(l.attributesForced=l.attributesForced||[],l.attributesForced.push({name:p,value:_}),c.forcedValue=_),"<"===b&&(c.validValues=a(_,"?"))),T.test(p)?(l.attributePatterns=l.attributePatterns||[],c.pattern=d(p),
    l.attributePatterns.push(c)):(g[p]||v.push(p),g[p]=c)}w||"@"!=h||(w=g,N=v),x&&(l.outputName=h,y[x]=l),T.test(h)?(l.pattern=d(h),C.push(l)):y[h]=l}}function h(e){y={},C=[],f(e),s(N,function(e,t){b[t]=e.children})}function p(e){var n=/^(~)?(.+)$/;e&&(i.text_block_elements=i.block_elements=null,s(t(e,","),function(e){var t=n.exec(e),r="~"===t[1],i=r?"span":"div",o=t[2];if(b[o]=b[i],M[o]=i,r||(R[o.toUpperCase()]={},R[o]={}),!y[o]){var a=y[i];a=l({},a),delete a.removeEmptyAttrs,delete a.removeEmpty,y[o]=a}s(b,function(e,t){e[i]&&(b[t]=e=l({},b[t]),e[o]=e[i])})}))}function m(n){var r=/^([+\-]?)(\w+)\[([^\]]+)\]$/;i[e.schema]=null,n&&s(t(n,","),function(e){var n=r.exec(e),i,o;n&&(o=n[1],i=o?b[n[2]]:b[n[2]]={"#comment":{}},i=b[n[2]],s(t(n[3],"|"),function(e){"-"===o?delete i[e]:i[e]={}}))})}function g(e){var t=y[e],n;if(t)return t;for(n=C.length;n--;)if(t=C[n],t.pattern.test(e))return t}var v=this,y={},b={},C=[],x,w,N,E,_,S,k,T,R,A,B,D,L,M={},P={};e=e||{},N=n(e.schema),e.verify_html===!1&&(e.valid_elements="*[*]"),x=r(e.valid_styles),w=r(e.invalid_styles,"map"),T=r(e.valid_classes,"map"),E=o("whitespace_elements","pre script noscript style textarea video audio iframe object"),_=o("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),S=o("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),k=o("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),A=o("non_empty_elements","td th iframe video audio object script",S),B=o("move_caret_before_on_enter_elements","table",A),D=o("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),R=o("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption",D),L=o("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),s((e.special||"script noscript style textarea").split(" "),function(e){P[e]=new RegExp("</"+e+"[^>]*>","gi")}),e.valid_elements?h(e.valid_elements):(s(N,function(e,t){y[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},b[t]=e.children}),"html5"!=e.schema&&s(t("strong/b em/i"),function(e){e=t(e,"/"),y[e[1]].outputName=e[0]}),s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){y[e]&&(y[e].removeEmpty=!0)}),s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"),function(e){y[e].paddEmpty=!0}),s(t("span"),function(e){y[e].removeEmptyAttrs=!0})),p(e.custom_elements),m(e.valid_children),f(e.extended_valid_elements),m("+ol[ul|ol],+ul[ul|ol]"),e.invalid_elements&&s(c(e.invalid_elements),function(e){y[e]&&delete y[e]}),g("span")||f("span[!data-mce-type|*]"),v.children=b,v.getValidStyles=function(){return x},v.getInvalidStyles=function(){return w},v.getValidClasses=function(){return T},v.getBoolAttrs=function(){return k},v.getBlockElements=function(){return R},v.getTextBlockElements=function(){return D},v.getTextInlineElements=function(){return L},v.getShortEndedElements=function(){return S},v.getSelfClosingElements=function(){return _},v.getNonEmptyElements=function(){return A},v.getMoveCaretBeforeOnEnterElements=function(){return B},v.getWhiteSpaceElements=function(){return E},v.getSpecialElements=function(){return P},v.isValidChild=function(e,t){var n=b[e];return!(!n||!n[t])},v.isValid=function(e,t){var n,r,i=g(e);if(i){if(!t)return!0;if(i.attributes[t])return!0;if(n=i.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},v.getElementRule=g,v.getCustomElements=function(){return M},v.addValidElements=f,v.setValidElements=h,v.addCustomElements=p,v.addValidChildren=m,v.elements=y}}),r(D,[B,C,m],function(e,t,n){function r(e,t,n){var r=1,i,o,a,s;for(s=e.getShortEndedElements(),a=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g,a.lastIndex=i=n;o=a.exec(t);){if(i=a.lastIndex,"/"===o[1])r--;else if(!o[1]){if(o[2]in s)continue;r++}if(0===r)break}return i}function i(i,a){function s(){}var l=this;i=i||{},l.schema=a=a||new e,i.fix_self_closing!==!1&&(i.fix_self_closing=!0),o("comment cdata text start end pi doctype".split(" "),function(e){e&&(l[e]=i[e]||s)}),l.parse=function(e){function o(e){var t,n;for(t=h.length;t--&&h[t].name!==e;);if(t>=0){for(n=h.length-1;n>=t;n--)e=h[n],e.valid&&l.end(e.name);h.length=t}}function s(e,t,n,r,o){var a,s,l=/[\s\u0000-\u001F]+/g;if(t=t.toLowerCase(),n=t in x?t:z(n||r||o||""),N&&!y&&0!==t.indexOf("data-")){if(a=T[t],!a&&R){for(s=R.length;s--&&(a=R[s],!a.pattern.test(t)););-1===s&&(a=null)}if(!a)return;if(a.validValues&&!(n in a.validValues))return}if(W[t]&&!i.allow_script_urls){var c=n.replace(l,"");try{c=decodeURIComponent(c)}catch(u){c=unescape(c)}if(V.test(c))return;if(!i.allow_html_data_urls&&$.test(c)&&!/^data:image\//i.test(c))return}p.map[t]=n,p.push({name:t,value:n})}var l=this,c,u=0,d,f,h=[],p,m,g,v,y,b,C,x,w,N,E,_,S,k,T,R,A,B,D,L,M,P,H,O,I,F=0,z=t.decode,U,W=n.makeMap("src,href,data,background,formaction,poster"),V=/((java|vb)script|mhtml):/i,$=/^data:/i;for(P=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),H=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,C=a.getShortEndedElements(),M=i.self_closing_elements||a.getSelfClosingElements(),x=a.getBoolAttrs(),N=i.validate,b=i.remove_internals,U=i.fix_self_closing,O=a.getSpecialElements();c=P.exec(e);){if(u<c.index&&l.text(z(e.substr(u,c.index-u))),d=c[6])d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),o(d);else if(d=c[7]){if(d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),w=d in C,U&&M[d]&&h.length>0&&h[h.length-1].name===d&&o(d),!N||(E=a.getElementRule(d))){if(_=!0,N&&(T=E.attributes,R=E.attributePatterns),(k=c[8])?(y=-1!==k.indexOf("data-mce-type"),y&&b&&(_=!1),p=[],p.map={},k.replace(H,s)):(p=[],p.map={}),N&&!y){if(A=E.attributesRequired,B=E.attributesDefault,D=E.attributesForced,L=E.removeEmptyAttrs,L&&!p.length&&(_=!1),D)for(m=D.length;m--;)S=D[m],v=S.name,I=S.value,"{$uid}"===I&&(I="mce_"+F++),p.map[v]=I,p.push({name:v,value:I});if(B)for(m=B.length;m--;)S=B[m],v=S.name,v in p.map||(I=S.value,"{$uid}"===I&&(I="mce_"+F++),p.map[v]=I,p.push({name:v,value:I}));if(A){for(m=A.length;m--&&!(A[m]in p.map););-1===m&&(_=!1)}if(S=p.map["data-mce-bogus"]){if("all"===S){u=r(a,e,P.lastIndex),P.lastIndex=u;continue}_=!1}}_&&l.start(d,p,w)}else _=!1;if(f=O[d]){f.lastIndex=u=c.index+c[0].length,(c=f.exec(e))?(_&&(g=e.substr(u,c.index-u)),u=c.index+c[0].length):(g=e.substr(u),u=e.length),_&&(g.length>0&&l.text(g,!0),l.end(d)),P.lastIndex=u;continue}w||(k&&k.indexOf("/")==k.length-1?_&&l.end(d):h.push({name:d,valid:_}))}else(d=c[1])?(">"===d.charAt(0)&&(d=" "+d),i.allow_conditional_comments||"[if"!==d.substr(0,3)||(d=" "+d),l.comment(d)):(d=c[2])?l.cdata(d):(d=c[3])?l.doctype(d):(d=c[4])&&l.pi(d,c[5]);u=c.index+c[0].length}for(u<e.length&&l.text(z(e.substr(u))),m=h.length-1;m>=0;m--)d=h[m],d.valid&&l.end(d.name)}}var o=n.each;return i.findEndTag=r,i}),r(L,[A,B,D,m],function(e,t,n,r){var i=r.makeMap,o=r.each,a=r.explode,s=r.extend;return function(r,l){function c(t){var n,r,o,a,s,c,d,f,h,p,m,g,v,y,b;for(m=i("tr,td,th,tbody,thead,tfoot,table"),p=l.getNonEmptyElements(),g=l.getTextBlockElements(),v=l.getSpecialElements(),n=0;n<t.length;n++)if(r=t[n],r.parent&&!r.fixed)if(g[r.name]&&"li"==r.parent.name){for(y=r.next;y&&g[y.name];)y.name="li",y.fixed=!0,r.parent.insert(y,r.parent),y=y.next;r.unwrap(r)}else{for(a=[r],o=r.parent;o&&!l.isValidChild(o.name,r.name)&&!m[o.name];o=o.parent)a.push(o);if(o&&a.length>1){for(a.reverse(),s=c=u.filterNode(a[0].clone()),h=0;h<a.length-1;h++){for(l.isValidChild(c.name,a[h].name)?(d=u.filterNode(a[h].clone()),c.append(d)):d=c,f=a[h].firstChild;f&&f!=a[h+1];)b=f.next,d.append(f),f=b;c=d}s.isEmpty(p)?o.insert(r,a[0],!0):(o.insert(s,a[0],!0),o.insert(r,s)),o=a[0],(o.isEmpty(p)||o.firstChild===o.lastChild&&"br"===o.firstChild.name)&&o.empty().remove()}else if(r.parent){if("li"===r.name){if(y=r.prev,y&&("ul"===y.name||"ul"===y.name)){y.append(r);continue}if(y=r.next,y&&("ul"===y.name||"ul"===y.name)){y.insert(r,y.firstChild,!0);continue}r.wrap(u.filterNode(new e("ul",1)));continue}l.isValidChild(r.parent.name,"div")&&l.isValidChild("div",r.name)?r.wrap(u.filterNode(new e("div",1))):v[r.name]?r.empty().remove():r.unwrap()}}}var u=this,d={},f=[],h={},p={};r=r||{},r.validate="validate"in r?r.validate:!0,r.root_name=r.root_name||"body",u.schema=l=l||new t,u.filterNode=function(e){var t,n,r;n in d&&(r=h[n],r?r.push(e):h[n]=[e]),t=f.length;for(;t--;)n=f[t].name,n in e.attributes.map&&(r=p[n],r?r.push(e):p[n]=[e]);return e},u.addNodeFilter=function(e,t){o(a(e),function(e){var n=d[e];n||(d[e]=n=[]),n.push(t)})},u.addAttributeFilter=function(e,t){o(a(e),function(e){var n;for(n=0;n<f.length;n++)if(f[n].name===e)return void f[n].callbacks.push(t);f.push({name:e,callbacks:[t]})})},u.parse=function(t,o){function a(){function e(e){e&&(t=e.firstChild,t&&3==t.type&&(t.value=t.value.replace(R,"")),t=e.lastChild,t&&3==t.type&&(t.value=t.value.replace(D,"")))}var t=y.firstChild,n,i;if(l.isValidChild(y.name,I.toLowerCase())){for(;t;)n=t.next,3==t.type||1==t.type&&"p"!==t.name&&!T[t.name]&&!t.attr("data-mce-type")?i?i.append(t):(i=u(I,1),i.attr(r.forced_root_block_attrs),y.insert(i,t),i.append(t)):(e(i),i=null),t=n;e(i)}}function u(t,n){var r=new e(t,n),i;return t in d&&(i=h[t],i?i.push(r):h[t]=[r]),r}function m(e){var t,n,r,i,o=l.getBlockElements();for(t=e.prev;t&&3===t.type;){if(r=t.value.replace(D,""),r.length>0)return void(t.value=r);if(n=t.next){if(3==n.type&&n.value.length){t=t.prev;continue}if(!o[n.name]&&"script"!=n.name&&"style"!=n.name){t=t.prev;continue}}i=t.prev,t.remove(),t=i}}function g(e){var t,n={};for(t in e)"li"!==t&&"p"!=t&&(n[t]=e[t]);return n}var v,y,b,C,x,w,N,E,_,S,k,T,R,A=[],B,D,L,M,P,H,O,I;if(o=o||{},h={},p={},T=s(i("script,style,head,html,body,title,meta,param"),l.getBlockElements()),O=l.getNonEmptyElements(),H=l.children,k=r.validate,I="forced_root_block"in o?o.forced_root_block:r.forced_root_block,P=l.getWhiteSpaceElements(),R=/^[ \t\r\n]+/,D=/[ \t\r\n]+$/,L=/[ \t\r\n]+/g,M=/^[ \t\r\n]+$/,v=new n({validate:k,allow_script_urls:r.allow_script_urls,allow_conditional_comments:r.allow_conditional_comments,self_closing_elements:g(l.getSelfClosingElements()),cdata:function(e){b.append(u("#cdata",4)).value=e},text:function(e,t){var n;B||(e=e.replace(L," "),b.lastChild&&T[b.lastChild.name]&&(e=e.replace(R,""))),0!==e.length&&(n=u("#text",3),n.raw=!!t,b.append(n).value=e)},comment:function(e){b.append(u("#comment",8)).value=e},pi:function(e,t){b.append(u(e,7)).value=t,m(b)},doctype:function(e){var t;t=b.append(u("#doctype",10)),t.value=e,m(b)},start:function(e,t,n){var r,i,o,a,s;if(o=k?l.getElementRule(e):{}){for(r=u(o.outputName||e,1),r.attributes=t,r.shortEnded=n,b.append(r),s=H[b.name],s&&H[r.name]&&!s[r.name]&&A.push(r),i=f.length;i--;)a=f[i].name,a in t.map&&(_=p[a],_?_.push(r):p[a]=[r]);T[e]&&m(r),n||(b=r),!B&&P[e]&&(B=!0)}},end:function(t){var n,r,i,o,a;if(r=k?l.getElementRule(t):{}){if(T[t]&&!B){if(n=b.firstChild,n&&3===n.type)if(i=n.value.replace(R,""),i.length>0)n.value=i,n=n.next;else for(o=n.next,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.next,(0===i.length||M.test(i))&&(n.remove(),n=o),n=o;if(n=b.lastChild,n&&3===n.type)if(i=n.value.replace(D,""),i.length>0)n.value=i,n=n.prev;else for(o=n.prev,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.prev,(0===i.length||M.test(i))&&(n.remove(),n=o),n=o}if(B&&P[t]&&(B=!1),(r.removeEmpty||r.paddEmpty)&&b.isEmpty(O))if(r.paddEmpty)b.empty().append(new e("#text","3")).value="\xa0";else if(!b.attributes.map.name&&!b.attributes.map.id)return a=b.parent,T[b.name]?b.empty().remove():b.unwrap(),void(b=a);b=b.parent}}},l),y=b=new e(o.context||r.root_name,11),v.parse(t),k&&A.length&&(o.context?o.invalid=!0:c(A)),I&&("body"==y.name||o.isRootContent)&&a(),!o.invalid){for(S in h){for(_=d[S],C=h[S],N=C.length;N--;)C[N].parent||C.splice(N,1);for(x=0,w=_.length;w>x;x++)_[x](C,S,o)}for(x=0,w=f.length;w>x;x++)if(_=f[x],_.name in p){for(C=p[_.name],N=C.length;N--;)C[N].parent||C.splice(N,1);for(N=0,E=_.callbacks.length;E>N;N++)_.callbacks[N](C,_.name,o)}}return y},r.remove_trailing_brs&&u.addNodeFilter("br",function(t){var n,r=t.length,i,o=s({},l.getBlockElements()),a=l.getNonEmptyElements(),c,u,d,f,h,p;for(o.body=1,n=0;r>n;n++)if(i=t[n],c=i.parent,o[i.parent.name]&&i===c.lastChild){for(d=i.prev;d;){if(f=d.name,"span"!==f||"bookmark"!==d.attr("data-mce-type")){if("br"!==f)break;if("br"===f){i=null;break}}d=d.prev}i&&(i.remove(),c.isEmpty(a)&&(h=l.getElementRule(c.name),h&&(h.removeEmpty?c.remove():h.paddEmpty&&(c.empty().append(new e("#text",3)).value="\xa0"))))}else{for(u=i;c&&c.firstChild===u&&c.lastChild===u&&(u=c,!o[c.name]);)c=c.parent;u===c&&(p=new e("#text",3),p.value="\xa0",i.replace(p))}}),r.allow_html_in_named_anchor||u.addAttributeFilter("id,name",function(e){for(var t=e.length,n,r,i,o;t--;)if(o=e[t],"a"===o.name&&o.firstChild&&!o.attr("href")){i=o.parent,n=o.lastChild;do r=n.prev,i.insert(n,o),n=r;while(n)}}),r.validate&&l.getValidClasses()&&u.addAttributeFilter("class",function(e){for(var t=e.length,n,r,i,o,a,s=l.getValidClasses(),c,u;t--;){for(n=e[t],r=n.attr("class").split(" "),a="",i=0;i<r.length;i++)o=r[i],u=!1,c=s["*"],c&&c[o]&&(u=!0),c=s[n.name],!u&&c&&c[o]&&(u=!0),u&&(a&&(a+=" "),a+=o);a.length||(a=null),n.attr("class",a)}})}}),r(M,[C,m],function(e,t){var n=t.makeMap;return function(t){var r=[],i,o,a,s,l;return t=t||{},i=t.indent,o=n(t.indent_before||""),a=n(t.indent_after||""),s=e.getEncodeFunc(t.entity_encoding||"raw",t.entities),l="html"==t.element_format,{start:function(e,t,n){var c,u,d,f;if(i&&o[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n")),r.push("<",e),t)for(c=0,u=t.length;u>c;c++)d=t[c],r.push(" ",d.name,'="',s(d.value,!0),'"');!n||l?r[r.length]=">":r[r.length]=" />",n&&i&&a[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n"))},end:function(e){var t;r.push("</",e,">"),i&&a[e]&&r.length>0&&(t=r[r.length-1],t.length>0&&"\n"!==t&&r.push("\n"))},text:function(e,t){e.length>0&&(r[r.length]=t?e:s(e))},cdata:function(e){r.push("<![CDATA[",e,"]]>")},comment:function(e){r.push("<!--",e,"-->")},pi:function(e,t){t?r.push("<?",e," ",s(t),"?>"):r.push("<?",e,"?>"),i&&r.push("\n")},doctype:function(e){r.push("<!DOCTYPE",e,">",i?"\n":"")},reset:function(){r.length=0},getContent:function(){return r.join("").replace(/\n$/,"")}}}}),r(P,[M,B],function(e,t){return function(n,r){var i=this,o=new e(n);n=n||{},n.validate="validate"in n?n.validate:!0,i.schema=r=r||new t,i.writer=o,i.serialize=function(e){function t(e){var n=i[e.type],s,l,c,u,d,f,h,p,m;if(n)n(e);else{if(s=e.name,l=e.shortEnded,c=e.attributes,a&&c&&c.length>1&&(f=[],f.map={},m=r.getElementRule(e.name))){for(h=0,p=m.attributesOrder.length;p>h;h++)u=m.attributesOrder[h],u in c.map&&(d=c.map[u],f.map[u]=d,f.push({name:u,value:d}));for(h=0,p=c.length;p>h;h++)u=c[h].name,u in f.map||(d=c.map[u],f.map[u]=d,f.push({name:u,value:d}));c=f}if(o.start(e.name,c,l),!l){if(e=e.firstChild)do t(e);while(e=e.next);o.end(s)}}}var i,a;return a=n.validate,i={3:function(e){o.text(e.value,e.raw)},8:function(e){o.comment(e.value)},7:function(e){o.pi(e.name,e.value)},10:function(e){o.doctype(e.value)},4:function(e){o.cdata(e.value)},11:function(e){if(e=e.firstChild)do t(e);while(e=e.next)}},o.reset(),1!=e.type||n.inner?i[11](e):t(e),o.getContent()}}}),r(H,[w,L,D,C,P,A,B,d,m,S],function(e,t,n,r,i,o,a,s,l,c){function u(e){function t(e){return e&&"br"===e.name}var n,r;n=e.lastChild,t(n)&&(r=n.prev,t(r)&&(n.remove(),r.remove()))}var d=l.each,f=l.trim,h=e.DOM,p=["data-mce-selected"];return function(e,o){function m(e){var t=new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>","\\s?("+p.join("|")+')="[^"]+"'].join("|"),"gi");return e=c.trim(e.replace(t,""))}function g(){var e=o.getBody().innerHTML,t=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,r,i,a,s,l,c=o.schema;for(e=m(e),l=c.getShortEndedElements();s=t.exec(e);)i=t.lastIndex,a=s[0].length,r=l[s[1]]?i:n.findEndTag(c,e,i),e=e.substring(0,i-a)+e.substring(r),t.lastIndex=i-a;return f(e)}function v(e){-1===l.inArray(p,e)&&(C.addAttributeFilter(e,function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),p.push(e))}var y,b,C;return o&&(y=o.dom,b=o.schema),y=y||h,b=b||new a(e),e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs="remove_trailing_brs"in e?e.remove_trailing_brs:!0,C=new t(e,b),C.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n=e.length,r;n--;)r=e[n],r.attr("tabindex",r.attributes.map["data-mce-tabindex"]),r.attr(t,null)}),C.addAttributeFilter("src,href,style",function(t,n){for(var r=t.length,i,o,a="data-mce-"+n,s=e.url_converter,l=e.url_converter_scope,c;r--;)i=t[r],o=i.attributes.map[a],o!==c?(i.attr(n,o.length>0?o:null),i.attr(a,null)):(o=i.attributes.map[n],"style"===n?o=y.serializeStyle(y.parseStyle(o),i.name):s&&(o=s.call(l,o,n,i.name)),i.attr(n,o.length>0?o:null))}),C.addAttributeFilter("class",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("class"),r&&(r=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",r.length>0?r:null))}),C.addAttributeFilter("data-mce-type",function(e,t,n){for(var r=e.length,i;r--;)i=e[r],"bookmark"!==i.attributes.map["data-mce-type"]||n.cleanup||i.remove()}),C.addNodeFilter("noscript",function(e){for(var t=e.length,n;t--;)n=e[t].firstChild,n&&(n.value=r.decode(n.value))}),C.addNodeFilter("script,style",function(e,t){function n(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")}for(var r=e.length,i,o,a;r--;)i=e[r],o=i.firstChild?i.firstChild.value:"","script"===t?(a=i.attr("type"),a&&i.attr("type","mce-no/type"==a?null:a.replace(/^mce\-/,"")),o.length>0&&(i.firstChild.value="// <![CDATA[\n"+n(o)+"\n// ]]>")):o.length>0&&(i.firstChild.value="<!--\n"+n(o)+"\n-->")}),C.addNodeFilter("#comment",function(e){for(var t=e.length,n;t--;)n=e[t],0===n.value.indexOf("[CDATA[")?(n.name="#cdata",n.type=4,n.value=n.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===n.value.indexOf("mce:protected ")&&(n.name="#text",n.type=3,n.raw=!0,n.value=unescape(n.value).substr(14))}),C.addNodeFilter("xml:namespace,input",function(e,t){for(var n=e.length,r;n--;)r=e[n],7===r.type?r.remove():1===r.type&&("input"!==t||"type"in r.attributes.map||r.attr("type","text"))}),e.fix_list_elements&&C.addNodeFilter("ul,ol",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.parent,"ul"!==r.name&&"ol"!==r.name||n.prev&&"li"===n.prev.name&&n.prev.append(n)}),C.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),{schema:b,addNodeFilter:C.addNodeFilter,addAttributeFilter:C.addAttributeFilter,serialize:function(t,n){var r=this,o,a,l,h,p,m;return s.ie&&y.select("script,style,select,map").length>0?(p=t.innerHTML,t=t.cloneNode(!1),y.setHTML(t,p)):t=t.cloneNode(!0),o=t.ownerDocument.implementation,o.createHTMLDocument&&(a=o.createHTMLDocument(""),d("BODY"==t.nodeName?t.childNodes:[t],function(e){a.body.appendChild(a.importNode(e,!0))}),t="BODY"!=t.nodeName?a.body.firstChild:a.body,l=y.doc,y.doc=a),n=n||{},n.format=n.format||"html",n.selection&&(n.forced_root_block=""),n.no_events||(n.node=t,r.onPreProcess(n)),m=C.parse(f(n.getInner?t.innerHTML:y.getOuterHTML(t)),n),u(m),h=new i(e,b),n.content=h.serialize(m),n.cleanup||(n.content=c.trim(n.content),n.content=n.content.replace(/\uFEFF/g,"")),n.no_events||r.onPostProcess(n),l&&(y.doc=l),n.node=null,n.content},addRules:function(e){b.addValidElements(e)},setRules:function(e){b.setValidElements(e)},onPreProcess:function(e){o&&o.fire("PreProcess",e)},onPostProcess:function(e){o&&o.fire("PostProcess",e)},addTempAttr:v,trimHtml:m,getTrimmedContent:g}}}),r(O,[],function(){function e(e){function t(t,n){var r,i=0,o,a,s,l,c,u,d=-1,f;if(r=t.duplicate(),r.collapse(n),f=r.parentElement(),f.ownerDocument===e.dom.doc){for(;"false"===f.contentEditable;)f=f.parentNode;if(!f.hasChildNodes())return{node:f,inside:1};for(s=f.children,o=s.length-1;o>=i;)if(u=Math.floor((i+o)/2),l=s[u],r.moveToElementText(l),d=r.compareEndPoints(n?"StartToStart":"EndToEnd",t),d>0)o=u-1;else{if(!(0>d))return{node:l};i=u+1}if(0>d)for(l?r.collapse(!1):(r.moveToElementText(f),r.collapse(!0),l=f,a=!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",1)&&f==r.parentElement();)c++;else for(r.collapse(!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",-1)&&f==r.parentElement();)c++;return{node:l,position:d,offset:c,inside:a}}}function n(){function n(e){var n=t(o,e),r,i,s=0,l,c,u;if(r=n.node,i=n.offset,n.inside&&!r.hasChildNodes())return void a[e?"setStart":"setEnd"](r,0);if(i===c)return void a[e?"setStartBefore":"setEndAfter"](r);if(n.position<0){if(l=n.inside?r.firstChild:r.nextSibling,!l)return void a[e?"setStartAfter":"setEndAfter"](r);if(!i)return void(3==l.nodeType?a[e?"setStart":"setEnd"](l,0):a[e?"setStartBefore":"setEndBefore"](l));for(;l;){if(3==l.nodeType&&(u=l.nodeValue,s+=u.length,s>=i)){r=l,s-=i,s=u.length-s;break}l=l.nextSibling}}else{if(l=r.previousSibling,!l)return a[e?"setStartBefore":"setEndBefore"](r);if(!i)return void(3==r.nodeType?a[e?"setStart":"setEnd"](l,r.nodeValue.length):a[e?"setStartAfter":"setEndAfter"](l));for(;l;){if(3==l.nodeType&&(s+=l.nodeValue.length,s>=i)){r=l,s-=i;break}l=l.previousSibling}}a[e?"setStart":"setEnd"](r,s)}var o=e.getRng(),a=i.createRng(),s,l,c,u,d;if(s=o.item?o.item(0):o.parentElement(),s.ownerDocument!=i.doc)return a;if(l=e.isCollapsed(),o.item)return a.setStart(s.parentNode,i.nodeIndex(s)),a.setEnd(a.startContainer,a.startOffset+1),a;try{n(!0),l||n()}catch(f){if(-2147024809!=f.number)throw f;d=r.getBookmark(2),c=o.duplicate(),c.collapse(!0),s=c.parentElement(),l||(c=o.duplicate(),c.collapse(!1),u=c.parentElement(),u.innerHTML=u.innerHTML),s.innerHTML=s.innerHTML,r.moveToBookmark(d),o=e.getRng(),n(!0),l||n()}return a}var r=this,i=e.dom,o=!1;this.getBookmark=function(n){function r(e){var t,n,r,o,a=[];for(t=e.parentNode,n=i.getRoot().parentNode;t!=n&&9!==t.nodeType;){for(r=t.children,o=r.length;o--;)if(e===r[o]){a.push(o);break}e=t,t=t.parentNode}return a}function o(e){var n;return n=t(a,e),n?{position:n.position,offset:n.offset,indexes:r(n.node),inside:n.inside}:void 0}var a=e.getRng(),s={};return 2===n&&(a.item?s.start={ctrl:!0,indexes:r(a.item(0))}:(s.start=o(!0),e.isCollapsed()||(s.end=o()))),s},this.moveToBookmark=function(e){function t(e){var t,n,r,o;for(t=i.getRoot(),n=e.length-1;n>=0;n--)o=t.children,r=e[n],r<=o.length-1&&(t=o[r]);return t}function n(n){var i=e[n?"start":"end"],a,s,l,c;i&&(a=i.position>0,s=o.createTextRange(),s.moveToElementText(t(i.indexes)),c=i.offset,c!==l?(s.collapse(i.inside||a),s.moveStart("character",a?-c:c)):s.collapse(n),r.setEndPoint(n?"StartToStart":"EndToStart",s),n&&r.collapse(!0))}var r,o=i.doc.body;e.start&&(e.start.ctrl?(r=o.createControlRange(),r.addElement(t(e.start.indexes)),r.select()):(r=o.createTextRange(),n(!0),n(),r.select()))},this.addRange=function(t){function n(e){var t,n,a,d,p;a=i.create("a"),t=e?s:c,n=e?l:u,d=r.duplicate(),t!=f&&t!=f.documentElement||(t=h,n=0),3==t.nodeType?(t.parentNode.insertBefore(a,t),d.moveToElementText(a),d.moveStart("character",n),i.remove(a),r.setEndPoint(e?"StartToStart":"EndToEnd",d)):(p=t.childNodes,p.length?(n>=p.length?i.insertAfter(a,p[p.length-1]):t.insertBefore(a,p[n]),d.moveToElementText(a)):t.canHaveHTML&&(t.innerHTML="<span>&#xFEFF;</span>",a=t.firstChild,d.moveToElementText(a),d.collapse(o)),r.setEndPoint(e?"StartToStart":"EndToEnd",d),i.remove(a))}var r,a,s,l,c,u,d,f=e.dom.doc,h=f.body,p,m;if(s=t.startContainer,l=t.startOffset,c=t.endContainer,u=t.endOffset,r=h.createTextRange(),s==c&&1==s.nodeType){if(l==u&&!s.hasChildNodes()){if(s.canHaveHTML)return d=s.previousSibling,d&&!d.hasChildNodes()&&i.isBlock(d)?d.innerHTML="&#xFEFF;":d=null,s.innerHTML="<span>&#xFEFF;</span><span>&#xFEFF;</span>",r.moveToElementText(s.lastChild),r.select(),i.doc.selection.clear(),s.innerHTML="",void(d&&(d.innerHTML=""));l=i.nodeIndex(s),s=s.parentNode}if(l==u-1)try{if(m=s.childNodes[l],a=h.createControlRange(),a.addElement(m),a.select(),p=e.getRng(),p.item&&m===p.item(0))return}catch(g){}}n(!0),n(),r.select()},this.getRangeAt=n}return e}),r(I,[d],function(e){return{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(t){return e.mac?t.metaKey:t.ctrlKey&&!t.altKey}}}),r(F,[I,m,u,d,_],function(e,t,n,r,i){function o(e,t){for(;t&&t!=e;){if(s(t)||a(t))return t;t=t.parentNode}return null}var a=i.isContentEditableFalse,s=i.isContentEditableTrue;return function(i,s){function l(e){var t=s.settings.object_resizing;return t===!1||r.iOS?!1:("string"!=typeof t&&(t="table,img,div"),"false"===e.getAttribute("data-mce-resize")?!1:e==s.getBody()?!1:s.dom.is(e,t))}function c(t){var n,r,i,o,a;n=t.screenX-L,r=t.screenY-M,U=n*B[2]+O,W=r*B[3]+I,U=5>U?5:U,W=5>W?5:W,i="IMG"==k.nodeName&&s.settings.resize_img_proportional!==!1?!e.modifierPressed(t):e.modifierPressed(t)||"IMG"==k.nodeName&&B[2]*B[3]!==0,i&&(j(n)>j(r)?(W=Y(U*F),U=Y(W/F)):(U=Y(W/F),W=Y(U*F))),_.setStyles(T,{width:U,height:W}),o=B.startPos.x+n,a=B.startPos.y+r,o=o>0?o:0,a=a>0?a:0,_.setStyles(R,{left:o,top:a,display:"block"}),R.innerHTML=U+" &times; "+W,B[2]<0&&T.clientWidth<=U&&_.setStyle(T,"left",P+(O-U)),B[3]<0&&T.clientHeight<=W&&_.setStyle(T,"top",H+(I-W)),n=X.scrollWidth-K,r=X.scrollHeight-G,n+r!==0&&_.setStyles(R,{left:o-n,top:a-r}),z||(s.fire("ObjectResizeStart",{target:k,width:O,height:I}),z=!0)}function u(){function e(e,t){t&&(k.style[e]||!s.schema.isValid(k.nodeName.toLowerCase(),e)?_.setStyle(k,e,t):_.setAttrib(k,e,t))}z=!1,e("width",U),e("height",W),_.unbind(V,"mousemove",c),_.unbind(V,"mouseup",u),$!=V&&(_.unbind($,"mousemove",c),_.unbind($,"mouseup",u)),_.remove(T),_.remove(R),q&&"TABLE"!=k.nodeName||d(k),s.fire("ObjectResized",{target:k,width:U,height:W}),_.setAttrib(k,"style",_.getAttrib(k,"style")),s.nodeChanged()}function d(e,t,n){var i,o,a,d,h;f(),x(),i=_.getPos(e,X),P=i.x,H=i.y,h=e.getBoundingClientRect(),o=h.width||h.right-h.left,a=h.height||h.bottom-h.top,k!=e&&(C(),k=e,U=W=0),d=s.fire("ObjectSelected",{target:e}),l(e)&&!d.isDefaultPrevented()?S(A,function(e,i){function s(t){L=t.screenX,M=t.screenY,O=k.clientWidth,I=k.clientHeight,F=I/O,B=e,e.startPos={x:o*e[0]+P,y:a*e[1]+H},K=X.scrollWidth,G=X.scrollHeight,T=k.cloneNode(!0),_.addClass(T,"mce-clonedresizable"),_.setAttrib(T,"data-mce-bogus","all"),T.contentEditable=!1,T.unSelectabe=!0,_.setStyles(T,{left:P,top:H,margin:0}),T.removeAttribute("data-mce-selected"),X.appendChild(T),_.bind(V,"mousemove",c),_.bind(V,"mouseup",u),$!=V&&(_.bind($,"mousemove",c),_.bind($,"mouseup",u)),R=_.add(X,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},O+" &times; "+I)}var l;return t?void(i==t&&s(n)):(l=_.get("mceResizeHandle"+i),l&&_.remove(l),l=_.add(X,"div",{id:"mceResizeHandle"+i,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+i+"-resize; margin:0; padding:0"}),r.ie&&(l.contentEditable=!1),_.bind(l,"mousedown",function(e){e.stopImmediatePropagation(),e.preventDefault(),s(e)}),e.elm=l,void _.setStyles(l,{left:o*e[0]+P-l.offsetWidth/2,top:a*e[1]+H-l.offsetHeight/2}))}):f(),k.setAttribute("data-mce-selected","1")}function f(){var e,t;x(),k&&k.removeAttribute("data-mce-selected");for(e in A)t=_.get("mceResizeHandle"+e),t&&(_.unbind(t),_.remove(t))}function h(e){function t(e,t){if(e)do if(e===t)return!0;while(e=e.parentNode)}var n,r;if(!z&&!s.removed)return S(_.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),r="mousedown"==e.type?e.target:i.getNode(),r=_.$(r).closest(q?"table":"table,img,hr")[0],t(r,X)&&(w(),n=i.getStart(!0),t(n,r)&&t(i.getEnd(!0),r)&&(!q||r!=n&&"IMG"!==n.nodeName))?void d(r):void f()}function p(e,t,n){e&&e.attachEvent&&e.attachEvent("on"+t,n)}function m(e,t,n){e&&e.detachEvent&&e.detachEvent("on"+t,n)}function g(e){var t=e.srcElement,n,r,i,o,a,l,c;n=t.getBoundingClientRect(),l=D.clientX-n.left,c=D.clientY-n.top;for(r in A)if(i=A[r],o=t.offsetWidth*i[0],a=t.offsetHeight*i[1],j(o-l)<8&&j(a-c)<8){B=i;break}z=!0,s.fire("ObjectResizeStart",{target:k,width:k.clientWidth,height:k.clientHeight}),s.getDoc().selection.empty(),d(t,r,D)}function v(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function y(e){return a(o(s.getBody(),e))}function b(e){var t=e.srcElement;if(y(t))return void v(e);if(t!=k){if(s.fire("ObjectSelected",{target:t}),C(),0===t.id.indexOf("mceResizeHandle"))return void(e.returnValue=!1);"IMG"!=t.nodeName&&"TABLE"!=t.nodeName||(f(),k=t,p(t,"resizestart",g))}}function C(){m(k,"resizestart",g)}function x(){for(var e in A){var t=A[e];t.elm&&(_.unbind(t.elm),delete t.elm)}}function w(){try{s.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}}function N(e){var t;if(q){t=V.body.createControlRange();try{return t.addElement(e),t.select(),!0}catch(n){}}}function E(){k=T=null,q&&(C(),m(X,"controlselect",b))}var _=s.dom,S=t.each,k,T,R,A,B,D,L,M,P,H,O,I,F,z,U,W,V=s.getDoc(),$=document,q=r.ie&&r.ie<11,j=Math.abs,Y=Math.round,X=s.getBody(),K,G;A={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var J=".mce-content-body";return s.contentStyles.push(J+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: box-sizing;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+J+" .mce-resizehandle:hover {background: #000}"+J+" img[data-mce-selected],"+J+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+J+" .mce-clonedresizable {position: absolute;"+(r.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+J+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"),s.on("init",function(){q?(s.on("ObjectResized",function(e){"TABLE"!=e.target.nodeName&&(f(),N(e.target))}),p(X,"controlselect",b),s.on("mousedown",function(e){D=e})):(w(),r.ie>=11&&(s.on("mousedown click",function(e){var t=e.target,n=t.nodeName;z||!/^(TABLE|IMG|HR)$/.test(n)||y(t)||(s.selection.select(t,"TABLE"==n),"mousedown"==e.type&&s.nodeChanged())}),s.dom.bind(X,"mscontrolselect",function(e){function t(e){n.setEditorTimeout(s,function(){s.selection.select(e)})}return y(e.target)?(e.preventDefault(),void t(e.target)):void(/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"==e.target.tagName&&t(e.target)))})));var e=n.throttle(function(e){s.composing||h(e)});s.on("nodechange ResizeEditor ResizeWindow drop",e),s.on("keyup compositionend",function(t){k&&"TABLE"==k.nodeName&&e(t)}),s.on("hide blur",f)}),s.on("remove",x),{isResizable:l,showResizeRect:d,hideResizeRect:f,updateResizeRect:h,controlSelect:N,destroy:E}}}),r(z,[],function(){function e(e){return function(){return e}}function t(e){return function(t){return!e(t)}}function n(e,t){return function(n){return e(t(n))}}function r(){var e=a.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0;return!1}}function i(){var e=a.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1;
    return!0}}function o(e){var t=a.call(arguments);return t.length-1>=e.length?e.apply(this,t.slice(1)):function(){var e=t.concat([].slice.call(arguments));return o.apply(this,e)}}var a=[].slice;return{constant:e,negate:t,and:i,or:r,curry:o,compose:n}}),r(U,[_,p,k],function(e,t,n){function r(e){return m(e)?!1:d(e)?!f(e.parentNode):h(e)||u(e)||p(e)||c(e)}function i(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode){if(c(e))return!1;if(l(e))return!0}return!0}function o(e){return c(e)?t.reduce(e.getElementsByTagName("*"),function(e,t){return e||l(t)},!1)!==!0:!1}function a(e){return h(e)||o(e)}function s(e,t){return r(e)&&i(e,t)}var l=e.isContentEditableTrue,c=e.isContentEditableFalse,u=e.isBr,d=e.isText,f=e.matchNodeNames("script style textarea"),h=e.matchNodeNames("img input textarea hr iframe video audio object"),p=e.matchNodeNames("table"),m=n.isCaretContainer;return{isCaretCandidate:r,isInEditable:i,isAtomic:a,isEditableCaretCandidate:s}}),r(W,[],function(){function e(e){return e?{left:u(e.left),top:u(e.top),bottom:u(e.bottom),right:u(e.right),width:u(e.width),height:u(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}}function t(t,n){return t=e(t),n?t.right=t.left:(t.left=t.left+t.width,t.right=t.left),t.width=0,t}function n(e,t){return e.left===t.left&&e.top===t.top&&e.bottom===t.bottom&&e.right===t.right}function r(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2}function i(e,t){return e.bottom<t.top?!0:e.top>t.bottom?!1:r(t.top-e.bottom,e,t)}function o(e,t){return e.top>t.bottom?!0:e.bottom<t.top?!1:r(t.bottom-e.top,e,t)}function a(e,t){return e.left<t.left}function s(e,t){return e.right>t.right}function l(e,t){return i(e,t)?-1:o(e,t)?1:a(e,t)?-1:s(e,t)?1:0}function c(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom}var u=Math.round;return{clone:e,collapse:t,isEqual:n,isAbove:i,isBelow:o,isLeft:a,isRight:s,compare:l,containsXY:c}}),r(V,[],function(){function e(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&t.test(e)}var t=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]");return{isExtendingChar:e}}),r($,[z,_,w,T,U,W,V],function(e,t,n,r,i,o,a){function s(e){return"createRange"in e?e.createRange():n.DOM.createRng()}function l(e){return e&&/[\r\n\t ]/.test(e)}function c(e){var t=e.startContainer,n=e.startOffset,r;return!!(l(e.toString())&&v(t.parentNode)&&(r=t.data,l(r[n-1])||l(r[n+1])))}function u(e){function t(e){var t=e.ownerDocument,n=s(t),r=t.createTextNode("\xa0"),i=e.parentNode,a;return i.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1),a=o.clone(n.getBoundingClientRect()),i.removeChild(r),a}function n(e){var n,r;return r=e.getClientRects(),n=r.length>0?o.clone(r[0]):o.clone(e.getBoundingClientRect()),b(e)&&0===n.left?t(e):n}function r(e,t){return e=o.collapse(e,t),e.width=1,e.right=e.left+1,e}function i(e){0!==e.height&&(u.length>0&&o.isEqual(e,u[u.length-1])||u.push(e))}function l(e,t){var o=s(e.ownerDocument);if(t<e.data.length){if(a.isExtendingChar(e.data[t]))return u;if(a.isExtendingChar(e.data[t-1])&&(o.setStart(e,t),o.setEnd(e,t+1),!c(o)))return i(r(n(o),!1)),u}t>0&&(o.setStart(e,t-1),o.setEnd(e,t),c(o)||i(r(n(o),!1))),t<e.data.length&&(o.setStart(e,t),o.setEnd(e,t+1),c(o)||i(r(n(o),!0)))}var u=[],d,h;if(y(e.container()))return l(e.container(),e.offset()),u;if(f(e.container()))if(e.isAtEnd())h=x(e.container(),e.offset()),y(h)&&l(h,h.data.length),g(h)&&!b(h)&&i(r(n(h),!1));else{if(h=x(e.container(),e.offset()),y(h)&&l(h,0),g(h)&&e.isAtEnd())return i(r(n(h),!1)),u;d=x(e.container(),e.offset()-1),g(d)&&!b(d)&&(p(d)||p(h)||!g(h))&&i(r(n(d),!1)),g(h)&&i(r(n(h),!0))}return u}function d(t,n,r){function i(){return y(t)?0===n:0===n}function o(){return y(t)?n>=t.data.length:n>=t.childNodes.length}function a(){var e;return e=s(t.ownerDocument),e.setStart(t,n),e.setEnd(t,n),e}function l(){return r||(r=u(new d(t,n))),r}function c(){return l().length>0}function f(e){return e&&t===e.container()&&n===e.offset()}function h(e){return x(t,e?n-1:n)}return{container:e.constant(t),offset:e.constant(n),toRange:a,getClientRects:l,isVisible:c,isAtStart:i,isAtEnd:o,isEqual:f,getNode:h}}var f=t.isElement,h=i.isCaretCandidate,p=t.matchStyleValues("display","block table"),m=t.matchStyleValues("float","left right"),g=e.and(f,h,e.negate(m)),v=e.negate(t.matchStyleValues("white-space","pre pre-line pre-wrap")),y=t.isText,b=t.isBr,C=n.nodeIndex,x=r.getNode;return d.fromRangeStart=function(e){return new d(e.startContainer,e.startOffset)},d.fromRangeEnd=function(e){return new d(e.endContainer,e.endOffset)},d.after=function(e){return new d(e.parentNode,C(e)+1)},d.before=function(e){return new d(e.parentNode,C(e))},d}),r(q,[_,w,z,p,$],function(e,t,n,r,i){function o(e){var t=e.parentNode;return v(t)?o(t):t}function a(e){return e?r.reduce(e.childNodes,function(e,t){return v(t)&&"BR"!=t.nodeName?e=e.concat(a(t)):e.push(t),e},[]):[]}function s(e,t){for(;(e=e.previousSibling)&&g(e);)t+=e.data.length;return t}function l(e){return function(t){return e===t}}function c(t){var n,i,s;return n=a(o(t)),i=r.findIndex(n,l(t),t),n=n.slice(0,i+1),s=r.reduce(n,function(e,t,r){return g(t)&&g(n[r-1])&&e++,e},0),n=r.filter(n,e.matchNodeNames(t.nodeName)),i=r.findIndex(n,l(t),t),i-s}function u(e){var t;return t=g(e)?"text()":e.nodeName.toLowerCase(),t+"["+c(e)+"]"}function d(e,t,n){var r=[];for(t=t.parentNode;t!=e&&(!n||!n(t));t=t.parentNode)r.push(t);return r}function f(t,i){var o,a,l=[],c,f,h;return o=i.container(),a=i.offset(),g(o)?c=s(o,a):(f=o.childNodes,a>=f.length?(c="after",a=f.length-1):c="before",o=f[a]),l.push(u(o)),h=d(t,o),h=r.filter(h,n.negate(e.isBogus)),l=l.concat(r.map(h,function(e){return u(e)})),l.reverse().join("/")+","+c}function h(t,n,i){var o=a(t);return o=r.filter(o,function(e,t){return!g(e)||!g(o[t-1])}),o=r.filter(o,e.matchNodeNames(n)),o[i]}function p(e,t){for(var n=e,r=0,o;g(n);){if(o=n.data.length,t>=r&&r+o>=t){e=n,t-=r;break}if(!g(n.nextSibling)){e=n,t=o;break}r+=o,n=n.nextSibling}return t>e.data.length&&(t=e.data.length),new i(e,t)}function m(e,t){var n,o,a;return t?(n=t.split(","),t=n[0].split("/"),a=n.length>1?n[1]:"before",o=r.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),h(e,t[1],parseInt(t[2],10))):null},e),o?g(o)?p(o,parseInt(a,10)):(a="after"===a?y(o)+1:y(o),new i(o.parentNode,a)):null):null}var g=e.isText,v=e.isBogus,y=t.nodeIndex;return{create:f,resolve:m}}),r(j,[d,m,k,q,$,_],function(e,t,n,r,i,o){function a(a){var l=a.dom;this.getBookmark=function(e,c){function u(e,n){var r=0;return t.each(l.select(e),function(e){return"all"!==e.getAttribute("data-mce-bogus")?e==n?!1:void r++:void 0}),r}function d(e){function t(t){var n,r,i,o=t?"start":"end";n=e[o+"Container"],r=e[o+"Offset"],1==n.nodeType&&"TR"==n.nodeName&&(i=n.childNodes,n=i[Math.min(t?r:r-1,i.length-1)],n&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r)))}return t(!0),t(),e}function f(e){function t(e,t){var r=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],o=[],a,s,u=0;if(3==r.nodeType){if(c)for(a=r.previousSibling;a&&3==a.nodeType;a=a.previousSibling)i+=a.nodeValue.length;o.push(i)}else s=r.childNodes,i>=s.length&&s.length&&(u=1,i=Math.max(0,s.length-1)),o.push(l.nodeIndex(s[i],c)+u);for(;r&&r!=n;r=r.parentNode)o.push(l.nodeIndex(r,c));return o}var n=l.getRoot(),r={};return r.start=t(e,!0),a.isCollapsed()||(r.end=t(e)),r}function h(e){function t(e){var t;if(n.isCaretContainer(e)){if(o.isText(e)&&n.isCaretContainerBlock(e)&&(e=e.parentNode),t=e.previousSibling,s(t))return t;if(t=e.nextSibling,s(t))return t}}return t(e.startContainer)||t(e.endContainer)}var p,m,g,v,y,b,C="&#xFEFF;",x;if(2==e)return b=a.getNode(),y=b?b.nodeName:null,p=a.getRng(),s(b)||"IMG"==y?{name:y,index:u(y,b)}:a.tridentSel?a.tridentSel.getBookmark(e):(b=h(p),b?(y=b.tagName,{name:y,index:u(y,b)}):f(p));if(3==e)return p=a.getRng(),{start:r.create(l.getRoot(),i.fromRangeStart(p)),end:r.create(l.getRoot(),i.fromRangeEnd(p))};if(e)return{rng:a.getRng()};if(p=a.getRng(),g=l.uniqueId(),v=a.isCollapsed(),x="overflow:hidden;line-height:0px",p.duplicate||p.item){if(p.item)return b=p.item(0),y=b.nodeName,{name:y,index:u(y,b)};m=p.duplicate();try{p.collapse(),p.pasteHTML('<span data-mce-type="bookmark" id="'+g+'_start" style="'+x+'">'+C+"</span>"),v||(m.collapse(!1),p.moveToElementText(m.parentElement()),0===p.compareEndPoints("StartToEnd",m)&&m.move("character",-1),m.pasteHTML('<span data-mce-type="bookmark" id="'+g+'_end" style="'+x+'">'+C+"</span>"))}catch(w){return null}}else{if(b=a.getNode(),y=b.nodeName,"IMG"==y)return{name:y,index:u(y,b)};m=d(p.cloneRange()),v||(m.collapse(!1),m.insertNode(l.create("span",{"data-mce-type":"bookmark",id:g+"_end",style:x},C))),p=d(p),p.collapse(!0),p.insertNode(l.create("span",{"data-mce-type":"bookmark",id:g+"_start",style:x},C))}return a.moveToBookmark({id:g,keep:1}),{id:g}},this.moveToBookmark=function(n){function i(e){var t=n[e?"start":"end"],r,i,o,a;if(t){for(o=t[0],i=d,r=t.length-1;r>=1;r--){if(a=i.childNodes,t[r]>a.length-1)return;i=a[t[r]]}3===i.nodeType&&(o=Math.min(t[0],i.nodeValue.length)),1===i.nodeType&&(o=Math.min(t[0],i.childNodes.length)),e?u.setStart(i,o):u.setEnd(i,o)}return!0}function o(r){var i=l.get(n.id+"_"+r),o,a,s,c,u=n.keep;if(i&&(o=i.parentNode,"start"==r?(u?(o=i.firstChild,a=1):a=l.nodeIndex(i),f=h=o,p=m=a):(u?(o=i.firstChild,a=1):a=l.nodeIndex(i),h=o,m=a),!u)){for(c=i.previousSibling,s=i.nextSibling,t.each(t.grep(i.childNodes),function(e){3==e.nodeType&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});i=l.get(n.id+"_"+r);)l.remove(i,1);c&&s&&c.nodeType==s.nodeType&&3==c.nodeType&&!e.opera&&(a=c.nodeValue.length,c.appendData(s.nodeValue),l.remove(s),"start"==r?(f=h=c,p=m=a):(h=c,m=a))}}function s(t){return!l.isBlock(t)||t.innerHTML||e.ie||(t.innerHTML='<br data-mce-bogus="1" />'),t}function c(){var e,t;return e=l.createRng(),t=r.resolve(l.getRoot(),n.start),e.setStart(t.container(),t.offset()),t=r.resolve(l.getRoot(),n.end),e.setEnd(t.container(),t.offset()),e}var u,d,f,h,p,m;if(n)if(t.isArray(n.start)){if(u=l.createRng(),d=l.getRoot(),a.tridentSel)return a.tridentSel.moveToBookmark(n);i(!0)&&i()&&a.setRng(u)}else"string"==typeof n.start?a.setRng(c(n)):n.id?(o("start"),o("end"),f&&(u=l.createRng(),u.setStart(s(f),p),u.setEnd(s(h),m),a.setRng(u))):n.name?a.select(l.select(n.name)[n.index]):n.rng&&a.setRng(n.rng)}}var s=o.isContentEditableFalse;return a.isBookmarkNode=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},a}),r(Y,[y,O,F,T,j,_,d,m,$],function(e,n,r,i,o,a,s,l,c){function u(e,t,i,a){var s=this;s.dom=e,s.win=t,s.serializer=i,s.editor=a,s.bookmarkManager=new o(s),s.controlSelection=new r(s,a),s.win.getSelection||(s.tridentSel=new n(s))}var d=l.each,f=l.trim,h=s.ie;return u.prototype={setCursorLocation:function(e,t){var n=this,r=n.dom.createRng();e?(r.setStart(e,t),r.setEnd(e,t),n.setRng(r),n.collapse(!1)):(n._moveEndPoint(r,n.editor.getBody(),!0),n.setRng(r))},getContent:function(e){var n=this,r=n.getRng(),i=n.dom.create("body"),o=n.getSel(),a,s,l;return e=e||{},a=s="",e.get=!0,e.format=e.format||"html",e.selection=!0,n.editor.fire("BeforeGetContent",e),"text"==e.format?n.isCollapsed()?"":r.text||(o.toString?o.toString():""):(r.cloneContents?(l=r.cloneContents(),l&&i.appendChild(l)):r.item!==t||r.htmlText!==t?(i.innerHTML="<br>"+(r.item?r.item(0).outerHTML:r.htmlText),i.removeChild(i.firstChild)):i.innerHTML=r.toString(),/^\s/.test(i.innerHTML)&&(a=" "),/\s+$/.test(i.innerHTML)&&(s=" "),e.getInner=!0,e.content=n.isCollapsed()?"":a+n.serializer.serialize(i,e)+s,n.editor.fire("GetContent",e),e.content)},setContent:function(e,t){var n=this,r=n.getRng(),i,o=n.win.document,a,s;if(t=t||{format:"html"},t.set=!0,t.selection=!0,t.content=e,t.no_events||n.editor.fire("BeforeSetContent",t),e=t.content,r.insertNode){e+='<span id="__caret">_</span>',r.startContainer==o&&r.endContainer==o?o.body.innerHTML=e:(r.deleteContents(),0===o.body.childNodes.length?o.body.innerHTML=e:r.createContextualFragment?r.insertNode(r.createContextualFragment(e)):(a=o.createDocumentFragment(),s=o.createElement("div"),a.appendChild(s),s.outerHTML=e,r.insertNode(a))),i=n.dom.get("__caret"),r=o.createRange(),r.setStartBefore(i),r.setEndBefore(i),n.setRng(r),n.dom.remove("__caret");try{n.setRng(r)}catch(l){}}else r.item&&(o.execCommand("Delete",!1,null),r=n.getRng()),/^\s+/.test(e)?(r.pasteHTML('<span id="__mce_tmp">_</span>'+e),n.dom.remove("__mce_tmp")):r.pasteHTML(e);t.no_events||n.editor.fire("SetContent",t)},getStart:function(e){var t=this,n=t.getRng(),r,i,o,a;if(n.duplicate||n.item){if(n.item)return n.item(0);for(o=n.duplicate(),o.collapse(1),r=o.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),i=a=n.parentElement();a=a.parentNode;)if(a==r){r=i;break}return r}return r=n.startContainer,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[Math.min(r.childNodes.length-1,n.startOffset)])),r&&3==r.nodeType?r.parentNode:r},getEnd:function(e){var t=this,n=t.getRng(),r,i;return n.duplicate||n.item?n.item?n.item(0):(n=n.duplicate(),n.collapse(0),r=n.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),r&&"BODY"==r.nodeName?r.lastChild||r:r):(r=n.endContainer,i=n.endOffset,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[i>0?i-1:i])),r&&3==r.nodeType?r.parentNode:r)},getBookmark:function(e,t){return this.bookmarkManager.getBookmark(e,t)},moveToBookmark:function(e){return this.bookmarkManager.moveToBookmark(e)},select:function(e,t){var n=this,r=n.dom,i=r.createRng(),o;if(n.lastFocusBookmark=null,e){if(!t&&n.controlSelection.controlSelect(e))return;o=r.nodeIndex(e),i.setStart(e.parentNode,o),i.setEnd(e.parentNode,o+1),t&&(n._moveEndPoint(i,e,!0),n._moveEndPoint(i,e)),n.setRng(i)}return e},isCollapsed:function(){var e=this,t=e.getRng(),n=e.getSel();return!t||t.item?!1:t.compareEndPoints?0===t.compareEndPoints("StartToEnd",t):!n||t.collapsed},collapse:function(e){var t=this,n=t.getRng(),r;n.item&&(r=n.item(0),n=t.win.document.body.createTextRange(),n.moveToElementText(r)),n.collapse(!!e),t.setRng(n)},getSel:function(){var e=this.win;return e.getSelection?e.getSelection():e.document.selection},getRng:function(e){function t(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}}var n=this,r,i,o,a,s,l;if(!n.win)return null;if(a=n.win.document,!e&&n.lastFocusBookmark){var c=n.lastFocusBookmark;return c.startContainer?(i=a.createRange(),i.setStart(c.startContainer,c.startOffset),i.setEnd(c.endContainer,c.endOffset)):i=c,i}if(e&&n.tridentSel)return n.tridentSel.getRangeAt(0);try{(r=n.getSel())&&(i=r.rangeCount>0?r.getRangeAt(0):r.createRange?r.createRange():a.createRange())}catch(u){}if(l=n.editor.fire("GetSelectionRange",{range:i}),l.range!==i)return l.range;if(h&&i&&i.setStart&&a.selection){try{s=a.selection.createRange()}catch(u){}s&&s.item&&(o=s.item(0),i=a.createRange(),i.setStartBefore(o),i.setEndAfter(o))}return i||(i=a.createRange?a.createRange():a.body.createTextRange()),i.setStart&&9===i.startContainer.nodeType&&i.collapsed&&(o=n.dom.getRoot(),i.setStart(o,0),i.setEnd(o,0)),n.selectedRange&&n.explicitRange&&(0===t(i.START_TO_START,i,n.selectedRange)&&0===t(i.END_TO_END,i,n.selectedRange)?i=n.explicitRange:(n.selectedRange=null,n.explicitRange=null)),i},setRng:function(e,t){var n=this,r,i,o;if(e)if(e.select){n.explicitRange=null;try{e.select()}catch(a){}}else if(n.tridentSel){if(e.cloneRange)try{n.tridentSel.addRange(e)}catch(a){}}else{if(r=n.getSel(),o=n.editor.fire("SetSelectionRange",{range:e}),e=o.range,r){n.explicitRange=e;try{r.removeAllRanges(),r.addRange(e)}catch(a){}t===!1&&r.extend&&(r.collapse(e.endContainer,e.endOffset),r.extend(e.startContainer,e.startOffset)),n.selectedRange=r.rangeCount>0?r.getRangeAt(0):null}e.collapsed||e.startContainer!=e.endContainer||!r.setBaseAndExtent||s.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(i=e.startContainer.childNodes[e.startOffset],i&&"IMG"==i.tagName&&n.getSel().setBaseAndExtent(i,0,i,1))}},setNode:function(e){var t=this;return t.setContent(t.dom.getOuterHTML(e)),e},getNode:function(){function e(e,t){for(var n=e;e&&3===e.nodeType&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n}var t=this,n=t.getRng(),r,i,o,a,s,l=t.dom.getRoot();return n?(i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset,n.setStart?(r=n.commonAncestorContainer,!n.collapsed&&(i==o&&2>s-a&&i.hasChildNodes()&&(r=i.childNodes[a]),3===i.nodeType&&3===o.nodeType&&(i=i.length===a?e(i.nextSibling,!0):i.parentNode,o=0===s?e(o.previousSibling,!1):o.parentNode,i&&i===o))?i:r&&3==r.nodeType?r.parentNode:r):(r=n.item?n.item(0):n.parentElement(),r.ownerDocument!==t.win.document&&(r=l),r)):l},getSelectedBlocks:function(t,n){var r=this,i=r.dom,o,a,s=[];if(a=i.getRoot(),t=i.getParent(t||r.getStart(),i.isBlock),n=i.getParent(n||r.getEnd(),i.isBlock),t&&t!=a&&s.push(t),t&&n&&t!=n){o=t;for(var l=new e(t,a);(o=l.next())&&o!=n;)i.isBlock(o)&&s.push(o)}return n&&t!=n&&n!=a&&s.push(n),s},isForward:function(){var e=this.dom,t=this.getSel(),n,r;return t&&t.anchorNode&&t.focusNode?(n=e.createRng(),n.setStart(t.anchorNode,t.anchorOffset),n.collapse(!0),r=e.createRng(),r.setStart(t.focusNode,t.focusOffset),r.collapse(!0),n.compareBoundaryPoints(n.START_TO_START,r)<=0):!0},normalize:function(){var e=this,t=e.getRng();return s.range&&new i(e.dom).normalize(t)&&e.setRng(t,e.isForward()),t},selectorChanged:function(e,t){var n=this,r;return n.selectorChangedData||(n.selectorChangedData={},r={},n.editor.on("NodeChange",function(e){var t=e.element,i=n.dom,o=i.getParents(t,null,i.getRoot()),a={};d(n.selectorChangedData,function(e,t){d(o,function(n){return i.is(n,t)?(r[t]||(d(e,function(e){e(!0,{node:n,selector:t,parents:o})}),r[t]=e),a[t]=e,!1):void 0})}),d(r,function(e,n){a[n]||(delete r[n],d(e,function(e){e(!1,{node:t,selector:n,parents:o})}))})})),n.selectorChangedData[e]||(n.selectorChangedData[e]=[]),n.selectorChangedData[e].push(t),n},getScrollContainer:function(){for(var e,t=this.dom.getRoot();t&&"BODY"!=t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){function n(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}}var r,i,o=this,s=o.dom,l=s.getRoot(),c,u,d=0;if(a.isElement(e)){if(t===!1&&(d=e.offsetHeight),"BODY"!=l.nodeName){var f=o.getScrollContainer();if(f)return r=n(e).y-n(f).y+d,u=f.clientHeight,c=f.scrollTop,void((c>r||r+25>c+u)&&(f.scrollTop=c>r?r:r-u+25))}i=s.getViewPort(o.editor.getWin()),r=s.getPos(e).y+d,c=i.y,u=i.h,(r<i.y||r+25>c+u)&&o.editor.getWin().scrollTo(0,c>r?r:r-u+25)}},placeCaretAt:function(e,t){this.setRng(i.getCaretRangeFromPoint(e,t,this.editor.getDoc()))},_moveEndPoint:function(t,n,r){var i=n,o=new e(n,i),a=this.dom.schema.getNonEmptyElements();do{if(3==n.nodeType&&0!==f(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"==n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(s.ie&&s.ie<11&&this.dom.isBlock(n)&&this.dom.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?o.next():o.prev());"BODY"==i.nodeName&&(r?t.setStart(i,0):t.setEnd(i,i.childNodes.length))},getBoundingClientRect:function(){var e=this.getRng();return e.collapsed?c.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){this.win=null,this.controlSelection.destroy()}},u}),r(X,[j,m],function(e,t){function n(t){this.compare=function(n,i){function o(e){var n={};return r(t.getAttribs(e),function(r){var i=r.nodeName.toLowerCase();0!==i.indexOf("_")&&"style"!==i&&"data-mce-style"!==i&&"data-mce-fragment"!=i&&(n[i]=t.getAttrib(e,i))}),n}function a(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(n=t[r],"undefined"==typeof n)return!1;if(e[r]!=n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0}return n.nodeName!=i.nodeName?!1:a(o(n),o(i))&&a(t.parseStyle(t.getAttrib(n,"style")),t.parseStyle(t.getAttrib(i,"style")))?!e.isBookmarkNode(n)&&!e.isBookmarkNode(i):!1}}var r=t.each;return n}),r(K,[m],function(e){function t(e,t){function r(e){return e.replace(/%(\w+)/g,"")}var i,o,a=e.dom,s="",l,c;if(c=e.settings.preview_styles,c===!1)return"";if(c||(c="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),"string"==typeof t){if(t=e.formatter.get(t),!t)return;t=t[0]}return i=t.block||t.inline||"span",o=a.create(i),n(t.styles,function(e,t){e=r(e),e&&a.setStyle(o,t,e)}),n(t.attributes,function(e,t){e=r(e),e&&a.setAttrib(o,t,e)}),n(t.classes,function(e){e=r(e),a.hasClass(o,e)||a.addClass(o,e)}),e.fire("PreviewFormats"),a.setStyles(o,{position:"absolute",left:-65535}),e.getBody().appendChild(o),l=a.getStyle(e.getBody(),"fontSize",!0),l=/px$/.test(l)?parseInt(l,10):0,n(c.split(" "),function(t){var n=a.getStyle(o,t,!0);if(!("background-color"==t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=a.getStyle(e.getBody(),t,!0),"#ffffff"==a.toHex(n).toLowerCase())||"color"==t&&"#000000"==a.toHex(n).toLowerCase())){if("font-size"==t&&/em|%$/.test(n)){if(0===l)return;n=parseFloat(n,10)/(/%$/.test(n)?100:1),n=n*l+"px"}"border"==t&&n&&(s+="padding:0 2px;"),s+=t+":"+n+";"}}),e.fire("AfterPreviewFormats"),a.remove(o),s}var n=e.each;return{getCssText:t}}),r(G,[p,_,g],function(e,t,n){function r(e,t){var n=o[e];n||(o[e]=n=[]),o[e].push(t)}function i(e,t){s(o[e],function(e){e(t)})}var o=[],a=e.filter,s=e.each;return r("pre",function(r){function i(t){return c(t.previousSibling)&&-1!=e.indexOf(u,t.previousSibling)}function o(e,t){n(t).remove(),n(e).append("<br><br>").append(t.childNodes)}var l=r.selection.getRng(),c,u;c=t.matchNodeNames("pre"),l.collapsed||(u=r.selection.getSelectedBlocks(),s(a(a(u,c),i),function(e){o(e.previousSibling,e)}))}),{postProcess:i}}),r(J,[y,T,j,X,m,K,G],function(e,t,n,r,i,o,a){return function(s){function l(e){return e.nodeType&&(e=e.nodeName),!!s.schema.getTextBlockElements()[e.toLowerCase()]}function c(e){return/^(TH|TD)$/.test(e.nodeName)}function u(e){return e&&/^(IMG)$/.test(e.nodeName)}function d(e,t){return Y.getParents(e,t,Y.getRoot())}function f(e){return 1===e.nodeType&&"_mce_caret"===e.id}function h(){g({valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"}}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"}},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"}}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0},fontname:{inline:"span",styles:{fontFamily:"%value"}},fontsize:{inline:"span",styles:{fontSize:"%value"}},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(e,t,n){ue(n,function(t,n){Y.setAttrib(e,n,t)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}),ue("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){g(e,{block:e,remove:"all"})}),g(s.settings.formats)}function p(){s.addShortcut("meta+b","bold_desc","Bold"),s.addShortcut("meta+i","italic_desc","Italic"),s.addShortcut("meta+u","underline_desc","Underline");for(var e=1;6>=e;e++)s.addShortcut("access+"+e,"",["FormatBlock",!1,"h"+e]);s.addShortcut("access+7","",["FormatBlock",!1,"p"]),s.addShortcut("access+8","",["FormatBlock",!1,"div"]),s.addShortcut("access+9","",["FormatBlock",!1,"address"])}function m(e){return e?j[e]:j}function g(e,t){e&&("string"!=typeof e?ue(e,function(e,t){g(t,e)}):(t=t.length?t:[t],ue(t,function(e){e.deep===oe&&(e.deep=!e.selector),e.split===oe&&(e.split=!e.selector||e.inline),e.remove===oe&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),j[e]=t))}function v(e){return e&&j[e]&&delete j[e],j}function y(e,t){var n=m(t);if(n)for(var r=0;r<n.length;r++)if(n[r].inherit===!1&&Y.is(e,n[r].selector))return!0;return!1}function b(e){var t;return s.dom.getParent(e,function(e){return t=s.dom.getStyle(e,"text-decoration"),t&&"none"!==t}),t}function C(e){var t;1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=b(e.parentNode),s.dom.getStyle(e,"color")&&t?s.dom.setStyle(e,"text-decoration",t):s.dom.getStyle(e,"text-decoration")===t&&s.dom.setStyle(e,"text-decoration",null))}function x(t,n,r){function i(e,t){if(t=t||d,e){if(t.onformat&&t.onformat(e,t,n,r),ue(t.styles,function(t,r){Y.setStyle(e,r,M(t,n))}),t.styles){var i=Y.getAttrib(e,"style");i&&e.setAttribute("data-mce-style",i)}ue(t.attributes,function(t,r){Y.setAttrib(e,r,M(t,n))}),ue(t.classes,function(t){t=M(t,n),Y.hasClass(e,t)||Y.addClass(e,t)})}}function o(){function t(t,n){var i=new e(n);for(r=i.prev2();r;r=i.prev2()){if(3==r.nodeType&&r.data.length>0)return r;if(r.childNodes.length>1||r==t||"BR"==r.tagName)return r}}var n=s.selection.getRng(),i=n.startContainer,o=n.endContainer;if(i!=o&&0===n.endOffset){var a=t(i,o),l=3==a.nodeType?a.data.length:a.childNodes.length;n.setEnd(a,l)}return n}function c(e,r,o){var a=[],s,c,h=!0;s=d.inline||d.block,c=Y.create(s),i(c),K.walk(e,function(e){function r(e){var m,v,y,b,C;return C=h,m=e.nodeName.toLowerCase(),v=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&ae(e)&&(C=h,h="true"===ae(e),b=!0),B(m,"br")?(p=0,void(d.block&&Y.remove(e))):d.wrapper&&E(e,t,n)?void(p=0):h&&!b&&d.block&&!d.wrapper&&l(m)&&G(v,s)?(e=Y.rename(e,s),i(e),a.push(e),void(p=0)):d.selector&&(ue(u,function(t){return"collapsed"in t&&t.collapsed!==g?void 0:Y.is(e,t.selector)&&!f(e)?(i(e,t),y=!0,!1):void 0}),!d.inline||y)?void(p=0):void(!h||b||!G(s,m)||!G(v,s)||!o&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||f(e)||d.inline&&J(e)?(p=0,ue(de(e.childNodes),r),b&&(h=C),p=0):(p||(p=Y.clone(c,ne),e.parentNode.insertBefore(p,e),a.push(p)),p.appendChild(e)))}var p;ue(e,r)}),d.links===!0&&ue(a,function(e){function t(e){"A"===e.nodeName&&i(e,d),ue(de(e.childNodes),t)}t(e)}),ue(a,function(e){function r(e){var t=0;return ue(e.childNodes,function(e){P(e)||ce(e)||t++}),t}function o(e){var t,n;return ue(e.childNodes,function(e){return 1!=e.nodeType||ce(e)||f(e)?void 0:(t=e,ne)}),t&&!ce(t)&&A(t,d)&&(n=Y.clone(t,ne),i(n),Y.replace(n,e,re),Y.remove(t,1)),n||e}var s;if(s=r(e),(a.length>1||!J(e))&&0===s)return void Y.remove(e,1);if(d.inline||d.wrapper){if(d.exact||1!==s||(e=o(e)),ue(u,function(t){ue(Y.select(t.inline,e),function(e){ce(e)||F(t,n,e,t.exact?e:null)})}),E(e.parentNode,t,n))return Y.remove(e,1),e=0,re;d.merge_with_parents&&Y.getParent(e.parentNode,function(r){return E(r,t,n)?(Y.remove(e,1),e=0,re):void 0}),e&&d.merge_siblings!==!1&&(e=W(U(e),e),e=W(e,U(e,re)))}})}var u=m(t),d=u[0],h,p,g=!r&&X.isCollapsed();if("false"!==ae(X.getNode())){if(d){if(r)r.nodeType?(p=Y.createRng(),p.setStartBefore(r),p.setEndAfter(r),c(O(p,u),null,!0)):c(r,null,!0);else if(g&&d.inline&&!Y.select("td[data-mce-selected],th[data-mce-selected]").length)$("apply",t,n);else{var v=s.selection.getNode();Q||!u[0].defaultBlock||Y.getParent(v,Y.isBlock)||x(u[0].defaultBlock),s.selection.setRng(o()),h=X.getBookmark(),c(O(X.getRng(re),u),h),d.styles&&(d.styles.color||d.styles.textDecoration)&&(fe(v,C,"childNodes"),C(v)),X.moveToBookmark(h),q(X.getRng(re)),s.nodeChanged()}a.postProcess(t,s)}}else{r=X.getNode();for(var y=0,b=u.length;b>y;y++)if(u[y].ceFalseOverride&&Y.is(r,u[y].selector))return void i(r,u[y])}}function w(e,t,n,r){function i(e){var n,r,o,a,s;if(1===e.nodeType&&ae(e)&&(a=y,y="true"===ae(e),s=!0),n=de(e.childNodes),y&&!s)for(r=0,o=h.length;o>r&&!F(h[r],t,e,e);r++);if(p.deep&&n.length){for(r=0,o=n.length;o>r;r++)i(n[r]);s&&(y=a)}}function o(n){var i;return ue(d(n.parentNode).reverse(),function(n){var o;i||"_start"==n.id||"_end"==n.id||(o=E(n,e,t,r),o&&o.split!==!1&&(i=n))}),i}function a(e,n,r,i){var o,a,s,l,c,u;if(e){for(u=e.parentNode,o=n.parentNode;o&&o!=u;o=o.parentNode){
    for(a=Y.clone(o,ne),c=0;c<h.length;c++)if(F(h[c],t,a,a)){a=0;break}a&&(s&&a.appendChild(s),l||(l=a),s=a)}!i||p.mixed&&J(e)||(n=Y.split(e,n)),s&&(r.parentNode.insertBefore(s,r),l.appendChild(r))}return n}function l(e){return a(o(e),e,e,!0)}function u(e){var t=Y.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"];return ce(n)&&(n=n[e?"firstChild":"lastChild"]),3==n.nodeType&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),Y.remove(t,!0),n}function f(e){var t,n,r=e.commonAncestorContainer;if(e=O(e,h,re),p.split){if(t=V(e,re),n=V(e),t!=n){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"==t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&c(n)&&n.firstChild&&(n=n.firstChild||n),Y.isChildOf(t,n)&&!J(n)&&!c(t)&&!c(n))return t=H(t,"span",{id:"_start","data-mce-type":"bookmark"}),l(t),void(t=u(re));t=H(t,"span",{id:"_start","data-mce-type":"bookmark"}),n=H(n,"span",{id:"_end","data-mce-type":"bookmark"}),l(t),l(n),t=u(re),n=u()}else t=n=l(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=Z(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=Z(n)+1}K.walk(e,function(e){ue(e,function(e){i(e),1===e.nodeType&&"underline"===s.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===b(e.parentNode)&&F({deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})}var h=m(e),p=h[0],g,v,y=!0;if(n)return void(n.nodeType?(v=Y.createRng(),v.setStartBefore(n),v.setEndAfter(n),f(v)):f(n));if("false"!==ae(X.getNode()))X.isCollapsed()&&p.inline&&!Y.select("td[data-mce-selected],th[data-mce-selected]").length?$("remove",e,t,r):(g=X.getBookmark(),f(X.getRng(re)),X.moveToBookmark(g),p.inline&&_(e,t,X.getStart())&&q(X.getRng(!0)),s.nodeChanged());else{n=X.getNode();for(var C=0,x=h.length;x>C&&(!h[C].ceFalseOverride||!F(h[C],t,n,n));C++);}}function N(e,t,n){var r=m(e);!_(e,t,n)||"toggle"in r[0]&&!r[0].toggle?x(e,t,n):w(e,t,n)}function E(e,t,n,r){function i(e,t,i){var o,a,s=t[i],l;if(t.onmatch)return t.onmatch(e,t,i);if(s)if(s.length===oe){for(o in s)if(s.hasOwnProperty(o)){if(a="attributes"===i?Y.getAttrib(e,o):D(e,o),r&&!a&&!t.exact)return;if((!r||t.exact)&&!B(a,L(M(s[o],n),o)))return}}else for(l=0;l<s.length;l++)if("attributes"===i?Y.getAttrib(e,s[l]):D(e,s[l]))return t;return t}var o=m(t),a,s,l;if(o&&e)for(s=0;s<o.length;s++)if(a=o[s],A(e,a)&&i(e,a,"attributes")&&i(e,a,"styles")){if(l=a.classes)for(s=0;s<l.length;s++)if(!Y.hasClass(e,l[s]))return;return a}}function _(e,t,n){function r(n){var r=Y.getRoot();return n===r?!1:(n=Y.getParent(n,function(n){return y(n,e)?!0:n.parentNode===r||!!E(n,e,t,!0)}),E(n,e,t))}var i;return n?r(n):(n=X.getNode(),r(n)?re:(i=X.getStart(),i!=n&&r(i)?re:ne))}function S(e,t){var n,r=[],i={};return n=X.getStart(),Y.getParent(n,function(n){var o,a;for(o=0;o<e.length;o++)a=e[o],!i[a]&&E(n,a,t)&&(i[a]=!0,r.push(a))},Y.getRoot()),r}function k(e){var t=m(e),n,r,i,o,a;if(t)for(n=X.getStart(),r=d(n),o=t.length-1;o>=0;o--){if(a=t[o].selector,!a||t[o].defaultBlock)return re;for(i=r.length-1;i>=0;i--)if(Y.is(r[i],a))return re}return ne}function T(e,t,n){var r;return ie||(ie={},r={},s.on("NodeChange",function(e){var t=d(e.element),n={};t=i.grep(t,function(e){return 1==e.nodeType&&!e.getAttribute("data-mce-bogus")}),ue(ie,function(e,i){ue(t,function(o){return E(o,i,{},e.similar)?(r[i]||(ue(e,function(e){e(!0,{node:o,format:i,parents:t})}),r[i]=e),n[i]=e,!1):y(o,i)?!1:void 0})}),ue(r,function(i,o){n[o]||(delete r[o],ue(i,function(n){n(!1,{node:e.element,format:o,parents:t})}))})})),ue(e.split(","),function(e){ie[e]||(ie[e]=[],ie[e].similar=n),ie[e].push(t)}),this}function R(e){return o.getCssText(s,e)}function A(e,t){return B(e,t.inline)?re:B(e,t.block)?re:t.selector?1==e.nodeType&&Y.is(e,t.selector):void 0}function B(e,t){return e=e||"",t=t||"",e=""+(e.nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()==t.toLowerCase()}function D(e,t){return L(Y.getStyle(e,t),t)}function L(e,t){return"color"!=t&&"backgroundColor"!=t||(e=Y.toHex(e)),"fontWeight"==t&&700==e&&(e="bold"),"fontFamily"==t&&(e=e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+e}function M(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,function(e,n){return t[n]||e})),e}function P(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)}function H(e,t,n){var r=Y.create(t,n);return e.parentNode.insertBefore(r,e),r.appendChild(e),r}function O(t,n,r){function i(e){function t(e){return"BR"==e.nodeName&&e.getAttribute("data-mce-bogus")&&!e.nextSibling}var r,i,o,a,s;if(r=i=e?g:y,a=e?"previousSibling":"nextSibling",s=Y.getRoot(),3==r.nodeType&&!P(r)&&(e?v>0:b<r.nodeValue.length))return r;for(;;){if(!n[0].block_expand&&J(i))return i;for(o=i[a];o;o=o[a])if(!ce(o)&&!P(o)&&!t(o))return i;if(i==s||i.parentNode==s){r=i;break}i=i.parentNode}return r}function o(e,t){for(t===oe&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)e=e.childNodes[t],e&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}}function a(e){for(var t=e;t;){if(1===t.nodeType&&ae(t))return"false"===ae(t)?t:e;t=t.parentNode}return e}function c(t,n,i){function o(e,t){var n,o,a=e.nodeValue;return"undefined"==typeof t&&(t=i?a.length:0),i?(n=a.lastIndexOf(" ",t),o=a.lastIndexOf("\xa0",t),n=n>o?n:o,-1===n||r||n++):(n=a.indexOf(" ",t),o=a.indexOf("\xa0",t),n=-1!==n&&(-1===o||o>n)?n:o),n}var a,l,c,u;if(3===t.nodeType){if(c=o(t,n),-1!==c)return{container:t,offset:c};u=t}for(a=new e(t,Y.getParent(t,J)||s.getBody());l=a[i?"prev":"next"]();)if(3===l.nodeType){if(u=l,c=o(l),-1!==c)return{container:l,offset:c}}else if(J(l))break;return u?(n=i?0:u.length,{container:u,offset:n}):void 0}function u(e,r){var i,o,a,s;for(3==e.nodeType&&0===e.nodeValue.length&&e[r]&&(e=e[r]),i=d(e),o=0;o<i.length;o++)for(a=0;a<n.length;a++)if(s=n[a],!("collapsed"in s&&s.collapsed!==t.collapsed)&&Y.is(i[o],s.selector))return i[o];return e}function f(e,t){var r,i=Y.getRoot();if(n[0].wrapper||(r=Y.getParent(e,n[0].block,i)),r||(r=Y.getParent(3==e.nodeType?e.parentNode:e,function(e){return e!=i&&l(e)})),r&&n[0].wrapper&&(r=d(r,"ul,ol").reverse()[0]||r),!r)for(r=e;r[t]&&!J(r[t])&&(r=r[t],!B(r,"br")););return r||e}var h,p,m,g=t.startContainer,v=t.startOffset,y=t.endContainer,b=t.endOffset;if(1==g.nodeType&&g.hasChildNodes()&&(h=g.childNodes.length-1,g=g.childNodes[v>h?h:v],3==g.nodeType&&(v=0)),1==y.nodeType&&y.hasChildNodes()&&(h=y.childNodes.length-1,y=y.childNodes[b>h?h:b-1],3==y.nodeType&&(b=y.nodeValue.length)),g=a(g),y=a(y),(ce(g.parentNode)||ce(g))&&(g=ce(g)?g:g.parentNode,g=g.nextSibling||g,3==g.nodeType&&(v=0)),(ce(y.parentNode)||ce(y))&&(y=ce(y)?y:y.parentNode,y=y.previousSibling||y,3==y.nodeType&&(b=y.length)),n[0].inline&&(t.collapsed&&(m=c(g,v,!0),m&&(g=m.container,v=m.offset),m=c(y,b),m&&(y=m.container,b=m.offset)),p=o(y,b),p.node)){for(;p.node&&0===p.offset&&p.node.previousSibling;)p=o(p.node.previousSibling);p.node&&p.offset>0&&3===p.node.nodeType&&" "===p.node.nodeValue.charAt(p.offset-1)&&p.offset>1&&(y=p.node,y.splitText(p.offset-1))}return(n[0].inline||n[0].block_expand)&&(n[0].inline&&3==g.nodeType&&0!==v||(g=i(!0)),n[0].inline&&3==y.nodeType&&b!==y.nodeValue.length||(y=i())),n[0].selector&&n[0].expand!==ne&&!n[0].inline&&(g=u(g,"previousSibling"),y=u(y,"nextSibling")),(n[0].block||n[0].selector)&&(g=f(g,"previousSibling"),y=f(y,"nextSibling"),n[0].block&&(J(g)||(g=i(!0)),J(y)||(y=i()))),1==g.nodeType&&(v=Z(g),g=g.parentNode),1==y.nodeType&&(b=Z(y)+1,y=y.parentNode),{startContainer:g,startOffset:v,endContainer:y,endOffset:b}}function I(e,t){return t.links&&"A"==e.tagName}function F(e,t,n,r){var i,o,a;if(!A(n,e)&&!I(n,e))return ne;if("all"!=e.remove)for(ue(e.styles,function(i,o){i=L(M(i,t),o),"number"==typeof o&&(o=i,r=0),(e.remove_similar||!r||B(D(r,o),i))&&Y.setStyle(n,o,""),a=1}),a&&""===Y.getAttrib(n,"style")&&(n.removeAttribute("style"),n.removeAttribute("data-mce-style")),ue(e.attributes,function(e,i){var o;if(e=M(e,t),"number"==typeof i&&(i=e,r=0),!r||B(Y.getAttrib(r,i),e)){if("class"==i&&(e=Y.getAttrib(n,i),e&&(o="",ue(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(o+=(o?" ":"")+e)}),o)))return void Y.setAttrib(n,i,o);"class"==i&&n.removeAttribute("className"),te.test(i)&&n.removeAttribute("data-mce-"+i),n.removeAttribute(i)}}),ue(e.classes,function(e){e=M(e,t),r&&!Y.hasClass(r,e)||Y.removeClass(n,e)}),o=Y.getAttribs(n),i=0;i<o.length;i++)if(0!==o[i].nodeName.indexOf("_"))return ne;return"none"!=e.remove?(z(n,e),re):void 0}function z(e,t){function n(e,t,n){return e=U(e,t,n),!e||"BR"==e.nodeName||J(e)}var r=e.parentNode,i;t.block&&(Q?r==Y.getRoot()&&(t.list_block&&B(e,t.list_block)||ue(de(e.childNodes),function(e){G(Q,e.nodeName.toLowerCase())?i?i.appendChild(e):(i=H(e,Q),Y.setAttribs(i,s.settings.forced_root_block_attrs)):i=0})):J(e)&&!J(r)&&(n(e,ne)||n(e.firstChild,re,1)||e.insertBefore(Y.create("br"),e.firstChild),n(e,re)||n(e.lastChild,ne,1)||e.appendChild(Y.create("br")))),t.selector&&t.inline&&!B(t.inline,e)||Y.remove(e,1)}function U(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1==e.nodeType||!P(e))return e}function W(e,t){function n(e,t){for(i=e;i;i=i[t]){if(3==i.nodeType&&0!==i.nodeValue.length)return e;if(1==i.nodeType&&!ce(i))return i}return e}var i,o,a=new r(Y);if(e&&t&&(e=n(e,"previousSibling"),t=n(t,"nextSibling"),a.compare(e,t))){for(i=e.nextSibling;i&&i!=t;)o=i,i=i.nextSibling,e.appendChild(o);return Y.remove(t),ue(de(t.childNodes),function(t){e.appendChild(t)}),e}return t}function V(t,n){var r,i,o;return r=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"],1==r.nodeType&&(o=r.childNodes.length-1,!n&&i&&i--,r=r.childNodes[i>o?o:i]),3===r.nodeType&&n&&i>=r.nodeValue.length&&(r=new e(r,s.getBody()).next()||r),3!==r.nodeType||n||0!==i||(r=new e(r,s.getBody()).prev()||r),r}function $(t,n,r,i){function o(e){var t=Y.create("span",{id:g,"data-mce-bogus":!0,style:v?"color:red":""});return e&&t.appendChild(s.getDoc().createTextNode(ee)),t}function a(e,t){for(;e;){if(3===e.nodeType&&e.nodeValue!==ee||e.childNodes.length>1)return!1;t&&1===e.nodeType&&t.push(e),e=e.firstChild}return!0}function c(e){for(;e;){if(e.id===g)return e;e=e.parentNode}}function u(t){var n;if(t)for(n=new e(t,t),t=n.current();t;t=n.next())if(3===t.nodeType)return t}function d(e,t){var n,r;if(e)r=X.getRng(!0),a(e)?(t!==!1&&(r.setStartBefore(e),r.setEndBefore(e)),Y.remove(e)):(n=u(e),n.nodeValue.charAt(0)===ee&&(n.deleteData(0,1),r.startContainer==n&&r.startOffset>0&&r.setStart(n,r.startOffset-1),r.endContainer==n&&r.endOffset>0&&r.setEnd(n,r.endOffset-1)),Y.remove(e,1)),X.setRng(r);else if(e=c(X.getStart()),!e)for(;e=Y.get(g);)d(e,!1)}function f(){var e,t,i,a,s,l,d;e=X.getRng(!0),a=e.startOffset,l=e.startContainer,d=l.nodeValue,t=c(X.getStart()),t&&(i=u(t)),d&&a>0&&a<d.length&&/\w/.test(d.charAt(a))&&/\w/.test(d.charAt(a-1))?(s=X.getBookmark(),e.collapse(!0),e=O(e,m(n)),e=K.split(e),x(n,r,e),X.moveToBookmark(s)):(t&&i.nodeValue===ee?x(n,r,t):(t=o(!0),i=t.firstChild,e.insertNode(t),a=1,x(n,r,t)),X.setCursorLocation(i,a))}function h(){var e=X.getRng(!0),t,a,s,c,u,d,f=[],h,p;for(t=e.startContainer,a=e.startOffset,u=t,3==t.nodeType&&(a!=t.nodeValue.length&&(c=!0),u=u.parentNode);u;){if(E(u,n,r,i)){d=u;break}u.nextSibling&&(c=!0),f.push(u),u=u.parentNode}if(d)if(c)s=X.getBookmark(),e.collapse(!0),e=O(e,m(n),!0),e=K.split(e),w(n,r,e),X.moveToBookmark(s);else{for(p=o(),u=p,h=f.length-1;h>=0;h--)u.appendChild(Y.clone(f[h],!1)),u=u.firstChild;u.appendChild(Y.doc.createTextNode(ee)),u=u.firstChild;var g=Y.getParent(d,l);g&&Y.isEmpty(g)?d.parentNode.replaceChild(p,d):Y.insertAfter(p,d),X.setCursorLocation(u,1),Y.isEmpty(d)&&Y.remove(d)}}function p(){var e;e=c(X.getStart()),e&&!Y.isEmpty(e)&&fe(e,function(e){1!=e.nodeType||e.id===g||Y.isEmpty(e)||Y.setAttrib(e,"data-mce-bogus",null)},"childNodes")}var g="_mce_caret",v=s.settings.caret_debug;s._hasCaretEvents||(le=function(){var e=[],t;if(a(c(X.getStart()),e))for(t=e.length;t--;)Y.setAttrib(e[t],"data-mce-bogus","1")},se=function(e){var t=e.keyCode;d(),8==t&&X.isCollapsed()&&X.getStart().innerHTML==ee&&d(c(X.getStart())),37!=t&&39!=t||d(c(X.getStart())),p()},s.on("SetContent",function(e){e.selection&&p()}),s._hasCaretEvents=!0),"apply"==t?f():h()}function q(t){var n=t.startContainer,r=t.startOffset,i,o,a,s,l;if((t.startContainer!=t.endContainer||!u(t.startContainer.childNodes[t.startOffset]))&&(3==n.nodeType&&r>=n.nodeValue.length&&(r=Z(n),n=n.parentNode,i=!0),1==n.nodeType))for(s=n.childNodes,n=s[Math.min(r,s.length-1)],o=new e(n,Y.getParent(n,Y.isBlock)),(r>s.length-1||i)&&o.next(),a=o.current();a;a=o.next())if(3==a.nodeType&&!P(a))return l=Y.create("a",{"data-mce-bogus":"all"},ee),a.parentNode.insertBefore(l,a),t.setStart(a,0),X.setRng(t),void Y.remove(l)}var j={},Y=s.dom,X=s.selection,K=new t(Y),G=s.schema.isValidChild,J=Y.isBlock,Q=s.settings.forced_root_block,Z=Y.nodeIndex,ee="\ufeff",te=/^(src|href|style)$/,ne=!1,re=!0,ie,oe,ae=Y.getContentEditable,se,le,ce=n.isBookmarkNode,ue=i.each,de=i.grep,fe=i.walk,he=i.extend;he(this,{get:m,register:g,unregister:v,apply:x,remove:w,toggle:N,match:_,matchAll:S,matchNode:E,canApply:k,formatChanged:T,getCssText:R}),h(),p(),s.on("BeforeGetContent",function(e){le&&"raw"!=e.format&&le()}),s.on("mouseup keydown",function(e){se&&se(e)})}}),r(Q,[I,d],function(e,t){return function(e){function n(){return e.serializer.getTrimmedContent()}function r(t){e.setDirty(t)}function i(e){o.typing=!1,o.add({},e)}var o=this,a=0,s=[],l,c,u=0;return e.on("init",function(){o.add()}),e.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&o.beforeChange()}),e.on("ExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&i(e)}),e.on("ObjectResizeStart Cut",function(){o.beforeChange()}),e.on("SaveContent ObjectResized blur",i),e.on("DragEnd",i),e.on("KeyUp",function(a){var l=a.keyCode;a.isDefaultPrevented()||((l>=33&&36>=l||l>=37&&40>=l||45==l||13==l||a.ctrlKey)&&(i(),e.nodeChanged()),(46==l||8==l||t.mac&&(91==l||93==l))&&e.nodeChanged(),c&&o.typing&&(e.isDirty()||(r(s[0]&&n()!=s[0].content),e.isDirty()&&e.fire("change",{level:s[0],lastLevel:null})),e.fire("TypingUndo"),c=!1,e.nodeChanged()))}),e.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented()){if(t>=33&&36>=t||t>=37&&40>=t||45==t)return void(o.typing&&i(e));var n=e.ctrlKey&&!e.altKey||e.metaKey;!(16>t||t>20)||224==t||91==t||o.typing||n||(o.beforeChange(),o.typing=!0,o.add({},e),c=!0)}}),e.on("MouseDown",function(e){o.typing&&i(e)}),e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo"),e.on("AddUndo Undo Redo ClearUndos",function(t){t.isDefaultPrevented()||e.nodeChanged()}),o={data:s,typing:!1,beforeChange:function(){u||(l=e.selection.getBookmark(2,!0))},add:function(t,i){var o,c=e.settings,d;if(t=t||{},t.content=n(),u||e.removed)return null;if(d=s[a],e.fire("BeforeAddUndo",{level:t,lastLevel:d,originalEvent:i}).isDefaultPrevented())return null;if(d&&d.content==t.content)return null;if(s[a]&&(s[a].beforeBookmark=l),c.custom_undo_redo_levels&&s.length>c.custom_undo_redo_levels){for(o=0;o<s.length-1;o++)s[o]=s[o+1];s.length--,a=s.length}t.bookmark=e.selection.getBookmark(2,!0),a<s.length-1&&(s.length=a+1),s.push(t),a=s.length-1;var f={level:t,lastLevel:d,originalEvent:i};return e.fire("AddUndo",f),a>0&&(r(!0),e.fire("change",f)),t},undo:function(){var t;return o.typing&&(o.add(),o.typing=!1),a>0&&(t=s[--a],e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(t.beforeBookmark),r(!0),e.fire("undo",{level:t})),t},redo:function(){var t;return a<s.length-1&&(t=s[++a],e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(t.bookmark),r(!0),e.fire("redo",{level:t})),t},clear:function(){s=[],a=0,o.typing=!1,o.data=s,e.fire("ClearUndos")},hasUndo:function(){return a>0||o.typing&&s[0]&&n()!=s[0].content},hasRedo:function(){return a<s.length-1&&!this.typing},transact:function(e){o.beforeChange();try{u++,e()}finally{u--}return o.add()},extra:function(t,n){var r,i;o.transact(t)&&(i=s[a].bookmark,r=s[a-1],e.setContent(r.content,{format:"raw"}),e.selection.moveToBookmark(r.beforeBookmark),o.transact(n)&&(s[a-1].beforeBookmark=i))}}}}),r(Z,[y,T,d],function(e,t,n){var r=n.ie&&n.ie<11;return function(i){function o(o){function h(e){return e&&a.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&!/^(fixed|absolute)/i.test(e.style.position)&&"true"!==a.getContentEditable(e)}function p(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function m(e){var t;a.isBlock(e)&&(t=s.getRng(),e.appendChild(a.create("span",null,"\xa0")),s.select(e),e.lastChild.outerHTML="",s.setRng(t))}function g(e){var t=e,n=[],r;if(t){for(;t=t.firstChild;){if(a.isBlock(t))return;1!=t.nodeType||d[t.nodeName.toLowerCase()]||n.push(t)}for(r=n.length;r--;)t=n[r],!t.hasChildNodes()||t.firstChild==t.lastChild&&""===t.firstChild.nodeValue?a.remove(t):"A"==t.nodeName&&" "===(t.innerText||t.textContent)&&a.remove(t)}}function v(t){function r(e){for(;e;){if(1==e.nodeType||3==e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}var i,o,l,c=t,u;if(t){if(n.ie&&n.ie<9&&M&&M.firstChild&&M.firstChild==M.lastChild&&"BR"==M.firstChild.tagName&&a.remove(M.firstChild),/^(LI|DT|DD)$/.test(t.nodeName)){var d=r(t.firstChild);d&&/^(UL|OL|DL)$/.test(d.nodeName)&&t.insertBefore(a.doc.createTextNode("\xa0"),t.firstChild)}if(l=a.createRng(),n.ie||t.normalize(),t.hasChildNodes()){for(i=new e(t,t);o=i.current();){if(3==o.nodeType){l.setStart(o,0),l.setEnd(o,0);break}if(f[o.nodeName.toLowerCase()]){l.setStartBefore(o),l.setEndBefore(o);break}c=o,o=i.next()}o||(l.setStart(c,0),l.setEnd(c,0))}else"BR"==t.nodeName?t.nextSibling&&a.isBlock(t.nextSibling)?((!P||9>P)&&(u=a.create("br"),t.parentNode.insertBefore(u,t)),l.setStartBefore(t),l.setEndBefore(t)):(l.setStartAfter(t),l.setEndAfter(t)):(l.setStart(t,0),l.setEnd(t,0));s.setRng(l),a.remove(u),s.scrollIntoView(t)}}function y(e){var t=l.forced_root_block;t&&t.toLowerCase()===e.tagName.toLowerCase()&&a.setAttribs(e,l.forced_root_block_attrs)}function b(e){e.innerHTML=r?"":'<br data-mce-bogus="1">'}function C(e){var t=D,n,i,o,s=u.getTextInlineElements();if(e||"TABLE"==z?(n=a.create(e||W),y(n)):n=M.cloneNode(!1),o=n,l.keep_styles!==!1)do if(s[t.nodeName]){if("_mce_caret"==t.id)continue;i=t.cloneNode(!1),a.setAttrib(i,"id",""),n.hasChildNodes()?(i.appendChild(n.firstChild),n.appendChild(i)):(o=i,n.appendChild(i))}while((t=t.parentNode)&&t!=B);return r||(o.innerHTML='<br data-mce-bogus="1">'),n}function x(t){var n,r,i;if(3==D.nodeType&&(t?L>0:L<D.nodeValue.length))return!1;if(D.parentNode==M&&V&&!t)return!0;if(t&&1==D.nodeType&&D==M.firstChild)return!0;if("TABLE"===D.nodeName||D.previousSibling&&"TABLE"==D.previousSibling.nodeName)return V&&!t||!V&&t;for(n=new e(D,M),3==D.nodeType&&(t&&0===L?n.prev():t||L!=D.nodeValue.length||n.next());r=n.current();){if(1===r.nodeType){if(!r.getAttribute("data-mce-bogus")&&(i=r.nodeName.toLowerCase(),d[i]&&"br"!==i))return!1}else if(3===r.nodeType&&!/^[ \t\r\n]*$/.test(r.nodeValue))return!1;t?n.prev():n.next()}return!0}function w(e,t){var n,r,o,s,l,c,d=W||"P";if(r=a.getParent(e,a.isBlock),!r||!h(r)){if(r=r||B,c=r==i.getBody()||p(r)?r.nodeName.toLowerCase():r.parentNode.nodeName.toLowerCase(),!r.hasChildNodes())return n=a.create(d),y(n),r.appendChild(n),R.setStart(n,0),R.setEnd(n,0),n;for(s=e;s.parentNode!=r;)s=s.parentNode;for(;s&&!a.isBlock(s);)o=s,s=s.previousSibling;if(o&&u.isValidChild(c,d.toLowerCase())){for(n=a.create(d),y(n),o.parentNode.insertBefore(n,o),s=o;s&&!a.isBlock(s);)l=s.nextSibling,n.appendChild(s),s=l;R.setStart(e,t),R.setEnd(e,t)}}return e}function N(){function e(e){for(var t=F[e?"firstChild":"lastChild"];t&&1!=t.nodeType;)t=t[e?"nextSibling":"previousSibling"];return t===M}function t(){var e=F.parentNode;return/^(LI|DT|DD)$/.test(e.nodeName)?e:F}if(F!=i.getBody()){var n=F.parentNode.nodeName;/^(OL|UL|LI)$/.test(n)&&(W="LI"),O=W?C(W):a.create("BR"),e(!0)&&e()?"LI"==n?a.insertAfter(O,t()):a.replace(O,F):e(!0)?"LI"==n?(a.insertAfter(O,t()),O.appendChild(a.doc.createTextNode(" ")),O.appendChild(F)):F.parentNode.insertBefore(O,F):e()?(a.insertAfter(O,t()),m(O)):(F=t(),A=R.cloneRange(),A.setStartAfter(M),A.setEndAfter(F),I=A.extractContents(),"LI"==W&&"LI"==I.firstChild.nodeName?(O=I.firstChild,a.insertAfter(I,F)):(a.insertAfter(I,F),a.insertAfter(O,F))),a.remove(M),v(O),c.add()}}function E(){i.execCommand("InsertLineBreak",!1,o)}function _(e){do 3===e.nodeType&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;while(e)}function S(e){var t=a.getRoot(),n,r;for(n=e;n!==t&&"false"!==a.getContentEditable(n);)"true"===a.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==t?r:t}function k(e){var t;r||(e.normalize(),t=e.lastChild,t&&!/^(left|right)$/gi.test(a.getStyle(t,"float",!0))||a.add(e,"br"))}function T(){O=/^(H[1-6]|PRE|FIGURE)$/.test(z)&&"HGROUP"!=U?C(W):C(),l.end_container_on_empty_block&&h(F)&&a.isEmpty(M)?O=a.split(F,M):a.insertAfter(O,M),v(O)}var R,A,B,D,L,M,P,H,O,I,F,z,U,W,V;if(R=s.getRng(!0),!o.isDefaultPrevented()){if(!R.collapsed)return void i.execCommand("Delete");if(new t(a).normalize(R),D=R.startContainer,L=R.startOffset,W=(l.force_p_newlines?"p":"")||l.forced_root_block,W=W?W.toUpperCase():"",P=a.doc.documentMode,H=o.shiftKey,1==D.nodeType&&D.hasChildNodes()&&(V=L>D.childNodes.length-1,D=D.childNodes[Math.min(L,D.childNodes.length-1)]||D,L=V&&3==D.nodeType?D.nodeValue.length:0),B=S(D)){if(c.beforeChange(),!a.isBlock(B)&&B!=a.getRoot())return void(W&&!H||E());if((W&&!H||!W&&H)&&(D=w(D,L)),M=a.getParent(D,a.isBlock),F=M?a.getParent(M.parentNode,a.isBlock):null,z=M?M.nodeName.toUpperCase():"",U=F?F.nodeName.toUpperCase():"","LI"!=U||o.ctrlKey||(M=F,z=U),/^(LI|DT|DD)$/.test(z)){if(!W&&H)return void E();if(a.isEmpty(M))return void N()}if("PRE"==z&&l.br_in_pre!==!1){if(!H)return void E()}else if(!W&&!H&&"LI"!=z||W&&H)return void E();W&&M===i.getBody()||(W=W||"P",x()?T():x(!0)?(O=M.parentNode.insertBefore(C(),M),m(O),v(M)):(A=R.cloneRange(),A.setEndAfter(M),I=A.extractContents(),_(I),O=I.firstChild,a.insertAfter(I,M),g(O),k(M),a.isEmpty(M)&&b(M),O.normalize(),a.isEmpty(O)?(a.remove(O),T()):v(O)),a.setAttrib(O,"id",""),i.fire("NewBlock",{newBlock:O}),c.add())}}}var a=i.dom,s=i.selection,l=i.settings,c=i.undoManager,u=i.schema,d=u.getNonEmptyElements(),f=u.getMoveCaretBeforeOnEnterElements();i.on("keydown",function(e){13==e.keyCode&&o(e)!==!1&&e.preventDefault()})}}),r(ee,[],function(){return function(e){function t(){var t=i.getStart(),s=e.getBody(),l,c,u,d,f,h,p,m=-16777215,g,v,y,b,C;if(C=n.forced_root_block,t&&1===t.nodeType&&C){for(;t&&t!=s;){if(a[t.nodeName])return;t=t.parentNode}if(l=i.getRng(),l.setStart){c=l.startContainer,u=l.startOffset,d=l.endContainer,f=l.endOffset;try{v=e.getDoc().activeElement===s}catch(x){}}else l.item&&(t=l.item(0),l=e.getDoc().body.createTextRange(),l.moveToElementText(t)),v=l.parentElement().ownerDocument===e.getDoc(),y=l.duplicate(),y.collapse(!0),u=-1*y.move("character",m),y.collapsed||(y=l.duplicate(),y.collapse(!1),f=-1*y.move("character",m)-u);for(t=s.firstChild,b=s.nodeName.toLowerCase();t;)if((3===t.nodeType||1==t.nodeType&&!a[t.nodeName])&&o.isValidChild(b,C.toLowerCase())){if(3===t.nodeType&&0===t.nodeValue.length){p=t,t=t.nextSibling,r.remove(p);continue}h||(h=r.create(C,e.settings.forced_root_block_attrs),t.parentNode.insertBefore(h,t),g=!0),p=t,t=t.nextSibling,h.appendChild(p)}else h=null,t=t.nextSibling;if(g&&v){if(l.setStart)l.setStart(c,u),l.setEnd(d,f),i.setRng(l);else try{l=e.getDoc().body.createTextRange(),l.moveToElementText(s),l.collapse(!0),l.moveStart("character",u),f>0&&l.moveEnd("character",f),l.select()}catch(x){}e.nodeChanged()}}}var n=e.settings,r=e.dom,i=e.selection,o=e.schema,a=o.getBlockElements();n.forced_root_block&&e.on("NodeChange",t)}}),r(te,[z,y,_,$,k,U],function(e,t,n,r,i,o){function a(e){return e>0}function s(e){return 0>e}function l(e,n,r,i,o){var l=new t(e,i);if(s(n)){if(C(e)&&(e=l.prev(!0),r(e)))return e;for(;e=l.prev(o);)if(r(e))return e}if(a(n)){if(C(e)&&(e=l.next(!0),r(e)))return e;for(;e=l.next(o);)if(r(e))return e}return null}function c(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode)if(b(e))return e;return t}function u(e,t){for(;e&&e!=t;){if(x(e))return e;e=e.parentNode}return null}function d(e,t,n){return u(e.container(),n)==u(t.container(),n)}function f(e,t,n){return c(e.container(),n)==c(t.container(),n)}function h(e,t){var n,r;return t?(n=t.container(),r=t.offset(),E(n)?n.childNodes[r+e]:null):null}function p(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n}function m(e,t,n){return u(t,e)==u(n,e)}function g(e,t,n){var r,i;for(i=e?"previousSibling":"nextSibling";n&&n!=t;){if(r=n[i],w(r)&&(r=r[i]),C(r)){if(m(t,r,n))return r;break}if(_(r))break;n=n.parentNode}return null}function v(e,t,r){var o,a,s,l,c=N(g,!0,t),u=N(g,!1,t);if(a=r.startContainer,s=r.startOffset,i.isCaretContainerBlock(a)){if(E(a)||(a=a.parentNode),l=a.getAttribute("data-mce-caret"),"before"==l&&(o=a.nextSibling,C(o)))return S(o);if("after"==l&&(o=a.previousSibling,C(o)))return k(o)}if(!r.collapsed)return r;if(n.isText(a)){if(w(a)){if(1===e){if(o=u(a))return S(o);if(o=c(a))return k(o)}if(-1===e){if(o=c(a))return k(o);if(o=u(a))return S(o)}return r}if(i.endsWithCaretContainer(a)&&s>=a.data.length-1)return 1===e&&(o=u(a))?S(o):r;if(i.startsWithCaretContainer(a)&&1>=s)return-1===e&&(o=c(a))?k(o):r;if(s===a.data.length)return o=u(a),o?S(o):r;if(0===s)return o=c(a),o?k(o):r}return r}function y(e,t){return C(h(e,t))}var b=n.isContentEditableTrue,C=n.isContentEditableFalse,x=n.matchStyleValues("display","block table table-cell table-caption"),w=i.isCaretContainer,N=e.curry,E=n.isElement,_=o.isCaretCandidate,S=N(p,!0),k=N(p,!1);return{isForwards:a,isBackwards:s,findNode:l,getEditingHost:c,getParentBlock:u,isInSameBlock:d,isInSameEditingHost:f,isBeforeContentEditableFalse:N(y,0),isAfterContentEditableFalse:N(y,-1),normalizeRange:v}}),r(ne,[_,U,$,te,p,z],function(e,t,n,r,i,o){function a(e,t){for(var n=[];e&&e!=t;)n.push(e),e=e.parentNode;return n}function s(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null}function l(e,t){if(m(e)){if(v(t.previousSibling)&&!f(t.previousSibling))return n.before(t);if(f(t))return n(t,0)}if(g(e)){if(v(t.nextSibling)&&!f(t.nextSibling))return n.after(t);if(f(t))return n(t,t.data.length)}return g(e)?p(t)?n.before(t):n.after(t):n.before(t)}function c(t,i){var o;return e.isBr(t)?(o=u(1,n.after(t),i),o?!r.isInSameBlock(n.before(t),n.before(o),i):!1):!1}function u(e,t,p){var C,x,w,N,E,_,S;if(!h(p)||!t)return null;if(S=t,C=S.container(),x=S.offset(),f(C)){if(g(e)&&x>0)return n(C,--x);if(m(e)&&x<C.length)return n(C,++x);w=C}else{if(g(e)&&x>0&&(N=s(C,x-1),v(N)))return!y(N)&&(E=r.findNode(N,e,b,N))?f(E)?n(E,E.data.length):n.after(E):f(N)?n(N,N.data.length):n.before(N);if(m(e)&&x<C.childNodes.length&&(N=s(C,x),v(N)))return c(N,p)?u(e,n.after(N),p):!y(N)&&(E=r.findNode(N,e,b,N))?f(E)?n(E,0):n.before(E):f(N)?n(N,0):n.after(N);w=S.getNode()}return(m(e)&&S.isAtEnd()||g(e)&&S.isAtStart())&&(w=r.findNode(w,e,o.constant(!0),p,!0),b(w))?l(e,w):(N=r.findNode(w,e,b,p),_=i.last(i.filter(a(C,p),d)),!_||N&&_.contains(N)?N?l(e,N):null:S=m(e)?n.after(_):n.before(_))}var d=e.isContentEditableFalse,f=e.isText,h=e.isElement,p=e.isBr,m=r.isForwards,g=r.isBackwards,v=t.isCaretCandidate,y=t.isAtomic,b=t.isEditableCaretCandidate;return function(e){return{next:function(t){return u(1,t,e)},prev:function(t){return u(-1,t,e)}}}}),r(re,[m,ne,$],function(e,t,n){var r=function(e){var t=e.firstChild,n=e.lastChild;return t&&"meta"===t.name&&(t=t.next),n&&"mce_marker"===n.attr("id")&&(n=n.prev),t&&t===n?"ul"===t.name||"ol"===t.name:!1},i=function(e){var t=e.firstChild,n=e.lastChild;return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e},o=function(e,t,n){var r=t.serialize(n),o=e.createFragment(r);return i(o)},a=function(t){return e.grep(t.childNodes,function(e){return"LI"===e.nodeName})},s=function(e){return!e.firstChild},l=function(e){return e.length>0&&s(e[e.length-1])?e.slice(0,-1):e},c=function(e,t){var n=e.getParent(t,e.isBlock);return n&&"LI"===n.nodeName?n:null},u=function(e,t){return!!c(e,t)},d=function(e,t){var n=t.cloneRange(),r=t.cloneRange();return n.setStartBefore(e),r.setEndAfter(e),[n.cloneContents(),r.cloneContents()]},f=function(e,r){var i=n.before(e),o=new t(r),a=o.next(i);return a?a.toRange():null},h=function(e,r){var i=n.after(e),o=new t(r),a=o.prev(i);return a?a.toRange():null},p=function(t,n,r,i){var o=d(t,i),a=t.parentNode;return a.insertBefore(o[0],t),e.each(n,function(e){a.insertBefore(e,t)}),a.insertBefore(o[1],t),a.removeChild(t),h(n[n.length-1],r)},m=function(t,n,r){var i=t.parentNode;return e.each(n,function(e){i.insertBefore(e,t)}),f(t,r)},g=function(e,t,n,r){return r.insertAfter(t.reverse(),e),h(t[0],n)},v=function(e,r,i,s){var u=o(r,e,s),d=c(r,i.startContainer),f=l(a(u.firstChild)),h=1,v=2,y=r.getRoot(),b=function(e){var o=n.fromRangeStart(i),a=new t(r.getRoot()),s=e===h?a.prev(o):a.next(o);return s?c(r,s.getNode())!==d:!0};return b(h)?m(d,f,y):b(v)?g(d,f,y,r):p(d,f,y,i)};return{isListFragment:r,insertAtCaret:v,isParentBlockLi:u,trimListItems:l,listItems:a}}),r(ie,[d,m,P,ne,$,X,_,re],function(e,t,n,r,i,o,a,s){var l=a.matchNodeNames("td th"),c=function(a,c,u){function d(e){function t(e){return r[e]&&3==r[e].nodeType}var n,r,i;return n=D.getRng(!0),r=n.startContainer,i=n.startOffset,3==r.nodeType&&(i>0?e=e.replace(/^&nbsp;/," "):t("previousSibling")||(e=e.replace(/^ /,"&nbsp;")),i<r.length?e=e.replace(/&nbsp;(<br>|)$/," "):t("nextSibling")||(e=e.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),e}function f(){var e,t,n;e=D.getRng(!0),t=e.startContainer,n=e.startOffset,3==t.nodeType&&e.collapsed&&("\xa0"===t.data[n]?(t.deleteData(n,1),/[\u00a0| ]$/.test(c)||(c+=" ")):"\xa0"===t.data[n-1]&&(t.deleteData(n-1,1),/[\u00a0| ]$/.test(c)||(c=" "+c)))}function h(){if(A){var e=a.getBody(),n=new o(L);t.each(L.select("*[data-mce-fragment]"),function(t){for(var r=t.parentNode;r&&r!=e;r=r.parentNode)B[t.nodeName.toLowerCase()]&&n.compare(r,t)&&L.remove(t,!0)})}}function p(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}function m(e){t.each(e.getElementsByTagName("*"),function(e){e.removeAttribute("data-mce-fragment")})}function g(e){return!!e.getAttribute("data-mce-fragment")}function v(e){return e&&!a.schema.getShortEndedElements()[e.nodeName]}function y(t){function n(e){for(var t=a.getBody();e&&e!==t;e=e.parentNode)if("false"===a.dom.getContentEditable(e))return e;return null}function o(e){var t=i.fromRangeStart(e),n=new r(a.getBody());return t=n.next(t),t?t.toRange():void 0}var s,c,u;if(t){if(D.scrollIntoView(t),s=n(t))return L.remove(t),void D.select(s);S=L.createRng(),k=t.previousSibling,k&&3==k.nodeType?(S.setStart(k,k.nodeValue.length),e.ie||(T=t.nextSibling,T&&3==T.nodeType&&(k.appendData(T.data),T.parentNode.removeChild(T)))):(S.setStartBefore(t),S.setEndBefore(t)),c=L.getParent(t,L.isBlock),L.remove(t),c&&L.isEmpty(c)&&(a.$(c).empty(),S.setStart(c,0),S.setEnd(c,0),l(c)||g(c)||!(u=o(S))?L.add(c,L.create("br",{"data-mce-bogus":"1"})):(S=u,L.remove(c))),D.setRng(S)}}var b,C,x,w,N,E,_,S,k,T,R,A,B=a.schema.getTextInlineElements(),D=a.selection,L=a.dom;/^ | $/.test(c)&&(c=d(c)),b=a.parser,A=u.merge,C=new n({validate:a.settings.validate},a.schema),R='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',E={content:c,format:"html",selection:!0},a.fire("BeforeSetContent",E),c=E.content,-1==c.indexOf("{$caret}")&&(c+="{$caret}"),c=c.replace(/\{\$caret\}/,R),S=D.getRng();var M=S.startContainer||(S.parentElement?S.parentElement():null),P=a.getBody();M===P&&D.isCollapsed()&&L.isBlock(P.firstChild)&&v(P.firstChild)&&L.isEmpty(P.firstChild)&&(S=L.createRng(),S.setStart(P.firstChild,0),S.setEnd(P.firstChild,0),D.setRng(S)),D.isCollapsed()||(a.selection.setRng(a.selection.getRng()),a.getDoc().execCommand("Delete",!1,null),f()),x=D.getNode();var H={context:x.nodeName.toLowerCase(),
    data:u.data};if(N=b.parse(c,H),u.paste===!0&&s.isListFragment(N)&&s.isParentBlockLi(L,x))return S=s.insertAtCaret(C,L,a.selection.getRng(!0),N),a.selection.setRng(S),void a.fire("SetContent",E);if(p(N),k=N.lastChild,"mce_marker"==k.attr("id"))for(_=k,k=k.prev;k;k=k.walk(!0))if(3==k.type||!L.isBlock(k.name)){a.schema.isValidChild(k.parent.name,"span")&&k.parent.insert(_,k,"br"===k.name);break}if(a._selectionOverrides.showBlockCaretContainer(x),H.invalid){for(D.setContent(R),x=D.getNode(),w=a.getBody(),9==x.nodeType?x=k=w:k=x;k!==w;)x=k,k=k.parentNode;c=x==w?w.innerHTML:L.getOuterHTML(x),c=C.serialize(b.parse(c.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return C.serialize(N)}))),x==w?L.setHTML(w,c):L.setOuterHTML(x,c)}else c=C.serialize(N),k=x.firstChild,T=x.lastChild,!k||k===T&&"BR"===k.nodeName?L.setHTML(x,c):D.setContent(c);h(),y(L.get("mce_marker")),m(a.getBody()),a.fire("SetContent",E),a.addVisual()},u=function(e){var n;return"string"!=typeof e?(n=t.extend({paste:e.paste,data:{paste:e.paste}},e),{content:e.content,details:n}):{content:e,details:{}}},d=function(e,t){var n=u(t);c(e,n.content,n.details)};return{insertAtCaret:d}}),r(oe,[d,m,T,y,ie],function(e,n,r,i,o){var a=n.each,s=n.extend,l=n.map,c=n.inArray,u=n.explode,d=e.ie&&e.ie<11,f=!0,h=!1;return function(n){function p(e,t,r,i){var o,s,l=0;if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||i&&i.skip_focus||n.focus(),i=n.fire("BeforeExecCommand",{command:e,ui:t,value:r}),i.isDefaultPrevented())return!1;if(s=e.toLowerCase(),o=B.exec[s])return o(s,t,r),n.fire("ExecCommand",{command:e,ui:t,value:r}),!0;if(a(n.plugins,function(i){return i.execCommand&&i.execCommand(e,t,r)?(n.fire("ExecCommand",{command:e,ui:t,value:r}),l=!0,!1):void 0}),l)return l;if(n.theme&&n.theme.execCommand&&n.theme.execCommand(e,t,r))return n.fire("ExecCommand",{command:e,ui:t,value:r}),!0;try{l=n.getDoc().execCommand(e,t,r)}catch(c){}return l?(n.fire("ExecCommand",{command:e,ui:t,value:r}),!0):!1}function m(e){var t;if(!n.quirks.isHidden()){if(e=e.toLowerCase(),t=B.state[e])return t(e);try{return n.getDoc().queryCommandState(e)}catch(r){}return!1}}function g(e){var t;if(!n.quirks.isHidden()){if(e=e.toLowerCase(),t=B.value[e])return t(e);try{return n.getDoc().queryCommandValue(e)}catch(r){}}}function v(e,t){t=t||"exec",a(e,function(e,n){a(n.toLowerCase().split(","),function(n){B[t][n]=e})})}function y(e,t,r){e=e.toLowerCase(),B.exec[e]=function(e,i,o,a){return t.call(r||n,i,o,a)}}function b(e){if(e=e.toLowerCase(),B.exec[e])return!0;try{return n.getDoc().queryCommandSupported(e)}catch(t){}return!1}function C(e,t,r){e=e.toLowerCase(),B.state[e]=function(){return t.call(r||n)}}function x(e,t,r){e=e.toLowerCase(),B.value[e]=function(){return t.call(r||n)}}function w(e){return e=e.toLowerCase(),!!B.exec[e]}function N(e,r,i){return r===t&&(r=h),i===t&&(i=null),n.getDoc().execCommand(e,r,i)}function E(e){return A.match(e)}function _(e,r){A.toggle(e,r?{value:r}:t),n.nodeChanged()}function S(e){L=R.getBookmark(e)}function k(){R.moveToBookmark(L)}var T,R,A,B={state:{},exec:{},value:{}},D=n.settings,L;n.on("PreInit",function(){T=n.dom,R=n.selection,D=n.settings,A=n.formatter}),s(this,{execCommand:p,queryCommandState:m,queryCommandValue:g,queryCommandSupported:b,addCommands:v,addCommand:y,addQueryStateHandler:C,addQueryValueHandler:x,hasCustomCommand:w}),v({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){n.undoManager.add()},"Cut,Copy,Paste":function(t){var r=n.getDoc(),i;try{N(t)}catch(o){i=f}if("paste"!==t||r.queryCommandEnabled(t)||(i=!0),i||!r.queryCommandSupported(t)){var a=n.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");e.mac&&(a=a.replace(/Ctrl\+/g,"\u2318+")),n.notificationManager.open({text:a,type:"error"})}},unlink:function(){if(R.isCollapsed()){var e=R.getNode();return void("A"==e.tagName&&n.dom.remove(e,!0))}A.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"==t&&(t="justify"),a("left,center,right,justify".split(","),function(e){t!=e&&A.remove("align"+e)}),"none"!=t&&_("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;N(e),t=T.getParent(R.getNode(),"ol,ul"),t&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(S(),T.split(n,t),k()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){_(e)},"ForeColor,HiliteColor,FontName":function(e,t,n){_(e,n)},FontSize:function(e,t,n){var r,i;n>=1&&7>=n&&(i=u(D.font_size_style_values),r=u(D.font_size_classes),n=r?r[n-1]||n:i[n-1]||n),_(e,n)},RemoveFormat:function(e){A.remove(e)},mceBlockQuote:function(){_("blockquote")},FormatBlock:function(e,t,n){return _(n||"p")},mceCleanup:function(){var e=R.getBookmark();n.setContent(n.getContent({cleanup:f}),{cleanup:f}),R.moveToBookmark(e)},mceRemoveNode:function(e,t,r){var i=r||R.getNode();i!=n.getBody()&&(S(),n.dom.remove(i,f),k())},mceSelectNodeDepth:function(e,t,r){var i=0;T.getParent(R.getNode(),function(e){return 1==e.nodeType&&i++==r?(R.select(e),h):void 0},n.getBody())},mceSelectNode:function(e,t,n){R.select(n)},mceInsertContent:function(e,t,r){o.insertAtCaret(n,r)},mceInsertRawHTML:function(e,t,r){R.setContent("tiny_mce_marker"),n.setContent(n.getContent().replace(/tiny_mce_marker/g,function(){return r}))},mceToggleFormat:function(e,t,n){_(n)},mceSetContent:function(e,t,r){n.setContent(r)},"Indent,Outdent":function(e){var t,r,i;t=D.indentation,r=/[a-z%]+$/i.exec(t),t=parseInt(t,10),m("InsertUnorderedList")||m("InsertOrderedList")?N(e):(D.forced_root_block||T.getParent(R.getNode(),T.isBlock)||A.apply("div"),a(R.getSelectedBlocks(),function(o){if("false"!==T.getContentEditable(o)&&"LI"!=o.nodeName){var a=n.getParam("indent_use_margin",!1)?"margin":"padding";a+="rtl"==T.getStyle(o,"direction",!0)?"Right":"Left","outdent"==e?(i=Math.max(0,parseInt(o.style[a]||0,10)-t),T.setStyle(o,a,i?i+r:"")):(i=parseInt(o.style[a]||0,10)+t+r,T.setStyle(o,a,i))}}))},mceRepaint:function(){},InsertHorizontalRule:function(){n.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){n.hasVisual=!n.hasVisual,n.addVisual()},mceReplaceContent:function(e,t,r){n.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,R.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=T.getParent(R.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||A.remove("link"),n.href&&A.apply("link",n,r)},selectAll:function(){var e=T.getRoot(),t;R.getRng().setStart?(t=T.createRng(),t.setStart(e,0),t.setEnd(e,e.childNodes.length),R.setRng(t)):(t=R.getRng(),t.item||(t.moveToElementText(e),t.select()))},"delete":function(){N("Delete");var e=n.getBody();T.isEmpty(e)&&(n.setContent(""),e.firstChild&&T.isBlock(e.firstChild)?n.selection.setCursorLocation(e.firstChild,0):n.selection.setCursorLocation(e,0))},mceNewDocument:function(){n.setContent("")},InsertLineBreak:function(e,t,o){function a(){for(var e=new i(m,v),t,r=n.schema.getNonEmptyElements();t=e.next();)if(r[t.nodeName.toLowerCase()]||t.length>0)return!0}var s=o,l,c,u,h=R.getRng(!0);new r(T).normalize(h);var p=h.startOffset,m=h.startContainer;if(1==m.nodeType&&m.hasChildNodes()){var g=p>m.childNodes.length-1;m=m.childNodes[Math.min(p,m.childNodes.length-1)]||m,p=g&&3==m.nodeType?m.nodeValue.length:0}var v=T.getParent(m,T.isBlock),y=v?v.nodeName.toUpperCase():"",b=v?T.getParent(v.parentNode,T.isBlock):null,C=b?b.nodeName.toUpperCase():"",x=s&&s.ctrlKey;"LI"!=C||x||(v=b,y=C),m&&3==m.nodeType&&p>=m.nodeValue.length&&(d||a()||(l=T.create("br"),h.insertNode(l),h.setStartAfter(l),h.setEndAfter(l),c=!0)),l=T.create("br"),h.insertNode(l);var w=T.doc.documentMode;return d&&"PRE"==y&&(!w||8>w)&&l.parentNode.insertBefore(T.doc.createTextNode("\r"),l),u=T.create("span",{},"&nbsp;"),l.parentNode.insertBefore(u,l),R.scrollIntoView(u),T.remove(u),c?(h.setStartBefore(l),h.setEndBefore(l)):(h.setStartAfter(l),h.setEndAfter(l)),R.setRng(h),n.undoManager.add(),f}}),v({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(e){var t="align"+e.substring(7),n=R.isCollapsed()?[T.getParent(R.getNode(),T.isBlock)]:R.getSelectedBlocks(),r=l(n,function(e){return!!A.matchNode(e,t)});return-1!==c(r,f)},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return E(e)},mceBlockQuote:function(){return E("blockquote")},Outdent:function(){var e;if(D.inline_styles){if((e=T.getParent(R.getStart(),T.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return f;if((e=T.getParent(R.getEnd(),T.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return f}return m("InsertUnorderedList")||m("InsertOrderedList")||!D.inline_styles&&!!T.getParent(R.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=T.getParent(R.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),v({"FontSize,FontName":function(e){var t=0,n;return(n=T.getParent(R.getNode(),"span"))&&(t="fontsize"==e?n.style.fontSize:n.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()),t}},"value"),v({Undo:function(){n.undoManager.undo()},Redo:function(){n.undoManager.redo()}})}}),r(ae,[m],function(e){function t(e,o){var a=this,s,l;if(e=r(e),o=a.settings=o||{},s=o.base_uri,/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e))return void(a.source=e);var c=0===e.indexOf("//");0!==e.indexOf("/")||c||(e=(s?s.protocol||"http":"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(l=o.base_uri?o.base_uri.path:new t(location.href).directory,""===o.base_uri.protocol?e="//mce_host"+a.toAbsPath(l,e):(e=/([^#?]*)([#?]?.*)/.exec(e),e=(s&&s.protocol||"http")+"://mce_host"+a.toAbsPath(l,e[1])+e[2])),e=e.replace(/@@/g,"(mce_at)"),e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),n(i,function(t,n){var r=e[n];r&&(r=r.replace(/\(mce_at\)/g,"@@")),a[t]=r}),s&&(a.protocol||(a.protocol=s.protocol),a.userInfo||(a.userInfo=s.userInfo),a.port||"mce_host"!==a.host||(a.port=s.port),a.host&&"mce_host"!==a.host||(a.host=s.host),a.source=""),c&&(a.protocol="")}var n=e.each,r=e.trim,i="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),o={ftp:21,http:80,https:443,mailto:25};return t.prototype={setPath:function(e){var t=this;e=/^(.*?)\/?(\w+)?$/.exec(e),t.path=e[0],t.directory=e[1],t.file=e[2],t.source="",t.getURI()},toRelative:function(e){var n=this,r;if("./"===e)return e;if(e=new t(e,{base_uri:n}),"mce_host"!=e.host&&n.host!=e.host&&e.host||n.port!=e.port||n.protocol!=e.protocol&&""!==e.protocol)return e.getURI();var i=n.getURI(),o=e.getURI();return i==o||"/"==i.charAt(i.length-1)&&i.substr(0,i.length-1)==o?i:(r=n.toRelPath(n.path,e.path),e.query&&(r+="?"+e.query),e.anchor&&(r+="#"+e.anchor),r)},toAbsolute:function(e,n){return e=new t(e,{base_uri:this}),e.getURI(n&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=o[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r=0,i="",o,a;if(e=e.substring(0,e.lastIndexOf("/")),e=e.split("/"),n=t.split("/"),e.length>=n.length)for(o=0,a=e.length;a>o;o++)if(o>=n.length||e[o]!=n[o]){r=o+1;break}if(e.length<n.length)for(o=0,a=n.length;a>o;o++)if(o>=e.length||e[o]!=n[o]){r=o+1;break}if(1===r)return t;for(o=0,a=e.length-(r-1);a>o;o++)i+="../";for(o=r-1,a=n.length;a>o;o++)i+=o!=r-1?"/"+n[o]:n[o];return i},toAbsPath:function(e,t){var r,i=0,o=[],a,s;for(a=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),n(e,function(e){e&&o.push(e)}),e=o,r=t.length-1,o=[];r>=0;r--)0!==t[r].length&&"."!==t[r]&&(".."!==t[r]?i>0?i--:o.push(t[r]):i++);return r=e.length-i,s=0>=r?o.reverse().join("/"):e.slice(0,r).join("/")+"/"+o.reverse().join("/"),0!==s.indexOf("/")&&(s="/"+s),a&&s.lastIndexOf("/")!==s.length-1&&(s+=a),s},getURI:function(e){var t,n=this;return n.source&&!e||(t="",e||(t+=n.protocol?n.protocol+"://":"//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},t.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}},t.getDocumentBaseUrl=function(e){var t;return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},t}),r(se,[m],function(e){function t(){}var n=e.each,r=e.extend,i,o;return t.extend=i=function(e){function t(){var e,t,n,r=this;if(!o&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)n=t[e],n.init&&n.init.apply(r,arguments)}function a(){return this}function s(e,t){return function(){var n=this,r=n._super,i;return n._super=c[e],i=t.apply(n,arguments),n._super=r,i}}var l=this,c=l.prototype,u,d,f;o=!0,u=new l,o=!1,e.Mixins&&(n(e.Mixins,function(t){for(var n in t)"init"!==n&&(e[n]=t[n])}),c.Mixins&&(e.Mixins=c.Mixins.concat(e.Mixins))),e.Methods&&n(e.Methods.split(","),function(t){e[t]=a}),e.Properties&&n(e.Properties.split(","),function(t){var n="_"+t;e[t]=function(e){var t=this,r;return e!==r?(t[n]=e,t):t[n]}}),e.Statics&&n(e.Statics,function(e,n){t[n]=e}),e.Defaults&&c.Defaults&&(e.Defaults=r({},c.Defaults,e.Defaults));for(d in e)f=e[d],"function"==typeof f&&c[d]?u[d]=s(d,f):u[d]=f;return t.prototype=u,t.constructor=t,t.extend=i,t},t}),r(le,[m],function(e){function t(t){function n(){return!1}function r(){return!0}function i(e,i){var o,s,l,c;if(e=e.toLowerCase(),i=i||{},i.type=e,i.target||(i.target=u),i.preventDefault||(i.preventDefault=function(){i.isDefaultPrevented=r},i.stopPropagation=function(){i.isPropagationStopped=r},i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=r},i.isDefaultPrevented=n,i.isPropagationStopped=n,i.isImmediatePropagationStopped=n),t.beforeFire&&t.beforeFire(i),o=d[e])for(s=0,l=o.length;l>s;s++){if(c=o[s],c.once&&a(e,c.func),i.isImmediatePropagationStopped())return i.stopPropagation(),i;if(c.func.call(u,i)===!1)return i.preventDefault(),i}return i}function o(t,r,i,o){var a,s,l;if(r===!1&&(r=n),r)for(r={func:r},o&&e.extend(r,o),s=t.toLowerCase().split(" "),l=s.length;l--;)t=s[l],a=d[t],a||(a=d[t]=[],f(t,!0)),i?a.unshift(r):a.push(r);return c}function a(e,t){var n,r,i,o,a;if(e)for(o=e.toLowerCase().split(" "),n=o.length;n--;){if(e=o[n],r=d[e],!e){for(i in d)f(i,!1),delete d[i];return c}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),d[e]=r);else r.length=0;r.length||(f(e,!1),delete d[e])}}else{for(e in d)f(e,!1);d={}}return c}function s(e,t,n){return o(e,t,n,{once:!0})}function l(e){return e=e.toLowerCase(),!(!d[e]||0===d[e].length)}var c=this,u,d={},f;t=t||{},u=t.scope||c,f=t.toggleEvent||n,c.fire=i,c.on=o,c.off=a,c.once=s,c.has=l}var n=e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," ");return t.isNative=function(e){return!!n[e.toLowerCase()]},t}),r(ce,[],function(){function e(e){this.create=e.create}return e.create=function(t,n){return new e({create:function(e,r){function i(t){e.set(r,t.value)}function o(e){t.set(n,e.value)}var a;return e.on("change:"+r,o),t.on("change:"+n,i),a=e._bindings,a||(a=e._bindings=[],e.on("destroy",function(){for(var e=a.length;e--;)a[e]()})),a.push(function(){t.off("change:"+n,i)}),t.get(n)}})},e}),r(ue,[le],function(e){function t(t){return t._eventDispatcher||(t._eventDispatcher=new e({scope:t,toggleEvent:function(n,r){e.isNative(n)&&t.toggleNativeEvent&&t.toggleNativeEvent(n,r)}})),t._eventDispatcher}return{fire:function(e,n,r){var i=this;if(i.removed&&"remove"!==e)return n;if(n=t(i).fire(e,n,r),r!==!1&&i.parent)for(var o=i.parent();o&&!n.isPropagationStopped();)o.fire(e,n,!1),o=o.parent();return n},on:function(e,n,r){return t(this).on(e,n,r)},off:function(e,n){return t(this).off(e,n)},once:function(e,n){return t(this).once(e,n)},hasEventListeners:function(e){return t(this).has(e)}}}),r(de,[ce,ue,se,m],function(e,t,n,r){function i(e){return e.nodeType>0}function o(e,t){var n,a;if(e===t)return!0;if(null===e||null===t)return e===t;if("object"!=typeof e||"object"!=typeof t)return e===t;if(r.isArray(t)){if(e.length!==t.length)return!1;for(n=e.length;n--;)if(!o(e[n],t[n]))return!1}if(i(e)||i(t))return e===t;a={};for(n in t){if(!o(e[n],t[n]))return!1;a[n]=!0}for(n in e)if(!a[n]&&!o(e[n],t[n]))return!1;return!0}return n.extend({Mixins:[t],init:function(t){var n,r;t=t||{};for(n in t)r=t[n],r instanceof e&&(t[n]=r.create(this,n));this.data=t},set:function(t,n){var r,i,a=this.data[t];if(n instanceof e&&(n=n.create(this,t)),"object"==typeof t){for(r in t)this.set(r,t[r]);return this}return o(a,n)||(this.data[t]=n,i={target:this,name:t,value:n,oldValue:a},this.fire("change:"+t,i),this.fire("change",i)),this},get:function(e){return this.data[e]},has:function(e){return e in this.data},bind:function(t){return e.create(this,t)},destroy:function(){this.fire("destroy")}})}),r(fe,[se],function(e){function t(e){for(var t=[],n=e.length,r;n--;)r=e[n],r.__checked||(t.push(r),r.__checked=1);for(n=t.length;n--;)delete t[n].__checked;return t}var n=/^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i=/^\s*|\s*$/g,o,a=e.extend({init:function(e){function t(e){return e?(e=e.toLowerCase(),function(t){return"*"===e||t.type===e}):void 0}function o(e){return e?function(t){return t._name===e}:void 0}function a(e){return e?(e=e.split("."),function(t){for(var n=e.length;n--;)if(!t.classes.contains(e[n]))return!1;return!0}):void 0}function s(e,t,n){return e?function(r){var i=r[e]?r[e]():"";return t?"="===t?i===n:"*="===t?i.indexOf(n)>=0:"~="===t?(" "+i+" ").indexOf(" "+n+" ")>=0:"!="===t?i!=n:"^="===t?0===i.indexOf(n):"$="===t?i.substr(i.length-n.length)===n:!1:!!n}:void 0}function l(e){var t;return e?(e=/(?:not\((.+)\))|(.+)/i.exec(e),e[1]?(t=u(e[1],[]),function(e){return!d(e,t)}):(e=e[2],function(t,n,r){return"first"===e?0===n:"last"===e?n===r-1:"even"===e?n%2===0:"odd"===e?n%2===1:t[e]?t[e]():!1})):void 0}function c(e,r,c){function u(e){e&&r.push(e)}var d;return d=n.exec(e.replace(i,"")),u(t(d[1])),u(o(d[2])),u(a(d[3])),u(s(d[4],d[5],d[6])),u(l(d[7])),r.pseudo=!!d[7],r.direct=c,r}function u(e,t){var n=[],i,o,a;do if(r.exec(""),o=r.exec(e),o&&(e=o[3],n.push(o[1]),o[2])){i=o[3];break}while(o);for(i&&u(i,t),e=[],a=0;a<n.length;a++)">"!=n[a]&&e.push(c(n[a],[],">"===n[a-1]));return t.push(e),t}var d=this.match;this._selectors=u(e,[])},match:function(e,t){var n,r,i,o,a,s,l,c,u,d,f,h,p;for(t=t||this._selectors,n=0,r=t.length;r>n;n++){for(a=t[n],o=a.length,p=e,h=0,i=o-1;i>=0;i--)for(c=a[i];p;){if(c.pseudo)for(f=p.parent().items(),u=d=f.length;u--&&f[u]!==p;);for(s=0,l=c.length;l>s;s++)if(!c[s](p,u,d)){s=l+1;break}if(s===l){h++;break}if(i===o-1)break;p=p.parent()}if(h===o)return!0}return!1},find:function(e){function n(e,t,i){var o,a,s,l,c,u=t[i];for(o=0,a=e.length;a>o;o++){for(c=e[o],s=0,l=u.length;l>s;s++)if(!u[s](c,o,a)){s=l+1;break}if(s===l)i==t.length-1?r.push(c):c.items&&n(c.items(),t,i+1);else if(u.direct)return;c.items&&n(c.items(),t,i)}}var r=[],i,s,l=this._selectors;if(e.items){for(i=0,s=l.length;s>i;i++)n(e.items(),l[i],0);s>1&&(r=t(r))}return o||(o=a.Collection),new o(r)}});return a}),r(he,[m,fe,se],function(e,t,n){var r,i,o=Array.prototype.push,a=Array.prototype.slice;return i={length:0,init:function(e){e&&this.add(e)},add:function(t){var n=this;return e.isArray(t)?o.apply(n,t):t instanceof r?n.add(t.toArray()):o.call(n,t),n},set:function(e){var t=this,n=t.length,r;for(t.length=0,t.add(e),r=t.length;n>r;r++)delete t[r];return t},filter:function(e){var n=this,i,o,a=[],s,l;for("string"==typeof e?(e=new t(e),l=function(t){return e.match(t)}):l=e,i=0,o=n.length;o>i;i++)s=n[i],l(s)&&a.push(s);return new r(a)},slice:function(){return new r(a.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},each:function(t){return e.each(this,t),this},toArray:function(){return e.toArray(this)},indexOf:function(e){for(var t=this,n=t.length;n--&&t[n]!==e;);return n},reverse:function(){return new r(e.toArray(this).reverse())},hasClass:function(e){return this[0]?this[0].classes.contains(e):!1},prop:function(e,t){var n=this,r,i;return t!==r?(n.each(function(n){n[e]&&n[e](t)}),n):(i=n[0],i&&i[e]?i[e]():void 0)},exec:function(t){var n=this,r=e.toArray(arguments).slice(1);return n.each(function(e){e[t]&&e[t].apply(e,r)}),n},remove:function(){for(var e=this.length;e--;)this[e].remove();return this},addClass:function(e){return this.each(function(t){t.classes.add(e)})},removeClass:function(e){return this.each(function(t){t.classes.remove(e)})}},e.each("fire on off show hide append prepend before after reflow".split(" "),function(t){i[t]=function(){var n=e.toArray(arguments);return this.each(function(e){t in e&&e[t].apply(e,n)}),this}}),e.each("text name disabled active selected checked visible parent value data".split(" "),function(e){i[e]=function(t){return this.prop(e,t)}}),r=n.extend(i),t.Collection=r,r}),r(pe,[m,w],function(e,t){var n=0;return{id:function(){return"mceu_"+n++},create:function(n,r,i){var o=document.createElement(n);return t.DOM.setAttribs(o,r),"string"==typeof i?o.innerHTML=i:e.each(i,function(e){e.nodeType&&o.appendChild(e)}),o},createFragment:function(e){return t.DOM.createFragment(e)},getWindowSize:function(){return t.DOM.getViewPort()},getSize:function(e){var t,n;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=Math.max(r.width||r.right-r.left,e.offsetWidth),n=Math.max(r.height||r.bottom-r.bottom,e.offsetHeight)}else t=e.offsetWidth,n=e.offsetHeight;return{width:t,height:n}},getPos:function(e,n){return t.DOM.getPos(e,n)},getViewPort:function(e){return t.DOM.getViewPort(e)},get:function(e){return document.getElementById(e)},addClass:function(e,n){return t.DOM.addClass(e,n)},removeClass:function(e,n){return t.DOM.removeClass(e,n)},hasClass:function(e,n){return t.DOM.hasClass(e,n)},toggleClass:function(e,n,r){return t.DOM.toggleClass(e,n,r)},css:function(e,n,r){return t.DOM.setStyle(e,n,r)},getRuntimeStyle:function(e,n){return t.DOM.getStyle(e,n,!0)},on:function(e,n,r,i){return t.DOM.bind(e,n,r,i)},off:function(e,n,r){return t.DOM.unbind(e,n,r)},fire:function(e,n,r){return t.DOM.fire(e,n,r)},innerHtml:function(e,n){t.DOM.setHTML(e,n)}}}),r(me,[],function(){return{parseBox:function(e){var t,n=10;if(e)return"number"==typeof e?(e=e||0,{top:e,left:e,bottom:e,right:e}):(e=e.split(" "),t=e.length,1===t?e[1]=e[2]=e[3]=e[0]:2===t?(e[2]=e[0],e[3]=e[1]):3===t&&(e[3]=e[1]),{top:parseInt(e[0],n)||0,right:parseInt(e[1],n)||0,bottom:parseInt(e[2],n)||0,left:parseInt(e[3],n)||0})},measureBox:function(e,t){function n(t){var n=document.defaultView;return n?(t=t.replace(/[A-Z]/g,function(e){return"-"+e}),n.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle[t]}function r(e){var t=parseFloat(n(e),10);return isNaN(t)?0:t}return{top:r(t+"TopWidth"),right:r(t+"RightWidth"),bottom:r(t+"BottomWidth"),left:r(t+"LeftWidth")}}}}),r(ge,[m],function(e){function t(){}function n(e){this.cls=[],this.cls._map={},this.onchange=e||t,this.prefix=""}return e.extend(n.prototype,{add:function(e){return e&&!this.contains(e)&&(this.cls._map[e]=!0,this.cls.push(e),this._change()),this},remove:function(e){if(this.contains(e)){for(var t=0;t<this.cls.length&&this.cls[t]!==e;t++);this.cls.splice(t,1),delete this.cls._map[e],this._change()}return this},toggle:function(e,t){var n=this.contains(e);return n!==t&&(n?this.remove(e):this.add(e),this._change()),this},contains:function(e){return!!this.cls._map[e]},_change:function(){delete this.clsValue,this.onchange.call(this)}}),n.prototype.toString=function(){var e;if(this.clsValue)return this.clsValue;e="";for(var t=0;t<this.cls.length;t++)t>0&&(e+=" "),e+=this.prefix+this.cls[t];return e},n}),r(ve,[u],function(e){var t={},n;return{add:function(r){var i=r.parent();if(i){if(!i._layout||i._layout.isNative())return;t[i._id]||(t[i._id]=i),n||(n=!0,e.requestAnimationFrame(function(){var e,r;n=!1;for(e in t)r=t[e],r.state.get("rendered")&&r.reflow();t={}},document.body))}},remove:function(e){t[e._id]&&delete t[e._id]}}}),r(ye,[se,m,le,de,he,pe,g,me,ge,ve],function(e,t,n,r,i,o,a,s,l,c){function u(e){return e._eventDispatcher||(e._eventDispatcher=new n({scope:e,toggleEvent:function(t,r){r&&n.isNative(t)&&(e._nativeEvents||(e._nativeEvents={}),e._nativeEvents[t]=!0,e.state.get("rendered")&&d(e))}})),e._eventDispatcher}function d(e){function t(t){var n=e.getParentCtrl(t.target);n&&n.fire(t.type,t)}function n(){var e=c._lastHoverCtrl;e&&(e.fire("mouseleave",{target:e.getEl()}),e.parents().each(function(e){e.fire("mouseleave",{target:e.getEl()})}),c._lastHoverCtrl=null)}function r(t){var n=e.getParentCtrl(t.target),r=c._lastHoverCtrl,i=0,o,a,s;if(n!==r){if(c._lastHoverCtrl=n,a=n.parents().toArray().reverse(),a.push(n),r){for(s=r.parents().toArray().reverse(),s.push(r),i=0;i<s.length&&a[i]===s[i];i++);for(o=s.length-1;o>=i;o--)r=s[o],r.fire("mouseleave",{target:r.getEl()})}for(o=i;o<a.length;o++)n=a[o],n.fire("mouseenter",{target:n.getEl()})}}function i(t){t.preventDefault(),"mousewheel"==t.type?(t.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(t.deltaX=-1/40*t.wheelDeltaX)):(t.deltaX=0,t.deltaY=t.detail),t=e.fire("wheel",t)}var o,s,l,c,u,d;if(u=e._nativeEvents){for(l=e.parents().toArray(),l.unshift(e),o=0,s=l.length;!c&&s>o;o++)c=l[o]._eventsRoot;for(c||(c=l[l.length-1]||e),e._eventsRoot=c,s=o,o=0;s>o;o++)l[o]._eventsRoot=c;var p=c._delegates;p||(p=c._delegates={});for(d in u){if(!u)return!1;"wheel"!==d||h?("mouseenter"===d||"mouseleave"===d?c._hasMouseEnter||(a(c.getEl()).on("mouseleave",n).on("mouseover",r),c._hasMouseEnter=1):p[d]||(a(c.getEl()).on(d,t),p[d]=!0),u[d]=!1):f?a(e.getEl()).on("mousewheel",i):a(e.getEl()).on("DOMMouseScroll",i)}}}var f="onmousewheel"in document,h=!1,p="mce-",m,g=0,v={Statics:{classPrefix:p},isRtl:function(){return m.rtl},classPrefix:p,init:function(e){function n(e){var t;for(e=e.split(" "),t=0;t<e.length;t++)i.classes.add(e[t])}var i=this,o,c;i.settings=e=t.extend({},i.Defaults,e),i._id=e.id||"mceu_"+g++,i._aria={role:e.role},i._elmCache={},i.$=a,i.state=new r({visible:!0,active:!1,disabled:!1,value:""}),i.data=new r(e.data),i.classes=new l(function(){i.state.get("rendered")&&(i.getEl().className=this.toString())}),i.classes.prefix=i.classPrefix,o=e.classes,o&&(i.Defaults&&(c=i.Defaults.classes,c&&o!=c&&n(c)),n(o)),t.each("title text name visible disabled active value".split(" "),function(t){t in e&&i[t](e[t])}),i.on("click",function(){return i.disabled()?!1:void 0}),i.settings=e,i.borderBox=s.parseBox(e.border),i.paddingBox=s.parseBox(e.padding),i.marginBox=s.parseBox(e.margin),e.hidden&&i.hide()},Properties:"parent,name",getContainerElm:function(){return document.body},getParentCtrl:function(e){for(var t,n=this.getRoot().controlIdLookup;e&&n&&!(t=n[e.id]);)e=e.parentNode;return t},initLayoutRect:function(){var e=this,t=e.settings,n,r,i=e.getEl(),a,l,c,u,d,f,h,p;n=e.borderBox=e.borderBox||s.measureBox(i,"border"),e.paddingBox=e.paddingBox||s.measureBox(i,"padding"),e.marginBox=e.marginBox||s.measureBox(i,"margin"),p=o.getSize(i),f=t.minWidth,h=t.minHeight,c=f||p.width,u=h||p.height,a=t.width,l=t.height,d=t.autoResize,d="undefined"!=typeof d?d:!a&&!l,a=a||c,l=l||u;var m=n.left+n.right,g=n.top+n.bottom,v=t.maxWidth||65535,y=t.maxHeight||65535;return e._layoutRect=r={x:t.x||0,y:t.y||0,w:a,h:l,deltaW:m,deltaH:g,contentW:a-m,contentH:l-g,innerW:a-m,innerH:l-g,startMinWidth:f||0,startMinHeight:h||0,minW:Math.min(c,v),minH:Math.min(u,y),maxW:v,maxH:y,autoResize:d,scrollW:0},e._lastLayoutRect={},r},layoutRect:function(e){var t=this,n=t._layoutRect,r,i,o,a,s,l;return n||(n=t.initLayoutRect()),e?(o=n.deltaW,a=n.deltaH,e.x!==s&&(n.x=e.x),e.y!==s&&(n.y=e.y),e.minW!==s&&(n.minW=e.minW),e.minH!==s&&(n.minH=e.minH),i=e.w,i!==s&&(i=i<n.minW?n.minW:i,i=i>n.maxW?n.maxW:i,n.w=i,n.innerW=i-o),i=e.h,i!==s&&(i=i<n.minH?n.minH:i,i=i>n.maxH?n.maxH:i,n.h=i,n.innerH=i-a),i=e.innerW,i!==s&&(i=i<n.minW-o?n.minW-o:i,i=i>n.maxW-o?n.maxW-o:i,n.innerW=i,n.w=i+o),i=e.innerH,i!==s&&(i=i<n.minH-a?n.minH-a:i,i=i>n.maxH-a?n.maxH-a:i,n.innerH=i,n.h=i+a),e.contentW!==s&&(n.contentW=e.contentW),e.contentH!==s&&(n.contentH=e.contentH),r=t._lastLayoutRect,r.x===n.x&&r.y===n.y&&r.w===n.w&&r.h===n.h||(l=m.repaintControls,l&&l.map&&!l.map[t._id]&&(l.push(t),l.map[t._id]=!0),r.x=n.x,r.y=n.y,r.w=n.w,r.h=n.h),t):n},repaint:function(){var e=this,t,n,r,i,o,a,s,l,c,u;c=document.createRange?function(e){return e}:Math.round,t=e.getEl().style,i=e._layoutRect,l=e._lastRepaintRect||{},o=e.borderBox,a=o.left+o.right,s=o.top+o.bottom,i.x!==l.x&&(t.left=c(i.x)+"px",l.x=i.x),i.y!==l.y&&(t.top=c(i.y)+"px",l.y=i.y),i.w!==l.w&&(u=c(i.w-a),t.width=(u>=0?u:0)+"px",l.w=i.w),i.h!==l.h&&(u=c(i.h-s),t.height=(u>=0?u:0)+"px",l.h=i.h),e._hasBody&&i.innerW!==l.innerW&&(u=c(i.innerW),r=e.getEl("body"),r&&(n=r.style,n.width=(u>=0?u:0)+"px"),l.innerW=i.innerW),e._hasBody&&i.innerH!==l.innerH&&(u=c(i.innerH),r=r||e.getEl("body"),r&&(n=n||r.style,n.height=(u>=0?u:0)+"px"),l.innerH=i.innerH),e._lastRepaintRect=l,e.fire("repaint",{},!1)},updateLayoutRect:function(){var e=this;e.parent()._lastRect=null,o.css(e.getEl(),{width:"",height:""}),e._layoutRect=e._lastRepaintRect=e._lastLayoutRect=null,e.initLayoutRect()},on:function(e,t){function n(e){var t,n;return"string"!=typeof e?e:function(i){return t||r.parentsAndSelf().each(function(r){var i=r.settings.callbacks;return i&&(t=i[e])?(n=r,!1):void 0}),t?t.call(n,i):(i.action=e,void this.fire("execute",i))}}var r=this;return u(r).on(e,n(t)),r},off:function(e,t){return u(this).off(e,t),this},fire:function(e,t,n){var r=this;if(t=t||{},t.control||(t.control=r),t=u(r).fire(e,t),n!==!1&&r.parent)for(var i=r.parent();i&&!t.isPropagationStopped();)i.fire(e,t,!1),i=i.parent();return t},hasEventListeners:function(e){return u(this).has(e)},parents:function(e){var t=this,n,r=new i;for(n=t.parent();n;n=n.parent())r.add(n);return e&&(r=r.filter(e)),r},parentsAndSelf:function(e){return new i(this).add(this.parents(e))},next:function(){var e=this.parent().items();return e[e.indexOf(this)+1]},prev:function(){var e=this.parent().items();return e[e.indexOf(this)-1]},innerHtml:function(e){return this.$el.html(e),this},getEl:function(e){var t=e?this._id+"-"+e:this._id;return this._elmCache[t]||(this._elmCache[t]=a("#"+t)[0]),this._elmCache[t]},show:function(){return this.visible(!0)},hide:function(){return this.visible(!1)},focus:function(){try{this.getEl().focus()}catch(e){}return this},blur:function(){return this.getEl().blur(),this},aria:function(e,t){var n=this,r=n.getEl(n.ariaTarget);return"undefined"==typeof t?n._aria[e]:(n._aria[e]=t,n.state.get("rendered")&&r.setAttribute("role"==e?e:"aria-"+e,t),n)},encode:function(e,t){return t!==!1&&(e=this.translate(e)),(e||"").replace(/[&<>"]/g,function(e){return"&#"+e.charCodeAt(0)+";"})},translate:function(e){return m.translate?m.translate(e):e},before:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t),!0),t},after:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t)),t},remove:function(){var e=this,t=e.getEl(),n=e.parent(),r,i;if(e.items){var o=e.items().toArray();for(i=o.length;i--;)o[i].remove()}n&&n.items&&(r=[],n.items().each(function(t){t!==e&&r.push(t);
}),n.items().set(r),n._lastRect=null),e._eventsRoot&&e._eventsRoot==e&&a(t).off();var s=e.getRoot().controlIdLookup;return s&&delete s[e._id],t&&t.parentNode&&t.parentNode.removeChild(t),e.state.set("rendered",!1),e.state.destroy(),e.fire("remove"),e},renderBefore:function(e){return a(e).before(this.renderHtml()),this.postRender(),this},renderTo:function(e){return a(e||this.getContainerElm()).append(this.renderHtml()),this.postRender(),this},preRender:function(){},render:function(){},renderHtml:function(){return'<div id="'+this._id+'" class="'+this.classes+'"></div>'},postRender:function(){var e=this,t=e.settings,n,r,i,o,s;e.$el=a(e.getEl()),e.state.set("rendered",!0);for(o in t)0===o.indexOf("on")&&e.on(o.substr(2),t[o]);if(e._eventsRoot){for(i=e.parent();!s&&i;i=i.parent())s=i._eventsRoot;if(s)for(o in s._nativeEvents)e._nativeEvents[o]=!0}d(e),t.style&&(n=e.getEl(),n&&(n.setAttribute("style",t.style),n.style.cssText=t.style)),e.settings.border&&(r=e.borderBox,e.$el.css({"border-top-width":r.top,"border-right-width":r.right,"border-bottom-width":r.bottom,"border-left-width":r.left}));var l=e.getRoot();l.controlIdLookup||(l.controlIdLookup={}),l.controlIdLookup[e._id]=e;for(var u in e._aria)e.aria(u,e._aria[u]);e.state.get("visible")===!1&&(e.getEl().style.display="none"),e.bindStates(),e.state.on("change:visible",function(t){var n=t.value,r;e.state.get("rendered")&&(e.getEl().style.display=n===!1?"none":"",e.getEl().getBoundingClientRect()),r=e.parent(),r&&(r._lastRect=null),e.fire(n?"show":"hide"),c.add(e)}),e.fire("postrender",{},!1)},bindStates:function(){},scrollIntoView:function(e){function t(e,t){var n,r,i=e;for(n=r=0;i&&i!=t&&i.nodeType;)n+=i.offsetLeft||0,r+=i.offsetTop||0,i=i.offsetParent;return{x:n,y:r}}var n=this.getEl(),r=n.parentNode,i,o,a,s,l,c,u=t(n,r);return i=u.x,o=u.y,a=n.offsetWidth,s=n.offsetHeight,l=r.clientWidth,c=r.clientHeight,"end"==e?(i-=l-a,o-=c-s):"center"==e&&(i-=l/2-a/2,o-=c/2-s/2),r.scrollLeft=i,r.scrollTop=o,this},getRoot:function(){for(var e=this,t,n=[];e;){if(e.rootControl){t=e.rootControl;break}n.push(e),t=e,e=e.parent()}t||(t=this);for(var r=n.length;r--;)n[r].rootControl=t;return t},reflow:function(){c.remove(this);var e=this.parent();return e._layout&&!e._layout.isNative()&&e.reflow(),this}};return t.each("text title visible disabled active value".split(" "),function(e){v[e]=function(t){return 0===arguments.length?this.state.get(e):("undefined"!=typeof t&&this.state.set(e,t),this)}}),m=e.extend(v)}),r(be,[],function(){var e={},t;return{add:function(t,n){e[t.toLowerCase()]=n},has:function(t){return!!e[t.toLowerCase()]},create:function(n,r){var i,o,a;if(!t){a=tinymce.ui;for(o in a)e[o.toLowerCase()]=a[o];t=!0}if("string"==typeof n?(r=r||{},r.type=n):(r=n,n=r.type),n=n.toLowerCase(),i=e[n],!i)throw new Error("Could not find control by type: "+n);return i=new i(r),i.type=n,i}}}),r(Ce,[],function(){return function(e){function t(e){return e&&1===e.nodeType}function n(e){return e=e||C,t(e)?e.getAttribute("role"):null}function r(e){for(var t,r=e||C;r=r.parentNode;)if(t=n(r))return t}function i(e){var n=C;return t(n)?n.getAttribute("aria-"+e):void 0}function o(e){var t=e.tagName.toUpperCase();return"INPUT"==t||"TEXTAREA"==t||"SELECT"==t}function a(e){return o(e)&&!e.hidden?!0:!!/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(n(e))}function s(e){function t(e){if(1==e.nodeType&&"none"!=e.style.display){a(e)&&n.push(e);for(var r=0;r<e.childNodes.length;r++)t(e.childNodes[r])}}var n=[];return t(e||b.getEl()),n}function l(e){var t,n;e=e||x,n=e.parents().toArray(),n.unshift(e);for(var r=0;r<n.length&&(t=n[r],!t.settings.ariaRoot);r++);return t}function c(e){var t=l(e),n=s(t.getEl());t.settings.ariaRemember&&"lastAriaIndex"in t?u(t.lastAriaIndex,n):u(0,n)}function u(e,t){return 0>e?e=t.length-1:e>=t.length&&(e=0),t[e]&&t[e].focus(),e}function d(e,t){var n=-1,r=l();t=t||s(r.getEl());for(var i=0;i<t.length;i++)t[i]===C&&(n=i);n+=e,r.lastAriaIndex=u(n,t)}function f(){var e=r();"tablist"==e?d(-1,s(C.parentNode)):x.parent().submenu?v():d(-1)}function h(){var e=n(),t=r();"tablist"==t?d(1,s(C.parentNode)):"menuitem"==e&&"menu"==t&&i("haspopup")?y():d(1)}function p(){d(-1)}function m(){var e=n(),t=r();"menuitem"==e&&"menubar"==t?y():"button"==e&&i("haspopup")?y({key:"down"}):d(1)}function g(e){var t=r();if("tablist"==t){var n=s(x.getEl("body"))[0];n&&n.focus()}else d(e.shiftKey?-1:1)}function v(){x.fire("cancel")}function y(e){e=e||{},x.fire("click",{target:C,aria:e})}var b=e.root,C,x;try{C=document.activeElement}catch(w){C=document.body}return x=b.getParentCtrl(C),b.on("keydown",function(e){function t(e,t){o(C)||"slider"!==n(C)&&t(e)!==!1&&e.preventDefault()}if(!e.isDefaultPrevented())switch(e.keyCode){case 37:t(e,f);break;case 39:t(e,h);break;case 38:t(e,p);break;case 40:t(e,m);break;case 27:v();break;case 14:case 13:case 32:t(e,y);break;case 9:g(e)!==!1&&e.preventDefault()}}),b.on("focusin",function(e){C=e.target,x=e.control}),{focusFirst:c}}}),r(xe,[ye,he,fe,be,Ce,m,g,ge,ve],function(e,t,n,r,i,o,a,s,l){var c={};return e.extend({init:function(e){var n=this;n._super(e),e=n.settings,e.fixed&&n.state.set("fixed",!0),n._items=new t,n.isRtl()&&n.classes.add("rtl"),n.bodyClasses=new s(function(){n.state.get("rendered")&&(n.getEl("body").className=this.toString())}),n.bodyClasses.prefix=n.classPrefix,n.classes.add("container"),n.bodyClasses.add("container-body"),e.containerCls&&n.classes.add(e.containerCls),n._layout=r.create((e.layout||"")+"layout"),n.settings.items?n.add(n.settings.items):n.add(n.render()),n._hasBody=!0},items:function(){return this._items},find:function(e){return e=c[e]=c[e]||new n(e),e.find(this)},add:function(e){var t=this;return t.items().add(t.create(e)).parent(t),t},focus:function(e){var t=this,n,r,i;return e&&(r=t.keyboardNav||t.parents().eq(-1)[0].keyboardNav)?void r.focusFirst(t):(i=t.find("*"),t.statusbar&&i.add(t.statusbar.items()),i.each(function(e){return e.settings.autofocus?(n=null,!1):void(e.canFocus&&(n=n||e))}),n&&n.focus(),t)},replace:function(e,t){for(var n,r=this.items(),i=r.length;i--;)if(r[i]===e){r[i]=t;break}i>=0&&(n=t.getEl(),n&&n.parentNode.removeChild(n),n=e.getEl(),n&&n.parentNode.removeChild(n)),t.parent(this)},create:function(t){var n=this,i,a=[];return o.isArray(t)||(t=[t]),o.each(t,function(t){t&&(t instanceof e||("string"==typeof t&&(t={type:t}),i=o.extend({},n.settings.defaults,t),t.type=i.type=i.type||t.type||n.settings.defaultType||(i.defaults?i.defaults.type:null),t=r.create(i)),a.push(t))}),a},renderNew:function(){var e=this;return e.items().each(function(t,n){var r;t.parent(e),t.state.get("rendered")||(r=e.getEl("body"),r.hasChildNodes()&&n<=r.childNodes.length-1?a(r.childNodes[n]).before(t.renderHtml()):a(r).append(t.renderHtml()),t.postRender(),l.add(t))}),e._layout.applyClasses(e.items().filter(":visible")),e._lastRect=null,e},append:function(e){return this.add(e).renderNew()},prepend:function(e){var t=this;return t.items().set(t.create(e).concat(t.items().toArray())),t.renderNew()},insert:function(e,t,n){var r=this,i,o,a;return e=r.create(e),i=r.items(),!n&&t<i.length-1&&(t+=1),t>=0&&t<i.length&&(o=i.slice(0,t).toArray(),a=i.slice(t).toArray(),i.set(o.concat(e,a))),r.renderNew()},fromJSON:function(e){var t=this;for(var n in e)t.find("#"+n).value(e[n]);return t},toJSON:function(){var e=this,t={};return e.find("*").each(function(e){var n=e.name(),r=e.value();n&&"undefined"!=typeof r&&(t[n]=r)}),t},renderHtml:function(){var e=this,t=e._layout,n=this.settings.role;return e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"'+(n?' role="'+this.settings.role+'"':"")+'><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this,t;return e.items().exec("postRender"),e._super(),e._layout.postRender(e),e.state.set("rendered",!0),e.settings.style&&e.$el.css(e.settings.style),e.settings.border&&(t=e.borderBox,e.$el.css({"border-top-width":t.top,"border-right-width":t.right,"border-bottom-width":t.bottom,"border-left-width":t.left})),e.parent()||(e.keyboardNav=new i({root:e})),e},initLayoutRect:function(){var e=this,t=e._super();return e._layout.recalc(e),t},recalc:function(){var e=this,t=e._layoutRect,n=e._lastRect;return n&&n.w==t.w&&n.h==t.h?void 0:(e._layout.recalc(e),t=e.layoutRect(),e._lastRect={x:t.x,y:t.y,w:t.w,h:t.h},!0)},reflow:function(){var t;if(l.remove(this),this.visible()){for(e.repaintControls=[],e.repaintControls.map={},this.recalc(),t=e.repaintControls.length;t--;)e.repaintControls[t].repaint();"flow"!==this.settings.layout&&"stack"!==this.settings.layout&&this.repaint(),e.repaintControls=[]}return this}})}),r(we,[g],function(e){function t(e){var t,n,r,i,o,a,s,l,c=Math.max;return t=e.documentElement,n=e.body,r=c(t.scrollWidth,n.scrollWidth),i=c(t.clientWidth,n.clientWidth),o=c(t.offsetWidth,n.offsetWidth),a=c(t.scrollHeight,n.scrollHeight),s=c(t.clientHeight,n.clientHeight),l=c(t.offsetHeight,n.offsetHeight),{width:o>r?i:r,height:l>a?s:a}}function n(e){var t,n;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),n=0;n<t.length;n++)e[t[n]]=e.changedTouches[0][t[n]]}return function(r,i){function o(){return s.getElementById(i.handle||r)}var a,s=i.document||document,l,c,u,d,f,h;i=i||{},c=function(r){var c=t(s),p,m;n(r),r.preventDefault(),l=r.button,p=o(),f=r.screenX,h=r.screenY,m=window.getComputedStyle?window.getComputedStyle(p,null).getPropertyValue("cursor"):p.runtimeStyle.cursor,a=e("<div>").css({position:"absolute",top:0,left:0,width:c.width,height:c.height,zIndex:2147483647,opacity:1e-4,cursor:m}).appendTo(s.body),e(s).on("mousemove touchmove",d).on("mouseup touchend",u),i.start(r)},d=function(e){return n(e),e.button!==l?u(e):(e.deltaX=e.screenX-f,e.deltaY=e.screenY-h,e.preventDefault(),void i.drag(e))},u=function(t){n(t),e(s).off("mousemove touchmove",d).off("mouseup touchend",u),a.remove(),i.stop&&i.stop(t)},this.destroy=function(){e(o()).off()},e(o()).on("mousedown touchstart",c)}}),r(Ne,[g,we],function(e,t){return{init:function(){var e=this;e.on("repaint",e.renderScroll)},renderScroll:function(){function n(){function t(t,a,s,l,c,u){var d,f,h,p,m,g,v,y,b;if(f=i.getEl("scroll"+t)){if(y=a.toLowerCase(),b=s.toLowerCase(),e(i.getEl("absend")).css(y,i.layoutRect()[l]-1),!c)return void e(f).css("display","none");e(f).css("display","block"),d=i.getEl("body"),h=i.getEl("scroll"+t+"t"),p=d["client"+s]-2*o,p-=n&&r?f["client"+u]:0,m=d["scroll"+s],g=p/m,v={},v[y]=d["offset"+a]+o,v[b]=p,e(f).css(v),v={},v[y]=d["scroll"+a]*g,v[b]=p*g,e(h).css(v)}}var n,r,a;a=i.getEl("body"),n=a.scrollWidth>a.clientWidth,r=a.scrollHeight>a.clientHeight,t("h","Left","Width","contentW",n,"Height"),t("v","Top","Height","contentH",r,"Width")}function r(){function n(n,r,a,s,l){var c,u=i._id+"-scroll"+n,d=i.classPrefix;e(i.getEl()).append('<div id="'+u+'" class="'+d+"scrollbar "+d+"scrollbar-"+n+'"><div id="'+u+'t" class="'+d+'scrollbar-thumb"></div></div>'),i.draghelper=new t(u+"t",{start:function(){c=i.getEl("body")["scroll"+r],e("#"+u).addClass(d+"active")},drag:function(e){var t,u,d,f,h=i.layoutRect();u=h.contentW>h.innerW,d=h.contentH>h.innerH,f=i.getEl("body")["client"+a]-2*o,f-=u&&d?i.getEl("scroll"+n)["client"+l]:0,t=f/i.getEl("body")["scroll"+a],i.getEl("body")["scroll"+r]=c+e["delta"+s]/t},stop:function(){e("#"+u).removeClass(d+"active")}})}i.classes.add("scroll"),n("v","Top","Height","Y","Width"),n("h","Left","Width","X","Height")}var i=this,o=2;i.settings.autoScroll&&(i._hasScroll||(i._hasScroll=!0,r(),i.on("wheel",function(e){var t=i.getEl("body");t.scrollLeft+=10*(e.deltaX||0),t.scrollTop+=10*e.deltaY,n()}),e(i.getEl("body")).on("scroll",n)),n())}}}),r(Ee,[xe,Ne],function(e,t){return e.extend({Defaults:{layout:"fit",containerCls:"panel"},Mixins:[t],renderHtml:function(){var e=this,t=e._layout,n=e.settings.html;return e.preRender(),t.preRender(e),"undefined"==typeof n?n='<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div>":("function"==typeof n&&(n=n.call(e)),e._hasBody=!1),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1" role="group">'+(e._preBodyHtml||"")+n+"</div>"}})}),r(_e,[pe],function(e){function t(t,n,r){var i,o,a,s,l,c,u,d,f,h;return f=e.getViewPort(),o=e.getPos(n),a=o.x,s=o.y,t.state.get("fixed")&&"static"==e.getRuntimeStyle(document.body,"position")&&(a-=f.x,s-=f.y),i=t.getEl(),h=e.getSize(i),l=h.width,c=h.height,h=e.getSize(n),u=h.width,d=h.height,r=(r||"").split(""),"b"===r[0]&&(s+=d),"r"===r[1]&&(a+=u),"c"===r[0]&&(s+=Math.round(d/2)),"c"===r[1]&&(a+=Math.round(u/2)),"b"===r[3]&&(s-=c),"r"===r[4]&&(a-=l),"c"===r[3]&&(s-=Math.round(c/2)),"c"===r[4]&&(a-=Math.round(l/2)),{x:a,y:s,w:l,h:c}}return{testMoveRel:function(n,r){for(var i=e.getViewPort(),o=0;o<r.length;o++){var a=t(this,n,r[o]);if(this.state.get("fixed")){if(a.x>0&&a.x+a.w<i.w&&a.y>0&&a.y+a.h<i.h)return r[o]}else if(a.x>i.x&&a.x+a.w<i.w+i.x&&a.y>i.y&&a.y+a.h<i.h+i.y)return r[o]}return r[0]},moveRel:function(e,n){"string"!=typeof n&&(n=this.testMoveRel(e,n));var r=t(this,e,n);return this.moveTo(r.x,r.y)},moveBy:function(e,t){var n=this,r=n.layoutRect();return n.moveTo(r.x+e,r.y+t),n},moveTo:function(t,n){function r(e,t,n){return 0>e?0:e+n>t?(e=t-n,0>e?0:e):e}var i=this;if(i.settings.constrainToViewport){var o=e.getViewPort(window),a=i.layoutRect();t=r(t,o.w+o.x,a.w),n=r(n,o.h+o.y,a.h)}return i.state.get("rendered")?i.layoutRect({x:t,y:n}).repaint():(i.settings.x=t,i.settings.y=n),i.fire("move",{x:t,y:n}),i}}}),r(Se,[pe],function(e){return{resizeToContent:function(){this._layoutRect.autoResize=!0,this._lastRect=null,this.reflow()},resizeTo:function(t,n){if(1>=t||1>=n){var r=e.getWindowSize();t=1>=t?t*r.w:t,n=1>=n?n*r.h:n}return this._layoutRect.autoResize=!1,this.layoutRect({minW:t,minH:n,w:t,h:n}).reflow()},resizeBy:function(e,t){var n=this,r=n.layoutRect();return n.resizeTo(r.w+e,r.h+t)}}}),r(ke,[Ee,_e,Se,pe,g,u],function(e,t,n,r,i,o){function a(e,t){for(;e;){if(e==t)return!0;e=e.parent()}}function s(e){for(var t=v.length;t--;){var n=v[t],r=n.getParentCtrl(e.target);if(n.settings.autohide){if(r&&(a(r,n)||n.parent()===r))continue;e=n.fire("autohide",{target:e.target}),e.isDefaultPrevented()||n.hide()}}}function l(){p||(p=function(e){2!=e.button&&s(e)},i(document).on("click touchstart",p))}function c(){m||(m=function(){var e;for(e=v.length;e--;)d(v[e])},i(window).on("scroll",m))}function u(){if(!g){var e=document.documentElement,t=e.clientWidth,n=e.clientHeight;g=function(){document.all&&t==e.clientWidth&&n==e.clientHeight||(t=e.clientWidth,n=e.clientHeight,C.hideAll())},i(window).on("resize",g)}}function d(e){function t(t,n){for(var r,i=0;i<v.length;i++)if(v[i]!=e)for(r=v[i].parent();r&&(r=r.parent());)r==e&&v[i].fixed(t).moveBy(0,n).repaint()}var n=r.getViewPort().y;e.settings.autofix&&(e.state.get("fixed")?e._autoFixY>n&&(e.fixed(!1).layoutRect({y:e._autoFixY}).repaint(),t(!1,e._autoFixY-n)):(e._autoFixY=e.layoutRect().y,e._autoFixY<n&&(e.fixed(!0).layoutRect({y:0}).repaint(),t(!0,n-e._autoFixY))))}function f(e,t){var n,r=C.zIndex||65535,o;if(e)y.push(t);else for(n=y.length;n--;)y[n]===t&&y.splice(n,1);if(y.length)for(n=0;n<y.length;n++)y[n].modal&&(r++,o=y[n]),y[n].getEl().style.zIndex=r,y[n].zIndex=r,r++;var a=i("#"+t.classPrefix+"modal-block",t.getContainerElm())[0];o?i(a).css("z-index",o.zIndex-1):a&&(a.parentNode.removeChild(a),b=!1),C.currentZIndex=r}function h(e){var t;for(t=v.length;t--;)v[t]===e&&v.splice(t,1);for(t=y.length;t--;)y[t]===e&&y.splice(t,1)}var p,m,g,v=[],y=[],b,C=e.extend({Mixins:[t,n],init:function(e){var t=this;t._super(e),t._eventsRoot=t,t.classes.add("floatpanel"),e.autohide&&(l(),u(),v.push(t)),e.autofix&&(c(),t.on("move",function(){d(this)})),t.on("postrender show",function(e){if(e.control==t){var n,r=t.classPrefix;t.modal&&!b&&(n=i("#"+r+"modal-block",t.getContainerElm()),n[0]||(n=i('<div id="'+r+'modal-block" class="'+r+"reset "+r+'fade"></div>').appendTo(t.getContainerElm())),o.setTimeout(function(){n.addClass(r+"in"),i(t.getEl()).addClass(r+"in")}),b=!0),f(!0,t)}}),t.on("show",function(){t.parents().each(function(e){return e.state.get("fixed")?(t.fixed(!0),!1):void 0})}),e.popover&&(t._preBodyHtml='<div class="'+t.classPrefix+'arrow"></div>',t.classes.add("popover").add("bottom").add(t.isRtl()?"end":"start")),t.aria("label",e.ariaLabel),t.aria("labelledby",t._id),t.aria("describedby",t.describedBy||t._id+"-none")},fixed:function(e){var t=this;if(t.state.get("fixed")!=e){if(t.state.get("rendered")){var n=r.getViewPort();e?t.layoutRect().y-=n.y:t.layoutRect().y+=n.y}t.classes.toggle("fixed",e),t.state.set("fixed",e)}return t},show:function(){var e=this,t,n=e._super();for(t=v.length;t--&&v[t]!==e;);return-1===t&&v.push(e),n},hide:function(){return h(this),f(!1,this),this._super()},hideAll:function(){C.hideAll()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||(e.remove(),f(!1,e)),e},remove:function(){h(this),this._super()},postRender:function(){var e=this;return e.settings.bodyRole&&this.getEl("body").setAttribute("role",e.settings.bodyRole),e._super()}});return C.hideAll=function(){for(var e=v.length;e--;){var t=v[e];t&&t.settings.autohide&&(t.hide(),v.splice(e,1))}},C}),r(Te,[ke,Ee,pe,g,we,me,d,u],function(e,t,n,r,i,o,a,s){function l(e){var t="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0",n=r("meta[name=viewport]")[0],i;a.overrideViewPort!==!1&&(n||(n=document.createElement("meta"),n.setAttribute("name","viewport"),document.getElementsByTagName("head")[0].appendChild(n)),i=n.getAttribute("content"),i&&"undefined"!=typeof f&&(f=i),n.setAttribute("content",e?t:f))}function c(e){for(var t=0;t<d.length;t++)if(d[t]._fullscreen)return;r([document.documentElement,document.body]).removeClass(e+"fullscreen")}function u(){function e(){var e,t=n.getWindowSize(),r;for(e=0;e<d.length;e++)r=d[e].layoutRect(),d[e].moveTo(d[e].settings.x||Math.max(0,t.w/2-r.w/2),d[e].settings.y||Math.max(0,t.h/2-r.h/2))}if(!a.desktop){var t={w:window.innerWidth,h:window.innerHeight};s.setInterval(function(){var e=window.innerWidth,n=window.innerHeight;t.w==e&&t.h==n||(t={w:e,h:n},r(window).trigger("resize"))},100)}r(window).on("resize",e)}var d=[],f="",h=e.extend({modal:!0,Defaults:{border:1,layout:"flex",containerCls:"panel",role:"dialog",callbacks:{submit:function(){this.fire("submit",{data:this.toJSON()})},close:function(){this.close()}}},init:function(e){var r=this;r._super(e),r.isRtl()&&r.classes.add("rtl"),r.classes.add("window"),r.bodyClasses.add("window-body"),r.state.set("fixed",!0),e.buttons&&(r.statusbar=new t({layout:"flex",border:"1 0 0 0",spacing:3,padding:10,align:"center",pack:r.isRtl()?"start":"end",defaults:{type:"button"},items:e.buttons}),r.statusbar.classes.add("foot"),r.statusbar.parent(r)),r.on("click",function(e){var t=r.classPrefix+"close";(n.hasClass(e.target,t)||n.hasClass(e.target.parentNode,t))&&r.close()}),r.on("cancel",function(){r.close()}),r.aria("describedby",r.describedBy||r._id+"-none"),r.aria("label",e.title),r._fullscreen=!1},recalc:function(){var e=this,t=e.statusbar,r,i,o,a;e._fullscreen&&(e.layoutRect(n.getWindowSize()),e.layoutRect().contentH=e.layoutRect().innerH),e._super(),r=e.layoutRect(),e.settings.title&&!e._fullscreen&&(i=r.headerW,i>r.w&&(o=r.x-Math.max(0,i/2),e.layoutRect({w:i,x:o}),a=!0)),t&&(t.layoutRect({w:e.layoutRect().innerW}).recalc(),i=t.layoutRect().minW+r.deltaW,i>r.w&&(o=r.x-Math.max(0,i-r.w),e.layoutRect({w:i,x:o}),a=!0)),a&&e.recalc()},initLayoutRect:function(){var e=this,t=e._super(),r=0,i;if(e.settings.title&&!e._fullscreen){i=e.getEl("head");var o=n.getSize(i);t.headerW=o.width,t.headerH=o.height,r+=t.headerH}e.statusbar&&(r+=e.statusbar.layoutRect().h),t.deltaH+=r,t.minH+=r,t.h+=r;var a=n.getWindowSize();return t.x=e.settings.x||Math.max(0,a.w/2-t.w/2),t.y=e.settings.y||Math.max(0,a.h/2-t.h/2),t},renderHtml:function(){var e=this,t=e._layout,n=e._id,r=e.classPrefix,i=e.settings,o="",a="",s=i.html;return e.preRender(),t.preRender(e),i.title&&(o='<div id="'+n+'-head" class="'+r+'window-head"><div id="'+n+'-title" class="'+r+'title">'+e.encode(i.title)+'</div><div id="'+n+'-dragh" class="'+r+'dragh"></div><button type="button" class="'+r+'close" aria-hidden="true"><i class="mce-ico mce-i-remove"></i></button></div>'),i.url&&(s='<iframe src="'+i.url+'" tabindex="-1"></iframe>'),"undefined"==typeof s&&(s=t.renderHtml(e)),e.statusbar&&(a=e.statusbar.renderHtml()),'<div id="'+n+'" class="'+e.classes+'" hidefocus="1"><div class="'+e.classPrefix+'reset" role="application">'+o+'<div id="'+n+'-body" class="'+e.bodyClasses+'">'+s+"</div>"+a+"</div></div>"},fullscreen:function(e){var t=this,i=document.documentElement,a,l=t.classPrefix,c;if(e!=t._fullscreen)if(r(window).on("resize",function(){var e;if(t._fullscreen)if(a)t._timer||(t._timer=s.setTimeout(function(){var e=n.getWindowSize();t.moveTo(0,0).resizeTo(e.w,e.h),t._timer=0},50));else{e=(new Date).getTime();var r=n.getWindowSize();t.moveTo(0,0).resizeTo(r.w,r.h),(new Date).getTime()-e>50&&(a=!0)}}),c=t.layoutRect(),t._fullscreen=e,e){t._initial={x:c.x,y:c.y,w:c.w,h:c.h},t.borderBox=o.parseBox("0"),t.getEl("head").style.display="none",c.deltaH-=c.headerH+2,r([i,document.body]).addClass(l+"fullscreen"),t.classes.add("fullscreen");var u=n.getWindowSize();t.moveTo(0,0).resizeTo(u.w,u.h)}else t.borderBox=o.parseBox(t.settings.border),t.getEl("head").style.display="",c.deltaH+=c.headerH,r([i,document.body]).removeClass(l+"fullscreen"),t.classes.remove("fullscreen"),t.moveTo(t._initial.x,t._initial.y).resizeTo(t._initial.w,t._initial.h);return t.reflow()},postRender:function(){var e=this,t;setTimeout(function(){e.classes.add("in"),e.fire("open")},0),e._super(),e.statusbar&&e.statusbar.postRender(),e.focus(),this.dragHelper=new i(e._id+"-dragh",{start:function(){t={x:e.layoutRect().x,y:e.layoutRect().y}},drag:function(n){e.moveTo(t.x+n.deltaX,t.y+n.deltaY)}}),e.on("submit",function(t){t.isDefaultPrevented()||e.close()}),d.push(e),l(!0)},submit:function(){return this.fire("submit",{data:this.toJSON()})},remove:function(){var e=this,t;for(e.dragHelper.destroy(),e._super(),e.statusbar&&this.statusbar.remove(),t=d.length;t--;)d[t]===e&&d.splice(t,1);l(d.length>0),c(e.classPrefix)},getContentWindow:function(){var e=this.getEl().getElementsByTagName("iframe")[0];return e?e.contentWindow:null}});return u(),h}),r(Re,[Te],function(e){var t=e.extend({init:function(e){e={border:1,padding:20,layout:"flex",pack:"center",align:"center",containerCls:"panel",autoScroll:!0,buttons:{type:"button",text:"Ok",action:"ok"},items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200}},this._super(e)},Statics:{OK:1,OK_CANCEL:2,YES_NO:3,YES_NO_CANCEL:4,msgBox:function(n){function r(e,t,n){return{type:"button",text:e,subtype:n?"primary":"",onClick:function(e){e.control.parents()[1].close(),o(t)}}}var i,o=n.callback||function(){};switch(n.buttons){case t.OK_CANCEL:i=[r("Ok",!0,!0),r("Cancel",!1)];break;case t.YES_NO:case t.YES_NO_CANCEL:i=[r("Yes",1,!0),r("No",0)],n.buttons==t.YES_NO_CANCEL&&i.push(r("Cancel",-1));break;default:i=[r("Ok",!0,!0)]}return new e({padding:20,x:n.x,y:n.y,minWidth:300,minHeight:100,layout:"flex",pack:"center",align:"center",buttons:i,title:n.title,role:"alertdialog",items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200,text:n.text},onPostRender:function(){this.aria("describedby",this.items()[0]._id)},onClose:n.onClose,onCancel:function(){o(!1)}}).renderTo(document.body).reflow()},alert:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,t.msgBox(e)},confirm:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,e.buttons=t.OK_CANCEL,t.msgBox(e)}}});return t}),r(Ae,[Te,Re],function(e,t){return function(n){function r(){return s.length?s[s.length-1]:void 0}function i(e){n.fire("OpenWindow",{win:e})}function o(e){n.fire("CloseWindow",{win:e})}var a=this,s=[];a.windows=s,n.on("remove",function(){for(var e=s.length;e--;)s[e].close()}),a.open=function(t,r){var a;return n.editorManager.setActive(n),t.title=t.title||" ",t.url=t.url||t.file,t.url&&(t.width=parseInt(t.width||320,10),t.height=parseInt(t.height||240,10)),t.body&&(t.items={defaults:t.defaults,type:t.bodyType||"form",items:t.body,data:t.data,callbacks:t.commands}),t.url||t.buttons||(t.buttons=[{text:"Ok",subtype:"primary",onclick:function(){a.find("form")[0].submit()}},{text:"Cancel",onclick:function(){a.close()}}]),a=new e(t),s.push(a),a.on("close",function(){for(var e=s.length;e--;)s[e]===a&&s.splice(e,1);s.length||n.focus(),o(a)}),t.data&&a.on("postRender",function(){this.find("*").each(function(e){var n=e.name();n in t.data&&e.value(t.data[n])})}),a.features=t||{},a.params=r||{},1===s.length&&n.nodeChanged(),a=a.renderTo().reflow(),i(a),a},a.alert=function(e,r,a){var s;s=t.alert(e,function(){r?r.call(a||this):n.focus()}),s.on("close",function(){o(s)}),i(s)},a.confirm=function(e,n,r){var a;a=t.confirm(e,function(e){n.call(r||this,e)}),a.on("close",function(){o(a)}),i(a)},a.close=function(){r()&&r().close()},a.getParams=function(){return r()?r().params:null},a.setParams=function(e){r()&&(r().params=e)},a.getWindows=function(){return s}}}),r(Be,[ye,_e],function(e,t){return e.extend({Mixins:[t],Defaults:{classes:"widget tooltip tooltip-n"},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes+'" role="presentation"><div class="'+t+'tooltip-arrow"></div><div class="'+t+'tooltip-inner">'+e.encode(e.state.get("text"))+"</div></div>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().lastChild.innerHTML=e.encode(t.value)}),e._super()},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(De,[ye,Be],function(e,t){var n,r=e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.canFocus=!0,e.tooltip&&r.tooltips!==!1&&(t.on("mouseenter",function(n){var r=t.tooltip().moveTo(-65535);if(n.control==t){var i=r.text(e.tooltip).show().testMoveRel(t.getEl(),["bc-tc","bc-tl","bc-tr"]);r.classes.toggle("tooltip-n","bc-tc"==i),r.classes.toggle("tooltip-nw","bc-tl"==i),r.classes.toggle("tooltip-ne","bc-tr"==i),r.moveRel(t.getEl(),i)}else r.hide()}),t.on("mouseleave mousedown click",function(){t.tooltip().hide()})),t.aria("label",e.ariaLabel||e.tooltip)},tooltip:function(){return n||(n=new t({type:"tooltip"}),n.renderTo()),n},postRender:function(){var e=this,t=e.settings;e._super(),e.parent()||!t.width&&!t.height||(e.initLayoutRect(),e.repaint()),t.autofocus&&e.focus()},bindStates:function(){function e(e){n.aria("disabled",e),n.classes.toggle("disabled",e)}function t(e){n.aria("pressed",e),n.classes.toggle("active",e)}var n=this;return n.state.on("change:disabled",function(t){e(t.value)}),n.state.on("change:active",function(e){t(e.value)}),n.state.get("disabled")&&e(!0),n.state.get("active")&&t(!0),n._super()},remove:function(){this._super(),n&&(n.remove(),n=null)}});return r}),r(Le,[De],function(e){return e.extend({Defaults:{value:0},init:function(e){var t=this;t._super(e),t.classes.add("progress"),t.settings.filter||(t.settings.filter=function(e){return Math.round(e)})},renderHtml:function(){var e=this,t=e._id,n=this.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div class="'+n+'bar-container"><div class="'+n+'bar"></div></div><div class="'+n+'text">0%</div></div>'},postRender:function(){var e=this;return e._super(),e.value(e.settings.value),e},bindStates:function(){function e(e){e=t.settings.filter(e),t.getEl().lastChild.innerHTML=e+"%",t.getEl().firstChild.firstChild.style.width=e+"%"}var t=this;return t.state.on("change:value",function(t){e(t.value)}),e(t.state.get("value")),t._super()}})}),r(Me,[ye,_e,Le,u],function(e,t,n,r){return e.extend({Mixins:[t],Defaults:{classes:"widget notification"},init:function(e){var t=this;t._super(e),e.text&&t.text(e.text),e.icon&&(t.icon=e.icon),e.color&&(t.color=e.color),e.type&&t.classes.add("notification-"+e.type),e.timeout&&(e.timeout<0||e.timeout>0)&&!e.closeButton?t.closeButton=!1:(t.classes.add("has-close"),t.closeButton=!0),e.progressBar&&(t.progressBar=new n),t.on("click",function(e){-1!=e.target.className.indexOf(t.classPrefix+"close")&&t.close()})},renderHtml:function(){var e=this,t=e.classPrefix,n="",r="",i="",o="";return e.icon&&(n='<i class="'+t+"ico "+t+"i-"+e.icon+'"></i>'),e.color&&(o=' style="background-color: '+e.color+'"'),e.closeButton&&(r='<button type="button" class="'+t+'close" aria-hidden="true">\xd7</button>'),e.progressBar&&(i=e.progressBar.renderHtml()),'<div id="'+e._id+'" class="'+e.classes+'"'+o+' role="presentation">'+n+'<div class="'+t+'notification-inner">'+e.state.get("text")+"</div>"+i+r+"</div>"},postRender:function(){var e=this;return r.setTimeout(function(){e.$el.addClass(e.classPrefix+"in")}),e._super()},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().childNodes[1].innerHTML=t.value}),e.progressBar&&e.progressBar.bindStates(),e._super()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||e.remove(),e},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(Pe,[Me,u],function(e,t){return function(n){function r(){return l.length?l[l.length-1]:void 0}function i(){t.requestAnimationFrame(function(){o(),a()})}function o(){for(var e=0;e<l.length;e++)l[e].moveTo(0,0)}function a(){if(l.length>0){var e=l.slice(0,1)[0],t=n.inline?n.getElement():n.getContentAreaContainer();if(e.moveRel(t,"tc-tc"),l.length>1)for(var r=1;r<l.length;r++)l[r].moveRel(l[r-1].getEl(),"bc-tc")}}var s=this,l=[];s.notifications=l,n.on("remove",function(){for(var e=l.length;e--;)l[e].close()}),n.on("ResizeEditor",a),n.on("ResizeWindow",i),s.open=function(t){var r;return n.editorManager.setActive(n),r=new e(t),l.push(r),t.timeout>0&&(r.timer=setTimeout(function(){r.close()},t.timeout)),r.on("close",function(){var e=l.length;for(r.timer&&n.getWin().clearTimeout(r.timer);e--;)l[e]===r&&l.splice(e,1);a()}),r.renderTo(),a(),r},s.close=function(){r()&&r().close()},s.getNotifications=function(){return l},n.on("SkinLoaded",function(){var e=n.settings.service_message;e&&n.notificationManager.open({text:e,type:"warning",timeout:0,icon:""})})}}),r(He,[w],function(e){function t(t,n,r){for(var i=[];n&&n!=t;n=n.parentNode)i.push(e.nodeIndex(n,r));return i}function n(e,t){var n,r,i;for(r=e,n=t.length-1;n>=0;n--){if(i=r.childNodes,t[n]>i.length-1)return null;r=i[t[n]]}return r}return{create:t,resolve:n}}),r(Oe,[I,T,y,He,A,C,d,m,u,k,$,ne],function(e,t,n,r,i,o,a,s,l,c,u,d){return function(f){function h(e,t){try{f.getDoc().execCommand(e,!1,t)}catch(n){}}function p(){var e=f.getDoc().documentMode;return e?e:6}function m(e){return e.isDefaultPrevented()}function g(e){var t,n;e.dataTransfer&&(f.selection.isCollapsed()&&"IMG"==e.target.tagName&&re.select(e.target),t=f.selection.getContent(),t.length>0&&(n=ue+escape(f.id)+","+escape(t),e.dataTransfer.setData(de,n)))}function v(e){var t;return e.dataTransfer&&(t=e.dataTransfer.getData(de),t&&t.indexOf(ue)>=0)?(t=t.substr(ue.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}function y(e){f.queryCommandSupported("mceInsertClipboardContent")?f.execCommand("mceInsertClipboardContent",!1,{content:e}):f.execCommand("mceInsertContent",!1,e)}function b(){function i(e){var t=C.schema.getBlockElements(),n=f.getBody();if("BR"!=e.nodeName)return!1;for(;e!=n&&!t[e.nodeName];e=e.parentNode)if(e.nextSibling)return!1;return!0}function o(e,t){var n;for(n=e.nextSibling;n&&n!=t;n=n.nextSibling)if((3!=n.nodeType||0!==Z.trim(n.data).length)&&n!==t)return!1;return n===t}function a(e,t,r){var o,a,s;for(s=C.schema.getNonEmptyElements(),o=new n(r||e,e);a=o[t?"next":"prev"]();){if(s[a.nodeName]&&!i(a))return a;if(3==a.nodeType&&a.data.length>0)return a}}function c(e){var n,r,i,o,s;if(!e.collapsed&&(n=C.getParent(t.getNode(e.startContainer,e.startOffset),C.isBlock),r=C.getParent(t.getNode(e.endContainer,e.endOffset),C.isBlock),s=f.schema.getTextBlockElements(),n!=r&&s[n.nodeName]&&s[r.nodeName]&&"false"!==C.getContentEditable(n)&&"false"!==C.getContentEditable(r)))return e.deleteContents(),
    i=a(n,!1),o=a(r,!0),C.isEmpty(r)||Z(n).append(r.childNodes),Z(r).remove(),i?1==i.nodeType?"BR"==i.nodeName?(e.setStartBefore(i),e.setEndBefore(i)):(e.setStartAfter(i),e.setEndAfter(i)):(e.setStart(i,i.data.length),e.setEnd(i,i.data.length)):o&&(1==o.nodeType?(e.setStartBefore(o),e.setEndBefore(o)):(e.setStart(o,0),e.setEnd(o,0))),x.setRng(e),!0}function u(e,n){var r,i,s,l,c,u;if(!e.collapsed)return e;if(c=e.startContainer,u=e.startOffset,3==c.nodeType)if(n){if(u<c.data.length)return e}else if(u>0)return e;if(r=t.getNode(e.startContainer,e.startOffset),s=C.getParent(r,C.isBlock),i=a(f.getBody(),n,r),l=C.getParent(i,C.isBlock),!r||!i)return e;if(l&&s!=l)if(n){if(!o(s,l))return e;1==r.nodeType?"BR"==r.nodeName?e.setStartBefore(r):e.setStartAfter(r):e.setStart(r,r.data.length),1==i.nodeType?e.setEnd(i,0):e.setEndBefore(i)}else{if(!o(l,s))return e;1==i.nodeType?"BR"==i.nodeName?e.setStartBefore(i):e.setStartAfter(i):e.setStart(i,i.data.length),1==r.nodeType?e.setEnd(r,0):e.setEndBefore(r)}return e}function d(e){var t=x.getRng();return t=u(t,e),c(t)?!0:void 0}function h(e,t){function n(e,n){return m=Z(n).parents().filter(function(e,t){return!!f.schema.getTextInlineElements()[t.nodeName]}),l=e.cloneNode(!1),m=s.map(m,function(e){return e=e.cloneNode(!1),l.hasChildNodes()?(e.appendChild(l.firstChild),l.appendChild(e)):l.appendChild(e),l.appendChild(e),e}),m.length?(p=C.create("br"),m[0].appendChild(p),C.replace(l,e),t.setStartBefore(p),t.setEndBefore(p),f.selection.setRng(t),p):null}function i(e){return e&&f.schema.getTextBlockElements()[e.tagName]}var o,a,l,c,u,d,h,p,m;if(t.collapsed&&(d=t.startContainer,h=t.startOffset,a=C.getParent(d,C.isBlock),i(a)))if(1==d.nodeType){if(d=d.childNodes[h],d&&"BR"!=d.tagName)return;if(u=e?a.nextSibling:a.previousSibling,C.isEmpty(a)&&i(u)&&C.isEmpty(u)&&n(a,d))return C.remove(u),!0}else if(3==d.nodeType){if(o=r.create(a,d),c=a.cloneNode(!0),d=r.resolve(c,o),e){if(h>=d.data.length)return;d.deleteData(h,1)}else{if(0>=h)return;d.deleteData(h-1,1)}if(C.isEmpty(c))return n(a,d)}}function p(e){var t,n,r;d(e)||(s.each(f.getBody().getElementsByTagName("*"),function(e){"SPAN"==e.tagName&&e.setAttribute("mce-data-marked",1),!e.hasAttribute("data-mce-style")&&e.hasAttribute("style")&&f.dom.setAttrib(e,"style",f.dom.getAttrib(e,"style"))}),t=new w(function(){}),t.observe(f.getDoc(),{childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"]}),f.getDoc().execCommand(e?"ForwardDelete":"Delete",!1,null),n=f.selection.getRng(),r=n.startContainer.parentNode,s.each(t.takeRecords(),function(e){if(C.isChildOf(e.target,f.getBody())){if("style"==e.attributeName){var t=e.target.getAttribute("data-mce-style");t?e.target.setAttribute("style",t):e.target.removeAttribute("style")}s.each(e.addedNodes,function(e){if("SPAN"==e.nodeName&&!e.getAttribute("mce-data-marked")){var t,i;e==r&&(t=n.startOffset,i=e.firstChild),C.remove(e,!0),i&&(n.setStart(i,t),n.setEnd(i,t),f.selection.setRng(n))}})}}),t.disconnect(),s.each(f.dom.select("span[mce-data-marked]"),function(e){e.removeAttribute("mce-data-marked")}))}var b=f.getDoc(),C=f.dom,x=f.selection,w=window.MutationObserver,N,E;w||(N=!0,w=function(){function e(e){var t=e.relatedNode||e.target;n.push({target:t,addedNodes:[t]})}function t(e){var t=e.relatedNode||e.target;n.push({target:t,attributeName:e.attrName})}var n=[],r;this.observe=function(n){r=n,r.addEventListener("DOMSubtreeModified",e,!1),r.addEventListener("DOMNodeInsertedIntoDocument",e,!1),r.addEventListener("DOMNodeInserted",e,!1),r.addEventListener("DOMAttrModified",t,!1)},this.disconnect=function(){r.removeEventListener("DOMSubtreeModified",e,!1),r.removeEventListener("DOMNodeInsertedIntoDocument",e,!1),r.removeEventListener("DOMNodeInserted",e,!1),r.removeEventListener("DOMAttrModified",t,!1)},this.takeRecords=function(){return n}}),f.on("keydown",function(e){var t=e.keyCode==te,n=e.ctrlKey||e.metaKey;if(!m(e)&&(t||e.keyCode==ee)){var r=f.selection.getRng(),i=r.startContainer,o=r.startOffset;if(t&&e.shiftKey)return;if(h(t,r))return void e.preventDefault();if(!n&&r.collapsed&&3==i.nodeType&&(t?o<i.data.length:o>0))return;e.preventDefault(),n&&f.selection.getSel().modify("extend",t?"forward":"backward",e.metaKey?"lineboundary":"word"),p(t)}}),f.on("keypress",function(t){if(!m(t)&&!x.isCollapsed()&&t.charCode>31&&!e.metaKeyPressed(t)){var n,r,i,o,a,s;n=f.selection.getRng(),s=String.fromCharCode(t.charCode),t.preventDefault(),r=Z(n.startContainer).parents().filter(function(e,t){return!!f.schema.getTextInlineElements()[t.nodeName]}),p(!0),r=r.filter(function(e,t){return!Z.contains(f.getBody(),t)}),r.length?(i=C.createFragment(),r.each(function(e,t){t=t.cloneNode(!1),i.hasChildNodes()?(t.appendChild(i.firstChild),i.appendChild(t)):(a=t,i.appendChild(t)),i.appendChild(t)}),a.appendChild(f.getDoc().createTextNode(s)),o=C.getParent(n.startContainer,C.isBlock),C.isEmpty(o)?Z(o).empty().append(i):n.insertNode(i),n.setStart(a.firstChild,1),n.setEnd(a.firstChild,1),f.selection.setRng(n)):f.selection.setContent(s)}}),f.addCommand("Delete",function(){p()}),f.addCommand("ForwardDelete",function(){p(!0)}),N||(f.on("dragstart",function(e){E=x.getRng(),g(e)}),f.on("drop",function(e){if(!m(e)){var n=v(e);n&&(e.preventDefault(),l.setEditorTimeout(f,function(){var r=t.getCaretRangeFromPoint(e.x,e.y,b);E&&(x.setRng(E),E=null),p(),x.setRng(r),y(n.html)}))}}),f.on("cut",function(e){m(e)||!e.clipboardData||f.selection.isCollapsed()||(e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/html",f.selection.getContent()),e.clipboardData.setData("text/plain",f.selection.getContent({format:"text"})),l.setEditorTimeout(f,function(){p(!0)}))}))}function C(){function e(e){var t=ne.create("body"),n=e.cloneContents();return t.appendChild(n),re.serializer.serialize(t,{format:"html"})}function n(n){if(!n.setStart){if(n.item)return!1;var r=n.duplicate();return r.moveToElementText(f.getBody()),t.compareRanges(n,r)}var i=e(n),o=ne.createRng();o.selectNode(f.getBody());var a=e(o);return i===a}f.on("keydown",function(e){var t=e.keyCode,r,i;if(!m(e)&&(t==te||t==ee)){if(r=f.selection.isCollapsed(),i=f.getBody(),r&&!ne.isEmpty(i))return;if(!r&&!n(f.selection.getRng()))return;e.preventDefault(),f.setContent(""),i.firstChild&&ne.isBlock(i.firstChild)?f.selection.setCursorLocation(i.firstChild,0):f.selection.setCursorLocation(i,0),f.nodeChanged()}})}function x(){f.shortcuts.add("meta+a",null,"SelectAll")}function w(){f.settings.content_editable||ne.bind(f.getDoc(),"mousedown mouseup",function(e){var t;if(e.target==f.getDoc().documentElement)if(t=re.getRng(),f.getBody().focus(),"mousedown"==e.type){if(c.isCaretContainer(t.startContainer))return;re.placeCaretAt(e.clientX,e.clientY)}else re.setRng(t)})}function N(){f.on("keydown",function(e){if(!m(e)&&e.keyCode===ee){if(!f.getBody().getElementsByTagName("hr").length)return;if(re.isCollapsed()&&0===re.getRng(!0).startOffset){var t=re.getNode(),n=t.previousSibling;if("HR"==t.nodeName)return ne.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(ne.remove(n),e.preventDefault())}}})}function E(){window.Range.prototype.getClientRects||f.on("mousedown",function(e){if(!m(e)&&"HTML"===e.target.nodeName){var t=f.getBody();t.blur(),l.setEditorTimeout(f,function(){t.focus()})}})}function _(){f.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==ne.getContentEditableParent(t)&&(e.preventDefault(),re.getSel().setBaseAndExtent(t,0,t,1),f.nodeChanged()),"A"==t.nodeName&&ne.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),re.select(t))})}function S(){function e(){var e=ne.getAttribs(re.getStart().cloneNode(!1));return function(){var t=re.getStart();t!==f.getBody()&&(ne.setAttrib(t,"style",null),Q(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}}function t(){return!re.isCollapsed()&&ne.getParent(re.getStart(),ne.isBlock)!=ne.getParent(re.getEnd(),ne.isBlock)}f.on("keypress",function(n){var r;return m(n)||8!=n.keyCode&&46!=n.keyCode||!t()?void 0:(r=e(),f.getDoc().execCommand("delete",!1,null),r(),n.preventDefault(),!1)}),ne.bind(f.getDoc(),"cut",function(n){var r;!m(n)&&t()&&(r=e(),l.setEditorTimeout(f,function(){r()}))})}function k(){document.body.setAttribute("role","application")}function T(){f.on("keydown",function(e){if(!m(e)&&e.keyCode===ee&&re.isCollapsed()&&0===re.getRng(!0).startOffset){var t=re.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})}function R(){p()>7||(h("RespectVisibilityInDesign",!0),f.contentStyles.push(".mceHideBrInPre pre br {display: none}"),ne.addClass(f.getBody(),"mceHideBrInPre"),oe.addNodeFilter("pre",function(e){for(var t=e.length,n,r,o,a;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)o=n[r],a=o.prev,a&&3===a.type&&"\n"!=a.value.charAt(a.value-1)?a.value+="\n":o.parent.insert(new i("#text",3),o,!0).value="\n"}),ae.addNodeFilter("pre",function(e){for(var t=e.length,n,r,i,o;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)i=n[r],o=i.prev,o&&3==o.type&&(o.value=o.value.replace(/\r?\n$/,""))}))}function A(){ne.bind(f.getBody(),"mouseup",function(){var e,t=re.getNode();"IMG"==t.nodeName&&((e=ne.getStyle(t,"width"))&&(ne.setAttrib(t,"width",e.replace(/[^0-9%]+/g,"")),ne.setStyle(t,"width","")),(e=ne.getStyle(t,"height"))&&(ne.setAttrib(t,"height",e.replace(/[^0-9%]+/g,"")),ne.setStyle(t,"height","")))})}function B(){f.on("keydown",function(t){var n,r,i,o,a;if(!m(t)&&t.keyCode==e.BACKSPACE&&(n=re.getRng(),r=n.startContainer,i=n.startOffset,o=ne.getRoot(),a=r,n.collapsed&&0===i)){for(;a&&a.parentNode&&a.parentNode.firstChild==a&&a.parentNode!=o;)a=a.parentNode;"BLOCKQUOTE"===a.tagName&&(f.formatter.toggle("blockquote",null,a),n=ne.createRng(),n.setStart(r,0),n.setEnd(r,0),re.setRng(n))}})}function D(){function e(){K(),h("StyleWithCSS",!1),h("enableInlineTableEditing",!1),ie.object_resizing||h("enableObjectResizing",!1)}ie.readonly||f.on("BeforeExecCommand MouseDown",e)}function L(){function e(){Q(ne.select("a"),function(e){var t=e.parentNode,n=ne.getRoot();if(t.lastChild===e){for(;t&&!ne.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}ne.add(t,"br",{"data-mce-bogus":1})}})}f.on("SetContent ExecCommand",function(t){"setcontent"!=t.type&&"mceInsertLink"!==t.command||e()})}function M(){ie.forced_root_block&&f.on("init",function(){h("DefaultParagraphSeparator",ie.forced_root_block)})}function P(){f.on("keydown",function(e){var t;m(e)||e.keyCode!=ee||(t=f.getDoc().selection.createRange(),t&&t.item&&(e.preventDefault(),f.undoManager.beforeChange(),ne.remove(t.item(0)),f.undoManager.add()))})}function H(){var e;p()>=10&&(e="",Q("p div h1 h2 h3 h4 h5 h6".split(" "),function(t,n){e+=(n>0?",":"")+t+":empty"}),f.contentStyles.push(e+"{padding-right: 1px !important}"))}function O(){p()<9&&(oe.addNodeFilter("noscript",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.firstChild,r&&n.attr("data-mce-innertext",r.value)}),ae.addNodeFilter("noscript",function(e){for(var t=e.length,n,r,a;t--;)n=e[t],r=e[t].firstChild,r?r.value=o.decode(r.value):(a=n.attributes.map["data-mce-innertext"],a&&(n.attr("data-mce-innertext",null),r=new i("#text",3),r.value=a,r.raw=!0,n.append(r)))}))}function I(){function e(e,t){var n=i.createTextRange();try{n.moveToPoint(e,t)}catch(r){n=null}return n}function t(t){var r;t.button?(r=e(t.x,t.y),r&&(r.compareEndPoints("StartToStart",a)>0?r.setEndPoint("StartToStart",a):r.setEndPoint("EndToEnd",a),r.select())):n()}function n(){var e=r.selection.createRange();a&&!e.item&&0===e.compareEndPoints("StartToEnd",e)&&a.select(),ne.unbind(r,"mouseup",n),ne.unbind(r,"mousemove",t),a=o=0}var r=ne.doc,i=r.body,o,a,s;r.documentElement.unselectable=!0,ne.bind(r,"mousedown contextmenu",function(i){if("HTML"===i.target.nodeName){if(o&&n(),s=r.documentElement,s.scrollHeight>s.clientHeight)return;o=1,a=e(i.x,i.y),a&&(ne.bind(r,"mouseup",n),ne.bind(r,"mousemove",t),ne.getRoot().focus(),a.select())}})}function F(){f.on("keyup focusin mouseup",function(t){65==t.keyCode&&e.metaKeyPressed(t)||re.normalize()},!0)}function z(){f.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}function U(){f.inline||f.on("keydown",function(){document.activeElement==document.body&&f.getWin().focus()})}function W(){f.inline||(f.contentStyles.push("body {min-height: 150px}"),f.on("click",function(e){var t;if("HTML"==e.target.nodeName){if(a.ie>11)return void f.getBody().focus();t=f.selection.getRng(),f.getBody().focus(),f.selection.setRng(t),f.selection.normalize(),f.nodeChanged()}}))}function V(){a.mac&&f.on("keydown",function(t){!e.metaKeyPressed(t)||t.shiftKey||37!=t.keyCode&&39!=t.keyCode||(t.preventDefault(),f.selection.getSel().modify("move",37==t.keyCode?"backward":"forward","lineboundary"))})}function $(){h("AutoUrlDetect",!1)}function q(){f.on("click",function(e){var t=e.target;do if("A"===t.tagName)return void e.preventDefault();while(t=t.parentNode)}),f.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}function j(){f.on("init",function(){f.dom.bind(f.getBody(),"submit",function(e){e.preventDefault()})})}function Y(){oe.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"==e[t].attr("class")&&e[t].remove()})}function X(){f.on("dragstart",function(e){g(e)}),f.on("drop",function(e){if(!m(e)){var n=v(e);if(n&&n.id!=f.id){e.preventDefault();var r=t.getCaretRangeFromPoint(e.x,e.y,f.getDoc());re.setRng(r),y(n.html)}}})}function K(){var e,t;G()&&(e=f.getBody(),t=e.parentNode,t.removeChild(e),t.appendChild(e),e.focus())}function G(){var e;return se?(e=f.selection.getSel(),!e||!e.rangeCount||0===e.rangeCount):0}function J(){function t(e){var t=new d(e.getBody()),n=e.selection.getRng(),r=u.fromRangeStart(n),i=u.fromRangeEnd(n);return!e.selection.isCollapsed()&&!t.prev(r)&&!t.next(i)}f.on("keypress",function(n){!m(n)&&!re.isCollapsed()&&n.charCode>31&&!e.metaKeyPressed(n)&&t(f)&&(n.preventDefault(),f.setContent(String.fromCharCode(n.charCode)),f.selection.select(f.getBody(),!0),f.selection.collapse(!1),f.nodeChanged())}),f.on("keydown",function(e){var n=e.keyCode;m(e)||n!=te&&n!=ee||t(f)&&(e.preventDefault(),f.setContent(""),f.nodeChanged())})}var Q=s.each,Z=f.$,ee=e.BACKSPACE,te=e.DELETE,ne=f.dom,re=f.selection,ie=f.settings,oe=f.parser,ae=f.serializer,se=a.gecko,le=a.ie,ce=a.webkit,ue="data:text/mce-internal,",de=le?"Text":"URL";return B(),C(),a.windowsPhone||F(),ce&&(J(),b(),w(),_(),M(),j(),T(),Y(),a.iOS?(U(),W(),q()):x()),le&&a.ie<11&&(N(),k(),R(),A(),P(),H(),O(),I()),a.ie>=11&&(W(),T()),a.ie&&(x(),$(),X()),se&&(J(),N(),E(),S(),D(),L(),z(),V(),T()),{refreshContentEditable:K,isHidden:G}}}),r(Ie,[ue,w,m],function(e,t,n){function r(e,t){return"selectionchange"==t?e.getDoc():!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=o.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()}function i(e,t){function n(e){return!e.hidden&&!e.readonly}var i=r(e,t),s;if(e.delegates||(e.delegates={}),!e.delegates[t])if(e.settings.event_root){if(a||(a={},e.editorManager.on("removeEditor",function(){var t;if(!e.editorManager.activeEditor&&a){for(t in a)e.dom.unbind(r(e,t));a=null}})),a[t])return;s=function(r){for(var i=r.target,a=e.editorManager.editors,s=a.length;s--;){var l=a[s].getBody();(l===i||o.isChildOf(i,l))&&n(a[s])&&a[s].fire(t,r)}},a[t]=s,o.bind(i,t,s)}else s=function(r){n(e)&&e.fire(t,r)},o.bind(i,t,s),e.delegates[t]=s}var o=t.DOM,a,s={bindPendingEventDelegates:function(){var e=this;n.each(e._pendingNativeEvents,function(t){i(e,t)})},toggleNativeEvent:function(e,t){var n=this;"focus"!=e&&"blur"!=e&&(t?n.initialized?i(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(r(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t;if(e.delegates){for(t in e.delegates)e.dom.unbind(r(e,t),t,e.delegates[t]);delete e.delegates}e.inline||(e.getBody().onload=null,e.dom.unbind(e.getWin()),e.dom.unbind(e.getDoc())),e.dom.unbind(e.getBody()),e.dom.unbind(e.getContainer())}};return s=n.extend({},e,s)}),r(Fe,[],function(){function e(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}}function t(e){var t,n;return t=e.getBody(),n=function(t){e.dom.getParents(t.target,"a").length>0&&t.preventDefault()},e.dom.bind(t,"click",n),{unbind:function(){e.dom.unbind(t,"click",n)}}}function n(n,r){n._clickBlocker&&(n._clickBlocker.unbind(),n._clickBlocker=null),r?(n._clickBlocker=t(n),n.selection.controlSelection.hideResizeRect(),n.readonly=!0,n.getBody().contentEditable=!1):(n.readonly=!1,n.getBody().contentEditable=!0,e(n,"StyleWithCSS",!1),e(n,"enableInlineTableEditing",!1),e(n,"enableObjectResizing",!1),n.focus(),n.nodeChanged())}function r(e,t){var r=e.readonly?"readonly":"design";t!=r&&(e.initialized?n(e,"readonly"==t):e.on("init",function(){n(e,"readonly"==t)}),e.fire("SwitchMode",{mode:t}))}return{setMode:r}}),r(ze,[m,d],function(e,t){var n=e.each,r=e.explode,i={f9:120,f10:121,f11:122},o=e.makeMap("alt,ctrl,shift,meta,access");return function(a){function s(e){var a,s,l={};n(r(e,"+"),function(e){e in o?l[e]=!0:/^[0-9]{2,}$/.test(e)?l.keyCode=parseInt(e,10):(l.charCode=e.charCodeAt(0),l.keyCode=i[e]||e.toUpperCase().charCodeAt(0))}),a=[l.keyCode];for(s in o)l[s]?a.push(s):l[s]=!1;return l.id=a.join(","),l.access&&(l.alt=!0,t.mac?l.ctrl=!0:l.shift=!0),l.meta&&(t.mac?l.meta=!0:(l.ctrl=!0,l.meta=!1)),l}function l(t,n,i,o){var l;return l=e.map(r(t,">"),s),l[l.length-1]=e.extend(l[l.length-1],{func:i,scope:o||a}),e.extend(l[0],{desc:a.translate(n),subpatterns:l.slice(1)})}function c(e){return e.altKey||e.ctrlKey||e.metaKey}function u(e){return e.keyCode>=112&&e.keyCode<=123}function d(e,t){return t?t.ctrl!=e.ctrlKey||t.meta!=e.metaKey?!1:t.alt!=e.altKey||t.shift!=e.shiftKey?!1:e.keyCode==t.keyCode||e.charCode&&e.charCode==t.charCode?(e.preventDefault(),!0):!1:!1}function f(e){return e.func?e.func.call(e.scope):null}var h=this,p={},m=[];a.on("keyup keypress keydown",function(e){!c(e)&&!u(e)||e.isDefaultPrevented()||(n(p,function(t){return d(e,t)?(m=t.subpatterns.slice(0),"keydown"==e.type&&f(t),!0):void 0}),d(e,m[0])&&(1===m.length&&"keydown"==e.type&&f(m[0]),m.shift()))}),h.add=function(t,i,o,s){var c;return c=o,"string"==typeof o?o=function(){a.execCommand(c,!1,null)}:e.isArray(c)&&(o=function(){a.execCommand(c[0],c[1],c[2])}),n(r(e.trim(t.toLowerCase())),function(e){var t=l(e,i,o,s);p[t.id]=t}),!0},h.remove=function(e){var t=l(e);return p[t.id]?(delete p[t.id],!0):!1}}}),r(Ue,[c,m,z],function(e,t,n){return function(r,i){function o(e){var t,n;return n={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"},t=n[e.blob().type.toLowerCase()]||"dat",e.id()+"."+t}function a(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t}function s(e){return{id:e.id,blob:e.blob,base64:e.base64,filename:n.constant(o(e))}}function l(e,t,n,r){var s,l;s=new XMLHttpRequest,s.open("POST",i.url),s.withCredentials=i.credentials,s.upload.onprogress=function(e){r(e.loaded/e.total*100)},s.onerror=function(){n("Image upload failed due to a XHR Transport error. Code: "+s.status)},s.onload=function(){var e;return 200!=s.status?void n("HTTP Error: "+s.status):(e=JSON.parse(s.responseText),e&&"string"==typeof e.location?void t(a(i.basePath,e.location)):void n("Invalid JSON: "+s.responseText))},l=new FormData,l.append("file",e.blob(),o(e)),s.send(l)}function c(){return new e(function(e){e([])})}function u(e,t){return{url:t,blobInfo:e,status:!0}}function d(e,t){return{url:"",blobInfo:e,status:!1,error:t}}function f(e,n){t.each(y[e],function(e){e(n)}),delete y[e]}function h(t,n,i){return r.markPending(t.blobUri()),new e(function(e){var o,a,l=function(){};try{var c=function(){o&&(o.close(),a=l)},h=function(n){c(),r.markUploaded(t.blobUri(),n),f(t.blobUri(),u(t,n)),e(u(t,n))},p=function(){c(),r.removeFailed(t.blobUri()),f(t.blobUri(),d(t,p)),e(d(t,p))};a=function(e){0>e||e>100||(o||(o=i()),o.progressBar.value(e))},n(s(t),h,p,a)}catch(m){e(d(t,m.message))}})}function p(e){return e===l}function m(t){var n=t.blobUri();return new e(function(e){y[n]=y[n]||[],y[n].push(e)})}function g(n,o){return n=t.grep(n,function(e){return!r.isUploaded(e.blobUri())}),e.all(t.map(n,function(e){return r.isPending(e.blobUri())?m(e):h(e,i.handler,o)}))}function v(e,t){return!i.url&&p(i.handler)?c():g(e,t)}var y={};return i=t.extend({credentials:!1,handler:l},i),{upload:v}}}),r(We,[c],function(e){function t(t){return new e(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(){200==this.status&&e(this.response)},n.send()})}function n(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}}function r(t){return new e(function(e){var r,i,o;t=n(t);try{r=atob(t.data)}catch(a){return void e(new Blob([]))}for(i=new Uint8Array(r.length),o=0;o<i.length;o++)i[o]=r.charCodeAt(o);e(new Blob([i],{type:t.type}))})}function i(e){return 0===e.indexOf("blob:")?t(e):0===e.indexOf("data:")?r(e):null}function o(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}return{uriToBlob:i,blobToDataUri:o,parseDataUri:n}}),r(Ve,[c,p,z,We,d],function(e,t,n,r,i){var o=0;return function(a,s){function l(l,u){function d(e,t){var n,i;return 0===e.src.indexOf("blob:")?(i=s.getByUri(e.src),void(i&&t({image:e,blobInfo:i}))):(n=r.parseDataUri(e.src).data,i=s.findFirst(function(e){return e.base64()===n}),void(i?t({image:e,blobInfo:i}):r.uriToBlob(e.src).then(function(r){var i="blobid"+o++,a=s.create(i,r,n);s.add(a),t({image:e,blobInfo:a})})))}var f,h;return u||(u=n.constant(!0)),f=t.filter(l.getElementsByTagName("img"),function(e){var t=e.src;return i.fileApi?e.hasAttribute("data-mce-bogus")?!1:e.hasAttribute("data-mce-placeholder")?!1:t&&t!=i.transparentSrc?0===t.indexOf("blob:")?!a.isUploaded(t):0===t.indexOf("data:")?u(e):!1:!1:!1}),h=t.map(f,function(t){var n;return c[t.src]?new e(function(e){c[t.src].then(function(n){e({image:t,blobInfo:n.blobInfo})})}):(n=new e(function(e){d(t,e)}).then(function(e){return delete c[e.image.src],e})["catch"](function(e){return delete c[t.src],e}),c[t.src]=n,n)}),e.all(h)}var c={};return{findAll:l}}}),r($e,[p,z],function(e,t){return function(){function n(e,t,n){return{id:u(e),blob:u(t),base64:u(n),blobUri:u(URL.createObjectURL(t))}}function r(e){i(e.id())||c.push(e)}function i(e){return o(function(t){return t.id()===e})}function o(t){return e.filter(c,t)[0]}function a(e){return o(function(t){return t.blobUri()==e})}function s(t){c=e.filter(c,function(e){return e.blobUri()===t?(URL.revokeObjectURL(e.blobUri()),!1):!0})}function l(){e.each(c,function(e){URL.revokeObjectURL(e.blobUri())}),c=[]}var c=[],u=t.constant;return{create:n,add:r,get:i,getByUri:a,findFirst:o,removeByUri:s,destroy:l}}}),r(qe,[],function(){return function(){function e(e,t){return{status:e,resultUri:t}}function t(e){return e in d}function n(e){var t=d[e];return t?t.resultUri:null}function r(e){return t(e)?d[e].status===c:!1}function i(e){return t(e)?d[e].status===u:!1}function o(t){d[t]=e(c,null)}function a(t,n){d[t]=e(u,n)}function s(e){delete d[e]}function l(){d={}}var c=1,u=2,d={};return{hasBlobUri:t,getResultUri:n,isPending:r,isUploaded:i,markPending:o,markUploaded:a,removeFailed:s,destroy:l}}}),r(je,[p,Ue,Ve,$e,qe],function(e,t,n,r,i){return function(o){function a(e){return function(t){return o.selection?e(t):[]}}function s(e,t,n){var r=0;do r=e.indexOf(t,r),-1!==r&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1);while(-1!==r);return e}function l(e,t,n){return e=s(e,'src="'+t+'"','src="'+n+'"'),e=s(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')}function c(t,n){e.each(o.undoManager.data,function(e){e.content=l(e.content,t,n)})}function u(){return o.notificationManager.open({text:o.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}function d(e,t){y.removeByUri(e.src),c(e.src,t),o.$(e).attr({src:t,"data-mce-src":o.convertURL(t,"src")})}function f(n){return b||(b=new t(w,{url:x.images_upload_url,basePath:x.images_upload_base_path,credentials:x.images_upload_credentials,handler:x.images_upload_handler})),m().then(a(function(t){var r;return r=e.map(t,function(e){return e.blobInfo}),b.upload(r,u).then(a(function(r){return r=e.map(r,function(e,n){var r=t[n].image;return e.status&&o.settings.images_replace_blob_uris!==!1&&d(r,e.url),{element:r,status:e.status}}),n&&n(r),r}))}))}function h(e){return x.automatic_uploads!==!1?f(e):void 0}function p(e){return x.images_dataimg_filter?x.images_dataimg_filter(e):!0}function m(){return C||(C=new n(w,y)),C.findAll(o.getBody(),p).then(a(function(t){return e.each(t,function(e){c(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")}),t}))}function g(){y.destroy(),w.destroy(),C=b=null}function v(t){return t.replace(/src="(blob:[^"]+)"/g,function(t,n){var r=w.getResultUri(n);if(r)return'src="'+r+'"';var i=y.getByUri(n);return i||(i=e.reduce(o.editorManager.editors,function(e,t){return e||t.editorUpload.blobCache.getByUri(n)},null)),i?'src="data:'+i.blob().type+";base64,"+i.base64()+'"':t})}var y=new r,b,C,x=o.settings,w=new i;return o.on("setContent",function(){o.settings.automatic_uploads!==!1?h():m()}),o.on("RawSaveContent",function(e){e.content=v(e.content)}),o.on("getContent",function(e){e.source_view||"raw"==e.format||(e.content=v(e.content))}),o.on("PostRender",function(){o.parser.addNodeFilter("img",function(t){e.each(t,function(e){var t=e.attr("src");if(!y.getByUri(t)){var n=w.getResultUri(t);n&&e.attr("src",n)}})})}),{blobCache:y,uploadImages:f,uploadImagesAuto:h,scanForImages:m,destroy:g}}}),r(Ye,[k,$,_,T,g,W,u],function(e,t,n,r,i,o,a){var s=n.isContentEditableFalse;return function(t,n){function r(e,n){var r=o.collapse(e.getBoundingClientRect(),n),i,a,s,l,c;return"BODY"==t.tagName?(i=t.ownerDocument.documentElement,a=t.scrollLeft||i.scrollLeft,s=t.scrollTop||i.scrollTop):(c=t.getBoundingClientRect(),a=t.scrollLeft-c.left,s=t.scrollTop-c.top),r.left+=a,r.right+=a,r.top+=s,r.bottom+=s,r.width=1,l=e.offsetWidth-e.clientWidth,l>0&&(n&&(l*=-1),r.left+=l,r.right+=l),r}function l(){var n,r,o,a,s;for(n=i("*[contentEditable=false]",t),a=0;a<n.length;a++)r=n[a],o=r.previousSibling,e.endsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(s.length-1,1)),o=r.nextSibling,e.startsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(0,1));return null}function c(o,a){var l,c,f;return u(),n(a)?(g=e.insertBlock("p",a,o),l=r(a,o),i(g).css("top",l.top),m=i('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(l).appendTo(t),o&&m.addClass("mce-visual-caret-before"),d(),c=a.ownerDocument.createRange(),f=g.firstChild,c.setStart(f,0),c.setEnd(f,1),c):(g=e.insertInline(a,o),c=a.ownerDocument.createRange(),s(g.nextSibling)?(c.setStart(g,0),c.setEnd(g,0)):(c.setStart(g,1),c.setEnd(g,1)),c)}function u(){l(),g&&(e.remove(g),g=null),m&&(m.remove(),m=null),clearInterval(p)}function d(){p=a.setInterval(function(){i("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden")},500)}function f(){a.clearInterval(p)}function h(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"}var p,m,g;return{show:c,hide:u,getCss:h,destroy:f}}}),r(Xe,[p,_,W],function(e,t,n){function r(i){function o(t){return e.map(t,function(e){return e=n.clone(e),e.node=i,e})}if(e.isArray(i))return e.reduce(i,function(e,t){return e.concat(r(t))},[]);if(t.isElement(i))return o(i.getClientRects());if(t.isText(i)){var a=i.ownerDocument.createRange();return a.setStart(i,0),a.setEnd(i,i.data.length),o(a.getClientRects())}}return{getClientRects:r}}),r(Ke,[z,p,Xe,U,te,ne,$,W],function(e,t,n,r,i,o,a,s){function l(e,t,n,o){for(;o=i.findNode(o,e,r.isEditableCaretCandidate,t);)if(n(o))return}function c(e,r,i,o,a,s){function c(o){var s,l,c;for(c=n.getClientRects(o),-1==e&&(c=c.reverse()),s=0;s<c.length;s++)if(l=c[s],!i(l,h)){if(f.length>0&&r(l,t.last(f))&&u++,l.line=u,a(l))return!0;f.push(l)}}var u=0,d,f=[],h;return(h=t.last(s.getClientRects()))?(d=s.getNode(),c(d),l(e,o,c,d),f):f}function u(e,t){return t.line>e}function d(e,t){return t.line===e}function f(e,n,r,i){function l(n){return 1==e?t.last(n.getClientRects()):t.last(n.getClientRects())}var c=new o(n),u,d,f,h,p=[],m=0,g,v;1==e?(u=c.next,d=s.isBelow,f=s.isAbove,h=a.after(i)):(u=c.prev,d=s.isAbove,f=s.isBelow,h=a.before(i)),v=l(h);do if(h.isVisible()&&(g=l(h),!f(g,v))){if(p.length>0&&d(g,t.last(p))&&m++,g=s.clone(g),g.position=h,g.line=m,r(g))return p;p.push(g)}while(h=u(h));return p}var h=e.curry,p=h(c,-1,s.isAbove,s.isBelow),m=h(c,1,s.isBelow,s.isAbove);return{upUntil:p,downUntil:m,positionsUntil:f,isAboveLine:h(u),isLine:h(d)}}),r(Ge,[z,p,_,Xe,W,te,U],function(e,t,n,r,i,o,a){function s(e,t){return Math.abs(e.left-t)}function l(e,t){return Math.abs(e.right-t)}function c(e,n){function r(e,t){return e>=t.left&&e<=t.right}return t.reduce(e,function(e,t){var i,o;return i=Math.min(s(e,n),l(e,n)),o=Math.min(s(t,n),l(t,n)),r(n,t)?t:r(n,e)?e:o==i&&m(t.node)?t:i>o?t:e})}function u(e,t,n,r){for(;r=g(r,e,a.isEditableCaretCandidate,t);)if(n(r))return}function d(e,n){function o(e,i){var o;return o=t.filter(r.getClientRects(i),function(t){return!e(t,n)}),a=a.concat(o),0===o.length}var a=[];return a.push(n),u(-1,e,v(o,i.isAbove),n.node),u(1,e,v(o,i.isBelow),n.node),a}function f(e){return t.filter(t.toArray(e.getElementsByTagName("*")),m)}function h(e,t){return{node:e.node,before:s(e,t)<l(e,t)}}function p(e,n,i){var o,a;return o=r.getClientRects(f(e)),o=t.filter(o,function(e){return i>=e.top&&i<=e.bottom}),a=c(o,n),a&&(a=c(d(e,a),n),a&&m(a.node))?h(a,n):null}var m=n.isContentEditableFalse,g=o.findNode,v=e.curry;return{findClosestClientRect:c,findLineNodeRects:d,closestCaret:p}}),r(Je,[_,p,z],function(e,t,n){function r(e){function r(e){return i(e)}function a(t){f(e.getBody()).css("cursor",t)}function s(t){return t==g.element||e.dom.isChildOf(t,g.element)?!1:!i(t)}function l(t){var n,r,i,o,s=0,l=0,c,u,d,h;0===t.button&&(n=t.screenX-g.screenX,r=t.screenY-g.screenY,c=Math.max(Math.abs(n),Math.abs(r)),!g.dragging&&c>10&&(g.dragging=!0,a("default"),g.clone=g.element.cloneNode(!0),i=m.getPos(g.element),g.relX=g.clientX-i.x,g.relY=g.clientY-i.y,g.width=g.element.offsetWidth,g.height=g.element.offsetHeight,f(g.clone).css({width:g.width,height:g.height}).removeAttr("data-mce-selected"),g.ghost=f("<div>").css({position:"absolute",opacity:.5,overflow:"hidden",width:g.width,height:g.height}).attr({"data-mce-bogus":"all",unselectable:"on",contenteditable:"false"}).addClass("mce-drag-container mce-reset").append(g.clone).appendTo(e.getBody())[0],o=e.dom.getViewPort(e.getWin()),g.maxX=o.w,g.maxY=o.h),g.dragging&&(e._selectionOverrides.hideFakeCaret(),e.selection.placeCaretAt(t.clientX,t.clientY),u=g.clientX+n-g.relX,d=g.clientY+r+5,u+g.width>g.maxX&&(s=u+g.width-g.maxX),d+g.height>g.maxY&&(l=d+g.height-g.maxY),h="BODY"!=e.getBody().nodeName?e.getBody().getBoundingClientRect():{left:0,top:0},f(g.ghost).css({left:u-h.left,top:d-h.top,width:g.width-s,height:g.height-l})))}function c(t){var n;if(g.dragging&&(e.selection.setRng(e.selection.getSel().getRangeAt(0)),s(e.selection.getNode()))){var r=g.element;if(n=e.fire("drop",{targetClone:r,clientX:t.clientX,clientY:t.clientY}),n.isDefaultPrevented())return;r=n.targetClone,e.undoManager.transact(function(){e.insertContent(m.getOuterHTML(r)),f(g.element).remove()})}d()}function u(a){var s,u;if(d(),0===a.button&&(s=t.find(e.dom.getParents(a.target),n.or(i,o)),r(s))){if(u=e.fire("dragstart",{target:s}),u.isDefaultPrevented())return;e.on("mousemove",l),e.on("mouseup",c),h!=p&&(m.bind(h,"mousemove",l),m.bind(h,"mouseup",c)),g={screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY,element:s
}}}function d(){f(g.ghost).remove(),a(null),e.off("mousemove",l),e.off("mouseup",d),h!=p&&(m.unbind(h,"mousemove",l),m.unbind(h,"mouseup",d)),g={}}var f=e.$,h=document,p=e.getDoc(),m=e.dom,g={};e.on("mousedown",u),e.on("drop",function(t){var n="undefined"!=typeof t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(i(n)||i(e.dom.getContentEditableParent(n)))&&t.preventDefault()})}var i=e.isContentEditableFalse,o=e.isContentEditableTrue;return{init:r}}),r(Qe,[d,ne,$,k,te,Ye,Ke,Ge,_,T,W,I,z,p,u,Je,S],function(e,t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g){function v(e,t){for(;t=e(t);)if(t.isVisible())return t;return t}function y(c){function y(e){return c.dom.isBlock(e)}function S(e){e&&c.selection.setRng(e)}function k(){return c.selection.getRng()}function T(e,t){c.selection.scrollIntoView(e,t)}function R(e,t,n){var r;return r=c.fire("ShowCaret",{target:t,direction:e,before:n}),r.isDefaultPrevented()?null:(T(t,-1===e),ie.show(n,t))}function A(e){var t;return ie.hide(),t=c.fire("BeforeObjectSelected",{target:e}),t.isDefaultPrevented()?null:B(e)}function B(e){var t=e.ownerDocument.createRange();return t.selectNode(e),t}function D(e,t){var n=i.isInSameBlock(e,t);return!n&&l.isBr(e.getNode())?!0:n}function L(e,t){return t=i.normalizeRange(e,ee,t),-1==e?n.fromRangeStart(t):n.fromRangeEnd(t)}function M(e){return r.isCaretContainerBlock(e.startContainer)}function P(e,t,n,r){var i,o,a,s;return!r.collapsed&&(i=_(r),x(i))?R(e,i,-1==e):(s=M(r),o=L(e,r),n(o)?A(o.getNode(-1==e)):(o=t(o))?n(o)?R(e,o.getNode(-1==e),1==e):(a=t(o),n(a)&&D(o,a)?R(e,a.getNode(-1==e),1==e):s?V(o.toRange()):null):s?r:null)}function H(e,t,n){var r,i,o,l,c,u,d,f,p;if(p=_(n),r=L(e,n),i=t(ee,a.isAboveLine(1),r),o=h.filter(i,a.isLine(1)),c=h.last(r.getClientRects()),E(r)&&(p=r.getNode()),N(r)&&(p=r.getNode(!0)),!c)return null;if(u=c.left,l=s.findClosestClientRect(o,u),l&&x(l.node))return d=Math.abs(u-l.left),f=Math.abs(u-l.right),R(e,l.node,f>d);if(p){var m=a.positionsUntil(e,ee,a.isAboveLine(1),p);if(l=s.findClosestClientRect(h.filter(m,a.isLine(1)),u))return V(l.position.toRange());if(l=h.last(h.filter(m,a.isLine(0))))return V(l.position.toRange())}}function O(t,r){function i(){var t=c.dom.create(c.settings.forced_root_block);return(!e.ie||e.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}var o,a,s;if(r.collapsed&&c.settings.forced_root_block){if(o=c.dom.getParent(r.startContainer,"PRE"),!o)return;a=1==t?ne(n.fromRangeStart(r)):re(n.fromRangeStart(r)),a||(s=i(),1==t?c.$(o).after(s):c.$(o).before(s),c.selection.select(s,!0),c.selection.collapse())}}function I(e,t,n,r){var i;return(i=P(e,t,n,r))?i:(i=O(e,r),i?i:null)}function F(e,t,n){var r;return(r=H(e,t,n))?r:(r=O(e,n),r?r:null)}function z(){return se("*[data-mce-caret]")[0]}function U(e){e=se(e),e.attr("data-mce-caret")&&(ie.hide(),e.removeAttr("data-mce-caret"),e.removeAttr("data-mce-bogus"),e.removeAttr("style"),S(k()),T(e[0]))}function W(e){var t,r;return e=i.normalizeRange(1,ee,e),t=n.fromRangeStart(e),x(t.getNode())?R(1,t.getNode(),!t.isAtEnd()):x(t.getNode(!0))?R(1,t.getNode(!0),!1):(r=c.dom.getParent(t.getNode(),f.or(x,C)),x(r)?R(1,r,!1):(ie.hide(),null))}function V(e){var t;return e&&e.collapsed?(t=W(e),t?t:e):e}function $(e){var t,i,o,a;return x(e)?(x(e.previousSibling)&&(o=e.previousSibling),i=re(n.before(e)),i||(t=ne(n.after(e))),t&&w(t.getNode())&&(a=t.getNode()),r.remove(e.previousSibling),r.remove(e.nextSibling),c.dom.remove(e),J(),c.dom.isEmpty(c.getBody())?(c.setContent(""),void c.focus()):o?n.after(o).toRange():a?n.before(a).toRange():i?i.toRange():t?t.toRange():null):null}function q(e,t,n){var r=c.dom,i,o,a,s;if(-1===e){if(N(n)&&y(n.getNode(!0)))return $(n.getNode(!0))}else if(E(t)&&y(t.getNode()))return $(t.getNode());if(s=c.schema.getTextBlockElements(),i=r.getParent(t.getNode(),r.isBlock),o=r.getParent(n.getNode(),r.isBlock),i===o||!s[i.nodeName]||!s[o.nodeName])return null;for(;a=i.firstChild;)o.appendChild(a);return c.dom.remove(i),n.toRange()}function j(e,t,n,i){var o,a,s,l;return!i.collapsed&&(o=_(i),x(o))?V($(o)):(a=L(e,i),n(a)&&r.isCaretContainerBlock(i.startContainer)?(l=-1==e?te.prev(a):te.next(a),l?V(l.toRange()):i):t(a)?V($(a.getNode(-1==e))):(s=-1==e?te.prev(a):te.next(a),t(s)?-1===e?q(e,a,s):q(e,s,a):void 0))}function Y(){function e(e,t){var n=t(k());n&&!e.isDefaultPrevented()&&(e.preventDefault(),S(n))}function r(e){for(var t=c.getBody();e&&e!=t;){if(C(e)||x(e))return e;e=e.parentNode}return null}function i(e,t,n){return n.collapsed?!1:h.reduce(n.getClientRects(),function(n,r){return n||u.containsXY(r,e,t)},!1)}function o(e){var t=!1;e.on("touchstart",function(){t=!1}),e.on("touchmove",function(){t=!0}),e.on("touchend",function(e){var n=r(e.target);x(n)?t||(e.preventDefault(),G(A(n))):J()})}function l(){var e,t=r(c.selection.getNode());C(t)&&y(t)&&c.dom.isEmpty(t)&&(e=c.dom.create("br",{"data-mce-bogus":"1"}),c.$(t).empty().append(e),c.selection.setRng(n.before(e).toRange()))}function f(e){var t=z();if(t)return"compositionstart"==e.type?(e.preventDefault(),e.stopPropagation(),void U(t)):void("&nbsp;"!=t.innerHTML&&U(t))}function g(e){var t;switch(e.keyCode){case d.DELETE:t=l();break;case d.BACKSPACE:t=l()}t&&e.preventDefault()}var v=b(I,1,ne,E),w=b(I,-1,re,N),_=b(j,1,E,N),T=b(j,-1,N,E),B=b(F,-1,a.upUntil),D=b(F,1,a.downUntil);c.on("mouseup",function(){var e=k();e.collapsed&&S(W(e))}),c.on("click",function(e){var t;t=r(e.target),t&&x(t)&&e.preventDefault()});var L=function(e){var r=new t(e);if(!e.firstChild)return!1;var i=n.before(e.firstChild),o=r.next(i);return o&&!E(o)&&!N(o)},M=function(e,t){var n=c.dom.getParent(e,c.dom.isBlock),r=c.dom.getParent(t,c.dom.isBlock);return n===r},P=function(e,t){var n=c.dom.getParent(e,c.dom.isBlock),r=c.dom.getParent(t,c.dom.isBlock);return n&&!M(n,r)&&L(n)};o(c),c.on("mousedown",function(e){var t;if(t=r(e.target))x(t)?(e.preventDefault(),G(A(t))):(J(),i(e.clientX,e.clientY,c.selection.getRng())||c.selection.placeCaretAt(e.clientX,e.clientY));else{J(),ie.hide();var n=s.closestCaret(ee,e.clientX,e.clientY);n&&(P(e.target,n.node)||(e.preventDefault(),c.getBody().focus(),S(R(1,n.node,n.before))))}}),c.on("keydown",function(t){if(!d.modifierPressed(t))switch(t.keyCode){case d.RIGHT:e(t,v);break;case d.DOWN:e(t,D);break;case d.LEFT:e(t,w);break;case d.UP:e(t,B);break;case d.DELETE:e(t,_);break;case d.BACKSPACE:e(t,T);break;default:x(c.selection.getNode())&&t.preventDefault()}}),c.on("keyup compositionstart",function(e){f(e),g(e)},!0),c.on("cut",function(){var e=c.selection.getNode();x(e)&&p.setEditorTimeout(c,function(){S(V($(e)))})}),c.on("getSelectionRange",function(e){var t=e.range;if(ae){if(!ae.parentNode)return void(ae=null);t=t.cloneRange(),t.selectNode(ae),e.range=t}}),c.on("setSelectionRange",function(e){var t;t=G(e.range),t&&(e.range=t)}),c.on("focus",function(){p.setEditorTimeout(c,function(){c.selection.setRng(V(c.selection.getRng()))},0)}),m.init(c)}function X(){var e=c.contentStyles,t=".mce-content-body";e.push(ie.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;width: 100px;height: 100px;}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")}function K(e){return r.isCaretContainer(e.startContainer)||r.isCaretContainer(e.endContainer)}function G(t){var n,r=c.$,i=c.dom,o,a,s,l,u,d,f,h,p;if(!t)return J(),null;if(t.collapsed){if(J(),!K(t)){if(f=L(1,t),x(f.getNode()))return R(1,f.getNode(),!f.isAtEnd());if(x(f.getNode(!0)))return R(1,f.getNode(!0),!1)}return null}return s=t.startContainer,l=t.startOffset,u=t.endOffset,3==s.nodeType&&0==l&&x(s.parentNode)&&(s=s.parentNode,l=i.nodeIndex(s),s=s.parentNode),1!=s.nodeType?(J(),null):(u==l+1&&(n=s.childNodes[l]),x(n)?(h=p=n.cloneNode(!0),d=c.fire("ObjectSelected",{target:n,targetClone:h}),d.isDefaultPrevented()?(J(),null):(h=d.targetClone,o=r("#"+oe),0===o.length&&(o=r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",oe),o.appendTo(c.getBody())),t=c.dom.createRng(),h===p&&e.ie?(o.empty().append(g.ZWSP).append(h).append(g.ZWSP),t.setStart(o[0].firstChild,0),t.setEnd(o[0].lastChild,1)):(o.empty().append("\xa0").append(h).append("\xa0"),t.setStart(o[0].firstChild,1),t.setEnd(o[0].lastChild,0)),o.css({top:i.getPos(n,c.getBody()).y}),o[0].focus(),a=c.selection.getSel(),a.removeAllRanges(),a.addRange(t),c.$("*[data-mce-selected]").removeAttr("data-mce-selected"),n.setAttribute("data-mce-selected",1),ae=n,t)):(J(),null))}function J(){ae&&(ae.removeAttribute("data-mce-selected"),c.$("#"+oe).remove(),ae=null)}function Q(){ie.destroy(),ae=null}function Z(){ie.hide()}var ee=c.getBody(),te=new t(ee),ne=b(v,te.next),re=b(v,te.prev),ie=new o(c.getBody(),y),oe="sel-"+c.dom.uniqueId(),ae,se=c.$;return e.ceFalse&&(Y(),X()),{showBlockCaretContainer:U,hideFakeCaret:Z,destroy:Q}}var b=f.curry,C=l.isContentEditableTrue,x=l.isContentEditableFalse,w=l.isElement,N=i.isAfterContentEditableFalse,E=i.isBeforeContentEditableFalse,_=c.getSelectedNode;return y}),r(Ze,[],function(){var e=0,t=function(){var e=function(){return Math.round(4294967295*Math.random()).toString(36)},t=(new Date).getTime();return"s"+t.toString(36)+e()+e()+e()},n=function(n){return n+e++ +t()};return{uuid:n}}),r(et,[w,g,E,R,A,H,P,Y,J,Q,Z,ee,oe,ae,N,f,Ae,Pe,B,L,Oe,d,m,u,Ie,Fe,ze,je,Qe,Ze],function(e,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v,y,b,C,x,w,N,E,_,S,k,T,R,A){function B(e,t,i){var o=this,a,s,l;a=o.documentBaseUrl=i.documentBaseURL,s=i.baseURI,l=i.defaultSettings,t=P({id:e,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:a,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,padd_empty_editor:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",validate:!0,entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o,ie7_compat:!0},l,t),l&&l.external_plugins&&t.external_plugins&&(t.external_plugins=P({},l.external_plugins,t.external_plugins)),o.settings=t,r.language=t.language||"en",r.languageLoad=t.language_load,r.baseURL=i.baseURL,o.id=t.id=e,o.setDirty(!1),o.plugins={},o.documentBaseURI=new p(t.document_base_url||a,{base_uri:s}),o.baseURI=s,o.contentCSS=[],o.contentStyles=[],o.shortcuts=new k(o),o.loadedCSS={},o.editorCommands=new h(o),t.target&&(o.targetElm=t.target),o.suffix=i.suffix,o.editorManager=i,o.inline=t.inline,o.settings.content_editable=o.inline,t.cache_suffix&&(w.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),t.override_viewport===!1&&(w.overrideViewPort=!1),i.fire("SetupEditor",o),o.execCallback("setup",o),o.$=n.overrideDefaults(function(){return{context:o.inline?o.getBody():o.getDoc(),element:o.getBody()}})}var D=e.DOM,L=r.ThemeManager,M=r.PluginManager,P=N.extend,H=N.each,O=N.explode,I=N.inArray,F=N.trim,z=N.resolve,U=g.Event,W=w.gecko,V=w.ie;return B.prototype={render:function(){function e(){D.unbind(window,"ready",e),n.render()}function t(){var e=m.ScriptLoader;if(r.language&&"en"!=r.language&&!r.language_url&&(r.language_url=n.editorManager.baseURL+"/langs/"+r.language+".js"),r.language_url&&e.add(r.language_url),r.theme&&"function"!=typeof r.theme&&"-"!=r.theme.charAt(0)&&!L.urls[r.theme]){var t=r.theme_url;t=t?n.documentBaseURI.toAbsolute(t):"themes/"+r.theme+"/theme"+o+".js",L.load(r.theme,t)}N.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),H(r.external_plugins,function(e,t){M.load(t,e),r.plugins+=" "+t}),H(r.plugins.split(/[ ,]/),function(e){if(e=F(e),e&&!M.urls[e])if("-"==e.charAt(0)){e=e.substr(1,e.length);var t=M.dependencies(e);H(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=M.createUrl(t,e),M.load(e.resource,e)})}else M.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),e.loadQueue(function(){n.removed||n.init()})}var n=this,r=n.settings,i=n.id,o=n.suffix;if(!U.domLoaded)return void D.bind(window,"ready",e);if(n.getElement()&&w.contentEditable){r.inline?n.inline=!0:(n.orgVisibility=n.getElement().style.visibility,n.getElement().style.visibility="hidden");var a=n.getElement().form||D.getParent(i,"form");a&&(n.formElement=a,r.hidden_input&&!/TEXTAREA|INPUT/i.test(n.getElement().nodeName)&&(D.insertAfter(D.create("input",{type:"hidden",name:i}),i),n.hasHiddenInput=!0),n.formEventDelegate=function(e){n.fire(e.type,e)},D.bind(a,"submit reset",n.formEventDelegate),n.on("reset",function(){n.setContent(n.startContent,{format:"raw"})}),!r.submit_patch||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return n.editorManager.triggerSave(),n.setDirty(!1),a._mceOldSubmit(a)})),n.windowManager=new v(n),n.notificationManager=new y(n),"xml"==r.encoding&&n.on("GetContent",function(e){e.save&&(e.content=D.encode(e.content))}),r.add_form_submit_trigger&&n.on("submit",function(){n.initialized&&n.save()}),r.add_unload_trigger&&(n._beforeUnload=function(){!n.initialized||n.destroyed||n.isHidden()||n.save({format:"raw",no_events:!0,set_dirty:!1})},n.editorManager.on("BeforeUnload",n._beforeUnload)),n.editorManager.add(n),t()}},init:function(){function e(n){var r=M.get(n),i,o;if(i=M.urls[n]||t.documentBaseUrl.replace(/\/$/,""),n=F(n),r&&-1===I(m,n)){if(H(M.dependencies(n),function(t){e(t)}),t.plugins[n])return;o=new r(t,i,t.$),t.plugins[n]=o,o.init&&(o.init(t,i),m.push(n))}}var t=this,n=t.settings,r=t.getElement(),i,o,a,s,l,c,u,d,f,h,p,m=[];if(this.editorManager.i18n.setCode(n.language),t.rtl=n.rtl_ui||this.editorManager.i18n.rtl,n.aria_label=n.aria_label||D.getAttrib(r,"aria-label",t.getLang("aria.rich_text_area")),n.theme&&("function"!=typeof n.theme?(n.theme=n.theme.replace(/-/,""),c=L.get(n.theme),t.theme=new c(t,L.urls[n.theme]),t.theme.init&&t.theme.init(t,L.urls[n.theme]||t.documentBaseUrl.replace(/\/$/,""),t.$)):t.theme=n.theme),H(n.plugins.replace(/\-/g,"").split(/[ ,]/),e),n.render_ui&&t.theme&&(t.orgDisplay=r.style.display,"function"!=typeof n.theme?(i=n.width||r.style.width||r.offsetWidth,o=n.height||r.style.height||r.offsetHeight,a=n.min_height||100,h=/^[0-9\.]+(|px)$/i,h.test(""+i)&&(i=Math.max(parseInt(i,10),100)),h.test(""+o)&&(o=Math.max(parseInt(o,10),a)),l=t.theme.renderUI({targetNode:r,width:i,height:o,deltaWidth:n.delta_width,deltaHeight:n.delta_height}),n.content_editable||(o=(l.iframeHeight||o)+("number"==typeof o?l.deltaHeight||0:""),a>o&&(o=a))):(l=n.theme(t,r),l.editorContainer.nodeType&&(l.editorContainer=l.editorContainer.id=l.editorContainer.id||t.id+"_parent"),l.iframeContainer.nodeType&&(l.iframeContainer=l.iframeContainer.id=l.iframeContainer.id||t.id+"_iframecontainer"),o=l.iframeHeight||r.offsetHeight),t.editorContainer=l.editorContainer),n.content_css&&H(O(n.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),n.content_style&&t.contentStyles.push(n.content_style),n.content_editable)return r=s=l=null,t.initContentBody();if(t.iframeHTML=n.doctype+"<html><head>",n.document_base_url!=t.documentBaseUrl&&(t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />'),!w.caretAfter&&n.ie7_compat&&(t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" />'),t.iframeHTML+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',!/#$/.test(document.location.href))for(p=0;p<t.contentCSS.length;p++){var g=t.contentCSS[p];t.iframeHTML+='<link type="text/css" rel="stylesheet" href="'+N._addCacheSuffix(g)+'" />',t.loadedCSS[g]=!0}d=n.body_id||"tinymce",-1!=d.indexOf("=")&&(d=t.getParam("body_id","","hash"),d=d[t.id]||d),f=n.body_class||"",-1!=f.indexOf("=")&&(f=t.getParam("body_class","","hash"),f=f[t.id]||""),n.content_security_policy&&(t.iframeHTML+='<meta http-equiv="Content-Security-Policy" content="'+n.content_security_policy+'" />'),t.iframeHTML+='</head><body id="'+d+'" class="mce-content-body '+f+'" data-id="'+t.id+'"><br></body></html>';var v='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+t.id+'");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';document.domain!=location.hostname&&w.ie&&w.ie<12&&(u=v);var y=D.create("iframe",{id:t.id+"_ifr",frameBorder:"0",allowTransparency:"true",title:t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),style:{width:"100%",height:o,display:"block"}});if(y.onload=function(){y.onload=null,t.fire("load")},D.setAttrib(y,"src",u||'javascript:""'),t.contentAreaContainer=l.iframeContainer,t.iframeElement=y,s=D.add(l.iframeContainer,y),V)try{t.getDoc()}catch(b){s.src=u=v}l.editorContainer&&(D.get(l.editorContainer).style.display=t.orgDisplay,t.hidden=D.isHidden(l.editorContainer)),t.getElement().style.display="none",D.setAttrib(t.id,"aria-hidden",!0),u||t.initContentBody(),r=s=l=null},initContentBody:function(t){var n=this,r=n.settings,s=n.getElement(),h=n.getDoc(),p,m;r.inline||(n.getElement().style.visibility=n.orgVisibility),t||r.content_editable||(h.open(),h.write(n.iframeHTML),h.close()),r.content_editable&&(n.on("remove",function(){var e=this.getBody();D.removeClass(e,"mce-content-body"),D.removeClass(e,"mce-edit-focus"),D.setAttrib(e,"contentEditable",null)}),D.addClass(s,"mce-content-body"),n.contentDocument=h=r.content_document||document,n.contentWindow=r.content_window||window,n.bodyElement=s,r.content_document=r.content_window=null,r.root_name=s.nodeName.toLowerCase()),p=n.getBody(),p.disabled=!0,n.readonly=r.readonly,n.readonly||(n.inline&&"static"==D.getStyle(p,"position",!0)&&(p.style.position="relative"),p.contentEditable=n.getParam("content_editable_state",!0)),p.disabled=!1,n.editorUpload=new T(n),n.schema=new b(r),n.dom=new e(h,{keep_values:!0,url_converter:n.convertURL,url_converter_scope:n,hex_colors:r.force_hex_style_colors,class_filter:r.class_filter,update_styles:!0,root_element:n.inline?n.getBody():null,collect:r.content_editable,schema:n.schema,onSetAttrib:function(e){n.fire("SetAttrib",e)}}),n.parser=new C(r,n.schema),n.parser.addAttributeFilter("src,href,style,tabindex",function(e,t){for(var r=e.length,i,o=n.dom,a,s;r--;)if(i=e[r],a=i.attr(t),s="data-mce-"+t,!i.attributes.map[s]){if(0===a.indexOf("data:")||0===a.indexOf("blob:"))continue;"style"===t?(a=o.serializeStyle(o.parseStyle(a),i.name),a.length||(a=null),i.attr(s,a),i.attr(t,a)):"tabindex"===t?(i.attr(s,a),i.attr(t,null)):i.attr(s,n.convertURL(a,t,i.name))}}),n.parser.addNodeFilter("script",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("type")||"no/type",0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}),n.parser.addNodeFilter("#cdata",function(e){for(var t=e.length,n;t--;)n=e[t],n.type=8,n.name="#comment",n.value="[CDATA["+n.value+"]]"}),n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t=e.length,r,i=n.schema.getNonEmptyElements();t--;)r=e[t],r.isEmpty(i)&&(r.append(new o("br",1)).shortEnded=!0)}),n.serializer=new a(r,n),n.selection=new l(n.dom,n.getWin(),n.serializer,n),n.formatter=new c(n),n.undoManager=new u(n),n.forceBlocks=new f(n),n.enterKey=new d(n),n._nodeChangeDispatcher=new i(n),n._selectionOverrides=new R(n),n.fire("PreInit"),r.browser_spellcheck||r.gecko_spellcheck||(h.body.spellcheck=!1,D.setAttrib(p,"spellcheck","false")),n.quirks=new x(n),n.fire("PostRender"),r.directionality&&(p.dir=r.directionality),r.nowrap&&(p.style.whiteSpace="nowrap"),r.protect&&n.on("BeforeSetContent",function(e){H(r.protect,function(t){e.content=e.content.replace(t,function(e){return"<!--mce:protected "+escape(e)+"-->"})})}),n.on("SetContent",function(){n.addVisual(n.getBody())}),r.padd_empty_editor&&n.on("PostProcess",function(e){e.content=e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")}),n.load({initial:!0,format:"html"}),n.startContent=n.getContent({format:"raw"}),n.initialized=!0,n.bindPendingEventDelegates(),n.fire("init"),n.focus(!0),n.nodeChanged({initial:!0}),n.execCallback("init_instance_callback",n),n.on("compositionstart compositionend",function(e){n.composing="compositionstart"===e.type}),n.contentStyles.length>0&&(m="",H(n.contentStyles,function(e){m+=e+"\r\n"}),n.dom.addStyle(m)),H(n.contentCSS,function(e){n.loadedCSS[e]||(n.dom.loadCSS(e),n.loadedCSS[e]=!0)}),r.auto_focus&&E.setEditorTimeout(n,function(){var e;e=r.auto_focus===!0?n:n.editorManager.get(r.auto_focus),e.destroyed||e.focus()},100),s=h=p=null},focus:function(e){function t(e){return n.dom.getParent(e,function(e){return"true"===n.dom.getContentEditable(e)})}var n=this,r=n.selection,i=n.settings.content_editable,o,a,s=n.getDoc(),l=n.getBody(),c;if(!e){if(o=r.getRng(),o.item&&(a=o.item(0)),n.quirks.refreshContentEditable(),c=t(r.getNode()),n.$.contains(l,c))return c.focus(),r.normalize(),void n.editorManager.setActive(n);if(i||(w.opera||n.getBody().focus(),n.getWin().focus()),W||i){if(l.setActive)try{l.setActive()}catch(u){l.focus()}else l.focus();i&&r.normalize()}a&&a.ownerDocument==s&&(o=s.body.createControlRange(),o.addElement(a),o.select())}n.editorManager.setActive(n)},execCallback:function(e){var t=this,n=t.settings[e],r;if(n)return t.callbackLookup&&(r=t.callbackLookup[e])&&(n=r.func,r=r.scope),"string"==typeof n&&(r=n.replace(/\.\w+$/,""),r=r?z(r):0,n=z(n),t.callbackLookup=t.callbackLookup||{},t.callbackLookup[e]={func:n,scope:r}),n.apply(r||t,Array.prototype.slice.call(arguments,1))},translate:function(e){var t=this.settings.language||"en",n=this.editorManager.i18n;return e?(e=n.data[t+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,r){return n.data[t+"."+r]||"{#"+r+"}"}),this.editorManager.translate(e)):""},getLang:function(e,n){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(n!==t?n:"{#"+e+"}")},getParam:function(e,t,n){var r=e in this.settings?this.settings[e]:t,i;return"hash"===n?(i={},"string"==typeof r?H(r.indexOf("=")>0?r.split(/[;,](?![^=;,]*(?:[;,]|$))/):r.split(","),function(e){e=e.split("="),e.length>1?i[F(e[0])]=F(e[1]):i[F(e[0])]=F(e)}):i=r,i):r},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.text||t.icon||(t.icon=e),n.buttons=n.buttons||{},t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems=n.menuItems||{},n.menuItems[e]=t},addContextToolbar:function(e,t){var n=this,r;n.contextToolbars=n.contextToolbars||[],"string"==typeof e&&(r=e,e=function(e){return n.dom.is(e,r)}),n.contextToolbars.push({id:A.uuid("mcet"),predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){var e=this;e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable=!0:(D.show(e.getContainer()),D.hide(e.id)),e.load(),e.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(V&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e==e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(D.hide(e.getContainer()),D.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var n=this,r=n.getElement(),i;return r?(e=e||{},e.load=!0,i=n.setContent(r.value!==t?r.value:r.innerHTML,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,i):void 0},save:function(e){var t=this,n=t.getElement(),r,i;if(n&&t.initialized)return e=e||{},e.save=!0,e.element=n,r=e.content=t.getContent(e),e.no_events||t.fire("SaveContent",e),"raw"==e.format&&t.fire("RawSaveContent",e),r=e.content,/TEXTAREA|INPUT/i.test(n.nodeName)?n.value=r:(t.inline||(n.innerHTML=r),(i=D.getParent(t.id,"form"))&&H(i.elements,function(e){return e.name==t.id?(e.value=r,!1):void 0})),e.element=n=null,e.set_dirty!==!1&&t.setDirty(!1),r},setContent:function(e,t){var n=this,r=n.getBody(),i,o;return t=t||{},t.format=t.format||"html",t.set=!0,t.content=e,t.no_events||n.fire("BeforeSetContent",t),e=t.content,0===e.length||/^\s+$/.test(e)?(o=V&&11>V?"":'<br data-mce-bogus="1">',"TABLE"==r.nodeName?e="<tr><td>"+o+"</td></tr>":/^(UL|OL)$/.test(r.nodeName)&&(e="<li>"+o+"</li>"),i=n.settings.forced_root_block,i&&n.schema.isValidChild(r.nodeName.toLowerCase(),i.toLowerCase())?(e=o,e=n.dom.createHTML(i,n.settings.forced_root_block_attrs,e)):V||e||(e='<br data-mce-bogus="1">'),n.dom.setHTML(r,e),n.fire("SetContent",t)):("raw"!==t.format&&(e=new s({validate:n.validate},n.schema).serialize(n.parser.parse(e,{isRootContent:!0}))),t.content=F(e),n.dom.setHTML(r,t.content),t.no_events||n.fire("SetContent",t)),t.content},getContent:function(e){var t=this,n,r=t.getBody();return e=e||{},e.format=e.format||"html",e.get=!0,e.getInner=!0,e.no_events||t.fire("BeforeGetContent",e),n="raw"==e.format?t.serializer.getTrimmedContent():"text"==e.format?r.innerText||r.textContent:t.serializer.serialize(r,e),"text"!=e.format?e.content=F(n):e.content=n,e.no_events||t.fire("GetContent",e),e.content},insertContent:function(e,t){t&&(e=P({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!=t&&this.fire("dirty")},setMode:function(e){S.setMode(this,e)},getContainer:function(){var e=this;return e.container||(e.container=D.get(e.editorContainer||e.id+"_parent")),e.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=D.get(this.id)),this.targetElm},getWin:function(){var e=this,t;return e.contentWindow||(t=e.iframeElement,t&&(e.contentWindow=t.contentWindow)),e.contentWindow},getDoc:function(){var e=this,t;return e.contentDocument||(t=e.getWin(),t&&(e.contentDocument=t.document)),e.contentDocument},getBody:function(){return this.bodyElement||this.getDoc().body},convertURL:function(e,t,n){var r=this,i=r.settings;return i.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!i.convert_urls||n&&"LINK"==n.nodeName||0===e.indexOf("file:")||0===e.length?e:i.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,i.remove_script_host)},addVisual:function(e){var n=this,r=n.settings,i=n.dom,o;e=e||n.getBody(),n.hasVisual===t&&(n.hasVisual=r.visual),H(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return o=r.visual_table_class||"mce-item-table",t=i.getAttrib(e,"border"),void(t&&"0"!=t||!n.hasVisual?i.removeClass(e,o):i.addClass(e,o));case"A":return void(i.getAttrib(e,"href",!1)||(t=i.getAttrib(e,"name")||e.id,o=r.visual_anchor_class||"mce-item-anchor",t&&n.hasVisual?i.addClass(e,o):i.removeClass(e,o)))}}),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},remove:function(){var e=this;e.removed||(e.save(),e.removed=1,e.unbindAllNativeEvents(),e.hasHiddenInput&&D.remove(e.getElement().nextSibling),e.inline||(V&&10>V&&e.getDoc().execCommand("SelectAll",!1,null),D.setStyle(e.id,"display",e.orgDisplay),e.getBody().onload=null),e.fire("remove"),e.editorManager.remove(e),D.remove(e.getContainer()),e._selectionOverrides.destroy(),e.editorUpload.destroy(),e.destroy())},destroy:function(e){var t=this,n;if(!t.destroyed){if(!e&&!t.removed)return void t.remove();e||(t.editorManager.off("beforeunload",t._beforeUnload),t.theme&&t.theme.destroy&&t.theme.destroy(),t.selection.destroy(),t.dom.destroy()),n=t.formElement,n&&(n._mceOldSubmit&&(n.submit=n._mceOldSubmit,n._mceOldSubmit=null),D.unbind(n,"submit reset",t.formEventDelegate)),t.contentAreaContainer=t.formElement=t.container=t.editorContainer=null,t.bodyElement=t.contentDocument=t.contentWindow=null,t.iframeElement=t.targetElm=null,t.selection&&(t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null),t.destroyed=1}},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()}},P(B.prototype,_),B}),r(tt,[],function(){var e={},t="en";return{setCode:function(e){e&&(t=e,this.rtl=this.data[e]?"rtl"===this.data[e]._dir:!1)},getCode:function(){return t},rtl:!1,add:function(t,n){var r=e[t];r||(e[t]=r={});for(var i in n)r[i]=n[i];this.setCode(t)},translate:function(n){var r;if(r=e[t],r||(r={}),"undefined"==typeof n)return n;if("string"!=typeof n&&n.raw)return n.raw;if(n.push){var i=n.slice(1);n=(r[n[0]]||n[0]).replace(/\{([0-9]+)\}/g,function(e,t){return i[t]})}return(r[n]||n).replace(/{context:\w+}$/,"")},data:e}}),r(nt,[w,u,d],function(e,t,n){function r(e){function l(){try{return document.activeElement}catch(e){return document.body}}function c(e,t){if(t&&t.startContainer){if(!e.isChildOf(t.startContainer,e.getRoot())||!e.isChildOf(t.endContainer,e.getRoot()))return;return{startContainer:t.startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset}}return t}function u(e,t){var n;return t.startContainer?(n=e.getDoc().createRange(),n.setStart(t.startContainer,t.startOffset),n.setEnd(t.endContainer,t.endOffset)):n=t,n}function d(e){return!!s.getParent(e,r.isEditorUIElement)}function f(r){var f=r.editor;f.on("init",function(){(f.inline||n.ie)&&("onbeforedeactivate"in document&&n.ie<9?f.dom.bind(f.getBody(),"beforedeactivate",function(e){if(e.target==f.getBody())try{f.lastRng=f.selection.getRng()}catch(t){}}):f.on("nodechange mouseup keyup",function(e){var t=l();"nodechange"==e.type&&e.selectionChange||(t&&t.id==f.id+"_ifr"&&(t=f.getBody()),f.dom.isChildOf(t,f.getBody())&&(f.lastRng=f.selection.getRng()))}),n.webkit&&!i&&(i=function(){var t=e.activeEditor;if(t&&t.selection){var n=t.selection.getRng();n&&!n.collapsed&&(f.lastRng=n)}},s.bind(document,"selectionchange",i)))}),f.on("setcontent",function(){f.lastRng=null}),f.on("mousedown",function(){f.selection.lastFocusBookmark=null}),f.on("focusin",function(){var t=e.focusedEditor,n;f.selection.lastFocusBookmark&&(n=u(f,f.selection.lastFocusBookmark),f.selection.lastFocusBookmark=null,f.selection.setRng(n)),t!=f&&(t&&t.fire("blur",{focusedEditor:f}),e.setActive(f),e.focusedEditor=f,f.fire("focus",{blurredEditor:t}),f.focus(!0)),f.lastRng=null}),f.on("focusout",function(){t.setEditorTimeout(f,function(){var t=e.focusedEditor;d(l())||t!=f||(f.fire("blur",{focusedEditor:null}),e.focusedEditor=null,f.selection&&(f.selection.lastFocusBookmark=null))})}),o||(o=function(t){var n=e.activeEditor,r;r=t.target,n&&r.ownerDocument==document&&(n.selection&&r!=n.getBody()&&(n.selection.lastFocusBookmark=c(n.dom,n.lastRng)),r==document.body||d(r)||e.focusedEditor!=n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))},s.bind(document,"focusin",o)),f.inline&&!a&&(a=function(t){var n=e.activeEditor,r=n.dom;if(n.inline&&r&&!r.isChildOf(t.target,n.getBody())){var i=n.selection.getRng();i.collapsed||(n.lastRng=i)}},s.bind(document,"mouseup",a))}function h(t){e.focusedEditor==t.editor&&(e.focusedEditor=null),e.activeEditor||(s.unbind(document,"selectionchange",i),
    s.unbind(document,"focusin",o),s.unbind(document,"mouseup",a),i=o=a=null)}e.on("AddEditor",f),e.on("RemoveEditor",h)}var i,o,a,s=e.DOM;return r.isEditorUIElement=function(e){return-1!==e.className.toString().indexOf("mce-")},r}),r(rt,[et,g,w,ae,d,m,c,ue,tt,nt],function(e,t,n,r,i,o,a,s,l,c){function u(e){g(C.editors,function(t){"scroll"===e.type?t.fire("ScrollWindow",e):t.fire("ResizeWindow",e)})}function d(e,n){n!==x&&(n?t(window).on("resize scroll",u):t(window).off("resize scroll",u),x=n)}function f(e){var t=C.editors,n;delete t[e.id];for(var r=0;r<t.length;r++)if(t[r]==e){t.splice(r,1),n=!0;break}return C.activeEditor==e&&(C.activeEditor=t[0]),C.focusedEditor==e&&(C.focusedEditor=null),n}function h(e){return e&&e.initialized&&!(e.getContainer()||e.getBody()).parentNode&&(f(e),e.unbindAllNativeEvents(),e.destroy(!0),e.removed=!0,e=null),e}var p=n.DOM,m=o.explode,g=o.each,v=o.extend,y=0,b,C,x=!1;return C={$:t,majorVersion:"4",minorVersion:"4.1",releaseDate:"2016-07-26",editors:[],i18n:l,activeEditor:null,setup:function(){var e=this,t,n,i="",o,a;if(n=r.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/")),o=window.tinymce||window.tinyMCEPreInit)t=o.base||o.baseURL,i=o.suffix;else{for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){a=s[l].src;var u=a.substring(a.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)){-1!=u.indexOf(".min")&&(i=".min"),t=a.substring(0,a.lastIndexOf("/"));break}}!t&&document.currentScript&&(a=document.currentScript.src,-1!=a.indexOf(".min")&&(i=".min"),t=a.substring(0,a.lastIndexOf("/")))}e.baseURL=new r(n).toAbsolute(t),e.documentBaseURL=n,e.baseURI=new r(e.baseURL),e.suffix=i,e.focusManager=new c(e)},overrideDefaults:function(e){var t,n;t=e.base_url,t&&(this.baseURL=new r(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new r(this.baseURL)),n=e.suffix,e.suffix&&(this.suffix=n),this.defaultSettings=e},init:function(n){function r(e,t){return e.inline&&t.tagName.toLowerCase()in C}function i(e,t){window.console&&!window.test&&window.console.log(e,t)}function s(e){var t=e.id;return t||(t=e.name,t=t&&!p.get(t)?e.name:p.uniqueId(),e.setAttribute("id",t)),t}function l(e){var t=n[e];if(t)return t.apply(f,Array.prototype.slice.call(arguments,2))}function c(e,t){return t.constructor===RegExp?t.test(e.className):p.hasClass(e,t)}function u(e){var t,n=[];if(e.types)return g(e.types,function(e){n=n.concat(p.select(e.selector))}),n;if(e.selector)return p.select(e.selector);if(e.target)return[e.target];switch(e.mode){case"exact":t=e.elements||"",t.length>0&&g(m(t),function(e){var t;(t=p.get(e))?n.push(t):g(document.forms,function(t){g(t.elements,function(t){t.name===e&&(e="mce_editor_"+y++,p.setAttrib(t,"id",e),n.push(t))})})});break;case"textareas":case"specific_textareas":g(p.select("textarea"),function(t){e.editor_deselector&&c(t,e.editor_deselector)||e.editor_selector&&!c(t,e.editor_selector)||n.push(t)})}return n}function d(){function a(t,n,r){var i=new e(t,n,f);m.push(i),i.on("init",function(){++c===y.length&&x(m)}),i.targetElm=i.targetElm||r,i.render()}var c=0,m=[],y;return p.unbind(window,"ready",d),l("onpageload"),y=t.unique(u(n)),n.types?void g(n.types,function(e){o.each(y,function(t){return p.is(t,e.selector)?(a(s(t),v({},n,e),t),!1):!0})}):(o.each(y,function(e){h(f.get(e.id))}),y=o.grep(y,function(e){return!f.get(e.id)}),void g(y,function(e){r(n,e)?i("Could not initialize inline editor on invalid inline target element",e):a(s(e),n,e)}))}var f=this,b,C;C=o.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ");var x=function(e){b=e};return f.settings=n,p.bind(window,"ready",d),new a(function(e){b?e(b):x=function(t){e(t)}})},get:function(e){return arguments.length?e in this.editors?this.editors[e]:null:this.editors},add:function(e){var t=this,n=t.editors;return n[e.id]=e,n.push(e),d(n,!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),b||(b=function(){t.fire("BeforeUnload")},p.bind(window,"beforeunload",b)),e},createEditor:function(t,n){return this.add(new e(t,n,this))},remove:function(e){var t=this,n,r=t.editors,i;{if(e)return"string"==typeof e?(e=e.selector||e,void g(p.select(e),function(e){i=r[e.id],i&&t.remove(i)})):(i=e,r[i.id]?(f(i)&&t.fire("RemoveEditor",{editor:i}),r.length||p.unbind(window,"beforeunload",b),i.remove(),d(r,r.length>0),i):null);for(n=r.length-1;n>=0;n--)t.remove(r[n])}},execCommand:function(t,n,r){var i=this,o=i.get(r);switch(t){case"mceAddEditor":return i.get(r)||new e(r,i.settings,i).render(),!0;case"mceRemoveEditor":return o&&o.remove(),!0;case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(i.execCommand("mceAddEditor",0,r),!0)}return i.activeEditor?i.activeEditor.execCommand(t,n,r):!1},triggerSave:function(){g(this.editors,function(e){e.save()})},addI18n:function(e,t){l.add(e,t)},translate:function(e){return l.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!=e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},v(C,s),C.setup(),window.tinymce=window.tinyMCE=C,C}),r(it,[rt,m],function(e,t){var n=t.each,r=t.explode;e.on("AddEditor",function(e){var t=e.editor;t.on("preInit",function(){function e(e,t){n(t,function(t,n){t&&s.setStyle(e,n,t)}),s.rename(e,"span")}function i(e){s=t.dom,l.convert_fonts_to_spans&&n(s.select("font,u,strike",e.node),function(e){o[e.nodeName.toLowerCase()](s,e)})}var o,a,s,l=t.settings;l.inline_styles&&(a=r(l.font_size_legacy_values),o={font:function(t,n){e(n,{backgroundColor:n.style.backgroundColor,color:n.color,fontFamily:n.face,fontSize:a[parseInt(n.size,10)-1]})},u:function(n,r){"html4"===t.settings.schema&&e(r,{textDecoration:"underline"})},strike:function(t,n){e(n,{textDecoration:"line-through"})}},t.on("PreProcess SetContent",i))})})}),r(ot,[ue,m],function(e,t){var n={send:function(e){function r(){!e.async||4==i.readyState||o++>1e4?(e.success&&1e4>o&&200==i.status?e.success.call(e.success_scope,""+i.responseText,i,e):e.error&&e.error.call(e.error_scope,o>1e4?"TIMED_OUT":"GENERAL",i,e),i=null):setTimeout(r,10)}var i,o=0;if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=e.async!==!1,e.data=e.data||"",n.fire("beforeInitialize",{settings:e}),i=new XMLHttpRequest){if(i.overrideMimeType&&i.overrideMimeType(e.content_type),i.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(i.withCredentials=!0),e.content_type&&i.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&t.each(e.requestheaders,function(e){i.setRequestHeader(e.key,e.value)}),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i=n.fire("beforeSend",{xhr:i,settings:e}).xhr,i.send(e.data),!e.async)return r();setTimeout(r,10)}}};return t.extend(n,e),n}),r(at,[],function(){function e(t,n){var r,i,o,a;if(n=n||'"',null===t)return"null";if(o=typeof t,"string"==o)return i="\bb	t\nn\ff\rr\"\"''\\\\",n+t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=i.indexOf(t),r+1?"\\"+i.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e))})+n;if("object"==o){if(t.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(t)){for(r=0,i="[";r<t.length;r++)i+=(r>0?",":"")+e(t[r],n);return i+"]"}i="{";for(a in t)t.hasOwnProperty(a)&&(i+="function"!=typeof t[a]?(i.length>1?","+n:n)+a+n+":"+e(t[a],n):"");return i+"}"}return""+t}return{serialize:e,parse:function(e){try{return window[String.fromCharCode(101)+"val"]("("+e+")")}catch(t){}}}}),r(st,[at,ot,m],function(e,t,n){function r(e){this.settings=i({},e),this.count=0}var i=n.extend;return r.sendRPC=function(e){return(new r).send(e)},r.prototype={send:function(n){var r=n.error,o=n.success;n=i(this.settings,n),n.success=function(t,i){t=e.parse(t),"undefined"==typeof t&&(t={error:"JSON Parse error."}),t.error?r.call(n.error_scope||n.scope,t.error,i):o.call(n.success_scope||n.scope,t.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=e.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",t.send(n)}},r}),r(lt,[w],function(e){return{callbacks:{},count:0,send:function(n){var r=this,i=e.DOM,o=n.count!==t?n.count:r.count,a="tinymce_jsonp_"+o;r.callbacks[o]=function(e){i.remove(a),delete r.callbacks[o],n.callback(e)},i.add(i.doc.body,"script",{id:a,src:n.url,type:"text/javascript"}),r.count++}}}),r(ct,[],function(){function e(){s=[];for(var e in a)s.push(e);i.length=s.length}function n(){function n(e){var n,r;return r=e!==t?u+e:i.indexOf(",",u),-1===r||r>i.length?null:(n=i.substring(u,r),u=r+1,n)}var r,i,s,u=0;if(a={},c){o.load(l),i=o.getAttribute(l)||"";do{var d=n();if(null===d)break;if(r=n(parseInt(d,32)||0),null!==r){if(d=n(),null===d)break;s=n(parseInt(d,32)||0),r&&(a[r]=s)}}while(null!==r);e()}}function r(){var t,n="";if(c){for(var r in a)t=a[r],n+=(n?",":"")+r.length.toString(32)+","+r+","+t.length.toString(32)+","+t;o.setAttribute(l,n);try{o.save(l)}catch(i){}e()}}var i,o,a,s,l,c;try{if(window.localStorage)return localStorage}catch(u){}return l="tinymce",o=document.documentElement,c=!!o.addBehavior,c&&o.addBehavior("#default#userData"),i={key:function(e){return s[e]},getItem:function(e){return e in a?a[e]:null},setItem:function(e,t){a[e]=""+t,r()},removeItem:function(e){delete a[e],r()},clear:function(){a={},r()}},n(),i}),r(ut,[w,f,N,E,m,d],function(e,t,n,r,i,o){var a=window.tinymce;return a.DOM=e.DOM,a.ScriptLoader=n.ScriptLoader,a.PluginManager=r.PluginManager,a.ThemeManager=r.ThemeManager,a.dom=a.dom||{},a.dom.Event=t.Event,i.each(i,function(e,t){a[t]=e}),i.each("isOpera isWebKit isIE isGecko isMac".split(" "),function(e){a[e]=o[e.substr(2).toLowerCase()]}),{}}),r(dt,[se,m],function(e,t){return e.extend({Defaults:{firstControlClass:"first",lastControlClass:"last"},init:function(e){this.settings=t.extend({},this.Defaults,e)},preRender:function(e){e.bodyClasses.add(this.settings.containerClass)},applyClasses:function(e){var t=this,n=t.settings,r,i,o,a;r=n.firstControlClass,i=n.lastControlClass,e.each(function(e){e.classes.remove(r).remove(i).add(n.controlClass),e.visible()&&(o||(o=e),a=e)}),o&&o.classes.add(r),a&&a.classes.add(i)},renderHtml:function(e){var t=this,n="";return t.applyClasses(e.items()),e.items().each(function(e){n+=e.renderHtml()}),n},recalc:function(){},postRender:function(){},isNative:function(){return!1}})}),r(ft,[dt],function(e){return e.extend({Defaults:{containerClass:"abs-layout",controlClass:"abs-layout-item"},recalc:function(e){e.items().filter(":visible").each(function(e){var t=e.settings;e.layoutRect({x:t.x,y:t.y,w:t.w,h:t.h}),e.recalc&&e.recalc()})},renderHtml:function(e){return'<div id="'+e._id+'-absend" class="'+e.classPrefix+'abs-end"></div>'+this._super(e)}})}),r(ht,[De],function(e){return e.extend({Defaults:{classes:"widget btn",role:"button"},init:function(e){var t=this,n;t._super(e),e=t.settings,n=t.settings.size,t.on("click mousedown",function(e){e.preventDefault()}),t.on("touchstart",function(e){t.fire("click",e),e.preventDefault()}),e.subtype&&t.classes.add(e.subtype),n&&t.classes.add("btn-"+n),e.icon&&t.icon(e.icon)},icon:function(e){return arguments.length?(this.state.set("icon",e),this):this.state.get("icon")},repaint:function(){var e=this.getEl().firstChild,t;e&&(t=e.style,t.width=t.height="100%"),this._super()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("icon"),i,o=e.state.get("text"),a="";return i=e.settings.image,i?(r="none","string"!=typeof i&&(i=window.getSelection?i[0]:i[1]),i=" style=\"background-image: url('"+i+"')\""):i="",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),r=e.settings.icon?n+"ico "+n+"i-"+r:"",'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button role="presentation" type="button" tabindex="-1">'+(r?'<i class="'+r+'"'+i+"></i>":"")+a+"</button></div>"},bindStates:function(){function e(e){var i=n("span."+r,t.getEl());e?(i[0]||(n("button:first",t.getEl()).append('<span class="'+r+'"></span>'),i=n("span."+r,t.getEl())),i.html(t.encode(e))):i.remove(),t.classes.toggle("btn-has-text",!!e)}var t=this,n=t.$,r=t.classPrefix+"txt";return t.state.on("change:text",function(t){e(t.value)}),t.state.on("change:icon",function(n){var r=n.value,i=t.classPrefix;t.settings.icon=r,r=r?i+"ico "+i+"i-"+t.settings.icon:"";var o=t.getEl().firstChild,a=o.getElementsByTagName("i")[0];r?(a&&a==o.firstChild||(a=document.createElement("i"),o.insertBefore(a,o.firstChild)),a.className=r):a&&o.removeChild(a),e(t.state.get("text"))}),t._super()}})}),r(pt,[xe],function(e){return e.extend({Defaults:{defaultType:"button",role:"group"},renderHtml:function(){var e=this,t=e._layout;return e.classes.add("btn-group"),e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(mt,[De],function(e){return e.extend({Defaults:{classes:"checkbox",role:"checkbox",checked:!1},init:function(e){var t=this;t._super(e),t.on("click mousedown",function(e){e.preventDefault()}),t.on("click",function(e){e.preventDefault(),t.disabled()||t.checked(!t.checked())}),t.checked(t.settings.checked)},checked:function(e){return arguments.length?(this.state.set("checked",e),this):this.state.get("checked")},value:function(e){return arguments.length?this.checked(e):this.checked()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'" unselectable="on" aria-labelledby="'+t+'-al" tabindex="-1"><i class="'+n+"ico "+n+'i-checkbox"></i><span id="'+t+'-al" class="'+n+'label">'+e.encode(e.state.get("text"))+"</span></div>"},bindStates:function(){function e(e){t.classes.toggle("checked",e),t.aria("checked",e)}var t=this;return t.state.on("change:text",function(e){t.getEl("al").firstChild.data=t.translate(e.value)}),t.state.on("change:checked change:value",function(n){t.fire("change"),e(n.value)}),t.state.on("change:icon",function(e){var n=e.value,r=t.classPrefix;if("undefined"==typeof n)return t.settings.icon;t.settings.icon=n,n=n?r+"ico "+r+"i-"+t.settings.icon:"";var i=t.getEl().firstChild,o=i.getElementsByTagName("i")[0];n?(o&&o==i.firstChild||(o=document.createElement("i"),i.insertBefore(o,i.firstChild)),o.className=n):o&&i.removeChild(o)}),t.state.get("checked")&&e(!0),t._super()}})}),r(gt,[De,be,pe,g],function(e,t,n,r){return e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.classes.add("combobox"),t.subinput=!0,t.ariaTarget="inp",e.menu=e.menu||e.values,e.menu&&(e.icon="caret"),t.on("click",function(n){var i=n.target,o=t.getEl();if(r.contains(o,i)||i==o)for(;i&&i!=o;)i.id&&-1!=i.id.indexOf("-open")&&(t.fire("action"),e.menu&&(t.showMenu(),n.aria&&t.menu.items()[0].focus())),i=i.parentNode}),t.on("keydown",function(e){"INPUT"==e.target.nodeName&&13==e.keyCode&&t.parents().reverse().each(function(n){var r=t.state.get("value"),i=t.getEl("inp").value;return e.preventDefault(),t.state.set("value",i),r!=i&&t.fire("change"),n.hasEventListeners("submit")&&n.toJSON?(n.fire("submit",{data:n.toJSON()}),!1):void 0})}),t.on("keyup",function(e){"INPUT"==e.target.nodeName&&t.state.set("value",e.target.value)})},showMenu:function(){var e=this,n=e.settings,r;e.menu||(r=n.menu||[],r.length?r={type:"menu",items:r}:r.type=r.type||"menu",e.menu=t.create(r).parent(e).renderTo(e.getContainerElm()),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control===e.menu&&e.focus()}),e.menu.on("show hide",function(t){t.control.items().each(function(t){t.active(t.value()==e.value())})}).fire("show"),e.menu.on("select",function(t){e.value(t.control.value())}),e.on("focusin",function(t){"INPUT"==t.target.tagName.toUpperCase()&&e.menu.hide()}),e.aria("expanded",!0)),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},focus:function(){this.getEl("inp").focus()},repaint:function(){var e=this,t=e.getEl(),i=e.getEl("open"),o=e.layoutRect(),a,s;a=i?o.w-n.getSize(i).width-10:o.w-10;var l=document;return l.all&&(!l.documentMode||l.documentMode<=8)&&(s=e.layoutRect().h-2+"px"),r(t.firstChild).css({width:a,lineHeight:s}),e._super(),e},postRender:function(){var e=this;return r(this.getEl("inp")).on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)}),e._super()},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.classPrefix,i=e.state.get("value")||"",o,a,s="",l="";return"spellcheck"in n&&(l+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(l+=' maxlength="'+n.maxLength+'"'),n.size&&(l+=' size="'+n.size+'"'),n.subtype&&(l+=' type="'+n.subtype+'"'),e.disabled()&&(l+=' disabled="disabled"'),o=n.icon,o&&"caret"!=o&&(o=r+"ico "+r+"i-"+n.icon),a=e.state.get("text"),(o||a)&&(s='<div id="'+t+'-open" class="'+r+"btn "+r+'open" tabIndex="-1" role="button"><button id="'+t+'-action" type="button" hidefocus="1" tabindex="-1">'+("caret"!=o?'<i class="'+o+'"></i>':'<i class="'+r+'caret"></i>')+(a?(o?" ":"")+a:"")+"</button></div>",e.classes.add("has-open")),'<div id="'+t+'" class="'+e.classes+'"><input id="'+t+'-inp" class="'+r+'textbox" value="'+e.encode(i,!1)+'" hidefocus="1"'+l+' placeholder="'+e.encode(n.placeholder)+'" />'+s+"</div>"},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl("inp").value),this.state.get("value"))},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl("inp").value!=t.value&&(e.getEl("inp").value=t.value)}),e.state.on("change:disabled",function(t){e.getEl("inp").disabled=t.value}),e._super()},remove:function(){r(this.getEl("inp")).off(),this._super()}})}),r(vt,[gt],function(e){return e.extend({init:function(e){var t=this;e.spellcheck=!1,e.onaction&&(e.icon="none"),t._super(e),t.classes.add("colorbox"),t.on("change keyup postrender",function(){t.repaintColor(t.value())})},repaintColor:function(e){var t=this.getEl().getElementsByTagName("i")[0];if(t)try{t.style.background=e}catch(n){}},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.state.get("rendered")&&e.repaintColor(t.value)}),e._super()}})}),r(yt,[ht,ke],function(e,t){return e.extend({showPanel:function(){var e=this,n=e.settings;if(e.active(!0),e.panel)e.panel.show();else{var r=n.panel;r.type&&(r={layout:"grid",items:r}),r.role=r.role||"dialog",r.popover=!0,r.autohide=!0,r.ariaRoot=!0,e.panel=new t(r).on("hide",function(){e.active(!1)}).on("cancel",function(t){t.stopPropagation(),e.focus(),e.hidePanel()}).parent(e).renderTo(e.getContainerElm()),e.panel.fire("show"),e.panel.reflow()}e.panel.moveRel(e.getEl(),n.popoverAlign||(e.isRtl()?["bc-tr","bc-tc"]:["bc-tl","bc-tc"]))},hidePanel:function(){var e=this;e.panel&&e.panel.hide()},postRender:function(){var e=this;return e.aria("haspopup",!0),e.on("click",function(t){t.control===e&&(e.panel&&e.panel.visible()?e.hidePanel():(e.showPanel(),e.panel.focus(!!t.aria)))}),e._super()},remove:function(){return this.panel&&(this.panel.remove(),this.panel=null),this._super()}})}),r(bt,[yt,w],function(e,t){var n=t.DOM;return e.extend({init:function(e){this._super(e),this.classes.add("colorbutton")},color:function(e){return e?(this._color=e,this.getEl("preview").style.backgroundColor=e,this):this._color},resetColor:function(){return this._color=null,this.getEl("preview").style.backgroundColor=null,this},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("text"),i=e.settings.icon?n+"ico "+n+"i-"+e.settings.icon:"",o=e.settings.image?" style=\"background-image: url('"+e.settings.image+"')\"":"",a="";return r&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(r)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+'<span id="'+t+'-preview" class="'+n+'preview"></span>'+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1"> <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(r){r.aria&&"down"==r.aria.key||r.control!=e||n.getParent(r.target,"."+e.classPrefix+"open")||(r.stopImmediatePropagation(),t.call(e,r))}),delete e.settings.onclick,e._super()}})}),r(Ct,[],function(){function e(e){function i(e,i,o){var a,s,l,c,u,d;return a=0,s=0,l=0,e/=255,i/=255,o/=255,u=t(e,t(i,o)),d=n(e,n(i,o)),u==d?(l=u,{h:0,s:0,v:100*l}):(c=e==u?i-o:o==u?e-i:o-e,a=e==u?3:o==u?1:5,a=60*(a-c/(d-u)),s=(d-u)/d,l=d,{h:r(a),s:r(100*s),v:r(100*l)})}function o(e,i,o){var a,s,l,c;if(e=(parseInt(e,10)||0)%360,i=parseInt(i,10)/100,o=parseInt(o,10)/100,i=n(0,t(i,1)),o=n(0,t(o,1)),0===i)return void(d=f=h=r(255*o));switch(a=e/60,s=o*i,l=s*(1-Math.abs(a%2-1)),c=o-s,Math.floor(a)){case 0:d=s,f=l,h=0;break;case 1:d=l,f=s,h=0;break;case 2:d=0,f=s,h=l;break;case 3:d=0,f=l,h=s;break;case 4:d=l,f=0,h=s;break;case 5:d=s,f=0,h=l;break;default:d=f=h=0}d=r(255*(d+c)),f=r(255*(f+c)),h=r(255*(h+c))}function a(){function e(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+e(d)+e(f)+e(h)}function s(){return{r:d,g:f,b:h}}function l(){return i(d,f,h)}function c(e){var t;return"object"==typeof e?"r"in e?(d=e.r,f=e.g,h=e.b):"v"in e&&o(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(d=parseInt(t[1],10),f=parseInt(t[2],10),h=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(d=parseInt(t[1],16),f=parseInt(t[2],16),h=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(d=parseInt(t[1]+t[1],16),f=parseInt(t[2]+t[2],16),h=parseInt(t[3]+t[3],16)),d=0>d?0:d>255?255:d,f=0>f?0:f>255?255:f,h=0>h?0:h>255?255:h,u}var u=this,d=0,f=0,h=0;e&&c(e),u.toRgb=s,u.toHsv=l,u.toHex=a,u.parse=c}var t=Math.min,n=Math.max,r=Math.round;return e}),r(xt,[De,we,pe,Ct],function(e,t,n,r){return e.extend({Defaults:{classes:"widget colorpicker"},init:function(e){this._super(e)},postRender:function(){function e(e,t){var r=n.getPos(e),i,o;return i=t.pageX-r.x,o=t.pageY-r.y,i=Math.max(0,Math.min(i/e.clientWidth,1)),o=Math.max(0,Math.min(o/e.clientHeight,1)),{x:i,y:o}}function i(e,t){var i=(360-e.h)/360;n.css(d,{top:100*i+"%"}),t||n.css(h,{left:e.s+"%",top:100-e.v+"%"}),f.style.background=new r({s:100,v:100,h:e.h}).toHex(),s.color().parse({s:e.s,v:e.v,h:e.h})}function o(t){var n;n=e(f,t),c.s=100*n.x,c.v=100*(1-n.y),i(c),s.fire("change")}function a(t){var n;n=e(u,t),c=l.toHsv(),c.h=360*(1-n.y),i(c,!0),s.fire("change")}var s=this,l=s.color(),c,u,d,f,h;u=s.getEl("h"),d=s.getEl("hp"),f=s.getEl("sv"),h=s.getEl("svp"),s._repaint=function(){c=l.toHsv(),i(c)},s._super(),s._svdraghelper=new t(s._id+"-sv",{start:o,drag:o}),s._hdraghelper=new t(s._id+"-h",{start:a,drag:a}),s._repaint()},rgb:function(){return this.color().toRgb()},value:function(e){var t=this;return arguments.length?(t.color().parse(e),void(t._rendered&&t._repaint())):t.color().toHex()},color:function(){return this._color||(this._color=new r),this._color},renderHtml:function(){function e(){var e,t,n="",i,a;for(i="filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=",a=o.split(","),e=0,t=a.length-1;t>e;e++)n+='<div class="'+r+'colorpicker-h-chunk" style="height:'+100/t+"%;"+i+a[e]+",endColorstr="+a[e+1]+");-ms-"+i+a[e]+",endColorstr="+a[e+1]+')"></div>';return n}var t=this,n=t._id,r=t.classPrefix,i,o="#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000",a="background: -ms-linear-gradient(top,"+o+");background: linear-gradient(to bottom,"+o+");";return i='<div id="'+n+'-h" class="'+r+'colorpicker-h" style="'+a+'">'+e()+'<div id="'+n+'-hp" class="'+r+'colorpicker-h-marker"></div></div>','<div id="'+n+'" class="'+t.classes+'"><div id="'+n+'-sv" class="'+r+'colorpicker-sv"><div class="'+r+'colorpicker-overlay1"><div class="'+r+'colorpicker-overlay2"><div id="'+n+'-svp" class="'+r+'colorpicker-selector1"><div class="'+r+'colorpicker-selector2"></div></div></div></div></div>'+i+"</div>"}})}),r(wt,[De],function(e){return e.extend({init:function(e){var t=this;e.delimiter||(e.delimiter="\xbb"),t._super(e),t.classes.add("path"),t.canFocus=!0,t.on("click",function(e){var n,r=e.target;(n=r.getAttribute("data-index"))&&t.fire("select",{value:t.row()[n],index:n})}),t.row(t.settings.row)},focus:function(){var e=this;return e.getEl().firstChild.focus(),e},row:function(e){return arguments.length?(this.state.set("row",e),this):this.state.get("row")},renderHtml:function(){var e=this;return'<div id="'+e._id+'" class="'+e.classes+'">'+e._getDataPathHtml(e.state.get("row"))+"</div>"},bindStates:function(){var e=this;return e.state.on("change:row",function(t){e.innerHtml(e._getDataPathHtml(t.value))}),e._super()},_getDataPathHtml:function(e){var t=this,n=e||[],r,i,o="",a=t.classPrefix;for(r=0,i=n.length;i>r;r++)o+=(r>0?'<div class="'+a+'divider" aria-hidden="true"> '+t.settings.delimiter+" </div>":"")+'<div role="button" class="'+a+"path-item"+(r==i-1?" "+a+"last":"")+'" data-index="'+r+'" tabindex="-1" id="'+t._id+"-"+r+'" aria-level="'+r+'">'+n[r].name+"</div>";return o||(o='<div class="'+a+'path-item">\xa0</div>'),o}})}),r(Nt,[wt],function(e){return e.extend({postRender:function(){function e(e){if(1===e.nodeType){if("BR"==e.nodeName||e.getAttribute("data-mce-bogus"))return!0;if("bookmark"===e.getAttribute("data-mce-type"))return!0}return!1}var t=this,n=t.settings.editor;return n.settings.elementpath!==!1&&(t.on("select",function(e){n.focus(),n.selection.select(this.row()[e.index].element),n.nodeChanged()}),n.on("nodeChange",function(r){for(var i=[],o=r.parents,a=o.length;a--;)if(1==o[a].nodeType&&!e(o[a])){var s=n.fire("ResolveName",{name:o[a].nodeName.toLowerCase(),target:o[a]});if(s.isDefaultPrevented()||i.push({name:s.name,element:o[a]}),s.isPropagationStopped())break}t.row(i)})),t._super()}})}),r(Et,[xe],function(e){return e.extend({Defaults:{layout:"flex",align:"center",defaults:{flex:1}},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.classes.add("formitem"),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<div id="'+e._id+'-title" class="'+n+'title">'+e.settings.title+"</div>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(_t,[xe,Et,m],function(e,t,n){return e.extend({Defaults:{containerCls:"form",layout:"flex",direction:"column",align:"stretch",flex:1,padding:20,labelGap:30,spacing:10,callbacks:{submit:function(){this.submit()}}},preRender:function(){var e=this,r=e.items();e.settings.formItemDefaults||(e.settings.formItemDefaults={layout:"flex",autoResize:"overflow",defaults:{flex:1}}),r.each(function(r){var i,o=r.settings.label;o&&(i=new t(n.extend({items:{type:"label",id:r._id+"-l",text:o,flex:0,forId:r._id,disabled:r.disabled()}},e.settings.formItemDefaults)),i.type="formitem",r.aria("labelledby",r._id+"-l"),"undefined"==typeof r.settings.flex&&(r.settings.flex=1),e.replace(r,i),i.add(r))})},submit:function(){return this.fire("submit",{data:this.toJSON()})},postRender:function(){var e=this;e._super(),e.fromJSON(e.settings.data)},bindStates:function(){function e(){var e=0,n=[],r,i,o;if(t.settings.labelGapCalc!==!1)for(o="children"==t.settings.labelGapCalc?t.find("formitem"):t.items(),o.filter("formitem").each(function(t){var r=t.items()[0],i=r.getEl().clientWidth;e=i>e?i:e,n.push(r)}),i=t.settings.labelGap||0,r=n.length;r--;)n[r].settings.minWidth=e+i}var t=this;t._super(),t.on("show",e),e()}})}),r(St,[_t],function(e){return e.extend({Defaults:{containerCls:"fieldset",layout:"flex",direction:"column",align:"stretch",flex:1,padding:"25 15 5 15",labelGap:30,spacing:10,border:1},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.preRender(),t.preRender(e),'<fieldset id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<legend id="'+e._id+'-title" class="'+n+'fieldset-title">'+e.settings.title+"</legend>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></fieldset>"}})}),r(kt,[gt,m],function(e,t){return e.extend({init:function(e){var n=this,r=tinymce.activeEditor,i=r.settings,o,a,s;e.spellcheck=!1,s=i.file_picker_types||i.file_browser_callback_types,s&&(s=t.makeMap(s,/[, ]/)),s&&!s[e.filetype]||(a=i.file_picker_callback,!a||s&&!s[e.filetype]?(a=i.file_browser_callback,!a||s&&!s[e.filetype]||(o=function(){a(n.getEl("inp").id,n.value(),e.filetype,window)})):o=function(){var i=n.fire("beforecall").meta;i=t.extend({filetype:e.filetype},i),a.call(r,function(e,t){n.value(e).fire("change",{meta:t})},n.value(),i)}),o&&(e.icon="browse",e.onaction=o),n._super(e)}})}),r(Tt,[ft],function(e){return e.extend({recalc:function(e){var t=e.layoutRect(),n=e.paddingBox;e.items().filter(":visible").each(function(e){e.layoutRect({x:n.left,y:n.top,w:t.innerW-n.right-n.left,h:t.innerH-n.top-n.bottom}),e.recalc&&e.recalc()})}})}),r(Rt,[ft],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v=[],y,b,C,x,w,N,E,_,S,k,T,R,A,B,D,L,M,P,H,O,I,F,z=Math.max,U=Math.min;for(r=e.items().filter(":visible"),i=e.layoutRect(),o=e.paddingBox,a=e.settings,f=e.isRtl()?a.direction||"row-reversed":a.direction,s=a.align,l=e.isRtl()?a.pack||"end":a.pack,c=a.spacing||0,"row-reversed"!=f&&"column-reverse"!=f||(r=r.set(r.toArray().reverse()),f=f.split("-")[0]),"column"==f?(S="y",E="h",_="minH",k="maxH",R="innerH",T="top",A="deltaH",B="contentH",H="left",M="w",D="x",L="innerW",P="minW",O="right",I="deltaW",F="contentW"):(S="x",E="w",_="minW",k="maxW",R="innerW",T="left",A="deltaW",B="contentW",H="top",M="h",D="y",L="innerH",P="minH",O="bottom",I="deltaH",F="contentH"),d=i[R]-o[T]-o[T],N=u=0,t=0,n=r.length;n>t;t++)h=r[t],p=h.layoutRect(),m=h.settings,g=m.flex,d-=n-1>t?c:0,g>0&&(u+=g,p[k]&&v.push(h),p.flex=g),d-=p[_],y=o[H]+p[P]+o[O],y>N&&(N=y);if(x={},0>d?x[_]=i[_]-d+i[A]:x[_]=i[R]-d+i[A],x[P]=N+i[I],x[B]=i[R]-d,x[F]=N,x.minW=U(x.minW,i.maxW),x.minH=U(x.minH,i.maxH),x.minW=z(x.minW,i.startMinWidth),x.minH=z(x.minH,i.startMinHeight),!i.autoResize||x.minW==i.minW&&x.minH==i.minH){for(C=d/u,t=0,n=v.length;n>t;t++)h=v[t],p=h.layoutRect(),b=p[k],y=p[_]+p.flex*C,y>b?(d-=p[k]-p[_],u-=p.flex,p.flex=0,p.maxFlexSize=b):p.maxFlexSize=0;for(C=d/u,w=o[T],x={},0===u&&("end"==l?w=d+o[T]:"center"==l?(w=Math.round(i[R]/2-(i[R]-d)/2)+o[T],0>w&&(w=o[T])):"justify"==l&&(w=o[T],c=Math.floor(d/(r.length-1)))),x[D]=o[H],t=0,n=r.length;n>t;t++)h=r[t],p=h.layoutRect(),y=p.maxFlexSize||p[_],"center"===s?x[D]=Math.round(i[L]/2-p[M]/2):"stretch"===s?(x[M]=z(p[P]||0,i[L]-o[H]-o[O]),x[D]=o[H]):"end"===s&&(x[D]=i[L]-p[M]-o.top),p.flex>0&&(y+=p.flex*C),x[E]=y,x[S]=w,h.layoutRect(x),h.recalc&&h.recalc(),w+=y+c}else if(x.w=x.minW,x.h=x.minH,e.layoutRect(x),this.recalc(e),null===e._lastRect){var W=e.parent();W&&(W._lastRect=null,W.recalc())}}})}),r(At,[dt],function(e){return e.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(e){e.items().filter(":visible").each(function(e){e.recalc&&e.recalc()})},isNative:function(){return!0}})}),r(Bt,[ye,De,ke,m,rt,d],function(e,t,n,r,i,o){function a(e){function t(t,n){return function(){var r=this;e.on("nodeChange",function(i){var o=e.formatter,a=null;s(i.parents,function(e){return s(t,function(t){return n?o.matchNode(e,n,{value:t.value})&&(a=t.value):o.matchNode(e,t.value)&&(a=t.value),a?!1:void 0}),a?!1:void 0}),r.value(a)})}}function r(e){e=e.replace(/;$/,"").split(";");for(var t=e.length;t--;)e[t]=e[t].split("=");return e}function i(){function t(e){var n=[];if(e)return s(e,function(e){var o={text:e.title,icon:e.icon};if(e.items)o.menu=t(e.items);else{
    var a=e.format||"custom"+r++;e.format||(e.name=a,i.push(e)),o.format=a,o.cmd=e.cmd}n.push(o)}),n}function n(){var n;return n=t(e.settings.style_formats_merge?e.settings.style_formats?o.concat(e.settings.style_formats):o:e.settings.style_formats||o)}var r=0,i=[],o=[{title:"Headings",items:[{title:"Heading 1",format:"h1"},{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}]},{title:"Inline",items:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]},{title:"Alignment",items:[{title:"Left",icon:"alignleft",format:"alignleft"},{title:"Center",icon:"aligncenter",format:"aligncenter"},{title:"Right",icon:"alignright",format:"alignright"},{title:"Justify",icon:"alignjustify",format:"alignjustify"}]}];return e.on("init",function(){s(i,function(t){e.formatter.register(t.name,t)})}),{type:"menu",items:n(),onPostRender:function(t){e.fire("renderFormatsMenu",{control:t.control})},itemDefaults:{preview:!0,textStyle:function(){return this.settings.format?e.formatter.getCssText(this.settings.format):void 0},onPostRender:function(){var t=this;t.parent().on("show",function(){var n,r;n=t.settings.format,n&&(t.disabled(!e.formatter.canApply(n)),t.active(e.formatter.match(n))),r=t.settings.cmd,r&&t.active(e.queryCommandState(r))})},onclick:function(){this.settings.format&&c(this.settings.format),this.settings.cmd&&e.execCommand(this.settings.cmd)}}}}function o(t){return function(){var n=this;e.formatter?e.formatter.formatChanged(t,function(e){n.active(e)}):e.on("init",function(){e.formatter.formatChanged(t,function(e){n.active(e)})})}}function a(t){return function(){function n(){return e.undoManager?e.undoManager[t]():!1}var r=this;t="redo"==t?"hasRedo":"hasUndo",r.disabled(!n()),e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode",function(){r.disabled(e.readonly||!n())})}}function l(){var t=this;e.on("VisualAid",function(e){t.active(e.hasVisual)}),t.active(e.hasVisual)}function c(t){t.control&&(t=t.control.value()),t&&e.execCommand("mceToggleFormat",!1,t)}var u;u=i(),s({bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript"},function(t,n){e.addButton(n,{tooltip:t,onPostRender:o(n),onclick:function(){c(n)}})}),s({outdent:["Decrease indent","Outdent"],indent:["Increase indent","Indent"],cut:["Cut","Cut"],copy:["Copy","Copy"],paste:["Paste","Paste"],help:["Help","mceHelp"],selectall:["Select all","SelectAll"],removeformat:["Clear formatting","RemoveFormat"],visualaid:["Visual aids","mceToggleVisualAid"],newdocument:["New document","mceNewDocument"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1]})}),s({blockquote:["Blockquote","mceBlockQuote"],numlist:["Numbered list","InsertOrderedList"],bullist:["Bullet list","InsertUnorderedList"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],alignleft:["Align left","JustifyLeft"],aligncenter:["Align center","JustifyCenter"],alignright:["Align right","JustifyRight"],alignjustify:["Justify","JustifyFull"],alignnone:["No alignment","JustifyNone"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1],onPostRender:o(n)})}),e.addButton("undo",{tooltip:"Undo",onPostRender:a("undo"),cmd:"undo"}),e.addButton("redo",{tooltip:"Redo",onPostRender:a("redo"),cmd:"redo"}),e.addMenuItem("newdocument",{text:"New document",icon:"newdocument",cmd:"mceNewDocument"}),e.addMenuItem("undo",{text:"Undo",icon:"undo",shortcut:"Meta+Z",onPostRender:a("undo"),cmd:"undo"}),e.addMenuItem("redo",{text:"Redo",icon:"redo",shortcut:"Meta+Y",onPostRender:a("redo"),cmd:"redo"}),e.addMenuItem("visualaid",{text:"Visual aids",selectable:!0,onPostRender:l,cmd:"mceToggleVisualAid"}),e.addButton("remove",{tooltip:"Remove",icon:"remove",cmd:"Delete"}),s({cut:["Cut","Cut","Meta+X"],copy:["Copy","Copy","Meta+C"],paste:["Paste","Paste","Meta+V"],selectall:["Select all","SelectAll","Meta+A"],bold:["Bold","Bold","Meta+B"],italic:["Italic","Italic","Meta+I"],underline:["Underline","Underline"],strikethrough:["Strikethrough","Strikethrough"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],removeformat:["Clear formatting","RemoveFormat"]},function(t,n){e.addMenuItem(n,{text:t[0],icon:n,shortcut:t[2],cmd:t[1]})}),e.on("mousedown",function(){n.hideAll()}),e.addButton("styleselect",{type:"menubutton",text:"Formats",menu:u}),e.addButton("formatselect",function(){var n=[],i=r(e.settings.block_formats||"Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");return s(i,function(t){n.push({text:t[0],value:t[1],textStyle:function(){return e.formatter.getCssText(t[1])}})}),{type:"listbox",text:i[0][0],values:n,fixedWidth:!0,onselect:c,onPostRender:t(n)}}),e.addButton("fontselect",function(){var n="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats",i=[],o=r(e.settings.font_formats||n);return s(o,function(e){i.push({text:{raw:e[0]},value:e[1],textStyle:-1==e[1].indexOf("dings")?"font-family:"+e[1]:""})}),{type:"listbox",text:"Font Family",tooltip:"Font Family",values:i,fixedWidth:!0,onPostRender:t(i,"fontname"),onselect:function(t){t.control.settings.value&&e.execCommand("FontName",!1,t.control.settings.value)}}}),e.addButton("fontsizeselect",function(){var n=[],r="8pt 10pt 12pt 14pt 18pt 24pt 36pt",i=e.settings.fontsize_formats||r;return s(i.split(" "),function(e){var t=e,r=e,i=e.split("=");i.length>1&&(t=i[0],r=i[1]),n.push({text:t,value:r})}),{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:n,fixedWidth:!0,onPostRender:t(n,"fontsize"),onclick:function(t){t.control.settings.value&&e.execCommand("FontSize",!1,t.control.settings.value)}}}),e.addMenuItem("formats",{text:"Formats",menu:u})}var s=r.each;i.on("AddEditor",function(t){t.editor.rtl&&(e.rtl=!0),a(t.editor)}),e.translate=function(e){return i.translate(e)},t.tooltips=!o.iOS}),r(Dt,[ft],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v,y,b,C,x,w,N,E=[],_=[],S,k,T,R,A,B;t=e.settings,i=e.items().filter(":visible"),o=e.layoutRect(),r=t.columns||Math.ceil(Math.sqrt(i.length)),n=Math.ceil(i.length/r),y=t.spacingH||t.spacing||0,b=t.spacingV||t.spacing||0,C=t.alignH||t.align,x=t.alignV||t.align,g=e.paddingBox,A="reverseRows"in t?t.reverseRows:e.isRtl(),C&&"string"==typeof C&&(C=[C]),x&&"string"==typeof x&&(x=[x]);for(d=0;r>d;d++)E.push(0);for(f=0;n>f;f++)_.push(0);for(f=0;n>f;f++)for(d=0;r>d&&(u=i[f*r+d],u);d++)c=u.layoutRect(),S=c.minW,k=c.minH,E[d]=S>E[d]?S:E[d],_[f]=k>_[f]?k:_[f];for(T=o.innerW-g.left-g.right,w=0,d=0;r>d;d++)w+=E[d]+(d>0?y:0),T-=(d>0?y:0)+E[d];for(R=o.innerH-g.top-g.bottom,N=0,f=0;n>f;f++)N+=_[f]+(f>0?b:0),R-=(f>0?b:0)+_[f];if(w+=g.left+g.right,N+=g.top+g.bottom,l={},l.minW=w+(o.w-o.innerW),l.minH=N+(o.h-o.innerH),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH,l.minW=Math.min(l.minW,o.maxW),l.minH=Math.min(l.minH,o.maxH),l.minW=Math.max(l.minW,o.startMinWidth),l.minH=Math.max(l.minH,o.startMinHeight),!o.autoResize||l.minW==o.minW&&l.minH==o.minH){o.autoResize&&(l=e.layoutRect(l),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH);var D;D="start"==t.packV?0:R>0?Math.floor(R/n):0;var L=0,M=t.flexWidths;if(M)for(d=0;d<M.length;d++)L+=M[d];else L=r;var P=T/L;for(d=0;r>d;d++)E[d]+=M?M[d]*P:P;for(p=g.top,f=0;n>f;f++){for(h=g.left,s=_[f]+D,d=0;r>d&&(B=A?f*r+r-1-d:f*r+d,u=i[B],u);d++)m=u.settings,c=u.layoutRect(),a=Math.max(E[d],c.startMinWidth),c.x=h,c.y=p,v=m.alignH||(C?C[d]||C[0]:null),"center"==v?c.x=h+a/2-c.w/2:"right"==v?c.x=h+a-c.w:"stretch"==v&&(c.w=a),v=m.alignV||(x?x[d]||x[0]:null),"center"==v?c.y=p+s/2-c.h/2:"bottom"==v?c.y=p+s-c.h:"stretch"==v&&(c.h=s),u.layoutRect(c),h+=a+y,u.recalc&&u.recalc();p+=s+b}}else if(l.w=l.minW,l.h=l.minH,e.layoutRect(l),this.recalc(e),null===e._lastRect){var H=e.parent();H&&(H._lastRect=null,H.recalc())}}})}),r(Lt,[De,u],function(e,t){return e.extend({renderHtml:function(){var e=this;return e.classes.add("iframe"),e.canFocus=!1,'<iframe id="'+e._id+'" class="'+e.classes+'" tabindex="-1" src="'+(e.settings.url||"javascript:''")+'" frameborder="0"></iframe>'},src:function(e){this.getEl().src=e},html:function(e,n){var r=this,i=this.getEl().contentWindow.document.body;return i?(i.innerHTML=e,n&&n()):t.setTimeout(function(){r.html(e)}),this}})}),r(Mt,[De],function(e){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("widget").add("infobox"),t.canFocus=!1},severity:function(e){this.classes.remove("error"),this.classes.remove("warning"),this.classes.remove("success"),this.classes.add(e)},help:function(e){this.state.set("help",e)},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+e.encode(e.state.get("text"))+'<button role="button" tabindex="-1"><i class="'+t+"ico "+t+'i-help"></i></button></div></div>'},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl("body").firstChild.data=e.encode(t.value),e.state.get("rendered")&&e.updateLayoutRect()}),e.state.on("change:help",function(t){e.classes.toggle("has-help",t.value),e.state.get("rendered")&&e.updateLayoutRect()}),e._super()}})}),r(Pt,[De,pe],function(e,t){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("widget").add("label"),t.canFocus=!1,e.multiline&&t.classes.add("autoscroll"),e.strong&&t.classes.add("strong")},initLayoutRect:function(){var e=this,n=e._super();if(e.settings.multiline){var r=t.getSize(e.getEl());r.width>n.maxW&&(n.minW=n.maxW,e.classes.add("multiline")),e.getEl().style.width=n.minW+"px",n.startMinH=n.h=n.minH=Math.min(n.maxH,t.getSize(e.getEl()).height)}return n},repaint:function(){var e=this;return e.settings.multiline||(e.getEl().style.lineHeight=e.layoutRect().h+"px"),e._super()},severity:function(e){this.classes.remove("error"),this.classes.remove("warning"),this.classes.remove("success"),this.classes.add(e)},renderHtml:function(){var e=this,t,n,r=e.settings.forId;return!r&&(n=e.settings.forName)&&(t=e.getRoot().find("#"+n)[0],t&&(r=t._id)),r?'<label id="'+e._id+'" class="'+e.classes+'"'+(r?' for="'+r+'"':"")+">"+e.encode(e.state.get("text"))+"</label>":'<span id="'+e._id+'" class="'+e.classes+'">'+e.encode(e.state.get("text"))+"</span>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.innerHtml(e.encode(t.value)),e.state.get("rendered")&&e.updateLayoutRect()}),e._super()}})}),r(Ht,[xe],function(e){return e.extend({Defaults:{role:"toolbar",layout:"flow"},init:function(e){var t=this;t._super(e),t.classes.add("toolbar")},postRender:function(){var e=this;return e.items().each(function(e){e.classes.add("toolbar-item")}),e._super()}})}),r(Ot,[Ht],function(e){return e.extend({Defaults:{role:"menubar",containerCls:"menubar",ariaRoot:!0,defaults:{type:"menubutton"}}})}),r(It,[ht,be,Ot],function(e,t,n){function r(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1}var i=e.extend({init:function(e){var t=this;t._renderOpen=!0,t._super(e),e=t.settings,t.classes.add("menubtn"),e.fixedWidth&&t.classes.add("fixed-width"),t.aria("haspopup",!0),t.state.set("menu",e.menu||t.render())},showMenu:function(){var e=this,n;return e.menu&&e.menu.visible()?e.hideMenu():(e.menu||(n=e.state.get("menu")||[],n.length?n={type:"menu",items:n}:n.type=n.type||"menu",n.renderTo?e.menu=n.parent(e).show().renderTo():e.menu=t.create(n).parent(e).renderTo(),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control.parent()===e.menu&&(t.stopPropagation(),e.focus(),e.hideMenu())}),e.menu.on("select",function(){e.focus()}),e.menu.on("show hide",function(t){t.control==e.menu&&e.activeMenu("show"==t.type),e.aria("expanded","show"==t.type)}).fire("show")),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),void e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"]))},hideMenu:function(){var e=this;e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide())},activeMenu:function(e){this.classes.toggle("active",e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix,i=e.settings.icon,o,a=e.state.get("text"),s="";return o=e.settings.image,o?(i="none","string"!=typeof o&&(o=window.getSelection?o[0]:o[1]),o=" style=\"background-image: url('"+o+"')\""):o="",a&&(e.classes.add("btn-has-text"),s='<span class="'+r+'txt">'+e.encode(a)+"</span>"),i=e.settings.icon?r+"ico "+r+"i-"+i:"",e.aria("role",e.parent()instanceof n?"menuitem":"button"),'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button id="'+t+'-open" role="presentation" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+s+' <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this;return e.on("click",function(t){t.control===e&&r(t.target,e.getEl())&&(e.showMenu(),t.aria&&e.menu.items()[0].focus())}),e.on("mouseenter",function(t){var n=t.control,r=e.parent(),o;n&&r&&n instanceof i&&n.parent()==r&&(r.items().filter("MenuButton").each(function(e){e.hideMenu&&e!=n&&(e.menu&&e.menu.visible()&&(o=!0),e.hideMenu())}),o&&(n.focus(),n.showMenu()))}),e._super()},bindStates:function(){var e=this;return e.state.on("change:menu",function(){e.menu&&e.menu.remove(),e.menu=null}),e._super()},remove:function(){this._super(),this.menu&&this.menu.remove()}});return i}),r(Ft,[De,be,d,u],function(e,t,n,r){return e.extend({Defaults:{border:0,role:"menuitem"},init:function(e){var t=this,n;t._super(e),e=t.settings,t.classes.add("menu-item"),e.menu&&t.classes.add("menu-item-expand"),e.preview&&t.classes.add("menu-item-preview"),n=t.state.get("text"),"-"!==n&&"|"!==n||(t.classes.add("menu-item-sep"),t.aria("role","separator"),t.state.set("text","-")),e.selectable&&(t.aria("role","menuitemcheckbox"),t.classes.add("menu-item-checkbox"),e.icon="selected"),e.preview||e.selectable||t.classes.add("menu-item-normal"),t.on("mousedown",function(e){e.preventDefault()}),e.menu&&!e.ariaHideMenu&&t.aria("haspopup",!0)},hasMenus:function(){return!!this.settings.menu},showMenu:function(){var e=this,n=e.settings,r,i=e.parent();if(i.items().each(function(t){t!==e&&t.hideMenu()}),n.menu){r=e.menu,r?r.show():(r=n.menu,r.length?r={type:"menu",items:r}:r.type=r.type||"menu",i.settings.itemDefaults&&(r.itemDefaults=i.settings.itemDefaults),r=e.menu=t.create(r).parent(e).renderTo(),r.reflow(),r.on("cancel",function(t){t.stopPropagation(),e.focus(),r.hide()}),r.on("show hide",function(e){e.control.items().each(function(e){e.active(e.settings.selected)})}).fire("show"),r.on("hide",function(t){t.control===r&&e.classes.remove("selected")}),r.submenu=!0),r._parentMenu=i,r.classes.add("menu-sub");var o=r.testMoveRel(e.getEl(),e.isRtl()?["tl-tr","bl-br","tr-tl","br-bl"]:["tr-tl","br-bl","tl-tr","bl-br"]);r.moveRel(e.getEl(),o),r.rel=o,o="menu-sub-"+o,r.classes.remove(r._lastRel).add(o),r._lastRel=o,e.classes.add("selected"),e.aria("expanded",!0)}},hideMenu:function(){var e=this;return e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide(),e.aria("expanded",!1)),e},renderHtml:function(){function e(e){var t,r,i={};for(i=n.mac?{alt:"&#x2325;",ctrl:"&#x2318;",shift:"&#x21E7;",meta:"&#x2318;"}:{meta:"Ctrl"},e=e.split("+"),t=0;t<e.length;t++)r=i[e[t].toLowerCase()],r&&(e[t]=r);return e.join("+")}var t=this,r=t._id,i=t.settings,o=t.classPrefix,a=t.encode(t.state.get("text")),s=t.settings.icon,l="",c=i.shortcut;return s&&t.parent().classes.add("menu-has-icons"),i.image&&(l=" style=\"background-image: url('"+i.image+"')\""),c&&(c=e(c)),s=o+"ico "+o+"i-"+(t.settings.icon||"none"),'<div id="'+r+'" class="'+t.classes+'" tabindex="-1">'+("-"!==a?'<i class="'+s+'"'+l+"></i>\xa0":"")+("-"!==a?'<span id="'+r+'-text" class="'+o+'text">'+a+"</span>":"")+(c?'<div id="'+r+'-shortcut" class="'+o+'menu-shortcut">'+c+"</div>":"")+(i.menu?'<div class="'+o+'caret"></div>':"")+"</div>"},postRender:function(){var e=this,t=e.settings,n=t.textStyle;if("function"==typeof n&&(n=n.call(this)),n){var i=e.getEl("text");i&&i.setAttribute("style",n)}return e.on("mouseenter click",function(n){n.control===e&&(t.menu||"click"!==n.type?(e.showMenu(),n.aria&&e.menu.focus(!0)):(e.fire("select"),r.requestAnimationFrame(function(){e.parent().hideAll()})))}),e._super(),e},hover:function(){var e=this;return e.parent().items().each(function(e){e.classes.remove("selected")}),e.classes.toggle("selected",!0),e},active:function(e){return"undefined"!=typeof e&&this.aria("checked",e),this._super(e)},remove:function(){this._super(),this.menu&&this.menu.remove()}})}),r(zt,[g,ye,u],function(e,t,n){return function(r,i){var o=this,a,s=t.classPrefix,l;o.show=function(t,c){function u(){a&&(e(r).append('<div class="'+s+"throbber"+(i?" "+s+"throbber-inline":"")+'"></div>'),c&&c())}return o.hide(),a=!0,t?l=n.setTimeout(u,t):u(),o},o.hide=function(){var e=r.lastChild;return n.clearTimeout(l),e&&-1!=e.className.indexOf("throbber")&&e.parentNode.removeChild(e),a=!1,o}}}),r(Ut,[ke,Ft,zt,m],function(e,t,n,r){return e.extend({Defaults:{defaultType:"menuitem",border:1,layout:"stack",role:"application",bodyRole:"menu",ariaRoot:!0},init:function(e){var t=this;if(e.autohide=!0,e.constrainToViewport=!0,"function"==typeof e.items&&(e.itemsFactory=e.items,e.items=[]),e.itemDefaults)for(var n=e.items,i=n.length;i--;)n[i]=r.extend({},e.itemDefaults,n[i]);t._super(e),t.classes.add("menu")},repaint:function(){return this.classes.toggle("menu-align",!0),this._super(),this.getEl().style.height="",this.getEl("body").style.height="",this},cancel:function(){var e=this;e.hideAll(),e.fire("select")},load:function(){function e(){t.throbber&&(t.throbber.hide(),t.throbber=null)}var t=this,r,i;i=t.settings.itemsFactory,i&&(t.throbber||(t.throbber=new n(t.getEl("body"),!0),0===t.items().length?(t.throbber.show(),t.fire("loading")):t.throbber.show(100,function(){t.items().remove(),t.fire("loading")}),t.on("hide close",e)),t.requestTime=r=(new Date).getTime(),t.settings.itemsFactory(function(n){return 0===n.length?void t.hide():void(t.requestTime===r&&(t.getEl().style.width="",t.getEl("body").style.width="",e(),t.items().remove(),t.getEl("body").innerHTML="",t.add(n),t.renderNew(),t.fire("loaded")))}))},hideAll:function(){var e=this;return this.find("menuitem").exec("hideMenu"),e._super()},preRender:function(){var e=this;return e.items().each(function(t){var n=t.settings;return n.icon||n.image||n.selectable?(e._hasIcons=!0,!1):void 0}),e.settings.itemsFactory&&e.on("postrender",function(){e.settings.itemsFactory&&e.load()}),e._super()}})}),r(Wt,[It,Ut],function(e,t){return e.extend({init:function(e){function t(r){for(var a=0;a<r.length;a++){if(i=r[a].selected||e.value===r[a].value)return o=o||r[a].text,n.state.set("value",r[a].value),!0;if(r[a].menu&&t(r[a].menu))return!0}}var n=this,r,i,o,a;n._super(e),e=n.settings,n._values=r=e.values,r&&("undefined"!=typeof e.value&&t(r),!i&&r.length>0&&(o=r[0].text,n.state.set("value",r[0].value)),n.state.set("menu",r)),n.state.set("text",e.text||o),n.classes.add("listbox"),n.on("select",function(t){var r=t.control;a&&(t.lastControl=a),e.multiple?r.active(!r.active()):n.value(t.control.value()),a=r})},bindStates:function(){function e(e,n){e instanceof t&&e.items().each(function(e){e.hasMenus()||e.active(e.value()===n)})}function n(e,t){var r;if(e)for(var i=0;i<e.length;i++){if(e[i].value===t)return e[i];if(e[i].menu&&(r=n(e[i].menu,t)))return r}}var r=this;return r.on("show",function(t){e(t.control,r.value())}),r.state.on("change:value",function(e){var t=n(r.state.get("menu"),e.value);t?r.text(t.text):r.text(r.settings.text)}),r._super()}})}),r(Vt,[mt],function(e){return e.extend({Defaults:{classes:"radio",role:"radio"}})}),r($t,[De,we],function(e,t){return e.extend({renderHtml:function(){var e=this,t=e.classPrefix;return e.classes.add("resizehandle"),"both"==e.settings.direction&&e.classes.add("resizehandle-both"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"><i class="'+t+"ico "+t+'i-resize"></i></div>'},postRender:function(){var e=this;e._super(),e.resizeDragHelper=new t(this._id,{start:function(){e.fire("ResizeStart")},drag:function(t){"both"!=e.settings.direction&&(t.deltaX=0),e.fire("Resize",t)},stop:function(){e.fire("ResizeEnd")}})},remove:function(){return this.resizeDragHelper&&this.resizeDragHelper.destroy(),this._super()}})}),r(qt,[De],function(e){function t(e){var t="";if(e)for(var n=0;n<e.length;n++)t+='<option value="'+e[n]+'">'+e[n]+"</option>";return t}return e.extend({Defaults:{classes:"selectbox",role:"selectbox",options:[]},init:function(e){var t=this;t._super(e),t.settings.size&&(t.size=t.settings.size),t.settings.options&&(t._options=t.settings.options),t.on("keydown",function(e){var n;13==e.keyCode&&(e.preventDefault(),t.parents().reverse().each(function(e){return e.toJSON?(n=e,!1):void 0}),t.fire("submit",{data:n.toJSON()}))})},options:function(e){return arguments.length?(this.state.set("options",e),this):this.state.get("options")},renderHtml:function(){var e=this,n,r="";return n=t(e._options),e.size&&(r=' size = "'+e.size+'"'),'<select id="'+e._id+'" class="'+e.classes+'"'+r+">"+n+"</select>"},bindStates:function(){var e=this;return e.state.on("change:options",function(n){e.getEl().innerHTML=t(n.value)}),e._super()}})}),r(jt,[De,we,pe],function(e,t,n){function r(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}function i(e,t,n){e.setAttribute("aria-"+t,n)}function o(e,t){var r,o,a,s,l,c;"v"==e.settings.orientation?(s="top",a="height",o="h"):(s="left",a="width",o="w"),c=e.getEl("handle"),r=(e.layoutRect()[o]||100)-n.getSize(c)[a],l=r*((t-e._minValue)/(e._maxValue-e._minValue))+"px",c.style[s]=l,c.style.height=e.layoutRect().h+"px",i(c,"valuenow",t),i(c,"valuetext",""+e.settings.previewFilter(t)),i(c,"valuemin",e._minValue),i(c,"valuemax",e._maxValue)}return e.extend({init:function(e){var t=this;e.previewFilter||(e.previewFilter=function(e){return Math.round(100*e)/100}),t._super(e),t.classes.add("slider"),"v"==e.orientation&&t.classes.add("vertical"),t._minValue=e.minValue||0,t._maxValue=e.maxValue||100,t._initValue=t.state.get("value")},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div id="'+t+'-handle" class="'+n+'slider-handle" role="slider" tabindex="-1"></div></div>'},reset:function(){this.value(this._initValue).repaint()},postRender:function(){function e(e,t,n){return(n+e)/(t-e)}function i(e,t,n){return n*(t-e)-e}function o(t,n){function o(o){var a;a=s.value(),a=i(t,n,e(t,n,a)+.05*o),a=r(a,t,n),s.value(a),s.fire("dragstart",{value:a}),s.fire("drag",{value:a}),s.fire("dragend",{value:a})}s.on("keydown",function(e){switch(e.keyCode){case 37:case 38:o(-1);break;case 39:case 40:o(1)}})}function a(e,i,o){var a,l,c,p,m;s._dragHelper=new t(s._id,{handle:s._id+"-handle",start:function(e){a=e[u],l=parseInt(s.getEl("handle").style[d],10),c=(s.layoutRect()[h]||100)-n.getSize(o)[f],s.fire("dragstart",{value:m})},drag:function(t){var n=t[u]-a;p=r(l+n,0,c),o.style[d]=p+"px",m=e+p/c*(i-e),s.value(m),s.tooltip().text(""+s.settings.previewFilter(m)).show().moveRel(o,"bc tc"),s.fire("drag",{value:m})},stop:function(){s.tooltip().hide(),s.fire("dragend",{value:m})}})}var s=this,l,c,u,d,f,h;l=s._minValue,c=s._maxValue,"v"==s.settings.orientation?(u="screenY",d="top",f="height",h="h"):(u="screenX",d="left",f="width",h="w"),s._super(),o(l,c,s.getEl("handle")),a(l,c,s.getEl("handle"))},repaint:function(){this._super(),o(this,this.value())},bindStates:function(){var e=this;return e.state.on("change:value",function(t){o(e,t.value)}),e._super()}})}),r(Yt,[De],function(e){return e.extend({renderHtml:function(){var e=this;return e.classes.add("spacer"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"></div>'}})}),r(Xt,[It,pe,g],function(e,t,n){return e.extend({Defaults:{classes:"widget btn splitbtn",role:"button"},repaint:function(){var e=this,r=e.getEl(),i=e.layoutRect(),o,a;return e._super(),o=r.firstChild,a=r.lastChild,n(o).css({width:i.w-t.getSize(a).width,height:i.h-2}),n(a).css({height:i.h-2}),e},activeMenu:function(e){var t=this;n(t.getEl().lastChild).toggleClass(t.classPrefix+"active",e)},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r,i=e.state.get("icon"),o=e.state.get("text"),a="";return r=e.settings.image,r?(i="none","string"!=typeof r&&(r=window.getSelection?r[0]:r[1]),r=" style=\"background-image: url('"+r+"')\""):r="",i=e.settings.icon?n+"ico "+n+"i-"+i:"",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">'+(i?'<i class="'+i+'"'+r+"></i>":"")+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1">'+(e._menuBtnText?(i?"\xa0":"")+e._menuBtnText:"")+' <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(e){var n=e.target;if(e.control==this)for(;n;){if(e.aria&&"down"!=e.aria.key||"BUTTON"==n.nodeName&&-1==n.className.indexOf("open"))return e.stopImmediatePropagation(),void(t&&t.call(this,e));n=n.parentNode}}),delete e.settings.onclick,e._super()}})}),r(Kt,[At],function(e){return e.extend({Defaults:{containerClass:"stack-layout",controlClass:"stack-layout-item",endClass:"break"},isNative:function(){return!0}})}),r(Gt,[Ee,g,pe],function(e,t,n){return e.extend({Defaults:{layout:"absolute",defaults:{type:"panel"}},activateTab:function(e){var n;this.activeTabId&&(n=this.getEl(this.activeTabId),t(n).removeClass(this.classPrefix+"active"),n.setAttribute("aria-selected","false")),this.activeTabId="t"+e,n=this.getEl("t"+e),n.setAttribute("aria-selected","true"),t(n).addClass(this.classPrefix+"active"),this.items()[e].show().fire("showtab"),this.reflow(),this.items().each(function(t,n){e!=n&&t.hide()})},renderHtml:function(){var e=this,t=e._layout,n="",r=e.classPrefix;return e.preRender(),t.preRender(e),e.items().each(function(t,i){var o=e._id+"-t"+i;t.aria("role","tabpanel"),t.aria("labelledby",o),n+='<div id="'+o+'" class="'+r+'tab" unselectable="on" role="tab" aria-controls="'+t._id+'" aria-selected="false" tabIndex="-1">'+e.encode(t.settings.title)+"</div>"}),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1"><div id="'+e._id+'-head" class="'+r+'tabs" role="tablist">'+n+'</div><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this;e._super(),e.settings.activeTab=e.settings.activeTab||0,e.activateTab(e.settings.activeTab),this.on("click",function(t){var n=t.target.parentNode;if(t.target.parentNode.id==e._id+"-head")for(var r=n.childNodes.length;r--;)n.childNodes[r]==t.target&&e.activateTab(r)})},initLayoutRect:function(){var e=this,t,r,i;r=n.getSize(e.getEl("head")).width,r=0>r?0:r,i=0,e.items().each(function(e){r=Math.max(r,e.layoutRect().minW),i=Math.max(i,e.layoutRect().minH)}),e.items().each(function(e){e.settings.x=0,e.settings.y=0,e.settings.w=r,e.settings.h=i,e.layoutRect({x:0,y:0,w:r,h:i})});var o=n.getSize(e.getEl("head")).height;return e.settings.minWidth=r,e.settings.minHeight=i+o,t=e._super(),t.deltaH+=o,t.innerH=t.h-t.deltaH,t}})}),r(Jt,[De,m,pe],function(e,t,n){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("textbox"),e.multiline?t.classes.add("multiline"):(t.on("keydown",function(e){var n;13==e.keyCode&&(e.preventDefault(),t.parents().reverse().each(function(e){return e.toJSON?(n=e,!1):void 0}),t.fire("submit",{data:n.toJSON()}))}),t.on("keyup",function(e){t.state.set("value",e.target.value)}))},repaint:function(){var e=this,t,n,r,i,o=0,a;t=e.getEl().style,n=e._layoutRect,a=e._lastRepaintRect||{};var s=document;return!e.settings.multiline&&s.all&&(!s.documentMode||s.documentMode<=8)&&(t.lineHeight=n.h-o+"px"),r=e.borderBox,i=r.left+r.right+8,o=r.top+r.bottom+(e.settings.multiline?8:0),n.x!==a.x&&(t.left=n.x+"px",a.x=n.x),n.y!==a.y&&(t.top=n.y+"px",a.y=n.y),n.w!==a.w&&(t.width=n.w-i+"px",a.w=n.w),n.h!==a.h&&(t.height=n.h-o+"px",a.h=n.h),e._lastRepaintRect=a,e.fire("repaint",{},!1),e},renderHtml:function(){var e=this,r=e.settings,i,o;return i={id:e._id,hidefocus:"1"},t.each(["rows","spellcheck","maxLength","size","readonly","min","max","step","list","pattern","placeholder","required","multiple"],function(e){i[e]=r[e]}),e.disabled()&&(i.disabled="disabled"),r.subtype&&(i.type=r.subtype),o=n.create(r.multiline?"textarea":"input",i),o.value=e.state.get("value"),o.className=e.classes,o.outerHTML},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl().value),this.state.get("value"))},postRender:function(){var e=this;e.getEl().value=e.state.get("value"),e._super(),e.$el.on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)})},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl().value!=t.value&&(e.getEl().value=t.value)}),e.state.on("change:disabled",function(t){e.getEl().disabled=t.value}),e._super()},remove:function(){this.$el.off(),this._super()}})}),r(Qt,[],function(){var e=this||window,t=function(){return e.tinymce};return"function"==typeof e.define&&(e.define.amd||e.define("ephox/tinymce",[],t)),{}}),a([l,c,u,d,f,h,m,g,v,y,C,w,N,E,T,A,B,D,L,M,P,H,I,F,j,Y,J,Q,oe,ae,se,le,ue,fe,he,ve,ye,be,Ce,xe,we,Ne,Ee,_e,Se,ke,Te,Re,Ae,Be,De,Le,Me,Pe,Ie,ze,et,tt,nt,rt,ot,at,st,lt,ct,ut,dt,ft,ht,pt,mt,gt,vt,yt,bt,Ct,xt,wt,Nt,Et,_t,St,kt,Tt,Rt,At,Bt,Dt,Lt,Mt,Pt,Ht,Ot,It,Ft,zt,Ut,Wt,Vt,$t,qt,jt,Yt,Xt,Kt,Gt,Jt])}(this);
!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;g>i;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;c>f;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("1",tinymce.ThemeManager),h("2",tinymce.util.Delay),h("b",tinymce.util.Tools),h("c",tinymce.ui.Factory),h("d",tinymce.DOM),g("e",["b","c"],function(a,b){var c=function(a,b){return function(c,d){for(var e,f=d.parents.length;f--&&(e=d.parents[f].nodeName,"OL"!=e&&"UL"!=e););a.active(c&&e==b)}},d=function(a,b){var d=function(a,b){return{selector:a,handler:b}},e=function(a){b.active(a)},f=function(a){b.disabled(a)};return"bullist"==a?d("ul > li",c(b,"UL")):"numlist"==a?d("ol > li",c(b,"OL")):b.settings.stateSelector?d(b.settings.stateSelector,e):b.settings.disabledStateSelector?d(b.settings.disabledStateSelector,f):null},e=function(a,b,c){return function(){var e=d(b,c);null!==e&&a.selection.selectorChanged(e.selector,e.handler)}},f=function(c,d,f){var g,h=[];if(f)return a.each(f.split(/[ ,]/),function(a){var d;"|"==a?g=null:b.has(a)?(a={type:a},h.push(a),g=null):(g||(g={type:"buttongroup",items:[]},h.push(g)),c.buttons[a]&&(d=a,a=c.buttons[d],"function"==typeof a&&(a=a()),a.type=a.type||"button",a=b.create(a),a.on("postRender",e(c,d,a)),g.items.push(a)))}),b.create({type:"toolbar",layout:"flow",name:d,items:h})};return{create:f}}),h("m",tinymce.util.Promise),g("n",[],function(){var a=0,b=function(){var a=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+a()+a()+a()},c=function(c){return c+a++ +b()};return{uuid:c}}),g("s",[],function(){var a=function(a,b){function c(c){var e,f,g;f=b[c?"startContainer":"endContainer"],g=b[c?"startOffset":"endOffset"],1==f.nodeType&&(e=a.create("span",{"data-mce-type":"bookmark"}),f.hasChildNodes()?(g=Math.min(g,f.childNodes.length-1),c?f.insertBefore(e,f.childNodes[g]):a.insertAfter(e,f.childNodes[g])):f.appendChild(e),f=e,g=0),d[c?"startContainer":"endContainer"]=f,d[c?"startOffset":"endOffset"]=g}var d={};return c(!0),b.collapsed||c(),d},b=function(a,b){function c(c){function d(a){for(var b=a.parentNode.firstChild,c=0;b;){if(b==a)return c;1==b.nodeType&&"bookmark"==b.getAttribute("data-mce-type")||c++,b=b.nextSibling}return-1}var e,f,g;e=g=b[c?"startContainer":"endContainer"],f=b[c?"startOffset":"endOffset"],e&&(1==e.nodeType&&(f=d(e),e=e.parentNode,a.remove(g)),b[c?"startContainer":"endContainer"]=e,b[c?"startOffset":"endOffset"]=f)}c(!0),c();var d=a.createRng();return d.setStart(b.startContainer,b.startOffset),b.endContainer&&d.setEnd(b.endContainer,b.endOffset),d};return{create:a,resolve:b}}),h("t",tinymce.dom.TreeWalker),h("u",tinymce.dom.RangeUtils),g("o",["s","b","t","u"],function(a,b,c,d){var e=function(a,b,d){var e,f,g=[];for(e=new c(b,a),f=b;f&&(1===f.nodeType&&g.push(f),f!==d);f=e.next());return g},f=function(c,d){var e,f,g;f=c.dom,g=c.selection,e=a.create(f,g.getRng()),b.each(d,function(a){c.dom.remove(a,!0)}),g.setRng(a.resolve(f,e))},g=function(a){return"A"===a.nodeName&&a.hasAttribute("href")},h=function(a,b){var c=a.getParent(b,g);return c?c:b},i=function(a){var c,f,i,j,k,l,m;return k=a.selection,l=a.dom,m=k.getRng(),c=h(l,d.getNode(m.startContainer,m.startOffset)),f=d.getNode(m.endContainer,m.endOffset),i=a.getBody(),j=b.grep(e(i,c,f),g)},j=function(a){f(a,i(a))};return{unlinkSelection:j}}),g("k",["n","o"],function(a,b){var c=function(a,b){var c,d,e;for(e='<table data-mce-id="mce" style="width: 100%">',e+="<tbody>",d=0;b>d;d++){for(e+="<tr>",c=0;a>c;c++)e+="<td><br></td>";e+="</tr>"}return e+="</tbody>",e+="</table>"},d=function(a){var b=a.dom.select("*[data-mce-id]");return b[0]},e=function(a,b,e){a.undoManager.transact(function(){var f,g;a.insertContent(c(b,e)),f=d(a),f.removeAttribute("data-mce-id"),g=a.dom.select("td,th",f),a.selection.setCursorLocation(g[0],0)})},f=function(a,b){a.execCommand("FormatBlock",!1,b)},g=function(b,c,d){var e,f;e=b.editorUpload.blobCache,f=e.create(a.uuid("mceu"),d,c),e.add(f),b.insertContent(b.dom.createHTML("img",{src:f.blobUri()}))},h=function(a){a.selection.collapse(!1)},i=function(a){a.focus(),b.unlinkSelection(a),h(a)},j=function(a,b,c){a.focus(),a.dom.setAttrib(b,"href",c),h(a)},k=function(a,b){a.execCommand("mceInsertLink",!1,{href:b}),h(a)},l=function(a,b){var c=a.dom.getParent(a.selection.getStart(),"a[href]");c?j(a,c,b):k(a,b)},m=function(a,b){0===b.trim().length?i(a):l(a,b)};return{insertTable:e,formatBlock:f,insertBlob:g,createLink:m,unlink:i}}),g("p",[],function(){var a=function(a){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(a.trim())},b=function(a){return/^https?:\/\//.test(a.trim())};return{isDomainLike:a,isAbsolute:b}}),g("f",["b","c","m","k","p"],function(a,b,c,d,e){var f=function(a){a.find("textbox").eq(0).each(function(a){a.focus()})},g=function(c,d){var e=b.create(a.extend({type:"form",layout:"flex",direction:"row",padding:5,name:c,spacing:3},d));return e.on("show",function(){f(e)}),e},h=function(a,b){return b?a.show():a.hide()},i=function(a,b){return new c(function(c){a.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(a){var d=a===!0?"http://"+b:b;c(d)})})},j=function(a,b){return!e.isAbsolute(b)&&e.isDomainLike(b)?i(a,b):c.resolve(b)},k=function(a,b){var c=function(){a.focus(),d.unlink(a),b()};return g("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:c,tooltip:"Remove link"},{type:"textbox",name:"linkurl",placeholder:"Paste or type a link"},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:function(){var b,c="";b=a.dom.getParent(a.selection.getStart(),"a[href]"),b&&(c=a.dom.getAttrib(b,"href")),this.fromJSON({linkurl:c}),h(this.find("#unlink"),b)},onsubmit:function(c){j(a,c.data.linkurl).then(function(c){d.createLink(a,c),b()})}})};return{createQuickLinkForm:k}}),h("q",tinymce.geom.Rect),g("r",[],function(){var a=function(a){return{x:a.left,y:a.top,w:a.width,h:a.height}},b=function(a){return{left:a.x,top:a.y,width:a.w,height:a.h,right:a.x+a.w,bottom:a.y+a.h}};return{fromClientRect:a,toClientRect:b}}),g("g",["d","q","r"],function(a,b,c){var d=function(b){var c=a.getViewPort();return{x:b.x+c.x,y:b.y+c.y,w:b.w,h:b.h}},e=function(a){var b=a.getBoundingClientRect();return d({x:b.left,y:b.top,w:Math.max(a.clientWidth,a.offsetWidth),h:Math.max(a.clientHeight,a.offsetHeight)})},f=function(a,b){return e(b)},g=function(a){return e(a.getElement().ownerDocument.body)},h=function(a){return e(a.getContentAreaContainer()||a.getBody())},i=function(a){var b=a.selection.getBoundingClientRect();return b?d(c.fromClientRect(b)):null};return{getElementRect:f,getPageAreaRect:g,getContentAreaRect:h,getSelectionRect:i}}),g("h",["q","r"],function(a,b){var c=function(a,b){return{rect:a,position:b}},d=function(a,b){return{x:b.x,y:b.y,w:a.w,h:a.h}},e=function(b,e,f,g,h){var i,j,k;return i=a.findBestRelativePosition(h,f,g,b),f=a.clamp(f,g),i?(j=a.relativePosition(h,f,i),k=d(h,j),c(k,i)):(f=a.intersect(g,f),f?(i=a.findBestRelativePosition(h,f,g,e))?(j=a.relativePosition(h,f,i),k=d(h,j),c(k,i)):(k=d(h,f),c(k,i)):null)},f=function(a,b,c){return e(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],a,b,c)},g=function(a,b,c){return e(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],["bc-tc","bl-tl","br-tr"],a,b,c)},h=function(a,c,d,e){var f;return"function"==typeof a?(f=a({elementRect:b.toClientRect(c),contentAreaRect:b.toClientRect(d),panelRect:b.toClientRect(e)}),b.fromClientRect(f)):e};return{calcInsert:f,calc:g,userConstrain:h}}),g("3",["b","c","d","e","f","g","h"],function(a,b,c,d,e,f,g){return function(){var h,i,j="bold italic | quicklink h2 h3 blockquote",k="quickimage quicktable",l=function(b,c){return a.map(c,function(a){return d.create(b,a.id,a.items)})},m=function(a){var b=a.selection_toolbar;return b?b:j},n=function(a){var b=a.insert_toolbar;return b?b:k},o=function(a,c){var f,g=a.settings;return f=l(a,c),f=f.concat([d.create(a,"text",m(g)),d.create(a,"insert",n(g)),e.createQuickLinkForm(a,x)]),b.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:f,oncancel:function(){a.focus()}})},p=function(a){a&&a.show()},q=function(a,b){a.moveTo(b.x,b.y)},r=function(b,c){c=c?c.substr(0,2):"",a.each({t:"down",b:"up",c:"center"},function(a,d){b.classes.toggle("arrow-"+a,d===c.substr(0,1))}),"cr"===c?(b.classes.toggle("arrow-left",!0),b.classes.toggle("arrow-right",!1)):"cl"===c?(b.classes.toggle("arrow-left",!0),b.classes.toggle("arrow-right",!0)):a.each({l:"left",r:"right"},function(a,d){b.classes.toggle("arrow-"+a,d===c.substr(1,1))})},s=function(a,b){var c=a.items().filter("#"+b);c.length>0&&(c[0].show(),a.reflow())},t=function(a,b,d,e){var h,j,k,l;p(a),a.items().hide(),s(a,b),l=d.settings.inline_toolbar_position_handler,h=f.getContentAreaRect(d),j=c.getRect(a.getEl()),k="insert"===b?g.calcInsert(e,h,j):g.calc(e,h,j),k?(j=k.rect,i=e,q(a,g.userConstrain(l,e,h,j)),r(a,k.position)):x(a)},u=function(){return h.items().filter("form:visible").length>0},v=function(a,b){if(h){h.items().hide(),s(h,b);var d,e,j,k;p(h),h.items().hide(),s(h,b),k=a.settings.inline_toolbar_position_handler,d=f.getContentAreaRect(a),e=c.getRect(h.getEl()),j=g.calc(i,d,e),j&&(e=j.rect,q(h,g.userConstrain(k,i,d,e)),r(h,j.position))}},w=function(a,b,c,d){h||(h=o(a,d),h.renderTo(document.body).reflow().moveTo(c.x,c.y),a.nodeChanged()),t(h,b,a,c)},x=function(){h&&h.hide()},y=function(){h&&h.find("toolbar:visible").eq(0).each(function(a){a.focus(!0)})},z=function(){h&&(h.remove(),h=null)},A=function(){return h&&h.visible()&&u()};return{show:w,showForm:v,inForm:A,hide:x,focus:y,remove:z}}}),g("i",["m"],function(a){var b=function(b){return new a(function(a){var c=new FileReader;c.onloadend=function(){a(c.result.split(",")[1])},c.readAsDataURL(b)})};return{blobToBase64:b}}),g("j",["m"],function(a){var b=function(){return new a(function(a){var b;b=document.createElement("input"),b.type="file",b.style.position="fixed",b.style.left=0,b.style.top=0,b.style.opacity=.001,document.body.appendChild(b),b.onchange=function(b){a(Array.prototype.slice.call(b.target.files))},b.click(),b.parentNode.removeChild(b)})};return{pickFile:b}}),g("4",["3","i","j","k"],function(a,b,c,d){var e=function(a){for(var b=function(b){return function(){d.formatBlock(a,b)}},c=1;6>c;c++){var e="h"+c;a.addButton(e,{text:e.toUpperCase(),tooltip:"Heading "+c,stateSelector:e,onclick:b(e),onPostRender:function(){var a=this.getEl().firstChild.firstChild;a.style.fontWeight="bold"}})}},f=function(a,f){a.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){f.showForm(a,"quicklink")}}),a.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){c.pickFile().then(function(c){var e=c[0];b.blobToBase64(e).then(function(b){d.insertBlob(a,b,e)})})}}),a.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){f.hide(),d.insertTable(a,2,2)}}),e(a)};return{addToEditor:f}}),h("l",tinymce.EditorManager),g("5",["l","d"],function(a,b){var c=function(a,b){var c=function(){a.fire("SkinLoaded"),b()};a.initialized?c():a.on("init",c)},d=function(d,e,f){var g=a.baseURL,h=g+"/skins/"+e,i=function(){c(d,f)};b.styleSheetLoader.load(h+"/skin.min.css",i),d.contentCSS.push(h+"/content.inline.min.css")};return{load:d}}),g("8",[],function(){var a=function(a,b){return{id:a,rect:b}},b=function(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d(a);if(e)return e}return null};return{match:b,result:a}}),g("6",["8","g"],function(a,b){var c=function(c){return function(d){return d.selection.isCollapsed()?null:a.result(c,b.getSelectionRect(d))}},d=function(c,d){return function(e){var f,g=e.schema.getTextBlockElements();for(f=0;f<c.length;f++)if("TABLE"===c[f].nodeName)return null;for(f=0;f<c.length;f++)if(c[f].nodeName in g)return e.dom.isEmpty(c[f])?a.result(d,b.getSelectionRect(e)):null;return null}};return{textSelection:c,emptyTextBlock:d}}),g("7",["8","g"],function(a,b){var c=function(c,d){return function(e){for(var f=0;f<d.length;f++)if(d[f].predicate(c))return a.result(d[f].id,b.getElementRect(e,c));return null}},d=function(c,d){return function(e){for(var f=0;f<c.length;f++)for(var g=0;g<d.length;g++)if(d[g].predicate(c[f]))return a.result(d[g].id,b.getElementRect(e,c[f]));return null}};return{element:c,parent:d}}),g("9",[],function(){var a=function(b){return b.reduce(function(b,c){return Array.isArray(c)?b.concat(a(c)):b.concat(c)},[])};return{flatten:a}}),g("a",["b"],function(a){var b=function(a,b){return{id:a,predicate:b}},c=function(c){return a.map(c,function(a){return b(a.id,a.predicate)})};return{create:b,fromContextToolbars:c}}),g("0",["1","2","3","4","5","6","7","8","9","a"],function(a,b,c,d,e,f,g,h,i,j){var k=function(a){var b=a.selection.getNode(),c=a.dom.getParents(b);return c},l=function(a,b,c,d){var e=function(c){return a.dom.is(c,b)};return{predicate:e,id:c,items:d}},m=function(a){var b=a.contextToolbars;return i.flatten([b?b:[],l(a,"img","image","alignleft aligncenter alignright")])},n=function(a,b){var c,d,e;return d=k(a),e=j.fromContextToolbars(b),c=h.match(a,[g.element(d[0],e),f.textSelection("text"),f.emptyTextBlock(d,"insert"),g.parent(d,e)]),c&&c.rect?c:null},o=function(a,b){var c=function(){var c=m(a),d=n(a,c);d?b.show(a,d.id,d.rect,c):b.hide()};return function(){a.removed||c()}},p=function(a,b){return function(){a.inForm()||b()}},q=function(a,c){var d=b.throttle(o(a,c),0),e=b.throttle(p(c,o(a,c)),0);a.on("blur hide ObjectResizeStart",c.hide),a.on("click",d),a.on("nodeChange mouseup",e),a.on("ResizeEditor ResizeWindow keyup",d),a.on("remove",c.remove),a.shortcuts.add("Alt+F10","",c.focus)},r=function(a,b){a.shortcuts.remove("meta+k"),a.shortcuts.add("meta+k","",function(){var c=m(a),d=d=h.match(a,[f.textSelection("quicklink")]);d&&b.show(a,d.id,d.rect,c)})},s=function(a,b){var c=a.settings.skin||"lightgray";return e.load(a,c,function(){q(a,b),r(a,b)}),{}},t=function(a){throw new Error(a)};return a.add("inlite",function(a){var b=new c;d.addToEditor(a,b);var e=function(){return a.inline?s(a,b):t("inlite theme only supports inline mode.")};return{renderUI:e}}),function(){}}),d("0")()}();
tinymce.ThemeManager.add("modern",function(a){function b(b,c){var d,e=[];if(b)return o(b.split(/[ ,]/),function(b){function f(){function c(a){return function(c,d){for(var e,f=d.parents.length;f--&&(e=d.parents[f].nodeName,"OL"!=e&&"UL"!=e););b.active(c&&e==a)}}var d=a.selection;"bullist"==g&&d.selectorChanged("ul > li",c("UL")),"numlist"==g&&d.selectorChanged("ol > li",c("OL")),b.settings.stateSelector&&d.selectorChanged(b.settings.stateSelector,function(a){b.active(a)},!0),b.settings.disabledStateSelector&&d.selectorChanged(b.settings.disabledStateSelector,function(a){b.disabled(a)})}var g;"|"==b?d=null:n.has(b)?(b={type:b,size:c},e.push(b),d=null):(d||(d={type:"buttongroup",items:[]},e.push(d)),a.buttons[b]&&(g=b,b=a.buttons[g],"function"==typeof b&&(b=b()),b.type=b.type||"button",b.size=c,b=n.create(b),d.items.push(b),a.initialized?f():a.on("init",f)))}),{type:"toolbar",layout:"flow",items:e}}function c(a){function c(c){return c?(d.push(b(c,a)),!0):void 0}var d=[];if(tinymce.isArray(m.toolbar)){if(0===m.toolbar.length)return;tinymce.each(m.toolbar,function(a,b){m["toolbar"+(b+1)]=a}),delete m.toolbar}for(var e=1;10>e&&c(m["toolbar"+e]);e++);return d.length||m.toolbar===!1||c(m.toolbar||t),d.length?{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:d}:void 0}function d(){function b(b){var c;return"|"==b?{text:"|"}:c=a.menuItems[b]}function c(c){var d,e,f,g,h;if(h=tinymce.makeMap((m.removed_menuitems||"").split(/[ ,]/)),m.menu?(e=m.menu[c],g=!0):e=s[c],e){d={text:e.title},f=[],o((e.items||"").split(/[ ,]/),function(a){var c=b(a);c&&!h[a]&&f.push(b(a))}),g||o(a.menuItems,function(a){a.context==c&&("before"==a.separator&&f.push({text:"|"}),a.prependToContext?f.unshift(a):f.push(a),"after"==a.separator&&f.push({text:"|"}))});for(var i=0;i<f.length;i++)"|"==f[i].text&&(0!==i&&i!=f.length-1||f.splice(i,1));if(d.menu=f,!d.menu.length)return null}return d}var d,e=[],f=[];if(m.menu)for(d in m.menu)f.push(d);else for(d in s)f.push(d);for(var g="string"==typeof m.menubar?m.menubar.split(/[ ,]/):f,h=0;h<g.length;h++){var i=g[h];i=c(i),i&&e.push(i)}return e}function e(b){function c(a){var c=b.find(a)[0];c&&c.focus(!0)}a.shortcuts.add("Alt+F9","",function(){c("menubar")}),a.shortcuts.add("Alt+F10","",function(){c("toolbar")}),a.shortcuts.add("Alt+F11","",function(){c("elementpath")}),b.on("cancel",function(){a.focus()})}function f(b,c){function d(a){return{width:a.clientWidth,height:a.clientHeight}}var e,f,g,h;e=a.getContainer(),f=a.getContentAreaContainer().firstChild,g=d(e),h=d(f),null!==b&&(b=Math.max(m.min_width||100,b),b=Math.min(m.max_width||65535,b),p.setStyle(e,"width",b+(g.width-h.width)),p.setStyle(f,"width",b)),c=Math.max(m.min_height||100,c),c=Math.min(m.max_height||65535,c),p.setStyle(f,"height",c),a.fire("ResizeEditor")}function g(b,c){var d=a.getContentAreaContainer();l.resizeTo(d.clientWidth+b,d.clientHeight+c)}function h(){function c(){return a.contextToolbars||[]}function d(b){var c,d,e;return c=tinymce.DOM.getPos(a.getContentAreaContainer()),d=a.dom.getRect(b),e=a.dom.getRoot(),"BODY"==e.nodeName&&(d.x-=e.ownerDocument.documentElement.scrollLeft||e.scrollLeft,d.y-=e.ownerDocument.documentElement.scrollTop||e.scrollTop),d.x+=c.x,d.y+=c.y,d}function e(){o(a.contextToolbars,function(a){a.panel&&a.panel.hide()})}function f(a,b,c){b=b?b.substr(0,2):"",o({t:"down",b:"up"},function(d,e){a.classes.toggle("arrow-"+d,c(e,b.substr(0,1)))}),o({l:"left",r:"right"},function(d,e){a.classes.toggle("arrow-"+d,c(e,b.substr(1,1)))})}function g(a){return{left:a.x,top:a.y,width:a.w,height:a.h,right:a.x+a.w,bottom:a.y+a.h}}function h(a,b,c,d,e){return e=g({x:a,y:b,w:e.w,h:e.h}),m.inline_toolbar_position_handler&&(e=m.inline_toolbar_position_handler({elementRect:g(c),contentAreaRect:g(d),panelRect:e})),e}function i(a,b){a.moveTo(b.left,b.top)}function j(b){var c,g,j,k,l,m,n,o;if(!a.removed){if(!b||!b.toolbar.panel)return void e();n=["bc-tc","tc-bc","tl-bl","bl-tl","tr-br","br-tr"],l=b.toolbar.panel,l.show(),j=d(b.element),g=tinymce.DOM.getRect(l.getEl()),k=tinymce.DOM.getRect(a.getContentAreaContainer()||a.getBody()),o=25,j.w=b.element.clientWidth,j.h=b.element.clientHeight,a.inline||(k.w=a.getDoc().documentElement.offsetWidth),a.selection.controlSelection.isResizable(b.element)&&j.w<o&&(j=q.inflate(j,0,8)),c=q.findBestRelativePosition(g,j,k,n),j=q.clamp(j,k),c?(m=q.relativePosition(g,j,c),i(l,h(m.x,m.y,j,k,g))):(k.h+=g.h,j=q.intersect(k,j),j?(c=q.findBestRelativePosition(g,j,k,["bc-tc","bl-tl","br-tr"]),c?(m=q.relativePosition(g,j,c),i(l,h(m.x,m.y,j,k,g))):i(l,h(j.x,j.y,j,k,g))):l.hide()),f(l,c,function(a,b){return a===b})}}function k(){function b(){a.selection&&j(s(a.selection.getNode()))}tinymce.util.Delay.requestAnimationFrame(b)}function l(){t||(t=a.selection.getScrollContainer()||a.getWin(),tinymce.$(t).on("scroll",k),a.on("remove",function(){tinymce.$(t).off("scroll")}))}function p(c){var d;return c.toolbar.panel?(c.toolbar.panel.show(),void j(c)):(l(),d=n.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:b(c.toolbar.items),oncancel:function(){a.focus()}}),c.toolbar.panel=d,d.renderTo(document.body).reflow(),void j(c))}function r(){tinymce.each(c(),function(a){a.panel&&a.panel.hide()})}function s(b){var d,e,f,g=c();for(f=a.$(b).parents().add(b),d=f.length-1;d>=0;d--)for(e=g.length-1;e>=0;e--)if(g[e].predicate(f[d]))return{toolbar:g[e],element:f[d]};return null}var t;a.on("click keyup setContent",function(b){("setcontent"!=b.type||b.selection)&&tinymce.util.Delay.setEditorTimeout(a,function(){var b;b=s(a.selection.getNode()),b?(r(),p(b)):r()})}),a.on("blur hide",r),a.on("ObjectResizeStart",function(){var b=s(a.selection.getNode());b&&b.toolbar.panel&&b.toolbar.panel.hide()}),a.on("nodeChange ResizeEditor ResizeWindow",k),a.on("remove",function(){tinymce.each(c(),function(a){a.panel&&a.panel.remove()}),a.contextToolbars={}}),a.shortcuts.add("ctrl+shift+e > ctrl+shift+p","",function(){var b=s(a.selection.getNode());b&&b.toolbar.panel&&b.toolbar.panel.items()[0].focus()})}function i(a){return function(){a.initialized?a.fire("SkinLoaded"):a.on("init",function(){a.fire("SkinLoaded")})}}function j(b){function f(){if(o&&o.moveRel&&o.visible()&&!o._fixed){var b=a.selection.getScrollContainer(),c=a.getBody(),d=0,e=0;if(b){var f=p.getPos(c),g=p.getPos(b);d=Math.max(0,g.x-f.x),e=Math.max(0,g.y-f.y)}o.fixed(!1).moveRel(c,a.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(d,e)}}function g(){o&&(o.show(),f(),p.addClass(a.getBody(),"mce-edit-focus"))}function j(){o&&(o.hide(),r.hideAll(),p.removeClass(a.getBody(),"mce-edit-focus"))}function k(){return o?void(o.visible()||g()):(o=l.panel=n.create({type:q?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!!q,border:1,items:[m.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:d()},c(m.toolbar_items_size)]}),a.fire("BeforeRenderUI"),o.renderTo(q||document.body).reflow(),e(o),g(),h(),a.on("nodeChange",f),a.on("activate",g),a.on("deactivate",j),void a.nodeChanged())}var o,q;return m.fixed_toolbar_container&&(q=p.select(m.fixed_toolbar_container)[0]),m.content_editable=!0,a.on("focus",function(){b.skinUiCss?tinymce.DOM.styleSheetLoader.load(b.skinUiCss,k,k):k()}),a.on("blur hide",j),a.on("remove",function(){o&&(o.remove(),o=null)}),b.skinUiCss&&tinymce.DOM.styleSheetLoader.load(b.skinUiCss,i(a)),{}}function k(b){function g(){return function(a){"readonly"==a.mode?j.find("*").disabled(!0):j.find("*").disabled(!1)}}var j,k,o;return b.skinUiCss&&tinymce.DOM.styleSheetLoader.load(b.skinUiCss,i(a)),j=l.panel=n.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[m.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:d()},c(m.toolbar_items_size),{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",html:"",border:"1 0 0 0"}]}),m.resize!==!1&&(k={type:"resizehandle",direction:m.resize,onResizeStart:function(){var b=a.getContentAreaContainer().firstChild;o={width:b.clientWidth,height:b.clientHeight}},onResize:function(a){"both"==m.resize?f(o.width+a.deltaX,o.height+a.deltaY):f(null,o.height+a.deltaY)}}),m.statusbar!==!1&&j.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:!0,items:[{type:"elementpath",editor:a},k]}),a.fire("BeforeRenderUI"),a.on("SwitchMode",g()),j.renderBefore(b.targetNode).reflow(),m.readonly&&a.setMode("readonly"),m.width&&tinymce.DOM.setStyle(j.getEl(),"width",m.width),a.on("remove",function(){j.remove(),j=null}),e(j),h(),{iframeContainer:j.find("#iframe")[0].getEl(),editorContainer:j.getEl()}}var l=this,m=a.settings,n=tinymce.ui.Factory,o=tinymce.each,p=tinymce.DOM,q=tinymce.geom.Rect,r=tinymce.ui.FloatPanel,s={file:{title:"File",items:"newdocument"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},insert:{title:"Insert",items:"|"},view:{title:"View",items:"visualaid |"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript | formats | removeformat"},table:{title:"Table"},tools:{title:"Tools"}},t="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";l.renderUI=function(b){var c=m.skin!==!1?m.skin||"lightgray":!1;if(c){var d=m.skin_url;d=d?a.documentBaseURI.toAbsolute(d):tinymce.baseURL+"/skins/"+c,tinymce.Env.documentMode<=7?b.skinUiCss=d+"/skin.ie7.min.css":b.skinUiCss=d+"/skin.min.css",a.contentCSS.push(d+"/content"+(a.inline?".inline":"")+".min.css")}return a.on("ProgressState",function(a){l.throbber=l.throbber||new tinymce.ui.Throbber(l.panel.getEl("body")),a.state?l.throbber.show(a.time):l.throbber.hide()}),m.inline?j(b):k(b)},l.resizeTo=f,l.resizeBy=g});
tinymce.PluginManager.add("advlist",function(a){function b(a,b){var c=[];return tinymce.each(b.split(/[ ,]/),function(a){c.push({text:a.replace(/\-/g," ").replace(/\b\w/g,function(a){return a.toUpperCase()}),data:"default"==a?"":a})}),c}function c(b,c){a.undoManager.transact(function(){var d,e=a.dom,f=a.selection;if(d=e.getParent(f.getNode(),"ol,ul"),!d||d.nodeName!=b||c===!1){var h={"list-style-type":c?c:""};a.execCommand("UL"==b?"InsertUnorderedList":"InsertOrderedList",!1,h)}c=c===!1?g[b]:c,g[b]=c,d=e.getParent(f.getNode(),"ol,ul"),d&&(e.setStyle(d,"listStyleType",c?c:null),d.removeAttribute("data-mce-style")),a.focus()})}function d(b){var c=a.dom.getStyle(a.dom.getParent(a.selection.getNode(),"ol,ul"),"listStyleType")||"";b.control.items().each(function(a){a.active(a.settings.data===c)})}var e,f,g={};e=b("OL",a.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman")),f=b("UL",a.getParam("advlist_bullet_styles","default,circle,disc,square")),a.addButton("numlist",{type:"splitbutton",tooltip:"Numbered list",menu:e,onshow:d,onselect:function(a){c("OL",a.control.settings.data)},onclick:function(){c("OL",!1)}}),a.addButton("bullist",{type:"splitbutton",tooltip:"Bullet list",menu:f,onshow:d,onselect:function(a){c("UL",a.control.settings.data)},onclick:function(){c("UL",!1)}})});
tinymce.PluginManager.add("anchor",function(a){function b(){var b=a.selection.getNode(),c="",d="A"==b.tagName&&""===a.dom.getAttrib(b,"href");d&&(c=b.name||b.id||""),a.windowManager.open({title:"Anchor",body:{type:"textbox",name:"name",size:40,label:"Name",value:c},onsubmit:function(c){var e=c.data.name;d?b.id=e:(a.selection.collapse(!0),a.execCommand("mceInsertContent",!1,a.dom.createHTML("a",{id:e})))}})}a.addCommand("mceAnchor",b),a.addButton("anchor",{icon:"anchor",tooltip:"Anchor",onclick:b,stateSelector:"a:not([href])"}),a.addMenuItem("anchor",{icon:"anchor",text:"Anchor",context:"insert",onclick:b})});
tinymce.PluginManager.add("autolink",function(a){function b(a){e(a,-1,"(",!0)}function c(a){e(a,0,"",!0)}function d(a){e(a,-1,"",!1)}function e(a,b,c){function d(a,b){if(0>b&&(b=0),3==a.nodeType){var c=a.data.length;b>c&&(b=c)}return b}function e(a,b){1!=a.nodeType||a.hasChildNodes()?h.setStart(a,d(a,b)):h.setStartBefore(a)}function f(a,b){1!=a.nodeType||a.hasChildNodes()?h.setEnd(a,d(a,b)):h.setEndAfter(a)}var h,i,j,k,l,m,n,o,p,q;if("A"!=a.selection.getNode().tagName){if(h=a.selection.getRng(!0).cloneRange(),h.startOffset<5){if(o=h.endContainer.previousSibling,!o){if(!h.endContainer.firstChild||!h.endContainer.firstChild.nextSibling)return;o=h.endContainer.firstChild.nextSibling}if(p=o.length,e(o,p),f(o,p),h.endOffset<5)return;i=h.endOffset,k=o}else{if(k=h.endContainer,3!=k.nodeType&&k.firstChild){for(;3!=k.nodeType&&k.firstChild;)k=k.firstChild;3==k.nodeType&&(e(k,0),f(k,k.nodeValue.length))}i=1==h.endOffset?2:h.endOffset-1-b}j=i;do e(k,i>=2?i-2:0),f(k,i>=1?i-1:0),i-=1,q=h.toString();while(" "!=q&&""!==q&&160!=q.charCodeAt(0)&&i-2>=0&&q!=c);h.toString()==c||160==h.toString().charCodeAt(0)?(e(k,i),f(k,j),i+=1):0===h.startOffset?(e(k,0),f(k,j)):(e(k,i),f(k,j)),m=h.toString(),"."==m.charAt(m.length-1)&&f(k,j-1),m=h.toString(),n=m.match(g),n&&("www."==n[1]?n[1]="http://www.":/@$/.test(n[1])&&!/^mailto:/.test(n[1])&&(n[1]="mailto:"+n[1]),l=a.selection.getBookmark(),a.selection.setRng(h),a.execCommand("createlink",!1,n[1]+n[2]),a.selection.moveToBookmark(l),a.nodeChanged())}}var f,g=/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i;return a.settings.autolink_pattern&&(g=a.settings.autolink_pattern),a.on("keydown",function(b){return 13==b.keyCode?d(a):void 0}),tinymce.Env.ie?void a.on("focus",function(){if(!f){f=!0;try{a.execCommand("AutoUrlDetect",!1,!0)}catch(b){}}}):(a.on("keypress",function(c){return 41==c.keyCode?b(a):void 0}),void a.on("keyup",function(b){return 32==b.keyCode?c(a):void 0}))});
tinymce.PluginManager.add("autoresize",function(a){function b(){return a.plugins.fullscreen&&a.plugins.fullscreen.isFullscreen()}function c(d){var g,h,i,j,k,l,m,n,o,p,q,r,s=tinymce.DOM;if(h=a.getDoc()){if(i=h.body,j=h.documentElement,k=e.autoresize_min_height,!i||d&&"setcontent"===d.type&&d.initial||b())return void(i&&j&&(i.style.overflowY="auto",j.style.overflowY="auto"));m=a.dom.getStyle(i,"margin-top",!0),n=a.dom.getStyle(i,"margin-bottom",!0),o=a.dom.getStyle(i,"padding-top",!0),p=a.dom.getStyle(i,"padding-bottom",!0),q=a.dom.getStyle(i,"border-top-width",!0),r=a.dom.getStyle(i,"border-bottom-width",!0),l=i.offsetHeight+parseInt(m,10)+parseInt(n,10)+parseInt(o,10)+parseInt(p,10)+parseInt(q,10)+parseInt(r,10),(isNaN(l)||0>=l)&&(l=tinymce.Env.ie?i.scrollHeight:tinymce.Env.webkit&&0===i.clientHeight?0:i.offsetHeight),l>e.autoresize_min_height&&(k=l),e.autoresize_max_height&&l>e.autoresize_max_height?(k=e.autoresize_max_height,i.style.overflowY="auto",j.style.overflowY="auto"):(i.style.overflowY="hidden",j.style.overflowY="hidden",i.scrollTop=0),k!==f&&(g=k-f,s.setStyle(a.iframeElement,"height",k+"px"),f=k,tinymce.isWebKit&&0>g&&c(d))}}function d(b,e,f){tinymce.util.Delay.setEditorTimeout(a,function(){c({}),b--?d(b,e,f):f&&f()},e)}var e=a.settings,f=0;a.settings.inline||(e.autoresize_min_height=parseInt(a.getParam("autoresize_min_height",a.getElement().offsetHeight),10),e.autoresize_max_height=parseInt(a.getParam("autoresize_max_height",0),10),a.on("init",function(){var b,c;b=a.getParam("autoresize_overflow_padding",1),c=a.getParam("autoresize_bottom_margin",50),b!==!1&&a.dom.setStyles(a.getBody(),{paddingLeft:b,paddingRight:b}),c!==!1&&a.dom.setStyles(a.getBody(),{paddingBottom:c})}),a.on("nodechange setcontent keyup FullscreenStateChanged",c),a.getParam("autoresize_on_init",!0)&&a.on("init",function(){d(20,100,function(){d(5,1e3)})}),a.addCommand("mceAutoResize",c))});
tinymce._beforeUnloadHandler=function(){var a;return tinymce.each(tinymce.editors,function(b){b.plugins.autosave&&b.plugins.autosave.storeDraft(),!a&&b.isDirty()&&b.getParam("autosave_ask_before_unload",!0)&&(a=b.translate("You have unsaved changes are you sure you want to navigate away?"))}),a},tinymce.PluginManager.add("autosave",function(a){function b(a,b){var c={s:1e3,m:6e4};return a=/^(\d+)([ms]?)$/.exec(""+(a||b)),(a[2]?c[a[2]]:1)*parseInt(a,10)}function c(){var a=parseInt(n.getItem(k+"time"),10)||0;return(new Date).getTime()-a>m.autosave_retention?(d(!1),!1):!0}function d(b){n.removeItem(k+"draft"),n.removeItem(k+"time"),b!==!1&&a.fire("RemoveDraft")}function e(){!j()&&a.isDirty()&&(n.setItem(k+"draft",a.getContent({format:"raw",no_events:!0})),n.setItem(k+"time",(new Date).getTime()),a.fire("StoreDraft"))}function f(){c()&&(a.setContent(n.getItem(k+"draft"),{format:"raw"}),a.fire("RestoreDraft"))}function g(){l||(setInterval(function(){a.removed||e()},m.autosave_interval),l=!0)}function h(){var b=this;b.disabled(!c()),a.on("StoreDraft RestoreDraft RemoveDraft",function(){b.disabled(!c())}),g()}function i(){a.undoManager.beforeChange(),f(),d(),a.undoManager.add()}function j(b){var c=a.settings.forced_root_block;return b=tinymce.trim("undefined"==typeof b?a.getBody().innerHTML:b),""===b||new RegExp("^<"+c+"[^>]*>((\xa0|&nbsp;|[ 	]|<br[^>]*>)+?|)</"+c+">|<br>$","i").test(b)}var k,l,m=a.settings,n=tinymce.util.LocalStorage;k=m.autosave_prefix||"tinymce-autosave-{path}{query}-{id}-",k=k.replace(/\{path\}/g,document.location.pathname),k=k.replace(/\{query\}/g,document.location.search),k=k.replace(/\{id\}/g,a.id),m.autosave_interval=b(m.autosave_interval,"30s"),m.autosave_retention=b(m.autosave_retention,"20m"),a.addButton("restoredraft",{title:"Restore last draft",onclick:i,onPostRender:h}),a.addMenuItem("restoredraft",{text:"Restore last draft",onclick:i,onPostRender:h,context:"file"}),a.settings.autosave_restore_when_empty!==!1&&(a.on("init",function(){c()&&j()&&f()}),a.on("saveContent",function(){d()})),window.onbeforeunload=tinymce._beforeUnloadHandler,this.hasDraft=c,this.storeDraft=e,this.restoreDraft=f,this.removeDraft=d,this.isEmpty=j});
!function(){tinymce.create("tinymce.plugins.BBCodePlugin",{init:function(a){var b=this,c=a.getParam("bbcode_dialect","punbb").toLowerCase();a.on("beforeSetContent",function(a){a.content=b["_"+c+"_bbcode2html"](a.content)}),a.on("postProcess",function(a){a.set&&(a.content=b["_"+c+"_bbcode2html"](a.content)),a.get&&(a.content=b["_"+c+"_html2bbcode"](a.content))})},getInfo:function(){return{longname:"BBCode Plugin",author:"Ephox Corp",authorurl:"http://www.tinymce.com",infourl:"http://www.tinymce.com/wiki.php/Plugin:bbcode"}},_punbb_html2bbcode:function(a){function b(b,c){a=a.replace(b,c)}return a=tinymce.trim(a),b(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi,"[url=$1]$2[/url]"),b(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),b(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),b(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),b(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),b(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi,"[color=$1]$2[/color]"),b(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[color=$1]$2[/color]"),b(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi,"[size=$1]$2[/size]"),b(/<font>(.*?)<\/font>/gi,"$1"),b(/<img.*?src=\"(.*?)\".*?\/>/gi,"[img]$1[/img]"),b(/<span class=\"codeStyle\">(.*?)<\/span>/gi,"[code]$1[/code]"),b(/<span class=\"quoteStyle\">(.*?)<\/span>/gi,"[quote]$1[/quote]"),b(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi,"[code][b]$1[/b][/code]"),b(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi,"[quote][b]$1[/b][/quote]"),b(/<em class=\"codeStyle\">(.*?)<\/em>/gi,"[code][i]$1[/i][/code]"),b(/<em class=\"quoteStyle\">(.*?)<\/em>/gi,"[quote][i]$1[/i][/quote]"),b(/<u class=\"codeStyle\">(.*?)<\/u>/gi,"[code][u]$1[/u][/code]"),b(/<u class=\"quoteStyle\">(.*?)<\/u>/gi,"[quote][u]$1[/u][/quote]"),b(/<\/(strong|b)>/gi,"[/b]"),b(/<(strong|b)>/gi,"[b]"),b(/<\/(em|i)>/gi,"[/i]"),b(/<(em|i)>/gi,"[i]"),b(/<\/u>/gi,"[/u]"),b(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi,"[u]$1[/u]"),b(/<u>/gi,"[u]"),b(/<blockquote[^>]*>/gi,"[quote]"),b(/<\/blockquote>/gi,"[/quote]"),b(/<br \/>/gi,"\n"),b(/<br\/>/gi,"\n"),b(/<br>/gi,"\n"),b(/<p>/gi,""),b(/<\/p>/gi,"\n"),b(/&nbsp;|\u00a0/gi," "),b(/&quot;/gi,'"'),b(/&lt;/gi,"<"),b(/&gt;/gi,">"),b(/&amp;/gi,"&"),a},_punbb_bbcode2html:function(a){function b(b,c){a=a.replace(b,c)}return a=tinymce.trim(a),b(/\n/gi,"<br />"),b(/\[b\]/gi,"<strong>"),b(/\[\/b\]/gi,"</strong>"),b(/\[i\]/gi,"<em>"),b(/\[\/i\]/gi,"</em>"),b(/\[u\]/gi,"<u>"),b(/\[\/u\]/gi,"</u>"),b(/\[url=([^\]]+)\](.*?)\[\/url\]/gi,'<a href="$1">$2</a>'),b(/\[url\](.*?)\[\/url\]/gi,'<a href="$1">$1</a>'),b(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" />'),b(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<font color="$1">$2</font>'),b(/\[code\](.*?)\[\/code\]/gi,'<span class="codeStyle">$1</span>&nbsp;'),b(/\[quote.*?\](.*?)\[\/quote\]/gi,'<span class="quoteStyle">$1</span>&nbsp;'),a}}),tinymce.PluginManager.add("bbcode",tinymce.plugins.BBCodePlugin)}();
tinymce.PluginManager.add("charmap",function(a){function b(){return[["160","no-break space"],["173","soft hyphen"],["34","quotation mark"],["162","cent sign"],["8364","euro sign"],["163","pound sign"],["165","yen sign"],["169","copyright sign"],["174","registered sign"],["8482","trade mark sign"],["8240","per mille sign"],["181","micro sign"],["183","middle dot"],["8226","bullet"],["8230","three dot leader"],["8242","minutes / feet"],["8243","seconds / inches"],["167","section sign"],["182","paragraph sign"],["223","sharp s / ess-zed"],["8249","single left-pointing angle quotation mark"],["8250","single right-pointing angle quotation mark"],["171","left pointing guillemet"],["187","right pointing guillemet"],["8216","left single quotation mark"],["8217","right single quotation mark"],["8220","left double quotation mark"],["8221","right double quotation mark"],["8218","single low-9 quotation mark"],["8222","double low-9 quotation mark"],["60","less-than sign"],["62","greater-than sign"],["8804","less-than or equal to"],["8805","greater-than or equal to"],["8211","en dash"],["8212","em dash"],["175","macron"],["8254","overline"],["164","currency sign"],["166","broken bar"],["168","diaeresis"],["161","inverted exclamation mark"],["191","turned question mark"],["710","circumflex accent"],["732","small tilde"],["176","degree sign"],["8722","minus sign"],["177","plus-minus sign"],["247","division sign"],["8260","fraction slash"],["215","multiplication sign"],["185","superscript one"],["178","superscript two"],["179","superscript three"],["188","fraction one quarter"],["189","fraction one half"],["190","fraction three quarters"],["402","function / florin"],["8747","integral"],["8721","n-ary sumation"],["8734","infinity"],["8730","square root"],["8764","similar to"],["8773","approximately equal to"],["8776","almost equal to"],["8800","not equal to"],["8801","identical to"],["8712","element of"],["8713","not an element of"],["8715","contains as member"],["8719","n-ary product"],["8743","logical and"],["8744","logical or"],["172","not sign"],["8745","intersection"],["8746","union"],["8706","partial differential"],["8704","for all"],["8707","there exists"],["8709","diameter"],["8711","backward difference"],["8727","asterisk operator"],["8733","proportional to"],["8736","angle"],["180","acute accent"],["184","cedilla"],["170","feminine ordinal indicator"],["186","masculine ordinal indicator"],["8224","dagger"],["8225","double dagger"],["192","A - grave"],["193","A - acute"],["194","A - circumflex"],["195","A - tilde"],["196","A - diaeresis"],["197","A - ring above"],["256","A - macron"],["198","ligature AE"],["199","C - cedilla"],["200","E - grave"],["201","E - acute"],["202","E - circumflex"],["203","E - diaeresis"],["274","E - macron"],["204","I - grave"],["205","I - acute"],["206","I - circumflex"],["207","I - diaeresis"],["298","I - macron"],["208","ETH"],["209","N - tilde"],["210","O - grave"],["211","O - acute"],["212","O - circumflex"],["213","O - tilde"],["214","O - diaeresis"],["216","O - slash"],["332","O - macron"],["338","ligature OE"],["352","S - caron"],["217","U - grave"],["218","U - acute"],["219","U - circumflex"],["220","U - diaeresis"],["362","U - macron"],["221","Y - acute"],["376","Y - diaeresis"],["562","Y - macron"],["222","THORN"],["224","a - grave"],["225","a - acute"],["226","a - circumflex"],["227","a - tilde"],["228","a - diaeresis"],["229","a - ring above"],["257","a - macron"],["230","ligature ae"],["231","c - cedilla"],["232","e - grave"],["233","e - acute"],["234","e - circumflex"],["235","e - diaeresis"],["275","e - macron"],["236","i - grave"],["237","i - acute"],["238","i - circumflex"],["239","i - diaeresis"],["299","i - macron"],["240","eth"],["241","n - tilde"],["242","o - grave"],["243","o - acute"],["244","o - circumflex"],["245","o - tilde"],["246","o - diaeresis"],["248","o slash"],["333","o macron"],["339","ligature oe"],["353","s - caron"],["249","u - grave"],["250","u - acute"],["251","u - circumflex"],["252","u - diaeresis"],["363","u - macron"],["253","y - acute"],["254","thorn"],["255","y - diaeresis"],["563","y - macron"],["913","Alpha"],["914","Beta"],["915","Gamma"],["916","Delta"],["917","Epsilon"],["918","Zeta"],["919","Eta"],["920","Theta"],["921","Iota"],["922","Kappa"],["923","Lambda"],["924","Mu"],["925","Nu"],["926","Xi"],["927","Omicron"],["928","Pi"],["929","Rho"],["931","Sigma"],["932","Tau"],["933","Upsilon"],["934","Phi"],["935","Chi"],["936","Psi"],["937","Omega"],["945","alpha"],["946","beta"],["947","gamma"],["948","delta"],["949","epsilon"],["950","zeta"],["951","eta"],["952","theta"],["953","iota"],["954","kappa"],["955","lambda"],["956","mu"],["957","nu"],["958","xi"],["959","omicron"],["960","pi"],["961","rho"],["962","final sigma"],["963","sigma"],["964","tau"],["965","upsilon"],["966","phi"],["967","chi"],["968","psi"],["969","omega"],["8501","alef symbol"],["982","pi symbol"],["8476","real part symbol"],["978","upsilon - hook symbol"],["8472","Weierstrass p"],["8465","imaginary part"],["8592","leftwards arrow"],["8593","upwards arrow"],["8594","rightwards arrow"],["8595","downwards arrow"],["8596","left right arrow"],["8629","carriage return"],["8656","leftwards double arrow"],["8657","upwards double arrow"],["8658","rightwards double arrow"],["8659","downwards double arrow"],["8660","left right double arrow"],["8756","therefore"],["8834","subset of"],["8835","superset of"],["8836","not a subset of"],["8838","subset of or equal to"],["8839","superset of or equal to"],["8853","circled plus"],["8855","circled times"],["8869","perpendicular"],["8901","dot operator"],["8968","left ceiling"],["8969","right ceiling"],["8970","left floor"],["8971","right floor"],["9001","left-pointing angle bracket"],["9002","right-pointing angle bracket"],["9674","lozenge"],["9824","black spade suit"],["9827","black club suit"],["9829","black heart suit"],["9830","black diamond suit"],["8194","en space"],["8195","em space"],["8201","thin space"],["8204","zero width non-joiner"],["8205","zero width joiner"],["8206","left-to-right mark"],["8207","right-to-left mark"]]}function c(a){return tinymce.util.Tools.grep(a,function(a){return i(a)&&2==a.length})}function d(a){return i(a)?[].concat(c(a)):"function"==typeof a?a():[]}function e(b){var c=a.settings;return c.charmap&&(b=d(c.charmap)),c.charmap_append?[].concat(b).concat(d(c.charmap_append)):b}function f(){return e(b())}function g(b){a.fire("insertCustomChar",{chr:b}).chr,a.execCommand("mceInsertContent",!1,b)}function h(){function b(a){for(;a;){if("TD"==a.nodeName)return a;a=a.parentNode}}var c,d,e,h;c='<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>';var i=f(),j=Math.min(i.length,25),k=Math.ceil(i.length/j);for(e=0;k>e;e++){for(c+="<tr>",d=0;j>d;d++){var l=e*j+d;if(l<i.length){var m=i[l];c+='<td title="'+m[1]+'"><div tabindex="-1" title="'+m[1]+'" role="button">'+(m?String.fromCharCode(parseInt(m[0],10)):"&nbsp;")+"</div></td>"}else c+="<td />"}c+="</tr>"}c+="</tbody></table>";var n={type:"container",html:c,onclick:function(a){var c=a.target;/^(TD|DIV)$/.test(c.nodeName)&&b(c).firstChild&&(g(tinymce.trim(c.innerText||c.textContent)),a.ctrlKey||h.close())},onmouseover:function(a){var c=b(a.target);c&&c.firstChild?(h.find("#preview").text(c.firstChild.firstChild.data),h.find("#previewTitle").text(c.title)):(h.find("#preview").text(" "),h.find("#previewTitle").text(" "))}};h=a.windowManager.open({title:"Special character",spacing:10,padding:10,items:[n,{type:"container",layout:"flex",direction:"column",align:"center",spacing:5,minWidth:160,minHeight:160,items:[{type:"label",name:"preview",text:" ",style:"font-size: 40px; text-align: center",border:1,minWidth:140,minHeight:80},{type:"label",name:"previewTitle",text:" ",style:"text-align: center",border:1,minWidth:140,minHeight:80}]}],buttons:[{text:"Close",onclick:function(){h.close()}}]})}var i=tinymce.util.Tools.isArray;return a.addCommand("mceShowCharmap",h),a.addButton("charmap",{icon:"charmap",tooltip:"Special character",cmd:"mceShowCharmap"}),a.addMenuItem("charmap",{icon:"charmap",text:"Special character",cmd:"mceShowCharmap",context:"insert"}),{getCharMap:f,insertChar:g}});
tinymce.PluginManager.add("code",function(a){function b(){var b=a.windowManager.open({title:"Source code",body:{type:"textbox",name:"code",multiline:!0,minWidth:a.getParam("code_dialog_width",600),minHeight:a.getParam("code_dialog_height",Math.min(tinymce.DOM.getViewPort().h-200,500)),spellcheck:!1,style:"direction: ltr; text-align: left"},onSubmit:function(b){a.focus(),a.undoManager.transact(function(){a.setContent(b.data.code)}),a.selection.setCursorLocation(),a.nodeChanged()}});b.find("#code").value(a.getContent({source_view:!0}))}a.addCommand("mceCodeEditor",b),a.addButton("code",{icon:"code",tooltip:"Source code",onclick:b}),a.addMenuItem("code",{icon:"code",text:"Source code",context:"tools",onclick:b})});
!function(a,b){"use strict";function c(a,b){for(var c,d=[],f=0;f<a.length;++f){if(c=g[a[f]]||e(a[f]),!c)throw"module definition dependecy not found: "+a[f];d.push(c)}b.apply(null,d)}function d(a,d,e){if("string"!=typeof a)throw"invalid module definition, module id must be defined and be a string";if(d===b)throw"invalid module definition, dependencies must be specified";if(e===b)throw"invalid module definition, definition function must be specified";c(d,function(){g[a]=e.apply(null,arguments)})}function e(b){for(var c=a,d=b.split(/[.\/]/),e=0;e<d.length;++e){if(!c[d[e]])return;c=c[d[e]]}return c}function f(c){var d,e,f,h,i;for(d=0;d<c.length;d++){e=a,f=c[d],h=f.split(/[.\/]/);for(var j=0;j<h.length-1;++j)e[h[j]]===b&&(e[h[j]]={}),e=e[h[j]];e[h[h.length-1]]=g[f]}if(a.AMDLC_TESTS){i=a.privateModules||{};for(f in g)i[f]=g[f];for(d=0;d<c.length;d++)delete i[c[d]];a.privateModules=i}}var g={};d("tinymce/codesampleplugin/Prism",[],function(){var a={},b="undefined"!=typeof a?a:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},c=function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,c=b.Prism={util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var b=c.util.type(a);switch(b){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var d=c.util.clone(c.languages[a]);for(var e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){e=e||c.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==b)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d){for(var e in a)a.hasOwnProperty(e)&&(b.call(a,e,a[e],d||e),"Object"===c.util.type(a[e])?c.languages.DFS(a[e],b):"Array"===c.util.type(a[e])&&c.languages.DFS(a[e],b,e))}},plugins:{},highlightAll:function(a,b){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)c.highlightElement(d,a===!0,b)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;i&&(g=(i.className.match(a)||[,""])[1],h=c.languages[g]),d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent,k={element:d,language:g,grammar:h,code:j};if(!j||!h)return void c.hooks.run("complete",k);if(c.hooks.run("before-highlight",k),e&&b.Worker){var l=new Worker(c.filename);l.onmessage=function(a){k.highlightedCode=a.data,c.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),c.hooks.run("after-highlight",k),c.hooks.run("complete",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else k.highlightedCode=c.highlight(k.code,k.grammar,k.language),c.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),c.hooks.run("after-highlight",k),c.hooks.run("complete",k)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},tokenize:function(a,b,d){var e=c.Token,f=[a],g=b.rest;if(g){for(var h in g)b[h]=g[h];delete b.rest}a:for(var h in b)if(b.hasOwnProperty(h)&&b[h]){var i=b[h];i="Array"===c.util.type(i)?i:[i];for(var j=0;j<i.length;++j){var k=i[j],l=k.inside,m=!!k.lookbehind,n=0,o=k.alias;k=k.pattern||k;for(var p=0;p<f.length;p++){var q=f[p];if(f.length>a.length)break a;if(!(q instanceof e)){k.lastIndex=0;var r=k.exec(q);if(r){m&&(n=r[1].length);var s=r.index-1+n,r=r[0].slice(n),t=r.length,u=s+t,v=q.slice(0,s+1),w=q.slice(u+1),x=[p,1];v&&x.push(v);var y=new e(h,l?c.tokenize(r,l):r,o);x.push(y),w&&x.push(w),Array.prototype.splice.apply(f,x)}}}}}return f},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d=c.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c){this.type=a,this.content=b,this.alias=c};return d.stringify=function(a,b,e){if("string"==typeof a)return a;if("Array"===c.util.type(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");var f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===c.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}c.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=(h?" ":"")+i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+h+">"+f.content+"</"+f.tag+">"},b.document?void 0:b.addEventListener?(b.addEventListener("message",function(a){var d=JSON.parse(a.data),e=d.language,f=d.code,g=d.immediateClose;b.postMessage(c.highlight(f,c.languages[e],e)),g&&b.close()},!1),b.Prism):b.Prism}();return"undefined"!=typeof module&&module.exports&&(module.exports=c),"undefined"!=typeof global&&(global.Prism=c),c.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),c.languages.xml=c.languages.markup,c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,c.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},c.languages.css.atrule.inside.rest=c.util.clone(c.languages.css),c.languages.markup&&(c.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:c.languages.markup.tag.inside},rest:c.languages.css},alias:"language-css"}}),c.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:c.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:c.languages.css}},alias:"language-css"}},c.languages.markup.tag)),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),c.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),c.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:c.languages.markup.tag.inside},rest:c.languages.javascript},alias:"language-javascript"}}),c.languages.js=c.languages.javascript,c.languages.c=c.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),c.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete c.languages.c["class-name"],delete c.languages.c["boolean"],c.languages.csharp=c.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i}),c.languages.insertBefore("csharp","keyword",{preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0}}),c.languages.cpp=c.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),c.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),c.languages.java=c.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),c.languages.php=c.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),c.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),c.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),c.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),c.languages.markup&&(c.hooks.add("before-highlight",function(a){"php"===a.language&&(a.tokenStack=[],a.backupCode=a.code,a.code=a.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(b){return a.tokenStack.push(b),"{{{PHP"+a.tokenStack.length+"}}}"}))}),c.hooks.add("before-insert",function(a){"php"===a.language&&(a.code=a.backupCode,delete a.backupCode)}),c.hooks.add("after-highlight",function(a){if("php"===a.language){for(var b,d=0;b=a.tokenStack[d];d++)a.highlightedCode=a.highlightedCode.replace("{{{PHP"+(d+1)+"}}}",c.highlight(b,a.grammar,"php").replace(/\$/g,"$$$$"));a.element.innerHTML=a.highlightedCode}}),c.hooks.add("wrap",function(a){"php"===a.language&&"markup"===a.type&&(a.content=a.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),c.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:c.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),c.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(a){a.languages.ruby=a.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var b={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:a.util.clone(a.languages.ruby)}};a.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:b}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),a.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),a.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:b}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:b}}]}(c),c}),d("tinymce/codesampleplugin/Utils",[],function(){function a(a){return a&&"PRE"==a.nodeName&&-1!==a.className.indexOf("language-")}function b(a){return function(b,c){return a(c)}}return{isCodeSample:a,trimArg:b}}),d("tinymce/codesampleplugin/Dialog",["tinymce/dom/DOMUtils","tinymce/codesampleplugin/Utils","tinymce/codesampleplugin/Prism"],function(a,b,c){function d(a,b,d){a.undoManager.transact(function(){var f=e(a);d=h.encode(d),f?(a.dom.setAttrib(f,"class","language-"+b),f.innerHTML=d,c.highlightElement(f),a.selection.select(f)):(a.insertContent('<pre id="__new" class="language-'+b+'">'+d+"</pre>"),a.selection.select(a.$("#__new").removeAttr("id")[0]))})}function e(a){var c=a.selection.getNode();return b.isCodeSample(c)?c:null}function f(a){var b=e(a);return b?b.textContent:""}function g(a){var b,c=e(a);return c?(b=c.className.match(/language-(\w+)/),b?b[1]:""):""}var h=a.DOM,i=[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}];return{open:function(a){a.windowManager.open({title:"Insert/Edit code sample",minWidth:Math.min(h.getViewPort().w,800),minHeight:Math.min(h.getViewPort().h,650),layout:"fit",body:[{type:"listbox",name:"language",label:"Language",maxWidth:200,value:g(a),values:i},{type:"textbox",name:"code",multiline:!0,spellcheck:!1,ariaLabel:"Code view",flex:1,style:"direction: ltr; text-align: left",classes:"monospace",value:f(a),autofocus:!0}],onSubmit:function(b){d(a,b.data.language,b.data.code)}})}}}),d("tinymce/codesampleplugin/Plugin",["tinymce/Env","tinymce/PluginManager","tinymce/codesampleplugin/Prism","tinymce/codesampleplugin/Dialog","tinymce/codesampleplugin/Utils"],function(a,b,c,d,e){var f,g=e.trimArg;b.add("codesample",function(b,h){function i(){var a;b.inline&&f||!b.inline&&j||(b.inline?f=!0:j=!0,a=b.dom.create("link",{rel:"stylesheet",href:h+"/css/prism.css"}),b.getDoc().getElementsByTagName("head")[0].appendChild(a))}var j,k=b.$;a.ceFalse&&(b.on("PreProcess",function(a){k("pre[contenteditable=false]",a.node).filter(g(e.isCodeSample)).each(function(a,b){var c=k(b),d=b.textContent;c.attr("class",k.trim(c.attr("class"))),c.removeAttr("contentEditable"),c.empty().append(k("<code></code>").each(function(){this.textContent=d}))})}),b.on("SetContent",function(){var a=k("pre").filter(g(e.isCodeSample)).filter(function(a,b){return"false"!==b.contentEditable});a.length&&b.undoManager.transact(function(){a.each(function(a,d){k(d).find("br").each(function(a,c){c.parentNode.replaceChild(b.getDoc().createTextNode("\n"),c)}),d.contentEditable=!1,d.innerHTML=b.dom.encode(d.textContent),c.highlightElement(d),d.className=k.trim(d.className)})})}),b.addCommand("codesample",function(){d.open(b)}),b.addButton("codesample",{cmd:"codesample",title:"Insert/Edit code sample"}),b.on("init",i))})}),f(["tinymce/codesampleplugin/Prism","tinymce/codesampleplugin/Utils","tinymce/codesampleplugin/Dialog","tinymce/codesampleplugin/Plugin"])}(this);
tinymce.PluginManager.add("colorpicker",function(a){function b(b,c){function d(a){var b=new tinymce.util.Color(a),c=b.toRgb();f.fromJSON({r:c.r,g:c.g,b:c.b,hex:b.toHex().substr(1)}),e(b.toHex())}function e(a){f.find("#preview")[0].getEl().style.background=a}var f=a.windowManager.open({title:"Color",items:{type:"container",layout:"flex",direction:"row",align:"stretch",padding:5,spacing:10,items:[{type:"colorpicker",value:c,onchange:function(){var a=this.rgb();f&&(f.find("#r").value(a.r),f.find("#g").value(a.g),f.find("#b").value(a.b),f.find("#hex").value(this.value().substr(1)),e(this.value()))}},{type:"form",padding:0,labelGap:5,defaults:{type:"textbox",size:7,value:"0",flex:1,spellcheck:!1,onchange:function(){var a,b,c=f.find("colorpicker")[0];return a=this.name(),b=this.value(),"hex"==a?(b="#"+b,d(b),void c.value(b)):(b={r:f.find("#r").value(),g:f.find("#g").value(),b:f.find("#b").value()},c.value(b),void d(b))}},items:[{name:"r",label:"R",autofocus:1},{name:"g",label:"G"},{name:"b",label:"B"},{name:"hex",label:"#",value:"000000"},{name:"preview",type:"container",border:1}]}]},onSubmit:function(){b("#"+this.toJSON().hex)}});d(c)}a.settings.color_picker_callback||(a.settings.color_picker_callback=b)});
tinymce.PluginManager.add("contextmenu",function(a){var b,c=a.settings.contextmenu_never_use_native;a.on("contextmenu",function(d){var e,f=a.getDoc();if(!d.ctrlKey||c){if(d.preventDefault(),tinymce.Env.mac&&tinymce.Env.webkit&&2==d.button&&f.caretRangeFromPoint&&a.selection.setRng(f.caretRangeFromPoint(d.x,d.y)),e=a.settings.contextmenu||"link image inserttable | cell row column deletetable",b)b.show();else{var g=[];tinymce.each(e.split(/[ ,]/),function(b){var c=a.menuItems[b];"|"==b&&(c={text:b}),c&&(c.shortcut="",g.push(c))});for(var h=0;h<g.length;h++)"|"==g[h].text&&(0!==h&&h!=g.length-1||g.splice(h,1));b=new tinymce.ui.Menu({items:g,context:"contextmenu",classes:"contextmenu"}).renderTo(),a.on("remove",function(){b.remove(),b=null})}var i={x:d.pageX,y:d.pageY};a.inline||(i=tinymce.DOM.getPos(a.getContentAreaContainer()),i.x+=d.clientX,i.y+=d.clientY),b.moveTo(i.x,i.y)}})});
tinymce.PluginManager.add("directionality",function(a){function b(b){var c,d=a.dom,e=a.selection.getSelectedBlocks();e.length&&(c=d.getAttrib(e[0],"dir"),tinymce.each(e,function(a){d.getParent(a.parentNode,"*[dir='"+b+"']",d.getRoot())||(c!=b?d.setAttrib(a,"dir",b):d.setAttrib(a,"dir",null))}),a.nodeChanged())}function c(a){var b=[];return tinymce.each("h1 h2 h3 h4 h5 h6 div p".split(" "),function(c){b.push(c+"[dir="+a+"]")}),b.join(",")}a.addCommand("mceDirectionLTR",function(){b("ltr")}),a.addCommand("mceDirectionRTL",function(){b("rtl")}),a.addButton("ltr",{title:"Left to right",cmd:"mceDirectionLTR",stateSelector:c("ltr")}),a.addButton("rtl",{title:"Right to left",cmd:"mceDirectionRTL",stateSelector:c("rtl")})});
tinymce.PluginManager.add("emoticons",function(a,b){function c(){var a;return a='<table role="list" class="mce-grid">',tinymce.each(d,function(c){a+="<tr>",tinymce.each(c,function(c){var d=b+"/img/smiley-"+c+".gif";a+='<td><a href="#" data-mce-url="'+d+'" data-mce-alt="'+c+'" tabindex="-1" role="option" aria-label="'+c+'"><img src="'+d+'" style="width: 18px; height: 18px" role="presentation" /></a></td>'}),a+="</tr>"}),a+="</table>"}var d=[["cool","cry","embarassed","foot-in-mouth"],["frown","innocent","kiss","laughing"],["money-mouth","sealed","smile","surprised"],["tongue-out","undecided","wink","yell"]];a.addButton("emoticons",{type:"panelbutton",panel:{role:"application",autohide:!0,html:c,onclick:function(b){var c=a.dom.getParent(b.target,"a");c&&(a.insertContent('<img src="'+c.getAttribute("data-mce-url")+'" alt="'+c.getAttribute("data-mce-alt")+'" />'),this.hide())}},tooltip:"Emoticons"})});
tinymce.PluginManager.add("fullpage",function(a){function b(){var b=c();a.windowManager.open({title:"Document properties",data:b,defaults:{type:"textbox",size:40},body:[{name:"title",label:"Title"},{name:"keywords",label:"Keywords"},{name:"description",label:"Description"},{name:"robots",label:"Robots"},{name:"author",label:"Author"},{name:"docencoding",label:"Encoding"}],onSubmit:function(a){d(tinymce.extend(b,a.data))}})}function c(){function b(a,b){var c=a.attr(b);return c||""}var c,d,f=e(),g={};return g.fontface=a.getParam("fullpage_default_fontface",""),g.fontsize=a.getParam("fullpage_default_fontsize",""),c=f.firstChild,7==c.type&&(g.xml_pi=!0,d=/encoding="([^"]+)"/.exec(c.value),d&&(g.docencoding=d[1])),c=f.getAll("#doctype")[0],c&&(g.doctype="<!DOCTYPE"+c.value+">"),c=f.getAll("title")[0],c&&c.firstChild&&(g.title=c.firstChild.value),k(f.getAll("meta"),function(a){var b,c=a.attr("name"),d=a.attr("http-equiv");c?g[c.toLowerCase()]=a.attr("content"):"Content-Type"==d&&(b=/charset\s*=\s*(.*)\s*/gi.exec(a.attr("content")),b&&(g.docencoding=b[1]))}),c=f.getAll("html")[0],c&&(g.langcode=b(c,"lang")||b(c,"xml:lang")),g.stylesheets=[],tinymce.each(f.getAll("link"),function(a){"stylesheet"==a.attr("rel")&&g.stylesheets.push(a.attr("href"))}),c=f.getAll("body")[0],c&&(g.langdir=b(c,"dir"),g.style=b(c,"style"),g.visited_color=b(c,"vlink"),g.link_color=b(c,"link"),g.active_color=b(c,"alink")),g}function d(b){function c(a,b,c){a.attr(b,c?c:void 0)}function d(a){g.firstChild?g.insert(a,g.firstChild):g.append(a)}var f,g,h,j,m,n=a.dom;f=e(),g=f.getAll("head")[0],g||(j=f.getAll("html")[0],g=new l("head",1),j.firstChild?j.insert(g,j.firstChild,!0):j.append(g)),j=f.firstChild,b.xml_pi?(m='version="1.0"',b.docencoding&&(m+=' encoding="'+b.docencoding+'"'),7!=j.type&&(j=new l("xml",7),f.insert(j,f.firstChild,!0)),j.value=m):j&&7==j.type&&j.remove(),j=f.getAll("#doctype")[0],b.doctype?(j||(j=new l("#doctype",10),b.xml_pi?f.insert(j,f.firstChild):d(j)),j.value=b.doctype.substring(9,b.doctype.length-1)):j&&j.remove(),j=null,k(f.getAll("meta"),function(a){"Content-Type"==a.attr("http-equiv")&&(j=a)}),b.docencoding?(j||(j=new l("meta",1),j.attr("http-equiv","Content-Type"),j.shortEnded=!0,d(j)),j.attr("content","text/html; charset="+b.docencoding)):j&&j.remove(),j=f.getAll("title")[0],b.title?(j?j.empty():(j=new l("title",1),d(j)),j.append(new l("#text",3)).value=b.title):j&&j.remove(),k("keywords,description,author,copyright,robots".split(","),function(a){var c,e,g=f.getAll("meta"),h=b[a];for(c=0;c<g.length;c++)if(e=g[c],e.attr("name")==a)return void(h?e.attr("content",h):e.remove());h&&(j=new l("meta",1),j.attr("name",a),j.attr("content",h),j.shortEnded=!0,d(j))});var o={};tinymce.each(f.getAll("link"),function(a){"stylesheet"==a.attr("rel")&&(o[a.attr("href")]=a)}),tinymce.each(b.stylesheets,function(a){o[a]||(j=new l("link",1),j.attr({rel:"stylesheet",text:"text/css",href:a}),j.shortEnded=!0,d(j)),delete o[a]}),tinymce.each(o,function(a){a.remove()}),j=f.getAll("body")[0],j&&(c(j,"dir",b.langdir),c(j,"style",b.style),c(j,"vlink",b.visited_color),c(j,"link",b.link_color),c(j,"alink",b.active_color),n.setAttribs(a.getBody(),{style:b.style,dir:b.dir,vLink:b.visited_color,link:b.link_color,aLink:b.active_color})),j=f.getAll("html")[0],j&&(c(j,"lang",b.langcode),c(j,"xml:lang",b.langcode)),g.firstChild||g.remove(),h=new tinymce.html.Serializer({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(f),i=h.substring(0,h.indexOf("</body>"))}function e(){return new tinymce.html.DomParser({validate:!1,root_name:"#document"}).parse(i)}function f(b){function c(a){return a.replace(/<\/?[A-Z]+/g,function(a){return a.toLowerCase()})}var d,f,h,l,m=b.content,n="",o=a.dom;if(!b.selection&&!("raw"==b.format&&i||b.source_view&&a.getParam("fullpage_hide_in_source_view"))){0!==m.length||b.source_view||(m=tinymce.trim(i)+"\n"+tinymce.trim(m)+"\n"+tinymce.trim(j)),m=m.replace(/<(\/?)BODY/gi,"<$1body"),d=m.indexOf("<body"),-1!=d?(d=m.indexOf(">",d),i=c(m.substring(0,d+1)),f=m.indexOf("</body",d),-1==f&&(f=m.length),b.content=m.substring(d+1,f),j=c(m.substring(f))):(i=g(),j="\n</body>\n</html>"),h=e(),k(h.getAll("style"),function(a){a.firstChild&&(n+=a.firstChild.value)}),l=h.getAll("body")[0],l&&o.setAttribs(a.getBody(),{style:l.attr("style")||"",dir:l.attr("dir")||"",vLink:l.attr("vlink")||"",link:l.attr("link")||"",aLink:l.attr("alink")||""}),o.remove("fullpage_styles");var p=a.getDoc().getElementsByTagName("head")[0];n&&(o.add(p,"style",{id:"fullpage_styles"},n),l=o.get("fullpage_styles"),l.styleSheet&&(l.styleSheet.cssText=n));var q={};tinymce.each(p.getElementsByTagName("link"),function(a){"stylesheet"==a.rel&&a.getAttribute("data-mce-fullpage")&&(q[a.href]=a)}),tinymce.each(h.getAll("link"),function(a){var b=a.attr("href");q[b]||"stylesheet"!=a.attr("rel")||o.add(p,"link",{rel:"stylesheet",text:"text/css",href:b,"data-mce-fullpage":"1"}),delete q[b]}),tinymce.each(q,function(a){a.parentNode.removeChild(a)})}}function g(){var b,c="",d="";return a.getParam("fullpage_default_xml_pi")&&(c+='<?xml version="1.0" encoding="'+a.getParam("fullpage_default_encoding","ISO-8859-1")+'" ?>\n'),c+=a.getParam("fullpage_default_doctype","<!DOCTYPE html>"),c+="\n<html>\n<head>\n",(b=a.getParam("fullpage_default_title"))&&(c+="<title>"+b+"</title>\n"),(b=a.getParam("fullpage_default_encoding"))&&(c+='<meta http-equiv="Content-Type" content="text/html; charset='+b+'" />\n'),(b=a.getParam("fullpage_default_font_family"))&&(d+="font-family: "+b+";"),(b=a.getParam("fullpage_default_font_size"))&&(d+="font-size: "+b+";"),(b=a.getParam("fullpage_default_text_color"))&&(d+="color: "+b+";"),c+="</head>\n<body"+(d?' style="'+d+'"':"")+">\n"}function h(b){b.selection||b.source_view&&a.getParam("fullpage_hide_in_source_view")||(b.content=tinymce.trim(i)+"\n"+tinymce.trim(b.content)+"\n"+tinymce.trim(j))}var i,j,k=tinymce.each,l=tinymce.html.Node;a.addCommand("mceFullPageProperties",b),a.addButton("fullpage",{title:"Document properties",cmd:"mceFullPageProperties"}),a.addMenuItem("fullpage",{text:"Document properties",cmd:"mceFullPageProperties",context:"file"}),a.on("BeforeSetContent",f),a.on("GetContent",h)});
tinymce.PluginManager.add("fullscreen",function(a){function b(){var a,b,c=window,d=document,e=d.body;return e.offsetWidth&&(a=e.offsetWidth,b=e.offsetHeight),c.innerWidth&&c.innerHeight&&(a=c.innerWidth,b=c.innerHeight),{w:a,h:b}}function c(){var a=tinymce.DOM.getViewPort();return{x:a.x,y:a.y}}function d(a){scrollTo(a.x,a.y)}function e(){function e(){m.setStyle(p,"height",b().h-(o.clientHeight-p.clientHeight))}var n,o,p,q,r=document.body,s=document.documentElement;l=!l,o=a.getContainer(),n=o.style,p=a.getContentAreaContainer().firstChild,q=p.style,l?(k=c(),f=q.width,g=q.height,q.width=q.height="100%",i=n.width,j=n.height,n.width=n.height="",m.addClass(r,"mce-fullscreen"),m.addClass(s,"mce-fullscreen"),m.addClass(o,"mce-fullscreen"),m.bind(window,"resize",e),e(),h=e):(q.width=f,q.height=g,i&&(n.width=i),j&&(n.height=j),m.removeClass(r,"mce-fullscreen"),m.removeClass(s,"mce-fullscreen"),m.removeClass(o,"mce-fullscreen"),m.unbind(window,"resize",h),d(k)),a.fire("FullscreenStateChanged",{state:l})}var f,g,h,i,j,k,l=!1,m=tinymce.DOM;return a.settings.inline?void 0:(a.on("init",function(){a.addShortcut("Ctrl+Shift+F","",e)}),a.on("remove",function(){h&&m.unbind(window,"resize",h)}),a.addCommand("mceFullScreen",e),a.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Ctrl+Shift+F",selectable:!0,onClick:function(){e(),a.focus()},onPostRender:function(){var b=this;a.on("FullscreenStateChanged",function(a){b.active(a.state)})},context:"view"}),a.addButton("fullscreen",{tooltip:"Fullscreen",shortcut:"Ctrl+Alt+F",onClick:e,onPostRender:function(){var b=this;a.on("FullscreenStateChanged",function(a){b.active(a.state)})}}),{isFullscreen:function(){return l}})});
tinymce.PluginManager.add("hr",function(a){a.addCommand("InsertHorizontalRule",function(){a.execCommand("mceInsertContent",!1,"<hr />")}),a.addButton("hr",{icon:"hr",tooltip:"Horizontal line",cmd:"InsertHorizontalRule"}),a.addMenuItem("hr",{icon:"hr",text:"Horizontal line",cmd:"InsertHorizontalRule",context:"insert"})});
tinymce.PluginManager.add("image",function(a){function b(a,b){function c(a,c){d.parentNode&&d.parentNode.removeChild(d),b({width:a,height:c})}var d=document.createElement("img");d.onload=function(){c(Math.max(d.width,d.clientWidth),Math.max(d.height,d.clientHeight))},d.onerror=function(){c()};var e=d.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left=0,e.width=e.height="auto",document.body.appendChild(d),d.src=a}function c(a,b,c){function d(a,c){return c=c||[],tinymce.each(a,function(a){var e={text:a.text||a.title};a.menu?e.menu=d(a.menu):(e.value=a.value,b(e)),c.push(e)}),c}return d(a,c||[])}function d(b){return function(){var c=a.settings.image_list;"string"==typeof c?tinymce.util.XHR.send({url:c,success:function(a){b(tinymce.util.JSON.parse(a))}}):"function"==typeof c?c(b):b(c)}}function e(d){function e(){var a,b,c,d;a=l.find("#width")[0],b=l.find("#height")[0],a&&b&&(c=a.value(),d=b.value(),l.find("#constrain")[0].checked()&&o&&p&&c&&d&&(o!=c?(d=Math.round(c/o*d),isNaN(d)||b.value(d)):(c=Math.round(d/p*c),isNaN(c)||a.value(c))),o=c,p=d)}function f(){function b(b){function c(){b.onload=b.onerror=null,a.selection&&(a.selection.select(b),a.nodeChanged())}b.onload=function(){s.width||s.height||!u||t.setAttribs(b,{width:b.clientWidth,height:b.clientHeight}),c()},b.onerror=c}var c,d;j(),e(),s=tinymce.extend(s,l.toJSON()),s.alt||(s.alt=""),s.title||(s.title=""),""===s.width&&(s.width=null),""===s.height&&(s.height=null),s.style||(s.style=null),s={src:s.src,alt:s.alt,title:s.title,width:s.width,height:s.height,style:s.style,caption:s.caption,"class":s["class"]},a.undoManager.transact(function(){function e(b){return a.schema.getTextBlockElements()[b.nodeName]}if(!s.src)return void(m&&(t.remove(m),a.focus(),a.nodeChanged()));if(""===s.title&&(s.title=null),m?t.setAttribs(m,s):(s.id="__mcenew",a.focus(),a.selection.setContent(t.createHTML("img",s)),m=t.get("__mcenew"),t.setAttrib(m,"id",null)),a.editorUpload.uploadImagesAuto(),s.caption===!1&&t.is(m.parentNode,"figure.image")&&(c=m.parentNode,t.insertAfter(m,c),t.remove(c)),s.caption!==!0)b(m);else if(!t.is(m.parentNode,"figure.image")){d=m,m=m.cloneNode(!0),c=t.create("figure",{"class":"image"}),c.appendChild(m),c.appendChild(t.create("figcaption",{contentEditable:!0},"Caption")),c.contentEditable=!1;var f=t.getParent(d,e);f?t.split(f,d,c):t.replace(c,d),a.selection.select(c)}})}function g(a){return a&&(a=a.replace(/px$/,"")),a}function h(c){var d,e,f,g=c.meta||{};q&&q.value(a.convertURL(this.value(),"src")),tinymce.each(g,function(a,b){l.find("#"+b).value(a)}),g.width||g.height||(d=a.convertURL(this.value(),"src"),e=a.settings.image_prepend_url,f=new RegExp("^(?:[a-z]+:)?//","i"),e&&!f.test(d)&&d.substring(0,e.length)!==e&&(d=e+d),this.value(d),b(a.documentBaseURI.toAbsolute(this.value()),function(a){a.width&&a.height&&u&&(o=a.width,p=a.height,l.find("#width").value(o),l.find("#height").value(p))}))}function i(a){if(a.margin){var b=a.margin.split(" ");switch(b.length){case 1:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[0],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[0];break;case 2:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[1];break;case 3:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[1];break;case 4:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[3]}delete a.margin}return a}function j(){function b(a){return a.length>0&&/^[0-9]+$/.test(a)&&(a+="px"),a}if(a.settings.image_advtab){var c=l.toJSON(),d=t.parseStyle(c.style);d=i(d),c.vspace&&(d["margin-top"]=d["margin-bottom"]=b(c.vspace)),c.hspace&&(d["margin-left"]=d["margin-right"]=b(c.hspace)),c.border&&(d["border-width"]=b(c.border)),l.find("#style").value(t.serializeStyle(t.parseStyle(t.serializeStyle(d))))}}function k(){if(a.settings.image_advtab){var b=l.toJSON(),c=t.parseStyle(b.style);l.find("#vspace").value(""),l.find("#hspace").value(""),c=i(c),(c["margin-top"]&&c["margin-bottom"]||c["margin-right"]&&c["margin-left"])&&(c["margin-top"]===c["margin-bottom"]?l.find("#vspace").value(g(c["margin-top"])):l.find("#vspace").value(""),c["margin-right"]===c["margin-left"]?l.find("#hspace").value(g(c["margin-right"])):l.find("#hspace").value("")),c["border-width"]&&l.find("#border").value(g(c["border-width"])),l.find("#style").value(t.serializeStyle(t.parseStyle(t.serializeStyle(c))))}}var l,m,n,o,p,q,r,s={},t=a.dom,u=a.settings.image_dimensions!==!1;m=a.selection.getNode(),n=t.getParent(m,"figure.image"),n&&(m=t.select("img",n)[0]),m&&("IMG"!=m.nodeName||m.getAttribute("data-mce-object")||m.getAttribute("data-mce-placeholder"))&&(m=null),m&&(o=t.getAttrib(m,"width"),p=t.getAttrib(m,"height"),s={src:t.getAttrib(m,"src"),alt:t.getAttrib(m,"alt"),title:t.getAttrib(m,"title"),"class":t.getAttrib(m,"class"),width:o,height:p,caption:!!n}),d&&(q={type:"listbox",label:"Image list",values:c(d,function(b){b.value=a.convertURL(b.value||b.url,"src")},[{text:"None",value:""}]),value:s.src&&a.convertURL(s.src,"src"),onselect:function(a){var b=l.find("#alt");(!b.value()||a.lastControl&&b.value()==a.lastControl.text())&&b.value(a.control.text()),l.find("#src").value(a.control.value()).fire("change")},onPostRender:function(){q=this}}),a.settings.image_class_list&&(r={name:"class",type:"listbox",label:"Class",values:c(a.settings.image_class_list,function(b){b.value&&(b.textStyle=function(){return a.formatter.getCssText({inline:"img",classes:[b.value]})})})});var v=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:h},q];a.settings.image_description!==!1&&v.push({name:"alt",type:"textbox",label:"Image description"}),a.settings.image_title&&v.push({name:"title",type:"textbox",label:"Image Title"}),u&&v.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:e,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:e,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),v.push(r),a.settings.image_caption&&tinymce.Env.ceFalse&&v.push({name:"caption",type:"checkbox",label:"Caption"}),a.settings.image_advtab?(m&&(m.style.marginLeft&&m.style.marginRight&&m.style.marginLeft===m.style.marginRight&&(s.hspace=g(m.style.marginLeft)),m.style.marginTop&&m.style.marginBottom&&m.style.marginTop===m.style.marginBottom&&(s.vspace=g(m.style.marginTop)),m.style.borderWidth&&(s.border=g(m.style.borderWidth)),s.style=a.dom.serializeStyle(a.dom.parseStyle(a.dom.getAttrib(m,"style")))),l=a.windowManager.open({title:"Insert/edit image",data:s,bodyType:"tabpanel",body:[{title:"General",type:"form",items:v},{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:k},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:j},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]}],onSubmit:f})):l=a.windowManager.open({title:"Insert/edit image",data:s,body:v,onSubmit:f})}a.on("preInit",function(){function b(a){var b=a.attr("class");return b&&/\bimage\b/.test(b)}function c(a){return function(c){function d(b){b.attr("contenteditable",a?"true":null)}for(var e,f=c.length;f--;)e=c[f],b(e)&&(e.attr("contenteditable",a?"false":null),tinymce.each(e.getAll("figcaption"),d))}}a.parser.addNodeFilter("figure",c(!0)),a.serializer.addNodeFilter("figure",c(!1))}),a.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:d(e),stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),a.addMenuItem("image",{icon:"image",text:"Insert/edit image",onclick:d(e),context:"insert",prependToContext:!0}),a.addCommand("mceImage",d(e))});
!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;g>i;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;c>f;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("1",tinymce.PluginManager),h("2",tinymce.Env),h("3",tinymce.util.Promise),h("4",tinymce.util.URI),h("5",tinymce.util.Tools),h("6",tinymce.util.Delay),g("m",[],function(){function a(a,b){return d(document.createElement("canvas"),a,b)}function b(a){return a.getContext("2d")}function c(a){var b=null;try{b=a.getContext("webgl")||a.getContext("experimental-webgl")}catch(c){}return b||(b=null),b}function d(a,b,c){return a.width=b,a.height=c,a}return{create:a,resize:d,get2dContext:b,get3dContext:c}}),g("n",[],function(){function a(a){return a.naturalWidth||a.width}function b(a){return a.naturalHeight||a.height}return{getWidth:a,getHeight:b}}),g("o",[],function(){function a(a,b){return function(){a.apply(b,arguments)}}function b(b){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof b)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],h(b,a(d,this),a(e,this))}function c(a){var b=this;return null===this._state?void this._deferreds.push(a):void i(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function d(b){try{if(b===this)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"==typeof b||"function"==typeof b)){var c=b.then;if("function"==typeof c)return void h(a(c,b),a(d,this),a(e,this))}this._state=!0,this._value=b,f.call(this)}catch(g){e.call(this,g)}}function e(a){this._state=!1,this._value=a,f.call(this)}function f(){for(var a=0,b=this._deferreds.length;b>a;a++)c.call(this,this._deferreds[a]);this._deferreds=null}function g(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function h(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}if(window.Promise)return window.Promise;var i=b.immediateFn||"function"==typeof setImmediate&&setImmediate||function(a){setTimeout(a,1)},j=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};return b.prototype["catch"]=function(a){return this.then(null,a)},b.prototype.then=function(a,d){var e=this;return new b(function(b,f){c.call(e,new g(a,d,b,f))})},b.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&j(arguments[0])?arguments[0]:arguments);return new b(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},b.resolve=function(a){return a&&"object"==typeof a&&a.constructor===b?a:new b(function(b){b(a)})},b.reject=function(a){return new b(function(b,c){c(a)})},b.race=function(a){return new b(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},b}),g("p",[],function(){function a(a){var b=document.createElement("a");return b.href=a,b.pathname}function b(b){var c=a(b).split("."),d=c[c.length-1],e={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png"};return d&&(d=d.toLowerCase()),e[d]}return{guessMimeType:b}}),g("e",["o","m","p","n"],function(a,b,c,d){function e(b){return new a(function(a){function c(){b.removeEventListener("load",c),a(b)}b.complete?a(b):b.addEventListener("load",c)})}function f(a){return e(a).then(function(a){var c,e;return e=b.create(d.getWidth(a),d.getHeight(a)),c=b.get2dContext(e),c.drawImage(a,0,0),e})}function g(a){return e(a).then(function(a){var b=a.src;return 0===b.indexOf("blob:")?i(b):0===b.indexOf("data:")?j(b):f(a).then(function(a){return j(a.toDataURL(c.guessMimeType(b)))})})}function h(b){return new a(function(a){function c(){d.removeEventListener("load",c),a(d)}var d=new Image;d.addEventListener("load",c),d.src=URL.createObjectURL(b),d.complete&&c()})}function i(b){return new a(function(a){var c=new XMLHttpRequest;c.open("GET",b,!0),c.responseType="blob",c.onload=function(){200==this.status&&a(this.response)},c.send()})}function j(b){return new a(function(a){var c,d,e,f,g,h;if(b=b.split(","),f=/data:([^;]+)/.exec(b[0]),f&&(g=f[1]),c=atob(b[1]),window.WebKitBlobBuilder){for(h=new WebKitBlobBuilder,d=new ArrayBuffer(c.length),e=0;e<d.length;e++)d[e]=c.charCodeAt(e);return h.append(d),void a(h.getBlob(g))}for(d=new Uint8Array(c.length),e=0;e<d.length;e++)d[e]=c.charCodeAt(e);a(new Blob([d],{type:g}))})}function k(a){return 0===a.indexOf("blob:")?i(a):0===a.indexOf("data:")?j(a):null}function l(a,b){return j(a.toDataURL(b))}function m(b){return new a(function(a){var c=new FileReader;c.onloadend=function(){a(c.result)},c.readAsDataURL(b)})}function n(a){return m(a).then(function(a){return a.split(",")[1]})}function o(a){URL.revokeObjectURL(a.src)}return{blobToImage:h,imageToBlob:g,blobToDataUri:m,blobToBase64:n,imageToCanvas:f,canvasToBlob:l,revokeImageUrl:o,uriToBlob:k}}),g("q",[],function(){function a(a,b,c){return a=parseFloat(a),a>c?a=c:b>a&&(a=b),a}function b(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]}function c(a,b){var c,d,e,f,g=[],h=new Array(10);for(c=0;5>c;c++){for(d=0;5>d;d++)g[d]=b[d+5*c];for(d=0;5>d;d++){for(f=0,e=0;5>e;e++)f+=a[d+5*e]*g[e];h[d+5*c]=f}}return h}function d(b,c){return c=a(c,0,1),b.map(function(b,d){return d%6===0?b=1-(1-b)*c:b*=c,a(b,0,1)})}function e(b,d){var e;return d=a(d,-1,1),d*=100,0>d?e=127+d/100*127:(e=d%1,e=0===e?l[d]:l[Math.floor(d)]*(1-e)+l[Math.floor(d)+1]*e,e=127*e+127),c(b,[e/127,0,0,0,.5*(127-e),0,e/127,0,0,.5*(127-e),0,0,e/127,0,.5*(127-e),0,0,0,1,0,0,0,0,0,1])}function f(b,d){var e,f,g,h;return d=a(d,-1,1),e=1+(d>0?3*d:d),f=.3086,g=.6094,h=.082,c(b,[f*(1-e)+e,g*(1-e),h*(1-e),0,0,f*(1-e),g*(1-e)+e,h*(1-e),0,0,f*(1-e),g*(1-e),h*(1-e)+e,0,0,0,0,0,1,0,0,0,0,0,1])}function g(b,d){var e,f,g,h,i;return d=a(d,-180,180)/180*Math.PI,e=Math.cos(d),f=Math.sin(d),g=.213,h=.715,i=.072,c(b,[g+e*(1-g)+f*-g,h+e*-h+f*-h,i+e*-i+f*(1-i),0,0,g+e*-g+.143*f,h+e*(1-h)+.14*f,i+e*-i+f*-.283,0,0,g+e*-g+f*-(1-g),h+e*-h+f*h,i+e*(1-i)+f*i,0,0,0,0,0,1,0,0,0,0,0,1])}function h(b,d){return d=a(255*d,-255,255),c(b,[1,0,0,0,d,0,1,0,0,d,0,0,1,0,d,0,0,0,1,0,0,0,0,0,1])}function i(b,d,e,f){return d=a(d,0,2),e=a(e,0,2),f=a(f,0,2),c(b,[d,0,0,0,0,0,e,0,0,0,0,0,f,0,0,0,0,0,1,0,0,0,0,0,1])}function j(b,e){return e=a(e,0,1),c(b,d([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e))}function k(b,e){return e=a(e,0,1),c(b,d([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e))}var l=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];return{identity:b,adjust:d,multiply:c,adjustContrast:e,adjustBrightness:h,adjustSaturation:f,adjustHue:g,adjustColors:i,adjustSepia:j,adjustGrayscale:k}}),g("c",["m","n","e","q"],function(a,b,c,d){function e(d,e){return c.blobToImage(d).then(function(d){function f(a,b){var c,d,e,f,g,h=a.data,i=b[0],j=b[1],k=b[2],l=b[3],m=b[4],n=b[5],o=b[6],p=b[7],q=b[8],r=b[9],s=b[10],t=b[11],u=b[12],v=b[13],w=b[14],x=b[15],y=b[16],z=b[17],A=b[18],B=b[19];for(g=0;g<h.length;g+=4)c=h[g],d=h[g+1],e=h[g+2],f=h[g+3],h[g]=c*i+d*j+e*k+f*l+m,h[g+1]=c*n+d*o+e*p+f*q+r,h[g+2]=c*s+d*t+e*u+f*v+w,h[g+3]=c*x+d*y+e*z+f*A+B;return a}var g,h=a.create(b.getWidth(d),b.getHeight(d)),i=a.get2dContext(h);return i.drawImage(d,0,0),k(d),g=f(i.getImageData(0,0,h.width,h.height),e),i.putImageData(g,0,0),c.canvasToBlob(h)})}function f(d,e){return c.blobToImage(d).then(function(d){function f(a,b,c){function d(a,b,c){return a>c?a=c:b>a&&(a=b),a}var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;for(g=Math.round(Math.sqrt(c.length)),h=Math.floor(g/2),e=a.data,f=b.data,t=a.width,u=a.height,j=0;u>j;j++)for(i=0;t>i;i++){for(k=l=m=0,o=0;g>o;o++)for(n=0;g>n;n++)p=d(i+n-h,0,t-1),q=d(j+o-h,0,u-1),r=4*(q*t+p),s=c[o*g+n],k+=e[r]*s,l+=e[r+1]*s,m+=e[r+2]*s;r=4*(j*t+i),f[r]=d(k,0,255),f[r+1]=d(l,0,255),f[r+2]=d(m,0,255)}return b}var g,h,i=a.create(b.getWidth(d),b.getHeight(d)),j=a.get2dContext(i);return j.drawImage(d,0,0),k(d),g=j.getImageData(0,0,i.width,i.height),h=j.getImageData(0,0,i.width,i.height),h=f(g,h,e),j.putImageData(h,0,0),c.canvasToBlob(i)})}function g(d){return function(e,f){return c.blobToImage(e).then(function(e){function g(a,b){var c,d=a.data;for(c=0;c<d.length;c+=4)d[c]=b[d[c]],d[c+1]=b[d[c+1]],d[c+2]=b[d[c+2]];return a}var h,i,j=a.create(b.getWidth(e),b.getHeight(e)),l=a.get2dContext(j),m=new Array(256);for(i=0;i<m.length;i++)m[i]=d(i,f);return l.drawImage(e,0,0),k(e),h=g(l.getImageData(0,0,j.width,j.height),m),l.putImageData(h,0,0),c.canvasToBlob(j)})}}function h(a){return function(b,c){return e(b,a(d.identity(),c))}}function i(a){return function(b){return e(b,a)}}function j(a){return function(b){return f(b,a)}}var k=c.revokeImageUrl;return{invert:i([-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0]),brightness:h(d.adjustBrightness),hue:h(d.adjustHue),saturate:h(d.adjustSaturation),contrast:h(d.adjustContrast),grayscale:h(d.adjustGrayscale),sepia:h(d.adjustSepia),colorize:function(a,b,c,f){return e(a,d.adjustColors(d.identity(),b,c,f))},sharpen:j([0,-1,0,-1,5,-1,0,-1,0]),emboss:j([-2,-1,0,-1,1,1,0,1,2]),gamma:g(function(a,b){return 255*Math.pow(a/255,1-b)}),exposure:g(function(a,b){return 255*(1-Math.exp(-(a/255)*b))}),colorFilter:e,convoluteFilter:f}}),g("r",["o","e","m","n"],function(a,b,c,d){function e(a,b,c){var g=d.getWidth(a),h=d.getHeight(a),i=b/g,j=c/h,k=!1;(.5>i||i>2)&&(i=.5>i?.5:2,k=!0),(.5>j||j>2)&&(j=.5>j?.5:2,k=!0);var l=f(a,i,j);return k?l.then(function(a){return e(a,b,c)}):l}function f(b,e,f){return new a(function(a){var g=d.getWidth(b),h=d.getHeight(b),i=Math.floor(g*e),j=Math.floor(h*f),k=c.create(i,j),l=c.get2dContext(k);l.drawImage(b,0,0,g,h,0,0,i,j),a(k)})}return{scale:e}}),g("d",["e","m","n","r"],function(a,b,c,d){function e(d,e){return a.blobToImage(d).then(function(f){var g=b.create(c.getWidth(f),c.getHeight(f)),h=b.get2dContext(g),j=0,k=0;return e=0>e?360+e:e,90!=e&&270!=e||b.resize(g,g.height,g.width),90!=e&&180!=e||(j=g.width),270!=e&&180!=e||(k=g.height),h.translate(j,k),h.rotate(e*Math.PI/180),h.drawImage(f,0,0),i(f),a.canvasToBlob(g,d.type)})}function f(d,e){return a.blobToImage(d).then(function(d){var f=b.create(c.getWidth(d),c.getHeight(d)),g=b.get2dContext(f);return"v"==e?(g.scale(1,-1),g.drawImage(d,0,-f.height)):(g.scale(-1,1),g.drawImage(d,-f.width,0)),i(d),a.canvasToBlob(f)})}function g(c,d,e,f,g){return a.blobToImage(c).then(function(c){var h=b.create(f,g),j=b.get2dContext(h);return j.drawImage(c,-d,-e),i(c),a.canvasToBlob(h)})}function h(b,c,e){return a.blobToImage(b).then(function(f){var g;return g=d.scale(f,c,e).then(function(c){return a.canvasToBlob(c,b.type)}).then(j(f))["catch"](j(f))})}var i=a.revokeImageUrl,j=function(a){return function(b){return i(a),b}};return{rotate:e,flip:f,crop:g,resize:h}}),g("7",["c","d"],function(a,b){var c=function(b){return a.invert(b)},d=function(b){return a.sharpen(b)},e=function(b){return a.emboss(b)},f=function(b,c){return a.gamma(b,c)},g=function(b,c){return a.exposure(b,c)},h=function(b,c,d,e){return a.colorize(b,c,d,e)},i=function(b,c){return a.brightness(b,c)},j=function(b,c){return a.hue(b,c)},k=function(b,c){return a.saturate(b,c)},l=function(b,c){return a.contrast(b,c)},m=function(b,c){return a.grayscale(b,c)},n=function(b,c){return a.sepia(b,c)},o=function(a,c){return b.flip(a,c)},p=function(a,c,d,e,f){return b.crop(a,c,d,e,f)},q=function(a,c,d){return b.resize(a,c,d)},r=function(a,c){return b.rotate(a,c)};return{invert:c,sharpen:d,emboss:e,brightness:i,hue:j,saturate:k,contrast:l,grayscale:m,sepia:n,colorize:h,gamma:f,exposure:g,flip:o,crop:p,resize:q,rotate:r}}),g("8",["e"],function(a){var b=function(b){return a.blobToImage(b)},c=function(b){return a.imageToBlob(b)},d=function(b){return a.blobToDataUri(b)},e=function(b){return a.blobToBase64(b)};return{blobToImage:b,imageToBlob:c,blobToDataUri:d,blobToBase64:e}}),h("f",tinymce.dom.DOMUtils),h("g",tinymce.ui.Factory),h("h",tinymce.ui.Form),h("i",tinymce.ui.Container),h("s",tinymce.ui.Control),h("t",tinymce.ui.DragHelper),h("u",tinymce.geom.Rect),h("w",tinymce.dom.DomQuery),h("x",tinymce.util.Observable),h("y",tinymce.util.VK),g("v",["w","t","u","5","x","y"],function(a,b,c,d,e,f){var g=0;return function(h,i,j,k,l){function m(a,b){return{x:b.x+a.x,y:b.y+a.y,w:b.w,h:b.h}}function n(a,b){return{x:b.x-a.x,y:b.y-a.y,w:b.w,h:b.h}}function o(){return n(j,h)}function p(a,b,d,e){var f,g,i,k,l;f=b.x,g=b.y,i=b.w,k=b.h,f+=d*a.deltaX,g+=e*a.deltaY,i+=d*a.deltaW,k+=e*a.deltaH,20>i&&(i=20),20>k&&(k=20),l=h=c.clamp({x:f,y:g,w:i,h:k},j,"move"==a.name),l=n(j,l),y.fire("updateRect",{rect:l}),v(l)}function q(){function c(a){var c;return new b(D,{document:k.ownerDocument,handle:D+"-"+a.name,start:function(){c=h},drag:function(b){p(a,c,b.deltaX,b.deltaY)}})}a('<div id="'+D+'" class="'+C+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(k),d.each(B,function(b){a("#"+D,k).append('<div id="'+D+"-"+b+'"class="'+C+'croprect-block" style="display: none" data-mce-bogus="all">')}),d.each(z,function(b){a("#"+D,k).append('<div id="'+D+"-"+b.name+'" class="'+C+"croprect-handle "+C+"croprect-handle-"+b.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+b.label+'" aria-grabbed="false">')}),A=d.map(z,c),s(h),a(k).on("focusin focusout",function(b){a(b.target).attr("aria-grabbed","focus"===b.type)}),a(k).on("keydown",function(a){function b(a,b,d,e,f){a.stopPropagation(),a.preventDefault(),p(c,d,e,f)}var c;switch(d.each(z,function(b){return a.target.id==D+"-"+b.name?(c=b,!1):void 0}),a.keyCode){case f.LEFT:b(a,c,h,-10,0);break;case f.RIGHT:b(a,c,h,10,0);break;case f.UP:b(a,c,h,0,-10);break;case f.DOWN:b(a,c,h,0,10);break;case f.ENTER:case f.SPACEBAR:a.preventDefault(),l()}})}function r(b){var c;c=d.map(z,function(a){return"#"+D+"-"+a.name}).concat(d.map(B,function(a){return"#"+D+"-"+a})).join(","),b?a(c,k).show():a(c,k).hide()}function s(b){function c(b,c){c.h<0&&(c.h=0),c.w<0&&(c.w=0),a("#"+D+"-"+b,k).css({left:c.x,top:c.y,width:c.w,height:c.h})}d.each(z,function(c){a("#"+D+"-"+c.name,k).css({left:b.w*c.xMul+b.x,top:b.h*c.yMul+b.y})}),c("top",{x:i.x,y:i.y,w:i.w,h:b.y-i.y}),c("right",{x:b.x+b.w,y:b.y,w:i.w-b.x-b.w+i.x,h:b.h}),c("bottom",{x:i.x,y:b.y+b.h,w:i.w,h:i.h-b.y-b.h+i.y}),c("left",{x:i.x,y:b.y,w:b.x-i.x,h:b.h}),c("move",b)}function t(a){h=a,s(h)}function u(a){i=a,s(h)}function v(a){t(m(j,a))}function w(a){j=a,s(h)}function x(){d.each(A,function(a){a.destroy()}),A=[]}var y,z,A,B,C="mce-",D=C+"crid-"+g++;return z=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],B=["top","right","bottom","left"],q(k),y=d.extend({toggleVisibility:r,setClampRect:w,setRect:t,getInnerRect:o,setInnerRect:v,setViewPortRect:u,destroy:x},e)}}),g("j",["s","t","u","5","3","v"],function(a,b,c,d,e,f){function g(a){return new e(function(b){function c(){a.removeEventListener("load",c),b(a)}a.complete?b(a):a.addEventListener("load",c)})}return a.extend({Defaults:{classes:"imagepanel"},selection:function(a){return arguments.length?(this.state.set("rect",a),this):this.state.get("rect")},imageSize:function(){var a=this.state.get("viewRect");return{w:a.w,h:a.h}},toggleCropRect:function(a){this.state.set("cropEnabled",a)},imageSrc:function(a){var b=this,d=new Image;d.src=a,g(d).then(function(){var a,e,f=b.state.get("viewRect");e=b.$el.find("img"),e[0]?e.replaceWith(d):b.getEl().appendChild(d),a={x:0,y:0,w:d.naturalWidth,h:d.naturalHeight},b.state.set("viewRect",a),b.state.set("rect",c.inflate(a,-20,-20)),f&&f.w==a.w&&f.h==a.h||b.zoomFit(),b.repaintImage(),b.fire("load")})},zoom:function(a){return arguments.length?(this.state.set("zoom",a),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var a,b,c,d,e,f,g,h=this;g=10,a=h.$el.find("img"),b=h.getEl().clientWidth,c=h.getEl().clientHeight,d=a[0].naturalWidth,e=a[0].naturalHeight,f=Math.min((b-g)/d,(c-g)/e),f>=1&&(f=1),h.zoom(f)},repaintImage:function(){var a,b,c,d,e,f,g,h,i,j;j=this.getEl(),h=this.zoom(),i=this.state.get("rect"),g=this.$el.find("img"),e=j.offsetWidth,f=j.offsetHeight,c=g[0].naturalWidth*h,d=g[0].naturalHeight*h,a=Math.max(0,e/2-c/2),b=Math.max(0,f/2-d/2),g.css({left:a,top:b,width:c,height:d}),this.cropRect&&(this.cropRect.setRect({x:i.x*h+a,y:i.y*h+b,w:i.w*h,h:i.h*h}),this.cropRect.setClampRect({x:a,y:b,w:c,h:d}),this.cropRect.setViewPortRect({x:0,y:0,w:e,h:f}))},bindStates:function(){function a(a){b.cropRect=new f(a,b.state.get("viewRect"),b.state.get("viewRect"),b.getEl(),function(){b.fire("crop")}),b.cropRect.on("updateRect",function(a){var c=a.rect,d=b.zoom();c={x:Math.round(c.x/d),y:Math.round(c.y/d),w:Math.round(c.w/d),h:Math.round(c.h/d)},b.state.set("rect",c)}),b.on("remove",b.cropRect.destroy)}var b=this;b.state.on("change:cropEnabled",function(a){b.cropRect.toggleVisibility(a.value),b.repaintImage()}),b.state.on("change:zoom",function(){b.repaintImage()}),b.state.on("change:rect",function(c){var d=c.value;b.cropRect||a(d),b.cropRect.setRect(d)})}})}),g("k",[],function(){return function(){function a(a){var b;return b=f.splice(++g),f.push(a),{state:a,removed:b}}function b(){return d()?f[--g]:void 0}function c(){return e()?f[++g]:void 0}function d(){return g>0}function e(){return-1!=g&&g<f.length-1}var f=[],g=-1;return{data:f,add:a,undo:b,redo:c,canUndo:d,canRedo:e}}}),g("9",["f","5","3","g","h","i","j","7","8","k"],function(a,b,c,d,e,f,g,h,i,j){function k(a){return{blob:a,url:URL.createObjectURL(a)}}function l(a){a&&URL.revokeObjectURL(a.url)}function m(a){b.each(a,l)}function n(c,i,n){function o(a){var b,c,d,e;b=L.find("#w")[0],c=L.find("#h")[0],d=parseInt(b.value(),10),e=parseInt(c.value(),10),L.find("#constrain")[0].checked()&&ga&&ha&&d&&e&&("w"==a.control.settings.name?(e=Math.round(d*ia),c.value(e)):(d=Math.round(e*ja),b.value(d))),ga=d,ha=e}function p(a){return Math.round(100*a)+"%"}function q(){L.find("#undo").disabled(!ka.canUndo()),L.find("#redo").disabled(!ka.canRedo()),L.statusbar.find("#save").disabled(!ka.canUndo())}function r(){L.find("#undo").disabled(!0),L.find("#redo").disabled(!0)}function s(a){a&&S.imageSrc(a.url)}function t(a){return function(){var c=b.grep(fa,function(b){return b.settings.name!=a});b.each(c,function(a){a.hide()}),a.show(),a.focus()}}function u(a){O=k(a),s(O)}function v(a){c=k(a),s(c),m(ka.add(c).removed),q()}function w(){var a=S.selection();h.crop(c.blob,a.x,a.y,a.w,a.h).then(function(a){v(a),z()})}function x(a){var b=[].slice.call(arguments,1);return function(){var d=O||c;a.apply(this,[d.blob].concat(b)).then(u)}}function y(a){var b=[].slice.call(arguments,1);return function(){a.apply(this,[c.blob].concat(b)).then(v)}}function z(){s(c),l(O),t(M)(),q()}function A(){O&&(v(O.blob),z())}function B(){var a=S.zoom();2>a&&(a+=.1),S.zoom(a)}function C(){var a=S.zoom();a>.1&&(a-=.1),S.zoom(a)}function D(){c=ka.undo(),s(c),q()}function E(){c=ka.redo(),s(c),q()}function F(){i(c.blob),L.close()}function G(a){return new e({layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:a})}function H(a,b){return G([{text:"Back",onclick:z},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:A}]).hide().on("show",function(){r(),b(c.blob).then(function(a){var b=k(a);s(b),l(O),O=b})})}function I(a,b,d,e,f){function g(a){b(c.blob,a).then(function(a){var b=k(a);s(b),l(O),O=b})}return G([{text:"Back",onclick:z},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(a){g(a.value)},minValue:e,maxValue:f,value:d,previewFilter:p},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:A}]).hide().on("show",function(){this.find("slider").value(d),r()})}function J(a,b){function d(){var a,d,e;a=L.find("#r")[0].value(),d=L.find("#g")[0].value(),e=L.find("#b")[0].value(),b(c.blob,a,d,e).then(function(a){var b=k(a);s(b),l(O),O=b})}return G([{text:"Back",onclick:z},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:0,value:1,maxValue:2,ondragend:d,previewFilter:p},{type:"slider",label:"G",name:"g",minValue:0,value:1,maxValue:2,ondragend:d,previewFilter:p},{type:"slider",label:"B",name:"b",minValue:0,value:1,maxValue:2,ondragend:d,previewFilter:p},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:A}]).hide().on("show",function(){L.find("#r,#g,#b").value(1),r()})}function K(a){a.control.value()===!0&&(ia=ha/ga,ja=ga/ha)}var L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka=new j;P=G([{text:"Back",onclick:z},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:w}]).hide().on("show hide",function(a){S.toggleCropRect("show"==a.type)}).on("show",r),Q=G([{text:"Back",onclick:z},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:o},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:o},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:K},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}]).hide().on("submit",function(a){var b=parseInt(L.find("#w").value(),10),c=parseInt(L.find("#h").value(),10);a.preventDefault(),y(h.resize,b,c)(),z()}).on("show",r),R=G([{text:"Back",onclick:z},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:x(h.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:x(h.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:x(h.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:x(h.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:A}]).hide().on("show",r),V=H("Invert",h.invert),ba=H("Sharpen",h.sharpen),ca=H("Emboss",h.emboss),W=I("Brightness",h.brightness,0,-1,1),X=I("Hue",h.hue,180,0,360),Y=I("Saturate",h.saturate,0,-1,1),Z=I("Contrast",h.contrast,0,-1,1),$=I("Grayscale",h.grayscale,0,0,1),_=I("Sepia",h.sepia,0,0,1),aa=J("Colorize",h.colorize),da=I("Gamma",h.gamma,0,-1,1),ea=I("Exposure",h.exposure,1,0,2),N=G([{text:"Back",onclick:z},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:t(X)},{text:"saturate",icon:"saturate",onclick:t(Y)},{text:"sepia",icon:"sepia",onclick:t(_)},{text:"emboss",icon:"emboss",onclick:t(ca)},{text:"exposure",icon:"exposure",onclick:t(ea)},{type:"spacer",flex:1}]).hide(),M=G([{tooltip:"Crop",icon:"crop",onclick:t(P)},{tooltip:"Resize",icon:"resize2",onclick:t(Q)},{tooltip:"Orientation",icon:"orientation",onclick:t(R)},{tooltip:"Brightness",icon:"sun",onclick:t(W)},{tooltip:"Sharpen",icon:"sharpen",onclick:t(ba)},{tooltip:"Contrast",icon:"contrast",onclick:t(Z)},{tooltip:"Color levels",icon:"drop",onclick:t(aa)},{tooltip:"Gamma",icon:"gamma",onclick:t(da)},{tooltip:"Invert",icon:"invert",onclick:t(V)}]),S=new g({flex:1,imageSrc:c.url}),T=new f({layout:"flex",direction:"column",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:D},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:E},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:B},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:C}]}),U=new f({type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:[T,S]}),fa=[M,P,Q,R,N,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea],L=d.create("window",{layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(a.DOM.getViewPort().w,800),minHeight:Math.min(a.DOM.getViewPort().h,650),title:"Edit image",items:fa.concat([U]),buttons:[{text:"Save",name:"save",subtype:"primary",onclick:F},{text:"Cancel",onclick:"close"}]}),L.renderTo(document.body).reflow(),L.on("close",function(){n(),m(ka.data),ka=null,O=null}),ka.add(c),q(),S.on("load",function(){ga=S.imageSize().w,ha=S.imageSize().h,ia=ha/ga,ja=ga/ha,L.find("#w").value(ga),L.find("#h").value(ha)}),S.on("crop",w)}function o(a){return new c(function(b,c){n(k(a),b,c)})}return{edit:o}}),g("a",[],function(){function a(a){function b(a){return/^[0-9\.]+px$/.test(a)}var c,d;return c=a.style.width,d=a.style.height,c||d?b(c)&&b(d)?{w:parseInt(c,10),h:parseInt(d,10)}:null:(c=a.width,d=a.height,c&&d?{w:parseInt(c,10),h:parseInt(d,10)}:null)}function b(a,b){var c,d;b&&(c=a.style.width,d=a.style.height,(c||d)&&(a.style.width=b.w+"px",a.style.height=b.h+"px",a.removeAttribute("data-mce-style")),c=a.width,d=a.height,(c||d)&&(a.setAttribute("width",b.w),a.setAttribute("height",b.h)))}function c(a){return{w:a.naturalWidth,h:a.naturalHeight}}return{getImageSize:a,setImageSize:b,getNaturalImageSize:c}}),g("l",["3","5"],function(a,b){var c=function(a){return null!==a&&void 0!==a},d=function(a,b){var d;return d=b.reduce(function(a,b){return c(a)?a[b]:void 0},a),c(d)?d:null},e=function(c,d){return new a(function(a){var e;e=new XMLHttpRequest,e.onreadystatechange=function(){4===e.readyState&&a({status:e.status,blob:this.response})},e.open("GET",c,!0),b.each(d,function(a,b){e.setRequestHeader(b,a)}),e.responseType="blob",e.send()})},f=function(b){return new a(function(a){var c=new FileReader;c.onload=function(b){var c=b.target;a(c.result)},c.readAsText(b)})},g=function(a){var b;try{b=JSON.parse(a)}catch(c){}return b};return{traverse:d,readBlob:f,requestUrlAsBlob:e,parseJson:g}}),g("b",["3","5","l"],function(a,b,c){function d(b){return c.requestUrlAsBlob(b,{}).then(function(b){return b.status>=400?f(b.status):a.resolve(b.blob)})}var e=function(a){return 400===a||403===a||500===a},f=function(b){return a.reject("ImageProxy HTTP error: "+b)},g=function(b){a.reject("ImageProxy Service error: "+b)},h=function(a,b){return c.readBlob(b).then(function(a){var b=c.parseJson(a),d=c.traverse(b,["error","type"]);return g(d?d:"Invalid JSON")})},i=function(a,b){return e(a)?h(a,b):f(a)},j=function(b,d){return c.requestUrlAsBlob(b,{"Content-Type":"application/json;charset=UTF-8","tiny-api-key":d}).then(function(b){return b.status>=400?i(b.status,b.blob):a.resolve(b.blob)})},k=function(a,b){return b?j(a,b):d(a)};return{getUrl:k}}),g("0",["1","2","3","4","5","6","7","8","9","a","b"],function(a,b,c,d,e,f,g,h,i,j,k){var l=function(a){function l(b){a.notificationManager.open({text:b,type:"error"})}function m(){return a.selection.getNode()}function n(){return"imagetools"+G++}function o(b){var c=b.src;return 0===c.indexOf("data:")||0===c.indexOf("blob:")||new d(c).host===a.documentBaseURI.host}function p(b){return-1!==e.inArray(a.settings.imagetools_cors_hosts,new d(b.src).host)}function q(){return a.settings.api_key||a.settings.imagetools_api_key}function r(b){var c,d=b.src;return p(b)?k.getUrl(b.src,null):o(b)?h.imageToBlob(b):(d=a.settings.imagetools_proxy,d+=(-1===d.indexOf("?")?"?":"&")+"url="+encodeURIComponent(b.src),c=q(),k.getUrl(d,c))}function s(){var b;return b=a.editorUpload.blobCache.getByUri(m().src),b?b.blob():r(m())}function t(){E=f.setEditorTimeout(a,function(){a.editorUpload.uploadImagesAuto()},3e4)}function u(){clearTimeout(E)}function v(b,c){return h.blobToDataUri(b).then(function(e){var f,g,h,i,j;return j=m(),f=n(),h=a.editorUpload.blobCache,g=d.parseDataUri(e).data,i=h.create(f,b,g),h.add(i),a.undoManager.transact(function(){function b(){a.$(j).off("load",b),a.nodeChanged(),c?a.editorUpload.uploadImagesAuto():(u(),t())}a.$(j).on("load",b),a.$(j).attr({src:i.blobUri()}).removeAttr("data-mce-src")}),i})}function w(b){return function(){return a._scanForImages().then(s).then(b).then(v,l)}}function x(a){return function(){return w(function(b){var c=j.getImageSize(m());return c&&j.setImageSize(m(),{w:c.h,h:c.w}),g.rotate(b,a)})()}}function y(a){return function(){return w(function(b){return g.flip(b,a)})()}}function z(){var a=m(),b=j.getNaturalImageSize(a),d=function(d){return new c(function(c){h.blobToImage(d).then(function(e){var f=j.getNaturalImageSize(e);b.w==f.w&&b.h==f.h||j.getImageSize(a)&&j.setImageSize(a,f),URL.revokeObjectURL(e.src),c(d)})})},e=function(a){return i.edit(a).then(d).then(function(a){v(a,!0)},function(){})};a&&r(a).then(e,l)}function A(){a.addButton("rotateleft",{title:"Rotate counterclockwise",onclick:x(-90)}),a.addButton("rotateright",{title:"Rotate clockwise",onclick:x(90)}),a.addButton("flipv",{title:"Flip vertically",onclick:y("v")}),a.addButton("fliph",{title:"Flip horizontally",onclick:y("h")}),a.addButton("editimage",{title:"Edit image",onclick:z}),a.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})}function B(){a.on("NodeChange",function(b){F&&F.src!=b.element.src&&(u(),a.editorUpload.uploadImagesAuto(),F=void 0),C(b.element)&&(F=b.element)})}function C(b){var c=a.dom.is(b,"img:not([data-mce-object],[data-mce-placeholder])");return c&&(o(b)||p(b)||a.settings.imagetools_proxy)}function D(){var b=a.settings.imagetools_toolbar;b||(b="rotateleft rotateright | flipv fliph | crop editimage imageoptions"),a.addContextToolbar(C,b)}var E,F,G=0;b.fileApi&&(A(),D(),B(),a.addCommand("mceEditImage",z))};return a.add("imagetools",l),function(){}}),d("0")()}();
tinymce.PluginManager.add("importcss",function(a){function b(a){var b=tinymce.Env.cacheSuffix;return"string"==typeof a&&(a=a.replace("?"+b,"").replace("&"+b,"")),a}function c(b){var c=a.settings,d=c.skin!==!1?c.skin||"lightgray":!1;if(d){var e=c.skin_url;return e=e?a.documentBaseURI.toAbsolute(e):tinymce.baseURL+"/skins/"+d,b===e+"/content"+(a.inline?".inline":"")+".min.css"}return!1}function d(a){return"string"==typeof a?function(b){return-1!==b.indexOf(a)}:a instanceof RegExp?function(b){return a.test(b)}:a}function e(d,e){function f(a,d){var i,j=a.href;if(j=b(j),j&&e(j,d)&&!c(j)){h(a.imports,function(a){f(a,!0)});try{i=a.cssRules||a.rules}catch(k){}h(i,function(a){a.styleSheet?f(a.styleSheet,!0):a.selectorText&&h(a.selectorText.split(","),function(a){g.push(tinymce.trim(a))})})}}var g=[],i={};h(a.contentCSS,function(a){i[a]=!0}),e||(e=function(a,b){return b||i[a]});try{h(d.styleSheets,function(a){f(a)})}catch(j){}return g}function f(b){var c,d=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(b);if(d){var e=d[1],f=d[2].substr(1).split(".").join(" "),g=tinymce.makeMap("a,img");return d[1]?(c={title:b},a.schema.getTextBlockElements()[e]?c.block=e:a.schema.getBlockElements()[e]||g[e.toLowerCase()]?c.selector=e:c.inline=e):d[2]&&(c={inline:"span",title:b.substr(1),classes:f}),a.settings.importcss_merge_classes!==!1?c.classes=f:c.attributes={"class":f},c}}var g=this,h=tinymce.each;a.on("renderFormatsMenu",function(b){var c=a.settings,i={},j=c.importcss_selector_converter||f,k=d(c.importcss_selector_filter),l=b.control;a.settings.importcss_append||l.items().remove();var m=[];tinymce.each(c.importcss_groups,function(a){a=tinymce.extend({},a),a.filter=d(a.filter),m.push(a)}),h(e(b.doc||a.getDoc(),d(c.importcss_file_filter)),function(b){if(-1===b.indexOf(".mce-")&&!i[b]&&(!k||k(b))){var c,d=j.call(g,b);if(d){var e=d.name||tinymce.DOM.uniqueId();if(m)for(var f=0;f<m.length;f++)if(!m[f].filter||m[f].filter(b)){m[f].item||(m[f].item={text:m[f].title,menu:[]}),c=m[f].item.menu;break}a.formatter.register(e,d);var h=tinymce.extend({},l.settings.itemDefaults,{text:d.title,format:e});c?c.push(h):l.add(h)}i[b]=!0}}),h(m,function(a){l.add(a.item)}),b.control.renderNew()}),g.convertSelectorToFormat=f});
tinymce.PluginManager.add("insertdatetime",function(a){function b(b,c){function d(a,b){if(a=""+a,a.length<b)for(var c=0;c<b-a.length;c++)a="0"+a;return a}return c=c||new Date,b=b.replace("%D","%m/%d/%Y"),b=b.replace("%r","%I:%M:%S %p"),b=b.replace("%Y",""+c.getFullYear()),b=b.replace("%y",""+c.getYear()),b=b.replace("%m",d(c.getMonth()+1,2)),b=b.replace("%d",d(c.getDate(),2)),b=b.replace("%H",""+d(c.getHours(),2)),b=b.replace("%M",""+d(c.getMinutes(),2)),b=b.replace("%S",""+d(c.getSeconds(),2)),b=b.replace("%I",""+((c.getHours()+11)%12+1)),b=b.replace("%p",""+(c.getHours()<12?"AM":"PM")),b=b.replace("%B",""+a.translate(i[c.getMonth()])),b=b.replace("%b",""+a.translate(h[c.getMonth()])),b=b.replace("%A",""+a.translate(g[c.getDay()])),b=b.replace("%a",""+a.translate(f[c.getDay()])),b=b.replace("%%","%")}function c(c){var d=b(c);if(a.settings.insertdatetime_element){var e;e=b(/%[HMSIp]/.test(c)?"%Y-%m-%dT%H:%M":"%Y-%m-%d"),d='<time datetime="'+e+'">'+d+"</time>";var f=a.dom.getParent(a.selection.getStart(),"time");if(f)return void a.dom.setOuterHTML(f,d)}a.insertContent(d)}var d,e,f="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),g="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),h="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),i="January February March April May June July August September October November December".split(" "),j=[];a.addCommand("mceInsertDate",function(){c(a.getParam("insertdatetime_dateformat",a.translate("%Y-%m-%d")))}),a.addCommand("mceInsertTime",function(){c(a.getParam("insertdatetime_timeformat",a.translate("%H:%M:%S")))}),a.addButton("insertdatetime",{type:"splitbutton",title:"Insert date/time",onclick:function(){c(d||e)},menu:j}),tinymce.each(a.settings.insertdatetime_formats||["%H:%M:%S","%Y-%m-%d","%I:%M:%S %p","%D"],function(a){e||(e=a),j.push({text:b(a),onclick:function(){d=a,c(a)}})}),a.addMenuItem("insertdatetime",{icon:"date",text:"Insert date/time",menu:j,context:"insert"})});
!function(a){a.PluginManager.add("legacyoutput",function(b,c,d){b.settings.inline_styles=!1,b.on("init",function(){var c="p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",d=a.explode(b.settings.font_size_style_values),e=b.schema;b.formatter.register({alignleft:{selector:c,attributes:{align:"left"}},aligncenter:{selector:c,attributes:{align:"center"}},alignright:{selector:c,attributes:{align:"right"}},alignjustify:{selector:c,attributes:{align:"justify"}},bold:[{inline:"b",remove:"all"},{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}}],italic:[{inline:"i",remove:"all"},{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}}],underline:[{inline:"u",remove:"all"},{inline:"span",styles:{textDecoration:"underline"},exact:!0}],strikethrough:[{inline:"strike",remove:"all"},{inline:"span",styles:{textDecoration:"line-through"},exact:!0}],fontname:{inline:"font",attributes:{face:"%value"}},fontsize:{inline:"font",attributes:{size:function(b){return a.inArray(d,b.value)+1}}},forecolor:{inline:"font",attributes:{color:"%value"}},hilitecolor:{inline:"font",styles:{backgroundColor:"%value"}}}),a.each("b,i,u,strike".split(","),function(a){e.addValidElements(a+"[*]")}),e.getElementRule("font")||e.addValidElements("font[face|size|color|style]"),a.each(c.split(","),function(a){var b=e.getElementRule(a);b&&(b.attributes.align||(b.attributes.align={},b.attributesOrder.push("align")))})}),b.addButton("fontsizeselect",function(){var a=[],c="8pt=1 10pt=2 12pt=3 14pt=4 18pt=5 24pt=6 36pt=7",d=b.settings.fontsize_formats||c;return b.$.each(d.split(" "),function(b,c){var d=c,e=c,f=c.split("=");f.length>1&&(d=f[0],e=f[1]),a.push({text:d,value:e})}),{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:a,fixedWidth:!0,onPostRender:function(){var a=this;b.on("NodeChange",function(){var c;c=b.dom.getParent(b.selection.getNode(),"font"),c?a.value(c.size):a.value("")})},onclick:function(a){a.control.settings.value&&b.execCommand("FontSize",!1,a.control.settings.value)}}}),b.addButton("fontselect",function(){function a(a){a=a.replace(/;$/,"").split(";");for(var b=a.length;b--;)a[b]=a[b].split("=");return a}var c="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats",e=[],f=a(b.settings.font_formats||c);return d.each(f,function(a,b){e.push({text:{raw:b[0]},value:b[1],textStyle:-1==b[1].indexOf("dings")?"font-family:"+b[1]:""})}),{type:"listbox",text:"Font Family",tooltip:"Font Family",values:e,fixedWidth:!0,onPostRender:function(){var a=this;b.on("NodeChange",function(){var c;c=b.dom.getParent(b.selection.getNode(),"font"),c?a.value(c.face):a.value("")})},onselect:function(a){a.control.settings.value&&b.execCommand("FontName",!1,a.control.settings.value)}}})})}(tinymce);
tinymce.PluginManager.add("link",function(a){function b(b){return function(){var c=a.settings.link_list;"string"==typeof c?tinymce.util.XHR.send({url:c,success:function(a){b(tinymce.util.JSON.parse(a))}}):"function"==typeof c?c(b):b(c)}}function c(a,b,c){function d(a,c){return c=c||[],tinymce.each(a,function(a){var e={text:a.text||a.title};a.menu?e.menu=d(a.menu):(e.value=a.value,b&&b(e)),c.push(e)}),c}return d(a,c||[])}function d(b){function d(a){var b=l.find("#text");(!b.value()||a.lastControl&&b.value()==a.lastControl.text())&&b.value(a.control.text()),l.find("#href").value(a.control.value())}function e(b){var c=[];return tinymce.each(a.dom.select("a:not([href])"),function(a){var d=a.name||a.id;d&&c.push({text:d,value:"#"+d,selected:-1!=b.indexOf("#"+d)})}),c.length?(c.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:c,onselect:d}):void 0}function f(){!k&&0===u.text.length&&m&&this.parent().parent().find("#text")[0].value(this.value())}function g(b){var c=b.meta||{};o&&o.value(a.convertURL(this.value(),"href")),tinymce.each(b.meta,function(a,b){l.find("#"+b).value(a)}),c.text||f.call(this)}function h(a){var b=v.getContent();if(/</.test(b)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(b)||-1==b.indexOf("href=")))return!1;if(a){var c,d=a.childNodes;if(0===d.length)return!1;for(c=d.length-1;c>=0;c--)if(3!=d[c].nodeType)return!1}return!0}var i,j,k,l,m,n,o,p,q,r,s,t,u={},v=a.selection,w=a.dom;i=v.getNode(),j=w.getParent(i,"a[href]"),m=h(),u.text=k=j?j.innerText||j.textContent:v.getContent({format:"text"}),u.href=j?w.getAttrib(j,"href"):"",j?u.target=w.getAttrib(j,"target"):a.settings.default_link_target&&(u.target=a.settings.default_link_target),(t=w.getAttrib(j,"rel"))&&(u.rel=t),(t=w.getAttrib(j,"class"))&&(u["class"]=t),(t=w.getAttrib(j,"title"))&&(u.title=t),m&&(n={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){u.text=this.value()}}),b&&(o={type:"listbox",label:"Link list",values:c(b,function(b){b.value=a.convertURL(b.value||b.url,"href")},[{text:"None",value:""}]),onselect:d,value:a.convertURL(u.href,"href"),onPostRender:function(){o=this}}),a.settings.target_list!==!1&&(a.settings.target_list||(a.settings.target_list=[{text:"None",value:""},{text:"New window",value:"_blank"}]),q={name:"target",type:"listbox",label:"Target",values:c(a.settings.target_list)}),a.settings.rel_list&&(p={name:"rel",type:"listbox",label:"Rel",values:c(a.settings.rel_list)}),a.settings.link_class_list&&(r={name:"class",type:"listbox",label:"Class",values:c(a.settings.link_class_list,function(b){b.value&&(b.textStyle=function(){return a.formatter.getCssText({inline:"a",classes:[b.value]})})})}),a.settings.link_title!==!1&&(s={name:"title",type:"textbox",label:"Title",value:u.title}),l=a.windowManager.open({title:"Insert link",data:u,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:g,onkeyup:f},n,s,e(u.href),o,p,q,r],onSubmit:function(b){function c(b,c){var d=a.selection.getRng();tinymce.util.Delay.setEditorTimeout(a,function(){a.windowManager.confirm(b,function(b){a.selection.setRng(d),c(b)})})}function d(){var b={href:e,target:u.target?u.target:null,rel:u.rel?u.rel:null,"class":u["class"]?u["class"]:null,title:u.title?u.title:null};j?(a.focus(),m&&u.text!=k&&("innerText"in j?j.innerText=u.text:j.textContent=u.text),w.setAttribs(j,b),v.select(j),a.undoManager.add()):m?a.insertContent(w.createHTML("a",b,w.encode(u.text))):a.execCommand("mceInsertLink",!1,b)}var e;return u=tinymce.extend(u,b.data),(e=u.href)?e.indexOf("@")>0&&-1==e.indexOf("//")&&-1==e.indexOf("mailto:")?void c("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(a){a&&(e="mailto:"+e),d()}):a.settings.link_assume_external_targets&&!/^\w+:/i.test(e)||!a.settings.link_assume_external_targets&&/^\s*www[\.|\d\.]/i.test(e)?void c("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(a){a&&(e="http://"+e),d()}):void d():void a.execCommand("unlink")}})}a.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Meta+K",onclick:b(d),stateSelector:"a[href]"}),a.addButton("unlink",{icon:"unlink",tooltip:"Remove link",cmd:"unlink",stateSelector:"a[href]"}),a.addShortcut("Meta+K","",b(d)),a.addCommand("mceLink",b(d)),this.showDialog=d,a.addMenuItem("link",{icon:"link",text:"Insert/edit link",shortcut:"Meta+K",onclick:b(d),stateSelector:"a[href]",context:"insert",prependToContext:!0})});
tinymce.PluginManager.add("lists",function(a){function b(b){return a.$.contains(a.getBody(),b)}function c(a){return a&&"BR"==a.nodeName}function d(a){return a&&/^(OL|UL|DL)$/.test(a.nodeName)&&b(a)}function e(a){return a.parentNode.firstChild==a}function f(a){return a.parentNode.lastChild==a}function g(b){return b&&!!a.schema.getTextBlockElements()[b.nodeName]}function h(b){return b===a.getBody()}var i=this;a.on("init",function(){function j(a,b){var c=A.isEmpty(a);return b&&A.select("span[data-mce-type=bookmark]").length>0?!1:c}function k(a){function b(b){var d,e,f;e=a[b?"startContainer":"endContainer"],f=a[b?"startOffset":"endOffset"],1==e.nodeType&&(d=A.create("span",{"data-mce-type":"bookmark"}),e.hasChildNodes()?(f=Math.min(f,e.childNodes.length-1),b?e.insertBefore(d,e.childNodes[f]):A.insertAfter(d,e.childNodes[f])):e.appendChild(d),e=d,f=0),c[b?"startContainer":"endContainer"]=e,c[b?"startOffset":"endOffset"]=f}var c={};return b(!0),a.collapsed||b(),c}function l(a){function b(b){function c(a){for(var b=a.parentNode.firstChild,c=0;b;){if(b==a)return c;1==b.nodeType&&"bookmark"==b.getAttribute("data-mce-type")||c++,b=b.nextSibling}return-1}var d,e,f;d=f=a[b?"startContainer":"endContainer"],e=a[b?"startOffset":"endOffset"],d&&(1==d.nodeType&&(e=c(d),d=d.parentNode,A.remove(f)),a[b?"startContainer":"endContainer"]=d,a[b?"startOffset":"endOffset"]=e)}b(!0),b();var c=A.createRng();c.setStart(a.startContainer,a.startOffset),a.endContainer&&c.setEnd(a.endContainer,a.endOffset),B.setRng(c)}function m(b,c){var d,e,f,g=A.createFragment(),h=a.schema.getBlockElements();if(a.settings.forced_root_block&&(c=c||a.settings.forced_root_block),c&&(e=A.create(c),e.tagName===a.settings.forced_root_block&&A.setAttribs(e,a.settings.forced_root_block_attrs),g.appendChild(e)),b)for(;d=b.firstChild;){var i=d.nodeName;f||"SPAN"==i&&"bookmark"==d.getAttribute("data-mce-type")||(f=!0),h[i]?(g.appendChild(d),e=null):c?(e||(e=A.create(c),g.appendChild(e)),e.appendChild(d)):g.appendChild(d)}return a.settings.forced_root_block?f||tinymce.Env.ie&&!(tinymce.Env.ie>10)||e.appendChild(A.create("br",{"data-mce-bogus":"1"})):g.appendChild(A.create("br")),g}function n(){return tinymce.grep(B.getSelectedBlocks(),function(a){return/^(LI|DT|DD)$/.test(a.nodeName)})}function o(a,b,c){function d(a){tinymce.each(g,function(c){a.parentNode.insertBefore(c,b.parentNode)}),A.remove(a)}var e,f,g,h;for(g=A.select('span[data-mce-type="bookmark"]',a),c=c||m(b),e=A.createRng(),e.setStartAfter(b),e.setEndAfter(a),f=e.extractContents(),h=f.firstChild;h;h=h.firstChild)if("LI"==h.nodeName&&A.isEmpty(h)){A.remove(h);break}A.isEmpty(f)||A.insertAfter(f,a),A.insertAfter(c,a),j(b.parentNode)&&d(b.parentNode),A.remove(b),j(a)&&A.remove(a)}function p(a){var b,c;if(b=a.nextSibling,b&&d(b)&&b.nodeName==a.nodeName&&C(a,b)){for(;c=b.firstChild;)a.appendChild(c);A.remove(b)}if(b=a.previousSibling,b&&d(b)&&b.nodeName==a.nodeName&&C(a,b)){for(;c=b.firstChild;)a.insertBefore(c,a.firstChild);A.remove(b)}}function q(a){tinymce.each(tinymce.grep(A.select("ol,ul",a)),function(a){var b,c=a.parentNode;"LI"==c.nodeName&&c.firstChild==a&&(b=c.previousSibling,b&&"LI"==b.nodeName&&(b.appendChild(a),j(c)&&A.remove(c))),d(c)&&(b=c.previousSibling,b&&"LI"==b.nodeName&&b.appendChild(a))})}function r(a){function b(a){j(a)&&A.remove(a)}var c,g=a.parentNode,i=g.parentNode;return h(g)?!0:"DD"==a.nodeName?(A.rename(a,"DT"),!0):e(a)&&f(a)?("LI"==i.nodeName?(A.insertAfter(a,i),b(i),A.remove(g)):d(i)?A.remove(g,!0):(i.insertBefore(m(a),g),A.remove(g)),!0):e(a)?("LI"==i.nodeName?(A.insertAfter(a,i),a.appendChild(g),b(i)):d(i)?i.insertBefore(a,g):(i.insertBefore(m(a),g),A.remove(a)),!0):f(a)?("LI"==i.nodeName?A.insertAfter(a,i):d(i)?A.insertAfter(a,g):(A.insertAfter(m(a),g),A.remove(a)),!0):("LI"==i.nodeName?(g=i,c=m(a,"LI")):c=d(i)?m(a,"LI"):m(a),o(g,a,c),q(g.parentNode),!0)}function s(a){function b(b,c){var e;if(d(b)){for(;e=a.lastChild.firstChild;)c.appendChild(e);A.remove(b)}}var c,e,f;return"DT"==a.nodeName?(A.rename(a,"DD"),!0):(c=a.previousSibling,c&&d(c)?(c.appendChild(a),!0):c&&"LI"==c.nodeName&&d(c.lastChild)?(c.lastChild.appendChild(a),b(a.lastChild,c.lastChild),!0):(c=a.nextSibling,c&&d(c)?(c.insertBefore(a,c.firstChild),!0):(c=a.previousSibling,c&&"LI"==c.nodeName?(e=A.create(a.parentNode.nodeName),f=A.getStyle(a.parentNode,"listStyleType"),f&&A.setStyle(e,"listStyleType",f),c.appendChild(e),e.appendChild(a),b(a.lastChild,e),!0):!1)))}function t(){var b=n();if(b.length){for(var c=k(B.getRng(!0)),d=0;d<b.length&&(s(b[d])||0!==d);d++);return l(c),a.nodeChanged(),!0}}function u(){var b=n();if(b.length){var c,d,e=k(B.getRng(!0)),f=a.getBody();for(c=b.length;c--;)for(var g=b[c].parentNode;g&&g!=f;){for(d=b.length;d--;)if(b[d]===g){b.splice(c,1);break}g=g.parentNode}for(c=0;c<b.length&&(r(b[c])||0!==c);c++);return l(e),a.nodeChanged(),!0}}function v(b,e){function f(){function b(a){var b,c;for(b=i[a?"startContainer":"endContainer"],c=i[a?"startOffset":"endOffset"],1==b.nodeType&&(b=b.childNodes[Math.min(c,b.childNodes.length-1)]||b);b.parentNode!=f;){if(g(b))return b;if(/^(TD|TH)$/.test(b.parentNode.nodeName))return b;b=b.parentNode}return b}for(var d,e=[],f=a.getBody(),h=b(!0),j=b(),k=[],l=h;l&&(k.push(l),l!=j);l=l.nextSibling);return tinymce.each(k,function(a){if(g(a))return e.push(a),void(d=null);if(A.isBlock(a)||c(a))return c(a)&&A.remove(a),void(d=null);var b=a.nextSibling;return tinymce.dom.BookmarkManager.isBookmarkNode(a)&&(g(b)||!b&&a.parentNode==f)?void(d=null):(d||(d=A.create("p"),a.parentNode.insertBefore(d,a),e.push(d)),void d.appendChild(a))}),e}var h,i=B.getRng(!0),j="LI";"false"!==A.getContentEditable(B.getNode())&&(b=b.toUpperCase(),"DL"==b&&(j="DT"),h=k(i),tinymce.each(f(),function(a){var c,f,g=function(a){var b=A.getStyle(a,"list-style-type"),c=e?e["list-style-type"]:"";return c=null===c?"":c,b===c};f=a.previousSibling,f&&d(f)&&f.nodeName==b&&g(f)?(c=f,a=A.rename(a,j),f.appendChild(a)):(c=A.create(b),a.parentNode.insertBefore(c,a),c.appendChild(a),a=A.rename(a,j)),D(c,e),p(c)}),l(h))}function w(){var b=k(B.getRng(!0)),c=a.getBody();tinymce.each(n(),function(a){var b,e;if(!h(a.parentNode)){if(j(a))return void r(a);for(b=a;b&&b!=c;b=b.parentNode)d(b)&&(e=b);o(e,a)}}),l(b)}function x(a,b){var c=A.getParent(B.getStart(),"OL,UL,DL");if(!h(c))if(c)if(c.nodeName==a)w(a);else{var d=k(B.getRng(!0));D(c,b),p(A.rename(c,a)),l(d)}else v(a,b)}function y(b){return function(){var c=A.getParent(a.selection.getStart(),"UL,OL,DL");return c&&c.nodeName==b}}function z(a){return c(a)?!(!A.isBlock(a.nextSibling)||c(a.previousSibling)):!1}var A=a.dom,B=a.selection,C=function(b,c){var d=a.dom.getStyle(b,"list-style-type",!0),e=a.dom.getStyle(c,"list-style-type",!0);return d===e},D=function(a,b){A.setStyle(a,"list-style-type",b?b["list-style-type"]:null)};i.backspaceDelete=function(e){function f(b,c){var d,e,f=b.startContainer,g=b.startOffset;if(3==f.nodeType&&(c?g<f.data.length:g>0))return f;for(d=a.schema.getNonEmptyElements(),1==f.nodeType&&(f=tinymce.dom.RangeUtils.getNode(f,g)),e=new tinymce.dom.TreeWalker(f,a.getBody()),c&&z(f)&&e.next();f=e[c?"next":"prev2"]();){if("LI"==f.nodeName&&!f.hasChildNodes())return f;if(d[f.nodeName])return f;if(3==f.nodeType&&f.data.length>0)return f}}function g(a,e){var f,g,i=a.parentNode;if(b(a)&&b(e)){if(d(e.lastChild)&&(g=e.lastChild),i==e.lastChild&&c(i.previousSibling)&&A.remove(i.previousSibling),f=e.lastChild,f&&c(f)&&a.hasChildNodes()&&A.remove(f),j(e,!0)&&A.$(e).empty(),!j(a,!0))for(;f=a.firstChild;)e.appendChild(f);g&&e.appendChild(g),A.remove(a),j(i)&&!h(i)&&A.remove(i)}}if(B.isCollapsed()){var i,m,n,o=A.getParent(B.getStart(),"LI");if(o){if(i=o.parentNode,h(i)&&A.isEmpty(i))return!0;if(m=B.getRng(!0),n=A.getParent(f(m,e),"LI"),n&&n!=o){var p=k(m);return e?g(n,o):g(o,n),l(p),!0}if(!n&&!e&&w(i.nodeName))return!0}}},a.on("BeforeExecCommand",function(b){var c,d=b.command.toLowerCase();return"indent"==d?t()&&(c=!0):"outdent"==d&&u()&&(c=!0),c?(a.fire("ExecCommand",{command:b.command}),b.preventDefault(),!0):void 0}),a.addCommand("InsertUnorderedList",function(a,b){x("UL",b)}),a.addCommand("InsertOrderedList",function(a,b){x("OL",b)}),a.addCommand("InsertDefinitionList",function(a,b){x("DL",b)}),a.addQueryStateHandler("InsertUnorderedList",y("UL")),a.addQueryStateHandler("InsertOrderedList",y("OL")),a.addQueryStateHandler("InsertDefinitionList",y("DL")),a.on("keydown",function(b){9!=b.keyCode||tinymce.util.VK.metaKeyPressed(b)||a.dom.getParent(a.selection.getStart(),"LI,DT,DD")&&(b.preventDefault(),b.shiftKey?u():t())})}),a.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent",onPostRender:function(){var b=this;a.on("nodechange",function(){for(var c=a.selection.getSelectedBlocks(),d=!1,f=0,g=c.length;!d&&g>f;f++){var h=c[f].nodeName;d="LI"==h&&e(c[f])||"UL"==h||"OL"==h||"DD"==h}b.disabled(d)})}}),a.on("keydown",function(a){a.keyCode==tinymce.util.VK.BACKSPACE?i.backspaceDelete()&&a.preventDefault():a.keyCode==tinymce.util.VK.DELETE&&i.backspaceDelete(!0)&&a.preventDefault()})});
tinymce.PluginManager.add("media",function(a,b){function c(a){return a=a.toLowerCase(),-1!=a.indexOf(".mp3")?"audio/mpeg":-1!=a.indexOf(".wav")?"audio/wav":-1!=a.indexOf(".mp4")?"video/mp4":-1!=a.indexOf(".webm")?"video/webm":-1!=a.indexOf(".ogg")?"video/ogg":-1!=a.indexOf(".swf")?"application/x-shockwave-flash":""}function d(b){var c=a.settings.media_scripts;if(c)for(var d=0;d<c.length;d++)if(-1!==b.indexOf(c[d].filter))return c[d]}function e(){function b(a){var b,c,f,g;b=d.find("#width")[0],c=d.find("#height")[0],f=b.value(),g=c.value(),d.find("#constrain")[0].checked()&&e&&j&&f&&g&&(a.control==b?(g=Math.round(f/e*g),isNaN(g)||c.value(g)):(f=Math.round(g/j*f),isNaN(f)||b.value(f))),e=f,j=g}function c(){k=h(this.value()),this.parent().parent().fromJSON(k)}var d,e,j,k,l=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onchange:function(a){tinymce.each(a.meta,function(a,b){d.find("#"+b).value(a)})}}];a.settings.media_alt_source!==!1&&l.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),a.settings.media_poster!==!1&&l.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),a.settings.media_dimensions!==!1&&l.push({type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:b,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:b,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),k=i(a.selection.getNode()),e=k.width,j=k.height;var m={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:f(),multiline:!0,label:"Source"};m[p]=c,d=a.windowManager.open({title:"Insert/edit video",data:k,bodyType:"tabpanel",body:[{title:"General",type:"form",onShowTab:function(){k=h(this.next().find("#embed").value()),this.fromJSON(k)},items:l},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,onShowTab:function(){this.find("#embed").value(g(this.parent().toJSON()))},items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},m]}],onSubmit:function(){var b,c,d,e;for(b=a.dom.select("img[data-mce-object]"),a.insertContent(g(this.toJSON())),c=a.dom.select("img[data-mce-object]"),d=0;d<b.length;d++)for(e=c.length-1;e>=0;e--)b[d]==c[e]&&c.splice(e,1);a.selection.select(c[0]),a.nodeChanged()}})}function f(){var b=a.selection.getNode();return b.getAttribute("data-mce-object")?a.selection.getContent():void 0}function g(e){var f="";if(!e.source1&&(tinymce.extend(e,h(e.embed)),!e.source1))return"";if(e.source2||(e.source2=""),e.poster||(e.poster=""),e.source1=a.convertURL(e.source1,"source"),e.source2=a.convertURL(e.source2,"source"),e.source1mime=c(e.source1),e.source2mime=c(e.source2),e.poster=a.convertURL(e.poster,"poster"),e.flashPlayerUrl=a.convertURL(b+"/moxieplayer.swf","movie"),tinymce.each(o,function(a){var b,c,d;if(b=a.regex.exec(e.source1)){for(d=a.url,c=0;b[c];c++)d=d.replace("$"+c,function(){return b[c]});e.source1=d,e.type=a.type,e.allowFullscreen=a.allowFullscreen,e.width=e.width||a.w,e.height=e.height||a.h}}),e.embed)f=k(e.embed,e,!0);else{var g=d(e.source1);if(g&&(e.type="script",e.width=g.width,e.height=g.height),e.width=e.width||300,e.height=e.height||150,tinymce.each(e,function(b,c){e[c]=a.dom.encode(b)}),"iframe"==e.type){var i=e.allowFullscreen?' allowFullscreen="1"':"";f+='<iframe src="'+e.source1+'" width="'+e.width+'" height="'+e.height+'"'+i+"></iframe>"}else"application/x-shockwave-flash"==e.source1mime?(f+='<object data="'+e.source1+'" width="'+e.width+'" height="'+e.height+'" type="application/x-shockwave-flash">',e.poster&&(f+='<img src="'+e.poster+'" width="'+e.width+'" height="'+e.height+'" />'),f+="</object>"):-1!=e.source1mime.indexOf("audio")?a.settings.audio_template_callback?f=a.settings.audio_template_callback(e):f+='<audio controls="controls" src="'+e.source1+'">'+(e.source2?'\n<source src="'+e.source2+'"'+(e.source2mime?' type="'+e.source2mime+'"':"")+" />\n":"")+"</audio>":"script"==e.type?f+='<script src="'+e.source1+'"></script>':f=a.settings.video_template_callback?a.settings.video_template_callback(e):'<video width="'+e.width+'" height="'+e.height+'"'+(e.poster?' poster="'+e.poster+'"':"")+' controls="controls">\n<source src="'+e.source1+'"'+(e.source1mime?' type="'+e.source1mime+'"':"")+" />\n"+(e.source2?'<source src="'+e.source2+'"'+(e.source2mime?' type="'+e.source2mime+'"':"")+" />\n":"")+"</video>"}return f}function h(a){var b={};return new tinymce.html.SaxParser({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(a,c){if(b.source1||"param"!=a||(b.source1=c.map.movie),"iframe"!=a&&"object"!=a&&"embed"!=a&&"video"!=a&&"audio"!=a||(b.type||(b.type=a),b=tinymce.extend(c.map,b)),"script"==a){var e=d(c.map.src);if(!e)return;b={type:"script",source1:c.map.src,width:e.width,height:e.height}}"source"==a&&(b.source1?b.source2||(b.source2=c.map.src):b.source1=c.map.src),"img"!=a||b.poster||(b.poster=c.map.src)}}).parse(a),b.source1=b.source1||b.src||b.data,b.source2=b.source2||"",b.poster=b.poster||"",b}function i(b){return b.getAttribute("data-mce-object")?h(a.serializer.serialize(b,{selection:!0})):{}}function j(b){if(a.settings.media_filter_html===!1)return b;var c,d=new tinymce.html.Writer;return new tinymce.html.SaxParser({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(a){d.comment(a)},cdata:function(a){d.cdata(a)},text:function(a,b){d.text(a,b)},start:function(b,e,f){if(c=!0,"script"!=b&&"noscript"!=b){for(var g=0;g<e.length;g++){if(0===e[g].name.indexOf("on"))return;"style"==e[g].name&&(e[g].value=a.dom.serializeStyle(a.dom.parseStyle(e[g].value),b))}d.start(b,e,f),c=!1}},end:function(a){c||d.end(a)}},new tinymce.html.Schema({})).parse(b),d.getContent()}function k(a,b,c){function d(a,b){var c,d,e,f;for(c in b)if(e=""+b[c],a.map[c])for(d=a.length;d--;)f=a[d],f.name==c&&(e?(a.map[c]=e,f.value=e):(delete a.map[c],a.splice(d,1)));else e&&(a.push({name:c,value:e}),a.map[c]=e)}var e,f=new tinymce.html.Writer,g=0;return new tinymce.html.SaxParser({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(a){f.comment(a)},cdata:function(a){f.cdata(a)},text:function(a,b){f.text(a,b)},start:function(a,h,i){switch(a){case"video":case"object":case"embed":case"img":case"iframe":d(h,{width:b.width,height:b.height})}if(c)switch(a){case"video":d(h,{poster:b.poster,src:""}),b.source2&&d(h,{src:""});break;case"iframe":d(h,{src:b.source1});break;case"source":if(g++,2>=g&&(d(h,{src:b["source"+g],type:b["source"+g+"mime"]}),!b["source"+g]))return;break;case"img":if(!b.poster)return;e=!0}f.start(a,h,i)},end:function(a){if("video"==a&&c)for(var h=1;2>=h;h++)if(b["source"+h]){var i=[];i.map={},h>g&&(d(i,{src:b["source"+h],type:b["source"+h+"mime"]}),f.start("source",i,!0))}if(b.poster&&"object"==a&&c&&!e){var j=[];j.map={},d(j,{src:b.poster,width:b.width,height:b.height}),f.start("img",j,!0)}f.end(a)}},new tinymce.html.Schema({})).parse(a),f.getContent()}function l(b,c){var d,e,f,g,h;for(f=b.attributes,g=f.length;g--;)d=f[g].name,e=f[g].value,"width"!==d&&"height"!==d&&"style"!==d&&("data"!=d&&"src"!=d||(e=a.convertURL(e,d)),c.attr("data-mce-p-"+d,e));h=b.firstChild&&b.firstChild.value,h&&(c.attr("data-mce-html",escape(h)),c.firstChild=null)}function m(a){var b,c=a.name;return b=new tinymce.html.Node("img",1),b.shortEnded=!0,l(a,b),b.attr({width:a.attr("width")||"300",height:a.attr("height")||("audio"==c?"30":"150"),style:a.attr("style"),src:tinymce.Env.transparentSrc,"data-mce-object":c,"class":"mce-object mce-object-"+c}),b}function n(a){var b,c,d,e=a.name;return b=new tinymce.html.Node("span",1),b.attr({contentEditable:"false",style:a.attr("style"),"data-mce-object":e,"class":"mce-preview-object mce-object-"+e}),l(a,b),c=new tinymce.html.Node(e,1),c.attr({src:a.attr("src"),allowfullscreen:a.attr("allowfullscreen"),width:a.attr("width")||"300",height:a.attr("height")||("audio"==e?"30":"150"),frameborder:"0"}),d=new tinymce.html.Node("span",1),d.attr("class","mce-shim"),b.append(c),b.append(d),b}var o=[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],p=tinymce.Env.ie&&tinymce.Env.ie<=8?"onChange":"onInput";a.on("ResolveName",function(a){var b;1==a.target.nodeType&&(b=a.target.getAttribute("data-mce-object"))&&(a.name=b)}),a.on("preInit",function(){var b=a.schema.getSpecialElements();tinymce.each("video audio iframe object".split(" "),function(a){b[a]=new RegExp("</"+a+"[^>]*>","gi")});var c=a.schema.getBoolAttrs();tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(a){c[a]={}}),a.parser.addNodeFilter("iframe,video,audio,object,embed,script",function(b){for(var c,e,f,g=b.length;g--;)c=b[g],c.parent&&(c.parent.attr("data-mce-object")||("script"!=c.name||(f=d(c.attr("src"))))&&(f&&(f.width&&c.attr("width",f.width.toString()),f.height&&c.attr("height",f.height.toString())),e="iframe"==c.name&&a.settings.media_live_embeds!==!1&&tinymce.Env.ceFalse?n(c):m(c),c.replace(e)))}),a.serializer.addAttributeFilter("data-mce-object",function(a,b){for(var c,d,e,f,g,h,i,k,l=a.length;l--;)if(c=a[l],c.parent){for(i=c.attr(b),d=new tinymce.html.Node(i,1),"audio"!=i&&"script"!=i&&(k=c.attr("class"),k&&-1!==k.indexOf("mce-preview-object")?d.attr({width:c.firstChild.attr("width"),height:c.firstChild.attr("height")}):d.attr({width:c.attr("width"),height:c.attr("height")})),d.attr({style:c.attr("style")}),f=c.attributes,e=f.length;e--;){var m=f[e].name;0===m.indexOf("data-mce-p-")&&d.attr(m.substr(11),f[e].value)}"script"==i&&d.attr("type","text/javascript"),g=c.attr("data-mce-html"),g&&(h=new tinymce.html.Node("#text",3),h.raw=!0,h.value=j(unescape(g)),d.append(h)),c.replace(d)}})}),a.on("click keyup",function(){var b=a.selection.getNode();b&&a.dom.hasClass(b,"mce-preview-object")&&a.dom.getAttrib(b,"data-mce-selected")&&b.setAttribute("data-mce-selected","2")}),a.on("ObjectSelected",function(a){var b=a.target.getAttribute("data-mce-object");"audio"!=b&&"script"!=b||a.preventDefault()}),a.on("objectResized",function(a){var b,c=a.target;c.getAttribute("data-mce-object")&&(b=c.getAttribute("data-mce-html"),b&&(b=unescape(b),c.setAttribute("data-mce-html",escape(k(b,{width:a.width,height:a.height})))))}),a.addButton("media",{tooltip:"Insert/edit video",onclick:e,stateSelector:["img[data-mce-object]","span[data-mce-object]"]}),a.addMenuItem("media",{icon:"media",text:"Insert/edit video",onclick:e,context:"insert",prependToContext:!0}),a.on("setContent",function(){a.$("span.mce-preview-object").each(function(b,c){var d=a.$(c);0===d.find("span.mce-shim",c).length&&d.append('<span class="mce-shim"></span>')})}),a.addCommand("mceMedia",e),this.showDialog=e});
tinymce.PluginManager.add("nonbreaking",function(a){var b=a.getParam("nonbreaking_force_tab");if(a.addCommand("mceNonBreaking",function(){a.insertContent(a.plugins.visualchars&&a.plugins.visualchars.state?'<span class="mce-nbsp">&nbsp;</span>':"&nbsp;"),a.dom.setAttrib(a.dom.select("span.mce-nbsp"),"data-mce-bogus","1")}),a.addButton("nonbreaking",{title:"Nonbreaking space",cmd:"mceNonBreaking"}),a.addMenuItem("nonbreaking",{text:"Nonbreaking space",cmd:"mceNonBreaking",context:"insert"}),b){var c=+b>1?+b:3;a.on("keydown",function(b){if(9==b.keyCode){if(b.shiftKey)return;b.preventDefault();for(var d=0;c>d;d++)a.execCommand("mceNonBreaking")}})}});
tinymce.PluginManager.add("noneditable",function(a){function b(a){return function(b){return-1!==(" "+b.attr("class")+" ").indexOf(a)}}function c(b){function c(b){var c=arguments,d=c[c.length-2];return d>0&&'"'==g.charAt(d-1)?b:'<span class="'+h+'" data-mce-content="'+a.dom.encode(c[0])+'">'+a.dom.encode("string"==typeof c[1]?c[1]:c[0])+"</span>"}var d=f.length,g=b.content,h=tinymce.trim(e);if("raw"!=b.format){for(;d--;)g=g.replace(f[d],c);b.content=g}}var d,e,f,g="contenteditable";d=" "+tinymce.trim(a.getParam("noneditable_editable_class","mceEditable"))+" ",e=" "+tinymce.trim(a.getParam("noneditable_noneditable_class","mceNonEditable"))+" ";var h=b(d),i=b(e);f=a.getParam("noneditable_regexp"),f&&!f.length&&(f=[f]),a.on("PreInit",function(){f&&a.on("BeforeSetContent",c),a.parser.addAttributeFilter("class",function(a){for(var b,c=a.length;c--;)b=a[c],h(b)?b.attr(g,"true"):i(b)&&b.attr(g,"false")}),a.serializer.addAttributeFilter(g,function(a){for(var b,c=a.length;c--;)b=a[c],(h(b)||i(b))&&(f&&b.attr("data-mce-content")?(b.name="#text",b.type=3,b.raw=!0,b.value=b.attr("data-mce-content")):b.attr(g,null))})})});
tinymce.PluginManager.add("pagebreak",function(a){var b="mce-pagebreak",c=a.getParam("pagebreak_separator","<!-- pagebreak -->"),d=new RegExp(c.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(a){return"\\"+a}),"gi"),e='<img src="'+tinymce.Env.transparentSrc+'" class="'+b+'" data-mce-resize="false" data-mce-placeholder />';a.addCommand("mcePageBreak",function(){a.settings.pagebreak_split_block?a.insertContent("<p>"+e+"</p>"):a.insertContent(e)}),a.addButton("pagebreak",{title:"Page break",cmd:"mcePageBreak"}),a.addMenuItem("pagebreak",{text:"Page break",icon:"pagebreak",cmd:"mcePageBreak",context:"insert"}),a.on("ResolveName",function(c){"IMG"==c.target.nodeName&&a.dom.hasClass(c.target,b)&&(c.name="pagebreak")}),a.on("click",function(c){c=c.target,"IMG"===c.nodeName&&a.dom.hasClass(c,b)&&a.selection.select(c)}),a.on("BeforeSetContent",function(a){a.content=a.content.replace(d,e)}),a.on("PreInit",function(){a.serializer.addNodeFilter("img",function(b){for(var d,e,f=b.length;f--;)if(d=b[f],e=d.attr("class"),e&&-1!==e.indexOf("mce-pagebreak")){var g=d.parent;if(a.schema.getBlockElements()[g.name]&&a.settings.pagebreak_split_block){g.type=3,g.value=c,g.raw=!0,d.remove();continue}d.type=3,d.value=c,d.raw=!0}})})});
!function(a,b){"use strict";function c(a,b){for(var c,d=[],f=0;f<a.length;++f){if(c=g[a[f]]||e(a[f]),!c)throw"module definition dependecy not found: "+a[f];d.push(c)}b.apply(null,d)}function d(a,d,e){if("string"!=typeof a)throw"invalid module definition, module id must be defined and be a string";if(d===b)throw"invalid module definition, dependencies must be specified";if(e===b)throw"invalid module definition, definition function must be specified";c(d,function(){g[a]=e.apply(null,arguments)})}function e(b){for(var c=a,d=b.split(/[.\/]/),e=0;e<d.length;++e){if(!c[d[e]])return;c=c[d[e]]}return c}function f(c){var d,e,f,h,i;for(d=0;d<c.length;d++){e=a,f=c[d],h=f.split(/[.\/]/);for(var j=0;j<h.length-1;++j)e[h[j]]===b&&(e[h[j]]={}),e=e[h[j]];e[h[h.length-1]]=g[f]}if(a.AMDLC_TESTS){i=a.privateModules||{};for(f in g)i[f]=g[f];for(d=0;d<c.length;d++)delete i[c[d]];a.privateModules=i}}var g={};d("tinymce/pasteplugin/Utils",["tinymce/util/Tools","tinymce/html/DomParser","tinymce/html/Schema"],function(a,b,c){function d(b,c){return a.each(c,function(a){b=a.constructor==RegExp?b.replace(a,""):b.replace(a[0],a[1])}),b}function e(e){function f(a){var b=a.name,c=a;if("br"===b)return void(i+="\n");if(j[b]&&(i+=" "),k[b])return void(i+=" ");if(3==a.type&&(i+=a.value),!a.shortEnded&&(a=a.firstChild))do f(a);while(a=a.next);l[b]&&c.next&&(i+="\n","p"==b&&(i+="\n"))}var g=new c,h=new b({},g),i="",j=g.getShortEndedElements(),k=a.makeMap("script noscript style textarea video audio iframe object"," "),l=g.getBlockElements();return e=d(e,[/<!\[[^\]]+\]>/g]),f(h.parse(e)),i}function f(a){function b(a,b,c){return b||c?"\xa0":" "}return a=d(a,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,b],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function g(a){var b=0;return function(){return a+b++}}return{filter:d,innerText:e,trimHtml:f,createIdGenerator:g}}),d("tinymce/pasteplugin/SmartPaste",["tinymce/util/Tools"],function(a){var b=function(a){return/^https?:\/\/[\w\?\-\/+=.&%]+$/i.test(a)},c=function(a){return b(a)&&/.(gif|jpe?g|png)$/.test(a)},d=function(a,b,c){return a.undoManager.extra(function(){c(a,b)},function(){a.insertContent('<img src="'+b+'">')}),!0},e=function(a,b,c){return a.undoManager.extra(function(){c(a,b)},function(){a.execCommand("mceInsertLink",!1,b)}),!0},f=function(a,c,d){return a.selection.isCollapsed()===!1&&b(c)?e(a,c,d):!1},g=function(a,b,e){return c(b)?d(a,b,e):!1},h=function(a,b){return a.insertContent(b,{merge:a.settings.paste_merge_formats!==!1,paste:!0}),!0},i=function(b,c){a.each([f,g,h],function(a){return a(b,c,h)!==!0})},j=function(a,b){a.settings.smart_paste===!1?h(a,b):i(a,b)};return{isImageUrl:c,isAbsoluteUrl:b,insertContent:j}}),d("tinymce/pasteplugin/Clipboard",["tinymce/Env","tinymce/dom/RangeUtils","tinymce/util/VK","tinymce/pasteplugin/Utils","tinymce/pasteplugin/SmartPaste","tinymce/util/Delay"],function(a,b,c,d,e,f){return function(g){function h(a){var b,c=g.dom;if(b=g.fire("BeforePastePreProcess",{content:a}),b=g.fire("PastePreProcess",b),a=b.content,!b.isDefaultPrevented()){if(g.hasEventListeners("PastePostProcess")&&!b.isDefaultPrevented()){var d=c.add(g.getBody(),"div",{style:"display:none"},a);b=g.fire("PastePostProcess",{node:d}),c.remove(d),a=b.node.innerHTML}b.isDefaultPrevented()||e.insertContent(g,a)}}function i(a){a=g.dom.encode(a).replace(/\r\n/g,"\n");var b,c=g.dom.getParent(g.selection.getStart(),g.dom.isBlock),e=g.settings.forced_root_block;e&&(b=g.dom.createHTML(e,g.settings.forced_root_block_attrs),b=b.substr(0,b.length-3)+">"),c&&/^(PRE|DIV)$/.test(c.nodeName)||!e?a=d.filter(a,[[/\n/g,"<br>"]]):(a=d.filter(a,[[/\n\n/g,"</p>"+b],[/^(.*<\/p>)(<p>)$/,b+"$1"],[/\n/g,"<br />"]]),-1!=a.indexOf("<p>")&&(a=b+a)),h(a)}function j(){function b(a){var b,c,e,f=a.startContainer;if(b=a.getClientRects(),b.length)return b[0];if(a.collapsed&&1==f.nodeType){for(e=f.childNodes[z.startOffset];e&&3==e.nodeType&&!e.data.length;)e=e.nextSibling;if(e)return"BR"==e.tagName&&(c=d.doc.createTextNode("\ufeff"),e.parentNode.insertBefore(c,e),a=d.createRng(),a.setStartBefore(c),a.setEndAfter(c),b=a.getClientRects(),d.remove(c)),b.length?b[0]:void 0}}var c,d=g.dom,e=g.getBody(),f=g.dom.getViewPort(g.getWin()),h=f.y,i=20;if(z=g.selection.getRng(),g.inline&&(c=g.selection.getScrollContainer(),c&&c.scrollTop>0&&(h=c.scrollTop)),z.getClientRects){var j=b(z);if(j)i=h+(j.top-d.getPos(e).y);else{i=h;var k=z.startContainer;k&&(3==k.nodeType&&k.parentNode!=e&&(k=k.parentNode),1==k.nodeType&&(i=d.getPos(k,c||e).y))}}y=d.add(g.getBody(),"div",{id:"mcepastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: absolute; top: "+i+"px;width: 10px; height: 10px; overflow: hidden; opacity: 0"},E),(a.ie||a.gecko)&&d.setStyle(y,"left","rtl"==d.getStyle(e,"direction",!0)?65535:-65535),d.bind(y,"beforedeactivate focusin focusout",function(a){a.stopPropagation()}),y.focus(),g.selection.select(y,!0)}function k(){if(y){for(var a;a=g.dom.get("mcepastebin");)g.dom.remove(a),g.dom.unbind(a);z&&g.selection.setRng(z)}y=z=null}function l(){var a,b,c,d,e="";for(a=g.dom.select("div[id=mcepastebin]"),b=0;b<a.length;b++)c=a[b],c.firstChild&&"mcepastebin"==c.firstChild.id&&(c=c.firstChild),d=c.innerHTML,e!=E&&(e+=d);return e}function m(a){var b={};if(a){if(a.getData){var c=a.getData("Text");c&&c.length>0&&-1==c.indexOf(F)&&(b["text/plain"]=c)}if(a.types)for(var d=0;d<a.types.length;d++){var e=a.types[d];b[e]=a.getData(e)}}return b}function n(a){return m(a.clipboardData||g.getDoc().dataTransfer)}function o(a){return v(a,"text/html")||v(a,"text/plain")}function p(a){var b;return b=a.indexOf(","),-1!==b?a.substr(b+1):null}function q(a,b){return a.images_dataimg_filter?a.images_dataimg_filter(b):!0}function r(a,b,c){a&&(g.selection.setRng(a),a=null);var d=b.result,e=p(d),f=new Image;if(f.src=d,q(g.settings,f)){var i,j,k=g.editorUpload.blobCache;j=k.findFirst(function(a){return a.base64()===e}),j?i=j:(i=k.create(G(),c,e),k.add(i)),h('<img src="'+i.blobUri()+'">')}else h('<img src="'+d+'">')}function s(a,b){function c(c){var d,e,f,g=!1;if(c)for(d=0;d<c.length;d++)if(e=c[d],/^image\/(jpeg|png|gif|bmp)$/.test(e.type)){var h=e.getAsFile?e.getAsFile():e;f=new FileReader,f.onload=r.bind(null,b,f,h),f.readAsDataURL(h),a.preventDefault(),g=!0}return g}var d=a.clipboardData||a.dataTransfer;return g.settings.paste_data_images&&d?c(d.items)||c(d.files):void 0}function t(a){var b=a.clipboardData;return-1!=navigator.userAgent.indexOf("Android")&&b&&b.items&&0===b.items.length}function u(a){return b.getCaretRangeFromPoint(a.clientX,a.clientY,g.getDoc())}function v(a,b){return b in a&&a[b].length>0}function w(a){return c.metaKeyPressed(a)&&86==a.keyCode||a.shiftKey&&45==a.keyCode}function x(){function b(a,b,c){var e;return v(a,"text/html")?e=a["text/html"]:(e=l(),e==E&&(c=!0)),e=d.trimHtml(e),y&&y.firstChild&&"mcepastebin"===y.firstChild.id&&(c=!0),k(),e.length||(c=!0),c&&(e=v(a,"text/plain")&&-1==e.indexOf("</p>")?a["text/plain"]:d.innerText(e)),e==E?void(b||g.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")):void(c?i(e):h(e))}function c(a){return 0===a["text/plain"].indexOf("file://")}g.on("keydown",function(b){function c(a){w(a)&&!a.isDefaultPrevented()&&k()}if(w(b)&&!b.isDefaultPrevented()){if(A=b.shiftKey&&86==b.keyCode,A&&a.webkit&&-1!=navigator.userAgent.indexOf("Version/"))return;if(b.stopImmediatePropagation(),C=(new Date).getTime(),a.ie&&A)return b.preventDefault(),void g.fire("paste",{ieFake:!0});k(),j(),g.once("keyup",c),g.once("paste",function(){g.off("keyup",c)})}});var e=function(){return z||g.selection.getRng()};g.on("paste",function(c){var d=(new Date).getTime(),h=n(c),i=(new Date).getTime()-d,m=(new Date).getTime()-C-i<1e3,p="text"==B.pasteFormat||A;return A=!1,c.isDefaultPrevented()||t(c)?void k():!o(h)&&s(c,e())?void k():(m||c.preventDefault(),!a.ie||m&&!c.ieFake||(j(),g.dom.bind(y,"paste",function(a){a.stopPropagation()}),g.getDoc().execCommand("Paste",!1,null),h["text/html"]=l()),void(v(h,"text/html")?(c.preventDefault(),b(h,m,p)):f.setEditorTimeout(g,function(){b(h,m,p)},0)))}),g.on("dragstart dragend",function(a){D="dragstart"==a.type}),g.on("drop",function(a){var b,e;if(e=u(a),!a.isDefaultPrevented()&&!D&&(b=m(a.dataTransfer),(o(b)&&!c(b)||!s(a,e))&&e&&g.settings.paste_filter_drop!==!1)){var j=b["mce-internal"]||b["text/html"]||b["text/plain"];j&&(a.preventDefault(),f.setEditorTimeout(g,function(){g.undoManager.transact(function(){b["mce-internal"]&&g.execCommand("Delete"),g.selection.setRng(e),j=d.trimHtml(j),b["text/html"]?h(j):i(j)})}))}}),g.on("dragover dragend",function(a){g.settings.paste_data_images&&a.preventDefault()})}var y,z,A,B=this,C=0,D=!1,E="%MCEPASTEBIN%",F="data:text/mce-internal,",G=d.createIdGenerator("mceclip");B.pasteHtml=h,B.pasteText=i,B.pasteImageData=s,g.on("preInit",function(){x(),g.parser.addNodeFilter("img",function(b,c,d){function e(a){return a.data&&a.data.paste===!0}function f(b){b.attr("data-mce-object")||k===a.transparentSrc||b.remove()}function h(a){return 0===a.indexOf("webkit-fake-url")}function i(a){return 0===a.indexOf("data:")}if(!g.settings.paste_data_images&&e(d))for(var j=b.length;j--;){var k=b[j].attributes.map.src;k&&(h(k)?f(b[j]):!g.settings.allow_html_data_urls&&i(k)&&f(b[j]))}})})}}),d("tinymce/pasteplugin/WordFilter",["tinymce/util/Tools","tinymce/html/DomParser","tinymce/html/Schema","tinymce/html/Serializer","tinymce/html/Node","tinymce/pasteplugin/Utils"],function(a,b,c,d,e,f){function g(a){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(a)||/class="OutlineElement/.test(a)||/id="?docs\-internal\-guid\-/.test(a)}function h(b){var c,d;return d=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],b=b.replace(/^[\u00a0 ]+/,""),a.each(d,function(a){return a.test(b)?(c=!0,!1):void 0}),c}function i(a){return/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(a)}function j(j){var k=j.settings;j.on("BeforePastePreProcess",function(l){function m(a){function b(a){var c="";if(3===a.type)return a.value;if(a=a.firstChild)do c+=b(a);while(a=a.next);return c}function c(a,b){if(3===a.type&&b.test(a.value))return a.value=a.value.replace(b,""),!1;if(a=a.firstChild)do if(!c(a,b))return!1;while(a=a.next);return!0}function d(a){if(a._listIgnore)return void a.remove();if(a=a.firstChild)do d(a);while(a=a.next)}function f(a,b,f){var h=a._listLevel||k;h!=k&&(k>h?g&&(g=g.parent.parent):(j=g,g=null)),g&&g.name==b?g.append(a):(j=j||g,g=new e(b,1),f>1&&g.attr("start",""+f),a.wrap(g)),a.name="li",h>k&&j&&j.lastChild.append(g),k=h,d(a),c(a,/^\u00a0+/),c(a,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),c(a,/^\u00a0+/)}for(var g,j,k=1,l=[],m=a.firstChild;"undefined"!=typeof m&&null!==m;)if(l.push(m),m=m.walk(),null!==m)for(;"undefined"!=typeof m&&m.parent!==a;)m=m.walk();for(var n=0;n<l.length;n++)if(a=l[n],"p"==a.name&&a.firstChild){var o=b(a);if(i(o)){f(a,"ul");continue}if(h(o)){var p=/([0-9]+)\./.exec(o),q=1;p&&(q=parseInt(p[1],10)),f(a,"ol",q);continue}if(a._listLevel){f(a,"ul",1);continue}g=null}else j=g,g=null}function n(b,c){var d,f={},g=j.dom.parseStyle(c);return a.each(g,function(a,e){switch(e){case"mso-list":d=/\w+ \w+([0-9]+)/i.exec(c),d&&(b._listLevel=parseInt(d[1],10)),/Ignore/i.test(a)&&b.firstChild&&(b._listIgnore=!0,b.firstChild._listIgnore=!0);break;case"horiz-align":e="text-align";break;case"vert-align":e="vertical-align";break;case"font-color":case"mso-foreground":e="color";break;case"mso-background":case"mso-highlight":e="background";break;case"font-weight":case"font-style":return void("normal"!=a&&(f[e]=a));case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void b.remove()}return 0===e.indexOf("mso-comment")?void b.remove():void(0!==e.indexOf("mso-")&&("all"==o||p&&p[e])&&(f[e]=a))}),/(bold)/i.test(f["font-weight"])&&(delete f["font-weight"],b.wrap(new e("b",1))),/(italic)/i.test(f["font-style"])&&(delete f["font-style"],b.wrap(new e("i",1))),f=j.dom.serializeStyle(f,b.name),f?f:null}var o,p,q=l.content;if(q=q.replace(/<b[^>]+id="?docs-internal-[^>]*>/gi,""),q=q.replace(/<br class="?Apple-interchange-newline"?>/gi,""),o=k.paste_retain_style_properties,o&&(p=a.makeMap(o.split(/[, ]/))),k.paste_enable_default_filters!==!1&&g(l.content)){l.wordContent=!0,q=f.filter(q,[/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(a,b){return b.length>0?b.replace(/./," ").slice(Math.floor(b.length/2)).split("").join("\xa0"):""}]]);var r=k.paste_word_valid_elements;r||(r="-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody");var s=new c({valid_elements:r,valid_children:"-li[p]"});a.each(s.elements,function(a){a.attributes["class"]||(a.attributes["class"]={},a.attributesOrder.push("class")),a.attributes.style||(a.attributes.style={},a.attributesOrder.push("style"))});var t=new b({},s);t.addAttributeFilter("style",function(a){for(var b,c=a.length;c--;)b=a[c],b.attr("style",n(b,b.attr("style"))),"span"==b.name&&b.parent&&!b.attributes.length&&b.unwrap()}),t.addAttributeFilter("class",function(a){for(var b,c,d=a.length;d--;)b=a[d],c=b.attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(c)&&b.remove(),b.attr("class",null)}),t.addNodeFilter("del",function(a){for(var b=a.length;b--;)a[b].remove()}),t.addNodeFilter("a",function(a){for(var b,c,d,e=a.length;e--;)if(b=a[e],c=b.attr("href"),d=b.attr("name"),c&&-1!=c.indexOf("#_msocom_"))b.remove();else if(c&&0===c.indexOf("file://")&&(c=c.split("#")[1],c&&(c="#"+c)),c||d){if(d&&!/^_?(?:toc|edn|ftn)/i.test(d)){b.unwrap();continue}b.attr({href:c,name:d})}else b.unwrap()});var u=t.parse(q);k.paste_convert_word_fake_lists!==!1&&m(u),l.content=new d({validate:k.validate},s).serialize(u)}})}return j.isWordContent=g,j}),d("tinymce/pasteplugin/Quirks",["tinymce/Env","tinymce/util/Tools","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Utils"],function(a,b,c,d){return function(e){function f(a){e.on("BeforePastePreProcess",function(b){b.content=a(b.content)})}function g(a){if(!c.isWordContent(a))return a;var f=[];b.each(e.schema.getBlockElements(),function(a,b){f.push(b)});var g=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+f.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return a=d.filter(a,[[g,"$1"]]),a=d.filter(a,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function h(a){if(c.isWordContent(a))return a;var b=e.settings.paste_webkit_styles;if(e.settings.paste_remove_styles_if_webkit===!1||"all"==b)return a;if(b&&(b=b.split(/[, ]/)),b){var d=e.dom,f=e.selection.getNode();a=a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(a,c,e,g){var h=d.parseStyle(e,"span"),i={};if("none"===b)return c+g;for(var j=0;j<b.length;j++){var k=h[b[j]],l=d.getStyle(f,b[j],!0);/color/.test(b[j])&&(k=d.toHex(k),l=d.toHex(l)),l!=k&&(i[b[j]]=k)}return i=d.serializeStyle(i,"span"),i?c+' style="'+i+'"'+g:c+g})}else a=a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return a=a.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(a,b,c,d){return b+' style="'+c+'"'+d})}a.webkit&&f(h),a.ie&&f(g)}}),d("tinymce/pasteplugin/Plugin",["tinymce/PluginManager","tinymce/pasteplugin/Clipboard","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Quirks"],function(a,b,c,d){var e;a.add("paste",function(a){function f(){return e||a.settings.paste_plaintext_inform===!1}function g(){if("text"==h.pasteFormat)this.active(!1),h.pasteFormat="html",a.fire("PastePlainTextToggle",{state:!1});else if(h.pasteFormat="text",this.active(!0),!f()){var b=a.translate("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.");a.notificationManager.open({text:b,type:"info"}),e=!0,a.fire("PastePlainTextToggle",{state:!0})}a.focus()}var h,i=this,j=a.settings;i.clipboard=h=new b(a),i.quirks=new d(a),i.wordFilter=new c(a),a.settings.paste_as_text&&(i.clipboard.pasteFormat="text"),j.paste_preprocess&&a.on("PastePreProcess",function(a){j.paste_preprocess.call(i,i,a)}),j.paste_postprocess&&a.on("PastePostProcess",function(a){j.paste_postprocess.call(i,i,a)}),a.addCommand("mceInsertClipboardContent",function(a,b){b.content&&i.clipboard.pasteHtml(b.content),b.text&&i.clipboard.pasteText(b.text)}),a.settings.paste_block_drop&&a.on("dragend dragover draggesture dragdrop drop drag",function(a){a.preventDefault(),a.stopPropagation()}),a.settings.paste_data_images||a.on("drop",function(a){var b=a.dataTransfer;b&&b.files&&b.files.length>0&&a.preventDefault()}),a.addButton("pastetext",{icon:"pastetext",tooltip:"Paste as text",onclick:g,active:"text"==i.clipboard.pasteFormat}),a.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:h.pasteFormat,onclick:g})})}),f(["tinymce/pasteplugin/Utils"])}(this);
tinymce.PluginManager.add("preview",function(a){var b=a.settings,c=!tinymce.Env.ie;a.addCommand("mcePreview",function(){a.windowManager.open({title:"Preview",width:parseInt(a.getParam("plugin_preview_width","650"),10),height:parseInt(a.getParam("plugin_preview_height","500"),10),html:'<iframe src="javascript:\'\'" frameborder="0"'+(c?' sandbox="allow-scripts"':"")+"></iframe>",buttons:{text:"Close",onclick:function(){this.parent().parent().close()}},onPostRender:function(){var d,e="";e+='<base href="'+a.documentBaseURI.getURI()+'">',tinymce.each(a.contentCSS,function(b){e+='<link type="text/css" rel="stylesheet" href="'+a.documentBaseURI.toAbsolute(b)+'">'});var f=b.body_id||"tinymce";-1!=f.indexOf("=")&&(f=a.getParam("body_id","","hash"),f=f[a.id]||f);var g=b.body_class||"";-1!=g.indexOf("=")&&(g=a.getParam("body_class","","hash"),g=g[a.id]||"");var h='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A") {e.preventDefault();}}}, false);</script> ',i=a.settings.directionality?' dir="'+a.settings.directionality+'"':"";if(d="<!DOCTYPE html><html><head>"+e+'</head><body id="'+f+'" class="mce-content-body '+g+'"'+i+">"+a.getContent()+h+"</body></html>",c)this.getEl("body").firstChild.src="data:text/html;charset=utf-8,"+encodeURIComponent(d);else{var j=this.getEl("body").firstChild.contentWindow.document;j.open(),j.write(d),j.close()}}})}),a.addButton("preview",{title:"Preview",cmd:"mcePreview"}),a.addMenuItem("preview",{text:"Preview",cmd:"mcePreview",context:"view"})});
tinymce.PluginManager.add("print",function(a){a.addCommand("mcePrint",function(){a.getWin().print()}),a.addButton("print",{title:"Print",cmd:"mcePrint"}),a.addShortcut("Meta+P","","mcePrint"),a.addMenuItem("print",{text:"Print",cmd:"mcePrint",icon:"print",shortcut:"Meta+P",context:"file"})});
tinymce.PluginManager.add("save",function(a){function b(){var b;return b=tinymce.DOM.getParent(a.id,"form"),!a.getParam("save_enablewhendirty",!0)||a.isDirty()?(tinymce.triggerSave(),a.getParam("save_onsavecallback")?(a.execCallback("save_onsavecallback",a),void a.nodeChanged()):void(b?(a.setDirty(!1),b.onsubmit&&!b.onsubmit()||("function"==typeof b.submit?b.submit():c(a.translate("Error: Form submit field collision."))),a.nodeChanged()):c(a.translate("Error: No form element found.")))):void 0}function c(b){a.notificationManager.open({text:b,type:"error"})}function d(){var b=tinymce.trim(a.startContent);return a.getParam("save_oncancelcallback")?void a.execCallback("save_oncancelcallback",a):(a.setContent(b),a.undoManager.clear(),void a.nodeChanged())}function e(){var b=this;a.on("nodeChange dirty",function(){b.disabled(a.getParam("save_enablewhendirty",!0)&&!a.isDirty())})}a.addCommand("mceSave",b),a.addCommand("mceCancel",d),a.addButton("save",{icon:"save",text:"Save",cmd:"mceSave",disabled:!0,onPostRender:e}),a.addButton("cancel",{text:"Cancel",icon:!1,cmd:"mceCancel",disabled:!0,onPostRender:e}),a.addShortcut("Meta+S","","mceSave")});
!function(){function a(a){return a&&1==a.nodeType&&"false"===a.contentEditable}function b(b,c,d,e,f){function g(a,b){if(b=b||0,!a[0])throw"findAndReplaceDOMText cannot handle zero-length matches";var c=a.index;if(b>0){var d=a[b];if(!d)throw"Invalid capture group";c+=a[0].indexOf(d),a[0]=d}return[c,c+a[0].length,[a[0]]]}function h(b){var c;if(3===b.nodeType)return b.data;if(o[b.nodeName]&&!n[b.nodeName])return"";if(c="",a(b))return"\n";if((n[b.nodeName]||p[b.nodeName])&&(c+="\n"),b=b.firstChild)do c+=h(b);while(b=b.nextSibling);return c}function i(b,c,d){var e,f,g,h,i=[],j=0,k=b,l=c.shift(),m=0;a:for(;;){if((n[k.nodeName]||p[k.nodeName]||a(k))&&j++,3===k.nodeType&&(!f&&k.length+j>=l[1]?(f=k,h=l[1]-j):e&&i.push(k),!e&&k.length+j>l[0]&&(e=k,g=l[0]-j),j+=k.length),e&&f){if(k=d({startNode:e,startNodeIndex:g,endNode:f,endNodeIndex:h,innerNodes:i,match:l[2],matchIndex:m}),j-=f.length-h,e=null,f=null,i=[],l=c.shift(),m++,!l)break}else if(o[k.nodeName]&&!n[k.nodeName]||!k.firstChild){if(k.nextSibling){k=k.nextSibling;continue}}else if(!a(k)){k=k.firstChild;continue}for(;;){if(k.nextSibling){k=k.nextSibling;break}if(k.parentNode===b)break a;k=k.parentNode}}}function j(a){var b;if("function"!=typeof a){var c=a.nodeType?a:m.createElement(a);b=function(a,b){var d=c.cloneNode(!1);return d.setAttribute("data-mce-index",b),a&&d.appendChild(m.createTextNode(a)),d}}else b=a;return function(a){var c,d,e,f=a.startNode,g=a.endNode,h=a.matchIndex;if(f===g){var i=f;e=i.parentNode,a.startNodeIndex>0&&(c=m.createTextNode(i.data.substring(0,a.startNodeIndex)),e.insertBefore(c,i));var j=b(a.match[0],h);return e.insertBefore(j,i),a.endNodeIndex<i.length&&(d=m.createTextNode(i.data.substring(a.endNodeIndex)),e.insertBefore(d,i)),i.parentNode.removeChild(i),j}c=m.createTextNode(f.data.substring(0,a.startNodeIndex)),d=m.createTextNode(g.data.substring(a.endNodeIndex));for(var k=b(f.data.substring(a.startNodeIndex),h),l=[],n=0,o=a.innerNodes.length;o>n;++n){var p=a.innerNodes[n],q=b(p.data,h);p.parentNode.replaceChild(q,p),l.push(q)}var r=b(g.data.substring(0,a.endNodeIndex),h);return e=f.parentNode,e.insertBefore(c,f),e.insertBefore(k,f),e.removeChild(f),e=g.parentNode,e.insertBefore(r,g),e.insertBefore(d,g),e.removeChild(g),r}}var k,l,m,n,o,p,q=[],r=0;if(m=c.ownerDocument,n=f.getBlockElements(),o=f.getWhiteSpaceElements(),p=f.getShortEndedElements(),l=h(c)){if(b.global)for(;k=b.exec(l);)q.push(g(k,e));else k=l.match(b),q.push(g(k,e));return q.length&&(r=q.length,i(c,q,j(d))),r}}function c(a){function c(){function b(){f.statusbar.find("#next").disabled(!g(l+1).length),f.statusbar.find("#prev").disabled(!g(l-1).length)}function c(){a.windowManager.alert("Could not find the specified string.",function(){f.find("#find")[0].focus()})}var d,e={};d=tinymce.trim(a.selection.getContent({format:"text"}));var f=a.windowManager.open({layout:"flex",pack:"center",align:"center",onClose:function(){a.focus(),k.done()},onSubmit:function(a){var d,h,i,j;return a.preventDefault(),h=f.find("#case").checked(),j=f.find("#words").checked(),i=f.find("#find").value(),i.length?e.text==i&&e.caseState==h&&e.wholeWord==j?0===g(l+1).length?void c():(k.next(),void b()):(d=k.find(i,h,j),d||c(),f.statusbar.items().slice(1).disabled(0===d),b(),void(e={text:i,caseState:h,wholeWord:j})):(k.done(!1),void f.statusbar.items().slice(1).disabled(!0))},buttons:[{text:"Find",subtype:"primary",onclick:function(){f.submit()}},{text:"Replace",disabled:!0,onclick:function(){k.replace(f.find("#replace").value())||(f.statusbar.items().slice(1).disabled(!0),l=-1,e={})}},{text:"Replace all",disabled:!0,onclick:function(){k.replace(f.find("#replace").value(),!0,!0),f.statusbar.items().slice(1).disabled(!0),e={}}},{type:"spacer",flex:1},{text:"Prev",name:"prev",disabled:!0,onclick:function(){k.prev(),b()}},{text:"Next",name:"next",disabled:!0,onclick:function(){k.next(),b()}}],title:"Find and replace",items:{type:"form",padding:20,labelGap:30,spacing:10,items:[{type:"textbox",name:"find",size:40,label:"Find",value:d},{type:"textbox",name:"replace",size:40,label:"Replace with"},{type:"checkbox",name:"case",text:"Match case",label:" "},{type:"checkbox",name:"words",text:"Whole words",label:" "}]}})}function d(a){var b=a.getAttribute("data-mce-index");return"number"==typeof b?""+b:b}function e(c){var d,e;return e=a.dom.create("span",{"data-mce-bogus":1}),e.className="mce-match-marker",d=a.getBody(),k.done(!1),b(c,d,e,!1,a.schema)}function f(a){var b=a.parentNode;a.firstChild&&b.insertBefore(a.firstChild,a),a.parentNode.removeChild(a)}function g(b){var c,e=[];if(c=tinymce.toArray(a.getBody().getElementsByTagName("span")),c.length)for(var f=0;f<c.length;f++){var g=d(c[f]);null!==g&&g.length&&g===b.toString()&&e.push(c[f])}return e}function h(b){var c=l,d=a.dom;b=b!==!1,b?c++:c--,d.removeClass(g(l),"mce-match-marker-selected");var e=g(c);return e.length?(d.addClass(g(c),"mce-match-marker-selected"),a.selection.scrollIntoView(e[0]),c):-1}function i(b){var c=a.dom,d=b.parentNode;c.remove(b),c.isEmpty(d)&&c.remove(d)}function j(a){var b=d(a);return null!==b&&b.length>0}var k=this,l=-1;k.init=function(a){a.addMenuItem("searchreplace",{text:"Find and replace",shortcut:"Meta+F",onclick:c,separator:"before",context:"edit"}),a.addButton("searchreplace",{tooltip:"Find and replace",shortcut:"Meta+F",onclick:c}),a.addCommand("SearchReplace",c),a.shortcuts.add("Meta+F","",c)},k.find=function(a,b,c){a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),a=c?"\\b"+a+"\\b":a;var d=e(new RegExp(a,b?"g":"gi"));return d&&(l=-1,l=h(!0)),d},k.next=function(){var a=h(!0);-1!==a&&(l=a)},k.prev=function(){var a=h(!1);-1!==a&&(l=a)},k.replace=function(b,c,e){var h,m,n,o,p,q,r=l;for(c=c!==!1,n=a.getBody(),m=tinymce.grep(tinymce.toArray(n.getElementsByTagName("span")),j),h=0;h<m.length;h++){var s=d(m[h]);if(o=p=parseInt(s,10),e||o===l){for(b.length?(m[h].firstChild.nodeValue=b,f(m[h])):i(m[h]);m[++h];){if(o=parseInt(d(m[h]),10),o!==p){h--;break}i(m[h])}c&&r--}else p>l&&m[h].setAttribute("data-mce-index",p-1)}return a.undoManager.add(),l=r,c?(q=g(r+1).length>0,k.next()):(q=g(r-1).length>0,k.prev()),!e&&q},k.done=function(b){var c,e,g,h;for(e=tinymce.toArray(a.getBody().getElementsByTagName("span")),c=0;c<e.length;c++){var i=d(e[c]);null!==i&&i.length&&(i===l.toString()&&(g||(g=e[c].firstChild),h=e[c].firstChild),f(e[c]))}if(g&&h){var j=a.dom.createRng();return j.setStart(g,0),j.setEnd(h,h.data.length),b!==!1&&a.selection.setRng(j),j}}}tinymce.PluginManager.add("searchreplace",c)}();
!function(a,b){"use strict";function c(a,b){for(var c,d=[],f=0;f<a.length;++f){if(c=g[a[f]]||e(a[f]),!c)throw"module definition dependecy not found: "+a[f];d.push(c)}b.apply(null,d)}function d(a,d,e){if("string"!=typeof a)throw"invalid module definition, module id must be defined and be a string";if(d===b)throw"invalid module definition, dependencies must be specified";if(e===b)throw"invalid module definition, definition function must be specified";c(d,function(){g[a]=e.apply(null,arguments)})}function e(b){for(var c=a,d=b.split(/[.\/]/),e=0;e<d.length;++e){if(!c[d[e]])return;c=c[d[e]]}return c}function f(c){var d,e,f,h,i;for(d=0;d<c.length;d++){e=a,f=c[d],h=f.split(/[.\/]/);for(var j=0;j<h.length-1;++j)e[h[j]]===b&&(e[h[j]]={}),e=e[h[j]];e[h[h.length-1]]=g[f]}if(a.AMDLC_TESTS){i=a.privateModules||{};for(f in g)i[f]=g[f];for(d=0;d<c.length;d++)delete i[c[d]];a.privateModules=i}}var g={};d("tinymce/spellcheckerplugin/DomTextMatcher",[],function(){function a(a){return a&&1==a.nodeType&&"false"===a.contentEditable}return function(b,c){function d(a,b){if(!a[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:a.index,end:a.index+a[0].length,text:a[0],data:b}}function e(b){var c;if(3===b.nodeType)return b.data;if(y[b.nodeName]&&!x[b.nodeName])return"";if(a(b))return"\n";if(c="",(x[b.nodeName]||z[b.nodeName])&&(c+="\n"),b=b.firstChild)do c+=e(b);while(b=b.nextSibling);return c}function f(b,c,d){var e,f,g,h,i,j=[],k=0,l=b,m=0;c=c.slice(0),c.sort(function(a,b){return a.start-b.start}),i=c.shift();a:for(;;){if((x[l.nodeName]||z[l.nodeName]||a(l))&&k++,3===l.nodeType&&(!f&&l.length+k>=i.end?(f=l,h=i.end-k):e&&j.push(l),!e&&l.length+k>i.start&&(e=l,g=i.start-k),k+=l.length),e&&f){if(l=d({startNode:e,startNodeIndex:g,endNode:f,endNodeIndex:h,innerNodes:j,match:i.text,matchIndex:m}),k-=f.length-h,e=null,f=null,j=[],i=c.shift(),m++,!i)break}else if(y[l.nodeName]&&!x[l.nodeName]||!l.firstChild){if(l.nextSibling){l=l.nextSibling;continue}}else if(!a(l)){l=l.firstChild;continue}for(;;){if(l.nextSibling){l=l.nextSibling;break}if(l.parentNode===b)break a;l=l.parentNode}}}function g(a){function b(b,c){var d=A[c];d.stencil||(d.stencil=a(d));var e=d.stencil.cloneNode(!1);return e.setAttribute("data-mce-index",c),b&&e.appendChild(B.doc.createTextNode(b)),e}return function(a){var c,d,e,f=a.startNode,g=a.endNode,h=a.matchIndex,i=B.doc;if(f===g){var j=f;e=j.parentNode,a.startNodeIndex>0&&(c=i.createTextNode(j.data.substring(0,a.startNodeIndex)),e.insertBefore(c,j));var k=b(a.match,h);return e.insertBefore(k,j),a.endNodeIndex<j.length&&(d=i.createTextNode(j.data.substring(a.endNodeIndex)),e.insertBefore(d,j)),j.parentNode.removeChild(j),k}c=i.createTextNode(f.data.substring(0,a.startNodeIndex)),d=i.createTextNode(g.data.substring(a.endNodeIndex));for(var l=b(f.data.substring(a.startNodeIndex),h),m=[],n=0,o=a.innerNodes.length;o>n;++n){var p=a.innerNodes[n],q=b(p.data,h);p.parentNode.replaceChild(q,p),m.push(q)}var r=b(g.data.substring(0,a.endNodeIndex),h);return e=f.parentNode,e.insertBefore(c,f),e.insertBefore(l,f),e.removeChild(f),e=g.parentNode,e.insertBefore(r,g),e.insertBefore(d,g),e.removeChild(g),r}}function h(a){var b=a.parentNode;b.insertBefore(a.firstChild,a),a.parentNode.removeChild(a)}function i(a){var c=b.getElementsByTagName("*"),d=[];a="number"==typeof a?""+a:null;for(var e=0;e<c.length;e++){var f=c[e],g=f.getAttribute("data-mce-index");null!==g&&g.length&&(g!==a&&null!==a||d.push(f))}return d}function j(a){for(var b=A.length;b--;)if(A[b]===a)return b;return-1}function k(a){var b=[];return l(function(c,d){a(c,d)&&b.push(c)}),A=b,this}function l(a){for(var b=0,c=A.length;c>b&&a(A[b],b)!==!1;b++);return this}function m(a){return A.length&&f(b,A,g(a)),this}function n(a,b){if(w&&a.global)for(;v=a.exec(w);)A.push(d(v,b));return this}function o(a){var b,c=i(a?j(a):null);for(b=c.length;b--;)h(c[b]);return this}function p(a){return A[a.getAttribute("data-mce-index")]}function q(a){return i(j(a))[0]}function r(a,b,c){return A.push({start:a,end:a+b,text:w.substr(a,b),data:c}),this}function s(a){var b=i(j(a)),d=c.dom.createRng();return d.setStartBefore(b[0]),d.setEndAfter(b[b.length-1]),d}function t(a,b){var d=s(a);return d.deleteContents(),b.length>0&&d.insertNode(c.dom.doc.createTextNode(b)),d}function u(){return A.splice(0,A.length),o(),this}var v,w,x,y,z,A=[],B=c.dom;return x=c.schema.getBlockElements(),y=c.schema.getWhiteSpaceElements(),z=c.schema.getShortEndedElements(),w=e(b),{text:w,matches:A,each:l,filter:k,reset:u,matchFromElement:p,elementFromMatch:q,find:n,add:r,wrap:m,unwrap:o,replace:t,rangeFromMatch:s,indexOf:j}}}),d("tinymce/spellcheckerplugin/Plugin",["tinymce/spellcheckerplugin/DomTextMatcher","tinymce/PluginManager","tinymce/util/Tools","tinymce/ui/Menu","tinymce/dom/DOMUtils","tinymce/util/XHR","tinymce/util/URI","tinymce/util/JSON"],function(a,b,c,d,e,f,g,h){b.add("spellchecker",function(b,i){function j(){return E.textMatcher||(E.textMatcher=new a(b.getBody(),b)),E.textMatcher}function k(a,b){var d=[];return c.each(b,function(a){d.push({selectable:!0,text:a.name,data:a.value})}),d}function l(a){for(var b in a)return!1;return!0}function m(a,f){var g=[],h=A[a];c.each(h,function(a){g.push({text:a,onclick:function(){b.insertContent(b.dom.encode(a)),b.dom.remove(f),r()}})}),g.push({text:"-"}),D&&g.push({text:"Add to Dictionary",onclick:function(){s(a,f)}}),g.push.apply(g,[{text:"Ignore",onclick:function(){t(a,f)}},{text:"Ignore all",onclick:function(){t(a,f,!0)}}]),C=new d({items:g,context:"contextmenu",onautohide:function(a){-1!=a.target.className.indexOf("spellchecker")&&a.preventDefault()},onhide:function(){C.remove(),C=null}}),C.renderTo(document.body);var i=e.DOM.getPos(b.getContentAreaContainer()),j=b.dom.getPos(f[0]),k=b.dom.getRoot();"BODY"==k.nodeName?(j.x-=k.ownerDocument.documentElement.scrollLeft||k.scrollLeft,j.y-=k.ownerDocument.documentElement.scrollTop||k.scrollTop):(j.x-=k.scrollLeft,j.y-=k.scrollTop),i.x+=j.x,i.y+=j.y,C.moveTo(i.x,i.y+f[0].offsetHeight)}function n(){return b.getParam("spellchecker_wordchar_pattern")||new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g")}function o(a,d,e,j){var k={method:a,lang:F.spellchecker_language},l="";k["addToDictionary"==a?"word":"text"]=d,c.each(k,function(a,b){l&&(l+="&"),l+=b+"="+encodeURIComponent(a)}),f.send({url:new g(i).toAbsolute(F.spellchecker_rpc_url),type:"post",content_type:"application/x-www-form-urlencoded",data:l,success:function(a){if(a=h.parse(a))a.error?j(a.error):e(a);else{var c=b.translate("Server response wasn't proper JSON.");j(c)}},error:function(){var a=b.translate("The spelling service was not found: (")+F.spellchecker_rpc_url+b.translate(")");j(a)}})}function p(a,b,c,d){var e=F.spellchecker_callback||o;e.call(E,a,b,c,d)}function q(){function a(a){b.notificationManager.open({text:a,type:"error"}),b.setProgressState(!1),u()}u()||(b.setProgressState(!0),p("spellcheck",j().text,y,a),b.focus())}function r(){b.dom.select("span.mce-spellchecker-word").length||u()}function s(a,c){b.setProgressState(!0),p("addToDictionary",a,function(){b.setProgressState(!1),b.dom.remove(c,!0),r()},function(a){b.notificationManager.open({text:a,type:"error"}),b.setProgressState(!1)})}function t(a,d,e){b.selection.collapse(),e?c.each(b.dom.select("span.mce-spellchecker-word"),function(c){c.getAttribute("data-mce-word")==a&&b.dom.remove(c,!0)}):b.dom.remove(d,!0),r()}function u(){return j().reset(),E.textMatcher=null,B?(B=!1,b.fire("SpellcheckEnd"),!0):void 0}function v(a){var b=a.getAttribute("data-mce-index");return"number"==typeof b?""+b:b}function w(a){var d,e=[];if(d=c.toArray(b.getBody().getElementsByTagName("span")),d.length)for(var f=0;f<d.length;f++){var g=v(d[f]);null!==g&&g.length&&g===a.toString()&&e.push(d[f])}return e}function x(a){var b=F.spellchecker_language;a.control.items().each(function(a){a.active(a.settings.data===b)})}function y(a){var c;if(a.words?(D=!!a.dictionary,c=a.words):c=a,b.setProgressState(!1),l(c)){var d=b.translate("No misspellings found.");return b.notificationManager.open({text:d,type:"info"}),void(B=!1)}A=c,j().find(n()).filter(function(a){return!!c[a.text]}).wrap(function(a){return b.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":a.text})}),B=!0,b.fire("SpellcheckStart")}var z,A,B,C,D,E=this,F=b.settings,G=F.spellchecker_languages||"English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";z=k("Language",c.map(G.split(","),function(a){return a=a.split("="),{name:a[0],value:a[1]}})),b.on("click",function(a){var c=a.target;if("mce-spellchecker-word"==c.className){a.preventDefault();var d=w(v(c));if(d.length>0){var e=b.dom.createRng();e.setStartBefore(d[0]),e.setEndAfter(d[d.length-1]),b.selection.setRng(e),m(c.getAttribute("data-mce-word"),d)}}}),b.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:q,selectable:!0,onPostRender:function(){var a=this;a.active(B),b.on("SpellcheckStart SpellcheckEnd",function(){a.active(B)})}});var H={tooltip:"Spellcheck",onclick:q,onPostRender:function(){var a=this;b.on("SpellcheckStart SpellcheckEnd",function(){a.active(B)})}};z.length>1&&(H.type="splitbutton",H.menu=z,H.onshow=x,H.onselect=function(a){F.spellchecker_language=a.control.settings.data}),b.addButton("spellchecker",H),b.addCommand("mceSpellCheck",q),b.on("remove",function(){C&&(C.remove(),C=null)}),b.on("change",r),this.getTextMatcher=j,this.getWordCharPattern=n,this.markErrors=y,this.getLanguage=function(){return F.spellchecker_language},F.spellchecker_language=F.spellchecker_language||F.language||"en"})}),f(["tinymce/spellcheckerplugin/DomTextMatcher"])}(this);
tinymce.PluginManager.add("tabfocus",function(a){function b(a){9!==a.keyCode||a.ctrlKey||a.altKey||a.metaKey||a.preventDefault()}function c(b){function c(c){function f(a){return"BODY"===a.nodeName||"hidden"!=a.type&&"none"!=a.style.display&&"hidden"!=a.style.visibility&&f(a.parentNode)}function i(a){return/INPUT|TEXTAREA|BUTTON/.test(a.tagName)&&tinymce.get(b.id)&&-1!=a.tabIndex&&f(a)}if(h=d.select(":input:enabled,*[tabindex]:not(iframe)"),e(h,function(b,c){return b.id==a.id?(g=c,!1):void 0}),c>0){for(j=g+1;j<h.length;j++)if(i(h[j]))return h[j]}else for(j=g-1;j>=0;j--)if(i(h[j]))return h[j];return null}var g,h,i,j;if(!(9!==b.keyCode||b.ctrlKey||b.altKey||b.metaKey||b.isDefaultPrevented())&&(i=f(a.getParam("tab_focus",a.getParam("tabfocus_elements",":prev,:next"))),1==i.length&&(i[1]=i[0],i[0]=":prev"),h=b.shiftKey?":prev"==i[0]?c(-1):d.get(i[0]):":next"==i[1]?c(1):d.get(i[1]))){var k=tinymce.get(h.id||h.name);h.id&&k?k.focus():tinymce.util.Delay.setTimeout(function(){tinymce.Env.webkit||window.focus(),h.focus()},10),b.preventDefault()}}var d=tinymce.DOM,e=tinymce.each,f=tinymce.explode;a.on("init",function(){a.inline&&tinymce.DOM.setAttrib(a.getBody(),"tabIndex",null),a.on("keyup",b),tinymce.Env.gecko?a.on("keypress keydown",c):a.on("keydown",c)})});
!function(a,b){"use strict";function c(a,b){for(var c,d=[],g=0;g<a.length;++g){if(c=f[a[g]]||e(a[g]),!c)throw"module definition dependecy not found: "+a[g];d.push(c)}b.apply(null,d)}function d(a,d,e){if("string"!=typeof a)throw"invalid module definition, module id must be defined and be a string";if(d===b)throw"invalid module definition, dependencies must be specified";if(e===b)throw"invalid module definition, definition function must be specified";c(d,function(){f[a]=e.apply(null,arguments)})}function e(b){for(var c=a,d=b.split(/[.\/]/),e=0;e<d.length;++e){if(!c[d[e]])return;c=c[d[e]]}return c}var f={};d("tinymce/tableplugin/Utils",["tinymce/Env"],function(a){function b(a,b){return parseInt(a.getAttribute(b)||1,10)}function c(b){(!a.ie||a.ie>9)&&(b.hasChildNodes()||(b.innerHTML='<br data-mce-bogus="1" />'))}return{getSpanVal:b,paddCell:c}}),d("tinymce/tableplugin/TableGrid",["tinymce/util/Tools","tinymce/Env","tinymce/tableplugin/Utils"],function(a,c,d){var e=a.each,f=d.getSpanVal;return function(g,h,i){function j(){g.$("td[data-mce-selected],th[data-mce-selected]").removeAttr("data-mce-selected")}function k(a){return a===g.getBody()}function l(b,c){return b?(c=a.map(c.split(","),function(a){return a.toLowerCase()}),a.grep(b.childNodes,function(b){return-1!==a.inArray(c,b.nodeName.toLowerCase())})):[]}function m(){var a=0;O=[],P=0,e(["thead","tbody","tfoot"],function(b){var c=l(h,b)[0],d=l(c,"tr");e(d,function(c,d){d+=a,e(l(c,"td,th"),function(a,c){var e,g,h,i;if(O[d])for(;O[d][c];)c++;for(h=f(a,"rowspan"),i=f(a,"colspan"),g=d;d+h>g;g++)for(O[g]||(O[g]=[]),e=c;c+i>e;e++)O[g][e]={part:b,real:g==d&&e==c,elm:a,rowspan:h,colspan:i};P=Math.max(P,c+1)})}),a+=d.length})}function n(a){return g.fire("newrow",{node:a}),a}function o(a){return g.fire("newcell",{node:a}),a}function p(a,b){return a=a.cloneNode(b),a.removeAttribute("id"),a}function q(a,b){var c;return c=O[b],c?c[a]:void 0}function r(a,b,c){a&&(c=parseInt(c,10),1===c?a.removeAttribute(b,1):a.setAttribute(b,c,1))}function s(a){return a&&(!!T.getAttrib(a.elm,"data-mce-selected")||a==i)}function t(){var a=[];return e(h.rows,function(b){e(b.cells,function(c){return T.getAttrib(c,"data-mce-selected")||i&&c==i.elm?(a.push(b),!1):void 0})}),a}function u(){var a=T.createRng();k(h)||(a.setStartAfter(h),a.setEndAfter(h),S.setRng(a),T.remove(h))}function v(b){var f,h={};return g.settings.table_clone_elements!==!1&&(h=a.makeMap((g.settings.table_clone_elements||"strong em b i span font h1 h2 h3 h4 h5 h6 p div").toUpperCase(),/[ ,]/)),a.walk(b,function(a){var d;return 3==a.nodeType?(e(T.getParents(a.parentNode,null,b).reverse(),function(a){h[a.nodeName]&&(a=p(a,!1),f?d&&d.appendChild(a):f=d=a,d=a)}),d&&(d.innerHTML=c.ie&&c.ie<10?"&nbsp;":'<br data-mce-bogus="1" />'),!1):void 0},"childNodes"),b=p(b,!1),o(b),r(b,"rowSpan",1),r(b,"colSpan",1),f?b.appendChild(f):d.paddCell(b),b}function w(){var a,b=T.createRng();return e(T.select("tr",h),function(a){0===a.cells.length&&T.remove(a)}),0===T.select("tr",h).length?(b.setStartBefore(h),b.setEndBefore(h),S.setRng(b),void T.remove(h)):(e(T.select("thead,tbody,tfoot",h),function(a){0===a.rows.length&&T.remove(a)}),m(),void(Q&&(a=O[Math.min(O.length-1,Q.y)],a&&(S.select(a[Math.min(a.length-1,Q.x)].elm,!0),S.collapse(!0)))))}function x(a,b,c,d){var e,f,g,h,i;for(e=O[b][a].elm.parentNode,g=1;c>=g;g++)if(e=T.getNext(e,"tr")){for(f=a;f>=0;f--)if(i=O[b+g][f].elm,i.parentNode==e){for(h=1;d>=h;h++)T.insertAfter(v(i),i);break}if(-1==f)for(h=1;d>=h;h++)e.insertBefore(v(e.cells[0]),e.cells[0])}}function y(){e(O,function(a,b){e(a,function(a,c){var d,e,g;if(s(a)&&(a=a.elm,d=f(a,"colspan"),e=f(a,"rowspan"),d>1||e>1)){for(r(a,"rowSpan",1),r(a,"colSpan",1),g=0;d-1>g;g++)T.insertAfter(v(a),a);x(c,b,e-1,d)}})})}function z(b,c,d){var f,g,h,i,j,k,l,n,o,p,t;if(b?(f=J(b),g=f.x,h=f.y,i=g+(c-1),j=h+(d-1)):(Q=R=null,e(O,function(a,b){e(a,function(a,c){s(a)&&(Q||(Q={x:c,y:b}),R={x:c,y:b})})}),Q&&(g=Q.x,h=Q.y,i=R.x,j=R.y)),n=q(g,h),o=q(i,j),n&&o&&n.part==o.part){y(),m(),n=q(g,h).elm;var u=i-g+1,v=j-h+1;for(u===P&&v===O.length&&(u=1,v=1),u===P&&v>1&&(v=1),r(n,"colSpan",u),r(n,"rowSpan",v),l=h;j>=l;l++)for(k=g;i>=k;k++)O[l]&&O[l][k]&&(b=O[l][k].elm,b!=n&&(p=a.grep(b.childNodes),e(p,function(a){n.appendChild(a)}),p.length&&(p=a.grep(n.childNodes),t=0,e(p,function(a){"BR"==a.nodeName&&t++<p.length-1&&n.removeChild(a)})),T.remove(b)));w()}}function A(a){var c,d,g,h,i,j,k,l,m,o;if(e(O,function(b,d){return e(b,function(b){return s(b)&&(b=b.elm,i=b.parentNode,j=n(p(i,!1)),c=d,a)?!1:void 0}),a?!c:void 0}),c!==b){for(h=0,o=0;h<O[0].length;h+=o)if(O[c][h]&&(d=O[c][h].elm,o=f(d,"colspan"),d!=g)){if(a){if(c>0&&O[c-1][h]&&(l=O[c-1][h].elm,m=f(l,"rowSpan"),m>1)){r(l,"rowSpan",m+1);continue}}else if(m=f(d,"rowspan"),m>1){r(d,"rowSpan",m+1);continue}k=v(d),r(k,"colSpan",d.colSpan),j.appendChild(k),g=d}j.hasChildNodes()&&(a?i.parentNode.insertBefore(j,i):T.insertAfter(j,i))}}function B(a){var b,c;e(O,function(c){return e(c,function(c,d){return s(c)&&(b=d,a)?!1:void 0}),a?!b:void 0}),e(O,function(d,e){var g,h,i;d[b]&&(g=d[b].elm,g!=c&&(i=f(g,"colspan"),h=f(g,"rowspan"),1==i?a?(g.parentNode.insertBefore(v(g),g),x(b,e,h-1,i)):(T.insertAfter(v(g),g),x(b,e,h-1,i)):r(g,"colSpan",g.colSpan+1),c=g))})}function C(b){return a.grep(D(b),s)}function D(a){var b=[];return e(a,function(a){e(a,function(a){b.push(a)})}),b}function E(){var b=[];if(k(h)){if(1==O[0].length)return;if(C(O).length==D(O).length)return}e(O,function(c){e(c,function(c,d){s(c)&&-1===a.inArray(b,d)&&(e(O,function(a){var b,c=a[d].elm;b=f(c,"colSpan"),b>1?r(c,"colSpan",b-1):T.remove(c)}),b.push(d))})}),w()}function F(){function a(a){var b,c;e(a.cells,function(a){var c=f(a,"rowSpan");c>1&&(r(a,"rowSpan",c-1),b=J(a),x(b.x,b.y,1,1))}),b=J(a.cells[0]),e(O[b.y],function(a){var b;a=a.elm,a!=c&&(b=f(a,"rowSpan"),1>=b?T.remove(a):r(a,"rowSpan",b-1),c=a)})}var b;b=t(),k(h)&&b.length==h.rows.length||(e(b.reverse(),function(b){a(b)}),w())}function G(){var a=t();if(!k(h)||a.length!=h.rows.length)return T.remove(a),w(),a}function H(){var a=t();return e(a,function(b,c){a[c]=p(b,!0)}),a}function I(b,c){var d,f=t(),g=f[c?0:f.length-1],h=g.cells.length;b&&(d=a.map(b,function(a){return a.cloneNode(!0)}),e(O,function(a){var b;return h=0,e(a,function(a){a.real&&(h+=a.colspan),a.elm.parentNode==g&&(b=1)}),b?!1:void 0}),c||d.reverse(),e(d,function(a){var b,d,e=a.cells.length;for(n(a),b=0;e>b;b++)d=a.cells[b],o(d),r(d,"colSpan",1),r(d,"rowSpan",1);for(b=e;h>b;b++)a.appendChild(o(v(a.cells[e-1])));for(b=h;e>b;b++)T.remove(a.cells[b]);c?g.parentNode.insertBefore(a,g):T.insertAfter(a,g)}),j())}function J(a){var b;return e(O,function(c,d){return e(c,function(c,e){return c.elm==a?(b={x:e,y:d},!1):void 0}),!b}),b}function K(a){Q=J(a)}function L(){var a,b;return a=b=0,e(O,function(c,d){e(c,function(c,e){var f,g;s(c)&&(c=O[d][e],e>a&&(a=e),d>b&&(b=d),c.real&&(f=c.colspan-1,g=c.rowspan-1,f&&e+f>a&&(a=e+f),g&&d+g>b&&(b=d+g)))})}),{x:a,y:b}}function M(a){var b,c,d,e,f,g,h,i,k,l;if(R=J(a),Q&&R){for(b=Math.min(Q.x,R.x),c=Math.min(Q.y,R.y),d=Math.max(Q.x,R.x),e=Math.max(Q.y,R.y),f=d,g=e,l=c;e>=l;l++)for(k=b;d>=k;k++)a=O[l][k],a.real&&(h=a.colspan-1,i=a.rowspan-1,h&&k+h>f&&(f=k+h),i&&l+i>g&&(g=l+i));for(j(),l=c;g>=l;l++)for(k=b;f>=k;k++)O[l][k]&&T.setAttrib(O[l][k].elm,"data-mce-selected","1")}}function N(a,b){var c,d,e;c=J(a),d=c.y*P+c.x;do{if(d+=b,e=q(d%P,Math.floor(d/P)),!e)break;if(e.elm!=a)return S.select(e.elm,!0),T.isEmpty(e.elm)&&S.collapse(!0),!0}while(e.elm==a);return!1}var O,P,Q,R,S=g.selection,T=S.dom;h=h||T.getParent(S.getStart(!0),"table"),m(),i=i||T.getParent(S.getStart(!0),"th,td"),i&&(Q=J(i),R=L(),i=q(Q.x,Q.y)),a.extend(this,{deleteTable:u,split:y,merge:z,insertRow:A,insertCol:B,deleteCols:E,deleteRows:F,cutRows:G,copyRows:H,pasteRows:I,getPos:J,setStartCell:K,setEndCell:M,moveRelIdx:N,refresh:m})}}),d("tinymce/tableplugin/Quirks",["tinymce/util/VK","tinymce/util/Delay","tinymce/Env","tinymce/util/Tools","tinymce/tableplugin/Utils"],function(a,b,c,d,e){var f=d.each,g=e.getSpanVal;return function(h){function i(){function c(c){function d(a,b){var d=a?"previousSibling":"nextSibling",f=h.dom.getParent(b,"tr"),g=f[d];if(g)return r(h,b,g,a),c.preventDefault(),!0;var i=h.dom.getParent(f,"table"),l=f.parentNode,m=l.nodeName.toLowerCase();if("tbody"===m||m===(a?"tfoot":"thead")){var n=e(a,i,l,"tbody");if(null!==n)return j(a,n,b)}return k(a,f,d,i)}function e(a,b,c,d){var e=h.dom.select(">"+d,b),f=e.indexOf(c);if(a&&0===f||!a&&f===e.length-1)return i(a,b);if(-1===f){var g="thead"===c.tagName.toLowerCase()?0:e.length-1;return e[g]}return e[f+(a?-1:1)]}function i(a,b){var c=a?"thead":"tfoot",d=h.dom.select(">"+c,b);return 0!==d.length?d[0]:null}function j(a,b,d){var e=l(b,a);return e&&r(h,d,e,a),c.preventDefault(),!0}function k(a,b,e,f){var g=f[e];if(g)return m(g),!0;var i=h.dom.getParent(f,"td,th");if(i)return d(a,i,c);var j=l(b,!a);return m(j),c.preventDefault(),!1}function l(a,b){var c=a&&a[b?"lastChild":"firstChild"];return c&&"BR"===c.nodeName?h.dom.getParent(c,"td,th"):c}function m(a){h.selection.setCursorLocation(a,0)}function n(){return u==a.UP||u==a.DOWN}function o(a){var b=a.selection.getNode(),c=a.dom.getParent(b,"tr");return null!==c}function p(a){for(var b=0,c=a;c.previousSibling;)c=c.previousSibling,b+=g(c,"colspan");return b}function q(a,b){var c=0,d=0;return f(a.children,function(a,e){return c+=g(a,"colspan"),d=e,c>b?!1:void 0}),d}function r(a,b,c,d){var e=p(h.dom.getParent(b,"td,th")),f=q(c,e),g=c.childNodes[f],i=l(g,d);m(i||g)}function s(a){var b=h.selection.getNode(),c=h.dom.getParent(b,"td,th"),d=h.dom.getParent(a,"td,th");return c&&c!==d&&t(c,d)}function t(a,b){return h.dom.getParent(a,"TABLE")===h.dom.getParent(b,"TABLE")}var u=c.keyCode;if(n()&&o(h)){var v=h.selection.getNode();b.setEditorTimeout(h,function(){s(v)&&d(!c.shiftKey&&u===a.UP,v,c)},0)}}h.on("KeyDown",function(a){c(a)})}function j(){function a(a,b){var c,d=b.ownerDocument,e=d.createRange();return e.setStartBefore(b),e.setEnd(a.endContainer,a.endOffset),c=d.createElement("body"),c.appendChild(e.cloneContents()),0===c.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi,"-").replace(/<[^>]+>/g,"").length}h.on("KeyDown",function(b){var c,d,e=h.dom;37!=b.keyCode&&38!=b.keyCode||(c=h.selection.getRng(),d=e.getParent(c.startContainer,"table"),d&&h.getBody().firstChild==d&&a(c,d)&&(c=e.createRng(),c.setStartBefore(d),c.setEndBefore(d),h.selection.setRng(c),b.preventDefault()))})}function k(){h.on("KeyDown SetContent VisualAid",function(){var a;for(a=h.getBody().lastChild;a;a=a.previousSibling)if(3==a.nodeType){if(a.nodeValue.length>0)break}else if(1==a.nodeType&&("BR"==a.tagName||!a.getAttribute("data-mce-bogus")))break;a&&"TABLE"==a.nodeName&&(h.settings.forced_root_block?h.dom.add(h.getBody(),h.settings.forced_root_block,h.settings.forced_root_block_attrs,c.ie&&c.ie<10?"&nbsp;":'<br data-mce-bogus="1" />'):h.dom.add(h.getBody(),"br",{"data-mce-bogus":"1"}))}),h.on("PreProcess",function(a){var b=a.node.lastChild;b&&("BR"==b.nodeName||1==b.childNodes.length&&("BR"==b.firstChild.nodeName||"\xa0"==b.firstChild.nodeValue))&&b.previousSibling&&"TABLE"==b.previousSibling.nodeName&&h.dom.remove(b)})}function l(){function a(a,b,c,d){var e,f,g,h=3,i=a.dom.getParent(b.startContainer,"TABLE");return i&&(e=i.parentNode),f=b.startContainer.nodeType==h&&0===b.startOffset&&0===b.endOffset&&d&&("TR"==c.nodeName||c==e),g=("TD"==c.nodeName||"TH"==c.nodeName)&&!d,f||g}function b(){var b=h.selection.getRng(),c=h.selection.getNode(),d=h.dom.getParent(b.startContainer,"TD,TH");if(a(h,b,c,d)){d||(d=c);for(var e=d.lastChild;e.lastChild;)e=e.lastChild;3==e.nodeType&&(b.setEnd(e,e.data.length),h.selection.setRng(b))}}h.on("KeyDown",function(){b()}),h.on("MouseDown",function(a){2!=a.button&&b()})}function m(){function b(a){h.selection.select(a,!0),h.selection.collapse(!0)}function c(a){h.$(a).empty(),e.paddCell(a)}h.on("keydown",function(e){if((e.keyCode==a.DELETE||e.keyCode==a.BACKSPACE)&&!e.isDefaultPrevented()){var f,g,i,j;if(f=h.dom.getParent(h.selection.getStart(),"table")){if(g=h.dom.select("td,th",f),i=d.grep(g,function(a){return!!h.dom.getAttrib(a,"data-mce-selected")}),0===i.length)return j=h.dom.getParent(h.selection.getStart(),"td,th"),void(h.selection.isCollapsed()&&j&&h.dom.isEmpty(j)&&(e.preventDefault(),c(j),b(j)));e.preventDefault(),h.undoManager.transact(function(){g.length==i.length?h.execCommand("mceTableDelete"):(d.each(i,c),b(i[0]))})}}})}m(),c.webkit&&(i(),l()),c.gecko&&(j(),k()),c.ie>9&&(j(),k())}}),d("tinymce/tableplugin/CellSelection",["tinymce/tableplugin/TableGrid","tinymce/dom/TreeWalker","tinymce/util/Tools"],function(a,b,c){return function(d,e){function f(a){d.getBody().style.webkitUserSelect="",(a||o)&&(d.$("td[data-mce-selected],th[data-mce-selected]").removeAttr("data-mce-selected"),o=!1)}function g(a,b){return a&&b?a===n.getParent(b,"table"):!1}function h(b){var c,f,h=b.target;if(!m&&h!==l&&(l=h,k&&j)){if(f=n.getParent(h,"td,th"),g(k,f)||(f=n.getParent(k,"td,th")),j===f&&!o)return;if(e(!0),g(k,f)){b.preventDefault(),i||(i=new a(d,k,j),d.getBody().style.webkitUserSelect="none"),i.setEndCell(f),o=!0,c=d.selection.getSel();try{c.removeAllRanges?c.removeAllRanges():c.empty()}catch(p){}}}}var i,j,k,l,m,n=d.dom,o=!0,p=function(){j=i=k=l=null,e(!1)};return d.on("SelectionChange",function(a){o&&a.stopImmediatePropagation()},!0),d.on("MouseDown",function(a){2==a.button||m||(f(),j=n.getParent(a.target,"td,th"),k=n.getParent(j,"table"))}),d.on("mouseover",h),d.on("remove",function(){n.unbind(d.getDoc(),"mouseover",h),f()}),d.on("MouseUp",function(){function a(a,d){var f=new b(a,a);do{if(3==a.nodeType&&0!==c.trim(a.nodeValue).length)return void(d?e.setStart(a,0):e.setEnd(a,a.nodeValue.length));if("BR"==a.nodeName)return void(d?e.setStartBefore(a):e.setEndBefore(a))}while(a=d?f.next():f.prev())}var e,f,g,h,k,l=d.selection;if(j){if(i&&(d.getBody().style.webkitUserSelect=""),f=n.select("td[data-mce-selected],th[data-mce-selected]"),f.length>0){e=n.createRng(),h=f[0],e.setStartBefore(h),e.setEndAfter(h),a(h,1),g=new b(h,n.getParent(f[0],"table"));do if("TD"==h.nodeName||"TH"==h.nodeName){if(!n.getAttrib(h,"data-mce-selected"))break;k=h}while(h=g.next());a(k),l.setRng(e)}d.nodeChanged(),p()}}),d.on("KeyUp Drop SetContent",function(a){f("setcontent"==a.type),p(),m=!1}),d.on("ObjectResizeStart ObjectResized",function(a){m="objectresized"!=a.type}),{clear:f}}}),d("tinymce/tableplugin/Dialogs",["tinymce/util/Tools","tinymce/Env"],function(a,b){var c=a.each;return function(d){function e(){var a=d.settings.color_picker_callback;return a?function(){var b=this;a.call(d,function(a){b.value(a).fire("change")},b.value())}:void 0}function f(a){return{title:"Advanced",type:"form",defaults:{onchange:function(){l(a,this.parents().reverse()[0],"style"==this.name())}},items:[{label:"Style",name:"style",type:"textbox"},{type:"form",padding:0,formItemDefaults:{layout:"grid",alignH:["start","right"]},defaults:{size:7},items:[{label:"Border color",type:"colorbox",name:"borderColor",onaction:e()},{label:"Background color",type:"colorbox",name:"backgroundColor",onaction:e()}]}]}}function g(a){return a?a.replace(/px$/,""):""}function h(a){return/^[0-9]+$/.test(a)&&(a+="px"),a}function i(a){c("left center right".split(" "),function(b){d.formatter.remove("align"+b,{},a)})}function j(a){c("top middle bottom".split(" "),function(b){d.formatter.remove("valign"+b,{},a)})}function k(b,c,d){function e(b,d){return d=d||[],a.each(b,function(a){var b={text:a.text||a.title};a.menu?b.menu=e(a.menu):(b.value=a.value,c&&c(b)),d.push(b)}),d}return e(b,d||[])}function l(a,b,c){var d=b.toJSON(),e=a.parseStyle(d.style);c?(b.find("#borderColor").value(e["border-color"]||"")[0].fire("change"),b.find("#backgroundColor").value(e["background-color"]||"")[0].fire("change")):(e["border-color"]=d.borderColor,e["background-color"]=d.backgroundColor),b.find("#style").value(a.serializeStyle(a.parseStyle(a.serializeStyle(e))))}function m(a,b,c){var d=a.parseStyle(a.getAttrib(c,"style"));d["border-color"]&&(b.borderColor=d["border-color"]),d["background-color"]&&(b.backgroundColor=d["background-color"]),b.style=a.serializeStyle(d)}function n(a,b,d){var e=a.parseStyle(a.getAttrib(b,"style"));c(d,function(a){e[a.name]=a.value}),a.setAttrib(b,"style",a.serializeStyle(a.parseStyle(a.serializeStyle(e))))}var o=this;o.tableProps=function(){o.table(!0)},o.table=function(e){function j(){function c(a,b,d){if("TD"===a.tagName||"TH"===a.tagName)v.setStyle(a,b,d);else if(a.children)for(var e=0;e<a.children.length;e++)c(a.children[e],b,d)}var e;l(v,this),w=a.extend(w,this.toJSON()),w["class"]===!1&&delete w["class"],d.undoManager.transact(function(){if(p||(p=d.plugins.table.insertTable(w.cols||1,w.rows||1)),d.dom.setAttribs(p,{style:w.style,"class":w["class"]}),d.settings.table_style_by_css){if(u=[],u.push({name:"border",value:w.border}),u.push({name:"border-spacing",value:h(w.cellspacing)}),n(v,p,u),v.setAttribs(p,{"data-mce-border-color":w.borderColor,"data-mce-cell-padding":w.cellpadding,"data-mce-border":w.border}),p.children)for(var a=0;a<p.children.length;a++)c(p.children[a],"border",w.border),c(p.children[a],"padding",h(w.cellpadding))}else d.dom.setAttribs(p,{border:w.border,cellpadding:w.cellpadding,cellspacing:w.cellspacing});v.getAttrib(p,"width")&&!d.settings.table_style_by_css?v.setAttrib(p,"width",g(w.width)):v.setStyle(p,"width",h(w.width)),v.setStyle(p,"height",h(w.height)),e=v.select("caption",p)[0],e&&!w.caption&&v.remove(e),!e&&w.caption&&(e=v.create("caption"),e.innerHTML=b.ie?"\xa0":'<br data-mce-bogus="1"/>',p.insertBefore(e,p.firstChild)),i(p),w.align&&d.formatter.apply("align"+w.align,{},p),d.focus(),d.addVisual()})}function o(a,b){function c(a,c){for(var d=0;d<c.length;d++){var e=v.getStyle(c[d],b);if("undefined"==typeof a&&(a=e),a!=e)return""}return a}var e,f=d.dom.select("td,th",a);return e=c(e,f)}var p,q,r,s,t,u,v=d.dom,w={};e===!0?(p=v.getParent(d.selection.getStart(),"table"),p&&(w={width:g(v.getStyle(p,"width")||v.getAttrib(p,"width")),height:g(v.getStyle(p,"height")||v.getAttrib(p,"height")),cellspacing:g(v.getStyle(p,"border-spacing")||v.getAttrib(p,"cellspacing")),cellpadding:v.getAttrib(p,"data-mce-cell-padding")||v.getAttrib(p,"cellpadding")||o(p,"padding"),border:v.getAttrib(p,"data-mce-border")||v.getAttrib(p,"border")||o(p,"border"),borderColor:v.getAttrib(p,"data-mce-border-color"),caption:!!v.select("caption",p)[0],"class":v.getAttrib(p,"class")},c("left center right".split(" "),function(a){d.formatter.matchNode(p,"align"+a)&&(w.align=a)}))):(q={label:"Cols",name:"cols"},r={label:"Rows",name:"rows"}),d.settings.table_class_list&&(w["class"]&&(w["class"]=w["class"].replace(/\s*mce\-item\-table\s*/g,"")),s={name:"class",type:"listbox",label:"Class",values:k(d.settings.table_class_list,function(a){a.value&&(a.textStyle=function(){return d.formatter.getCssText({block:"table",classes:[a.value]})})})}),t={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",labelGapCalc:!1,padding:0,layout:"grid",columns:2,defaults:{type:"textbox",maxWidth:50},items:d.settings.table_appearance_options!==!1?[q,r,{label:"Width",name:"width"},{label:"Height",name:"height"},{label:"Cell spacing",name:"cellspacing"},{label:"Cell padding",name:"cellpadding"},{label:"Border",name:"border"},{label:"Caption",name:"caption",type:"checkbox"}]:[q,r,{label:"Width",name:"width"},{label:"Height",name:"height"}]},{label:"Alignment",name:"align",type:"listbox",text:"None",values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},s]},d.settings.table_advtab!==!1?(m(v,w,p),d.windowManager.open({title:"Table properties",data:w,bodyType:"tabpanel",body:[{title:"General",type:"form",items:t},f(v)],onsubmit:j})):d.windowManager.open({title:"Table properties",data:w,body:t,onsubmit:j})},o.merge=function(a,b){d.windowManager.open({title:"Merge cells",body:[{label:"Cols",name:"cols",type:"textbox",value:"1",size:10},{label:"Rows",name:"rows",type:"textbox",value:"1",size:10}],onsubmit:function(){var c=this.toJSON();d.undoManager.transact(function(){a.merge(b,c.cols,c.rows)})}})},o.cell=function(){function b(){l(p,this),n=a.extend(n,this.toJSON()),d.undoManager.transact(function(){c(q,function(a){d.dom.setAttribs(a,{scope:n.scope,style:n.style,"class":n["class"]}),d.dom.setStyles(a,{width:h(n.width),height:h(n.height)}),n.type&&a.nodeName.toLowerCase()!=n.type&&(a=p.rename(a,n.type)),i(a),n.align&&d.formatter.apply("align"+n.align,{},a),j(a),n.valign&&d.formatter.apply("valign"+n.valign,{},a)}),d.focus()})}var e,n,o,p=d.dom,q=[];if(q=d.dom.select("td[data-mce-selected],th[data-mce-selected]"),e=d.dom.getParent(d.selection.getStart(),"td,th"),!q.length&&e&&q.push(e),e=e||q[0]){n={width:g(p.getStyle(e,"width")||p.getAttrib(e,"width")),height:g(p.getStyle(e,"height")||p.getAttrib(e,"height")),scope:p.getAttrib(e,"scope"),"class":p.getAttrib(e,"class")},n.type=e.nodeName.toLowerCase(),c("left center right".split(" "),function(a){d.formatter.matchNode(e,"align"+a)&&(n.align=a)}),c("top middle bottom".split(" "),function(a){d.formatter.matchNode(e,"valign"+a)&&(n.valign=a)}),d.settings.table_cell_class_list&&(o={name:"class",type:"listbox",label:"Class",values:k(d.settings.table_cell_class_list,function(a){a.value&&(a.textStyle=function(){return d.formatter.getCssText({block:"td",classes:[a.value]})})})});var r={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",layout:"grid",columns:2,labelGapCalc:!1,padding:0,defaults:{type:"textbox",maxWidth:50},items:[{label:"Width",name:"width"},{label:"Height",name:"height"},{label:"Cell type",name:"type",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{label:"Scope",name:"scope",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{label:"H Align",name:"align",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"V Align",name:"valign",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}]},o]};d.settings.table_cell_advtab!==!1?(m(p,n,e),d.windowManager.open({title:"Cell properties",bodyType:"tabpanel",data:n,body:[{title:"General",type:"form",items:r},f(p)],onsubmit:b})):d.windowManager.open({title:"Cell properties",data:n,body:r,onsubmit:b})}},o.row=function(){function b(){var b,e,f;l(r,this),p=a.extend(p,this.toJSON()),d.undoManager.transact(function(){var a=p.type;c(s,function(c){d.dom.setAttribs(c,{scope:p.scope,style:p.style,"class":p["class"]}),d.dom.setStyles(c,{height:h(p.height)}),a!=c.parentNode.nodeName.toLowerCase()&&(b=r.getParent(c,"table"),e=c.parentNode,f=r.select(a,b)[0],f||(f=r.create(a),b.firstChild?b.insertBefore(f,b.firstChild):b.appendChild(f)),f.appendChild(c),e.hasChildNodes()||r.remove(e)),i(c),p.align&&d.formatter.apply("align"+p.align,{},c)}),d.focus()})}var e,j,n,o,p,q,r=d.dom,s=[];e=d.dom.getParent(d.selection.getStart(),"table"),j=d.dom.getParent(d.selection.getStart(),"td,th"),c(e.rows,function(a){c(a.cells,function(b){return r.getAttrib(b,"data-mce-selected")||b==j?(s.push(a),!1):void 0})}),n=s[0],n&&(p={height:g(r.getStyle(n,"height")||r.getAttrib(n,"height")),scope:r.getAttrib(n,"scope"),"class":r.getAttrib(n,"class")},p.type=n.parentNode.nodeName.toLowerCase(),c("left center right".split(" "),function(a){d.formatter.matchNode(n,"align"+a)&&(p.align=a)}),d.settings.table_row_class_list&&(o={name:"class",type:"listbox",label:"Class",values:k(d.settings.table_row_class_list,function(a){a.value&&(a.textStyle=function(){return d.formatter.getCssText({block:"tr",classes:[a.value]})})})}),q={type:"form",columns:2,padding:0,defaults:{type:"textbox"},items:[{type:"listbox",name:"type",label:"Row type",text:"None",maxWidth:null,values:[{text:"Header",value:"thead"},{text:"Body",value:"tbody"},{text:"Footer",value:"tfoot"}]},{type:"listbox",name:"align",label:"Alignment",text:"None",maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height"},o]},d.settings.table_row_advtab!==!1?(m(r,p,n),d.windowManager.open({title:"Row properties",data:p,bodyType:"tabpanel",body:[{title:"General",type:"form",items:q},f(r)],onsubmit:b})):d.windowManager.open({title:"Row properties",data:p,body:q,onsubmit:b}))}}}),d("tinymce/tableplugin/ResizeBars",["tinymce/util/Tools","tinymce/util/VK"],function(a,c){var d;return function(e){function f(a,b){return{index:a,y:e.dom.getPos(b).y}}function g(a,b){return{index:a,y:e.dom.getPos(b).y+b.offsetHeight}}function h(a,b){return{index:a,x:e.dom.getPos(b).x}}function i(a,b){return{index:a,x:e.dom.getPos(b).x+b.offsetWidth}}function j(){var a=e.getBody().dir;return"rtl"===a}function k(){return e.inline}function l(){return k?e.getBody().ownerDocument.body:e.getBody()}function m(a,b){return j()?i(a,b):h(a,b)}function n(a,b){return j()?h(a,b):i(a,b)}function o(a,b){return p(a,"width")/p(b,"width")*100}function p(a,b){var c=e.dom.getStyle(a,b,!0),d=parseInt(c,10);return d}function q(a){var b=p(a,"width"),c=p(a.parentElement,"width");return b/c*100}function r(a,b){var c=p(a,"width");return b/c*100}function s(a,b){var c=p(a.parentElement,"width");return b/c*100}function t(a,b,c){for(var d=[],e=1;e<c.length;e++){var f=c[e].element;d.push(a(e-1,f))}var g=c[c.length-1];return d.push(b(c.length-1,g.element)),d}function u(){var b=e.dom.select("."+ma,l());a.each(b,function(a){e.dom.remove(a)})}function v(a){u(),F(a)}function w(a,b,c,d,e,f,g,h){var i={"data-mce-bogus":"all","class":ma+" "+a,unselectable:"on","data-mce-resize":!1,style:"cursor: "+b+"; margin: 0; padding: 0; position: absolute; left: "+c+"px; top: "+d+"px; height: "+e+"px; width: "+f+"px; "};return i[g]=h,i}function x(b,c,d){a.each(b,function(a){var b=d.x,f=a.y-va/2,g=va,h=c;e.dom.add(l(),"div",w(na,oa,b,f,g,h,pa,a.index))})}function y(b,c,d){a.each(b,function(a){var b=a.x-va/2,f=d.y,g=c,h=va;e.dom.add(l(),"div",w(ra,sa,b,f,g,h,ta,a.index))})}function z(b){return a.map(b.rows,function(b){var c=a.map(b.cells,function(a){var b=a.hasAttribute("rowspan")?parseInt(a.getAttribute("rowspan"),10):1,c=a.hasAttribute("colspan")?parseInt(a.getAttribute("colspan"),10):1;return{element:a,rowspan:b,colspan:c}});return{element:b,cells:c}})}function A(c){function d(a,b){return a+","+b}function e(a,b){return h[d(a,b)]}function f(){var b=[];return a.each(i,function(a){b=b.concat(a.cells)}),b}function g(){return i}var h={},i=[],j=0,k=0;return a.each(c,function(c,e){var f=[];a.each(c.cells,function(a){for(var c=0;h[d(e,c)]!==b;)c++;for(var g={element:a.element,colspan:a.colspan,rowspan:a.rowspan,rowIndex:e,colIndex:c},i=0;i<a.colspan;i++)for(var l=0;l<a.rowspan;l++){var m=e+l,n=c+i;h[d(m,n)]=g,j=Math.max(j,m+1),k=Math.max(k,n+1)}f.push(g)}),i.push({element:c.element,cells:f})}),{grid:{maxRows:j,maxCols:k},getAt:e,getAllCells:f,getAllRows:g}}function B(a,b){for(var c=[],d=a;b>d;d++)c.push(d);return c}function C(a,b,c){for(var d,e=a(),f=0;f<e.length;f++)b(e[f])&&(d=e[f]);return d?d:c()}function D(b){var c=B(0,b.grid.maxCols),d=B(0,b.grid.maxRows);return a.map(c,function(a){function c(){for(var c=[],e=0;e<d.length;e++){var f=b.getAt(e,a);f&&f.colIndex===a&&c.push(f)}return c}function e(a){return 1===a.colspan}function f(){for(var c,e=0;e<d.length;e++)if(c=b.getAt(e,a))return c;return null}return C(c,e,f)})}function E(b){var c=B(0,b.grid.maxCols),d=B(0,b.grid.maxRows);return a.map(d,function(a){function d(){for(var d=[],e=0;e<c.length;e++){var f=b.getAt(a,e);f&&f.rowIndex===a&&d.push(f)}return d}function e(a){return 1===a.rowspan}function f(){return b.getAt(a,0)}return C(d,e,f)})}function F(a){var b=z(a),c=A(b),d=E(c),h=D(c),i=e.dom.getPos(a),j=d.length>0?t(f,g,d):[],k=h.length>0?t(m,n,h):[];x(j,a.offsetWidth,i),y(k,a.offsetHeight,i)}function G(a,b,c,d){if(0>b||b>=a.length-1)return"";var e=a[b];if(e)e={value:e,delta:0};else for(var f=a.slice(0,b).reverse(),g=0;g<f.length;g++)f[g]&&(e={value:f[g],delta:g+1});var h=a[b+1];if(h)h={value:h,delta:1};else for(var i=a.slice(b+1),j=0;j<i.length;j++)i[j]&&(h={value:i[j],delta:j+1});var k=h.delta-e.delta,l=Math.abs(h.value-e.value)/k;return c?l/p(d,"width")*100:l}function H(a,b){var c=e.dom.getStyle(a,b);return c||(c=e.dom.getAttrib(a,b)),c||(c=e.dom.getStyle(a,b,!0)),c}function I(a,b,c){var d=H(a,"width"),e=parseInt(d,10),f=b?o(a,c):p(a,"width");return(b&&!R(d)||!b&&!S(d))&&(e=0),!isNaN(e)&&e>0?e:f}function J(b,c,d){for(var e=D(b),f=a.map(e,function(a){return m(a.colIndex,a.element).x}),g=[],h=0;h<e.length;h++){var i=e[h].element.hasAttribute("colspan")?parseInt(e[h].element.getAttribute("colspan"),10):1,j=i>1?G(f,h):I(e[h].element,c,d);j=j?j:wa,g.push(j)}return g}function K(a){var b=H(a,"height"),c=parseInt(b,10);return R(b)&&(c=0),!isNaN(c)&&c>0?c:p(a,"height")}function L(b){for(var c=E(b),d=a.map(c,function(a){return f(a.rowIndex,a.element).y}),e=[],g=0;g<c.length;g++){var h=c[g].element.hasAttribute("rowspan")?parseInt(c[g].element.getAttribute("rowspan"),10):1,i=h>1?G(d,g):K(c[g].element);i=i?i:xa,e.push(i)}return e}function M(b,c,d,e,f){function g(b){return a.map(b,function(){return 0})}function h(){var a;if(f)a=[100-l[0]];else{var b=Math.max(e,l[0]+d);a=[b-l[0]]}return a}function i(a,b){var c,f=g(l.slice(0,a)),h=g(l.slice(b+1));if(d>=0){var i=Math.max(e,l[b]-d);c=f.concat([d,i-l[b]]).concat(h)}else{var j=Math.max(e,l[a]+d),k=l[a]-j;c=f.concat([j-l[a],k]).concat(h)}return c}function j(a,b){var c,f=g(l.slice(0,b));if(d>=0)c=f.concat([d]);else{var h=Math.max(e,l[b]+d);c=f.concat([h-l[b]])}return c}var k,l=b.slice(0);return k=0===b.length?[]:1===b.length?h():0===c?i(0,1):c>0&&c<b.length-1?i(c,c+1):c===b.length-1?j(c-1,c):[]}function N(a,b,c){for(var d=0,e=a;b>e;e++)d+=c[e];return d}function O(b,c){var d=b.getAllCells();return a.map(d,function(a){var b=N(a.colIndex,a.colIndex+a.colspan,c);return{element:a.element,width:b,colspan:a.colspan}})}function P(b,c){var d=b.getAllCells();return a.map(d,function(a){var b=N(a.rowIndex,a.rowIndex+a.rowspan,c);return{element:a.element,height:b,rowspan:a.rowspan}})}function Q(b,c){var d=b.getAllRows();return a.map(d,function(a,b){return{element:a.element,height:c[b]}})}function R(a){return za.test(a)}function S(a){return Aa.test(a)}function T(b,c,d){function f(b,c){a.each(b,function(a){e.dom.setStyle(a.element,"width",a.width+c),e.dom.setAttrib(a.element,"width",null)})}function g(){return d<k.grid.maxCols-1?q(b):q(b)+s(b,c)}function h(){return d<k.grid.maxCols-1?p(b,"width"):p(b,"width")+c}function i(a,c,f){d!=k.grid.maxCols-1&&f||(e.dom.setStyle(b,"width",a+c),e.dom.setAttrib(b,"width",null))}for(var j=z(b),k=A(j),l=R(b.width)||R(b.style.width),m=J(k,l,b),n=l?r(b,c):c,o=M(m,d,n,wa,l,b),t=[],u=0;u<o.length;u++)t.push(o[u]+m[u]);var v=O(k,t),w=l?"%":"px",x=l?g():h();e.undoManager.transact(function(){f(v,w),i(x,w,l)})}function U(b,c,d){for(var f=z(b),g=A(f),h=L(g),i=[],j=0,k=0;k<h.length;k++)i.push(k===d?c+h[k]:h[k]),j+=j[k];var l=P(g,i),m=Q(g,i);e.undoManager.transact(function(){a.each(m,function(a){e.dom.setStyle(a.element,"height",a.height+"px"),e.dom.setAttrib(a.element,"height",null)}),a.each(l,function(a){e.dom.setStyle(a.element,"height",a.height+"px"),e.dom.setAttrib(a.element,"height",null)}),e.dom.setStyle(b,"height",j+"px"),e.dom.setAttrib(b,"height",null)})}function V(){ga=setTimeout(function(){Z()},200)}function W(){clearTimeout(ga)}function X(){var a=document.createElement("div");return a.setAttribute("style","margin: 0; padding: 0; position: fixed; left: 0px; top: 0px; height: 100%; width: 100%;"),a.setAttribute("data-mce-bogus","all"),a}function Y(a,b){e.dom.bind(a,"mouseup",function(){Z()}),e.dom.bind(a,"mousemove",function(a){
    W(),ha&&b(a)}),e.dom.bind(a,"mouseout",function(){V()})}function Z(){if(e.dom.remove(ia),ha){e.dom.removeClass(ja,ya),ha=!1;var a,b;if(_(ja)){var c=parseInt(e.dom.getAttrib(ja,ua),10),f=e.dom.getPos(ja).x;a=parseInt(e.dom.getAttrib(ja,ta),10),b=j()?c-f:f-c,T(d,b,a)}else if(aa(ja)){var g=parseInt(e.dom.getAttrib(ja,qa),10),h=e.dom.getPos(ja).y;a=parseInt(e.dom.getAttrib(ja,pa),10),b=h-g,U(d,b,a)}v(d),e.nodeChanged()}}function $(a,b){ia=ia?ia:X(),ha=!0,e.dom.addClass(a,ya),ja=a,Y(ia,b),e.dom.add(l(),ia)}function _(a){return e.dom.hasClass(a,ra)}function aa(a){return e.dom.hasClass(a,na)}function ba(a){ka=ka!==b?ka:a.clientX;var c=a.clientX-ka;ka=a.clientX;var d=e.dom.getPos(ja).x;e.dom.setStyle(ja,"left",d+c+"px")}function ca(a){la=la!==b?la:a.clientY;var c=a.clientY-la;la=a.clientY;var d=e.dom.getPos(ja).y;e.dom.setStyle(ja,"top",d+c+"px")}function da(a){ka=b,$(a,ba)}function ea(a){la=b,$(a,ca)}function fa(a){var b=a.target,c=e.getBody();if(e.$.contains(c,d)||d===c)if(_(b)){a.preventDefault();var f=e.dom.getPos(b).x;e.dom.setAttrib(b,ua,f),da(b)}else if(aa(b)){a.preventDefault();var g=e.dom.getPos(b).y;e.dom.setAttrib(b,qa,g),ea(b)}else u()}var ga,ha,ia,ja,ka,la,ma="mce-resize-bar",na="mce-resize-bar-row",oa="row-resize",pa="data-row",qa="data-initial-top",ra="mce-resize-bar-col",sa="col-resize",ta="data-col",ua="data-initial-left",va=4,wa=10,xa=10,ya="mce-resize-bar-dragging",za=new RegExp(/(\d+(\.\d+)?%)/),Aa=new RegExp(/px|em/);return e.on("init",function(){e.dom.bind(l(),"mousedown",fa)}),e.on("ObjectResized",function(b){var c=b.target;if("TABLE"===c.nodeName){var d=[];a.each(c.rows,function(b){a.each(b.cells,function(a){var b=e.dom.getStyle(a,"width",!0);d.push({cell:a,width:b})})}),a.each(d,function(a){e.dom.setStyle(a.cell,"width",a.width),e.dom.setAttrib(a.cell,"width",null)})}}),e.on("mouseover",function(a){if(!ha){var b=e.dom.getParent(a.target,"table");("TABLE"===a.target.nodeName||b)&&(d=b,v(b))}}),e.on("keydown",function(a){switch(a.keyCode){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:u()}}),e.on("remove",function(){u(),e.dom.unbind(l(),"mousedown",fa)}),{adjustWidth:T,adjustHeight:U,clearBars:u,drawBars:F,determineDeltas:M,getTableGrid:A,getTableDetails:z,getWidths:J,getPixelHeights:L,isPercentageBasedSize:R,isPixelBasedSize:S,recalculateWidths:O,recalculateCellHeights:P,recalculateRowHeights:Q}}}),d("tinymce/tableplugin/Plugin",["tinymce/tableplugin/TableGrid","tinymce/tableplugin/Quirks","tinymce/tableplugin/CellSelection","tinymce/tableplugin/Dialogs","tinymce/tableplugin/ResizeBars","tinymce/util/Tools","tinymce/dom/TreeWalker","tinymce/Env","tinymce/PluginManager"],function(a,b,c,d,e,f,g,h,i){function j(f){function g(a){return function(){f.execCommand(a)}}function i(a,b){var c,d,e,g;for(e='<table id="__mce"><tbody>',c=0;b>c;c++){for(e+="<tr>",d=0;a>d;d++)e+="<td>"+(h.ie&&h.ie<10?"&nbsp;":"<br>")+"</td>";e+="</tr>"}return e+="</tbody></table>",f.undoManager.transact(function(){f.insertContent(e),g=f.dom.get("__mce"),f.dom.setAttrib(g,"id",null),f.$("tr",g).each(function(a,b){f.fire("newrow",{node:b}),f.$("th,td",b).each(function(a,b){f.fire("newcell",{node:b})})}),f.dom.setAttribs(g,f.settings.table_default_attributes||{}),f.dom.setStyles(g,f.settings.table_default_styles||{})}),g}function j(a,b,c){function d(){var d,e,g,h={},i=0;e=f.dom.select("td[data-mce-selected],th[data-mce-selected]"),d=e[0],d||(d=f.selection.getStart()),c&&e.length>0?(k(e,function(a){return h[a.parentNode.parentNode.nodeName]=1}),k(h,function(a){i+=a}),g=1!==i):g=!f.dom.getParent(d,b),a.disabled(g),f.selection.selectorChanged(b,function(b){a.disabled(!b)})}f.initialized?d():f.on("init",d)}function l(){j(this,"table")}function m(){j(this,"td,th")}function n(){j(this,"td,th",!0)}function o(){var a="";a='<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';for(var b=0;10>b;b++){a+="<tr>";for(var c=0;10>c;c++)a+='<td role="gridcell" tabindex="-1"><a id="mcegrid'+(10*b+c)+'" href="#" data-mce-x="'+c+'" data-mce-y="'+b+'"></a></td>';a+="</tr>"}return a+="</table>",a+='<div class="mce-text-center" role="presentation">1 x 1</div>'}function p(a,b,c){var d,e,g,h,i,j=c.getEl().getElementsByTagName("table")[0],k=c.isRtl()||"tl-tr"==c.parent().rel;for(j.nextSibling.innerHTML=a+1+" x "+(b+1),k&&(a=9-a),e=0;10>e;e++)for(d=0;10>d;d++)h=j.rows[e].childNodes[d].firstChild,i=(k?d>=a:a>=d)&&b>=e,f.dom.toggleClass(h,"mce-active",i),i&&(g=h);return g.parentNode}function q(){f.addButton("tableprops",{title:"Table properties",onclick:y.tableProps,icon:"table"}),f.addButton("tabledelete",{title:"Delete table",onclick:g("mceTableDelete")}),f.addButton("tablecellprops",{title:"Cell properties",onclick:g("mceTableCellProps")}),f.addButton("tablemergecells",{title:"Merge cells",onclick:g("mceTableMergeCells")}),f.addButton("tablesplitcells",{title:"Split cell",onclick:g("mceTableSplitCells")}),f.addButton("tableinsertrowbefore",{title:"Insert row before",onclick:g("mceTableInsertRowBefore")}),f.addButton("tableinsertrowafter",{title:"Insert row after",onclick:g("mceTableInsertRowAfter")}),f.addButton("tabledeleterow",{title:"Delete row",onclick:g("mceTableDeleteRow")}),f.addButton("tablerowprops",{title:"Row properties",onclick:g("mceTableRowProps")}),f.addButton("tablecutrow",{title:"Cut row",onclick:g("mceTableCutRow")}),f.addButton("tablecopyrow",{title:"Copy row",onclick:g("mceTableCopyRow")}),f.addButton("tablepasterowbefore",{title:"Paste row before",onclick:g("mceTablePasteRowBefore")}),f.addButton("tablepasterowafter",{title:"Paste row after",onclick:g("mceTablePasteRowAfter")}),f.addButton("tableinsertcolbefore",{title:"Insert column before",onclick:g("mceTableInsertColBefore")}),f.addButton("tableinsertcolafter",{title:"Insert column after",onclick:g("mceTableInsertColAfter")}),f.addButton("tabledeletecol",{title:"Delete column",onclick:g("mceTableDeleteCol")})}function r(a){var b=f.dom.is(a,"table")&&f.getBody().contains(a);return b}function s(){var a=f.settings.table_toolbar;""!==a&&a!==!1&&(a||(a="tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"),f.addContextToolbar(r,a))}function t(){return v}function u(a){v=a}var v,w,x=this,y=new d(f);!f.settings.object_resizing||f.settings.table_resize_bars===!1||f.settings.object_resizing!==!0&&"table"!==f.settings.object_resizing||(w=e(f)),f.settings.table_grid===!1?f.addMenuItem("inserttable",{text:"Insert table",icon:"table",context:"table",onclick:y.table}):f.addMenuItem("inserttable",{text:"Insert table",icon:"table",context:"table",ariaHideMenu:!0,onclick:function(a){a.aria&&(this.parent().hideAll(),a.stopImmediatePropagation(),y.table())},onshow:function(){p(0,0,this.menu.items()[0])},onhide:function(){var a=this.menu.items()[0].getEl().getElementsByTagName("a");f.dom.removeClass(a,"mce-active"),f.dom.addClass(a[0],"mce-active")},menu:[{type:"container",html:o(),onPostRender:function(){this.lastX=this.lastY=0},onmousemove:function(a){var b,c,d=a.target;"A"==d.tagName.toUpperCase()&&(b=parseInt(d.getAttribute("data-mce-x"),10),c=parseInt(d.getAttribute("data-mce-y"),10),(this.isRtl()||"tl-tr"==this.parent().rel)&&(b=9-b),b===this.lastX&&c===this.lastY||(p(b,c,a.control),this.lastX=b,this.lastY=c))},onclick:function(a){var b=this;"A"==a.target.tagName.toUpperCase()&&(a.preventDefault(),a.stopPropagation(),b.parent().cancel(),f.undoManager.transact(function(){i(b.lastX+1,b.lastY+1)}),f.addVisual())}}]}),f.addMenuItem("tableprops",{text:"Table properties",context:"table",onPostRender:l,onclick:y.tableProps}),f.addMenuItem("deletetable",{text:"Delete table",context:"table",onPostRender:l,cmd:"mceTableDelete"}),f.addMenuItem("cell",{separator:"before",text:"Cell",context:"table",menu:[{text:"Cell properties",onclick:g("mceTableCellProps"),onPostRender:m},{text:"Merge cells",onclick:g("mceTableMergeCells"),onPostRender:n},{text:"Split cell",onclick:g("mceTableSplitCells"),onPostRender:m}]}),f.addMenuItem("row",{text:"Row",context:"table",menu:[{text:"Insert row before",onclick:g("mceTableInsertRowBefore"),onPostRender:m},{text:"Insert row after",onclick:g("mceTableInsertRowAfter"),onPostRender:m},{text:"Delete row",onclick:g("mceTableDeleteRow"),onPostRender:m},{text:"Row properties",onclick:g("mceTableRowProps"),onPostRender:m},{text:"-"},{text:"Cut row",onclick:g("mceTableCutRow"),onPostRender:m},{text:"Copy row",onclick:g("mceTableCopyRow"),onPostRender:m},{text:"Paste row before",onclick:g("mceTablePasteRowBefore"),onPostRender:m},{text:"Paste row after",onclick:g("mceTablePasteRowAfter"),onPostRender:m}]}),f.addMenuItem("column",{text:"Column",context:"table",menu:[{text:"Insert column before",onclick:g("mceTableInsertColBefore"),onPostRender:m},{text:"Insert column after",onclick:g("mceTableInsertColAfter"),onPostRender:m},{text:"Delete column",onclick:g("mceTableDeleteCol"),onPostRender:m}]});var z=[];k("inserttable tableprops deletetable | cell row column".split(" "),function(a){"|"==a?z.push({text:"-"}):z.push(f.menuItems[a])}),f.addButton("table",{type:"menubutton",title:"Table",menu:z}),h.isIE||f.on("click",function(a){a=a.target,"TABLE"===a.nodeName&&(f.selection.select(a),f.nodeChanged())}),x.quirks=new b(f),f.on("Init",function(){x.cellSelection=new c(f,function(a){a&&w.clearBars()}),x.resizeBars=w}),f.on("PreInit",function(){f.serializer.addAttributeFilter("data-mce-cell-padding,data-mce-border,data-mce-border-color",function(a,b){for(var c=a.length;c--;)a[c].attr(b,null)})}),k({mceTableSplitCells:function(a){a.split()},mceTableMergeCells:function(a){var b;b=f.dom.getParent(f.selection.getStart(),"th,td"),f.dom.select("td[data-mce-selected],th[data-mce-selected]").length?a.merge():y.merge(a,b)},mceTableInsertRowBefore:function(a){a.insertRow(!0)},mceTableInsertRowAfter:function(a){a.insertRow()},mceTableInsertColBefore:function(a){a.insertCol(!0)},mceTableInsertColAfter:function(a){a.insertCol()},mceTableDeleteCol:function(a){a.deleteCols()},mceTableDeleteRow:function(a){a.deleteRows()},mceTableCutRow:function(a){v=a.cutRows()},mceTableCopyRow:function(a){v=a.copyRows()},mceTablePasteRowBefore:function(a){a.pasteRows(v,!0)},mceTablePasteRowAfter:function(a){a.pasteRows(v)},mceTableDelete:function(a){w&&w.clearBars(),a.deleteTable()}},function(b,c){f.addCommand(c,function(){var c=new a(f);c&&(b(c),f.execCommand("mceRepaint"),x.cellSelection.clear())})}),k({mceInsertTable:y.table,mceTableProps:function(){y.table(!0)},mceTableRowProps:y.row,mceTableCellProps:y.cell},function(a,b){f.addCommand(b,function(b,c){a(c)})}),q(),s(),f.settings.table_tab_navigation!==!1&&f.on("keydown",function(b){var c,d,e;9==b.keyCode&&(c=f.dom.getParent(f.selection.getStart(),"th,td"),c&&(b.preventDefault(),d=new a(f),e=b.shiftKey?-1:1,f.undoManager.transact(function(){!d.moveRelIdx(c,e)&&e>0&&(d.insertRow(),d.refresh(),d.moveRelIdx(c,e))})))}),x.insertTable=i,x.setClipboardRows=u,x.getClipboardRows=t}var k=f.each;i.add("table",j)})}(this);
tinymce.PluginManager.add("template",function(a){function b(b){return function(){var c=a.settings.templates;return"function"==typeof c?void c(b):void("string"==typeof c?tinymce.util.XHR.send({url:c,success:function(a){b(tinymce.util.JSON.parse(a))}}):b(c))}}function c(b){function c(b){function c(b){if(-1==b.indexOf("<html>")){var c="";tinymce.each(a.contentCSS,function(b){c+='<link type="text/css" rel="stylesheet" href="'+a.documentBaseURI.toAbsolute(b)+'">'});var e=a.settings.body_class||"";-1!=e.indexOf("=")&&(e=a.getParam("body_class","","hash"),e=e[a.id]||""),b="<!DOCTYPE html><html><head>"+c+'</head><body class="'+e+'">'+b+"</body></html>"}b=f(b,"template_preview_replace_values");var g=d.find("iframe")[0].getEl().contentWindow.document;g.open(),g.write(b),g.close()}var g=b.control.value();g.url?tinymce.util.XHR.send({url:g.url,success:function(a){e=a,c(e)}}):(e=g.content,c(e)),d.find("#description")[0].text(b.control.value().description)}var d,e,h=[];if(!b||0===b.length){var i=a.translate("No templates defined.");return void a.notificationManager.open({text:i,type:"info"})}tinymce.each(b,function(a){h.push({selected:!h.length,text:a.title,value:{url:a.url,content:a.content,description:a.description}})}),d=a.windowManager.open({title:"Insert template",layout:"flex",direction:"column",align:"stretch",padding:15,spacing:10,items:[{type:"form",flex:0,padding:0,items:[{type:"container",label:"Templates",items:{type:"listbox",label:"Templates",name:"template",values:h,onselect:c}}]},{type:"label",name:"description",label:"Description",text:"\xa0"},{type:"iframe",flex:1,border:1}],onsubmit:function(){g(!1,e)},width:a.getParam("template_popup_width",600),height:a.getParam("template_popup_height",500)}),d.find("listbox")[0].fire("select")}function d(b,c){function d(a,b){if(a=""+a,a.length<b)for(var c=0;c<b-a.length;c++)a="0"+a;return a}var e="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),g="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),h="January February March April May June July August September October November December".split(" ");return c=c||new Date,b=b.replace("%D","%m/%d/%Y"),b=b.replace("%r","%I:%M:%S %p"),b=b.replace("%Y",""+c.getFullYear()),b=b.replace("%y",""+c.getYear()),b=b.replace("%m",d(c.getMonth()+1,2)),b=b.replace("%d",d(c.getDate(),2)),b=b.replace("%H",""+d(c.getHours(),2)),b=b.replace("%M",""+d(c.getMinutes(),2)),b=b.replace("%S",""+d(c.getSeconds(),2)),b=b.replace("%I",""+((c.getHours()+11)%12+1)),b=b.replace("%p",""+(c.getHours()<12?"AM":"PM")),b=b.replace("%B",""+a.translate(h[c.getMonth()])),b=b.replace("%b",""+a.translate(g[c.getMonth()])),b=b.replace("%A",""+a.translate(f[c.getDay()])),b=b.replace("%a",""+a.translate(e[c.getDay()])),b=b.replace("%%","%")}function e(b){var c=a.dom,d=a.getParam("template_replace_values");h(c.select("*",b),function(a){h(d,function(b,e){c.hasClass(a,e)&&"function"==typeof d[e]&&d[e](a)})})}function f(b,c){return h(a.getParam(c),function(a,c){"function"==typeof a&&(a=a(c)),b=b.replace(new RegExp("\\{\\$"+c+"\\}","g"),a)}),b}function g(b,c){function g(a,b){return new RegExp("\\b"+b+"\\b","g").test(a.className)}var i,j,k=a.dom,l=a.selection.getContent();c=f(c,"template_replace_values"),i=k.create("div",null,c),j=k.select(".mceTmpl",i),j&&j.length>0&&(i=k.create("div",null),i.appendChild(j[0].cloneNode(!0))),h(k.select("*",i),function(b){g(b,a.getParam("template_cdate_classes","cdate").replace(/\s+/g,"|"))&&(b.innerHTML=d(a.getParam("template_cdate_format",a.getLang("template.cdate_format")))),g(b,a.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(b.innerHTML=d(a.getParam("template_mdate_format",a.getLang("template.mdate_format")))),g(b,a.getParam("template_selected_content_classes","selcontent").replace(/\s+/g,"|"))&&(b.innerHTML=l)}),e(i),a.execCommand("mceInsertContent",!1,i.innerHTML),a.addVisual()}var h=tinymce.each;a.addCommand("mceInsertTemplate",g),a.addButton("template",{title:"Insert template",onclick:b(c)}),a.addMenuItem("template",{text:"Insert template",onclick:b(c),context:"insert"}),a.on("PreProcess",function(b){var c=a.dom;h(c.select("div",b.node),function(b){c.hasClass(b,"mceTmpl")&&(h(c.select("*",b),function(b){c.hasClass(b,a.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(b.innerHTML=d(a.getParam("template_mdate_format",a.getLang("template.mdate_format"))))}),e(b))})})});
tinymce.PluginManager.add("textcolor",function(a){function b(b){var c;return a.dom.getParents(a.selection.getStart(),function(a){var d;(d=a.style["forecolor"==b?"color":"background-color"])&&(c=d)}),c}function c(b){var c,d,e=[];for(d=["000000","Black","993300","Burnt orange","333300","Dark olive","003300","Dark green","003366","Dark azure","000080","Navy Blue","333399","Indigo","333333","Very dark gray","800000","Maroon","FF6600","Orange","808000","Olive","008000","Green","008080","Teal","0000FF","Blue","666699","Grayish blue","808080","Gray","FF0000","Red","FF9900","Amber","99CC00","Yellow green","339966","Sea green","33CCCC","Turquoise","3366FF","Royal blue","800080","Purple","999999","Medium gray","FF00FF","Magenta","FFCC00","Gold","FFFF00","Yellow","00FF00","Lime","00FFFF","Aqua","00CCFF","Sky blue","993366","Red violet","FFFFFF","White","FF99CC","Pink","FFCC99","Peach","FFFF99","Light yellow","CCFFCC","Pale green","CCFFFF","Pale cyan","99CCFF","Light sky blue","CC99FF","Plum"],d=a.settings.textcolor_map||d,d=a.settings[b+"_map"]||d,c=0;c<d.length;c+=2)e.push({text:d[c+1],color:"#"+d[c]});return e}function d(){function b(a,b){var c="transparent"==a;return'<td class="mce-grid-cell'+(c?" mce-colorbtn-trans":"")+'"><div id="'+o+"-"+p++ +'" data-mce-color="'+(a?a:"")+'" role="option" tabIndex="-1" style="'+(a?"background-color: "+a:"")+'" title="'+tinymce.translate(b)+'">'+(c?"&#215;":"")+"</div></td>"}var d,e,f,g,h,k,l,m,n=this,o=n._id,p=0;for(m=n.settings.origin,d=c(m),d.push({text:tinymce.translate("No color"),color:"transparent"}),f='<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>',g=d.length-1,k=0;k<j[m];k++){for(f+="<tr>",h=0;h<i[m];h++)l=k*i[m]+h,l>g?f+="<td></td>":(e=d[l],f+=b(e.color,e.text));f+="</tr>"}if(a.settings.color_picker_callback){for(f+='<tr><td colspan="'+i[m]+'" class="mce-custom-color-btn"><div id="'+o+'-c" class="mce-widget mce-btn mce-btn-small mce-btn-flat" role="button" tabindex="-1" aria-labelledby="'+o+'-c" style="width: 100%"><button type="button" role="presentation" tabindex="-1">'+tinymce.translate("Custom...")+"</button></div></td></tr>",f+="<tr>",h=0;h<i[m];h++)f+=b("","Custom color");f+="</tr>"}return f+="</tbody></table>"}function e(b,c){a.undoManager.transact(function(){a.focus(),a.formatter.apply(b,{value:c}),a.nodeChanged()})}function f(b){a.undoManager.transact(function(){a.focus(),a.formatter.remove(b,{value:null},null,!0),a.nodeChanged()})}function g(c){function d(a){l.hidePanel(),l.color(a),e(l.settings.format,a)}function g(){l.hidePanel(),l.resetColor(),f(l.settings.format)}function h(a,b){a.style.background=b,a.setAttribute("data-mce-color",b)}var j,k,l=this.parent();k=l.settings.origin,tinymce.DOM.getParent(c.target,".mce-custom-color-btn")&&(l.hidePanel(),a.settings.color_picker_callback.call(a,function(a){var b,c,e,f=l.panel.getEl().getElementsByTagName("table")[0];for(b=tinymce.map(f.rows[f.rows.length-1].childNodes,function(a){return a.firstChild}),e=0;e<b.length&&(c=b[e],c.getAttribute("data-mce-color"));e++);if(e==i[k])for(e=0;e<i[k]-1;e++)h(b[e],b[e+1].getAttribute("data-mce-color"));h(c,a),d(a)},b(l.settings.format))),j=c.target.getAttribute("data-mce-color"),j?(this.lastId&&document.getElementById(this.lastId).setAttribute("aria-selected",!1),c.target.setAttribute("aria-selected",!0),this.lastId=c.target.id,"transparent"==j?g():d(j)):null!==j&&l.hidePanel()}function h(){var a=this;a._color?e(a.settings.format,a._color):f(a.settings.format)}var i,j;j={forecolor:a.settings.forecolor_rows||a.settings.textcolor_rows||5,backcolor:a.settings.backcolor_rows||a.settings.textcolor_rows||5},i={forecolor:a.settings.forecolor_cols||a.settings.textcolor_cols||8,backcolor:a.settings.backcolor_cols||a.settings.textcolor_cols||8},a.addButton("forecolor",{type:"colorbutton",tooltip:"Text color",format:"forecolor",panel:{origin:"forecolor",role:"application",ariaRemember:!0,html:d,onclick:g},onclick:h}),a.addButton("backcolor",{type:"colorbutton",tooltip:"Background color",format:"hilitecolor",panel:{origin:"backcolor",role:"application",ariaRemember:!0,html:d,onclick:g},onclick:h})});
tinymce.PluginManager.add("textpattern",function(a){function b(){return j&&(i.sort(function(a,b){return a.start.length>b.start.length?-1:a.start.length<b.start.length?1:0}),j=!1),i}function c(a){for(var c=b(),d=0;d<c.length;d++)if(0===a.indexOf(c[d].start)&&(!c[d].end||a.lastIndexOf(c[d].end)==a.length-c[d].end.length))return c[d]}function d(a,c,d){var e,f,g;for(e=b(),g=0;g<e.length;g++)if(f=e[g],f.end&&a.substr(c-f.end.length-d,f.end.length)==f.end)return f}function e(b){function e(){i=i.splitText(k),i.splitText(j-k-o),i.deleteData(0,n.start.length),i.deleteData(i.data.length-n.end.length,n.end.length)}var f,g,h,i,j,k,l,m,n,o,p;return f=a.selection,g=a.dom,f.isCollapsed()&&(h=f.getRng(!0),i=h.startContainer,j=h.startOffset,l=i.data,o=b?1:0,3==i.nodeType&&(n=d(l,j,o),n&&(k=Math.max(0,j-o),k=l.lastIndexOf(n.start,k-n.end.length-1),-1!==k&&(m=g.createRng(),m.setStart(i,k),m.setEnd(i,j-o),n=c(m.toString()),n&&n.end&&!(i.data.length<=n.start.length+n.end.length)))))?(p=a.formatter.get(n.format),p&&p[0].inline?(e(),a.formatter.apply(n.format,{},i),i):void 0):void 0}function f(){var b,d,e,f,g,h,i,j,k,l,m;if(b=a.selection,d=a.dom,b.isCollapsed()&&(i=d.getParent(b.getStart(),"p"))){for(k=new tinymce.dom.TreeWalker(i,i);g=k.next();)if(3==g.nodeType){f=g;break}if(f){if(j=c(f.data),!j)return;if(l=b.getRng(!0),e=l.startContainer,m=l.startOffset,f==e&&(m=Math.max(0,m-j.start.length)),tinymce.trim(f.data).length==j.start.length)return;j.format&&(h=a.formatter.get(j.format),h&&h[0].block&&(f.deleteData(0,j.start.length),a.formatter.apply(j.format,{},f),l.setStart(e,m),l.collapse(!0),b.setRng(l))),j.cmd&&a.undoManager.transact(function(){f.deleteData(0,j.start.length),a.execCommand(j.cmd)})}}}function g(){var b,c;c=e(),c&&(b=a.dom.createRng(),b.setStart(c,c.data.length),b.setEnd(c,c.data.length),a.selection.setRng(b)),f()}function h(){var b,c,d,f,g;b=e(!0),b&&(g=a.dom,c=b.data.slice(-1),/[\u00a0 ]/.test(c)&&(b.deleteData(b.data.length-1,1),d=g.doc.createTextNode(c),b.nextSibling?g.insertAfter(d,b.nextSibling):b.parentNode.appendChild(d),f=g.createRng(),f.setStart(d,1),f.setEnd(d,1),a.selection.setRng(f)))}var i,j=!0;i=a.settings.textpattern_patterns||[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],a.on("keydown",function(a){13!=a.keyCode||tinymce.util.VK.modifierPressed(a)||g()},!0),a.on("keyup",function(a){32!=a.keyCode||tinymce.util.VK.modifierPressed(a)||h()}),this.getPatterns=b,this.setPatterns=function(a){i=a,j=!0}});
tinymce.PluginManager.add("visualblocks",function(a,b){function c(){var b=this;b.active(f),a.on("VisualBlocks",function(){b.active(a.dom.hasClass(a.getBody(),"mce-visualblocks"))})}var d,e,f;window.NodeList&&(a.addCommand("mceVisualBlocks",function(){var c,g=a.dom;d||(d=g.uniqueId(),c=g.create("link",{id:d,rel:"stylesheet",href:b+"/css/visualblocks.css"}),a.getDoc().getElementsByTagName("head")[0].appendChild(c)),a.on("PreviewFormats AfterPreviewFormats",function(b){f&&g.toggleClass(a.getBody(),"mce-visualblocks","afterpreviewformats"==b.type)}),g.toggleClass(a.getBody(),"mce-visualblocks"),f=a.dom.hasClass(a.getBody(),"mce-visualblocks"),e&&e.active(g.hasClass(a.getBody(),"mce-visualblocks")),a.fire("VisualBlocks")}),a.addButton("visualblocks",{title:"Show blocks",cmd:"mceVisualBlocks",onPostRender:c}),a.addMenuItem("visualblocks",{text:"Show blocks",cmd:"mceVisualBlocks",onPostRender:c,selectable:!0,context:"view",prependToContext:!0}),a.on("init",function(){a.settings.visualblocks_default_state&&a.execCommand("mceVisualBlocks",!1,null,{skip_focus:!0})}),a.on("remove",function(){a.dom.removeClass(a.getBody(),"mce-visualblocks")}))});
tinymce.PluginManager.add("visualchars",function(a){function b(b){function c(a){return'<span data-mce-bogus="1" class="mce-'+n[a]+'">'+a+"</span>"}function f(){var a,b="";for(a in n)b+=a;return new RegExp("["+b+"]","g")}function g(){var a,b="";for(a in n)b&&(b+=","),b+="span.mce-"+n[a];return b}var h,i,j,k,l,m,n,o,p=a.getBody(),q=a.selection;if(n={"\xa0":"nbsp","\xad":"shy"},d=!d,e.state=d,a.fire("VisualChars",{state:d}),o=f(),b&&(m=q.getBookmark()),d)for(i=[],tinymce.walk(p,function(a){3==a.nodeType&&a.nodeValue&&o.test(a.nodeValue)&&i.push(a)},"childNodes"),j=0;j<i.length;j++){for(k=i[j].nodeValue,k=k.replace(o,c),l=a.dom.create("div",null,k);h=l.lastChild;)a.dom.insertAfter(h,i[j]);a.dom.remove(i[j])}else for(i=a.dom.select(g(),p),j=i.length-1;j>=0;j--)a.dom.remove(i[j],1);q.moveToBookmark(m)}function c(){var b=this;a.on("VisualChars",function(a){b.active(a.state)})}var d,e=this;a.addCommand("mceVisualChars",b),a.addButton("visualchars",{title:"Show invisible characters",cmd:"mceVisualChars",onPostRender:c}),a.addMenuItem("visualchars",{text:"Show invisible characters",cmd:"mceVisualChars",onPostRender:c,selectable:!0,context:"view",prependToContext:!0}),a.on("beforegetcontent",function(a){d&&"raw"!=a.format&&!a.draft&&(d=!0,b(!1))})});
tinymce.PluginManager.add("wordcount",function(a){function b(){a.theme.panel.find("#wordcount").text(["Words: {0}",e.getCount()])}var c,d,e=this;c=a.getParam("wordcount_countregex",/[\w\u2019\x27\-\u00C0-\u1FFF]+/g),d=a.getParam("wordcount_cleanregex",/[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g),a.on("init",function(){var c=a.theme.panel&&a.theme.panel.find("#statusbar")[0];c&&tinymce.util.Delay.setEditorTimeout(a,function(){c.insert({type:"label",name:"wordcount",text:["Words: {0}",e.getCount()],classes:"wordcount",disabled:a.settings.readonly},0),a.on("setcontent beforeaddundo",b),a.on("keyup",function(a){32==a.keyCode&&b()})},0)}),e.getCount=function(){var b=a.getContent({format:"raw"}),e=0;if(b){b=b.replace(/\.\.\./g," "),b=b.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," "),b=b.replace(/(\w+)(&#?[a-z0-9]+;)+(\w+)/i,"$1$3").replace(/&.+?;/g," "),b=b.replace(d,"");var f=b.match(c);f&&(e=f.length)}return e}});
//# sourceMappingURL=all.js.map
