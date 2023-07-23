"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[443],{302:function(n,e,t){var i=t(1413),r=t(9230),o=t(6173),a=t(8319),s=t(184);e.Z=function(n){var e=n.isFlipped,t=n.setIsFlipped,c=n.register,l=n.setValue,d=n.errors,h=n.index,p=n.infoErrors,x=(0,r.$G)("calc").t,u=!!p&&!!p[h];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.mU,{initial:{rotateY:0},animate:{rotateY:e?180:0},transition:{duration:.6},children:[!e&&(0,s.jsx)(o.Od,{whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},onClick:function(){return t(!0)},type:"button",children:(0,s.jsx)(o.Dp,{})}),(0,s.jsx)(o.$K,{children:x("personalMatrixBoxTitle")}),(0,s.jsx)(a.II,(0,i.Z)({type:"text",placeholder:x("personalMatrixNamePlaceholder"),mb:["5px"]},c("".concat(h||0===h?"info.".concat(h,".name"):"name")))),(0,s.jsx)(a.II,(0,i.Z)({type:"text",placeholder:x("personalMatrixDatePlaceholder")},c("".concat(h||0===h?"info.".concat(h,".date"):"date"),{onChange:function(n){var e=n.target.value.replace(/\D/g,"");e.length>8&&(e=e.substr(0,8)),e.length>4&&(e=e.substr(0,4)+"."+e.substr(4)),e.length>2&&(e=e.substr(0,2)+"."+e.substr(2)),l("".concat(h||0===h?"info.".concat(h,".date"):"date"),e)},required:{value:!e,message:x("personalMatrixDateRequired")},pattern:{value:/^\d{2}\.\d{2}\.\d{4}$/,message:x("personalMatrixDatePattern")}}))),d.date&&(0,s.jsx)(a.jj,{children:d.date.message}),u&&(0,s.jsx)(a.jj,{children:p[h].date.message})]})})}},9624:function(n,e,t){t.d(e,{Z:function(){return M}});var i,r,o=t(1413),a=t(9230),s=t(6173),c=t(168),l=t(4533),d=t(82),h=t(2791),p=["title","titleId"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},x.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function f(n,e){var t=n.title,o=n.titleId,a=u(n,p);return h.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 15.315 15.315",ref:e,"aria-labelledby":o},a),t?h.createElement("title",{id:o},t):null,h.createElement("path",{d:"M3.669 3.71h.696c.256 0 .464-.165.464-.367V.367C4.829.164 4.621 0 4.365 0h-.696c-.255 0-.463.164-.463.367v2.976c-.001.202.207.367.463.367zM10.95 3.71h.696c.256 0 .464-.165.464-.367V.367c0-.203-.208-.367-.464-.367h-.696c-.256 0-.463.164-.463.367v2.976c0 .202.207.367.463.367z",style:{fill:"#030104"}}),i||(i=h.createElement("path",{d:"M14.512 1.42h-1.846v2.278c0 .509-.458.923-1.021.923h-.696c-.563 0-1.021-.414-1.021-.923V1.42H5.384v2.278c0 .509-.458.923-1.021.923h-.694c-.562 0-1.02-.414-1.02-.923V1.42H.803a.558.558 0 0 0-.557.557V14.76c0 .307.25.555.557.555h13.709a.555.555 0 0 0 .557-.555V1.977a.557.557 0 0 0-.557-.557zm-.196 8.07v4.349a.176.176 0 0 1-.175.176H1.174a.176.176 0 0 1-.175-.176V5.961c0-.096.078-.176.175-.176H14.141c.097 0 .175.08.175.176V9.49z"})),r||(r=h.createElement("path",{d:"M2.327 8.93h1.735v1.736H2.327zM5.28 8.93h1.735v1.736H5.28zM8.204 8.93h1.734v1.736H8.204zM11.156 8.93h1.736v1.736h-1.736zM2.363 11.432h1.736v1.736H2.363zM5.317 11.432h1.735v1.736H5.317zM8.241 11.432h1.734v1.736H8.241zM11.194 11.432h1.735v1.736h-1.735zM8.215 6.47H9.95v1.735H8.215zM11.17 6.47h1.734v1.735H11.17z"})))}var m,g,b,j,w=h.forwardRef(f),z=(t.p,(0,d.ZP)(l.E.div)(m||(m=(0,c.Z)(["\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(249, 237, 255, 0.3) 100%\n  );\n  border: 0.5px solid #72499b;\n  border-radius: 14px;\n  padding: 36px 58px 68px;\n  backface-visibility: hidden;\n  margin-bottom: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 210px;\n  @media screen and (min-width: ",") {\n    width: 430px;\n    height: 278px;\n    left: calc(50% - (430px / 2));\n    padding: 48px 55px 68px;\n  }\n"])),(function(n){return n.theme.sizes.tablet}))),y=(0,d.ZP)(w)(g||(g=(0,c.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: #fff;\n"]))),v=d.ZP.ul(b||(b=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  align-items: center;\n  justify-content: center;\n"]))),Z=d.ZP.input(j||(j=(0,c.Z)(["\n  padding-left: 10px;\n  width: 67px;\n  height: 35px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.31;\n  color: rgba(73, 73, 73, 0.8);\n\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 0.6px solid rgba(221, 197, 255, 0.6);\n  border-radius: 5px;\n  &:focus-within {\n    border: 2px solid rgba(221, 197, 255, 0.8);\n    outline: none;\n  }\n  @media screen and (min-width: ",") {\n    width: 88px;\n    height: 47px;\n    font-size: 21px;\n    line-height: 1.33;\n  }\n"])),(function(n){return n.theme.fonts.digits}),(function(n){return n.theme.sizes.tablet})),k=t(184),P=[{name:"topLeft1"},{name:"month"},{name:"topRight1"},{name:"day"},{name:"center"},{name:"year"},{name:"bottomLeft1"},{name:"bottom1"},{name:"bottomRight1"}],M=function(n){var e=n.isFlipped,t=n.setIsFlipped,i=n.register,r=n.setValue,c=n.index,l=(0,a.$G)("calc").t,d=function(n){var e=n.target,t=e.name,i=e.value;r(t,i>22?22:i)};return(0,k.jsxs)(z,{initial:{rotateY:180},animate:{rotateY:e?0:180},transition:{duration:.6},children:[e&&(0,k.jsx)(s.Od,{whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},onClick:function(){return t(!1)},type:"button",children:(0,k.jsx)(y,{})}),(0,k.jsx)(s.$K,{children:l("personalMatrixBoxTitle")}),(0,k.jsx)(v,{children:P.map((function(n){var e=n.name;return(0,k.jsx)("li",{children:(0,k.jsx)(Z,(0,o.Z)({type:"number"},i("".concat(c||0===c?"info.".concat(c,".").concat(e):e),{max:{value:22},onChange:d})))},e)}))})]})}},6889:function(n,e,t){t.d(e,{Bj:function(){return P},Kc:function(){return H},Km:function(){return B},P5:function(){return k},Rm:function(){return w},aV:function(){return v},d2:function(){return y},dG:function(){return z},fA:function(){return F},fz:function(){return C},gL:function(){return Z},t_:function(){return V},v3:function(){return M},vH:function(){return O}});var i,r,o,a,s,c,l,d,h,p,x,u,f,m,g=t(168),b=t(82),j=t(407),w=b.ZP.button(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc((100% - 5px) / 2);\n  height: 34px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.19;\n  text-transform: uppercase;\n\n  color: ",";\n\n  background-color: ",";\n  border-radius: 10px;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n  @media screen and (min-width: ",") {\n    width: calc((100% - 10px) / 2);\n    height: 34px;\n    font-size: 20px;\n    line-height: 1.2;\n    height: 48px;\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.colors.activeBtn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.sizes.tablet}),j.Dh,j.$_,j.AF,j.bK,j.Oq),z=b.ZP.p(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 48px;\n\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 237, 255, 0.7) 100%);\n  border: 0.7px solid ",";\n  border-radius: 8px;\n  margin-bottom: 4px;\n\n  font-family: ",";\n  font-style: italic;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.69;\n  letter-spacing: 0.01em;\n\n  color: ",";\n  @media screen and (min-width: ",") {\n    font-size: 29px;\n    height: 70px;\n    margin-bottom: 7px;\n    border-radius: 15px;\n    border: 1px solid #72499b;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.tablet})),y=b.ZP.p(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  height: 33px;\n  min-width: 75px;\n  border-right: 0.5px solid ",";\n\n  font-family: ",";\n  font-style: italic;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.24;\n  letter-spacing: 0.01em;\n\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    min-width: 141px;\n    height: 52px;\n    font-size: 26px;\n    border-right: 1px solid ",";\n  }\n  @media screen and (min-width: ",") {\n    min-width: 190px;\n  }\n  ",";\n  ","\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.sizes.desktop}),j.GQ,j.Cg),v=b.ZP.ul(a||(a=(0,g.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.5px solid ",";\n  border-radius: 12px;\n  @media screen and (min-width: ",") {\n    border-radius: 22px;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.colors.text})),Z=b.ZP.li(s||(s=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  padding-left: 13px;\n  border-bottom: 0.5px solid #9071af;\n  @media screen and (min-width: ",") {\n    border-bottom: 1px solid #9071af;\n  }\n  ","\n"])),(function(n){return n.theme.sizes.tablet}),j.Cg),k=b.ZP.button(c||(c=(0,g.Z)(["\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin-right: 15px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 1.18;\n  color: ",";\n  cursor: pointer;\n  ","\n  transition: all 250ms linear;\n  &:hover,\n  &:focus {\n    scale: 1.15;\n  }\n  @media screen and (min-width: ",") {\n    width: 30px;\n    height: 30px;\n    font-size: 20px;\n  }\n"])),(function(n){return n.theme.fonts.digits}),(function(n){return n.theme.colors.main}),j.$_,(function(n){return n.theme.sizes.tablet})),P=b.ZP.p(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 27px;\n  flex: 1;\n  min-width: 75px;\n\n  border-right: 0.5px solid #9071af;\n\n  font-family: ",";\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 14px;\n\n  color: #464646;\n  @media screen and (min-width: ",") {\n    height: 52px;\n    min-width: 141px;\n    border-right: 1px solid #9071af;\n    font-size: 22px;\n  }\n  @media screen and (min-width: ",") {\n    min-width: 190px;\n  }\n  ",";\n  ","\n  ","\n  ","\n"])),(function(n){return n.theme.fonts.digits}),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop}),j.GQ,j.Cg,j.bK,j.cp),M=b.ZP.span(d||(d=(0,g.Z)(["\n  color: #9072af;\n  font-family: Cormorant;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.18;\n  letter-spacing: 0.01em;\n  text-align: center;\n  @media screen and (min-width: ",") {\n    font-size: 22px;\n  }\n  @media screen and (min-width: ",") {\n    font-size: 26px;\n  }\n"])),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop})),C=(0,b.ZP)(M)(h||(h=(0,g.Z)(["\n  font-weight: 400;\n  display: block;\n  letter-spacing: 100%;\n"]))),H=b.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 20px 20px 10px;\n  background-image: linear-gradient(to right, #9072af 10%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 10px 2px;\n  background-repeat: repeat-x;\n  @media screen and (min-width: ",") {\n    padding: 0px 30px 30px 20px;\n  }\n  @media screen and (min-width: ",") {\n  }\n"])),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop})),O=b.ZP.p(x||(x=(0,g.Z)(["\n  color: #72499b;\n  text-align: center;\n  font-family: Cormorant;\n  font-size: 28px;\n  font-style: italic;\n  font-weight: 400;\n  line-height: 1.68;\n  letter-spacing: 0.208px;\n  @media screen and (min-width: ",") {\n    font-size: 32px;\n  }\n  @media screen and (min-width: ",") {\n  }\n"])),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop})),B=b.ZP.p(u||(u=(0,g.Z)(["\n  color: #4b216c;\n  font-family: Cormorant;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 0.82;\n  letter-spacing: 0.077px;\n  text-transform: lowercase;\n  padding: 15px 12px;\n  background-image: linear-gradient(to right, #9072af 10%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 10px 2px;\n  background-repeat: repeat-x;\n  text-align: right;\n  @media screen and (min-width: ",") {\n    padding: 15px 22px 15px 85px;\n    font-size: 22px;\n  }\n  @media screen and (min-width: ",") {\n  }\n"])),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop})),V=b.ZP.p(f||(f=(0,g.Z)(["\n  color: #4b216c;\n  font-family: Cormorant;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.1;\n  letter-spacing: 0.084px;\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n  }\n  @media screen and (min-width: ",") {\n  }\n"])),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop})),F=(0,b.ZP)(V)(m||(m=(0,g.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.68;\n  letter-spacing: 0.103px;\n  @media screen and (min-width: ",") {\n    font-size: 22px;\n  }\n  @media screen and (min-width: ",") {\n  }\n"])),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.sizes.desktop}))},527:function(n,e,t){t.d(e,{Z:function(){return h}});var i=t(9055),r=t(9230),o=t(6889),a=t(2791),s=t(2676),c=(t(8360),t(184)),l=function(n){var e=n.tip,t=e.goal,r=e.bodyPart,a=e.purpose,s=e.internalCondition,l=e.disturbance,d=e.archangel,h=e.verb,p=e.bgColor,x=e.img,u=e.chakraName;return(0,c.jsxs)(i.x,{backgroundImage:p,border:"0.6px solid #72499B",borderRadius:"8px",py:["15px"],maxWidth:["280px","500px"],children:[(0,c.jsxs)(o.Kc,{children:[(0,c.jsx)("img",{src:x,alt:u}),(0,c.jsx)(o.vH,{children:u})]}),(0,c.jsx)(o.Km,{children:t}),(0,c.jsxs)(i.x,{p:["15px 15px 25px"],display:"flex",flexDirection:"column",gridGap:["6px","10px"],children:[(0,c.jsxs)(o.t_,{children:[(0,c.jsx)(o.fA,{as:"span",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c: "})," ",r]}),(0,c.jsxs)(o.t_,{children:[(0,c.jsx)(o.fA,{as:"span",children:"\u0424\u0443\u043d\u043a\u0446\u0456\u044f: "})," ",a]}),s&&(0,c.jsxs)(o.t_,{children:[(0,c.jsx)(o.fA,{as:"span",children:"\u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0439 \u0441\u0442\u0430\u043d: "})," ",s]}),l&&(0,c.jsxs)(o.t_,{children:[(0,c.jsx)(o.fA,{as:"span",children:"\u041f\u043e\u0440\u0443\u0448\u0435\u043d\u043d\u044f: "})," ",l]}),(0,c.jsxs)(o.t_,{children:[(0,c.jsx)(o.fA,{as:"span",children:"\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b: "})," ",d]}),h&&(0,c.jsxs)(o.t_,{children:[(0,c.jsx)(o.fA,{as:"span",children:"\u0414\u0456\u0454\u0441\u043b\u043e\u0432\u043e: "})," ",h]})]})]})},d=function(n){var e=n.index,t=n.partners,i=n.chakraElement,r=n.total,d=n.length,h=(0,a.useRef)(null),p=i.chakraName,x=i.physics,u=i.energy,f=i.emotions,m=i.color,g=i.partner1,b=i.partner2,j=i.couple,w=i.tip;return(0,c.jsxs)(o.gL,{border:e!==d-1||r?null:["none","none","none"],children:[(0,c.jsx)(o.P5,{type:"button",onClick:function(n){return h.current.toggle(n)},bg:m,children:"!"}),(0,c.jsx)(s.T,{ref:h,children:(0,c.jsx)(l,{tip:w})}),(0,c.jsx)(o.Bj,{flex:"2",justifyContent:"flex-start",fontFamily:"bona",children:p}),(0,c.jsx)(o.Bj,{children:t?g:u}),(0,c.jsx)(o.Bj,{children:t?b:x}),(0,c.jsx)(o.Bj,{border:["none","none","none"],children:t?j:f})]},p)},h=function(n){var e=n.card,t=n.cardType,a=(0,r.$G)("calc").t,s=e.cardName,l=e.columnName,h=e.chakraList,p=e.total,x=e.id,u=e.partners,f=void 0!==u&&u;return(0,c.jsx)(c.Fragment,{children:t===x&&(0,c.jsxs)(i.x,{children:[(0,c.jsx)(o.dG,{children:s}),(0,c.jsxs)(i.x,{display:"flex",bg:"rgba(255, 255, 255, 0.7)",border:["0.5px solid #72499B"],borderRadius:["7px","13px"],mb:["3px","6px"],children:[(0,c.jsx)(o.d2,{flex:"2",children:"\u0427\u0430\u043a\u0440\u0430"}),l.map((function(n,e){return(0,c.jsx)(o.d2,{border:e===l.length-1?["none","none","none"]:null,children:n},n)}))]}),(0,c.jsxs)(o.aV,{children:[h.map((function(n,e){return(0,c.jsx)(d,{index:e,partners:f,length:h.length,chakraElement:n,total:p},n.chakraName)})),p&&(0,c.jsxs)(o.gL,{border:["none","none","none"],children:[(0,c.jsx)(o.Bj,{fontFamily:"bona",children:a("result")}),(0,c.jsx)(o.Bj,{border:["none","none","none"],minWidth:["225px","423px","570px"],children:p})]})]})]})})}}}]);
//# sourceMappingURL=443.faa169e7.chunk.js.map