"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5251],{75071:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(64938)),i=n(85893),o=(0,l.default)((0,i.jsx)("path",{d:"M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"}),"BorderColor");t.Z=o},41733:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(64938)),i=n(85893),o=(0,l.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},52778:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(64938)),i=n(85893),o=(0,l.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");t.Z=o},57976:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(64938)),i=n(85893),o=(0,l.default)((0,i.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.Z=o},87689:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(85893),l=n(26447),i=n(87357),o=n(15861),a=n(25675),s=n.n(a),c=n(67294),d=n(99272),u=n(1746),m=n(87536),x=n(78462),p=n(97212),h=n(59334),g=n(63366),v=n(87462),f=n(86010),j=n(94780),Z=n(59773),y=n(90948),b=n(71657),w=n(1588),I=n(34867);function D(e){return(0,I.Z)("MuiListItemAvatar",e)}(0,w.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);let F=["className"],_=e=>{let{alignItems:t,classes:n}=e;return(0,j.Z)({root:["root","flex-start"===t&&"alignItemsFlexStart"]},D,n)},C=(0,y.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})(({ownerState:e})=>(0,v.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})),k=c.forwardRef(function(e,t){let n=(0,b.Z)({props:e,name:"MuiListItemAvatar"}),{className:l}=n,i=(0,g.Z)(n,F),o=c.useContext(Z.Z),a=(0,v.Z)({},n,{alignItems:o.alignItems}),s=_(a);return(0,r.jsx)(C,(0,v.Z)({className:(0,f.Z)(s.root,l),ownerState:a,ref:t},i))});var E=n(52778),S=n(9576),z=n(48885);function M(e){let{file:t,handleRemove:n,isLast:l}=e;return(0,r.jsxs)(x.Z,{alignItems:"center",justifyContent:"center",sx:{width:"100%",bgcolor:"background.paper",padding:0},children:[(0,r.jsxs)(p.ZP,{sx:{px:0},alignItems:"center",children:[(0,r.jsx)(k,{children:(0,r.jsx)(s(),{alt:"file image",src:"/images/pdfIcon.svg",width:36,height:36})}),(0,r.jsx)(h.Z,{primary:(0,r.jsx)(o.Z,{component:"p",variant:"body_medium_primary",children:t}),secondary:(0,r.jsx)(o.Z,{component:"p",variant:"smallcopy_regular_muted",children:"Document - 2.21 MB - .PDF"})}),(0,r.jsx)(z.Z,{onClick:n,sx:{minWidth:0,cursor:"pointer"},children:(0,r.jsx)(E.Z,{sx:{fontSize:"2rem"}})})]}),!l&&(0,r.jsx)(S.Z,{borderColor:"#F0F0F0"})]})}n(88767),n(80681),n(38560);let L={height:"155px",border:"2px dashed #BDCEDD",background:"#FAFAFA",borderRadius:"8px"},P=["/images/pdfIcon.svg","/images/jpgIcon.svg","/images/docIcon.svg","/images/xlsIcon.svg"];function R(e){let{label:t,limit:n,type:a,bucket:x,register:p,name:h,error:g,isRequired:v,control:f}=e,[j,Z]=(0,c.useState)(null),[y,b]=(0,c.useState)(0),{fields:w,append:I,remove:D}=(0,m.Dq)({control:f,name:h}),[{canDrop:F,isOver:_},C]=(0,d.L)(()=>({accept:[u.FILE],drop(e){k&&k(e)},canDrop:e=>!0,hover(e){Z(null)},collect(e){let t=e.getItem();return t&&console.log("Drag: collect",t.files,t.items),{isOver:e.isOver({shallow:!0}),canDrop:e.canDrop()}}}),[e.name]),k=async e=>{if(console.log("dropped",e),e.files.length>n){Z("Only "+n+" files allowed"),setTimeout(e=>{Z(null)},[2e3]);return}if(e.files.some(e=>!a.includes(e.type))){Z("File not allowed"),setTimeout(e=>{Z(null)},[2e3]);return}I(e.files)};(0,c.useEffect)(e=>{console.log(w)},[w]);let E=e=>{let{target:t}=e,{files:n}=t;console.log("files",n),I([n[0]])},S=(0,c.useRef)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{ref:S,onChange:E,type:"file",hidden:!0,multiple:n>1,accept:a}),(0,r.jsxs)(l.Z,{onClick(){var e;return null==S?void 0:null===(e=S.current)||void 0===e?void 0:e.click()},ref:0==y?C:null,style:{...L,background:_?"lightgreen":j?"orange":L.background},justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(i.Z,{mb:2,children:P&&P.map(e=>(0,r.jsx)(s(),{src:e,alt:"Vercel Logo",width:40,height:40,style:{opacity:.7}},e))}),(0,r.jsx)(i.Z,{children:F&&_?(0,r.jsx)(o.Z,{variant:"body_medium_secondary",component:"p",children:"Release to drop"}):(0,r.jsx)(o.Z,{variant:"body_medium_secondary",component:"p",children:j||(0,r.jsxs)(r.Fragment,{children:["Drag & Drop your document here, or"," ",(0,r.jsx)(o.Z,{variant:"body_bold_primary",component:"span",children:"Browse"})]})})}),(0,r.jsx)(o.Z,{variant:"smallcopy_regular_muted",component:"p",children:!j&&"Upload .pdf, .doc, .xls, .jpg & etc"})]}),w.map((e,t)=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{...p("".concat(h,".").concat(t)),hidden:!0},e.id),(0,r.jsx)(m.Qr,{render(e){let{field:{value:n}}=e;return(0,r.jsx)(M,{file:n[t].name,handleRemove:()=>D(t),isLast:t===w.length-1})},name:"".concat(h),control:f},t)]}))]})}},19716:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(85893),l=n(42761),i=n(13970),o=n(90629);function a(e){let{...t}=e;return(0,r.jsxs)(o.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,r.jsx)(l.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,r.jsx)(i.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}n(67294)},44889:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(85893),l=n(26447),i=n(44057),o=n(9576),a=n(76595),s=n(19716),c=n(67294),d=n(34578),u=n(88767);n(80681);var m=n(38560),x=n(39272),p=n(15861),h=n(87357),g=n(93946),v=n(35294),f=n(18972),j=n(57976),Z=n(75071),y=n(41733),b=n(25675),w=n.n(b),I=n(1574);let D=["Edit","Delete"];function F(e){let{label:t="",cb:n={}}=e,[i,o]=c.useState(null),a=Boolean(i),s=e=>{o(e.currentTarget)},d=()=>{o(null)},u=e=>{let t=n[e];t&&(t(),d())};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{border:"1px solid #E4E7EB",borderRadius:1,padding:2},children:[(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,r.jsx)(w(),{src:"/images/starYellow.svg",width:20,height:20,alt:"favourite"}),(0,r.jsx)(I.Z,{size:18,colorVal:"#46C0C0"}),(0,r.jsx)(p.Z,{variant:"h3_medium_secondary",component:"h3",children:t})]}),(0,r.jsx)(l.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(g.Z,{"aria-label":"more",id:"long-button","aria-controls":a?"long-menu":void 0,"aria-expanded":a?"true":void 0,"aria-haspopup":"true",onClick:s,children:(0,r.jsx)(j.Z,{sx:{color:"text.secondary",fontSize:"2rem"}})}),(0,r.jsx)(v.Z,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:i,open:a,onClose:d,PaperProps:{style:{maxHeight:216,width:"auto"}},children:D.map(e=>(0,r.jsxs)(f.Z,{selected:"Pyxis"===e,onClick:()=>u(e),children:[(0,r.jsx)(p.Z,{mr:1,variant:"body_medium_tertiary",component:"p",children:"Delete"===e?(0,r.jsx)(y.Z,{sx:{color:"#F53E40"}}):(0,r.jsx)(Z.Z,{})}),(0,r.jsx)(p.Z,{sx:{color:"Delete"===e&&"#F53E40"},variant:"body_medium_tertiary",component:"p",children:e})]},e))})]})})]})})}var _=n(71666);let C=e=>{var t,n;let{config:p}=e,{endpoint:h,texts:g,getAllFn:v,postFn:f,key:j,deleteFn:Z,validation:y,putFn:b,transform:w=e=>e}=p,I=(0,m.Z)(e=>e.setProgress),D=(0,d.VY)(),C=(0,u.useQueryClient)(),[k,E]=c.useState(!1),[S,z]=(0,c.useState)(null),{isLoading:M,data:L,error:P}=(0,u.useQuery)("get"+j,()=>v(h,{page:1})),R=(0,u.useMutation)(e=>S?b(h,S,w(e),I):f(h,w(e),I),{onSuccess(){E(!1),C.invalidateQueries("get"+j),D.success(S?"Updated":"created")},onError(e){D.error("Failed")}}),V=(0,u.useMutation)(e=>Z(h,e),{onSuccess(){C.invalidateQueries("get"+j),D("Deleted"),E(!1)},onError(e){D("Failed")}}),A=e=>{E(!0),z(e)},H=e=>{window.confirm("Do you want to delete this ? ")&&V.mutate({id:e})};return(0,c.useEffect)(e=>{k||z(null)},[k]),(0,r.jsxs)(l.Z,{spacing:2,m:2,divider:(0,r.jsx)(o.Z,{}),children:[(0,r.jsxs)(l.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(s.Z,{sx:{flex:1}}),(0,r.jsx)(i.Z,{variant:"contained",onClick:()=>E(!0),children:null==g?void 0:g.drawerTitle}),k&&(0,r.jsx)(_.Z,{open:k,callback:E,title:S?null==g?void 0:null===(t=g.drawerTitle)||void 0===t?void 0:t.replace("Add","Update"):null==g?void 0:g.drawerTitle,children:(0,r.jsx)(a.Z,{form:p.form,edit:S?{...L.data.find(e=>e.id==S)}:null,submitData:e=>R.mutate({...e}),validationSchema:y,cancelDrawer:()=>E(!1)})})]}),(0,r.jsx)(l.Z,{sx:{rowGap:1},children:M?"Loading":null==L?void 0:null===(n=L.data)||void 0===n?void 0:n.map((e,t)=>(0,r.jsx)(F,{label:(0,x.I)(e,"**.".concat(g.key)),cb:{Edit:()=>A(e.id),Delete:()=>H(e.id)}},t))})]})};var k=C}}]);