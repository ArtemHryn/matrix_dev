"use strict";(self.webpackChunkmatrix_dev=self.webpackChunkmatrix_dev||[]).push([[815],{7989:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a,r=t(9439),i=t(2791),o=t(9055),l=t(9230),s=t(922),d=t(1760),c=t(7774),x=t(1413),p=t(1134),h=t(1163),u=t(101),m=t(8319),g=t(168),f=t(82),b=t(376),j=(0,f.ZP)(b.L)(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.8px solid rgba(221, 197, 255, 0.6);\n  border-radius: 8px;\n  font-family: 'Cormorant';\n  font-size: 18px;\n  line-height: 22px;\n  padding: 11px 15px;\n  width: calc(100% / 2);\n"]))),y=t(184),Z=function(e){var n=e.setIsFullOverlap,t=e.setIsMethod2023,a=(0,l.$G)("calc").t,i=(0,s.useMatrix)(),d=i.setPartnersDate,c=i.setShowMatrix,g=[{name:"12 \u043a\u043e\u0434",code:"12"},{name:"13 \u043a\u043e\u0434",code:"13"},{name:"14 \u043a\u043e\u0434",code:"14"},{name:"15 \u043a\u043e\u0434",code:"15"},{name:"4 $",code:"m"},{name:"3 $",code:"w"}],f=(0,p.cI)(),b=f.register,Z=f.control,w=f.handleSubmit,k=f.setValue,v=f.formState.errors;return(0,y.jsxs)(h.Z,{handleSubmit:w((function(e){var a=e.date.split("."),i=(0,r.Z)(a,3),o=i[0],l=i[1],s=i[2];d([{day:o,month:l,year:s,name:e.name},{demonMatrix:e.demonMatrix}]),c(!0),n(e.isFullOverlap),t(e.method2023),document.activeElement.blur()})),register:b,setValue:k,control:Z,children:[(0,y.jsxs)(o.x,{display:"flex",flexWrap:"wrap",gridGap:["6px"],children:[(0,y.jsx)(u.I,(0,x.Z)({type:"text",width:["calc((100% - 12px) / 2)",null,"calc((100% - 12px) / 2)"],placeholder:a("personalMatrixNamePlaceholder"),mb:["5px"]},b("name"))),(0,y.jsx)(p.Qr,{name:"demonMatrix",control:Z,defaultValue:"12",render:function(e){var n=e.field;e.fieldState;return(0,y.jsx)(j,{id:n.name,value:n.value,optionValue:"code",optionLabel:"name",placeholder:"Select a City",options:g,onChange:function(e){return n.onChange(e.value)}})}}),(0,y.jsx)(u.I,(0,x.Z)({width:["100%",null,"100%"],type:"text",placeholder:a("personalMatrixDatePlaceholder")},b("date",{onChange:function(e){var n=e.target.value.replace(/\D/g,"");n.length>8&&(n=n.substr(0,8)),n.length>4&&(n=n.substr(0,4)+"."+n.substr(4)),n.length>2&&(n=n.substr(0,2)+"."+n.substr(2)),k("date",n)},required:{value:!0,message:a("personalMatrixDateRequired")},pattern:{value:/^\d{2}\.\d{2}\.\d{4}$/,message:a("personalMatrixDatePattern")}})))]}),v.date&&(0,y.jsx)(m.jj,{children:v.date.message})]})},w=t(4286),k={topLeft1:3,month:3,topRight1:6,day:4,center:5,year:9,bottomLeft1:1,bottom1:2,bottomRight1:3},v={topLeft1:4,month:4,topRight1:8,day:5,center:7,year:12,bottomLeft1:1,bottom1:3,bottomRight1:4},D={topLeft1:5,month:5,topRight1:10,day:6,center:9,year:15,bottomLeft1:1,bottom1:4,bottomRight1:5},P={topLeft1:6,month:6,topRight1:12,day:7,center:11,year:18,bottomLeft1:1,bottom1:5,bottomRight1:6},R={topLeft1:3,month:12,topRight1:21,day:4,center:13,year:22,bottomLeft1:7,bottom1:7,bottomRight1:7},M={topLeft1:4,month:13,topRight1:22,day:3,center:12,year:21,bottomLeft1:7,bottom1:7,bottomRight1:7},z=function(e){switch(e){case"12":return(0,w.allData)({date:k,isGenerated:!0});case"13":return(0,w.allData)({date:v,isGenerated:!0});case"14":return(0,w.allData)({date:D,isGenerated:!0});case"15":return(0,w.allData)({date:P,isGenerated:!0});case"m":return(0,w.allData)({date:R,isGenerated:!0});case"w":return(0,w.allData)({date:M,isGenerated:!0})}},I=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1],x=(0,i.useState)(!1),p=(0,r.Z)(x,2),h=p[0],u=p[1],m=(0,i.useState)([]),g=(0,r.Z)(m,2),f=g[0],b=g[1],j=(0,s.useMatrix)(),k=j.partnersDate,v=j.showMatrix,D=(0,i.useState)(),P=(0,r.Z)(D,2),R=P[0],M=P[1],I=(0,l.$G)("calc").t;return(0,i.useEffect)((function(){if(0!==k.length){var e=[(0,w.allData)({date:k[0]}),z(k[1].demonMatrix)];e[0].order="".concat(I("tableMatrix")," 1"),e[0].isGenerated=!1,e[1].order="".concat(I("tableMatrix")," 2"),e[1].isGenerated=!0,b(e)}}),[k,I]),(0,i.useEffect)((function(){M((0,w.getCompatData)(f,t,h))}),[f,t,h]),(0,y.jsxs)(o.x,{children:[(0,y.jsx)(Z,{setIsFullOverlap:a,setIsMethod2023:u}),v&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.Z,{resultData:R}),(0,y.jsx)(o.x,{display:["flex"],justifyContent:"center",flexDirection:["column","column","row"],gridGap:["20px","40px"],mb:["60px","70px"],children:f.map((function(e,n){return(0,y.jsx)(c.Z,{partner:e,date:k[n]},e.order)}))})]})]})}},101:function(e,n,t){t.d(n,{I:function(){return s},v:function(){return d}});var a,r,i=t(168),o=t(82),l=t(407),s=o.ZP.input(a||(a=(0,i.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.8px solid rgba(221, 197, 255, 0.6);\n  border-radius: 8px;\n  font-family: 'Cormorant';\n  font-size: 18px;\n  line-height: 22px;\n  padding: 11px;\n  color: rgba(38, 38, 38, 0.9);\n  width: 110px;\n  @media screen and (min-width: ",") {\n    width: 130px;\n    height: 47px;\n  }\n  ","\n"])),(function(e){return e.theme.sizes.desktop}),l.bK),d=o.ZP.button(r||(r=(0,i.Z)(["\n  border-radius: 50%;\n  background-color: #e192c1;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  &:is(:hover, :focus) {\n    transform: scale(1.05);\n  }\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(e){return e.theme.sizes.desktop}))},8319:function(e,n,t){t.d(n,{II:function(){return x},jj:function(){return p},mU:function(){return c}});var a,r,i,o=t(168),l=t(2321),s=t(82),d=t(407),c=(0,s.ZP)(l.E.div)(a||(a=(0,o.Z)(["\n  position: relative;\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.3) 0%,\n    rgba(249, 237, 255, 0.3) 100%\n  );\n  border: 0.5px solid #72499b;\n  border-radius: 14px;\n  padding: 36px 42px 68px;\n  backface-visibility: hidden;\n  margin-bottom: 25px;\n  height: 210px;\n  @media screen and (min-width: ",") {\n    width: 430px;\n    height: 278px;\n    margin: 0 auto 38px;\n    padding: 48px 55px 68px;\n  }\n\n"])),(function(e){return e.theme.sizes.tablet})),x=s.ZP.input(r||(r=(0,o.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.6px solid rgba(221, 197, 255, 0.6);\n  border-radius: 6px;\n  width: 100%;\n  height: 45px;\n  padding: 10px 14px;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.19;\n\n  color: ",";\n  margin-bottom: 10px;\n  ","\n  &:focus-within {\n    border: 2px solid rgba(221, 197, 255, 0.8);\n    outline: none;\n  }\n\n  @media screen and (min-width: ",") {\n    height: 57px;\n    font-size: 21px;\n  }\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.secondText}),d.Dh,(function(e){return e.theme.sizes.tablet})),p=s.ZP.p(i||(i=(0,o.Z)(["\n  text-align: center;\n  color: #a40b8a;\n  font-size: 20px;\n  margin: 0 auto;\n"])))},2461:function(e,n,t){t.d(n,{Z:function(){return z}});var a,r,i,o,l,s,d,c=t(9230),x=t(9055),p=t(168),h=t(82),u=t(407),m=h.ZP.p(a||(a=(0,p.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.06;\n\n  letter-spacing: 0.01em;\n\n  color: ",";\n  ","\n  ","\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.text}),u.Dh,u.cp,u.bK),g=h.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 16px;\n  padding-left: 11px;\n  ","\n"])),u.Dh),f=h.ZP.span(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 0.63;\n  letter-spacing: 0.01em;\n\n  color: #000000;\n\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.7px solid #9071af;\n  border-radius: 50%;\n  ","\n  ","\n"])),(function(e){return e.theme.fonts.digits}),u.bK,u.$_),b=(0,h.ZP)(f)(o||(o=(0,p.Z)(["\n  width: 41px;\n  height: 41px;\n  background-color: #f3e8ff;\n"]))),j=t(4286),y=t(184),Z=function(e){var n=e.name1,t=e.name2,a=e.name3,r=e.el1,i=e.el2,o=e.el3,l=e.el4,s=(0,j.checkNum)(r+i),d=(0,j.checkNum)(o+l),c=(0,j.checkNum)(s+d);return(0,y.jsxs)(x.x,{py:"12px",backgroundImage:"linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);",backgroundPosition:"bottom",backgroundSize:"10px 2px",backgroundRepeat:"repeat-x",children:[(0,y.jsx)(m,{fontWeight:"500",fontSize:"21px",mb:"15px",children:n}),(0,y.jsxs)(x.x,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,y.jsxs)(x.x,{children:[(0,y.jsxs)(g,{mb:"8px",children:[(0,y.jsx)("li",{children:(0,y.jsx)(m,{width:"50px",children:t})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:r})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:i})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:s})})]}),(0,y.jsxs)(g,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(m,{width:"50px",children:a})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:o})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:l})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:d})})]})]}),(0,y.jsx)(b,{as:"p",children:c})]})]})},w=t(1413),k=t(5987),v=h.ZP.p(l||(l=(0,p.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 1.06;\n\n  letter-spacing: 0.01em;\n\n  color: ",";\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.text})),D=h.ZP.ul(s||(s=(0,p.Z)(["\n  align-items: center;\n  display: flex;\n  gap: 16px;\n  ","\n"])),u.eC),P=["name","el1","el2","el3","isKey"],R=function(e){var n=e.name,t=e.el1,a=e.el2,r=e.el3,i=e.isKey,o=(0,k.Z)(e,P);return(0,y.jsxs)(x.x,(0,w.Z)((0,w.Z)({py:"17px",backgroundImage:"linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);",backgroundPosition:"bottom",backgroundSize:"10px 2px",backgroundRepeat:"repeat-x",display:"flex",justifyContent:"space-between",alignItems:"center"},o),{},{children:[(0,y.jsx)(v,{children:n}),(0,y.jsxs)(D,{gridGap:i?"21px":null,children:[(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:t})}),(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:a})}),i?(0,y.jsx)("li",{children:(0,y.jsx)(f,{children:r})}):(0,y.jsx)("li",{children:(0,y.jsx)(b,{children:r})})]})]}))},M=h.ZP.p(d||(d=(0,p.Z)(["\n  font-family: 'Cormorant';\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 26px;\n  text-align: center;\n  color: #664982;\n\n  padding-bottom: 16px;\n  background-image: linear-gradient(\n    to right,\n    #9072af 10%,\n    rgba(255, 255, 255, 0) 0%\n  );\n  background-position: bottom;\n  background-size: 15px 2px;\n  background-repeat: repeat-x;\n"]))),z=function(e){var n=e.matrixData,t=e.title,a=void 0===t?null:t,r=e.display,i=void 0===r?null:r,o=(0,c.$G)("calc").t,l=n.bottom1,s=n.month,d=n.day,p=n.year,h=n.personal,u=n.bottomRight1,m=n.topLeft1,g=n.topRight1,f=n.bottomLeft1,b=n.social,j=n.spirit,w=n.planet,k=n.center,v=n.center2,D=n.insidePower;return isNaN(k)||!m?null:(0,y.jsxs)(x.x,{px:"35px",py:"25px",backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%)",border:"0.6px solid #72499B",borderRadius:"18px",display:i,minWidth:"337px",children:[a&&(0,y.jsx)(M,{children:a}),(0,y.jsx)(Z,{name1:o("assignmentTabledthrirdNameDesk1"),name2:o("assignmentTabledfirstName1"),name3:o("assignmentTabledsecondName1"),el1:s,el2:l,el3:d,el4:p}),(0,y.jsx)(Z,{name1:o("assignmentTabledthrirdNameDesk2"),name2:o("assignmentTabledfirstName2"),name3:o("assignmentTabledsecondName2"),el1:m,el2:u,el3:g,el4:f}),(0,y.jsx)(R,{name:o("assignmentTabledname1"),el1:h,el2:b,el3:j}),(0,y.jsx)(R,{name:o("assignmentTabledname2"),el1:b,el2:j,el3:w}),(0,y.jsx)(R,{name:o("assignmentTabledkey"),el1:k,el2:v,el3:D,backgroundImage:"none",isKey:!0})]})}},1163:function(e,n,t){var a=t(9230),r=t(9055),i=t(6173),o=t(1816),l=t(184);n.Z=function(e){var n=e.handleSubmit,t=e.children,s=e.register,d=e.control,c=e.setValue,x=(0,a.$G)("calc").t;return(0,l.jsxs)(r.x,{as:"form",onSubmit:n,mb:["40px","60px"],children:[(0,l.jsxs)(r.x,{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)",border:"1px solid #72499B",borderRadius:"14px",maxWidth:["370px",null,"500px"],px:"40px",py:"36px",m:["0 auto 40px","0 auto 60px"],children:[(0,l.jsx)(i.$K,{width:"100%",children:x("personalMatrixBoxTitle")}),t]}),(0,l.jsx)(o.Z,{register:s,setValue:c,control:d}),(0,l.jsx)(i.c1,{type:"submit",whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},children:x("personalMatrixCalc")})]})}}}]);
//# sourceMappingURL=815.3c60ab62.chunk.js.map