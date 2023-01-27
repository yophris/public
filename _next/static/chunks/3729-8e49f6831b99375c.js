"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3729],{49701:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(85893),r=t(87357),i=t(26447),a=t(15861),d=t(44057),l=t(67294),s=t(9576),c=t(71666);let u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function p(e){let{dateData:n,holiday:t,themeColor:d}=e,l=new Date(n),s=l.getMonth(),c=l.getDate(),p=l.getDay();return(0,o.jsxs)(i.Z,{direction:"row",spacing:1,sx:{backgroundColor:"#FAFBFC",padding:1,borderRadius:1,borderLeft:"4px solid ".concat(d)},children:[(0,o.jsx)(r.Z,{sx:{border:"0.5px solid ".concat(d),borderRadius:"2.14286px",marginLeft:2.5,width:46,height:46},justifyContent:"start",children:(0,o.jsxs)(i.Z,{sx:{height:"100%"},justifyContent:"center",children:[(0,o.jsx)(a.Z,{sx:{backgroundColor:d,color:"#fff",textAlign:"center",height:"18px"},variant:"smallcopy_bold_light",component:"p",children:u[s]}),(0,o.jsx)(a.Z,{variant:"body_medium_tertiary",component:"p",sx:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:c})]})}),(0,o.jsxs)(i.Z,{direction:"column",sx:{marginLeft:2},children:[(0,o.jsx)(a.Z,{variant:"body_medium_secondary",component:"p",sx:{textAlign:"left"},children:t}),(0,o.jsx)(a.Z,{variant:"subbody_regular_muted",sx:{textAlign:"left"},children:x[p]})]})]})}let m=e=>{let[n,t]=l.useState(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{sx:{height:"30px",marginBottom:1}}),(0,o.jsx)(d.Z,{variant:"text",onClick:()=>t(!0),children:"View Holiday Calendar"}),n&&(0,o.jsx)(c.Z,{open:n,callback:t,title:"View Dubai Holiday Calendar",children:(0,o.jsxs)(i.Z,{divider:(0,o.jsx)(s.Z,{}),children:[(0,o.jsxs)(i.Z,{sx:{m:2},direction:"row",spacing:6,children:[(0,o.jsxs)(i.Z,{spacing:1,children:[(0,o.jsx)(a.Z,{variant:"h3_medium_secondary",component:"h3",sx:{textAlign:"left"},children:"2022"}),(0,o.jsx)(a.Z,{variant:"body_medium_muted",component:"p",sx:{textAlign:"left"},children:"Holiday Year"})]}),(0,o.jsxs)(i.Z,{spacing:1,children:[(0,o.jsx)(a.Z,{variant:"h3_medium_secondary",component:"h3",sx:{textAlign:"left"},children:"20"}),(0,o.jsx)(a.Z,{variant:"body_medium_muted",component:"p",sx:{textAlign:"left"},children:"Public Holiday"})]}),(0,o.jsxs)(i.Z,{spacing:1,children:[(0,o.jsx)(a.Z,{variant:"h3_medium_secondary",component:"h3",sx:{textAlign:"left"},children:"05"}),(0,o.jsx)(a.Z,{variant:"body_medium_muted",component:"p",sx:{textAlign:"left"},children:"Optional Year"})]})]}),(0,o.jsxs)(i.Z,{sx:{m:2},direction:"row",rowGap:2,columnGap:2,flexWrap:"wrap",children:[(0,o.jsx)(p,{dateData:"2022-10-27",holiday:"Dubai Independence Day",themeColor:"#0888B1"}),(0,o.jsx)(p,{dateData:"2022-11-14",holiday:"National Childrens Day",themeColor:"#4456BC"}),(0,o.jsx)(p,{dateData:"2022-10-27",holiday:"Dubai Independence Day",themeColor:"#0888B1"}),(0,o.jsx)(p,{dateData:"2022-11-14",holiday:"National Childrens Day",themeColor:"#4456BC"})]})]})})]})};var h=m},88345:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(85893),r=t(67294),i=t(68245),a=t(15861),d=t(98456),l=t(90629),s=t(13970),c=t(75503),u=t(88767),x=t(87536);function p(e){var n;let{setValue:t,reset:p,label:m,options:h=[{text:"",value:""}],name:g,error:y,isRequired:f,asyncData:b,watch:v,resetField:j,control:Z,getValues:F,..._}=e,C=(0,x.qo)({control:Z,name:null==b?void 0:b.lookup}),[k,D]=r.useState("");console.log("watchFields",g,null==b?void 0:b.lookup,C);let{isLoading:S,data:w,error:W,isSuccess:A}=(0,u.useQuery)({queryKey:["get"+(null==b?void 0:b.key),...(null==b?void 0:b.lookup)||[],C,k],queryFn:()=>b.endpointApi("function"==typeof b.endpoint?b.endpoint(C):b.endpoint,{name:k}),enabled:null==b||!b.lookup||(Array.isArray(C)?!C.some(e=>!e):!!C)}),[E,I]=r.useState(!1),[R,z]=r.useState([]),T=E&&0===R.length;return r.useEffect(()=>{let e=!0;if(T)return(async()=>{e&&z([...(null==w?void 0:w.data.map((null==b?void 0:b.optionTransformation)||(e=>({text:e.name,value:e.id||e.stateCode||e.code||e.isoCode}))))||[]])})(),()=>{e=!1}},[T]),(0,o.jsxs)("div",{children:[(0,o.jsxs)(a.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[m,f&&(0,o.jsx)(a.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,o.jsx)(i.Z,{popupIcon:S?(0,o.jsx)(d.Z,{color:"inherit",size:20}):(0,o.jsx)(c.Z,{}),sx:{".MuiAutocomplete-option":{color:"#333",fontSize:"1.4rem"},".MuiAutocomplete-endAdornment":{svg:{fontSize:"2rem",fontWeight:500,color:"text.secondary"}}},open:E,onOpen(){I(!0)},onClose(){I(!1)},value:null===(n=F(g))||void 0===n?void 0:n.value,isOptionEqualToValue:(e,n)=>e.value===n.value,onChange:(e,n)=>t(g,n),getOptionLabel:e=>e.text,options:R,loading:S,renderOption:(e,n,t)=>(0,o.jsx)("li",{...e,children:(0,o.jsx)(a.Z,{variant:"body_medium_secondary",component:"p",children:n.text})}),onInputChange(e,n){D(n)},renderInput:e=>(0,o.jsx)(l.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,p:1},ref:e.InputProps.ref,children:(0,o.jsx)(s.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},...e,endAdornment:(0,o.jsx)(r.Fragment,{children:e.InputProps.endAdornment}),..._})})})]},JSON.stringify(C))}},53531:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(85893);t(67294);var r=t(26447),i=t(69368),a=t(15861),d=t(25675),l=t.n(d);function s(e){let{label:n,register:t,...d}=e;return(0,o.jsxs)(r.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,o.jsx)(i.Z,{size:"large",sx:{m:0,p:0,"& .MuiSvgIcon-root":{fontSize:"2rem"}},inputProps:{"aria-label":"controlled"},...t&&t,...d}),(0,o.jsx)(a.Z,{variant:"body_medium_secondary",component:"p",children:n}),(0,o.jsx)(l(),{src:"/images/infoIcon.svg",width:15,height:15,alt:"info"})]})}},69745:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(85893);t(67294);var r=t(87357),i=t(15861),a=t(18360),d=t(18972),l=t(90948),s=t(13970),c=t(75503);function u(e){let{label:n,name:t,options:l,register:s,setValue:u,error:p,isRequired:m,getValues:h,watch:g,hideLabel:y=!1,...f}=e;return(0,o.jsxs)(r.Z,{sx:{width:"100%"},children:[!y&&(0,o.jsxs)(i.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[n,m&&(0,o.jsx)(i.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,o.jsxs)(a.Z,{...s&&s,...f,input:(0,o.jsx)(x,{}),IconComponent:c.Z,sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary",width:"100%"},children:[(0,o.jsx)(d.Z,{selected:!0,sx:{fontSize:"1.4rem",color:"text.secondary",fontStyle:"italic"},value:"",children:"None"}),l.length&&l.map((e,n)=>(0,o.jsx)(d.Z,{sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:e.value,disabled:e.disabled,children:e.text},n))]}),(null==p?void 0:p.message)&&(0,o.jsx)(i.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:p.message})]})}let x=(0,l.ZP)(s.ZP)(e=>{let{theme:n}=e;return{alignItems:"center",backgroundColor:n.palette.background.main,border:"1px solid #EFEFEF",borderRadius:n.spacing(1),display:"flex",fontSize:"1.4rem",transition:n.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"},"label + &":{marginTop:n.spacing(3)},"& .MuiInputBase-input":{color:n.palette.text.secondary,padding:"".concat(n.spacing(1.25)," ").concat(n.spacing(2))},"& .MuiSvgIcon-root":{fontSize:"2rem",marginRight:2,color:n.palette.text.tertiary}}})},81720:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(85893),r=t(67294),i=t(35294),a=t(18972),d=t(15861),l=t(96301);function s(e){let{anchorEl:n,setAnchorEl:t,menuToggle:s,setSelectedType:c,isLast:u}=e,[x,p]=r.useState(""),m=(e,n)=>{p(n.key),c(n),t(null)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{anchorEl:null==n?void 0:n.current,id:"account-menu",open:s,onClose:()=>t(null),placement:"bottom-start",PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"&:before":{content:'""',display:"block",position:"absolute",top:0,right:u?"30%":"50%",width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)"}}},transformOrigin:{horizontal:"center",vertical:"top"},anchorOrigin:{horizontal:"center",vertical:"bottom"},children:l._g.map((e,n)=>(0,o.jsx)(a.Z,{selected:e.key===x,onClick:n=>m(n,e),children:(0,o.jsx)(d.Z,{variant:"body_medium_secondary",component:"p",children:e.value})},e.key))})})}},16405:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(85893),r=t(67294),i=t(26447),a=t(15861),d=t(87357);t(1574);var l=t(96301);function s(e){let{value:n,name:t,watch:s,lookup:c}=e,[u,x]=r.useState({}),[p,m]=r.useState("");return r.useEffect(e=>{console.log("watch in wwro",s(c),c,t);let{sunday:n,monday:o,tuesday:r,wednesday:i,thursday:a,friday:d,saturday:l}={id:"e2695485-d031-41b1-9b7f-9bbe7544164e",tenantId:"0c961b01-0069-4a4e-8d62-d57e90088ea2",name:"workweek 4",sunday:"WEEKOFF",monday:"D_FWD",tuesday:"D_FHWD",wednesday:"D_SHWD",thursday:"R_FWD",friday:"R_FHWD",saturday:"R_SHWD",createdAt:"2022-12-20T00:32:39.556Z",updatedAt:"2022-12-20T00:32:39.556Z"};x({sunday:n,monday:o,tuesday:r,wednesday:i,thursday:a,friday:d,saturday:l})},[s(c)]),(0,o.jsx)(i.Z,{justifyContent:"center",direction:"row",spacing:2,sx:{height:"70px"},children:u&&[0,1,2,3,4,5,6].map((e,n)=>{let t=l._g.find(n=>n.key===u[l.ZF[e]]),r={label:l.z1[l.ZF[e]],bgColor:null==t?void 0:t.bgColor};return console.log("modified data: ",r),(0,o.jsxs)(i.Z,{justifyContent:"space-around",children:[(0,o.jsx)(a.Z,{variant:"body_medium_secondary",component:"p",children:r.label}),(0,o.jsx)(d.Z,{alignItems:"center",sx:{width:30,height:30,background:r.bgColor,border:"1px solid #EFEFEF",borderRadius:"50%"}})]},n)})})}t(25675),t(81720)},26309:function(e,n,t){t.d(n,{Z:function(){return _}});var o=t(85893),r=t(67294),i=t(23508),a=t(86886),d=t(87357),l=t(26447),s=t(82280),c=t(22797),u=t(38895),x=t(15861),p=t(67720),m=t(11703),h=t(40044),g=t(45697),y=t.n(g);function f(e){let{children:n,value:t,index:r,...i}=e;return(0,o.jsx)("div",{role:"tabpanel",hidden:t!==r,...i,style:{marginTop:0},children:t===r&&(0,o.jsx)(l.Z,{direction:"column",spacing:2,children:n})})}function b(e){let{index:n,tabs:t,fields:i,renderFields:a,errors:s,name:c,setFieldValue:u,leaveType:g}=e,[y,b]=r.useState(0),v=(e,n)=>{b(n)};return(0,o.jsxs)(l.Z,{alignItems:"start",divider:(0,o.jsx)(p.Z,{orientation:"horizontal",flexItem:!0}),children:[(0,o.jsx)(l.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,o.jsx)(m.Z,{sx:{"& .MuiButtonBase-root":{padding:2},"& .MuiTabs-indicator":{height:"3px",borderRadius:"2px"}},indicatorColor:"primary",value:y,onChange:v,centered:!0,children:t.map((e,n)=>(0,o.jsx)(h.Z,{sx:{"&.Mui-selected":{fontWeight:600,color:"#333333"}},label:(0,o.jsx)(x.Z,{variant:n===y?"body_medium_secondary":"body_medium_muted",component:"p",children:e.text})},n))})}),(0,o.jsx)(l.Z,{spacing:2,sx:{padding:2},children:t.map((e,t)=>(0,o.jsx)(f,{value:y,index:t,children:e.fields.map((e,t)=>{u("".concat(c,".").concat(n,".").concat(c,"Id"),g.value);let r={...e,attr:{...e.attr,name:"".concat(c,".").concat(n,".").concat(e.attr.name)}};return(0,o.jsx)(d.Z,{children:a(r,s)},t)})},t))})]})}f.propTypes={children:y().node,index:y().number.isRequired,value:y().number.isRequired};var v=t(87536),j=t(44057),Z=t(1574),F=t(69745);function _(e){let{renderFields:n,errors:t,...p}=e,{fields:m,append:h,prepend:g,remove:y,swap:f,move:_,insert:C}=(0,v.Dq)({control:p.control,name:p.name}),[k,D]=r.useState(!1),S=e=>(n,t)=>{D(!!t&&e)},w=[{text:"Sick Leave",value:"sl"},{text:"Earned Leave",value:"el"},{text:"Annual Leave",value:"al"}],[W,A]=r.useState({text:"",value:""}),[E,I]=r.useState([]),R=e=>{let n=w.find(n=>n.value===e.target.value);A(n)},z=()=>{""!==W.text&&(I([...E,W.text]),h(p.fieldForArray))};return(0,o.jsxs)(a.ZP,{item:!0,sx:{paddingLeft:0,margin:0,width:"100%"},children:[(0,o.jsxs)(a.ZP,{container:!0,sx:{marginBottom:2},spacing:2,children:[(0,o.jsx)(a.ZP,{item:!0,xs:9,children:(0,o.jsx)(F.Z,{label:"Select Leave Type to Add in policy",options:w,control:p.control,setValue:p.setValue,getValues:p.getValues,value:W.value,onChange:R})}),(0,o.jsxs)(a.ZP,{item:!0,xs:3,children:[(0,o.jsx)(d.Z,{sx:{height:"20px",marginBottom:"8px"}}),(0,o.jsx)(j.Z,{onClick:z,styleOverrides:{fontSize:"1.6rem",height:"44px",px:0,borderRadius:"5px",borderColor:"#377DFF",width:"100%"},variant:"outlined",children:"Add Leave Type"})]})]}),m&&m.map((e,r)=>(0,o.jsxs)(s.Z,{expanded:"panel1"===k,onChange:S("panel1"),sx:{"&.MuiPaper-root.MuiAccordion-root.Mui-expanded":{margin:0,marginBottom:1.25},"&:last-of-type, &:first-of-type":{borderRadius:"8px"},overflow:"hidden",borderRadius:"8px",marginBottom:"10px",marginTop:2.5},children:[(0,o.jsx)(u.Z,{expandIcon:(0,o.jsx)(i.Z,{sx:{fontSize:"3rem",color:"#444444"}}),children:(0,o.jsxs)(l.Z,{sx:{width:"100%",marginRight:2},direction:"row",alignItems:"center",spacing:1.5,children:[(0,o.jsx)(Z.Z,{size:18,colorVal:"#46C0C0"}),(0,o.jsx)(x.Z,{variant:"h3_medium_secondary",component:"h3",children:E[r]})]})}),(0,o.jsx)(c.Z,{sx:{paddingTop:0},children:(0,o.jsx)(b,{index:r,tabs:p.tabs,renderFields:n,errors:t,name:p.name,setFieldValue:p.setValue,leaveType:w.find(e=>e.text===E[r])})})]},r))]})}},96301:function(e,n,t){t.d(n,{ZF:function(){return i},_g:function(){return o},z1:function(){return r}});let o=[{key:"D_FWD",value:"Full Working Day",bgColor:"#4586FF"},{key:"D_FHWD",value:"Only First Half Working Day",bgColor:"linear-gradient(to right, #4586FF 50%, #8CB4FF 50%)"},{key:"D_SHWD",value:"Only Second Half Working Day",bgColor:"linear-gradient(to left, #4586FF 50%, #8CB4FF 50%)"},{key:"R_FWD",value:"Remote: Full Working Day",bgColor:"#a0d433"},{key:"R_FHWD",value:"Remote: Only First Half Working Day",bgColor:"linear-gradient(to right, #a0d433 50%, #a0d4336e 50%)"},{key:"R_SHWD",value:"Remote: Only Second Half Working Day",bgColor:"linear-gradient(to left, #a0d433 50%, #a0d4336e 50%)"},{key:"WEEKOFF",value:"Weekoff",bgColor:"#EFEFEF"}],r={sunday:"SUN",monday:"MON",tuesday:"TUE",wednesday:"WED",thursday:"THU",friday:"FRI",saturday:"SAT"},i={0:"sunday",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday"}}}]);