"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[989],{7989:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a=t(9439),i=t(2791),o=t(9055),s=t(9230),d=t(922),l=t(1760),u=t(7774),c=t(1413),p=t(4259),x=t(1163),h=t(101),m=t(8319),f=t(168),g=t(82),b=t(376),v=(0,g.ZP)(b.L)(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.8px solid rgba(221, 197, 255, 0.6);\n  border-radius: 8px;\n  font-family: 'Cormorant';\n  font-size: 18px;\n  line-height: 22px;\n  padding: 11px 15px;\n  width: calc(100% / 2);\n"]))),y=t(184),w=function(n){var e=n.setIsFullOverlap,t=(0,s.$G)("calc").t,r=(0,d.useMatrix)(),i=r.setPartnersDate,l=r.setShowMatrix,u=[{name:"12 \u043a\u043e\u0434",code:"12"},{name:"13 \u043a\u043e\u0434",code:"13"},{name:"14 \u043a\u043e\u0434",code:"14"},{name:"15 \u043a\u043e\u0434",code:"15"}],f=(0,p.cI)(),g=f.register,b=f.control,w=f.handleSubmit,j=f.setValue,Z=f.formState.errors;return(0,y.jsxs)(x.Z,{handleSubmit:w((function(n){var t=n.date.split("."),r=(0,a.Z)(t,3),o=r[0],s=r[1],d=r[2];i([{day:o,month:s,year:d,name:n.name},{demonMatrix:n.demonMatrix}]),l(!0),e(n.isFullOverlap),document.activeElement.blur()})),register:g,children:[(0,y.jsxs)(o.x,{display:"flex",flexWrap:"wrap",gridGap:["6px"],children:[(0,y.jsx)(h.I,(0,c.Z)({type:"text",width:["calc((100% - 12px) / 2)",null,"calc((100% - 12px) / 2)"],placeholder:t("personalMatrixNamePlaceholder"),mb:["5px"]},g("name"))),(0,y.jsx)(p.Qr,{name:"demonMatrix",control:b,defaultValue:"12",render:function(n){var e=n.field;n.fieldState;return(0,y.jsx)(v,{id:e.name,value:e.value,optionValue:"code",optionLabel:"name",placeholder:"Select a City",options:u,onChange:function(n){return e.onChange(n.value)}})}}),(0,y.jsx)(h.I,(0,c.Z)({width:["100%",null,"100%"],type:"text",placeholder:t("personalMatrixDatePlaceholder")},g("date",{onChange:function(n){var e=n.target.value.replace(/\D/g,"");e.length>8&&(e=e.substr(0,8)),e.length>4&&(e=e.substr(0,4)+"."+e.substr(4)),e.length>2&&(e=e.substr(0,2)+"."+e.substr(2)),j("date",e)},required:{value:!0,message:t("personalMatrixDateRequired")},pattern:{value:/^\d{2}\.\d{2}\.\d{4}$/,message:t("personalMatrixDatePattern")}})))]}),Z.date&&(0,y.jsx)(m.jj,{children:Z.date.message})]})},j=t(4286),Z={topLeft1:3,month:3,topRight1:6,day:4,center:5,year:9,bottomLeft1:1,bottom1:2,bottomRight1:3},M={topLeft1:4,month:4,topRight1:8,day:5,center:7,year:12,bottomLeft1:1,bottom1:3,bottomRight1:4},k={topLeft1:5,month:5,topRight1:10,day:6,center:9,year:15,bottomLeft1:1,bottom1:4,bottomRight1:5},S={topLeft1:6,month:6,topRight1:12,day:7,center:11,year:18,bottomLeft1:1,bottom1:5,bottomRight1:6},C=function(n){switch(n){case"12":return(0,j.xE)(Z,!0);case"13":return(0,j.xE)(M,!0);case"14":return(0,j.xE)(k,!0);case"15":return(0,j.xE)(S,!0)}},L=function(){var n=(0,i.useState)(!1),e=(0,a.Z)(n,2),t=e[0],r=e[1],c=(0,i.useState)([]),p=(0,a.Z)(c,2),x=p[0],h=p[1],m=(0,d.useMatrix)(),f=m.partnersDate,g=m.showMatrix,b=(0,i.useState)(),v=(0,a.Z)(b,2),Z=v[0],M=v[1],k=(0,s.$G)("calc").t;return(0,i.useEffect)((function(){if(0!==f.length){var n=[(0,j.xE)(f[0],!1),C(f[1].demonMatrix)];n[0].order="".concat(k("tableMatrix")," 1"),n[0].isGenerated=!1,n[1].order="".concat(k("tableMatrix")," 2"),n[1].isGenerated=!0,h(n)}}),[f,k]),(0,i.useEffect)((function(){M((0,j.Tb)(x,t))}),[x,t]),(0,y.jsxs)(o.x,{children:[(0,y.jsx)(w,{setIsFullOverlap:r}),g&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{resultData:Z}),(0,y.jsx)(o.x,{display:[null,null,"flex"],justifyContent:"center",gridGap:"40px",mb:["60px","70px"],children:x.map((function(n,e){return(0,y.jsx)(u.Z,{partner:n,date:f[e]},n.order)}))})]})]})}},101:function(n,e,t){t.d(e,{I:function(){return d},v:function(){return l}});var r,a,i=t(168),o=t(82),s=t(407),d=o.ZP.input(r||(r=(0,i.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.8px solid rgba(221, 197, 255, 0.6);\n  border-radius: 8px;\n  font-family: 'Cormorant';\n  font-size: 18px;\n  line-height: 22px;\n  padding: 11px;\n  color: rgba(38, 38, 38, 0.9);\n  width: 110px;\n  @media screen and (min-width: ",") {\n    width: 130px;\n    height: 47px;\n  }\n  ","\n"])),(function(n){return n.theme.sizes.desktop}),s.bK),l=o.ZP.button(a||(a=(0,i.Z)(["\n  border-radius: 50%;\n  background-color: #e192c1;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  &:is(:hover, :focus) {\n    transform: scale(1.05);\n  }\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(n){return n.theme.sizes.desktop}))},8319:function(n,e,t){t.d(e,{II:function(){return c},jj:function(){return p},mU:function(){return u}});var r,a,i,o=t(168),s=t(4533),d=t(82),l=t(407),u=(0,d.ZP)(s.E.div)(r||(r=(0,o.Z)(["\n  position: relative;\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(249, 237, 255, 0.3) 100%\n  );\n  border: 0.5px solid #72499b;\n  border-radius: 14px;\n  padding: 36px 42px 68px;\n  backface-visibility: hidden;\n  margin-bottom: 25px;\n  height: 210px;\n  @media screen and (min-width: ",") {\n    width: 430px;\n    height: 278px;\n    margin: 0 auto 38px;\n    padding: 48px 55px 68px;\n  }\n\n"])),(function(n){return n.theme.sizes.tablet})),c=d.ZP.input(a||(a=(0,o.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.6px solid rgba(221, 197, 255, 0.6);\n  border-radius: 6px;\n  width: 100%;\n  height: 45px;\n  padding: 10px 14px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.19;\n\n  color: ",";\n  margin-bottom: 10px;\n  ","\n  &:focus-within {\n    border: 2px solid rgba(221, 197, 255, 0.8);\n    outline: none;\n  }\n\n  @media screen and (min-width: ",") {\n    height: 57px;\n    font-size: 21px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.colors.secondText}),l.Dh,(function(n){return n.theme.sizes.tablet})),p=d.ZP.p(i||(i=(0,o.Z)(["\n  text-align: center;\n  color: #a40b8a;\n  font-size: 20px;\n  margin: 0 auto;\n"])))},1163:function(n,e,t){var r=t(9230),a=t(9055),i=t(6173),o=t(1816),s=t(184);e.Z=function(n){var e=n.handleSubmit,t=n.children,d=n.register,l=(0,r.$G)("calc").t;return(0,s.jsxs)(a.x,{as:"form",onSubmit:e,mb:["40px","60px"],children:[(0,s.jsxs)(a.x,{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)",border:"1px solid #72499B",borderRadius:"14px",maxWidth:["370px",null,"500px"],px:"40px",py:"36px",m:["0 auto 40px","0 auto 60px"],children:[(0,s.jsx)(i.$K,{width:"100%",children:l("personalMatrixBoxTitle")}),t]}),(0,s.jsx)(o.Z,{register:d}),(0,s.jsx)(i.c1,{type:"submit",whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},children:l("personalMatrixCalc")})]})}}}]);
//# sourceMappingURL=989.613a5163.chunk.js.map