"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[851],{5851:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(885),i=t(2791),a=t(9055),o=t(4259),s=t(302),l=t(9624),c=t(184),d=function(e){var n=e.register,t=e.setValue,o=e.errors,d=e.infoErrors,u=e.index,p=(0,i.useState)(!1),h=(0,r.Z)(p,2),f=h[0],x=h[1];return(0,i.useEffect)((function(){t("info[".concat(u,"].isGenerated"),f)}),[u,f,t]),(0,c.jsxs)(a.x,{position:"relative",children:[(0,c.jsx)(s.Z,{isFlipped:f,setIsFlipped:x,register:n,setValue:t,errors:o,infoErrors:d,index:u}),(0,c.jsx)(l.Z,{isFlipped:f,setIsFlipped:x,register:n,setValue:t,index:u})]})},u=t(6173),p=t(6353),h=t(6434),f=function(){var e=(0,p.useMatrix)(),n=e.setPartnersDate,t=e.setShowMatrix,i=(0,o.cI)({defaultValues:{info:[{date:"",name:""},{date:"",name:""}]}}),s=i.register,l=i.control,f=i.handleSubmit,x=i.setValue,m=i.formState.errors,g=(0,o.Dq)({name:"info",control:l}).fields;return(0,c.jsxs)(a.x,{as:"form",mb:["87px"],onSubmit:f((function(e){var i=[];e.info.forEach((function(e){if(e.isGenerated)return delete e.date,delete e.name,void i.push(e);var n=e.date.split("."),t=(0,r.Z)(n,3),a=t[0],o=t[1],s=t[2];i.push({day:a,month:o,year:s,isGenerated:e.isGenerated,name:e.name})})),n(i),t(!0),document.activeElement.blur()})),children:[(0,c.jsx)(a.x,{display:[null,null,"flex"],justifyContent:"space-evenly",children:g.map((function(e,n){return(0,c.jsxs)(a.x,{children:[(0,c.jsxs)(h.su,{children:["\u041c\u0410\u0422\u0420\u0418\u0426\u0410 ",n+1]}),(0,c.jsx)(d,{register:s,setValue:x,errors:m,infoErrors:m.info,index:n})]},e.id)}))}),(0,c.jsx)(u.c1,{type:"submit",whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})},x=t(4286),m=t(7774),g=t(1760),b=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],s=(0,i.useState)([]),l=(0,r.Z)(s,2),d=l[0],u=l[1],h=(0,p.useMatrix)(),b=h.partnersDate,v=h.showMatrix;return(0,i.useEffect)((function(){if(0!==b){var e=[];b.forEach((function(n,t){var r=(0,x.xE)(n,n.isGenerated);r.order="\u041c\u0410\u0422\u0420\u0418\u0426\u0410 ".concat(t+1),e.push(r)})),u(e)}}),[b,v]),(0,i.useEffect)((function(){o((0,x.Tb)(d))}),[d]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f,{}),v&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g.Z,{resultData:t}),(0,c.jsx)(a.x,{display:[null,null,"flex"],justifyContent:"space-between",gridGap:"40px",children:d.map((function(e,n){return(0,c.jsx)(m.Z,{partner:e,date:b[n],lastIndex:n===d.length-1},e.order)}))})]})]})}},302:function(e,n,t){var r=t(1413),i=(t(2791),t(6173)),a=t(8319),o=t(184);n.Z=function(e){var n=e.isFlipped,t=e.setIsFlipped,s=e.register,l=e.setValue,c=e.errors,d=e.index,u=e.infoErrors,p=!!u&&!!u[d];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.mU,{initial:{rotateY:0},animate:{rotateY:n?180:0},transition:{duration:.6},children:[!n&&(0,o.jsx)(i.Od,{whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},onClick:function(){return t(!0)},type:"button",children:(0,o.jsx)(i.Dp,{})}),(0,o.jsx)(i.$K,{children:"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,o.jsx)(a.II,(0,r.Z)({type:"text",placeholder:"\u0418\u043c\u044f",mb:["5px"]},s("".concat(d||0===d?"info.".concat(d,".name"):"name")))),(0,o.jsx)(a.II,(0,r.Z)({type:"text",placeholder:"\u0414\u0430\u0442\u0430  (10.02.2000)"},s("".concat(d||0===d?"info.".concat(d,".date"):"date"),{onChange:function(e){var n=e.target.value.replace(/\D/g,"");n.length>8&&(n=n.substr(0,8)),n.length>4&&(n=n.substr(0,4)+"."+n.substr(4)),n.length>2&&(n=n.substr(0,2)+"."+n.substr(2)),l("".concat(d||0===d?"info.".concat(d,".date"):"date"),n)},required:{value:!n,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"},pattern:{value:/^\d{2}\.\d{2}\.\d{4}$/,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 dd.mm.yyyy"}}))),c.date&&(0,o.jsx)(a.jj,{children:c.date.message}),p&&(0,o.jsx)(a.jj,{children:u[d].date.message})]})})}},8319:function(e,n,t){t.d(n,{II:function(){return u},jj:function(){return p},mU:function(){return d}});var r,i,a,o=t(168),s=t(4533),l=t(82),c=t(407),d=(0,l.ZP)(s.E.div)(r||(r=(0,o.Z)(["\n  position: relative;\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(249, 237, 255, 0.3) 100%\n  );\n  border: 0.5px solid #72499b;\n  border-radius: 14px;\n  padding: 36px 42px 68px;\n  backface-visibility: hidden;\n  margin-bottom: 25px;\n  height: 210px;\n  @media screen and (min-width: ",") {\n    width: 430px;\n    height: 278px;\n    margin: 0 auto 38px;\n    padding: 48px 55px 68px;\n  }\n  @media screen and (min-width: ",") {\n  }\n"])),(function(e){return e.theme.sizes.tablet}),(function(e){return e.theme.sizes.desktop})),u=l.ZP.input(i||(i=(0,o.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.6px solid rgba(221, 197, 255, 0.6);\n  border-radius: 6px;\n  width: 100%;\n  height: 35px;\n  padding: 10px 14px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.19;\n\n  color: ",";\n  margin-bottom: 10px;\n  ","\n  &:focus-within {\n    border: 2px solid rgba(221, 197, 255, 0.8);\n    outline: none;\n  }\n\n  @media screen and (min-width: ",") {\n    height: 47px;\n    font-size: 21px;\n  }\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.secondText}),c.Dh,(function(e){return e.theme.sizes.tablet})),p=l.ZP.p(a||(a=(0,o.Z)(["\n  text-align: center;\n  color: #a40b8a;\n  font-size: 20px;\n  margin: 0 auto;\n"])))},9624:function(e,n,t){t.d(n,{Z:function(){return M}});var r,i,a=t(1413),o=t(2791),s=t(6173),l=t(168),c=t(4533),d=t(82),u=["title","titleId"];function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e,n){var t=e.title,a=e.titleId,s=h(e,u);return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 15.315 15.315",ref:n,"aria-labelledby":a},s),t?o.createElement("title",{id:a},t):null,o.createElement("path",{d:"M3.669 3.71h.696c.256 0 .464-.165.464-.367V.367C4.829.164 4.621 0 4.365 0h-.696c-.255 0-.463.164-.463.367v2.976c-.001.202.207.367.463.367zM10.95 3.71h.696c.256 0 .464-.165.464-.367V.367c0-.203-.208-.367-.464-.367h-.696c-.256 0-.463.164-.463.367v2.976c0 .202.207.367.463.367z",style:{fill:"#030104"}}),r||(r=o.createElement("path",{d:"M14.512 1.42h-1.846v2.278c0 .509-.458.923-1.021.923h-.696c-.563 0-1.021-.414-1.021-.923V1.42H5.384v2.278c0 .509-.458.923-1.021.923h-.694c-.562 0-1.02-.414-1.02-.923V1.42H.803a.558.558 0 0 0-.557.557V14.76c0 .307.25.555.557.555h13.709a.555.555 0 0 0 .557-.555V1.977a.557.557 0 0 0-.557-.557zm-.196 8.07v4.349a.176.176 0 0 1-.175.176H1.174a.176.176 0 0 1-.175-.176V5.961c0-.096.078-.176.175-.176H14.141c.097 0 .175.08.175.176V9.49z"})),i||(i=o.createElement("path",{d:"M2.327 8.93h1.735v1.736H2.327zM5.28 8.93h1.735v1.736H5.28zM8.204 8.93h1.734v1.736H8.204zM11.156 8.93h1.736v1.736h-1.736zM2.363 11.432h1.736v1.736H2.363zM5.317 11.432h1.735v1.736H5.317zM8.241 11.432h1.734v1.736H8.241zM11.194 11.432h1.735v1.736h-1.735zM8.215 6.47H9.95v1.735H8.215zM11.17 6.47h1.734v1.735H11.17z"})))}var x,m,g,b,v=o.forwardRef(f),j=(t.p,(0,d.ZP)(c.E.div)(x||(x=(0,l.Z)(["\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(249, 237, 255, 0.3) 100%\n  );\n  border: 0.5px solid #72499b;\n  border-radius: 14px;\n  padding: 36px 58px 68px;\n  backface-visibility: hidden;\n  margin-bottom: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 210px;\n  @media screen and (min-width: ",") {\n    width: 430px;\n    height: 278px;\n    left: calc(50% - (430px / 2));\n    padding: 48px 55px 68px;\n  }\n"])),(function(e){return e.theme.sizes.tablet}))),w=(0,d.ZP)(v)(m||(m=(0,l.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: #fff;\n"]))),y=d.ZP.ul(g||(g=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  align-items: center;\n  justify-content: center;\n"]))),Z=d.ZP.input(b||(b=(0,l.Z)(["\n  padding-left: 10px;\n  width: 67px;\n  height: 35px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.31;\n  color: rgba(73, 73, 73, 0.8);\n\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 0.6px solid rgba(221, 197, 255, 0.6);\n  border-radius: 5px;\n  &:focus-within {\n    border: 2px solid rgba(221, 197, 255, 0.8);\n    outline: none;\n  }\n  @media screen and (min-width: ",") {\n    width: 88px;\n    height: 47px;\n    font-size: 21px;\n    line-height: 1.33;\n  }\n"])),(function(e){return e.theme.fonts.digits}),(function(e){return e.theme.sizes.tablet})),z=t(184),E=[{name:"topLeft1"},{name:"month"},{name:"topRight1"},{name:"day"},{name:"center"},{name:"year"},{name:"bottomLeft1"},{name:"bottom1"},{name:"bottomRight1"}],M=function(e){var n=e.isFlipped,t=e.setIsFlipped,r=e.register,i=e.setValue,o=e.index,l=function(e){var n=e.target,t=n.name,r=n.value;i(t,r>22?22:r)};return(0,z.jsxs)(j,{initial:{rotateY:180},animate:{rotateY:n?0:180},transition:{duration:.6},children:[n&&(0,z.jsx)(s.Od,{whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},onClick:function(){return t(!1)},type:"button",children:(0,z.jsx)(w,{})}),(0,z.jsx)(s.$K,{children:"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,z.jsx)(y,{children:E.map((function(e){var n=e.name;return(0,z.jsx)("li",{children:(0,z.jsx)(Z,(0,a.Z)({type:"number"},r("".concat(o||0===o?"info.".concat(o,".").concat(n):n),{max:{value:22},onChange:l})))},n)}))})]})}}}]);
//# sourceMappingURL=851.5aab5562.chunk.js.map