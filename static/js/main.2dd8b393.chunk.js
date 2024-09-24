(this["webpackJsonpportfolio-iv"]=this["webpackJsonpportfolio-iv"]||[]).push([[0],{353:function(e,t,r){"use strict";r.r(t);var n=r(4),i=r.n(n),a=r(64),c=r.n(a),s=r(20),o=r(9),l=(r(75),r(33)),d=r(17),u=r(23),h=r.n(u),j=r.p+"static/media/profile.336696ef.png",b=r(3),m={display:"flex",flexFlow:"row wrap",justifyContent:"center",listStyleType:"none",gap:15,width:"100%",padding:0,margin:0,backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",fontSize:"80%"};var p=function(e){var t=e.currentPage;return Object(b.jsxs)("ul",{style:m,className:"nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",className:"/"===t?"active":"",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/about",className:"/about"===t?"active":"",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/portfolio",className:"/portfolio"===t?"active":"",children:"Portfolio"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/resume",className:"/resume"===t?"active":"",children:"R\xe9sum\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/contact",className:"/contact"===t?"active":"",children:"Contact"})})]})},f={header:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},profile:{paddingBottom:10},profilePhoto:{paddingTop:"15vh"},h1:{margin:"-20px 0px 0px 0px",fontSize:"300%"},h3:{margin:"-25px 0px 10px 0px",fontSize:"75%",fontWeight:"normal"}};var g=function(e){var t=e.currentPage,r=Object(n.useState)(!1),i=Object(d.a)(r,2),a=i[0],c=i[1];return Object(b.jsxs)("header",{style:f.header,children:[Object(b.jsxs)(h.a,{top:!0,collapse:!0,when:"/"===t&&!0===a,children:[Object(b.jsx)("img",{style:f.profilePhoto,className:"profile-img",alt:"Vince Lee Zak",src:j,onLoad:function(){return c(!0)}}),Object(b.jsx)("h1",{style:f.h1,children:"Vince Zak"}),Object(b.jsx)("h3",{style:f.h3,children:"Full-Stack Web Developer"})]}),Object(b.jsx)(p,{currentPage:t})]})};var x=function(){return Object(b.jsxs)("section",{className:"page",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:"Having grown up with an innate love for science and technology, I've found a natural fit in diverse STEM roles, ranging from analytical lab research to cloud biotech SaaS to computer science education."}),Object(b.jsx)("p",{children:"Among the skills I've developed in software development and lab sciences, I have additionally studied graphic design, data analytics, responsive/accessible design, and SEO."}),Object(b.jsx)("p",{children:"I'm currently applying my proficiency in quickly picking up new frameworks and effective technical communication to teaching, advising, and debugging alongside hundreds of students across varying socioeconomic backgrounds and technical proficiencies."})]})},O=r(69),y=r(28),v={h4:{marginBottom:0,display:"flex",justifyContent:"space-between",alignItems:"flex-end"},card:{flex:"1 1 60%"},image:{objectFit:"cover",width:"100%"}};var w=function(e){var t=e.project,r=e.imgLoaded;return Object(b.jsxs)("summary",{style:v.card,children:[Object(b.jsxs)("h4",{style:v.h4,children:[Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,children:t.title}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.github_url,children:Object(b.jsx)(y.a,{})})]}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,style:v.imgBox,children:Object(b.jsx)("img",{alt:t.title,src:t.img_url,style:v.image,onLoad:function(){return r()}})})]})},S=r(44),_={projects:{display:"flex",flexFlow:"row wrap-reverse"},project:{flex:"1 1 30%"}};var k=function(e){var t=e.setImgsStatus;Object(n.useEffect)((function(){t(S.map((function(){return!1})))}),[t]);var r=function(e){return function(){t((function(t){var r=Object(O.a)(t);return r[e]=!0,r}))}};return Object(b.jsxs)("section",{className:"page",children:[Object(b.jsx)("h2",{children:"Portfolio"}),Object(b.jsx)("article",{style:_.projects,children:S.map((function(e,t){return Object(b.jsx)(w,{project:e,style:_.project,imgLoaded:r(t)},t)}))})]})},B={resume:{width:"100%",height:"100%"},embed:{height:"800px",display:"flex"},download:{width:"100%",textAlign:"center",fontSize:"60%",marginTop:0,marginBottom:60}};var A=function(e){var t=e.resumeReady,r=e.setResumeReady;return Object(b.jsxs)("section",{className:"page resume",children:[Object(b.jsx)("h2",{children:"R\xe9sum\xe9 & CV"}),Object(b.jsx)("div",{id:"embed-container",style:t?B.embed:{},children:Object(b.jsx)("iframe",{src:"https://onedrive.live.com/embed?cid=F69DEF0A9F7B5ED0&resid=F69DEF0A9F7B5ED0%216772&authkey=AKaW1Y4jdXODH8A&em=2",style:B.resume,title:"cv",frameborder:"0",scrolling:"no",onLoad:function(){return r(!0)}})}),Object(b.jsx)("p",{style:B.download,children:Object(b.jsx)("a",{href:"https://1drv.ms/b/c/f69def0a9f7b5ed0/QdBee58K750ggPZ0GgAAAAAAAP5uLIZ_oYx4XQ",target:"_blank",rel:"noreferrer",download:"Vince_Zak_CV",children:"Download"})}),Object(b.jsx)("h2",{children:"Skills"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"JavaScript, TypeScript"}),Object(b.jsx)("li",{children:"React, JSX, Redux"}),Object(b.jsx)("li",{children:"Node, Express"}),Object(b.jsx)("li",{children:"SQL, Seqeuelize, PostgreSQL"}),Object(b.jsx)("li",{children:"NoSQL, MongoDB, Mongoose"}),Object(b.jsx)("li",{children:"GraphQL"}),Object(b.jsx)("li",{children:"C#, .NET"}),Object(b.jsx)("li",{children:"Python"}),Object(b.jsx)("li",{children:"jQuery"}),Object(b.jsx)("li",{children:"CSS/HTML5"}),Object(b.jsx)("li",{children:"SEO & Responsive Web Design"})]})]})},C=r(70);function z(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var N=r(68),I={container:{flexGrow:1},form:{display:"flex",flexFlow:"row wrap",gap:20},info:{flex:"1 1 30%",fontSize:"50%"},message:{flex:"1 1 80%",fontSize:"50%"},error:{fontSize:"50%"}};var L=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(d.a)(e,2),r=t[0],i=t[1],a=Object(n.useState)(""),c=Object(d.a)(a,2),s=c[0],o=c[1],l=function(e){var t=e.target,n=Object(C.a)({},r);n[t.name]=t.value,i(n),z(n.email)&&o("")},u=function(){return!!z(r.email)||(o("Valid email is required"),!1)},h=function(){return!!r.name.trim()||(o("Name required"),!1)},j=function(){return!!r.message.trim()||(o("Message required"),!1)};return Object(b.jsxs)("article",{children:[Object(b.jsxs)("form",{id:"contact-form",style:I.form,children:[Object(b.jsx)("input",{value:r.email,name:"email",onChange:l,onBlur:u,type:"email",placeholder:"Email",style:I.info}),Object(b.jsx)("input",{value:r.name,name:"name",onChange:l,onBlur:h,type:"text",placeholder:"Name",style:I.info}),Object(b.jsx)("textarea",{value:r.message,name:"message",onChange:l,onBlur:j,type:"text",placeholder:"Message",style:I.message,rows:"5"}),Object(b.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),u()&&h()&&j()?(N.a.send("service_ql4acuo","template_5d2olti",r,"WI8VAVeHF_AjbZwSc").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Message sent!"),i({name:"",email:"",message:""})):alert("Message failed!")},children:"Submit"})]}),s&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{style:I.error,children:s})})]})};var E=function(){return Object(b.jsxs)("section",{className:"page",style:{paddingBottom:"20vh"},children:[Object(b.jsx)("h2",{children:"Contact Me"}),Object(b.jsx)(L,{})]})},F=r(65),R={iconBox:{display:"flex",justifyContent:"center",gap:20},icon:{fontSize:"300%"},footer:{marginTop:"10vh",textAlign:"center",fontSize:"50%",justifySelf:"flex-end",zIndex:1}};var D=function(){return Object(b.jsxs)("footer",{style:R.footer,children:[Object(b.jsxs)("section",{style:R.iconBox,children:[Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:vince.lee.dev@gmail.com",children:Object(b.jsx)(F.a,{style:R.icon})}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/StarryBlue7",children:Object(b.jsx)(y.a,{style:R.icon})}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/vince-lee-zak",children:Object(b.jsx)(y.b,{style:R.icon})})]}),Object(b.jsx)("p",{children:"\xa9 Vince Lee Zak 2024"})]})},P={main:{overflow:"hidden",minHeight:"100vh",flexGrow:1,height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",marginRight:"calc(-1 * (100vw - 100%))"},spacer:{flexGrow:1}};var M=function(){var e=Object(o.e)().pathname,t=Object(n.useState)(!1),r=Object(d.a)(t,2),i=r[0],a=r[1],c=Object(n.useState)([!1]),s=Object(d.a)(c,2),u=s[0],j=s[1],m=Object(n.useState)(!1),p=Object(d.a)(m,2),f=p[0],O=p[1];return Object(n.useEffect)((function(){var e=!0;console.log(u);var t,r=Object(l.a)(u);try{for(r.s();!(t=r.n()).done;){t.value||(e=!1)}}catch(n){r.e(n)}finally{r.f()}a(e)}),[u]),Object(b.jsxs)("main",{style:P.main,children:[Object(b.jsx)(g,{currentPage:e}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/about"===e,children:Object(b.jsx)(x,{})}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/portfolio"===e&&!0===i,children:Object(b.jsx)(k,{imgsReady:!0,setImgsStatus:j})}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/resume"===e&&!0===f,children:Object(b.jsx)(A,{resumeReady:f,setResumeReady:O})}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/contact"===e,children:Object(b.jsx)(E,{})}),Object(b.jsx)("div",{style:P.spacer}),Object(b.jsx)(D,{})]})},T=r(66),V=r.n(T),Z=r(67),H={background:{overflowX:"hidden"}};var Q=function(){return Object(b.jsxs)("div",{id:"body",style:H.background,children:[Object(b.jsx)(V.a,{id:"tsparticles",options:Z}),Object(b.jsx)(M,{})]})};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(s.a,{basename:"/portfolio-iv",children:Object(b.jsx)(o.c,{children:Object(b.jsx)(o.a,{path:"*",element:Object(b.jsx)(Q,{}),exact:!1,strict:!1})})})}),document.getElementById("root"))},44:function(e){e.exports=JSON.parse('[{"title":"Kitschy | Kitchen Helper","img_url":"https://github.com/StarryBlue7/kitschy-app/raw/main/assets/images/grocery-list-demo.gif","deployed_url":"https://starryblue7.github.io/kitschy-app/","github_url":"https://github.com/StarryBlue7/kitschy-app"},{"title":"Tech Blog","img_url":"https://github.com/StarryBlue7/tech-blog/raw/main/images/comment-demo.gif","deployed_url":"https://secret-harbor-03518.herokuapp.com/","github_url":"https://github.com/StarryBlue7/tech-blog"},{"title":"Celebrity Showdown","img_url":"https://github.com/StarryBlue7/celebrity-showdown/raw/main/img/showdown-demo.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Fitness Tracker","img_url":"https://github.com/StarryBlue7/fitness-tracker/raw/main/images/workout-dashboard.gif","deployed_url":"https://dry-waters-62412.herokuapp.com/?id=61a5ce52c2897300167bbf7a","github_url":"https://github.com/StarryBlue7/fitness-tracker"},{"title":"Catventure!","img_url":"https://github.com/StarryBlue7/catventure-game/raw/main/screenshots/rpg-demo.gif","deployed_url":"https://catventure.herokuapp.com/","github_url":"https://github.com/StarryBlue7/catventure-game"},{"title":"Cashew Storefront","img_url":"https://github.com/StarryBlue7/react-storefront/raw/main/demo/cart.gif","deployed_url":"https://react-stripe-storefront.herokuapp.com/","github_url":"https://github.com/StarryBlue7/react-storefront"}]')},67:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":25,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":1,"sync":false}},"line_linked":{"enable":true,"distance":190,"color":"#ffffff","opacity":0.2,"width":3},"move":{"enable":true,"speed":0.7,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},75:function(e,t,r){}},[[353,1,2]]]);
//# sourceMappingURL=main.2dd8b393.chunk.js.map