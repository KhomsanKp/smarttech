import{a2 as W,I as C,K,G as _,L as Q,a3 as Z,Z as A,c as b,E as g,a4 as I,V as B,R as p,k as l,M,N as ee,J as te,Q as ne,o as oe,F,O as x,a5 as P,a6 as se,a7 as ae,a8 as ie,f as T,B as D,w as le,g as ue,D as re,a9 as ce}from"./_r2ri53J.js";import{M as de,a as ve,V as R}from"./B06f5S_x.js";import{m as G,u as k}from"./CtLiwwjr.js";import{u as fe,V as S,m as me,a as he}from"./B7Hqr88Z.js";import{u as ge}from"./DyEdoHaq.js";import{m as ye}from"./Do2j6L_8.js";import{a as we,i as Ve}from"./Dv_b5fAI.js";const Be=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,i=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function Ce(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ie(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Be(o)}function xe(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function _e(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ce(t,o),touchend:t=>Ie(t,o),touchmove:t=>xe(t,o)}}function ke(e,o){var d;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},i=(d=o.instance)==null?void 0:d.$.uid;if(!n||!i)return;const s=_e(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=s,W(s).forEach(u=>{n.addEventListener(u,s[u],a)})}function Te(e,o){var i,s;const t=(i=o.value)!=null&&i.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];W(a).forEach(d=>{t.removeEventListener(d,a[d])}),delete t._touchHandlers[n]}const O={mounted:ke,unmounted:Te},j=Symbol.for("vuetify:v-window"),z=Symbol.for("vuetify:v-window-group"),N=C({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...G(),...ye(),...K()},"VWindow"),$=_()({name:"VWindow",directives:{Touch:O},props:N(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Q(e),{isRtl:a}=Z(),{t:i}=A(),s=fe(e,z),d=b(),u=g(()=>a.value?!e.reverse:e.reverse),v=I(!1),w=g(()=>{const c=e.direction==="vertical"?"y":"x",y=(u.value?!v.value:v.value)?"-reverse":"";return`v-window-${c}${y}-transition`}),m=I(0),h=b(void 0),V=g(()=>s.items.value.findIndex(c=>s.selected.value.includes(c.id)));B(V,(c,f)=>{const y=s.items.value.length,Y=y-1;y<=2?v.value=c<f:c===Y&&f===0?v.value=!0:c===0&&f===Y?v.value=!1:v.value=c<f}),p(j,{transition:w,isReversed:v,transitionCount:m,transitionHeight:h,rootRef:d});const r=g(()=>e.continuous||V.value!==0),E=g(()=>e.continuous||V.value!==s.items.value.length-1);function L(){r.value&&s.prev()}function X(){E.value&&s.next()}const q=g(()=>{const c=[],f={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:s.prev,"aria-label":i("$vuetify.carousel.prev")};c.push(r.value?t.prev?t.prev({props:f}):l(S,f,null):l("div",null,null));const y={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:s.next,"aria-label":i("$vuetify.carousel.next")};return c.push(E.value?t.next?t.next({props:y}):l(S,y,null):l("div",null,null)),c}),J=g(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?L():X()},right:()=>{u.value?X():L()},start:f=>{let{originalEvent:y}=f;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return k(()=>M(l(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var c,f;return[l("div",{class:"v-window__container",style:{height:h.value}},[(c=t.default)==null?void 0:c.call(t,{group:s}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[q.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[ee("touch"),J.value]])),{group:s}}}),be=C({color:String,cycle:Boolean,delimiterIcon:{type:te,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...N({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Pe=_()({name:"VCarousel",props:be(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=ne(e,"modelValue"),{t:a}=A(),i=b();let s=-1;B(n,u),B(()=>e.interval,u),B(()=>e.cycle,v=>{v?u():window.clearTimeout(s)}),oe(d);function d(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(s),window.requestAnimationFrame(d)}return k(()=>{const v=$.filterProps(e);return l($,x({ref:i},v,{modelValue:n.value,"onUpdate:modelValue":w=>n.value=w,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:P(e.height)},e.style]}),{default:t.default,additional:w=>{let{group:m}=w;return l(F,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&l(we,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((h,V)=>{const r={id:`carousel-item-${h.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",V+1,m.items.value.length),class:["v-carousel__controls__item",m.isSelected(h.id)&&"v-btn--active"],onClick:()=>m.select(h.id,!0)};return t.item?t.item({props:r,item:h}):l(S,x(h,r),null)})]})]),e.progress&&l(Ve,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(m.getItemIndex(n.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Se=C({eager:Boolean},"lazy");function Ee(e,o){const t=I(!1),n=g(()=>t.value||e.eager||o.value);B(o,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:n,onAfterLeave:a}}const U=C({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...G(),...me(),...Se()},"VWindowItem"),H=_()({name:"VWindowItem",directives:{Touch:O},props:U(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=se(j),a=he(e,z),{isBooted:i}=ge();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=I(!1),d=g(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function v(){var r;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=P((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function w(){u()}function m(r){s.value&&ie(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=P(r.clientHeight))})}const h=g(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:v,onAfterEnter:u,onEnterCancelled:w,onBeforeLeave:v,onAfterLeave:u,onLeaveCancelled:w,onEnter:m}:!1}),{hasContent:V}=Ee(e,a.isSelected);return k(()=>l(de,{transition:h.value,disabled:!i.value},{default:()=>{var r;return[M(l("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[V.value&&((r=t.default)==null?void 0:r.call(t))]),[[ae,a.isSelected.value]])]}})),{groupItem:a}}}),Le=C({...ve(),...U()},"VCarouselItem"),Xe=_()({name:"VCarouselItem",inheritAttrs:!1,props:Le(),setup(e,o){let{slots:t,attrs:n}=o;k(()=>{const a=R.filterProps(e),i=H.filterProps(e);return l(H,x({class:["v-carousel-item",e.class]},i),{default:()=>[l(R,x(n,a),t)]})})}}),Me={__name:"BlogAd",props:["data"],setup(e){const o=e;async function t(n){await ce(n,{external:!0})}return(n,a)=>(T(),D(Pe,{"show-arrows":!1,"hide-delimiters":"",cycle:"",class:"h-auto my-5"},{default:le(()=>[(T(!0),ue(F,null,re(o.data,(i,s)=>(T(),D(Xe,{src:i.src,key:s,onClick:d=>t(i.link),class:"cursor-pointer",fill:"","max-height":"300"},null,8,["src","onClick"]))),128))]),_:1}))}};export{Me as default};
