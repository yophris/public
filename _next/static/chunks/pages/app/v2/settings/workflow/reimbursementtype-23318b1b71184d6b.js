(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3294],{42761:function(e,i,t){"use strict";var r=t(64836);i.Z=void 0;var n=r(t(64938)),s=t(85893),a=(0,n.default)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");i.Z=a},20264:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/v2/settings/workflow/reimbursementtype",function(){return t(69793)}])},19716:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var r=t(85893),n=t(42761),s=t(13970),a=t(90629);function l(e){let{...i}=e;return(0,r.jsxs)(a.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,r.jsx)(n.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,r.jsx)(s.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}t(67294)},32530:function(e,i,t){"use strict";var r=t(85893),n=t(26447),s=t(44057),a=t(9576),l=t(76595),d=t(19716),o=t(67294),u=t(34578),c=t(88767);t(80681);var m=t(38560),p=t(39272),x=t(42019),f=t(71666);let v=e=>{var i,t;let{config:v}=e,{endpoint:b,texts:g,getAllFn:y,postFn:T,key:Z,deleteFn:h,validation:j,putFn:k,transform:w=e=>e}=v,E=(0,m.Z)(e=>e.setProgress),S=(0,u.VY)(),D=(0,c.useQueryClient)(),[_,F]=o.useState(!1),[N,R]=(0,o.useState)(null),{isLoading:C,data:Q,error:q}=(0,c.useQuery)("get"+Z,()=>y(b,{page:1})),z=(0,c.useMutation)(e=>N?k(b,N,w(e),E):T(b,w(e),E),{onSuccess(){F(!1),D.invalidateQueries("get"+Z),S.success(N?"Updated":"created")},onError(e){S.error("Failed")}}),A=(0,c.useMutation)(e=>h(b,e),{onSuccess(){D.invalidateQueries("get"+Z),S("Deleted"),F(!1)},onError(e){S("Failed")}}),M=e=>{F(!0),R(e)},P=e=>{window.confirm("Do you want to delete this ? ")&&A.mutate({id:e})};return(0,o.useEffect)(e=>{_||R(null)},[_]),(0,r.jsxs)(n.Z,{spacing:2,m:2,divider:(0,r.jsx)(a.Z,{}),children:[(0,r.jsxs)(n.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(d.Z,{sx:{flex:1}}),(0,r.jsx)(s.Z,{variant:"contained",onClick:()=>F(!0),children:null==g?void 0:g.drawerTitle}),_&&(0,r.jsx)(f.Z,{open:_,callback:F,title:N?null==g?void 0:null===(i=g.drawerTitle)||void 0===i?void 0:i.replace("Add","Update"):null==g?void 0:g.drawerTitle,children:(0,r.jsx)(l.Z,{form:v.form,edit:N?{...Q.data.find(e=>e.id==N)}:null,submitData:e=>z.mutate({...e}),validationSchema:j,cancelDrawer:()=>F(!1)})})]}),(0,r.jsx)(n.Z,{sx:{rowGap:1},children:C?"Loading":null==Q?void 0:null===(t=Q.data)||void 0===t?void 0:t.map((e,i)=>(0,r.jsx)(x.Z,{label:(0,p.I)(e,"**.".concat(g.key)),cb:{Edit:()=>M(e.id),Delete:()=>P(e.id)}},i))})]})};i.Z=v},19127:function(e,i,t){"use strict";var r=t(85893),n=t(26447),s=t(87357),a=t(44057),l=t(9576);t(76595);var d=t(19716),o=t(67294),u=t(34578),c=t(88767);t(80681);var m=t(38560);t(39272);var p=t(71666),x=t(94546);let f=e=>{var i;let{plan:t,editData:f,clearEdit:v=()=>{},openSideMenu:b,setOpenSideMenu:g}=e,{endpoint:y,postFn:T,key:Z,putFn:h,transform:j=e=>e}=t,k=(0,m.Z)(e=>e.setProgress),w=(0,u.VY)(),E=(0,c.useQueryClient)(),S=(0,c.useMutation)(e=>f?h(y,f.id,j(e),k):T(y,j(e),k),{onSuccess(){g(!1),E.invalidateQueries("get"+Z),w.success((null==f?void 0:f.id)?"Updated":"created")},onError(e){w.error("Failed")}});return(0,o.useEffect)(e=>{f&&(console.log("Opening"),g(!0))},[f]),(0,o.useEffect)(e=>{b||v()},[b]),(0,r.jsx)(n.Z,{spacing:2,m:2,divider:(0,r.jsx)(l.Z,{}),children:(0,r.jsxs)(n.Z,{direction:"row",spacing:3,children:[(0,r.jsx)(d.Z,{sx:{flex:1}}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>g(!0),children:null==t?void 0:t.sideBarTitle}),b&&(0,r.jsx)(p.Z,{open:b,callback:g,title:(null==f?void 0:f.id)?null==t?void 0:null===(i=t.sideBarTitle)||void 0===i?void 0:i.replace("Add","Update"):null==t?void 0:t.sideBarTitle,children:(0,r.jsx)(s.Z,{p:2,children:(0,r.jsx)(x.Z,{plan:t,onSubmit:e=>S.mutate({...e}),formData:f})})})]})})};i.Z=f},69793:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var r=t(85893),n=t(19127),s=t(77339);t(32530);var a=t(54742);t(67294);var l=t(34578),d=t(88767),o=t(558);let u=[{element:s.Z,attr:{label:"Reimbursement Type Name",name:"reimbursementType.leaveTypeName"},validation:{validationType:"string",validations:[{type:"required",params:["Reimbursement type name is Required"]}]},xs:12},{element:s.Z,attr:{label:"Description",name:"reimbursementType.description",isMultiline:!0},xs:12}],c={key:"reimbursementType",form:[{header:"",fields:u}],endpoint:"settings/reimbursementtype/",texts:{key:"reimbursementType",breadcrumbText:"Reimbursement Type",drawerTitle:"Add Reimbursement Type",mainTitle:"Reimbursement Type",mainDescription:"this is short description for division",sideTitle:"Reimbursement Types",sideDescription:"this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:o.$8,postFn:o.fj,putFn:o.m7,deleteFn:o.WN},m={sideBarTitle:"Add Reimbursement Type",section:{fields:[{label:"Reimbursement Type Name",type:"Text",id:"reimbursementTypeName",gridSizes:{xs:12,sm:6,md:12,lg:12},config:{placeholder:"Reimbursement Type Name"},validations:[{type:"required"}]},{label:"Description",type:"Text",id:"description",gridSizes:{xs:12,sm:6,md:12,lg:12},isMultiline:!0,config:{placeholder:"Description"},validations:[{type:"required"}]}]}};function p(){(0,d.useQueryClient)(),(0,l.VY)();let{isLoading:e,data:i,error:t}=(0,d.useQuery)("get"+c.key,()=>c.getAllFn(c.endpoint));return(0,r.jsx)(a.Z,{texts:c.texts,children:(0,r.jsx)(n.Z,{plan:m})})}}},function(e){e.O(0,[3662,3552,4885,5675,7655,129,1489,1567,8360,7417,9912,5003,7757,9482,4546,9774,2888,179],function(){return e(e.s=20264)}),_N_E=e.O()}]);