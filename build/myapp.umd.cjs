(function(a,i){typeof exports=="object"&&typeof module!="undefined"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(a=typeof globalThis!="undefined"?globalThis:a||self,i(a.MyLibrary={}))})(this,function(a){"use strict";function i(){}function j(e){return e()}function C(){return Object.create(null)}function x(e){e.forEach(j)}function M(e){return typeof e=="function"}function O(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function z(e){return Object.keys(e).length===0}function A(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function k(){return E(" ")}function F(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.data!==t&&(e.data=t)}let w;function g(e){w=e}const _=[],H=[];let p=[];const I=[],K=Promise.resolve();let v=!1;function Q(){v||(v=!0,K.then(P))}function N(e){p.push(e)}const S=new Set;let m=0;function P(){if(m!==0)return;const e=w;do{try{for(;m<_.length;){const t=_[m];m++,g(t),U(t.$$)}}catch(t){throw _.length=0,m=0,t}for(g(null),_.length=0,m=0;H.length;)H.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];S.has(n)||(S.add(n),n())}p.length=0}while(_.length);for(;I.length;)I.pop()();v=!1,S.clear(),g(e)}function U(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function V(e){const t=[],n=[];p.forEach(f=>e.indexOf(f)===-1?t.push(f):n.push(f)),n.forEach(f=>f()),p=t}const b=new Set;let X;function B(e,t){e&&e.i&&(b.delete(e),e.i(t))}function Z(e,t,n,f){if(e&&e.o){if(b.has(e))return;b.add(e),X.c.push(()=>{b.delete(e),f&&(n&&e.d(1),f())}),e.o(t)}else f&&f()}function ee(e){e&&e.c()}function D(e,t,n,f){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),f||N(()=>{const l=e.$$.on_mount.map(j).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...l):x(l),e.$$.on_mount=[]}),c.forEach(N)}function G(e,t){const n=e.$$;n.fragment!==null&&(V(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(_.push(e),Q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(e,t,n,f,o,c,l,y=[-1]){const u=w;g(e);const r=e.$$={fragment:null,ctx:[],props:c,update:i,not_equal:o,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:C(),dirty:y,skip_bound:!1,root:t.target||u.$$.root};l&&l(r.root);let s=!1;if(r.ctx=n?n(e,t.props||{},(d,W,...Y)=>{const q=Y.length?Y[0]:W;return r.ctx&&o(r.ctx[d],r.ctx[d]=q)&&(!r.skip_bound&&r.bound[d]&&r.bound[d](q),s&&te(e,d)),W}):[],r.update(),s=!0,x(r.before_update),r.fragment=f?f(r.ctx):!1,t.target){if(t.hydrate){const d=F(t.target);r.fragment&&r.fragment.l(d),d.forEach(h)}else r.fragment&&r.fragment.c();t.intro&&B(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),P()}g(u)}class R{$destroy(){G(this,1),this.$destroy=i}$on(t,n){if(!M(n))return i;const f=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return f.push(n),()=>{const o=f.indexOf(n);o!==-1&&f.splice(o,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e){let t;return{c(){t=T("h1"),t.textContent="THIS IS A HEADING"},m(n,f){$(n,t,f)},p:i,i,o:i,d(n){n&&h(t)}}}class re extends R{constructor(t){super(),L(this,t,null,ne,O,{})}}function fe(e){let t,n,f,o,c,l,y,u;return t=new re({}),{c(){ee(t.$$.fragment),n=k(),f=T("h1"),f.textContent="This is the BRAND NEW tester",o=k(),c=T("h2"),l=E("The prop value is "),y=E(e[0])},m(r,s){D(t,r,s),$(r,n,s),$(r,f,s),$(r,o,s),$(r,c,s),A(c,l),A(c,y),u=!0},p(r,[s]){(!u||s&1)&&J(y,r[0])},i(r){u||(B(t.$$.fragment,r),u=!0)},o(r){Z(t.$$.fragment,r),u=!1},d(r){G(t,r),r&&h(n),r&&h(f),r&&h(o),r&&h(c)}}}function oe(e,t,n){let{foo:f="EMPTY"}=t;return e.$$set=o=>{"foo"in o&&n(0,f=o.foo)},[f]}let ie=class extends R{constructor(t){super(),L(this,t,oe,fe,O,{foo:0})}};const ue={Tester};a.Tester=ie,a.default=ue,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
