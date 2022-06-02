(this["webpackJsonpportfolio-iv"]=this["webpackJsonpportfolio-iv"]||[]).push([[0],{350:function(e,t,r){"use strict";r.r(t);var i=r(4),a=r(61),n=r.n(a),l=r(20),s=r(9),c=(r(72),r(23)),o=r.n(c),h=r(18),d=r.p+"static/media/profile.336696ef.png",u=r(3),b={display:"flex",flexFlow:"row wrap",justifyContent:"center",listStyleType:"none",gap:15,width:"100%",padding:0,margin:0,backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",fontSize:"80%"};var j=function(e){var t=e.currentPage;return Object(u.jsxs)("ul",{style:b,className:"nav",children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/",className:"/"===t?"active":"",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/about",className:"/about"===t?"active":"",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/portfolio",className:"/portfolio"===t?"active":"",children:"Portfolio"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/resume",className:"/resume"===t?"active":"",children:"R\xe9sum\xe9"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/contact",className:"/contact"===t?"active":"",children:"Contact"})})]})},p={header:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},profile:{paddingBottom:10},profilePhoto:{paddingTop:"15vh"},h1:{margin:"-20px 0px 0px 0px",fontSize:"300%"},h3:{margin:"-25px 0px 10px 0px",fontSize:"75%",fontWeight:"normal"}};var m=function(e){var t=e.currentPage,r=Object(i.useState)(!1),a=Object(h.a)(r,2),n=a[0],l=a[1];return Object(u.jsxs)("header",{style:p.header,children:[Object(u.jsxs)(o.a,{top:!0,collapse:!0,when:"/"===t&&!0===n,children:[Object(u.jsx)("img",{style:p.profilePhoto,className:"profile-img",alt:"Vince Lee",src:d,onLoad:function(){return l(!0)}}),Object(u.jsx)("h1",{style:p.h1,children:"Vince Lee"}),Object(u.jsx)("h3",{style:p.h3,children:"Full-Stack Web Developer"})]}),Object(u.jsx)(j,{currentPage:t})]})};var f=function(){return Object(u.jsxs)("section",{className:"page",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:"Having grown up in a household of web developers, web design has always been a part of my life, if only at times as side projects here and there. Even while pursuing a degree in chemistry, I was additionally trained in graphic design, Python, and computational chemistry."}),Object(u.jsx)("p",{children:"Of course, as luck would have it, I ended up working for a web-based cloud biotech company, where development skills were once again at the forefront."}),Object(u.jsx)("p",{children:"So, why fight the inevitable? I'm now pursing a career in web and software development."})]})},g=r(26),x={h4:{marginBottom:0,display:"flex",justifyContent:"space-between",alignItems:"flex-end"},card:{flex:"1 1 60%"},image:{objectFit:"cover",width:"100%"}};var y=function(e){var t=e.project;return Object(u.jsxs)("summary",{style:x.card,children:[Object(u.jsxs)("h4",{style:x.h4,children:[Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,children:t.title}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.github_url,children:Object(u.jsx)(g.a,{})})]}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,style:x.imgBox,children:Object(u.jsx)("img",{alt:t.title,src:t.img_url,style:x.image})})]})},O=r(62),v={projects:{display:"flex",flexFlow:"row wrap-reverse"},project:{flex:"1 1 30%"}};var w=function(){return Object(u.jsxs)("section",{className:"page",children:[Object(u.jsx)("h2",{children:"Portfolio"}),Object(u.jsx)("article",{style:v.projects,children:O.map((function(e,t){return Object(u.jsx)(y,{project:e,style:v.project},t)}))})]})},_=r.p+"static/media/CV_VinceLee_2022.181c8fd3.pdf",k={resume:{width:"100%",height:"60vh"}};var S=function(){return Object(u.jsxs)("section",{className:"page",children:[Object(u.jsx)("h2",{children:"R\xe9sum\xe9 & CV"}),Object(u.jsx)("embed",{src:_,style:k.resume}),Object(u.jsx)("h2",{children:"Skills"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"JavaScript"}),Object(u.jsx)("li",{children:"React"}),Object(u.jsx)("li",{children:"Node.js"}),Object(u.jsx)("li",{children:"Java"}),Object(u.jsx)("li",{children:"SQL"}),Object(u.jsx)("li",{children:"MongoDB"}),Object(u.jsx)("li",{children:"jQuery"}),Object(u.jsx)("li",{children:"CSS/HTML5"}),Object(u.jsx)("li",{children:"Responsive Web Design"})]})]})},B=r(67);function z(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var C=r(66),N={container:{flexGrow:1},form:{display:"flex",flexFlow:"row wrap",gap:20},info:{flex:"1 1 30%",fontSize:"50%"},message:{flex:"1 1 80%",fontSize:"50%"},error:{fontSize:"50%"}};var I=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(h.a)(e,2),r=t[0],a=t[1],n=Object(i.useState)(""),l=Object(h.a)(n,2),s=l[0],c=l[1],o=function(e){var t=e.target,i=Object(B.a)({},r);i[t.name]=t.value,a(i),z(i.email)&&c("")},d=function(){return!!z(r.email)||(c("Valid email is required"),!1)},b=function(){return!!r.name.trim()||(c("Name required"),!1)},j=function(){return!!r.message.trim()||(c("Message required"),!1)};return Object(u.jsxs)("article",{children:[Object(u.jsxs)("form",{id:"contact-form",style:N.form,children:[Object(u.jsx)("input",{value:r.email,name:"email",onChange:o,onBlur:d,type:"email",placeholder:"Email",style:N.info}),Object(u.jsx)("input",{value:r.name,name:"name",onChange:o,onBlur:b,type:"text",placeholder:"Name",style:N.info}),Object(u.jsx)("textarea",{value:r.message,name:"message",onChange:o,onBlur:j,type:"text",placeholder:"Message",style:N.message,rows:"5"}),Object(u.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),d()&&b()&&j()?(C.a.send("service_ql4acuo","template_5d2olti",r,"WI8VAVeHF_AjbZwSc").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Message sent!"),a({name:"",email:"",message:""})):alert("Message failed!")},children:"Submit"})]}),s&&Object(u.jsx)("div",{children:Object(u.jsx)("p",{style:N.error,children:s})})]})};var P=function(){return Object(u.jsxs)("section",{className:"page",style:{paddingBottom:"20vh"},children:[Object(u.jsx)("h2",{children:"Contact Me"}),Object(u.jsx)(I,{})]})},V=r(63),L={iconBox:{display:"flex",justifyContent:"center",gap:20},icon:{fontSize:"300%"},footer:{marginTop:"10vh",textAlign:"center",fontSize:"50%",justifySelf:"flex-end",zIndex:1}};var M=function(){return Object(u.jsxs)("footer",{style:L.footer,children:[Object(u.jsxs)("section",{style:L.iconBox,children:[Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:vince.lee.dev@gmail.com",children:Object(u.jsx)(V.a,{style:L.icon})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/StarryBlue7",children:Object(u.jsx)(g.a,{style:L.icon})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/vince-lee",children:Object(u.jsx)(g.b,{style:L.icon})})]}),Object(u.jsx)("p",{children:"\xa9 Vince Lee 2022"})]})},q={main:{overflow:"hidden",minHeight:"100vh",flexGrow:1,height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",marginRight:"calc(-1 * (100vw - 100%))"},spacer:{flexGrow:1}};var A=function(){var e=Object(s.e)().pathname;return console.log(e),Object(u.jsxs)("main",{style:q.main,children:[Object(u.jsx)(m,{currentPage:e}),Object(u.jsx)(o.a,{bottom:!0,collapse:!0,when:"/about"===e,children:Object(u.jsx)(f,{})}),Object(u.jsx)(o.a,{bottom:!0,collapse:!0,when:"/portfolio"===e,children:Object(u.jsx)(w,{})}),Object(u.jsx)(o.a,{bottom:!0,collapse:!0,when:"/resume"===e,children:Object(u.jsx)(S,{})}),Object(u.jsx)(o.a,{bottom:!0,collapse:!0,when:"/contact"===e,children:Object(u.jsx)(P,{})}),Object(u.jsx)("div",{style:q.spacer}),Object(u.jsx)("p",{children:"v3"}),Object(u.jsx)(M,{})]})},D=r(64),F=r.n(D),H=r(65),J={background:{overflowX:"hidden"}};var T=function(){return Object(u.jsxs)("div",{id:"body",style:J.background,children:[Object(u.jsx)(F.a,{id:"tsparticles",options:H}),Object(u.jsx)(A,{})]})};n.a.render(Object(u.jsx)(l.a,{basename:"/portfolio-iv",children:Object(u.jsx)(s.c,{children:Object(u.jsx)(s.a,{path:"*",element:Object(u.jsx)(T,{}),exact:!1,strict:!1})})}),document.getElementById("root"))},62:function(e){e.exports=JSON.parse('[{"title":"Quiz Game","img_url":"https://immense-lake-41636.herokuapp.com/images/quiz-game.gif","deployed_url":"https://starryblue7.github.io/quiz-game/","github_url":"https://github.com/StarryBlue7/quiz-game"},{"title":"Weather Dashboard","img_url":"https://immense-lake-41636.herokuapp.com/images/weather-dashboard.gif","deployed_url":"https://starryblue7.github.io/weather-dashboard/","github_url":"https://github.com/StarryBlue7/weather-dashboard"},{"title":"Kitschy | Kitchen Helper","img_url":"https://immense-lake-41636.herokuapp.com/images/kitschy.gif","deployed_url":"https://starryblue7.github.io/kitschy-app/","github_url":"https://github.com/StarryBlue7/kitschy-app"},{"title":"Tech Blog","img_url":"https://github.com/StarryBlue7/tech-blog/raw/main/images/comment-demo.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Fitness Tracker","img_url":"https://github.com/StarryBlue7/fitness-tracker/raw/main/images/workout-dashboard.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Celebrity Showdown","img_url":"https://immense-lake-41636.herokuapp.com/images/celebrity-showdown.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Catventure!","img_url":"https://github.com/StarryBlue7/catventure-game/raw/main/screenshots/rpg-demo.gif","deployed_url":"https://catventure.herokuapp.com/","github_url":"https://github.com/StarryBlue7/catventure-game"}]')},65:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":1283}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":100,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},72:function(e,t,r){}},[[350,1,2]]]);
//# sourceMappingURL=main.f0fd63d1.chunk.js.map