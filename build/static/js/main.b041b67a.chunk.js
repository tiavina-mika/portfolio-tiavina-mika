(window["webpackJsonpportfolio-tiavina-mika"]=window["webpackJsonpportfolio-tiavina-mika"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),c=a(32),l=a.n(c),s=(a(46),a(6)),m=a(71),u=a(68),d=a(72),f=a(27),p=a.n(f),g=a(5),b=Object(u.a)({root:{display:"flex",justifyContent:"center",border:"1px solid #b2b2b2"},link:{fontFamily:"Montserrat",textTransform:"uppercase",fontSize:16,color:"#403b41",fontWeight:300,textDecoration:"none",padding:"20px 40px","&:hover":{color:"#db4b51"}}}),y=function(e){var t=e.onClick,a=b();return r.a.createElement(g.a.div,{className:a.root,initial:{marginTop:500},animate:{marginTop:0},transition:{type:"spring",stiffness:260,damping:20,delay:.2}},r.a.createElement(d.a,{className:a.link,onClick:t},"Accueil"),r.a.createElement(p.a,{href:"#things",className:a.link},"A propos"),r.a.createElement(p.a,{href:"#stuff",className:a.link},"Stuff"))},h=a(70),x=a(11),O=a(36),E=a(2);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=Object(u.a)({root:function(e){return{backgroundColor:e.backgroundColor,border:e.border,color:e.color,width:e.width,height:e.height,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginTop:e.marginTop,textAlign:e.textAlign,fontSize:e.fontSize}}}),C=function(e){var t=e.children,a=e.initial,n=e.animate,i=e.delay,o=e.type,c=void 0===o?"spring":o,l=e.stiffness,s=void 0===l?260:l,m=e.damping,u=void 0===m?20:m,d=e.style,f=e.className,p=Object(O.a)(e,["children","initial","animate","delay","type","stiffness","damping","style","className"]),b=k(p);return t?r.a.createElement(g.a.div,{style:j({},d),className:Object(E.a)(b.root,f),initial:j({},a),animate:j({},n),transition:{type:c,stiffness:s,damping:u,delay:i}},t):r.a.createElement(g.a.div,{style:j({},d),className:Object(E.a)(b.root,f),initial:j({},a),animate:j({},n),transition:{type:c,stiffness:s,damping:u,delay:i}})},w=Object(u.a)({h1:{fontFamily:["Montserrat","sans-serif","Arial"].join(","),paddingBottom:5,color:"#373432",fontWeight:700,fontSize:60,letterSpacing:-5}}),N=function(e){var t=e.text,a=e.id,n=w();return r.a.createElement(C,{initial:{marginLeft:-3e3},animate:{marginLeft:0},delay:1},r.a.createElement(h.a,{className:n.h1,id:a},t))},S=function(){return r.a.createElement(C,{backgroundColor:"#1ABC9C",height:10,width:100,marginTop:20,marginBottom:20,initial:{marginLeft:-5e3},animate:{marginLeft:0},delay:1.3})},B=Object(u.a)({title:{fontFamily:["Montserrat","sans-serif","Arial"].join(","),color:"#6D6D6D",fontSize:20}}),I=function(e){var t=e.text,a=B();return r.a.createElement(C,{initial:{marginLeft:-7e3},animate:{marginLeft:0},delay:1.3,textAlign:"justify"},r.a.createElement(h.a,{variant:"subtitle2",className:a.title},t))},R=Object(u.a)({root:{width:"50%"}}),A=function(e){var t=e.children,a=R();return r.a.createElement(g.a.div,{className:a.root,initial:{marginLeft:-8e3},animate:{marginLeft:0},transition:{type:"spring",stiffness:260,damping:20,delay:1.2}},t)},T=Object(u.a)({root:{width:"50%"}}),L=function(e){var t=e.children,a=T();return r.a.createElement(g.a.div,{className:a.root,initial:{marginLeft:5e3},animate:{marginLeft:0},transition:{type:"spring",stiffness:260,damping:20,delay:1.2}},t)},W=a(16),P=a(33);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var F=["/me2.jpg","/me3.jpg","/me5.jpg","/me6.jpg"],z=Object(u.a)({body:{overscrollBehaviorY:"contain",margin:0,padding:0,height:"100%",width:"100%",userSelect:"none",position:"fixed",overflow:"hidden"},root:{overflow:"hidden",cursor:"url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto","& div":{position:"absolute",width:"25vw",height:"75vh",willChange:"transform",display:"flex",alignItems:"flex-start",justifyContent:"center","& div":{backgroundColor:"white",backgroundSize:"auto 75%",backgroundRepeat:"no-repeat",backgroundPosition:"center center",width:"45vh",maxWidth:"350px",height:"85vh",maxHeight:"570px",willChange:"transform",borderRadius:"10px",boxShadow:"0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)"}}}}),M=function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e}},q=function(e,t){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")},Y=function(){var e=Object(n.useState)((function(){return new Set})),t=Object(s.a)(e,1)[0],a=Object(W.c)(F.length,(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},M(e),{from:{x:0,rot:0,scale:1.5,y:-1e3}})})),i=Object(s.a)(a,2),o=i[0],c=i[1],l=z(),m=Object(P.a)((function(e){var a=Object(s.a)(e.args,1)[0],n=e.down,r=Object(s.a)(e.delta,1)[0],i=(e.distance,Object(s.a)(e.direction,1)[0]),o=e.velocity,l=i<0?-1:1;!n&&o>.2&&t.add(a),c((function(e){if(a===e){var i=t.has(a);return{x:i?(window.innerWidth-500)*l:n?r:0,rot:r/100+(i?10*l*o:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:i?200:500}}}})),n||t.size!==F.length||setTimeout((function(){return t.clear()||c((function(e){return M(e)}))}),600)}));return Object(n.useEffect)((function(){return document.getElementsByTagName("html")[0].classList.remove(l.body),document.getElementsByTagName("html")[0].classList.remove(l.body)}),[l.body]),Object(n.useEffect)((function(){return document.body.classList.add(l.body),document.body.classList.remove(l.body)}),[l.body]),o.map((function(e,t){var a=e.x,n=e.y,i=e.rot,o=e.scale;return r.a.createElement("div",{className:l.root},r.a.createElement(W.a.div,{key:t,style:{transform:Object(W.b)([a,n],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))}},r.a.createElement(W.a.div,Object.assign({},m(t),{style:{transform:Object(W.b)([i,o],q),backgroundImage:"url(".concat(F[t],")")}}))))}))},G=a(34),U=a.n(G),$=Object(u.a)({title:{fontSize:30},subtitle:{},description:{lineHeight:"30px",fontWeight:300,fontSize:18},buttonContainer:{marginTop:30},downloadLink:{color:"#333333",border:"2px solid rgb(34,34,34)",borderRadius:0,letterSpacing:"2px",fontSize:14,fontFamily:["Montserrat","Helvetica","Arial","Lucida","sans-serif"].join(","),fontWeight:700,textTransform:"uppercase",padding:"15px 25px",backgroundColor:"rgba(0,0,0,0)",textDecoration:"none",transition:"all 0.5s",display:"flex",justifyContent:"space-between",alignItems:"flex-end",width:250,"&:hover":{color:"#fff",backgroundIage:"initial",backgroundColor:"#333333"}}}),H=function(){var e=$();return r.a.createElement("div",{className:e.root},r.a.createElement(C,{initial:{marginLeft:-6200},animate:{marginLeft:0},delay:1.8,marginBottom:10},r.a.createElement(h.a,{variant:"h1",className:e.title},"Tiavina Michael Ralainirina")),r.a.createElement(C,{initial:{marginLeft:-6400},animate:{marginLeft:0},delay:2.2,fontSize:30,marginBottom:10},r.a.createElement(h.a,{variant:"h3",className:e.subtitle},"Developpeur bas\xe9 \xe0 Madagascar")),r.a.createElement(C,{initial:{marginLeft:-9e3},animate:{marginLeft:0},delay:2.4,dumping:0,marginTop:10,textAlign:"justify"},r.a.createElement(h.a,{variant:"paragraph",className:e.description},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement(C,{initial:{marginLeft:-6800},animate:{marginLeft:0},delay:2.8,className:e.buttonContainer},r.a.createElement("a",{href:"".concat("","/cv-tiavina-michael.pdf"),download:!0,className:e.downloadLink},r.a.createElement(h.a,null,"telecharger mon CV "),r.a.createElement(U.a,{className:e.rightIcon}))))},Q=Object(u.a)({root:{display:"flex",width:"100%",marginTop:75}}),J=function(){var e=Q();return r.a.createElement("div",{className:e.root},r.a.createElement(A,{direction:"left"},r.a.createElement(Y,null)),r.a.createElement(L,{direction:"right"},r.a.createElement(H,null)))},X=Object(u.a)({root:{width:"60%",margin:"auto",paddingTop:75,paddingBottom:190,height:"100vh"}}),V=function(e){var t=e.open,a=X();return r.a.createElement("div",{className:a.root},r.a.createElement(N,{text:"A PROPS DE MOI",id:"about",open:t}),r.a.createElement(S,null),r.a.createElement(I,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"}),r.a.createElement(J,null))},Z=a(17),_=Object(u.a)({circleIn:{stroke:"#31BCB1",fill:"transparent",strokeWidth:.3},circleOut:{stroke:"#16534E",fill:"transparent",strokeWidth:"0.3"},text:{fill:"#fff",fontSize:4,fontWeight:700,fontFamily:"Muli"},circleInClicked:{fill:"#31BCB1",stroke:"#0B2926",strokeWidth:10}}),K=function(e){var t=e.cx,a=e.cy,n=e.valuesR,i=e.durR,o=e.valuesCy,c=e.durCy,l=e.out,m=e.text,u=r.a.useState(!1),d=Object(s.a)(u,2),f=d[0],p=d[1],b=_(),y={cy:Object(Z.a)(o),r:f?n.map((function(e){return 2*e})):n},h={r:{duration:i,yoyo:1/0,ease:"linear"},cy:{duration:c,yoyo:1/0,ease:"linear"}};return r.a.createElement("g",null,r.a.createElement(g.a.circle,{cx:t||"70",cy:o[0],className:l?b.circleOut:Object(E.a)(b.circleIn,f?b.circleInClicked:""),animate:y,transition:h,whileTap:!l&&function(){return p(!f)},onMouseEnter:!l&&function(){return p(!0)},onMouseOut:!l&&function(){return p(!1)}}),!l&&r.a.createElement("text",{x:t,y:f?a/1.1:a,textAnchor:"middle",className:b.text},m))},ee=function(e){var t=e.text,a=e.cy,n=e.cx,i=e.valuesROut,o=e.valuesCy,c=e.valuesRIn,l=e.durR,s=e.durCyOut,m=e.durCyIn;return r.a.createElement("svg",null,r.a.createElement("g",null,r.a.createElement(K,{out:!0,cx:n,valuesR:i||[28,33,28],durR:l||"3",valuesCy:o,durCy:s||"4.1"}),r.a.createElement(K,{valuesR:c||[22,27,22],cx:n,cy:a,durR:l||"3",valuesCy:o,durCy:m||"4",text:t})))},te=Object(u.a)({container:{backgroundColor:"#000"},shadow:{fill:"none",stroke:"#fff",strokeWidth:"0.1px"},circle3:{fill:"red",stroke:"#40A9F3",strokeWidth:"0.1px"},text:{fill:"#fff",fontSize:8},circleBg:{fill:"none",stroke:"#606060",strokeDasharray:1,strokeWidth:.2},lines:{stroke:"#404040",strokeWidth:"0.4"},animatedLines:{stroke:"#31BCB1",strokeWidth:"0.4"}}),ae=[122,124,127,124,122],ne=function(){var e=te(),t=r.a.useState({x1:100,x2:100,y1:0,y2:80}),a=Object(s.a)(t,2),n=a[0],i=a[1];return r.a.createElement("div",{onWheel:function(e){e.pageX,e.pageY;var t=e.deltaY,a=n.x1,r=n.x2,o=n.y2;i(t>0?{x1:a+10,x2:r+50,y2:o+50}:{x1:a-10,x2:r-50,y2:o-50})}},r.a.createElement("svg",{viewBox:"0 0 300 300",className:e.container},r.a.createElement("line",{x1:"20",x2:"20",y1:"0",y2:"300",className:e.lines}),r.a.createElement("circle",{r:"28",cx:"115",cy:"122",className:e.circleBg}),r.a.createElement("g",null,r.a.createElement(ee,{valuesCy:[80,82,85,82,80],cx:"115",durR:"4",durCyOut:"4.5",name:"top",text:"Design -",cy:"70"})),r.a.createElement("g",null,r.a.createElement(ee,{valuesCy:ae,durR:"3.5",cx:"72",name:"left",text:"Web -",cy:"110"})),r.a.createElement("g",null,r.a.createElement(ee,{valuesCy:ae,durR:"3.7",cx:"152",name:"right",text:"Mobile -",cy:"110"})),r.a.createElement("g",null,r.a.createElement(ee,{valuesCy:[168,170,173,170,168],cx:"115",durR:"4.2",durCyOut:"4.8",name:"bottom",text:"Base de donn\xe9es -",cy:"160"})),r.a.createElement("line",{x1:"80",x2:"80",y1:"0",y2:"300",className:e.lines})))},re=Object(u.a)({root:{backgroundColor:"#000",width:"100%",height:"100vh"}}),ie=function(){var e=re();return r.a.createElement(C,{className:e.root,initial:{marginBottom:100,opacity:0},animate:{marginTop:0,opacity:1},delay:3},r.a.createElement(ne,null))},oe=function(e){var t=e.onClick,a=e.open;return r.a.createElement(m.a,{display:a?"block":"none"},r.a.createElement(y,{onClick:t,open:a}),r.a.createElement(V,{open:a}),r.a.createElement(ie,null))},ce=function(e){return{type:"spring",stiffness:360,damping:200,delay:e}};function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var me=Object(u.a)({character:{fontSize:200,fontFamily:"Comfortaa",background:"-webkit-linear-gradient(white, #38495a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:0,marginBottom:0,transform:"scaleY(1)"}}),ue=function(e){var t=e.char,a=e.index,n=e.delay,i=e.className,o=e.style,c=me();return r.a.createElement(g.a.p,{initial:{opacity:0,transform:"scaleY(-1)"},animate:{opacity:1,transform:"scaleY(1)"},transition:ce(n||a/5),className:i||c.character,style:se({},o)}," "!==t?t:"\xa0")},de=Object(u.a)({title:{display:"flex",padding:0}}),fe=function(e){var t=e.content,a=e.className,n=e.speed,i=de(),o=[],c=1.5;return n&&(c=.5),t.split("").map((function(e,t){return o.push(r.a.createElement(ue,{index:t*c,char:e,className:a})),e})),r.a.createElement("h3",{className:i.title},o)},pe=Object(u.a)({character:{fontSize:200,fontFamily:"Comfortaa",background:"-webkit-linear-gradient(white, #38495a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:0,marginBottom:0,transform:"scaleY(1)"},container:{diplay:"flex",flexDirection:"column",justifyContent:"flex-end"},greeting:{fontSize:200,fontFamily:"Arial",color:"#fff",fontWeight:700},me:{fontSize:150,color:"#fff",fontFamily:"QuestaGrandeRegular",fontStyle:"italic"},title:{display:"flex"}}),ge=function(e){var t,a=e.variants,n=e.onCompleted,i=pe(),o=[],c=[];return"Tiavina Michael R.".split("").map((function(e,t){return t<8?o.push(r.a.createElement(ue,{index:t,char:e,className:i.character})):c.push(r.a.createElement(ue,{index:t,char:e,className:i.character})),e})),r.a.createElement(g.a.div,{initial:"start",animate:"end",variants:a,transition:(t=.2,{type:"spring",stiffness:360,damping:100,delay:t}),onAnimationComplete:n,className:i.container},r.a.createElement(fe,{content:"I'm",className:i.me}),r.a.createElement("h1",{className:i.title},o),r.a.createElement("h1",{className:i.title},c))},be=Object(u.a)({text:{fontSize:80,color:"#fff",fontFamily:"QuestaGrandeRegular"}}),ye={start:{marginLeft:5e3,transform:"scale(2)"},end:{marginLeft:0,transform:"scale(1)"}},he=function(e){var t=e.onCompleted,a=be();return r.a.createElement(g.a.div,{initial:"start",animate:"end",variants:ye,transition:ce(.2),className:a.container,onAnimationComplete:t},r.a.createElement(fe,{content:"Full Stack Web/Mobile Developer",className:a.text,onCompleted:t,speed:!0}))},xe=Object(u.a)({name:{fontSize:200,fontFamily:"Comfortaa",background:"-webkit-linear-gradient(white, #38495a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:0,marginBottom:0},greeting:{fontSize:200,fontFamily:"Arial",color:"#fff",fontWeight:700},me:{fontSize:150,color:"#fff",fontFamily:"QuestaGrandeRegular",fontStyle:"italic"}}),Oe=function(){var e=xe(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),u=l[0],d=l[1],f=Object(n.useState)(!1),p=Object(s.a)(f,2),b=p[0],y=p[1],x={start:{opacity:0,marginBottom:5e3,transform:"scale(2)"},end:{opacity:1,marginBottom:0,transform:"scale(1)"}},O=r.a.createElement(g.a.div,{initial:"start",animate:"end",variants:x,transition:{type:"spring",stiffness:360,damping:100,delay:1},onAnimationComplete:function(){setTimeout((function(){return o(!0)}),1e3)}},r.a.createElement(h.a,{className:e.greeting},"Hello")),E=r.a.createElement(ge,{variants:x,onCompleted:function(){setTimeout((function(){return d(!0)}),3e3)}}),v=r.a.createElement(he,{variants:x,onCompleted:function(){setTimeout((function(){return y(!0)}),5e3)}});return r.a.createElement(m.a,{display:"flex",justifyContent:u?b?"flex-end":"center":"flex-end",alignItems:u?b?"flex-start":"center":"flex-start",height:"100vh",flexDirection:"column",pl:5},i?u?b?E:v:E:O)},Ee=function(e){return Math.floor(Math.random()*Math.floor(e))},ve=function(e){for(var t=["".concat(Ee(2e3),"px ").concat(Ee(2e3),"px #FFF")],a=0;a<e;a++)t.push("".concat(Ee(2e3),"px ").concat(Ee(2e3),"px #FFF"));return t},je=Object(u.a)({stars:{width:"1px",height:"1px",background:"transparent",boxShadow:ve(700),animation:"$animStar 50s linear infinite"," &:after":{content:" ",position:"absolute",top:"2000px",width:"1px",height:"1px",background:"transparent",boxShadow:ve(700)}},stars2:{width:"2px",height:"2px",background:"transparent",boxShadow:ve(200),animation:"$animStar 100s linear infinite"," &:after":{content:" ",position:"absolute",top:"2000px",width:"2px",height:"2px",background:"transparent",boxShadow:ve(200)}},stars3:{width:"3px",height:"3px",background:"transparent",boxShadow:ve(100),animation:"$animStar 150s linear infinite"," &:after":{content:" ",position:"absolute",top:"2000px",width:"3px",height:"3px",background:"transparent",boxShadow:ve(100)}},"@keyframes animStar":{from:{transform:"translateY(0px)"},to:{transform:"translateY(-2000px)"}}}),ke=function(){var e=je();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.stars}),r.a.createElement("div",{className:e.stars2}),r.a.createElement("div",{className:e.stars3}))},Ce=a(10),we=a(28),Ne=a.n(we),Se=Object(u.a)({arrowContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:60,position:"relative"},arrow:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"50%",animation:"$container 2s linear infinite running","&:hover":{cursor:"pointer",backgroundColor:"".concat(Object(Ce.a)("#1dd1aa",.6))}},arrowIcon:{fontSize:50,animation:"$arrowanimation 2s linear infinite running"},arrowIcon2:{marginTop:-40},line:{height:7,backgroundColor:"#fff",width:100,marginTop:20,marginBottom:85,borderRadius:5},"@keyframes container":{from:{border:"5px solid ".concat(Object(Ce.a)("#1dd1aa",.8))},to:{border:"5px solid ".concat(Object(Ce.d)("#1dd1aa",.6))}},"@keyframes containerHover":{from:{backgroundColor:"".concat(Object(Ce.a)("#1dd1aa",.8))},to:{backgroundColor:"".concat(Object(Ce.d)("#1dd1aa",.6))}},"@keyframes arrowanimation":{from:{color:"".concat(Object(Ce.a)("#1dd1aa",.8))},to:{color:"".concat(Object(Ce.d)("#1dd1aa",.6))}}}),Be=function(e){var t=e.onClick,a=(e.open,Se());return r.a.createElement(m.a,{position:"absolute",width:"100%",top:"30%",zIndex:2e3},r.a.createElement(g.a.div,{onClick:t,initial:{marginTop:0},animate:{marginTop:15},transition:{yoyo:1/0,duration:.5,ease:"easeInOut"},className:a.arrowContainer,whileHover:{marginTop:0}},r.a.createElement(g.a.div,{className:a.arrow,initial:{paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0},animate:{paddingLeft:6,paddingRight:6,paddingTop:1,paddingBottom:1},transition:{yoyo:1/0,duration:.5,ease:"easeInOut",type:"spring",stiffness:360,damping:100}},r.a.createElement(Ne.a,{className:a.arrowIcon}),r.a.createElement(Ne.a,{className:Object(E.a)(a.arrowIcon,a.arrowIcon2)}))))},Ie=Object(u.a)({container:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:" #24292e",backgroundImage:"linear-gradient(#191c20, #24292e 15%)",backgroundPosition:"left top",height:"100vh",overflow:"hidden"}}),Re=function(e){var t=e.onClick,a=e.open;Ie();return r.a.createElement(m.a,{height:"100vh",style:{display:a?"none":"block",background:"radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)"},overflow:"hidden"},r.a.createElement(ke,null),r.a.createElement(Be,{onClick:t}),r.a.createElement(Oe,null))},Ae=Object(u.a)({button:{color:"#b7b7b7",backgroundColor:"#494949",paddingLeft:25,paddingRight:25,borderRadius:5,textTransform:"none",marginLeft:10,marginRight:10}}),Te=function(e){var t=e.onPause,a=e.pause,n=e.start,i=Ae();return r.a.createElement(m.a,{display:"flex",mt:2},r.a.createElement(d.a,{className:i.button,onClick:t},a?"Continue":"Pause"),r.a.createElement(d.a,{className:i.button,onClick:n},"Restart"))},Le=function(){return r.a.createElement("defs",null,r.a.createElement("radialGradient",{id:"gradientOutActive",cx:"50%",cy:"50%",r:"55%"},r.a.createElement("stop",{stopColor:"transparent",offset:"0%"}),r.a.createElement("stop",{stopColor:"#ff3f3f",offset:"40%"}),r.a.createElement("stop",{stopColor:"".concat(Object(Ce.a)("#ff3f3f",.8)),offset:"90%"}),r.a.createElement("stop",{stopColor:"#000",offset:"100%"})),r.a.createElement("radialGradient",{id:"gradientOutCompleted",cx:"50%",cy:"50%",r:"55%"},r.a.createElement("stop",{stopColor:"transparent",offset:"0%"}),r.a.createElement("stop",{stopColor:"#4dd300",offset:"40%"}),r.a.createElement("stop",{stopColor:"".concat(Object(Ce.a)("#4dd300",.8)),offset:"90%"}),r.a.createElement("stop",{stopColor:"#000",offset:"100%"})),r.a.createElement("radialGradient",{id:"gradientOutActiveAnimate",cx:"50%",cy:"50%",r:"55%"},r.a.createElement("stop",{stopColor:"transparent",offset:"0%"}),r.a.createElement("stop",{stopColor:"#fff",offset:"40%"}),r.a.createElement("stop",{stopColor:"#000",offset:"90%"}),r.a.createElement("stop",{stopColor:"#000",offset:"100%"})),r.a.createElement("radialGradient",{id:"gradientIn",cx:"50%",cy:"50%",r:"55%"},r.a.createElement("stop",{stopColor:"#000",offset:"0%"}),r.a.createElement("stop",{stopColor:"#000",offset:"40%"}),r.a.createElement("stop",{stopColor:"#000",offset:"90%"}),r.a.createElement("stop",{stopColor:"#000",offset:"100%"})))},We=Object(u.a)({img:{position:"absolute",transformOrigin:"center"}}),Pe=function(e){var t=e.pauseResume,a=e.paused,n=We();return r.a.createElement("image",{href:"".concat("","/profile.png"),height:"70",width:"70",y:"115",x:"115",className:n.img,onClick:t},a?null:r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0",to:"360",begin:"0",dur:"4s",repeatCount:"indefinite"}))},De=Object(u.a)({circleOut:{stroke:"#000",strokeMiterlimit:"10",strokeWidth:"2px"},circleOutActive:{fill:"url(#gradientOutActive)",animation:"$setCircleOutBg 0.8s linear infinite forwards"},circleOutCompleted:{fill:"url(#gradientOutCompleted)"},circleOutAnimated:{stroke:Object(Ce.a)("#7f7f7f",.6),strokeWidth:45,strokeDasharray:"75,2",transformOrigin:"center",position:"absolute"},"@keyframes setCircleOutBg":{"100%":{fill:"url(#gradientOutActiveAnimate)"}}}),Fe=function(e){var t=e.countUp,a=De();return r.a.createElement("g",{id:"animated"},r.a.createElement("circle",{cx:150,cy:150,r:128,className:a.circleOutAnimatedOffset}),r.a.createElement("g",null,r.a.createElement("circle",{cx:150,cy:150,r:106,className:a.circleOutAnimated},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0",to:"360",begin:"0",dur:"4s",repeatCount:"indefinite"}))),r.a.createElement("circle",{cx:150,cy:150,r:120,className:Object(E.a)(a.circleOut,t<100?a.circleOutActive:a.circleOutCompleted)}))},ze=Object(u.a)({circleIn:{fill:"url(#gradientIn)",strokeWidth:10},circleInStart:{stroke:"#ff3f3f"},circleInEnd:{stroke:"#4dd300"},circleOutAnimatedOffset:{fill:"none"},circleInBorder:{fill:"none",stroke:"black",strokeWidth:2},circleInBorderActive:{animation:"$setBorderCircle 2s linear infinite forwards"},circleInBorderCompleted:{stroke:Object(Ce.a)("#4dd300",1)},count:{fill:"#777777",fontSize:15,fontWeight:700,fontFamily:"Arial"},icon:{color:"#fff",fontSize:25},buttonActive:{fill:"#fff"},"@keyframes setBorderCircle":{"100%":{stroke:Object(Ce.a)("#fff",.6)}}}),Me=function(e){var t=e.countUp,a=e.pauseResume,n=e.start,i=e.paused,o=ze();return r.a.createElement(m.a,{bgcolor:"#000",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},r.a.createElement("svg",{width:"300",height:"300",viewBox:"0, 0, 300, 300"},r.a.createElement(Le,null),r.a.createElement("g",null,t<100?r.a.createElement(Fe,{countUp:t}):r.a.createElement("circle",{cx:150,cy:150,r:130,className:Object(E.a)(o.circleOut,t<100?o.circleOutActive:o.circleOutCompleted)}),r.a.createElement("circle",{cx:150,cy:150,r:106,className:Object(E.a)(o.circleInBorder,t<100?o.circleInBorderActive:o.circleInBorderCompleted)}),r.a.createElement("circle",{cx:150,cy:150,r:100,className:Object(E.a)(o.circleIn,t<100?o.circleInStart:o.circleInEnd)}),t<100?r.a.createElement(Pe,{pauseResume:a,paused:i}):r.a.createElement("g",{transform:"translate(125, 125)"},r.a.createElement("path",{fill:"#fff",d:"M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"})),r.a.createElement("text",{x:155,y:200,className:o.count,strokeWidth:"2px",textAnchor:"middle",alignmentBaseline:"middle"},t,"%"),r.a.createElement("circle",{cx:150,cy:150,r:95,className:Object(E.a)(o.circleInBorder,t<100?o.circleInBorderActive:"")}))),r.a.createElement(Te,{onPause:a,paused:i,start:n}))},qe=a(35),Ye=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),l=c[0],m=c[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),f=d[0],p=d[1],g=Object(qe.useCountUp)({end:100,duration:3,onPauseResume:function(){return m(!l)},onStart:function(){return!0===l&&m(!1)},onEnd:function(){return setTimeout((function(){return p(!0)}),800)}}),b=g.countUp,y=g.pauseResume,h=g.start,x=function(){return i(!a)};return r.a.createElement(r.a.Fragment,null,f?a?r.a.createElement(oe,{onClick:x,open:a}):r.a.createElement(Re,{onClick:x,open:a}):r.a.createElement(Me,{countUp:b,pauseResume:y,start:h,paused:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.load({google:{families:["lato:300,400,700","Century Gothic Regular:300,400,700","Montserrat:300,400,700","Comfortaa:300,400,700","BebasNeueRegular:300,400,700","SofiaPro:300,400,700","Muli:300,400,700","QuestaGrandeRegular:300,400,700","sans-serif"]}}),o.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.b041b67a.chunk.js.map