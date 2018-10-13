var WiredElements=function(e){"use strict";function t(e,t){const{element:{content:d},parts:n}=e,i=document.createTreeWalker(d,G,null,!1);let a=K(n),s=n[a],o=-1,r=0;const l=[];for(let d=null;i.nextNode();){o++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&r++;void 0!==s&&s.index===o;)s.index=null===d?s.index-r:-1,a=K(n,a),s=n[a]}l.forEach(e=>e.parentNode.removeChild(e))}function n(e,t,n=null){const{element:{content:i},parts:d}=e;if(null===n||void 0===n)return void i.appendChild(t);const a=document.createTreeWalker(i,G,null,!1);let s=K(d),o=0,r=-1;for(;a.nextNode();){r++;const e=a.currentNode;for(e===n&&(o=J(t),n.parentNode.insertBefore(t,n));-1!==s&&d[s].index===r;){if(0<o){for(;-1!==s;)d[s].index+=o,s=K(d,s);return}s=K(d,s)}}}function d(e){let t=he.get(e.type);void 0===t&&(t=new Map,he.set(e.type,t));let n=t.get(e.strings);return void 0===n&&(n=new q(e,e.getTemplateElement()),t.set(e.strings,n)),n}function i(e,t,n=d){let i=ue.get(t);void 0===i&&($(t,t.firstChild),ue.set(t,i=new se(n)),i.appendInto(t)),i.setValue(e),i.commit()}function a(e){be.forEach(n=>{const d=he.get(me(n,e));void 0!==d&&d.forEach(e=>{const{element:{content:n}}=e,d=new Set;Array.from(n.querySelectorAll("style")).forEach(e=>{d.add(e)}),t(e,d)})})}function s(e,t,n){const d=ue.has(t);if(i(e,t,fe(n)),t instanceof ShadowRoot&&_e&&e instanceof ne){if(!ve.has(n)){const e=ue.get(t),d=e.value;ye(t,d.template,n)}d||window.ShadyCSS.styleElement(t.host)}}function o(e){return-1<ut.indexOf(e)}function r(e){return o(e)||"touchend"===e,void 0}function l(e){return bt[e.localName]||!1}function c(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let d=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<d.length;e++)t.push(d[e])}}return t}function h(e){let t=_t?["click"]:ut;for(let n,d=0;d<t.length;d++)n=t[d],e?(ft.length=0,document.addEventListener(n,yt,!0)):document.removeEventListener(n,yt,!0)}function u(e){let t=e.type;if(!o(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!gt&&(t=pt[e.which]||0),!!(1&t)}else{let t=void 0===e.button?0:e.button;return 0===t}}function p(e){if("click"===e.type){if(0===e.detail)return!0;let n=b(e);if(!n.nodeType||n.nodeType!==Node.ELEMENT_NODE)return!0;let t=n.getBoundingClientRect(),d=e.pageX,i=e.pageY;return!(d>=t.left&&d<=t.right&&i>=t.top&&i<=t.bottom)}return!1}function g(e){let t="auto",d=e.composedPath&&e.composedPath();if(d)for(let e,n=0;n<d.length;n++)if(e=d[n],e[lt]){t=e[lt];break}return t}function m(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function _(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}function f(e,t){let n=document.elementFromPoint(e,t),d=n;for(;d&&d.shadowRoot&&!window.ShadyDOM;){let i=d;if(d=d.shadowRoot.elementFromPoint(e,t),i===d)break;d&&(n=d)}return n}function b(e){if(e.composedPath){const t=e.composedPath();return 0<t.length?t[0]:e.target}return e.target}function v(e){let t,n=e.type,d=e.currentTarget,i=d[ot];if(i){let d=i[n];if(d){if(!e[rt]&&(e[rt]={},"touch"===n.slice(0,5))){e=e;let d=e.changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(kt.touch.id=d.identifier),kt.touch.id!==d.identifier)return;st||"touchstart"!==n&&"touchmove"!==n||y(e)}if(t=e[rt],!t.skip){for(let n,a=0;a<wt.length;a++)n=wt[a],d[n.name]&&!t[n.name]&&n.flow&&-1<n.flow.start.indexOf(e.type)&&n.reset&&n.reset();for(let a,s=0;s<wt.length;s++)a=wt[s],d[a.name]&&!t[a.name]&&(t[a.name]=!0,a[n](e))}}}}function y(e){let n=e.changedTouches[0],t=e.type;if("touchstart"===t)kt.touch.x=n.clientX,kt.touch.y=n.clientY,kt.touch.scrollDecided=!1;else if("touchmove"===t){if(kt.touch.scrollDecided)return;kt.touch.scrollDecided=!0;let t=g(e),d=!1,i=B(kt.touch.x-n.clientX),a=B(kt.touch.y-n.clientY);if(!e.cancelable);else"none"===t?d=!0:"pan-x"===t?d=a>i:"pan-y"===t&&(d=i>a);d?e.preventDefault():A("track")}}function k(e,t,n){return!!xt[t]&&(x(e,t,n),!0)}function x(e,t,n){let d=xt[t],a=d.deps,s=d.name,l=e[ot];l||(e[ot]=l={});for(let d,c,h=0;h<a.length;h++)(d=a[h],!(_t&&o(d)&&"click"!==d))&&(c=l[d],c||(l[d]=c={_count:0}),0===c._count&&e.addEventListener(d,v,r(d)),c[s]=(c[s]||0)+1,c._count=(c._count||0)+1);e.addEventListener(t,n),d.touchAction&&E(e,d.touchAction)}function w(e){wt.push(e);for(let t=0;t<e.emits.length;t++)xt[e.emits[t]]=e}function C(e){for(let t,n=0;n<wt.length;n++){t=wt[n];for(let d,n=0;n<t.emits.length;n++)if(d=t.emits[n],d===e)return t}return null}function E(e,t){st&&et.run(()=>{e.style.touchAction=t}),e[lt]=t}function N(e,t,n){let d=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(d.detail=n,e.dispatchEvent(d),d.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function A(e){let t=C(e);t.info&&(t.info.prevent=!0)}function S(e,t,n,d){t&&N(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:d,prevent:function(t){return A(t)}})}function L(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let d=B(e.x-t),i=B(e.y-n);return d>=ht||i>=ht}function T(e,t,n){if(!t)return;let d,i=e.moves[e.moves.length-2],a=e.moves[e.moves.length-1],s=a.x-e.x,o=a.y-e.y,r=0;i&&(d=a.x-i.x,r=a.y-i.y),N(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:s,dy:o,ddx:d,ddy:r,sourceEvent:n,hover:function(){return f(n.clientX,n.clientY)}})}function I(n,d,e){let i=B(d.clientX-n.x),a=B(d.clientY-n.y),s=b(e||d);!s||vt[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(a)||i<=ct&&a<=ct||p(d))&&!n.prevent&&N(s,"tap",{x:d.clientX,y:d.clientY,sourceEvent:d,preventer:e})}var O=Math.round,P=Math.min,R=Math.sqrt,D=Math.pow,B=Math.abs,H=Math.PI,V=Math.max;const M=`{{lit-${(Math.random()+"").slice(2)}}}`,W=`<!--${M}-->`,z=new RegExp(`${M}|${W}`),U=(()=>{const e=document.createElement("div");return e.setAttribute("style","{{bad value}}"),"{{bad value}}"!==e.getAttribute("style")})();class q{constructor(e,t){this.parts=[],this.element=t;let n=-1,d=0;const i=[],a=t=>{const s=t.content,o=document.createTreeWalker(s,133,null,!1);let r,l;for(;o.nextNode();){n++,r=l;const t=l=o.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const a=t.attributes;let s=0;for(let e=0;e<a.length;e++)0<=a[e].value.indexOf(M)&&s++;for(;0<s--;){const i=e.strings[d],a=F.exec(i)[2],s=U&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),o=t.getAttribute(s),r=o.split(z);this.parts.push({type:"attribute",index:n,name:a,strings:r}),t.removeAttribute(s),d+=r.length-1}}"TEMPLATE"===t.tagName&&a(t)}else if(3===t.nodeType){const e=t.nodeValue;if(0>e.indexOf(M))continue;const a=t.parentNode,s=e.split(z),o=s.length-1;d+=o;for(let e=0;e<o;e++)a.insertBefore(""===s[e]?Y():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});a.insertBefore(""===s[o]?Y():document.createTextNode(s[o]),t),i.push(t)}else if(8===t.nodeType)if(t.nodeValue===M){const e=t.parentNode,a=t.previousSibling;null===a||a!==r||a.nodeType!==Node.TEXT_NODE?e.insertBefore(Y(),t):n--,this.parts.push({type:"node",index:n++}),i.push(t),null===t.nextSibling?e.insertBefore(Y(),t):n--,l=r,d++}else for(let e=-1;-1!==(e=t.nodeValue.indexOf(M,e+1));)this.parts.push({type:"node",index:-1})}};a(t);for(const d of i)d.parentNode.removeChild(d)}}const X=e=>-1!==e.index,Y=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,G=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT,J=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;for(const n=document.createTreeWalker(e,G,null,!1);n.nextNode();)t++;return t},K=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(X(t))return n}return-1},j=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,$=(e,t,n=null)=>{for(let d=t;d!==n;){const t=d.nextSibling;e.removeChild(d),d=t}},Q=new WeakMap,Z=e=>"function"==typeof e&&Q.has(e),ee={};class te{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this._getTemplate=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const e=j?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,d=0;const i=e=>{const a=document.createTreeWalker(e,133,null,!1);for(let s=a.nextNode();n<t.length&&null!==s;){const e=t[n];if(!X(e))this._parts.push(void 0),n++;else if(d===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this._getTemplate);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings));n++}else d++,"TEMPLATE"===s.nodeName&&i(s.content),s=a.nextNode()}};return i(e),j&&(document.adoptNode(e),customElements.upgrade(e)),e}}class ne{constructor(e,t,n,d){this.strings=e,this.values=t,this.type=n,this.processor=d}getHTML(){const e=this.strings.length-1;let t="",n=!0;for(let d=0;d<e;d++){const e=this.strings[d];t+=e;const i=e.lastIndexOf(">");n=(-1<i||n)&&-1===e.indexOf("<",i+1),!n&&U&&(t=t.replace(F,(e,t,n,d)=>"style"===n?`${t}style$${d}`:e)),t+=n?W:M}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const de=e=>null===e||"object"!=typeof e&&"function"!=typeof e;class ie{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let d=0;d<n.length-1;d++)this.parts[d]=this._createPart()}_createPart(){return new ae(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let d=0;d<t;d++){n+=e[d];const t=this.parts[d];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const d of e)n+="string"==typeof d?d:d+"";else n+="string"==typeof e?e:e+""}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ae{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ee||de(e)&&e===this.value||(this.value=e,!Z(e)&&(this.committer.dirty=!0))}commit(){for(;Z(this.value);){const e=this.value;this.value=ee,e(this)}this.value===ee||this.committer.commit()}}class se{constructor(e){this.value=void 0,this._pendingValue=void 0,this.templateFactory=e}appendInto(e){this.startNode=e.appendChild(Y()),this.endNode=e.appendChild(Y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Y()),e._insert(this.endNode=Y())}insertAfterPart(e){e._insert(this.startNode=Y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Z(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ee,e(this)}const e=this._pendingValue;e===ee||(de(e)?e!==this.value&&this._commitText(e):e instanceof ne?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):void 0===e.then?this._commitText(e):this._commitPromise(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value===e||(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:e+"")),this.value=e}_commitTemplateResult(e){const t=this.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new te(t,e.processor,this.templateFactory),d=n._clone();n.update(e.values),this._commitNode(d),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,d=0;for(const i of e)n=t[d],void 0===n&&(n=new se(this.templateFactory),t.push(n),0==d?n.appendIntoPart(this):n.insertAfterPart(t[d-1])),n.setValue(i),n.commit(),d++;d<t.length&&(t.length=d,this.clear(n&&n.endNode))}_commitPromise(e){this.value=e,e.then(t=>{this.value===e&&(this.setValue(t),this.commit())})}clear(e=this.startNode){$(this.startNode.parentNode,e.nextSibling,this.endNode)}}class oe{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Z(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ee,e(this)}if(this._pendingValue!==ee){const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=ee}}}class re extends ie{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new le(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class le extends ae{}class ce{constructor(e,t){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t}setValue(e){this._pendingValue=e}commit(){for(;Z(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ee,e(this)}this._pendingValue===ee||(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=ee)}handleEvent(e){"function"==typeof this.value?this.value.call(this.element,e):"function"==typeof this.value.handleEvent&&this.value.handleEvent(e)}}const he=new Map,ue=new WeakMap;const pe=new class{handleAttributeExpressions(e,t,n){const d=t[0];if("."===d){const d=new re(e,t.slice(1),n);return d.parts}if("@"===d)return[new ce(e,t.slice(1))];if("?"===d)return[new oe(e,t.slice(1),n)];const i=new ie(e,t,n);return i.parts}handleTextExpression(e){return new se(e)}},ge=(e,...t)=>new ne(e,t,"html",pe),me=(e,t)=>`${e}--${t}`;let _e=!0;"undefined"==typeof window.ShadyCSS?_e=!1:"undefined"==typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),_e=!1);const fe=e=>t=>{const n=me(t.type,e);let d=he.get(n);void 0===d&&(d=new Map,he.set(n,d));let i=d.get(t.strings);if(void 0===i){const n=t.getTemplateElement();_e&&window.ShadyCSS.prepareTemplateDom(n,e),i=new q(t,n),d.set(t.strings,i)}return i},be=["html","svg"],ve=new Set,ye=(e,d,i)=>{ve.add(i);const s=e.querySelectorAll("style");if(0!==s.length){const o=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if(a(i),n(d,o,d.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(d.element,i),window.ShadyCSS.nativeShadow){const t=d.element.content.querySelector("style");e.insertBefore(t.cloneNode(!0),e.firstChild)}else{d.element.content.insertBefore(o,d.element.content.firstChild);const e=new Set;e.add(o),t(d,e)}}},ke=e=>null!==e,xe=e=>e?"":null,we=(e,t)=>t!==e&&(t===t||e===e),Ce={attribute:!0,type:String,reflect:!1,hasChanged:we},Ee=new Promise(e=>e(!0)),Ne=1,Ae=4,Se=8;class Le extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Ee,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const[t,n]of this._classProperties){const d=this._attributeNameForProperty(t,n);void 0!==d&&(this._attributeToPropertyMap.set(d,t),e.push(d))}return e}static createProperty(e,t=Ce){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(d){const i=this[e];this[n]=d,this._requestPropertyUpdate(e,i,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),...("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=we){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const d=n===Boolean?ke:"function"==typeof n?n:n.fromAttribute;return d?d(e):e}static _propertyValueToAttribute(e,t){if(void 0!==t&&void 0!==t.reflect){const n=t.type===Boolean?xe:t.type&&t.type.toAttribute||String;return n(e)}}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[e]of this.constructor._classProperties)if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}_applyInstanceProperties(){for(const[e,t]of this._instanceProperties)this[e]=t;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Ne?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Ce){const d=this.constructor,i=d._propertyValueToAttribute(t,n);if(void 0!==i){const t=d._attributeNameForProperty(e,n);void 0!==t&&(this._updateState|=Se,null===i?this.removeAttribute(t):this.setAttribute(t,i),this._updateState&=~Se)}}_attributeToProperty(e,t){if(!(this._updateState&Se)){const n=this.constructor,d=n._attributeToPropertyMap.get(e);if(void 0!==d){const e=n._classProperties.get(d);this[d]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||Ce;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){this._updateState|=Ae;let e;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Ae}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Ne||(this._updateState|=Ne,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState&=~Ae}get updateComplete(){return this._updatePromise}shouldUpdate(){return!0}update(){if(void 0!==this._reflectingProperties&&0<this._reflectingProperties.size){for(const[e,t]of this._reflectingProperties)this._propertyToAttribute(e,this[e],t);this._reflectingProperties=void 0}}updated(){}firstUpdated(){}}Le._attributeToPropertyMap=new Map,Le._finalized=!0,Le._classProperties=new Map,Le.properties={};class Te extends Le{update(e){if(super.update(e),"function"==typeof this.render)this.constructor.render(this.render(),this.renderRoot,this.localName);else throw new Error("render() not implemented")}}Te.render=s;const Ie=2,Oe=.85;class Pe{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(e,t){this.p+="M "+e+" "+t+" "}bcurveTo(e,t,n,d,i,a){this.p+="C "+e+" "+t+", "+n+" "+d+", "+i+" "+a+" "}}const Re=new class{_svgNode(e,t){const d=document.createElementNS("http://www.w3.org/2000/svg",e);if(t)for(const e in t)t.hasOwnProperty(e)&&d.setAttributeNS(null,e,t[e]);return d}line(e,t,n,d,i){const a=this._line(t,n,d,i),s=this._svgNode("path",{d:a.value});return e.appendChild(s),s}rectangle(e,t,n,d,i){t+=2,n+=2,d-=4,i-=4;let a=this._line(t,n,t+d,n);a=this._line(t+d,n,t+d,n+i,a),a=this._line(t+d,n+i,t,n+i,a),a=this._line(t,n+i,t,n,a);const s=this._svgNode("path",{d:a.value});return e.appendChild(s),s}polygon(e,t){let n=null;const d=t.length;if(2<d)for(let e,a=0;2>a;a++){e=!0;for(let a=1;a<d;a++)n=this._continuousLine(t[a-1][0],t[a-1][1],t[a][0],t[a][1],e,0<a,n),e=!1;n=this._continuousLine(t[d-1][0],t[d-1][1],t[0][0],t[0][1],e,0<a,n)}else n=2==d?this._line(t[0][0],t[0][1],t[1][0],t[1][1]):new Pe;const i=this._svgNode("path",{d:n.value});return e.appendChild(i),i}ellipse(e,t,n,d,i){d=V(10<d?d-4:d-1,1),i=V(10<i?i-4:i-1,1);const a=2*H/9;let s=B(d/2),o=B(i/2);s+=this._getOffset(.05*-s,.05*s),o+=this._getOffset(.05*-o,.05*o);let r=this._ellipse(a,t,n,s,o,1,a*this._getOffset(.1,this._getOffset(.4,1)));r=this._ellipse(a,t,n,s,o,1.5,0,r);const l=this._svgNode("path",{d:r.value});return e.appendChild(l),l}_ellipse(e,t,n,d,i,a,s,o){var r=Math.sin,l=Math.cos;const c=this._getOffset(-.5,.5)-H/2,h=[];h.push([this._getOffset(-a,a)+t+.9*d*l(c-e),this._getOffset(-a,a)+n+.9*i*r(c-e)]);for(let u=c;u<2*H+c-.01;u+=e)h.push([this._getOffset(-a,a)+t+d*l(u),this._getOffset(-a,a)+n+i*r(u)]);return h.push([this._getOffset(-a,a)+t+d*l(c+2*H+.5*s),this._getOffset(-a,a)+n+i*r(c+2*H+.5*s)]),h.push([this._getOffset(-a,a)+t+.98*d*l(c+s),this._getOffset(-a,a)+n+.98*i*r(c+s)]),h.push([this._getOffset(-a,a)+t+.9*d*l(c+.5*s),this._getOffset(-a,a)+n+.9*i*r(c+.5*s)]),this._curve(h,o)}_getOffset(e,t){return 1*(Math.random()*(t-e)+e)}_line(e,t,n,d,i){const a=D(e-n,2)+D(t-d,2);let s=Ie;100*(s*s)>a&&(s=R(a)/10);const o=s/2,r=.2+.2*Math.random();let l=Oe*Ie*(d-t)/200,c=Oe*Ie*(e-n)/200;l=this._getOffset(-l,l),c=this._getOffset(-c,c);let h=i||new Pe;return h.moveTo(e+this._getOffset(-s,s),t+this._getOffset(-s,s)),h.bcurveTo(l+e+(n-e)*r+this._getOffset(-s,s),c+t+(d-t)*r+this._getOffset(-s,s),l+e+2*(n-e)*r+this._getOffset(-s,s),c+t+2*(d-t)*r+this._getOffset(-s,s),n+this._getOffset(-s,s),d+this._getOffset(-s,s)),h.moveTo(e+this._getOffset(-o,o),t+this._getOffset(-o,o)),h.bcurveTo(l+e+(n-e)*r+this._getOffset(-o,o),c+t+(d-t)*r+this._getOffset(-o,o),l+e+2*(n-e)*r+this._getOffset(-o,o),c+t+2*(d-t)*r+this._getOffset(-o,o),n+this._getOffset(-o,o),d+this._getOffset(-o,o)),h}_continuousLine(e,t,n,d,i,a,s){s=s||new Pe;const o=D(e-n,2)+D(t-d,2);let r=Ie;100*(r*r)>o&&(r=R(o)/10);const l=r/2,c=.2+.2*Math.random();let h=Oe*Ie*(d-t)/200,u=Oe*Ie*n/200;return h=this._getOffset(-h,h),u=this._getOffset(-u,u),i&&s.moveTo(e+this._getOffset(-r,r),t+this._getOffset(-r,r)),a?s.bcurveTo(h+e+(n-e)*c+this._getOffset(-l,l),u+t+(d-t)*c+this._getOffset(-l,l),h+e+2*(n-e)*c+this._getOffset(-l,l),u+t+2*(d-t)*c+this._getOffset(-l,l),n+this._getOffset(-l,l),d+this._getOffset(-l,l)):s.bcurveTo(h+e+(n-e)*c+this._getOffset(-r,r),u+t+(d-t)*c+this._getOffset(-r,r),h+e+2*(n-e)*c+this._getOffset(-r,r),u+t+2*(d-t)*c+this._getOffset(-r,r),n+this._getOffset(-r,r),d+this._getOffset(-r,r)),s}_curve(e,t){const n=e.length;let d=t||new Pe;if(3<n){const t=[],a=1-0;d.moveTo(e[1][0],e[1][1]);for(let s=1;s+2<n;s++){const n=e[s];t[0]=[n[0],n[1]],t[1]=[n[0]+(a*e[s+1][0]-a*e[s-1][0])/6,n[1]+(a*e[s+1][1]-a*e[s-1][1])/6],t[2]=[e[s+1][0]+(a*e[s][0]-a*e[s+2][0])/6,e[s+1][1]+(a*e[s][1]-a*e[s+2][1])/6],t[3]=[e[s+1][0],e[s+1][1]],d.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[3][0],t[3][1])}}else 3===n?(d.moveTo(e[0][0],e[0][1]),d.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1])):2==n&&(d=this._line(e[0][0],e[0][1],e[1][0],e[1][1],d));return d}};class De extends Te{static get properties(){return{elevation:{type:Number},disabled:{type:Boolean}}}constructor(){super(),this.elevation=1,this.disabled=!1}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        cursor: pointer;
        padding: 8px 10px;
        position: relative;
        text-align: center;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        display: inline-flex;
        outline: none;
      }

      :host(.pending) {
        opacity: 0;
      }

      :host(:active) path {
        transform: scale(0.97) translate(1.5%, 1.5%);
      }

      :host(.disabled) {
        opacity: 0.6 !important;
        background: rgba(0, 0, 0, 0.07);
        cursor: default;
        pointer-events: none;
      }

      :host(:focus) path {
        stroke-width: 1.5;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }

      svg {
        display: block;
      }

      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
        transition: transform 0.05s ease;
      }
    </style>
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.updated()),this.addEventListener("keydown",e=>{(13===e.keyCode||32===e.keyCode)&&(e.preventDefault(),this.click())}),this.setAttribute("role","button"),this.setAttribute("aria-label",this.innerHTML)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect(),n=P(V(1,this.elevation),5),d=t.width+2*(n-1),a=t.height+2*(n-1);e.setAttribute("width",d),e.setAttribute("height",a),Re.rectangle(e,0,0,t.width,t.height);for(var s=1;s<n;s++)Re.line(e,2*s,t.height+2*s,t.width+2*s,t.height+2*s).style.opacity=(75-10*s)/100,Re.line(e,t.width+2*s,t.height+2*s,t.width+2*s,2*s).style.opacity=(75-10*s)/100,Re.line(e,2*s,t.height+2*s,t.width+2*s,t.height+2*s).style.opacity=(75-10*s)/100,Re.line(e,t.width+2*s,t.height+2*s,t.width+2*s,2*s).style.opacity=(75-10*s)/100;this.classList.remove("pending")}}customElements.define("wired-button",De);class Be extends Te{static get properties(){return{elevation:{type:Number}}}constructor(){super(),this.elevation=1}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return ge`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    </style>
    <div>
      <slot @slotchange="${()=>this.requestUpdate()}"></slot>
    </div>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}connectedCallback(){super.connectedCallback(),this.resizeHandler||(this.resizeHandler=this._debounce(this.updated.bind(this),200,!1,this),window.addEventListener("resize",this.resizeHandler)),setTimeout(()=>this.updated())}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),delete this.resizeHandler)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);var t=this.getBoundingClientRect(),n=P(V(1,this.elevation),5),d=t.width+2*(n-1),a=t.height+2*(n-1);e.setAttribute("width",d),e.setAttribute("height",a),Re.rectangle(e,0,0,t.width,t.height);for(var s=1;s<n;s++)Re.line(e,2*s,t.height+2*s,t.width+2*s,t.height+2*s).style.opacity=(85-10*s)/100,Re.line(e,t.width+2*s,t.height+2*s,t.width+2*s,2*s).style.opacity=(85-10*s)/100,Re.line(e,2*s,t.height+2*s,t.width+2*s,t.height+2*s).style.opacity=(85-10*s)/100,Re.line(e,t.width+2*s,t.height+2*s,t.width+2*s,2*s).style.opacity=(85-10*s)/100;this.classList.remove("pending")}_debounce(e,t,n,d){let i=0;return()=>{const a=arguments,s=n&&!i;clearTimeout(i),i=window.setTimeout(()=>{i=0,n||e.apply(d,a)},t),s&&e.apply(d,a)}}}customElements.define("wired-card",Be);class He extends Te{static get properties(){return{checked:{type:Boolean},text:{type:String},disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this.checked=!1}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: block;
        font-family: inherit;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: 0.7;
      }
    </style>
    <div id="container" @click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${this.text}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this._refreshTabIndex()}_refreshTabIndex(){this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_setAria(){this.setAttribute("role","checkbox"),this.setAttribute("aria-checked",this.checked),this.setAttribute("aria-label",this.text)}_toggleCheck(){this.checked=!this.checked&&1;const e=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(e)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t={width:24,height:24};e.setAttribute("width",t.width),e.setAttribute("height",t.height),Re.rectangle(e,0,0,t.width,t.height);const n=[];n.push(Re.line(e,.3*t.width,.4*t.height,.5*t.width,.7*t.height)),n.push(Re.line(e,.5*t.width,.7*t.height,t.width+5,-5)),n.forEach(e=>{e.style.strokeWidth=2.5}),this.checked?n.forEach(e=>{e.style.display=""}):n.forEach(e=>{e.style.display="none"}),this.classList.remove("pending"),this._setAria(),this._attachEvents()}_attachEvents(){this._keyboardAttached||(this.addEventListener("keydown",e=>{(13===e.keyCode||32===e.keyCode)&&(e.preventDefault(),this._toggleCheck())}),this._keyboardAttached=!0)}}customElements.define("wired-checkbox",He);class Ve extends Te{static get properties(){return{text:{type:String},value:{type:String}}}render(){return ge`
    <style>
      :host {
        display: block;
        padding: 8px;
        font-family: inherit;
      }
    </style>
    <span>${this.text}</span>
    `}connectedCallback(){super.connectedCallback(),this._itemClickHandler=e=>{this._onClick(e)},this.addEventListener("click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("click",this._itemClickHandler),this._itemClickHandler=null)}_onClick(){const e=new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value}});this.dispatchEvent(e)}}customElements.define("wired-item",Ve);class Me extends Te{static get properties(){return{value:{type:Object},selected:{type:String},disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this._cardShowing=!1,this._itemNodes=[]}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
    
      :host(.pending) {
        opacity: 0;
      }

      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
      }

      ::slotted(.selected-item) {
        background: var(--wired-combo-item-selected-bg, rgba(0, 0, 200, 0.1));
      }
    
      ::slotted(wired-item) {
        cursor: pointer;
        white-space: nowrap;
      }
    
      ::slotted(wired-item:hover) {
        background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
      }
    </style>
    <div id="container" @click="${t=>this._onCombo(t)}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
    </div>
    <wired-card id="card" role="listbox" @item-click="${t=>this._onItemClick(t)}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this._refreshTabIndex()}_refreshTabIndex(){this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_setAria(){if(this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-expanded",this._cardShowing),!this._itemNodes.length){this._itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++)"WIRED-ITEM"===e[t].tagName&&(e[t].setAttribute("role","option"),this._itemNodes.push(e[t]))}}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}firstUpdated(){this._refreshSelection()}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.shadowRoot.getElementById("container").getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height);const n=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=n.height+"px",Re.rectangle(e,0,0,n.width,n.height);const d=n.width-4;Re.rectangle(e,d,0,34,n.height);const i=V(0,B((n.height-24)/2)),a=Re.polygon(e,[[d+8,5+i],[d+26,5+i],[d+17,i+P(n.height,18)]]);a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.remove("pending"),this._setAria(),this._attachEvents()}_refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.classList.remove("selected-item"),this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot"),t=e.assignedNodes();if(t){let e=null;for(let n=0;n<t.length;n++)if("WIRED-ITEM"===t[n].tagName){const d=t[n].value||"";if(this.selected&&d===this.selected){e=t[n];break}}this.lastSelectedItem=e,this.lastSelectedItem&&(this.lastSelectedItem.classList.add("selected-item"),this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=e?{value:e.value,text:e.text}:null}}_onCombo(e){e.stopPropagation(),this._setCardShowing(!this._cardShowing)}_setCardShowing(e){this._cardShowing=e;const t=this.shadowRoot.getElementById("card");t.style.display=e?"":"none",e&&setTimeout(()=>{t.requestUpdate()},10),this.setAttribute("aria-expanded",this._cardShowing)}_onItemClick(e){e.stopPropagation(),this._setCardShowing(!1),this.selected=e.detail.value,this._refreshSelection(),this._fireSelected()}_fireSelected(){const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}_attachEvents(){this._keyboardAttached||(this.addEventListener("blur",()=>{this._cardShowing&&this._setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this._selectPrevious();break;case 39:case 40:e.preventDefault(),this._selectNext();break;case 27:e.preventDefault(),this._cardShowing&&this._setCardShowing(!1);break;case 13:e.preventDefault(),this._setCardShowing(!this._cardShowing);break;case 32:e.preventDefault(),this._cardShowing||this._setCardShowing(!0);}}),this._keyboardAttached=!0)}_selectPrevious(){const e=this._itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}0>t?t=0:0==t?t=e.length-1:t--,this.selected=e[t].value||"",this._refreshSelection(),this._fireSelected()}}_selectNext(){const e=this._itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}0>t?t=0:t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this._refreshSelection(),this._fireSelected()}}}customElements.define("wired-combo",Me);const We=ge`<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}
