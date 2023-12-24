"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[39],{101:function(e,n,t){t.d(n,{I:function(){return o},v:function(){return d}});var r,i,a=t(168),l=t(82),s=t(407),o=l.ZP.input(r||(r=(0,a.Z)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.8px solid rgba(221, 197, 255, 0.6);\n  border-radius: 8px;\n  font-family: 'Cormorant';\n  font-size: 18px;\n  line-height: 22px;\n  padding: 11px;\n  color: rgba(38, 38, 38, 0.9);\n  width: 110px;\n  @media screen and (min-width: ",") {\n    width: 130px;\n    height: 47px;\n  }\n  ","\n"])),(function(e){return e.theme.sizes.desktop}),s.bK),d=l.ZP.button(i||(i=(0,a.Z)(["\n  border-radius: 50%;\n  background-color: #e192c1;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 250ms ease-in-out;\n  cursor: pointer;\n  &:is(:hover, :focus) {\n    transform: scale(1.05);\n  }\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(e){return e.theme.sizes.desktop}))},5154:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r,i,a=t(9439),l=t(9055),s=t(1134),o=t(1413),d=t(9230),c=t(101),x=t(2791),p=["title","titleId"];function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e,n){var t=e.title,a=e.titleId,l=h(e,p);return x.createElement("svg",u({width:18,height:19,viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},l),t?x.createElement("title",{id:a},t):null,r||(r=x.createElement("path",{d:"M13.4688 5.29932L4.78705 13.981",stroke:"white",strokeWidth:1.44444})),i||(i=x.createElement("path",{d:"M4.78809 4.78857L13.4698 13.4703",stroke:"white",strokeWidth:1.44444})))}var m,g,b=x.forwardRef(f),j=(t.p,t(184)),y=function(e){var n=e.index,t=e.register,r=e.remove,i=e.setValue,a=(0,d.$G)("calc").t;return(0,j.jsxs)(l.x,{display:"flex",gridGap:["5px",null,"8px"],mb:"8px",alignItems:"center",children:[(0,j.jsx)(c.I,(0,o.Z)((0,o.Z)({type:"text"},t("info.".concat(n,".name"))),{},{placeholder:a("personalMatrixNamePlaceholder")})),(0,j.jsx)(c.I,(0,o.Z)({width:["140px","210px","240px"],type:"text",placeholder:a("personalMatrixDatePlaceholder")},t("info.".concat(n,".date"),{onChange:function(e){var t=e.target.value.replace(/\D/g,"");t.length>8&&(t=t.substr(0,8)),t.length>4&&(t=t.substr(0,4)+"."+t.substr(4)),t.length>2&&(t=t.substr(0,2)+"."+t.substr(2)),i("info.".concat(n,".date"),t)},required:{value:!0,message:a("personalMatrixDateRequired")},pattern:{value:/^\d{2}\.\d{2}\.\d{4}$/,message:a("personalMatrixDatePattern")}}))),n>2&&(0,j.jsx)(c.v,{type:"button",onClick:function(){return r(n)},children:(0,j.jsx)(b,{})})]})},w=t(6173),v=t(168),k=t(82),Z=k.ZP.button(m||(m=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n  background-color: #9071af;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  &:is(:hover, :focus) {\n    transform: scale(1.05);\n  }\n  @media screen and (min-width: ",") {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(e){return e.theme.sizes.desktop})),I=k.ZP.p(g||(g=(0,v.Z)(["\n  font-size: 15px;\n  line-height: 18px;\n\n  color: rgba(73, 73, 73, 0.8);\n  @media screen and (min-width: ",") {\n    font-size: 22px;\n  }\n"])),(function(e){return e.theme.sizes.desktop})),P=t(922),D=t(1816),z={date:"",name:""},M=function(e){var n=e.setIsFullOverlap,t=e.setIsMethod2023,r=(0,P.useMatrix)(),i=r.setPartnersDate,o=r.setShowMatrix,c=(0,d.$G)("calc").t,x=(0,s.cI)({defaultValues:{info:[z,z,z]}}),p=x.register,u=x.control,h=x.handleSubmit,f=x.setValue,m=(0,s.Dq)({name:"info",control:u}),g=m.fields,v=m.append,k=m.remove,M=g.length>=6;return(0,j.jsxs)(l.x,{as:"form",onSubmit:h((function(e){var r=[];e.info.forEach((function(e){var n=e.date.split("."),t=(0,a.Z)(n,3),i=t[0],l=t[1],s=t[2];r.push({day:i,month:l,year:s,name:e.name})})),i(r),o(!0),n(e.isFullOverlap),t(e.method2023),document.activeElement.blur()})),m:["0 auto 40px"," 0 auto 60px"],maxWidth:["370px","450px","500px"],children:[(0,j.jsxs)(l.x,{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 237, 255, 0.3) 100%)",border:"1px solid #72499B",borderRadius:"14px",px:"40px",py:"36px",mb:"26px",children:[(0,j.jsx)(w.$K,{children:c("personalMatrixBoxTitle")}),g.map((function(e,n){return(0,j.jsx)(y,{index:n,register:p,remove:k,setValue:f},e.id)})),!M&&(0,j.jsxs)(l.x,{display:"flex",gridGap:"6px",alignItems:"center",children:[(0,j.jsx)(Z,{type:"button",onClick:function(){return v()},children:(0,j.jsx)(b,{})}),(0,j.jsx)(I,{children:c("add")})]})]}),(0,j.jsx)(D.Z,{register:p,setValue:f,control:u}),(0,j.jsx)(w.c1,{type:"submit",whileHover:{scale:1.05},whileFocus:{scale:1.05},whileTap:{scale:.95},children:c("personalMatrixCalc")})]})},O=t(7774),C=t(4286),S=t(1760),T=function(){var e=(0,P.useMatrix)(),n=e.partnersDate,t=e.showMatrix,r=(0,x.useState)(!1),i=(0,a.Z)(r,2),s=i[0],o=i[1],c=(0,x.useState)(),p=(0,a.Z)(c,2),u=p[0],h=p[1],f=(0,x.useState)([]),m=(0,a.Z)(f,2),g=m[0],b=m[1],y=(0,x.useState)(!1),w=(0,a.Z)(y,2),v=w[0],k=w[1],Z=(0,d.$G)("calc").t;return(0,x.useEffect)((function(){if(0!==n){var e=[];n.forEach((function(n,t){var r=(0,C.allData)({date:n,isGenerated:!1});r.name=n.name,r.order="".concat(Z("tableMatrix")," ").concat(t+1),e.push(r)})),b(e)}}),[n,Z]),(0,x.useEffect)((function(){h((0,C.getCompatData)(g,v,s))}),[v,s,g]),(0,j.jsxs)(l.x,{children:[(0,j.jsx)(M,{setIsFullOverlap:k,setIsMethod2023:o}),t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.Z,{resultData:u}),(0,j.jsx)(l.x,{display:"flex",flexDirection:["column",null,"row"],justifyContent:"center",gridGap:"40px",flexWrap:"wrap",children:g.map((function(e,t){return(0,j.jsx)(O.Z,{partner:e,date:n[t],lastIndex:t===g.length-1},e.order)}))})]})]})}},2461:function(e,n,t){t.d(n,{Z:function(){return z}});var r,i,a,l,s,o,d,c=t(9230),x=t(9055),p=t(168),u=t(82),h=t(407),f=u.ZP.p(r||(r=(0,p.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.06;\n\n  letter-spacing: 0.01em;\n\n  color: ",";\n  ","\n  ","\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.text}),h.Dh,h.cp,h.bK),m=u.ZP.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  gap: 16px;\n  padding-left: 11px;\n  ","\n"])),h.Dh),g=u.ZP.span(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 0.63;\n  letter-spacing: 0.01em;\n\n  color: #000000;\n\n  background: rgba(255, 255, 255, 0.5);\n  border: 0.7px solid #9071af;\n  border-radius: 50%;\n  ","\n  ","\n"])),(function(e){return e.theme.fonts.digits}),h.bK,h.$_),b=(0,u.ZP)(g)(l||(l=(0,p.Z)(["\n  width: 41px;\n  height: 41px;\n  background-color: #f3e8ff;\n"]))),j=t(184),y=function(e){var n=e.name1,t=e.name2,r=e.name3,i=e.el1,a=e.el2,l=e.el3,s=e.el4,o=e.el5,d=e.el6,c=e.el7;return(0,j.jsxs)(x.x,{py:"12px",backgroundImage:"linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);",backgroundPosition:"bottom",backgroundSize:"10px 2px",backgroundRepeat:"repeat-x",children:[(0,j.jsx)(f,{fontWeight:"500",fontSize:"21px",mb:"15px",children:n}),(0,j.jsxs)(x.x,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,j.jsxs)(x.x,{children:[(0,j.jsxs)(m,{mb:"8px",children:[(0,j.jsx)("li",{children:(0,j.jsx)(f,{width:"50px",children:t})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:i})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:a})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:l})})]}),(0,j.jsxs)(m,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(f,{width:"50px",children:r})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:s})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:o})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:d})})]})]}),(0,j.jsx)(b,{as:"p",children:c})]})]})},w=t(1413),v=t(5987),k=u.ZP.p(s||(s=(0,p.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 1.06;\n\n  letter-spacing: 0.01em;\n\n  color: ",";\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.text})),Z=u.ZP.ul(o||(o=(0,p.Z)(["\n  align-items: center;\n  display: flex;\n  gap: 16px;\n  ","\n"])),h.eC),I=["name","el1","el2","el3","isKey"],P=function(e){var n=e.name,t=e.el1,r=e.el2,i=e.el3,a=e.isKey,l=(0,v.Z)(e,I);return(0,j.jsxs)(x.x,(0,w.Z)((0,w.Z)({py:"17px",backgroundImage:"linear-gradient(to right,#9072af 10%, rgba(255, 255, 255, 0) 0%);",backgroundPosition:"bottom",backgroundSize:"10px 2px",backgroundRepeat:"repeat-x",display:"flex",justifyContent:"space-between",alignItems:"center"},l),{},{children:[(0,j.jsx)(k,{children:n}),(0,j.jsxs)(Z,{gridGap:a?"21px":null,children:[(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:t})}),(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:r})}),a?(0,j.jsx)("li",{children:(0,j.jsx)(g,{children:i})}):(0,j.jsx)("li",{children:(0,j.jsx)(b,{children:i})})]})]}))},D=u.ZP.p(d||(d=(0,p.Z)(["\n  font-family: 'Cormorant';\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 26px;\n  text-align: center;\n  color: #664982;\n\n  padding-bottom: 16px;\n  background-image: linear-gradient(\n    to right,\n    #9072af 10%,\n    rgba(255, 255, 255, 0) 0%\n  );\n  background-position: bottom;\n  background-size: 15px 2px;\n  background-repeat: repeat-x;\n"]))),z=function(e){var n=e.matrixData,t=e.title,r=void 0===t?null:t,i=e.display,a=void 0===i?null:i,l=(0,c.$G)("calc").t,s=n.bottom1,o=n.month,d=n.sky,p=n.day,u=n.year,h=n.earth,f=n.personal,m=n.bottomRight1,g=n.topLeft1,b=n.father,w=n.topRight1,v=n.bottomLeft1,k=n.mother,Z=n.social,I=n.spirit,z=n.planet,M=n.center,O=n.center2,C=n.insidePower;return isNaN(M)||!g?null:(0,j.jsxs)(x.x,{px:"35px",py:"25px",backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%)",border:"0.6px solid #72499B",borderRadius:"18px",display:a,minWidth:"337px",children:[r&&(0,j.jsx)(D,{children:r}),(0,j.jsx)(y,{name1:l("assignmentTabledthrirdNameDesk1"),name2:l("assignmentTabledfirstName1"),name3:l("assignmentTabledsecondName1"),el1:o,el2:s,el3:d,el4:p,el5:u,el6:h,el7:f}),(0,j.jsx)(y,{name1:l("assignmentTabledthrirdNameDesk2"),name2:l("assignmentTabledfirstName2"),name3:l("assignmentTabledsecondName2"),el1:g,el2:m,el3:b,el4:w,el5:v,el6:k,el7:Z}),(0,j.jsx)(P,{name:l("assignmentTabledname1"),el1:f,el2:Z,el3:I}),(0,j.jsx)(P,{name:l("assignmentTabledname2"),el1:Z,el2:I,el3:z}),(0,j.jsx)(P,{name:l("assignmentTabledkey"),el1:M,el2:O,el3:C,backgroundImage:"none",isKey:!0})]})}}}]);
//# sourceMappingURL=39.70abde31.chunk.js.map