"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[154],{101:function(e,n,t){t.d(n,{I:function(){return l},v:function(){return c}});var r,a,i=t(168),s=t(82),o=t(407),l=s.ZP.input(r||(r=(0,i.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.8px solid rgba(221, 197, 255, 0.6);\n  border-radius: 8px;\n  font-family: 'Cormorant';\n  font-size: 18px;\n  line-height: 22px;\n  padding: 11px;\n  color: rgba(38, 38, 38, 0.9);\n  width: 110px;\n  @media screen and (min-width: ",") {\n    width: 130px;\n    height: 47px;\n  }\n  ","\n"])),(function(e){return e.theme.sizes.desktop}),o.bK),c=s.ZP.button(a||(a=(0,i.Z)(["\n  border-radius: 50%;\n  background-color: #e192c1;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  &:is(:hover, :focus) {\n    transform: scale(1.05);\n  }\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(e){return e.theme.sizes.desktop}))},5154:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,a,i=t(9439),s=t(9055),o=t(4259),l=t(1413),c=t(9230),u=t(101),d=t(2791),p=["title","titleId"];function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e,n){var t=e.title,i=e.titleId,s=h(e,p);return d.createElement("svg",x({width:18,height:19,viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},s),t?d.createElement("title",{id:i},t):null,r||(r=d.createElement("path",{d:"M13.4688 5.29932L4.78705 13.981",stroke:"white",strokeWidth:1.44444})),a||(a=d.createElement("path",{d:"M4.78809 4.78857L13.4698 13.4703",stroke:"white",strokeWidth:1.44444})))}var m,g,b=d.forwardRef(f),v=(t.p,t(184)),w=function(e){var n=e.index,t=e.register,r=e.remove,a=e.setValue,i=(0,c.$G)("calc").t;return(0,v.jsxs)(s.x,{display:"flex",gridGap:["5px",null,"8px"],mb:"8px",alignItems:"center",children:[(0,v.jsx)(u.I,(0,l.Z)((0,l.Z)({type:"text"},t("info.".concat(n,".name"))),{},{placeholder:i("personalMatrixNamePlaceholder")})),(0,v.jsx)(u.I,(0,l.Z)({width:["140px","210px","240px"],type:"text",placeholder:i("personalMatrixDatePlaceholder")},t("info.".concat(n,".date"),{onChange:function(e){var t=e.target.value.replace(/\D/g,"");t.length>8&&(t=t.substr(0,8)),t.length>4&&(t=t.substr(0,4)+"."+t.substr(4)),t.length>2&&(t=t.substr(0,2)+"."+t.substr(2)),a("info.".concat(n,".date"),t)},required:{value:!0,message:i("personalMatrixDateRequired")},pattern:{value:/^\d{2}\.\d{2}\.\d{4}$/,message:i("personalMatrixDatePattern")}}))),n>2&&(0,v.jsx)(u.v,{type:"button",onClick:function(){return r(n)},children:(0,v.jsx)(b,{})})]})},j=t(6173),y=t(168),k=t(82),Z=k.ZP.button(m||(m=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n  background-color: #9071af;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  &:is(:hover, :focus) {\n    transform: scale(1.05);\n  }\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(e){return e.theme.sizes.desktop})),O=k.ZP.p(g||(g=(0,y.Z)(["\n  font-size: 15px;\n  line-height: 18px;\n\n  color: rgba(73, 73, 73, 0.8);\n  @media screen and (min-width: ",") {\n    font-size: 22px;\n  }\n"])),(function(e){return e.theme.sizes.desktop})),I=t(922),M=t(1816),E={date:"",name:""},P=function(e){var n=e.setIsFullOverlap,t=(0,I.useMatrix)(),r=t.setPartnersDate,a=t.setShowMatrix,l=(0,c.$G)("calc").t,u=(0,o.cI)({defaultValues:{info:[E,E,E]}}),d=u.register,p=u.control,x=u.handleSubmit,h=u.setValue,f=(0,o.Dq)({name:"info",control:p}),m=f.fields,g=f.append,y=f.remove,k=m.length>=6;return(0,v.jsxs)(s.x,{as:"form",onSubmit:x((function(e){var t=[];e.info.forEach((function(e){var n=e.date.split("."),r=(0,i.Z)(n,3),a=r[0],s=r[1],o=r[2];t.push({day:a,month:s,year:o,name:e.name})})),r(t),a(!0),n(e.isFullOverlap),document.activeElement.blur()})),m:["0 auto 40px"," 0 auto 60px"],maxWidth:["370px","450px","500px"],children:[(0,v.jsxs)(s.x,{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)",border:"1px solid #72499B",borderRadius:"14px",px:"40px",py:"36px",mb:"26px",children:[(0,v.jsx)(j.$K,{children:l("personalMatrixBoxTitle")}),m.map((function(e,n){return(0,v.jsx)(w,{index:n,register:d,remove:y,setValue:h},e.id)})),!k&&(0,v.jsxs)(s.x,{display:"flex",gridGap:"6px",alignItems:"center",children:[(0,v.jsx)(Z,{type:"button",onClick:function(){return g()},children:(0,v.jsx)(b,{})}),(0,v.jsx)(O,{children:l("add")})]})]}),(0,v.jsx)(M.Z,{register:d}),(0,v.jsx)(j.c1,{type:"submit",whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},children:l("personalMatrixCalc")})]})},C=t(7774),D=t(4286),S=t(1760),z=function(){var e=(0,I.useMatrix)(),n=e.partnersDate,t=e.showMatrix,r=(0,d.useState)(),a=(0,i.Z)(r,2),o=a[0],l=a[1],u=(0,d.useState)([]),p=(0,i.Z)(u,2),x=p[0],h=p[1],f=(0,d.useState)(!1),m=(0,i.Z)(f,2),g=m[0],b=m[1],w=(0,c.$G)("calc").t;return(0,d.useEffect)((function(){if(0!==n){var e=[];n.forEach((function(n,t){var r=(0,D.xE)(n,!1);r.name=n.name,r.order="".concat(w("tableMatrix")," ").concat(t+1),e.push(r)})),h(e)}}),[n,w]),(0,d.useEffect)((function(){l((0,D.Tb)(x,g))}),[g,x]),(0,v.jsxs)(s.x,{children:[(0,v.jsx)(P,{setIsFullOverlap:b}),t&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S.Z,{resultData:o}),(0,v.jsx)(s.x,{display:[null,null,"flex"],justifyContent:"center",gridGap:"40px",flexWrap:"wrap",children:x.map((function(e,t){return(0,v.jsx)(C.Z,{partner:e,date:n[t],lastIndex:t===x.length-1},e.order)}))})]})]})}}}]);
//# sourceMappingURL=154.fd5972c2.chunk.js.map