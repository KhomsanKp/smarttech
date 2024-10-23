import{aG as f,I as r,aH as m,E as c,aI as p,a3 as v}from"./_r2ri53J.js";const h=["top","bottom"],y=["start","end","left","right"];function P(t,e){let[s,n]=t.split(" ");return n||(n=f(h,s)?"start":f(y,s)?"top":"center"),{side:g(s,e),align:g(n,e)}}function g(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}const k=r({border:[Boolean,Number,String]},"border");function C(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:m();return{borderClasses:c(()=>{const n=p(t)?t.value:t.border,i=[];if(n===!0||n==="")i.push(`${e}--border`);else if(typeof n=="string"||n===0)for(const o of String(n).split(" "))i.push(`border-${o}`);return i})}}const N=r({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function x(t){return{elevationClasses:c(()=>{const s=p(t)?t.value:t.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const d={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},I=r({location:String},"location");function B(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=v();return{locationStyles:c(()=>{if(!t.location)return{};const{side:o,align:l}=P(t.location.split(" ").length>1?t.location:`${t.location} center`,n.value);function u(b){return s?s(b):0}const a={};return o!=="center"&&(e?a[d[o]]=`calc(100% - ${u(o)}px)`:a[o]=0),l!=="center"?e?a[d[l]]=`calc(100% - ${u(l)}px)`:a[l]=0:(o==="center"?a.top=a.left="50%":a[{top:"left",bottom:"left",left:"top",right:"top"}[o]]="50%",a.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[o]),a})}}const S=["static","relative","fixed","absolute","sticky"],E=r({position:{type:String,validator:t=>S.includes(t)}},"position");function L(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:m();return{positionClasses:c(()=>t.position?`${e}--${t.position}`:void 0)}}const X=r({tag:{type:String,default:"div"}},"tag");export{k as a,N as b,I as c,E as d,x as e,B as f,L as g,X as m,g as t,C as u};
