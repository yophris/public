(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[448],{39272:function(e,n,t){"use strict";t.d(n,{I:function(){return s},w:function(){return function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new FormData,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return i.forEach(n,(n,s)=>{if(null===n)return;let o=i.isEmpty(r)?s:"".concat(r,"[").concat(s,"]");n instanceof File?t.set(o,n):n instanceof Array?i.forEach(n,e=>{t.append("".concat(o),e)}):n instanceof Object?e(n,t,o):t.set(o,n)}),t}}});let r=t(18998),i=t(96486),s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=r(n),i=t.evaluate(e);return console.log("expression",i),i}},44057:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(85893);t(67294);var i=t(83321);function s(e){let{children:n,variant:t="contained",styleOverrides:s,...o}=e;return(0,r.jsx)(i.Z,{variant:t,sx:{fontSize:"1.2rem",fontWeight:500,padding:"8px 32px",borderRadius:1.25,textTransform:"none",...s},...o,children:n})}},1574:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(85893);t(67294);var i=t(87357);function s(e){let{colorVal:n="#377DFF",size:t=12,...s}=e;return(0,r.jsx)(i.Z,{sx:{width:t,height:t,backgroundColor:n,borderRadius:50},...s})}},9576:function(e,n,t){"use strict";var r=t(85893),i=t(67720);t(67294);let s=e=>{let{direction:n="horizontal",borderColor:t="#EFEFEF",rest:s}=e;return(0,r.jsx)(i.Z,{sx:{borderColor:t},...s,orientation:n,flexItem:!0})};n.Z=s},76595:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(85893),i=t(67294),s=t(47533),o=t(26447),a=t(86886),l=t(15861),d=t(90629),c=t(67720),u=t(87536),h=t(39272),x=t(7258);let m=e=>(console.log(e,"formmm"),function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r={};for(let i in n)"validation"in n[i]?(console.log("Has validation",n[i].validation),n[i].validation&&(r[i]=function(e){let{id:n,validationType:t,validations:r=[]}=e,i=x[t]();return r.forEach(e=>{let{params:n,type:t}=e;i[t]&&(console.log(t,n),i=i[t](...n))}),i}(n[i].validation))):r[i]=e(n[i],t+1);return x.object().shape(r)}(function(e){let n={};for(let t in e){let r=t.split("."),i=n;for(;r.length>1;){let s=r.shift();i=i[s]=i[s]||{}}i[r[0]]=e[t]}return console.log("Deep",n),n}((0,h.I)(e,'**.fields.{\n        "key":attr.name,\n        "validation":validation\n    }').reduce((e,n)=>(e[n.key]={validation:null==n?void 0:n.validation},e),{}))));var p=t(44057),f=t(90438),v=function(e){let{form:n,defaultValues:t,submitData:h,edit:x,validationSchema:v,showButtons:g=!0,padding:j=3,cancelDrawer:Z=()=>{}}=e,{register:b,control:y,handleSubmit:E,setValue:F,getFieldState:w,reset:_,resetField:k,watch:P,formState:{errors:C},getValues:S}=(0,u.cI)({resolver:(0,s.X)(m(n)),defaultValues:t}),T=(e,n)=>{var t,i,s;let{attr:o}=e,a=e.element,[l,d]=o.name.split(".");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a,{...o,control:y,register:b(o.name),error:w(o.name).error,setValue:F,isRequired:null===(t=null===(i=null==v?void 0:v.fields[l])||void 0===i?void 0:i.fields[d])||void 0===t?void 0:null===(s=t.exclusiveTests)||void 0===s?void 0:s.required,watch:P,reset:_,resetField:k,getValues:S})})};return i.useEffect(e=>{x&&_(x),console.log("Data for Edit",x)},[x]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:E(h),style:{height:"100%"},children:[(0,r.jsxs)(o.Z,{justifyContent:"space-between",sx:{height:"100%"},children:[(0,r.jsx)(o.Z,{sx:{padding:j,flex:1,overflow:"auto"},children:(0,r.jsx)(a.ZP,{container:!0,spacing:3,children:null==n?void 0:n.map((e,n)=>{var t;return(0,r.jsxs)(i.Fragment,{children:[(null==e?void 0:e.header)&&(0,r.jsxs)(r.Fragment,{children:[n>0&&!e.noDivider&&(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsx)(c.Z,{orientation:"horizontal",flexItem:!0,sx:{borderColor:"#EFEFEF",marginTop:2,width:"100%"}})}),(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsxs)(o.Z,{sx:{m:0,p:0},children:[(0,r.jsx)(l.Z,{variant:"h3_bold_secondary",component:"h3",sx:{marginTop:1},children:null==e?void 0:e.header}),(null==e?void 0:e.subHeader)&&(0,r.jsx)(l.Z,{variant:"body_medium_muted",component:"p",children:e.subHeader})]})})]}),null==e?void 0:null===(t=e.fields)||void 0===t?void 0:t.map((e,n)=>"group"===e.type?(0,r.jsx)(e.element,{setValue:F,renderFields:T,getValues:S,control:y,watch:P,errors:C,...e},n):(0,r.jsx)(a.ZP,{item:!0,sx:{paddingLeft:0,margin:0,width:"100%"},...e,children:e.children?(0,r.jsxs)(a.ZP,{container:!0,direction:"row",alignItems:"flex-start",spacing:3,children:[(0,r.jsx)(a.ZP,{item:!0,...e.children,children:T(e,C)}),(0,r.jsx)(a.ZP,{item:!0,...e.children,children:T(e.children,C)})]}):T(e,C)},n))]},n)})})}),g&&(0,r.jsx)(d.Z,{sx:{padding:1.25},square:!0,elevation:1,children:(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"flex-end",spacing:1,children:[Z&&(0,r.jsx)(p.Z,{variant:"outlined",onClick:Z,children:"Cancel"}),(0,r.jsx)(p.Z,{type:"submit",variant:"contained",children:x?"Update":"Save"})]})})]}),(0,r.jsx)(f.DevTool,{control:y,placement:"top-right"})]})})}},77339:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},s:function(){return d}});var r=t(85893);t(67294);var i=t(15861),s=t(26447),o=t(87357),a=t(13970);function l(e){let{headLabel:n,label:t,unit:o="",inputAdornment:l={text:"",placement:"start"},register:c,name:u,error:h,isRequired:x,isMultiline:m,setValue:p,...f}=e;return(0,r.jsxs)("div",{children:[n&&(0,r.jsx)(i.Z,{variant:"h3_bold_secondary",component:"h3",mb:1,children:n}),(0,r.jsxs)(i.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[t,x&&(0,r.jsx)(i.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",margin:0,overflow:"hidden"},children:["start"===l.placement&&""!==l.text&&(0,r.jsx)(d,{text:l.text}),(0,r.jsx)(a.ZP,{size:"small",sx:{width:"100%",p:1.4,fontSize:"1.4rem",fontWeight:500,color:"text.secondary","& .MuiInputBase-input":{p:0}},error:!!(null==h?void 0:h.message),placeholder:t,inputProps:{"aria-label":t},...c&&c,...f,multiline:m,rows:4}),"end"===l.placement&&""!==l.text&&(0,r.jsx)(d,{text:l.text})]}),(null==h?void 0:h.message)&&(0,r.jsx)(i.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:h.message})]})}let d=e=>{let{text:n}=e;return(0,r.jsx)(o.Z,{sx:{background:"#fff",px:2.5,py:1.4,height:"100%"},children:(0,r.jsx)(i.Z,{variant:"body_medium_secondary",children:n})})}},71666:function(e,n,t){"use strict";var r=t(85893),i=t(67294),s=t(77533),o=t(26447),a=t(90629),l=t(15861),d=t(93946),c=t(50594),u=t(87357);n.Z=function(e){let{open:n=!1,callback:t,title:h,children:x}=e,[m,p]=i.useState(n);return(0,r.jsx)("div",{children:(0,r.jsx)(s.ZP,{anchor:"right",open:m,sx:{"& .MuiDrawer-paper":{width:"50%"}},children:(0,r.jsx)(u.Z,{role:"presentation",children:(0,r.jsxs)(o.Z,{sx:{height:"100vh"},children:[(0,r.jsx)(a.Z,{square:!0,elevation:2,children:(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",sx:{margin:1.25,flexBasis:"auto"},children:[(0,r.jsx)(o.Z,{alignItems:"center",justifyContent:"center",children:(0,r.jsx)(l.Z,{variant:"h1_bold_secondary",component:"h1",children:h})}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(d.Z,{onClick(e){e&&"keydown"===e.type&&("Tab"===e.key||"Shift"===e.key)||(t(!1),p(!1))},sx:{padding:0},children:(0,r.jsx)(c.Z,{sx:{fontSize:"2.2rem",margin:"15px",color:"#000"}})})})]})}),x]})})})})}},54742:function(e,n,t){"use strict";var r=t(85893),i=t(67294),s=t(98396),o=t(23795),a=t(87357),l=t(26447),d=t(12963),c=t(90629),u=t(86886),h=t(15861);t(41664),t(9576),n.Z=i.memo(function(e){let{children:n,texts:t,SideChildren:i}=e,x=(0,s.Z)("(max-width:900px)"),m=[(0,r.jsx)(o.Z,{href:"/app/settings",sx:{fontSize:"1.6rem",fontWeight:600,color:"primary.main",cursor:"pointer"},underline:"hover",color:"inherit",children:"SETTINGS"},"1"),(0,r.jsx)(h.Z,{variant:"h3_bold_secondary",children:null==t?void 0:t.breadcrumbText},"2")];return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{sx:{padding:2,background:"#FAFBFC",borderBottom:"1px solid #EBEBEB"},children:(0,r.jsx)(d.Z,{separator:">",sx:{"& .MuiBreadcrumbs-separator":{fontSize:"2rem",fontWeight:500}},"aria-label":"breadcrumb",children:m})}),(0,r.jsx)(l.Z,{sx:{margin:2,background:"#F5F6FA"},children:(0,r.jsx)(c.Z,{sx:{border:"1px solid #EFEFEF",borderRadius:2.5,overflow:"hidden"},variant:"outlined",children:(0,r.jsxs)(u.ZP,{container:!0,direction:"row",children:[(0,r.jsxs)(u.ZP,{item:!0,md:8,xs:12,sx:!x&&{borderRight:"1px solid #EFEFEF"},children:[(0,r.jsxs)(a.Z,{sx:{px:2.5,pt:2.5},children:[(0,r.jsx)(h.Z,{variant:"h2_bold_secondary",component:"h2",children:null==t?void 0:t.mainTitle}),(0,r.jsx)(h.Z,{variant:"body_medium_muted",component:"p",children:null==t?void 0:t.mainDescription})]}),(0,r.jsx)(l.Z,{sx:{height:"80vh"},children:n})]}),(0,r.jsx)(u.ZP,{item:!0,md:4,sx:x?{display:"none"}:{display:"block"},children:(0,r.jsxs)(l.Z,{sx:{margin:2.5},spacing:1,children:[(0,r.jsx)(h.Z,{variant:"h2_bold_secondary",children:null==t?void 0:t.sideTitle}),(0,r.jsx)(h.Z,{variant:"body_medium_muted",children:null==t?void 0:t.sideDescription}),i&&(0,r.jsx)(i,{})]})})]})})})]})})},80681:function(e,n,t){"use strict";var r=t(70594);let i=r.Z.create({baseURL:"https://sfoimm4rvf.execute-api.us-east-1.amazonaws.com/api/v1/"});var s=t(80129);let o=async e=>{let{path:n="/",method:t="get",data:r=null,secure:o=!0,uploadProgessCB:a=()=>{}}=e;if("get"==t&&r){let l=s.stringify(r,{addQueryPrefix:!0});n+=l}try{let{data:d,status:c}=await i({url:n,method:t,data:r,headers:{"X-TENANT-ID":"88c0a6e3-dc55-4aea-908b-eeeb252a3555"},onUploadProgress(e){let n=Math.round(100*e.loaded/e.total);a(n)}});return{success:!0,data:(null==d?void 0:d.data)?d.data:d,status:c,message:"success"}}catch(u){if(console.log(u),u.response)throw{success:!1,data:u.response.data,status:u.response.status,message:"Response Error"};if(u.request)throw console.log(u.request),{success:!1,data:null,status:null,message:"Request Error"};throw{success:!1,data:null,status:null,message:"Request Set up Error"}}};n.Z=o},558:function(e,n,t){"use strict";t.d(n,{$8:function(){return i},WN:function(){return a},fj:function(){return s},m7:function(){return o}});var r=t(80681);let i=(e,n)=>(0,r.Z)({path:e,method:"get",data:n}),s=(e,n,t)=>(0,r.Z)({path:e,method:"post",data:n,uploadProgessCB:t}),o=(e,n,t,i)=>(0,r.Z)({path:e+"/"+n,method:"put",data:t,uploadProgessCB:i}),a=(e,n)=>(0,r.Z)({path:e+"/"+(null==n?void 0:n.id),method:"delete"})},24654:function(){}}]);