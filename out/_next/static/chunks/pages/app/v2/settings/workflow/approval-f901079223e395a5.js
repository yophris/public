(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8032],{94559:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/v2/settings/workflow/approval",function(){return i(77093)}])},69745:function(e,r,i){"use strict";i.d(r,{Z:function(){return u}});var t=i(85893);i(67294);var a=i(87357),o=i(15861),l=i(18360),n=i(18972),s=i(90948),d=i(13970),c=i(75503);function u(e){let{label:r,name:i,options:s,register:d,setValue:u,error:m,isRequired:h,getValues:v,watch:x,hideLabel:f=!1,...y}=e;return(0,t.jsxs)(a.Z,{sx:{width:"100%"},children:[!f&&(0,t.jsxs)(o.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[r,h&&(0,t.jsx)(o.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,t.jsxs)(l.Z,{...d&&d,...y,input:(0,t.jsx)(p,{}),IconComponent:c.Z,sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary",width:"100%"},children:[(0,t.jsx)(n.Z,{selected:!0,sx:{fontSize:"1.4rem",color:"text.secondary",fontStyle:"italic"},value:"",children:"None"}),s.length&&s.map((e,r)=>(0,t.jsx)(n.Z,{sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:e.value,disabled:e.disabled,children:e.text},r))]}),(null==m?void 0:m.message)&&(0,t.jsx)(o.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:m.message})]})}let p=(0,s.ZP)(d.ZP)(e=>{let{theme:r}=e;return{alignItems:"center",backgroundColor:r.palette.background.main,border:"1px solid #EFEFEF",borderRadius:r.spacing(1),display:"flex",fontSize:"1.4rem",transition:r.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"},"label + &":{marginTop:r.spacing(3)},"& .MuiInputBase-input":{color:r.palette.text.secondary,padding:"".concat(r.spacing(1.25)," ").concat(r.spacing(2))},"& .MuiSvgIcon-root":{fontSize:"2rem",marginRight:2,color:r.palette.text.tertiary}}})},19716:function(e,r,i){"use strict";i.d(r,{Z:function(){return n}});var t=i(85893),a=i(42761),o=i(13970),l=i(90629);function n(e){let{...r}=e;return(0,t.jsxs)(l.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,t.jsx)(a.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,t.jsx)(o.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}i(67294)},32530:function(e,r,i){"use strict";var t=i(85893),a=i(26447),o=i(44057),l=i(9576),n=i(76595),s=i(19716),d=i(67294),c=i(34578),u=i(88767);i(80681);var p=i(38560),m=i(39272),h=i(42019),v=i(71666);let x=e=>{var r,i;let{config:x}=e,{endpoint:f,texts:y,getAllFn:g,postFn:b,key:w,deleteFn:Z,validation:j,putFn:k,transform:S=e=>e}=x,T=(0,p.Z)(e=>e.setProgress),H=(0,c.VY)(),_=(0,u.useQueryClient)(),[A,E]=d.useState(!1),[C,W]=(0,d.useState)(null),{isLoading:q,data:F,error:L}=(0,u.useQuery)("get"+w,()=>g(f,{page:1})),I=(0,u.useMutation)(e=>C?k(f,C,S(e),T):b(f,S(e),T),{onSuccess(){E(!1),_.invalidateQueries("get"+w),H.success(C?"Updated":"created")},onError(e){H.error("Failed")}}),z=(0,u.useMutation)(e=>Z(f,e),{onSuccess(){_.invalidateQueries("get"+w),H("Deleted"),E(!1)},onError(e){H("Failed")}}),N=e=>{E(!0),W(e)},D=e=>{window.confirm("Do you want to delete this ? ")&&z.mutate({id:e})};return(0,d.useEffect)(e=>{A||W(null)},[A]),(0,t.jsxs)(a.Z,{spacing:2,m:2,divider:(0,t.jsx)(l.Z,{}),children:[(0,t.jsxs)(a.Z,{direction:"row",spacing:3,children:[(0,t.jsx)(s.Z,{sx:{flex:1}}),(0,t.jsx)(o.Z,{variant:"contained",onClick:()=>E(!0),children:null==y?void 0:y.drawerTitle}),A&&(0,t.jsx)(v.Z,{open:A,callback:E,title:C?null==y?void 0:null===(r=y.drawerTitle)||void 0===r?void 0:r.replace("Add","Update"):null==y?void 0:y.drawerTitle,children:(0,t.jsx)(n.Z,{form:x.form,edit:C?{...F.data.find(e=>e.id==C)}:null,submitData:e=>I.mutate({...e}),validationSchema:j,cancelDrawer:()=>E(!1)})})]}),(0,t.jsx)(a.Z,{sx:{rowGap:1},children:q?"Loading":null==F?void 0:null===(i=F.data)||void 0===i?void 0:i.map((e,r)=>(0,t.jsx)(h.Z,{label:(0,m.I)(e,"**.".concat(y.key)),cb:{Edit:()=>N(e.id),Delete:()=>D(e.id)}},r))})]})};r.Z=x},69522:function(e,r,i){"use strict";i.d(r,{Z:function(){return b}});var t=i(85893),a=i(67294),o=i(87357),l=i(15861),n=i(44057),s=i(7145),d=i.n(s),c=i(99272),u=i(49294),p=i(32610),m=i(26447),h=i(93946),v=i(25675),x=i.n(v),f=i(69745);let y=e=>{let{id:r,item:i,options:n,index:s,moveItem:d,items:v,setItems:y,...g}=e,[b,w]=(0,a.useState)(""),Z=e=>{w(e.target.value),y(r=>r.map(r=>r.id===i.id?{...r,approvers:e.target.value}:r))},j=(0,a.useRef)(null),[{handlerId:k},S]=(0,c.L)({accept:"item",collect:e=>({handlerId:e.getHandlerId()}),hover(e,r){var i;if(console.log("item monitor",e,r),!j.current)return;let t=e.index;if(t===s)return;let a=null===(i=j.current)||void 0===i?void 0:i.getBoundingClientRect(),o=(a.bottom-a.top)/2,l=r.getClientOffset(),n=l.y-a.top;t<s&&n<o||t>s&&n>o||(d(t,s),e.index=s)}}),[{isDragging:T},H]=(0,u.c)({type:"item",item:()=>({id:r,index:s}),collect:e=>({isDragging:e.isDragging()})});return H(S(j)),(0,t.jsx)(o.Z,{ref:j,sx:{cursor:"move",opacity:T?0:1},"data-handler-id":k,children:(0,t.jsxs)(m.Z,{direction:"row",sx:{width:"100%",px:1.2,py:1,my:1,border:"1px solid #efefef",borderRadius:"5px"},alignItems:"center",spacing:2,children:[(0,t.jsx)(p.Z,{sx:{fontSize:"2rem",color:"#333"}}),(0,t.jsx)(l.Z,{variant:"h3_bold_secondary",component:"h3",mb:1,children:i.sequence}),(0,t.jsx)(f.Z,{hideLabel:!0,options:n,value:b,onChange:Z}),(0,t.jsx)(h.Z,{children:(0,t.jsx)(x(),{src:"/images/trashIcon.svg",width:14,height:14,alt:"checked"})})]})})},g=[{text:"Line Manager",value:"lm"},{text:"Senior Manage",value:"sm"},{text:"CEO",value:"ceo"}];function b(e){var r;let{...i}=e,[s,c]=(0,a.useState)([{id:1,sequence:1,approvers:""},{id:2,sequence:2,approvers:""}]);(0,a.useEffect)(()=>{i.setValue(i.name,s)},[s]);let u=(0,a.useCallback)((e,r)=>{c(i=>d()(i,{$splice:[[e,1],[r,0,i[e]]]})),c(e=>e.map((e,r)=>({...e,sequence:r+1})))},[s]),p=(0,a.useCallback)((e,r)=>(0,t.jsx)(y,{index:r,id:e.id,item:e,setItems:c,items:s,options:g,moveItem:u,...i},e.id),[s]);return(0,t.jsxs)(o.Z,{sx:{width:"100%"},children:[i.headLabel&&(0,t.jsx)(l.Z,{variant:"h3_bold_secondary",component:"h3",mb:1,children:i.headLabel}),(0,t.jsxs)(l.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[i.label,i.isRequired&&(0,t.jsx)(l.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),s.map((e,r)=>p(e,r)),(0,t.jsx)(n.Z,{onClick:()=>c([...s,{id:s.length+1,sequence:s.length+1,approvers:""}]),styleOverrides:{width:"100%",my:2,color:"text.primary",fontWeight:600,fontSize:"1.6rem"},variant:"outlined",children:"+ Add another row"})," ",(null===(r=i.error)||void 0===r?void 0:r.message)&&(0,t.jsx)(l.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:i.error.message})]})}},19127:function(e,r,i){"use strict";var t=i(85893),a=i(26447),o=i(87357),l=i(44057),n=i(9576);i(76595);var s=i(19716),d=i(67294),c=i(34578),u=i(88767);i(80681);var p=i(38560);i(39272);var m=i(71666),h=i(52802);let v=e=>{var r;let{plan:i,editData:v,clearEdit:x=()=>{},openSideMenu:f,setOpenSideMenu:y}=e,{endpoint:g,postFn:b,key:w,putFn:Z,transform:j=e=>e}=i,k=(0,p.Z)(e=>e.setProgress),S=(0,c.VY)(),T=(0,u.useQueryClient)(),H=(0,u.useMutation)(e=>v?Z(g,v.id,j(e),k):b(g,j(e),k),{onSuccess(){y(!1),T.invalidateQueries("get"+w),S.success((null==v?void 0:v.id)?"Updated":"created")},onError(e){S.error("Failed")}});return(0,d.useEffect)(e=>{v&&(console.log("Opening"),y(!0))},[v]),(0,d.useEffect)(e=>{f||x()},[f]),(0,t.jsx)(a.Z,{spacing:2,m:2,divider:(0,t.jsx)(n.Z,{}),children:(0,t.jsxs)(a.Z,{direction:"row",spacing:3,children:[(0,t.jsx)(s.Z,{sx:{flex:1}}),(0,t.jsx)(l.Z,{variant:"contained",onClick:()=>y(!0),children:null==i?void 0:i.sideBarTitle}),f&&(0,t.jsx)(m.Z,{open:f,callback:y,title:(null==v?void 0:v.id)?null==i?void 0:null===(r=i.sideBarTitle)||void 0===r?void 0:r.replace("Add","Update"):null==i?void 0:i.sideBarTitle,children:(0,t.jsx)(o.Z,{p:2,children:(0,t.jsx)(h.Z,{plan:i,onSubmit:e=>H.mutate({...e}),formData:v})})})]})})};r.Z=v},77093:function(e,r,i){"use strict";i.r(r),i.d(r,{TabPanel:function(){return w},default:function(){return k}});var t=i(85893),a=i(67294),o=i(26447),l=i(67720),n=i(11703),s=i(40044),d=i(15861),c=i(77339);i(32530);var u=i(54742),p=i(69522),m=i(45697),h=i.n(m),v=i(558),x=i(88767),f=i(34578);i(76595);var y=i(69745),g=i(52802),b=i(19127);function w(e){let{children:r,value:i,index:a,...l}=e;return(0,t.jsx)("div",{role:"tabpanel",hidden:i!==a,...l,style:{marginTop:a},children:i===a&&(0,t.jsx)(o.Z,{direction:"column",spacing:2,children:r})})}w.propTypes={children:h().node,index:h().number.isRequired,value:h().number.isRequired};let Z=[{element:c.Z,attr:{label:"Enter Workflow Hierarchy Type Name",name:"workflowHierarchy.name"},validation:{validationType:"string",validations:[{type:"required",params:["Workflow Hierarchy Type Name is Required"]}]},xs:12},{element:p.Z,attr:{headLabel:"Approver sequence in role",label:"Select the Approvers in order of Hierarchy",name:"workflowHierarchy.approverSequence"},xs:12}];y.Z,y.Z,y.Z;let j={key:"workflowHierarchy",form:[{header:"",fields:Z}],endpoint:"settings/workflowHierarchy",texts:{title:"Workflow",key:"workflowHierarchyName",breadcrumbText:"Workflow",drawerTitle:"Add Workflow",mainTitle:"List of Workflows",mainDescription:"It is short description for workflowHierarchy",sideTitle:"List of Workflows",sideDescription:"This is long long long for workflowHierarchy saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:v.$8,postFn:v.fj,putFn:v.m7,deleteFn:v.WN};function k(e){let r=(0,x.useQueryClient)(),i=(0,f.VY)(),{isLoading:c,data:p,error:m}=(0,x.useQuery)("get"+j.key,()=>j.getAllFn(j.endpoint));(0,x.useMutation)(e=>(null==p?void 0:p.data)?j.putFn(j.endpoint,p.data.id,e):j.postFn(j.endpoint,e),{onSuccess(){r.invalidateQueries("get"+j.key),i.success((null==p?void 0:p.data)?"Updated":"Company Created")},onError(e){i.error("Failed")}});let[h,v]=a.useState(0),y=(e,r)=>{v(r)};return(0,t.jsx)(u.Z,{texts:{title:"Workflow Approval Setting",key:"workflowApproval",breadcrumbText:"Workflow Approval Setting",drawerTitle:"Add Workflow Heirarchy Type",mainTitle:"Workflow Approval Setting",mainDescription:"It is short description for leavePolicy",sideTitle:"Workflow Approval Setting",sideDescription:"It is a long established fact thats a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},children:(0,t.jsxs)(o.Z,{sx:{m:2},alignItems:"start",divider:(0,t.jsx)(l.Z,{orientation:"horizontal",flexItem:!0}),children:[(0,t.jsx)(o.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,t.jsxs)(n.Z,{sx:{"& .MuiButtonBase-root":{padding:2},"& .MuiTabs-indicator":{height:"3px",borderRadius:"2px"}},indicatorColor:"primary",value:h,onChange:y,children:[(0,t.jsx)(s.Z,{sx:{"&.Mui-selected":{fontWeight:600,color:"#333333"}},label:(0,t.jsx)(d.Z,{variant:0===h?"body_medium_secondary":"body_medium_muted",component:"h3",children:"Workflow Hierarchy Type"})}),(0,t.jsx)(s.Z,{sx:{"&.Mui-selected":{fontWeight:600,color:"#333333"}},label:(0,t.jsx)(d.Z,{variant:1===h?"body_medium_secondary":"body_medium_muted",component:"h3",children:"Workflow Setting"})})]})}),(0,t.jsxs)(o.Z,{spacing:2,sx:{width:"100%"},children:[(0,t.jsx)(w,{value:h,index:0,children:(0,t.jsx)(b.Z,{plan:{sideBarTitle:"Add Workflow",section:{fields:[{label:"Enter Workflow Hierarchy Type Name",type:"Text",id:"workflowHierarchyTypeName",gridSizes:{xs:12,sm:6,md:12,lg:12},config:{placeholder:"Enter Workflow Hierarchy Type Name"},validations:[{type:"required"}]},{type:"Title",title:"Approver sequence in role",subTitle:"Select the Approvers in order of Hierarchy",gridSizes:{xs:12,sm:6,md:12,lg:12}},{type:"ApproverFieldArray",appendButtonText:"Add another approver",id:"approverSequence",arrayField:{fieldName:"approver",select:{type:"inLine",options:[{value:void 0,label:"None"},{value:"Hierarchy1",label:"Hierarchy 1"},{value:"Hierarchy2",label:"Hierarchy 2"},{value:"Hierarchy3",label:"Hierarchy 3"}]},gridSizes:{xs:12,sm:6,md:12},validations:[{type:"required"}]}}]}}})}),(0,t.jsx)(w,{value:h,index:1,children:(0,t.jsx)(g.Z,{plan:{section:{fields:[{type:"Title",title:"Transfer Approvals",gridSizes:{xs:12,sm:6,md:12,lg:12}},{label:"Select Approval Hierarchy Type",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"transferApprovals",validations:[{type:"required"}],select:{type:"inLine",options:[{value:void 0,label:"None"},{value:"Hierarchy1",label:"Hierarchy1"},{value:"Hierarchy2",label:"Hierarchy2"},{value:"Hierarchy3",label:"Hierarchy3"}]}},{type:"Divider"},{type:"Title",title:"Termination Approvals",gridSizes:{xs:12,sm:6,md:12,lg:12}},{label:"Select Approval Hierarchy Type",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"terminationApprovals",validations:[{type:"required"}],select:{type:"inLine",options:[{value:void 0,label:"None"},{value:"Hierarchy1",label:"Hierarchy1"},{value:"Hierarchy2",label:"Hierarchy2"},{value:"Hierarchy3",label:"Hierarchy3"}]}},{type:"Divider"},{type:"Title",title:"Leave Approvals",gridSizes:{xs:12,sm:6,md:12,lg:12}},{label:"Select Approval Hierarchy Type",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"leaveApprovals",validations:[{type:"required"}],select:{type:"inLine",options:[{value:void 0,label:"None"},{value:"Hierarchy1",label:"Hierarchy1"},{value:"Hierarchy2",label:"Hierarchy2"},{value:"Hierarchy3",label:"Hierarchy3"}]}}]}}})})]})]})})}}},function(e){e.O(0,[3662,3552,4885,5675,7655,129,3169,5242,8360,7417,9912,5003,7757,6535,2678,9482,2802,9774,2888,179],function(){return e(e.s=94559)}),_N_E=e.O()}]);