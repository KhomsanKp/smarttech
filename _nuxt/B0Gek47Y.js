import{G as I,aP as Fe,aS as ae,ac as $,I as O,J as R,K as ne,L as ie,k as g,aQ as le,T as se,a6 as M,a4 as B,R as T,z as h,Y as re,c as P,Q as z,E as S,al as oe,U as Ge,P as X,aT as $e,aU as Z,V as He,aV as Ue,M as Ke,N as qe,F as ee,O as Je}from"./TGpSgzxM.js";import{m as E,b as ue,d as ce,u as H,a as Qe,c as We}from"./Bk_GpCjn.js";import{a as de,m as U,u as ve,b as Ye,e as Xe}from"./sHaPyycB.js";import{m as fe,j as Ze,d as ye,u as ge,e as me,k as et,V as D,a as F,h as Se,c as tt,R as at,g as nt}from"./BucV2UPV.js";import{V as it}from"./DCNn16QB.js";function lt(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0;return I()({name:l??Fe(ae(e.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...E()},setup(t,i){let{slots:a}=i;return()=>{var n;return $(t.tag,{class:[e,t.class],style:t.style},(n=a.default)==null?void 0:n.call(a))}}})}const st=O({start:Boolean,end:Boolean,icon:R,image:String,text:String,...de(),...E(),...fe(),...ue(),...Ze(),...U(),...ne(),...ye({variant:"flat"})},"VAvatar"),te=I()({name:"VAvatar",props:st(),setup(e,r){let{slots:l}=r;const{themeClasses:t}=ie(e),{borderClasses:i}=ve(e),{colorClasses:a,colorStyles:n,variantClasses:s}=ge(e),{densityClasses:m}=me(e),{roundedClasses:f}=ce(e),{sizeClasses:y,sizeStyles:d}=et(e);return H(()=>g(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,a.value,m.value,f.value,y.value,s.value,e.class],style:[n.value,d.value,e.style]},{default:()=>[l.default?g(F,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[l.default()]}):e.image?g(it,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?g(D,{key:"icon",icon:e.icon},null):e.text,Se(!1,"v-avatar")]})),{}}}),rt=O({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function p(e,r,l){return I()({name:e,props:rt({mode:l,origin:r}),setup(t,i){let{slots:a}=i;const n={onBeforeEnter(s){t.origin&&(s.style.transformOrigin=t.origin)},onLeave(s){if(t.leaveAbsolute){const{offsetTop:m,offsetLeft:f,offsetWidth:y,offsetHeight:d}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${m}px`,s.style.left=`${f}px`,s.style.width=`${y}px`,s.style.height=`${d}px`}t.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(t.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:m,top:f,left:y,width:d,height:w}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=m||"",s.style.top=f||"",s.style.left=y||"",s.style.width=d||"",s.style.height=w||""}}};return()=>{const s=t.group?le:se;return $(s,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},a.default)}}})}function he(e,r){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:l},disabled:Boolean,group:Boolean},setup(t,i){let{slots:a}=i;const n=t.group?le:se;return()=>$(n,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:r},a.default)}})}function be(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const l=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ae(`offset-${l}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[l]:n.style[l]}},onEnter(n){const s=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const m=`${n[t]}px`;n.style[l]="0",n.offsetHeight,n.style.transition=s.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[l]=m})},onAfterEnter:a,onEnterCancelled:a,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[l]:n.style[l]},n.style.overflow="hidden",n.style[l]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[l]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(n){e&&n._parent&&n._parent.classList.remove(e),a(n)}function a(n){const s=n._initialStyle[l];n.style.overflow=n._initialStyle.overflow,s!=null&&(n.style[l]=s),delete n._initialStyle}}p("fab-transition","center center","out-in");p("dialog-bottom-transition");p("dialog-top-transition");const Ct=p("fade-transition");p("scale-transition");p("scroll-x-transition");p("scroll-x-reverse-transition");p("scroll-y-transition");p("scroll-y-reverse-transition");p("slide-x-transition");p("slide-x-reverse-transition");p("slide-y-transition");p("slide-y-reverse-transition");const It=he("expand-transition",be());he("expand-x-transition",be("",!0));const G=Symbol.for("vuetify:list");function Lt(){const e=M(G,{hasPrepend:B(!1),updateHasPrepend:()=>null}),r={hasPrepend:B(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return T(G,r),e}function ot(){return M(G,null)}const K=e=>{const r={activate:l=>{let{id:t,value:i,activated:a}=l;return t=h(t),e&&!i&&a.size===1&&a.has(t)||(i?a.add(t):a.delete(t)),a},in:(l,t,i)=>{let a=new Set;if(l!=null)for(const n of re(l))a=r.activate({id:n,value:!0,activated:new Set(a),children:t,parents:i});return a},out:l=>Array.from(l)};return r},pe=e=>{const r=K(e);return{activate:t=>{let{activated:i,id:a,...n}=t;a=h(a);const s=i.has(a)?new Set([a]):new Set;return r.activate({...n,id:a,activated:s})},in:(t,i,a)=>{let n=new Set;if(t!=null){const s=re(t);s.length&&(n=r.in(s.slice(0,1),i,a))}return n},out:(t,i,a)=>r.out(t,i,a)}},ut=e=>{const r=K(e);return{activate:t=>{let{id:i,activated:a,children:n,...s}=t;return i=h(i),n.has(i)?a:r.activate({id:i,activated:a,children:n,...s})},in:r.in,out:r.out}},ct=e=>{const r=pe(e);return{activate:t=>{let{id:i,activated:a,children:n,...s}=t;return i=h(i),n.has(i)?a:r.activate({id:i,activated:a,children:n,...s})},in:r.in,out:r.out}},dt={open:e=>{let{id:r,value:l,opened:t,parents:i}=e;if(l){const a=new Set;a.add(r);let n=i.get(r);for(;n!=null;)a.add(n),n=i.get(n);return a}else return t.delete(r),t},select:()=>null},we={open:e=>{let{id:r,value:l,opened:t,parents:i}=e;if(l){let a=i.get(r);for(t.add(r);a!=null&&a!==r;)t.add(a),a=i.get(a);return t}else t.delete(r);return t},select:()=>null},vt={open:we.open,select:e=>{let{id:r,value:l,opened:t,parents:i}=e;if(!l)return t;const a=[];let n=i.get(r);for(;n!=null;)a.push(n),n=i.get(n);return new Set(a)}},q=e=>{const r={select:l=>{let{id:t,value:i,selected:a}=l;if(t=h(t),e&&!i){const n=Array.from(a.entries()).reduce((s,m)=>{let[f,y]=m;return y==="on"&&s.push(f),s},[]);if(n.length===1&&n[0]===t)return a}return a.set(t,i?"on":"off"),a},in:(l,t,i)=>{let a=new Map;for(const n of l||[])a=r.select({id:n,value:!0,selected:new Map(a),children:t,parents:i});return a},out:l=>{const t=[];for(const[i,a]of l.entries())a==="on"&&t.push(i);return t}};return r},ke=e=>{const r=q(e);return{select:t=>{let{selected:i,id:a,...n}=t;a=h(a);const s=i.has(a)?new Map([[a,i.get(a)]]):new Map;return r.select({...n,id:a,selected:s})},in:(t,i,a)=>{let n=new Map;return t!=null&&t.length&&(n=r.in(t.slice(0,1),i,a)),n},out:(t,i,a)=>r.out(t,i,a)}},ft=e=>{const r=q(e);return{select:t=>{let{id:i,selected:a,children:n,...s}=t;return i=h(i),n.has(i)?a:r.select({id:i,selected:a,children:n,...s})},in:r.in,out:r.out}},yt=e=>{const r=ke(e);return{select:t=>{let{id:i,selected:a,children:n,...s}=t;return i=h(i),n.has(i)?a:r.select({id:i,selected:a,children:n,...s})},in:r.in,out:r.out}},gt=e=>{const r={select:l=>{let{id:t,value:i,selected:a,children:n,parents:s}=l;t=h(t);const m=new Map(a),f=[t];for(;f.length;){const d=f.shift();a.set(h(d),i?"on":"off"),n.has(d)&&f.push(...n.get(d))}let y=h(s.get(t));for(;y;){const d=n.get(y),w=d.every(o=>a.get(h(o))==="on"),k=d.every(o=>!a.has(h(o))||a.get(h(o))==="off");a.set(y,w?"on":k?"off":"indeterminate"),y=h(s.get(y))}return e&&!i&&Array.from(a.entries()).reduce((w,k)=>{let[o,u]=k;return u==="on"&&w.push(o),w},[]).length===0?m:a},in:(l,t,i)=>{let a=new Map;for(const n of l||[])a=r.select({id:n,value:!0,selected:new Map(a),children:t,parents:i});return a},out:(l,t)=>{const i=[];for(const[a,n]of l.entries())n==="on"&&!t.has(a)&&i.push(a);return i}};return r},_=Symbol.for("vuetify:nested"),Ae={id:B(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:P(!1),selectable:P(!1),opened:P(new Set),activated:P(new Set),selected:P(new Map),selectedValues:P([]),getPath:()=>[]}},_t=O({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Ot=e=>{let r=!1;const l=P(new Map),t=P(new Map),i=z(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=S(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return ut(e.mandatory);case"single-leaf":return ct(e.mandatory);case"independent":return K(e.mandatory);case"single-independent":default:return pe(e.mandatory)}}),n=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return yt(e.mandatory);case"leaf":return ft(e.mandatory);case"independent":return q(e.mandatory);case"single-independent":return ke(e.mandatory);case"classic":default:return gt(e.mandatory)}}),s=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return vt;case"single":return dt;case"multiple":default:return we}}),m=z(e,"activated",e.activated,o=>a.value.in(o,l.value,t.value),o=>a.value.out(o,l.value,t.value)),f=z(e,"selected",e.selected,o=>n.value.in(o,l.value,t.value),o=>n.value.out(o,l.value,t.value));oe(()=>{r=!0});function y(o){const u=[];let c=o;for(;c!=null;)u.unshift(c),c=t.value.get(c);return u}const d=Ge("nested"),w=new Set,k={id:B(),root:{opened:i,activatable:X(e,"activatable"),selectable:X(e,"selectable"),activated:m,selected:f,selectedValues:S(()=>{const o=[];for(const[u,c]of f.value.entries())c==="on"&&o.push(u);return o}),register:(o,u,c)=>{if(w.has(o)){y(o).map(String).join(" -> "),y(u).concat(o).map(String).join(" -> ");return}else w.add(o);u&&o!==u&&t.value.set(o,u),c&&l.value.set(o,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],o])},unregister:o=>{if(r)return;w.delete(o),l.value.delete(o);const u=t.value.get(o);if(u){const c=l.value.get(u)??[];l.value.set(u,c.filter(b=>b!==o))}t.value.delete(o)},open:(o,u,c)=>{d.emit("click:open",{id:o,value:u,path:y(o),event:c});const b=s.value.open({id:o,value:u,opened:new Set(i.value),children:l.value,parents:t.value,event:c});b&&(i.value=b)},openOnSelect:(o,u,c)=>{const b=s.value.select({id:o,value:u,selected:new Map(f.value),opened:new Set(i.value),children:l.value,parents:t.value,event:c});b&&(i.value=b)},select:(o,u,c)=>{d.emit("click:select",{id:o,value:u,path:y(o),event:c});const b=n.value.select({id:o,value:u,selected:new Map(f.value),children:l.value,parents:t.value,event:c});b&&(f.value=b),k.root.openOnSelect(o,u,c)},activate:(o,u,c)=>{if(!e.activatable)return k.root.select(o,!0,c);d.emit("click:activate",{id:o,value:u,path:y(o),event:c});const b=a.value.activate({id:o,value:u,activated:new Set(m.value),children:l.value,parents:t.value,event:c});b&&(m.value=b)},children:l,parents:t,getPath:y}};return T(_,k),k.root},mt=(e,r)=>{const l=M(_,Ae),t=Symbol($e()),i=S(()=>e.value!==void 0?e.value:t),a={...l,id:i,open:(n,s)=>l.root.open(i.value,n,s),openOnSelect:(n,s)=>l.root.openOnSelect(i.value,n,s),isOpen:S(()=>l.root.opened.value.has(i.value)),parent:S(()=>l.root.parents.value.get(i.value)),activate:(n,s)=>l.root.activate(i.value,n,s),isActivated:S(()=>l.root.activated.value.has(h(i.value))),select:(n,s)=>l.root.select(i.value,n,s),isSelected:S(()=>l.root.selected.value.get(h(i.value))==="on"),isIndeterminate:S(()=>l.root.selected.value.get(i.value)==="indeterminate"),isLeaf:S(()=>!l.root.children.value.get(i.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(i.value,l.id.value,r),oe(()=>{!l.isGroupActivator&&l.root.unregister(i.value)}),r&&T(_,a),a},xt=()=>{const e=M(_,Ae);T(_,{...e,isGroupActivator:!0})},St=O({opacity:[Number,String],...E(),...U()},"VListItemSubtitle"),ht=I()({name:"VListItemSubtitle",props:St(),setup(e,r){let{slots:l}=r;return H(()=>g(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l)),{}}}),bt=lt("v-list-item-title"),pt=O({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Z(),onClickOnce:Z(),...de(),...E(),...fe(),...Qe(),...Ye(),...ue(),...tt(),...U(),...ne(),...ye({variant:"text"})},"VListItem"),Bt=I()({name:"VListItem",directives:{Ripple:at},props:pt(),emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:t,emit:i}=r;const a=nt(e,l),n=S(()=>e.value===void 0?a.href.value:e.value),{activate:s,isActivated:m,select:f,isOpen:y,isSelected:d,isIndeterminate:w,isGroupActivator:k,root:o,parent:u,openOnSelect:c,id:b}=mt(n,!1),V=ot(),L=S(()=>{var v;return e.active!==!1&&(e.active||((v=a.isActive)==null?void 0:v.value)||(o.activatable.value?m.value:d.value))}),J=S(()=>e.link!==!1&&a.isLink.value),C=S(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!V&&(o.selectable.value||o.activatable.value||e.value!=null))),Pe=S(()=>e.rounded||e.nav),Ve=S(()=>e.color??e.activeColor),Ce=S(()=>({color:L.value?Ve.value??e.baseColor:e.baseColor,variant:e.variant}));He(()=>{var v;return(v=a.isActive)==null?void 0:v.value},v=>{v&&u.value!=null&&o.open(u.value,!0),v&&c(v)},{immediate:!0});const{themeClasses:Ie}=ie(e),{borderClasses:Le}=ve(e),{colorClasses:_e,colorStyles:Oe,variantClasses:xe}=ge(Ce),{densityClasses:Be}=me(e),{dimensionStyles:Me}=We(e),{elevationClasses:Te}=Xe(e),{roundedClasses:Ee}=ce(Pe),Ne=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=S(()=>({isActive:L.value,select:f,isOpen:y.value,isSelected:d.value,isIndeterminate:w.value}));function je(v){var x;i("click",v),C.value&&((x=a.navigate)==null||x.call(a,v),!k&&(o.activatable.value?s(!m.value,v):(o.selectable.value||e.value!=null)&&f(!d.value,v)))}function ze(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),v.target.dispatchEvent(new MouseEvent("click",v)))}return H(()=>{const v=J.value?"a":e.tag,x=t.title||e.title!=null,Re=t.subtitle||e.subtitle!=null,Q=!!(e.appendAvatar||e.appendIcon),De=!!(Q||t.append),W=!!(e.prependAvatar||e.prependIcon),j=!!(W||t.prepend);return V==null||V.updateHasPrepend(j),e.activeColor&&Ue("active-color",["color","base-color"]),Ke(g(v,Je({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!j&&(V==null?void 0:V.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},Ie.value,Le.value,_e.value,Be.value,Te.value,Ne.value,Ee.value,xe.value,e.class],style:[Oe.value,Me.value,e.style],tabindex:C.value?V?-2:0:void 0,"aria-selected":o.activatable.value?m.value:d.value,onClick:je,onKeydown:C.value&&!J.value&&ze},a.linkProps),{default:()=>{var Y;return[Se(C.value||L.value,"v-list-item"),j&&g("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?g(F,{key:"prepend-defaults",disabled:!W,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var A;return[(A=t.prepend)==null?void 0:A.call(t,N.value)]}}):g(ee,null,[e.prependAvatar&&g(te,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&g(D,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),g("div",{class:"v-list-item__spacer"},null)]),g("div",{class:"v-list-item__content","data-no-activator":""},[x&&g(bt,{key:"title"},{default:()=>{var A;return[((A=t.title)==null?void 0:A.call(t,{title:e.title}))??e.title]}}),Re&&g(ht,{key:"subtitle"},{default:()=>{var A;return[((A=t.subtitle)==null?void 0:A.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(Y=t.default)==null?void 0:Y.call(t,N.value)]),De&&g("div",{key:"append",class:"v-list-item__append"},[t.append?g(F,{key:"append-defaults",disabled:!Q,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var A;return[(A=t.append)==null?void 0:A.call(t,N.value)]}}):g(ee,null,[e.appendIcon&&g(D,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&g(te,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),g("div",{class:"v-list-item__spacer"},null)])]}}),[[qe("ripple"),C.value&&e.ripple]])}),{activate:s,isActivated:m,isGroupActivator:k,isSelected:d,list:V,select:f,root:o,id:b}}});export{Bt as V,te as a,Ct as b,lt as c,ot as d,It as e,xt as f,Lt as g,Ot as h,_t as m,mt as u};