</style>`,ze=document.createElement("link");ze.rel="stylesheet",ze.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(ze);customElements.define("mwc-icon",class extends Te{renderStyle(){return We}render(){return ge`${this.renderStyle()}<slot></slot>`}});class Ue extends Te{static get properties(){return{disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        padding: 8px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box !important;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 50%;
        pointer-events: none;
      }
    
      :host(:active) path {
        transform: scale(0.96) translate(2%, 2%);
      }

      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: var(--wired-icon-bg-color, transparent);
        transition: transform 0.05s ease;
      }
    
      mwc-icon {
        position: relative;
        font-size: var(--wired-icon-size, 24px);
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <mwc-icon>
      <slot></slot>
    </mwc-icon>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this._refreshTabIndex()}_refreshTabIndex(){this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_setAria(){this.setAttribute("role","button"),this.setAttribute("aria-label",this.textContent)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect(),n=P(t.width,t.height);e.setAttribute("width",n),e.setAttribute("height",n),Re.ellipse(e,n/2,n/2,n,n),this.classList.remove("pending"),this._setAria(),this._attachEvents()}_attachEvents(){this._keyboardAttached||(this.addEventListener("keydown",e=>{(13===e.keyCode||32===e.keyCode)&&(e.preventDefault(),this.click())}),this._keyboardAttached=!0)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.updated())}}customElements.define("wired-icon-button",Ue);class qe extends Te{static get properties(){return{placeholder:{type:String},name:{type:String},disabled:{type:Boolean},type:{type:String},required:{type:Boolean},autocomplete:{type:String},autofocus:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},readonly:{type:Boolean},size:{type:Number},autocapitalize:{type:String},autocorrect:{type:String}}}constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.required=!1,this.autocomplete="",this.autofocus=!1,this.readonly=!1,this.autocorrect="",this.autocapitalize=""}createRenderRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    </style>
    <input id="txt" name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}" ?required="${this.required}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}" maxlength="${this.maxlength}" min="${this.min}"
      max="${this.max}" step="${this.step}" ?readonly="${this.readonly}" size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}"
      @change="${t=>this._onChange(t)}">
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}get input(){return this.shadowRoot.getElementById("txt")}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e)}else this._value=e}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_onChange(e){e.stopPropagation();const t=new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:e.cancelable,detail:{sourceEvent:e}});this.dispatchEvent(t)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}firstUpdated(){this.value=this.value||this.getAttribute("value")||""}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height),Re.rectangle(e,0,0,t.width,t.height),this.classList.remove("pending"),"undefined"!=typeof this._value&&(this.input.value=this._value,delete this._value)}}customElements.define("wired-input",qe);class Xe extends Te{static get properties(){return{value:{type:Object},selected:{type:String},horizontal:{type:Boolean}}}constructor(){super(),this.horizontal=!1,this._itemNodes=[]}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this.horizontal?this.classList.add("horizontal"):this.classList.remove("horizontal"),this.tabIndex=this.getAttribute("tabindex")||0,ge`
      <style>
        :host {
          display: inline-block;
          font-family: inherit;
          position: relative;
          padding: 5px;
          outline: none;
        }
      
        :host(.pending) {
          opacity: 0;
        }

        :host(:focus) path {
          stroke-width: 1.5;
        }
      
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
      
        svg {
          display: block;
        }
      
        path {
          stroke: currentColor;
          stroke-width: 0.7;
          fill: transparent;
        }
      
        ::slotted(.selected-item) {
          background: var(--wired-combo-item-selected-bg, rgba(0, 0, 200, 0.1));
        }
      
        ::slotted(wired-item) {
          cursor: pointer;
          white-space: nowrap;
          display: block;
        }
      
        :host(.horizontal) ::slotted(wired-item) {
          display: inline-block;
        }
      
        ::slotted(wired-item:hover) {
          background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
        }
      </style>
      <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>`}connectedCallback(){super.connectedCallback(),this._itemClickHandler=e=>{this._onItemClick(e)},this.addEventListener("item-click",this._itemClickHandler),setTimeout(()=>this.updated())}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("item-click",this._itemClickHandler),this._itemClickHandler=null)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}firstUpdated(){this._refreshSelection()}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height),Re.rectangle(e,0,0,t.width,t.height),this.classList.remove("pending"),this._setAria(),this._attachEvents()}_setAria(){if(this.setAttribute("role","listbox"),!this._itemNodes.length){this._itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++)"WIRED-ITEM"===e[t].tagName&&(e[t].setAttribute("role","option"),this._itemNodes.push(e[t]))}}_refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.classList.remove("selected-item"),this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let n=0;n<e.length;n++)if("WIRED-ITEM"===e[n].tagName){const d=e[n].value||"";if(this.selected&&d===this.selected){t=e[n];break}}this.lastSelectedItem=t,this.lastSelectedItem&&this.lastSelectedItem.setAttribute("aria-selected","true"),t?(this.lastSelectedItem.classList.add("selected-item"),this.value={value:t.value,text:t.text}):this.value=null}}_onItemClick(e){e.stopPropagation(),this.selected=e.detail.value,this._refreshSelection(),this._fireSelected()}_fireSelected(){const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}_attachEvents(){this._keyboardAttached||(this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this._selectPrevious();break;case 39:case 40:e.preventDefault(),this._selectNext();}}),this._keyboardAttached=!0)}_selectPrevious(){const e=this._itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}0>t?t=0:0==t?t=e.length-1:t--,this.selected=e[t].value||"",this._refreshSelection(),this._fireSelected()}}_selectNext(){const e=this._itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}0>t?t=0:t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this._refreshSelection(),this._fireSelected()}}}customElements.define("wired-listbox",Xe);class Ye extends Te{static get properties(){return{value:{type:Number},min:{type:Number},max:{type:Number},percentage:{type:Boolean}}}constructor(){super(),this.percentage=!1,this.max=100,this.min=0,this.value=0}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return ge`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 18px);
      }
    
      .progbox {
        fill: var(--wired-progress-color, rgba(0, 0, 200, 0.1));
        stroke-opacity: 0.6;
        stroke-width: 0.4;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this._getProgressLabel()}</div>
    </div>
    `}_getProgressLabel(){if(this.percentage){if(this.max==this.min)return"%";var e=Math.floor(100*((this.value-this.min)/(this.max-this.min)));return e+"%"}return""+this.value}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);var t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height),Re.rectangle(e,0,0,t.width,t.height);let n=0;if(this.max>this.min){n=(this.value-this.min)/(this.max-this.min);const d=t.width*V(0,P(n,100)),i=Re.polygon(e,[[0,0],[d,0],[d,t.height],[0,t.height]]);i.classList.add("progbox")}this.classList.remove("pending")}}customElements.define("wired-progress",Ye);class Fe extends Te{static get properties(){return{checked:{type:Boolean},name:{type:String},text:{type:String},iconsize:{type:Number},disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this.checked=!1,this.iconsize=24}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: inherit;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
      }

      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .filledPath {
        fill: var(--wired-radio-icon-color, currentColor);
      }
    </style>
    <div id="container" @click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${this.text}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this._refreshTabIndex()}_refreshTabIndex(){this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_setAria(){this.setAttribute("role","radio"),this.setAttribute("aria-checked",this.checked),this.setAttribute("aria-label",this.text)}_toggleCheck(){this.checked=!this.checked&&1;const e=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(e)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e),this._dot=null;const t={width:this.iconsize||24,height:this.iconsize||24};e.setAttribute("width",t.width),e.setAttribute("height",t.height),Re.ellipse(e,t.width/2,t.height/2,t.width,t.height);const n=V(.6*t.width,5),d=V(.6*t.height,5);this._dot=Re.ellipse(e,t.width/2,t.height/2,n,d),this._dot.classList.add("filledPath"),this._dot.style.display=this.checked?"":"none",this.classList.remove("pending"),this._setAria(),this._attachEvents()}_attachEvents(){this._keyboardAttached||(this.addEventListener("keydown",e=>{(13===e.keyCode||32===e.keyCode)&&(e.preventDefault(),this._toggleCheck())}),this._keyboardAttached=!0)}}customElements.define("wired-radio",Fe);class Ge extends Te{static get properties(){return{selected:{type:String}}}render(){return ge`
    <style>
      :host {
        display: inline-block;
      }
    
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    </style>
    <slot id="slot" @slotchange="${()=>this.slotChange()}"></slot>
    `}constructor(){super(),this._radioNodes=[],this._checkListener=this._handleChecked.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._checkListener)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.removeEventListener("checked",this._checkListener)}_handleChecked(e){const t=e.detail.checked,n=e.target.name;t?(this.selected=t&&n||"",this._fireSelected()):e.target.checked=!0}_fireSelected(){const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}slotChange(){this.requestUpdate()}updated(){const e=this.shadowRoot.getElementById("slot"),t=e.assignedNodes();if(this._radioNodes=[],t&&t.length)for(let e=0;e<t.length;e++)if("WIRED-RADIO"===t[e].tagName){this._radioNodes.push(t[e]);const n=t[e].name||"";t[e].checked=!!(this.selected&&n===this.selected)}this.setAttribute("role","radiogroup"),this.tabIndex=this.getAttribute("tabindex")||0,this._attachEvents()}_attachEvents(){this._keyboardAttached||(this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this._selectPrevious();break;case 39:case 40:e.preventDefault(),this._selectNext();}}),this._keyboardAttached=!0)}_selectPrevious(){const e=this._radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let t=0;t<e.length;t++){const d=e[t];if(d.name===this.selected){n=t;break}}0>n?t=e[0]:(n--,0>n&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this._fireSelected())}}_selectNext(){const e=this._radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let t=0;t<e.length;t++){const d=e[t];if(d.name===this.selected){n=t;break}}0>n?t=e[0]:(n++,n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this._fireSelected())}}}customElements.define("wired-radio-group",Ge),window.JSCompiler_renameProperty=function(e){return e};let Je=0,Ke=0,je=[],$e=0,Qe=document.createTextNode("");new window.MutationObserver(function(){const e=je.length;for(let t,n=0;n<e;n++)if(t=je[n],t)try{t()}catch(t){setTimeout(()=>{throw t})}je.splice(0,e),Ke+=e}).observe(Qe,{characterData:!0});const Ze={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},et={run(e){return Qe.textContent=$e++,je.push(e),Je++},cancel(e){const t=e-Ke;if(0<=t){if(!je[t])throw new Error("invalid async handle: "+e);je[t]=null}}},tt=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,n,d){return t instanceof e?t.cancel():t=new e,t.setConfig(n,d),t}},nt=!window.ShadyDOM,dt=!window.ShadyCSS||window.ShadyCSS.nativeCss,it=!window.customElements.polyfillWrapFlushCallback;let at=function(e){return e.substring(0,e.lastIndexOf("/")+1)}(document.baseURI||window.location.href),st="string"==typeof document.head.style.touchAction,ot="__polymerGestures",rt="__polymerGesturesHandled",lt="__polymerGesturesTouchAction",ct=25,ht=5,ut=["mousedown","mousemove","mouseup","click"],pt=[0,1,4,2],gt=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}(),mt=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){mt=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}})();let _t=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const ft=[],bt={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},vt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};let yt=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[rt]={skip:!0},"click"===e.type)){let t=!1,n=e.composedPath&&e.composedPath();if(n)for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)ft.push(n[e]);else if(l(n[e])){let d=c(n[e]);for(let e=0;e<d.length;e++)t=t||-1<ft.indexOf(d[e])}if(n[e]===kt.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}},kt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};document.addEventListener("touchend",function(t){kt.mouse.mouseIgnoreJob||h(!0);kt.mouse.target=t.composedPath()[0],kt.mouse.mouseIgnoreJob=tt.debounce(kt.mouse.mouseIgnoreJob,Ze.after(2500),function(){h(),kt.mouse.target=null,kt.mouse.mouseIgnoreJob=null})},!!mt&&{passive:!0});const xt={},wt=[];w({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){_(this.info)},mousedown:function(n){if(!u(n))return;let d=b(n),t=this;m(this.info,function(n){u(n)||(S("up",d,n),_(t.info))},function(n){u(n)&&S("up",d,n),_(t.info)}),S("down",d,n)},touchstart:function(t){S("down",b(t),t.changedTouches[0],t)},touchend:function(t){S("up",b(t),t.changedTouches[0],t)}}),w({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,_(this.info)},mousedown:function(n){if(!u(n))return;let d=b(n),t=this,i=function(n){let e=n.clientX,i=n.clientY;L(t.info,e,i)&&(t.info.state=t.info.started?"mouseup"===n.type?"end":"track":"start","start"===t.info.state&&A("tap"),t.info.addMove({x:e,y:i}),!u(n)&&(t.info.state="end",_(t.info)),d&&T(t.info,d,n),t.info.started=!0)};m(this.info,i,function(n){t.info.started&&i(n),_(t.info)}),this.info.x=n.clientX,this.info.y=n.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(n){let e=b(n),t=n.changedTouches[0],d=t.clientX,i=t.clientY;L(this.info,d,i)&&("start"===this.info.state&&A("tap"),this.info.addMove({x:d,y:i}),T(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(n){let e=b(n),t=n.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),T(this.info,e,t))}}),w({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){u(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){u(t)&&I(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){I(this.info,t.changedTouches[0],t)}});class Ct extends Te{static get properties(){return{_value:{type:Number},min:{type:Number},max:{type:Number},knobradius:{type:Number},disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this._value=0,this.min=0,this.max=100,this.knobradius=10,this.step=1}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        height: 40px;
        outline: none;
        box-sizing: border-box;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
    
      :host(.disabled) .knob {
        pointer-events: none !important;
      }
    
      :host(:focus) .knob {
        cursor: move;
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .knob {
        pointer-events: auto;
        fill: var(--wired-slider-knob-zero-color, gray);
        stroke: var(--wired-slider-knob-zero-color, gray);
        transition: transform 0.15s ease;
        cursor: pointer;
      }
    
      .hasValue {
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
    
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
    
      :host(.pending) {
        opacity: 0;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}get value(){return this._value}set value(e){this._setValue(e,!0)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this._refreshTabIndex()}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.firstUpdated(),100)}firstUpdated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height);let n=this.knobradius||10;this._barWidth=t.width-2*n,this._bar=Re.line(e,n,t.height/2,t.width-n,t.height/2),this._bar.classList.add("bar"),this._knobGroup=Re._svgNode("g"),e.appendChild(this._knobGroup),this._knob=Re.ellipse(this._knobGroup,n,t.height/2,2*n,2*n),this._knob.classList.add("knob"),this._onValueChange(),this.classList.remove("pending"),this._knobAttached=!1,this._setAria(),this._attachEvents()}_setAria(){this.setAttribute("role","slider"),this.setAttribute("aria-valuemax",this.max),this.setAttribute("aria-valuemin",this.min),this._setAriaValue(),this._refreshTabIndex()}_refreshTabIndex(){this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_setAriaValue(){this.setAttribute("aria-valuenow",this.value)}_setValue(e,t){if(this._value=e,this._setAriaValue(),this._onValueChange(),!t){const e=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._intermediateValue}});this.dispatchEvent(e)}}_incremenent(){const e=P(this.max,O(this.value+this.step));e!=this.value&&this._setValue(e)}_decrement(){const e=V(this.min,O(this.value-this.step));e!=this.value&&this._setValue(e)}_attachEvents(){this._knobAttached||(k(this._knob,"down",e=>{this.disabled||this._knobdown(e)}),k(this._knob,"up",e=>{this.disabled||this._resetKnob(e)}),k(this._knob,"track",e=>{this.disabled||this._onTrack(e)}),this._knobAttached=!0),this._keyboardAttached||(this.addEventListener("keydown",e=>{switch(e.keyCode){case 38:case 39:this._incremenent();break;case 37:case 40:this._decrement();break;case 36:this._setValue(this.min);break;case 35:this._setValue(this.max);}}),this._keyboardAttached=!0)}_onValueChange(){if(!this._knob)return;let e=0;this.max>this.min&&(e=P(1,V((this.value-this.min)/(this.max-this.min),0))),this._pct=e,e?this._knob.classList.add("hasValue"):this._knob.classList.remove("hasValue");let t=e*this._barWidth;this._knobGroup.style.transform="translateX("+O(t)+"px)"}_knobdown(e){this._knobExpand(!0),e.preventDefault(),this.focus()}_resetKnob(){this._knobExpand(!1)}_knobExpand(e){this._knob&&(e?this._knob.classList.add("expanded"):this._knob.classList.remove("expanded"))}_onTrack(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd();}}_trackStart(){this._intermediateValue=this.value,this._startx=this._pct*this._barWidth,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._barWidth-this._startx,this._dragging=!0}_trackX(e){this._dragging||this._trackStart(e);var t=e.detail.dx||0,n=V(P(this._startx+t,this._barWidth),0);this._knobGroup.style.transform="translateX("+O(n)+"px)";var d=n/this._barWidth;this._intermediateValue=this.min+d*(this.max-this.min)}_trackEnd(){this._dragging=!1,this._resetKnob(),this._setValue(this._intermediateValue),this._pct=(this.value-this.min)/(this.max-this.min)}}customElements.define("wired-slider",Ct);class Et extends Te{static get properties(){return{rows:{type:Number},maxrows:{type:Number},autocomplete:{type:String},autofocus:{type:Boolean},inputmode:{type:String},placeholder:{type:String},readonly:{type:Boolean},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this.rows=1,this.maxrows=0,this.placeholder="",this.autocomplete="",this.autofocus=!1,this.inputmode="",this.readonly=!1,this.required=!1}createRenderRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 400px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .fit {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    
      .overlay {
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
      }
    
      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        padding: 5px;
        box-sizing: border-box;
      }
    </style>
    <div id="mirror" class="mirror-text">&#160;</div>
    <div class="fit">
      <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}" placeholder="${this.placeholder}"
        ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}" rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
        @input="${()=>this._onInput()}"></textarea>
    </div>
    <div class="fit overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.value=this.value||this.getAttribute("value")||""}get textarea(){return this.shadowRoot.getElementById("textarea")}get mirror(){return this.shadowRoot.getElementById("mirror")}get value(){const e=this.textarea;return e&&e.value||""}set value(e){const t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.mirror.innerHTML=this._valueForMirror(),this.requestUpdate())}_constrain(e){var t;for(e=e||[""],t=0<this.maxRows&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);0<this.rows&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"}_valueForMirror(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_updateCached(){this.mirror.innerHTML=this._constrain(this.tokens)}_onInput(){this.value=this.textarea.value}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_needsLayout(){var e=this.getBoundingClientRect();e.height!=this._prevHeight&&this.requestUpdate()}updated(){const e=this.getBoundingClientRect(),t=this.shadowRoot.getElementById("svg");this._prevHeight!==e.height&&(this._clearNode(t),t.setAttribute("width",e.width),t.setAttribute("height",e.height),Re.rectangle(t,2,2,e.width-2,e.height-2),this._prevHeight=e.height),this.classList.remove("pending"),this._updateCached()}}customElements.define("wired-textarea",Et);class Nt extends Te{static get properties(){return{checked:{type:Boolean},disabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this.checked=!1}createRenderRoot(){const e=super.createRenderRoot();return this.classList.add("pending"),e}render(){return this._onDisableChange(),ge`
    <style>
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .unchecked {
        fill: var(--wired-toggle-off-color, gray);
      }
    
      .checked {
        fill: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
    </style>
    <div @click="${()=>this._toggleCheck()}">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_toggleCheck(){this.checked=!this.checked&&1;const e=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(e)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled"),this._refreshTabIndex()}_refreshTabIndex(){this.tabIndex=this.disabled?-1:this.getAttribute("tabindex")||0}_setAria(){this.setAttribute("role","switch"),this.setAttribute("aria-checked",this.checked)}updated(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t={width:2.5*(this.height||32),height:this.height||32};e.setAttribute("width",t.width),e.setAttribute("height",t.height),Re.rectangle(e,0,0,t.width,t.height),this.knob=Re.ellipse(e,t.height/2,t.height/2,t.height,t.height),this.knobOffset=t.width-t.height,this.knob.style.transition="all 0.3s ease",this.knob.style.transform=this.checked?"translateX("+this.knobOffset+"px)":"";const n=this.knob.classList;this.checked?(n.remove("unchecked"),n.add("checked")):(n.remove("checked"),n.add("unchecked")),this.classList.remove("pending"),this._setAria(),this._attachEvents()}_attachEvents(){this._keyboardAttached||(this.addEventListener("keydown",e=>{(13===e.keyCode||32===e.keyCode)&&(e.preventDefault(),this._toggleCheck())}),this._keyboardAttached=!0)}}customElements.define("wired-toggle",Nt);class At extends Te{static get properties(){return{for:{type:String},position:{type:String},text:{type:String},offset:{type:Number}}}constructor(){super(),this._dirty=!1,this._showing=!1,this._target=null,this.offset=14,this.position="bottom"}render(){return ge`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        font-family: inherit;
        font-size: 9pt;
        line-height: 1;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        stroke: var(--wired-tooltip-border-color, currentColor);
        fill: var(--wired-tooltip-background, rgba(255, 255, 255, 0.9));
      }
    
      #container {
        position: relative;
        padding: 8px;
      }
    </style>
    <div id="container" style="display: none;">
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
      <span style="position: relative;">${this.text}</span>
    </div>
    `}get target(){if(this._target)return this._target;var e,n=this.parentNode,d=(this.getRootNode?this.getRootNode():null)||this.getOwnerDocument();return e=this.for?d.querySelector("#"+this.for):n.nodeType==Node.DOCUMENT_FRAGMENT_NODE?d.host:n,e}_detachListeners(){this._showHandler&&this._hideHandler&&(this._target&&(this._target.removeEventListener("mouseenter",this._showHandler),this._target.removeEventListener("focus",this._showHandler),this._target.removeEventListener("mouseleave",this._hideHandler),this._target.removeEventListener("blur",this._hideHandler),this._target.removeEventListener("click",this._hideHandler)),this.removeEventListener("mouseenter",this._hideHandler))}_attachListeners(){this._showHandler=()=>{this.show()},this._hideHandler=()=>{this.hide()},this._target&&(this._target.addEventListener("mouseenter",this._showHandler),this._target.addEventListener("focus",this._showHandler),this._target.addEventListener("mouseleave",this._hideHandler),this._target.addEventListener("blur",this._hideHandler),this._target.addEventListener("click",this._hideHandler)),this.addEventListener("mouseenter",this._hideHandler)}_refreshTarget(){this._detachListeners(),this._target=null,this._target=this.target,this._attachListeners(),this._dirty=!0}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_layout(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);var t=this.getBoundingClientRect(),n=t.width,d=t.height;switch(this.position){case"left":case"right":n+=this.offset;break;default:d+=this.offset;}e.setAttribute("width",n),e.setAttribute("height",d);var i=[];switch(this.position){case"top":i=[[2,2],[n-2,2],[n-2,d-this.offset],[n/2+8,d-this.offset],[n/2,d-this.offset+8],[n/2-8,d-this.offset],[0,d-this.offset]];break;case"left":i=[[2,2],[n-this.offset,2],[n-this.offset,d/2-8],[n-this.offset+8,d/2],[n-this.offset,d/2+8],[n-this.offset,d],[2,d-2]];break;case"right":i=[[this.offset,2],[n-2,2],[n-2,d-2],[this.offset,d-2],[this.offset,d/2+8],[this.offset-8,d/2],[this.offset,d/2-8]],e.style.transform="translateX("+-this.offset+"px)";break;default:i=[[2,this.offset],[0,d-2],[n-2,d-2],[n-2,this.offset],[n/2+8,this.offset],[n/2,this.offset-8],[n/2-8,this.offset]],e.style.transform="translateY("+-this.offset+"px)";}Re.polygon(e,i),this._dirty=!1}firstUpdated(){this._layout()}updated(e){e&&(e.position||e.text)&&(this._dirty=!0),(!this._target||e&&e.for)&&this._refreshTarget(),this._dirty&&this._layout()}show(){this._showing||(this._showing=!0,this.shadowRoot.getElementById("container").style.display="",this.updatePosition(),setTimeout(()=>{this._layout()},1))}hide(){this._showing&&(this._showing=!1,this.shadowRoot.getElementById("container").style.display="none")}updatePosition(){if(this._target&&this.offsetParent){var e,t,n=this.offset,d=this.offsetParent.getBoundingClientRect(),i=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),s=(i.width-a.width)/2,o=(i.height-a.height)/2,r=i.left-d.left,l=i.top-d.top;switch(this.position){case"top":e=r+s,t=l-a.height-n;break;case"bottom":e=r+s,t=l+i.height+n;break;case"left":e=r-a.width-n,t=l+o;break;case"right":e=r+i.width+n,t=l+o;}this.style.left=e+"px",this.style.top=t+"px"}}}return customElements.define("wired-tooltip",At),e.WiredButton=De,e.WiredCard=Be,e.WiredCheckbox=He,e.WiredCombo=Me,e.WiredIconButton=Ue,e.WiredInput=qe,e.WiredItem=Ve,e.WiredListbox=Xe,e.WiredProgress=Ye,e.WiredRadio=Fe,e.WiredRadioGroup=Ge,e.WiredSlider=Ct,e.WiredTextarea=Et,e.WiredToggle=Nt,e.WiredTooltip=At,e}({});