"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[3],{5851:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(9439),i=t(2791),a=t(9230),s=t(9055),o=t(4259),l=t(302),u=t(9624),d=t(184),c=function(e){var n=e.register,t=e.setValue,a=e.errors,o=e.infoErrors,c=e.index,x=(0,i.useState)(!1),p=(0,r.Z)(x,2),f=p[0],h=p[1];return(0,i.useEffect)((function(){t("info[".concat(c,"].isGenerated"),f)}),[c,f,t]),(0,d.jsxs)(s.x,{position:"relative",children:[(0,d.jsx)(l.Z,{isFlipped:f,setIsFlipped:h,register:n,setValue:t,errors:a,infoErrors:o,index:c}),(0,d.jsx)(u.Z,{isFlipped:f,setIsFlipped:h,register:n,setValue:t,index:c})]})},x=t(6173),p=t(499),f=t(6434),h=t(1816),m=function(e){var n=e.setIsFullOverlap,t=(0,p.useMatrix)(),i=t.setPartnersDate,l=t.setShowMatrix,u=(0,a.$G)("calc").t,m=(0,o.cI)({defaultValues:{info:[{date:"",name:""},{date:"",name:""}]}}),g=m.register,b=m.control,j=m.handleSubmit,v=m.setValue,Z=m.formState.errors,w=(0,o.Dq)({name:"info",control:b}).fields;return(0,d.jsxs)(s.x,{as:"form",mb:["87px"],onSubmit:j((function(e){var t=[];e.info.forEach((function(e){if(e.isGenerated)return delete e.date,delete e.name,void t.push(e);var n=e.date.split("."),i=(0,r.Z)(n,3),a=i[0],s=i[1],o=i[2];t.push({day:a,month:s,year:o,isGenerated:e.isGenerated,name:e.name})})),i(t),l(!0),n(e.isFullOverlap),document.activeElement.blur()})),children:[(0,d.jsx)(s.x,{display:[null,null,"flex"],justifyContent:"space-evenly",children:w.map((function(e,n){return(0,d.jsxs)(s.x,{children:[(0,d.jsxs)(f.su,{children:[u("tableMatrix")," ",n+1]}),(0,d.jsx)(c,{register:g,setValue:v,errors:Z,infoErrors:Z.info,index:n})]},e.id)}))}),(0,d.jsx)(h.Z,{register:g}),(0,d.jsx)(x.c1,{type:"submit",whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},children:u("personalMatrixCalc")})]})},g=t(4286),b=t(7774),j=t(1760),v=t(527),Z=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],l=(0,i.useState)([]),u=(0,r.Z)(l,2),c=u[0],x=u[1],f=(0,i.useState)([]),h=(0,r.Z)(f,2),Z=h[0],w=h[1],y=(0,i.useState)(!1),E=(0,r.Z)(y,2),F=E[0],S=E[1],G=(0,a.$G)("calc"),I=G.t,k=G.i18n,M=(0,p.useMatrix)(),V=M.partnersDate,z=M.showMatrix;return(0,i.useEffect)((function(){if(0!==V){var e=[];V.forEach((function(n,t){var r=(0,g.xE)(n,n.isGenerated);r.order="".concat(I("tableMatrix")," ").concat(t+1),e.push(r)})),x(e)}}),[V,z,I]),(0,i.useEffect)((function(){o((0,g.Tb)(c,F)),0!==c.length&&w((0,g.RT)(c,k.language))}),[k.language,F,c]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{setIsFullOverlap:S}),z&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.Z,{resultData:t}),(0,d.jsxs)(s.x,{width:[null,null,"900px"],m:"0 auto",mb:["40px","70px","110px"],children:[" ",(0,d.jsx)(v.Z,{card:Z,cardType:1})]}),(0,d.jsx)(s.x,{display:[null,null,"flex"],justifyContent:"space-between",gridGap:"40px",children:c.map((function(e,n){return(0,d.jsx)(b.Z,{partner:e,date:V[n],lastIndex:n===c.length-1},e.order)}))})]})]})}},8319:function(e,n,t){t.d(n,{II:function(){return c},jj:function(){return x},mU:function(){return d}});var r,i,a,s=t(168),o=t(4533),l=t(82),u=t(407),d=(0,l.ZP)(o.E.div)(r||(r=(0,s.Z)(["\n  position: relative;\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(249, 237, 255, 0.3) 100%\n  );\n  border: 0.5px solid #72499b;\n  border-radius: 14px;\n  padding: 36px 42px 68px;\n  backface-visibility: hidden;\n  margin-bottom: 25px;\n  height: 210px;\n  @media screen and (min-width: ",") {\n    width: 430px;\n    height: 278px;\n    margin: 0 auto 38px;\n    padding: 48px 55px 68px;\n  }\n\n"])),(function(e){return e.theme.sizes.tablet})),c=l.ZP.input(i||(i=(0,s.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.6px solid rgba(221, 197, 255, 0.6);\n  border-radius: 6px;\n  width: 100%;\n  height: 45px;\n  padding: 10px 14px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.19;\n\n  color: ",";\n  margin-bottom: 10px;\n  ","\n  &:focus-within {\n    border: 2px solid rgba(221, 197, 255, 0.8);\n    outline: none;\n  }\n\n  @media screen and (min-width: ",") {\n    height: 57px;\n    font-size: 21px;\n  }\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.secondText}),u.Dh,(function(e){return e.theme.sizes.tablet})),x=l.ZP.p(a||(a=(0,s.Z)(["\n  text-align: center;\n  color: #a40b8a;\n  font-size: 20px;\n  margin: 0 auto;\n"])))}}]);
//# sourceMappingURL=3.e8f44e6c.chunk.js.map