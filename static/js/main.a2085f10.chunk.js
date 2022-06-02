(this["webpackJsonpportfolio-iv"]=this["webpackJsonpportfolio-iv"]||[]).push([[0],{350:function(e,t,r){"use strict";r.r(t);var i=r(4),a=r.n(i),n=r(61),l=r.n(n),s=r(20),c=(r(72),r(9)),o=r(23),h=r.n(o),d=r(18),u=r.p+"static/media/profile.336696ef.png",b=r(3),j={display:"flex",flexFlow:"row wrap",justifyContent:"center",listStyleType:"none",gap:15,width:"100%",padding:0,margin:0,backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",fontSize:"80%"};var p=function(e){var t=e.currentPage;return Object(b.jsxs)("ul",{style:j,className:"nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",className:"/"===t?"active":"",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/about",className:"/about"===t?"active":"",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/portfolio",className:"/portfolio"===t?"active":"",children:"Portfolio"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/resume",className:"/resume"===t?"active":"",children:"R\xe9sum\xe9"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/contact",className:"/contact"===t?"active":"",children:"Contact"})})]})},m={header:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},profile:{paddingBottom:10},profilePhoto:{paddingTop:"15vh"},h1:{margin:"-20px 0px 0px 0px",fontSize:"300%"},h3:{margin:"-25px 0px 10px 0px",fontSize:"75%",fontWeight:"normal"}};var f=function(e){var t=e.currentPage,r=Object(i.useState)(!1),a=Object(d.a)(r,2),n=a[0],l=a[1];return Object(b.jsxs)("header",{style:m.header,children:[Object(b.jsxs)(h.a,{top:!0,collapse:!0,when:"/"===t&&!0===n,children:[Object(b.jsx)("img",{style:m.profilePhoto,className:"profile-img",alt:"Vince Lee",src:u,onLoad:function(){return l(!0)}}),Object(b.jsx)("h1",{style:m.h1,children:"Vince Lee"}),Object(b.jsx)("h3",{style:m.h3,children:"Full-Stack Web Developer"})]}),Object(b.jsx)(p,{currentPage:t})]})};var g=function(){return Object(b.jsxs)("section",{className:"page",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:"Having grown up in a household of web developers, web design has always been a part of my life, if only at times as side projects here and there. Even while pursuing a degree in chemistry, I was additionally trained in graphic design, Python, and computational chemistry."}),Object(b.jsx)("p",{children:"Of course, as luck would have it, I ended up working for a web-based cloud biotech company, where development skills were once again at the forefront."}),Object(b.jsx)("p",{children:"So, why fight the inevitable? I'm now pursing a career in web and software development."})]})},x=r(26),y={h4:{marginBottom:0,display:"flex",justifyContent:"space-between",alignItems:"flex-end"},card:{flex:"1 1 60%"},image:{objectFit:"cover",width:"100%"}};var O=function(e){var t=e.project;return Object(b.jsxs)("summary",{style:y.card,children:[Object(b.jsxs)("h4",{style:y.h4,children:[Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,children:t.title}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.github_url,children:Object(b.jsx)(x.a,{})})]}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,style:y.imgBox,children:Object(b.jsx)("img",{alt:t.title,src:t.img_url,style:y.image})})]})},v=r(62),w={projects:{display:"flex",flexFlow:"row wrap-reverse"},project:{flex:"1 1 30%"}};var _=function(){return Object(b.jsxs)("section",{className:"page",children:[Object(b.jsx)("h2",{children:"Portfolio"}),Object(b.jsx)("article",{style:w.projects,children:v.map((function(e,t){return Object(b.jsx)(O,{project:e,style:w.project},t)}))})]})},k=r.p+"static/media/CV_VinceLee_2022.181c8fd3.pdf",S={resume:{width:"100%",height:"60vh"}};var B=function(){return Object(b.jsxs)("section",{className:"page",children:[Object(b.jsx)("h2",{children:"R\xe9sum\xe9 & CV"}),Object(b.jsx)("embed",{src:k,style:S.resume}),Object(b.jsx)("h2",{children:"Skills"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"JavaScript"}),Object(b.jsx)("li",{children:"React"}),Object(b.jsx)("li",{children:"Node.js"}),Object(b.jsx)("li",{children:"Java"}),Object(b.jsx)("li",{children:"SQL"}),Object(b.jsx)("li",{children:"MongoDB"}),Object(b.jsx)("li",{children:"jQuery"}),Object(b.jsx)("li",{children:"CSS/HTML5"}),Object(b.jsx)("li",{children:"Responsive Web Design"})]})]})},z=r(67);function C(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var N=r(66),I={container:{flexGrow:1},form:{display:"flex",flexFlow:"row wrap",gap:20},info:{flex:"1 1 30%",fontSize:"50%"},message:{flex:"1 1 80%",fontSize:"50%"},error:{fontSize:"50%"}};var M=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(d.a)(e,2),r=t[0],a=t[1],n=Object(i.useState)(""),l=Object(d.a)(n,2),s=l[0],c=l[1],o=function(e){var t=e.target,i=Object(z.a)({},r);i[t.name]=t.value,a(i),C(i.email)&&c("")},h=function(){return!!C(r.email)||(c("Valid email is required"),!1)},u=function(){return!!r.name.trim()||(c("Name required"),!1)},j=function(){return!!r.message.trim()||(c("Message required"),!1)};return Object(b.jsxs)("article",{children:[Object(b.jsxs)("form",{id:"contact-form",style:I.form,children:[Object(b.jsx)("input",{value:r.email,name:"email",onChange:o,onBlur:h,type:"email",placeholder:"Email",style:I.info}),Object(b.jsx)("input",{value:r.name,name:"name",onChange:o,onBlur:u,type:"text",placeholder:"Name",style:I.info}),Object(b.jsx)("textarea",{value:r.message,name:"message",onChange:o,onBlur:j,type:"text",placeholder:"Message",style:I.message,rows:"5"}),Object(b.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),h()&&u()&&j()?(N.a.send("service_ql4acuo","template_5d2olti",r,"WI8VAVeHF_AjbZwSc").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Message sent!"),a({name:"",email:"",message:""})):alert("Message failed!")},children:"Submit"})]}),s&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{style:I.error,children:s})})]})};var P=function(){return Object(b.jsxs)("section",{className:"page",style:{paddingBottom:"20vh"},children:[Object(b.jsx)("h2",{children:"Contact Me"}),Object(b.jsx)(M,{})]})},V=r(63),L={iconBox:{display:"flex",justifyContent:"center",gap:20},icon:{fontSize:"300%"},footer:{marginTop:"10vh",textAlign:"center",fontSize:"50%",justifySelf:"flex-end",zIndex:1}};var q=function(){return Object(b.jsxs)("footer",{style:L.footer,children:[Object(b.jsxs)("section",{style:L.iconBox,children:[Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:vince.lee.dev@gmail.com",children:Object(b.jsx)(V.a,{style:L.icon})}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/StarryBlue7",children:Object(b.jsx)(x.a,{style:L.icon})}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/vince-lee",children:Object(b.jsx)(x.b,{style:L.icon})})]}),Object(b.jsx)("p",{children:"\xa9 Vince Lee 2022"})]})},A={main:{overflow:"hidden",minHeight:"100vh",flexGrow:1,height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",marginRight:"calc(-1 * (100vw - 100%))"},spacer:{flexGrow:1}};var D=function(){var e=Object(c.e)().pathname;return console.log(e),Object(b.jsxs)("main",{style:A.main,children:[Object(b.jsx)(f,{currentPage:e}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/about"===e,children:Object(b.jsx)(g,{})}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/portfolio"===e,children:Object(b.jsx)(_,{})}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/resume"===e,children:Object(b.jsx)(B,{})}),Object(b.jsx)(h.a,{bottom:!0,collapse:!0,when:"/contact"===e,children:Object(b.jsx)(P,{})}),Object(b.jsx)("div",{style:A.spacer}),Object(b.jsx)("p",{children:"v1"}),Object(b.jsx)(q,{})]})},F=r(64),H=r.n(F),J=r(65),T={background:{overflowX:"hidden"}};var R=function(){return Object(b.jsxs)("div",{id:"body",style:T.background,children:[Object(b.jsx)(H.a,{id:"tsparticles",options:J}),Object(b.jsx)(c.c,{children:Object(b.jsx)(c.a,{path:"*",element:Object(b.jsx)(D,{}),exact:!1,strict:!1})})]})};l.a.render(Object(b.jsx)(s.a,{basename:"/portfolio-iv",children:Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))},62:function(e){e.exports=JSON.parse('[{"title":"Quiz Game","img_url":"https://immense-lake-41636.herokuapp.com/images/quiz-game.gif","deployed_url":"https://starryblue7.github.io/quiz-game/","github_url":"https://github.com/StarryBlue7/quiz-game"},{"title":"Weather Dashboard","img_url":"https://immense-lake-41636.herokuapp.com/images/weather-dashboard.gif","deployed_url":"https://starryblue7.github.io/weather-dashboard/","github_url":"https://github.com/StarryBlue7/weather-dashboard"},{"title":"Kitschy | Kitchen Helper","img_url":"https://immense-lake-41636.herokuapp.com/images/kitschy.gif","deployed_url":"https://starryblue7.github.io/kitschy-app/","github_url":"https://github.com/StarryBlue7/kitschy-app"},{"title":"Tech Blog","img_url":"https://github.com/StarryBlue7/tech-blog/raw/main/images/comment-demo.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Fitness Tracker","img_url":"https://github.com/StarryBlue7/fitness-tracker/raw/main/images/workout-dashboard.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Celebrity Showdown","img_url":"https://immense-lake-41636.herokuapp.com/images/celebrity-showdown.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Catventure!","img_url":"https://github.com/StarryBlue7/catventure-game/raw/main/screenshots/rpg-demo.gif","deployed_url":"https://catventure.herokuapp.com/","github_url":"https://github.com/StarryBlue7/catventure-game"}]')},65:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":1283}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":100,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},72:function(e,t,r){}},[[350,1,2]]]);
//# sourceMappingURL=main.a2085f10.chunk.js.map