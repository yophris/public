(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7816],{75503:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var i=r(n(64938)),a=n(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=o},42761:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var i=r(n(64938)),a=n(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=o},45270:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings/general/department",function(){return n(6274)}])},69745:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893);n(67294);var i=n(87357),a=n(15861),o=n(18360),s=n(18972),l=n(90948),d=n(13970),c=n(75503);function u(e){let{label:t,name:n,options:l,register:d,setValue:u,error:p,isRequired:x,getValues:f,watch:g,hideLabel:h=!1,...v}=e;return(0,r.jsxs)(i.Z,{sx:{width:"100%"},children:[!h&&(0,r.jsxs)(a.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[t,x&&(0,r.jsx)(a.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,r.jsxs)(o.Z,{...d&&d,...v,input:(0,r.jsx)(m,{}),IconComponent:c.Z,sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary",width:"100%"},children:[(0,r.jsx)(s.Z,{selected:!0,sx:{fontSize:"1.4rem",color:"text.secondary",fontStyle:"italic"},value:"",children:"None"}),l.length&&l.map((e,t)=>(0,r.jsx)(s.Z,{sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:e.value,disabled:e.disabled,children:e.text},t))]}),(null==p?void 0:p.message)&&(0,r.jsx)(a.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:p.message})]})}let m=(0,l.ZP)(d.ZP)(e=>{let{theme:t}=e;return{alignItems:"center",backgroundColor:t.palette.background.main,border:"1px solid #EFEFEF",borderRadius:t.spacing(1),display:"flex",fontSize:"1.4rem",transition:t.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"},"label + &":{marginTop:t.spacing(3)},"& .MuiInputBase-input":{color:t.palette.text.secondary,padding:"".concat(t.spacing(1.25)," ").concat(t.spacing(2))},"& .MuiSvgIcon-root":{fontSize:"2rem",marginRight:2,color:t.palette.text.tertiary}}})},19716:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),i=n(42761),a=n(13970),o=n(90629);function s(e){let{...t}=e;return(0,r.jsxs)(o.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,r.jsx)(i.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,r.jsx)(a.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}n(67294)},32530:function(e,t,n){"use strict";var r=n(85893),i=n(26447),a=n(44057),o=n(9576),s=n(76595),l=n(19716),d=n(67294),c=n(34578),u=n(88767);n(80681);var m=n(38560),p=n(39272),x=n(42019),f=n(71666);let g=e=>{var t,n;let{config:g}=e,{endpoint:h,texts:v,getAllFn:b,postFn:Z,key:j,deleteFn:w,validation:k,putFn:y,transform:S=e=>e}=g,E=(0,m.Z)(e=>e.setProgress),D=(0,c.VY)(),_=(0,u.useQueryClient)(),[F,T]=d.useState(!1),[z,C]=(0,d.useState)(null),{isLoading:N,data:L,error:M}=(0,u.useQuery)("get"+j,()=>b(h,{page:1})),P=(0,u.useMutation)(e=>z?y(h,z,S(e),E):Z(h,S(e),E),{onSuccess(){T(!1),_.invalidateQueries("get"+j),D.success(z?"Updated":"created")},onError(e){D.error("Failed")}}),I=(0,u.useMutation)(e=>w(h,e),{onSuccess(){_.invalidateQueries("get"+j),D("Deleted"),T(!1)},onError(e){D("Failed")}}),Q=e=>{T(!0),C(e)},A=e=>{window.confirm("Do you want to delete this ? ")&&I.mutate({id:e})};return(0,d.useEffect)(e=>{F||C(null)},[F]),(0,r.jsxs)(i.Z,{spacing:2,m:2,divider:(0,r.jsx)(o.Z,{}),children:[(0,r.jsxs)(i.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(l.Z,{sx:{flex:1}}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>T(!0),children:null==v?void 0:v.drawerTitle}),F&&(0,r.jsx)(f.Z,{open:F,callback:T,title:z?null==v?void 0:null===(t=v.drawerTitle)||void 0===t?void 0:t.replace("Add","Update"):null==v?void 0:v.drawerTitle,children:(0,r.jsx)(s.Z,{form:g.form,edit:z?{...L.data.find(e=>e.id==z)}:null,submitData:e=>P.mutate({...e}),validationSchema:k,cancelDrawer:()=>T(!1)})})]}),(0,r.jsx)(i.Z,{sx:{rowGap:1},children:N?"Loading":null==L?void 0:null===(n=L.data)||void 0===n?void 0:n.map((e,t)=>(0,r.jsx)(x.Z,{label:(0,p.Im)(e,"**.".concat(v.key)),cb:{Edit:()=>Q(e.id),Delete:()=>A(e.id)}},t))})]})};t.Z=g},6274:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(85893),i=n(69745),a=n(77339),o=n(32530),s=n(54742),l=n(558);let d=[{element:a.Z,attr:{label:"Department Name",name:"department.departmentName"},xs:6},{element:a.Z,attr:{label:"Description",name:"department.description",isMultiline:!0},xs:12},{element:i.Z,attr:{label:"Department Head",name:"department.departmentHead",options:[{text:"Employee 1",value:"e1"},{text:"Employee 2",value:"e2"}]},xs:12}],c={form:[{header:"",fields:d}],key:"department",endpoint:"settings/department",texts:{key:"departmentName",breadcrumbText:"Department",drawerTitle:"Add Deparment",mainTitle:"List of Departments",mainDescription:"This is short description for division",sideTitle:"Deparment",sideDescription:"this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:l.$8,postFn:l.fj,putFn:l.m7,deleteFn:l.WN};function u(){return(0,r.jsx)(s.Z,{texts:c.texts,children:(0,r.jsx)(o.Z,{config:c})})}}},function(e){e.O(0,[3662,3552,5675,6886,3213,4409,129,5229,8360,9482,9774,2888,179],function(){return e(e.s=45270)}),_N_E=e.O()}]);