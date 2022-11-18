(this["webpackJsonpportfolio-iv"]=this["webpackJsonpportfolio-iv"]||[]).push([[0],{350:function(e,t,r){"use strict";r.r(t);var i=r(4),n=r.n(i),a=r(61),c=r.n(a),s=r(20),l=r(9),o=(r(72),r(23)),h=r.n(o),d=r(18),j=r.p+"static/media/profile.336696ef.png",u=r(3),b={display:"flex",flexFlow:"row wrap",justifyContent:"center",listStyleType:"none",gap:15,width:"100%",padding:0,margin:0,backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",fontSize:"80%"};var p=function(e){var t=e.currentPage;return Object(u.jsxs)("ul",{style:b,className:"nav",children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",className:"/"===t?"active":"",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/about",className:"/about"===t?"active":"",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/portfolio",className:"/portfolio"===t?"active":"",children:"Portfolio"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/resume",className:"/resume"===t?"active":"",children:"R\xe9sum\xe9"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/contact",className:"/contact"===t?"active":"",children:"Contact"})})]})},m={header:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},profile:{paddingBottom:10},profilePhoto:{paddingTop:"15vh"},h1:{margin:"-20px 0px 0px 0px",fontSize:"300%"},h3:{margin:"-25px 0px 10px 0px",fontSize:"75%",fontWeight:"normal"}};var f=function(e){var t=e.currentPage,r=Object(i.useState)(!1),n=Object(d.a)(r,2),a=n[0],c=n[1];return Object(u.jsxs)("header",{style:m.header,children:[Object(u.jsxs)(h.a,{top:!0,collapse:!0,when:"/"===t&&!0===a,children:[Object(u.jsx)("img",{style:m.profilePhoto,className:"profile-img",alt:"Vince Lee",src:j,onLoad:function(){return c(!0)}}),Object(u.jsx)("h1",{style:m.h1,children:"Vince Lee"}),Object(u.jsx)("h3",{style:m.h3,children:"Full-Stack Web Developer"})]}),Object(u.jsx)(p,{currentPage:t})]})};var g=function(){return Object(u.jsxs)("section",{className:"page",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:"Having grown up in a household of web developers, web design has always been a part of my life, if only at times as side projects here and there. Even while pursuing a degree in chemistry, I was additionally trained in graphic design, Python, and computational chemistry."}),Object(u.jsx)("p",{children:"Of course, as luck would have it, I ended up working for a web-based cloud biotech company, where development skills were once again at the forefront."}),Object(u.jsx)("p",{children:"So, why fight the inevitable? I'm now pursing a career in web and software development."})]})},x=r(26),O={h4:{marginBottom:0,display:"flex",justifyContent:"space-between",alignItems:"flex-end"},card:{flex:"1 1 60%"},image:{objectFit:"cover",width:"100%"}};var y=function(e){var t=e.project;return Object(u.jsxs)("summary",{style:O.card,children:[Object(u.jsxs)("h4",{style:O.h4,children:[Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,children:t.title}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.github_url,children:Object(u.jsx)(x.a,{})})]}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.deployed_url,style:O.imgBox,children:Object(u.jsx)("img",{alt:t.title,src:t.img_url,style:O.image})})]})},v=r(62),w={projects:{display:"flex",flexFlow:"row wrap-reverse"},project:{flex:"1 1 30%"}};var _=function(){return Object(u.jsxs)("section",{className:"page",children:[Object(u.jsx)("h2",{children:"Portfolio"}),Object(u.jsx)("article",{style:w.projects,children:v.map((function(e,t){return Object(u.jsx)(y,{project:e,style:w.project},t)}))})]})},S=r.p+"static/media/CV_VinceLee_2022.5083b7a6.pdf",k={resume:{width:"100%",height:"65vh"},download:{width:"100%",textAlign:"center",fontSize:"60%",marginTop:0,marginBottom:60}};var B=function(){return Object(u.jsxs)("section",{className:"page resume",children:[Object(u.jsx)("h2",{children:"R\xe9sum\xe9 & CV"}),Object(u.jsx)("iframe",{src:"https://onedrive.live.com/embed?cid=F69DEF0A9F7B5ED0&resid=F69DEF0A9F7B5ED0%216772&authkey=AKaW1Y4jdXODH8A&em=2",style:k.resume,title:"cv",frameborder:"0",scrolling:"no"}),Object(u.jsx)("p",{style:k.download,children:Object(u.jsx)("a",{href:S,download:!0,children:"Download"})}),Object(u.jsx)("h2",{children:"Skills"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"JavaScript"}),Object(u.jsx)("li",{children:"React"}),Object(u.jsx)("li",{children:"Node.js"}),Object(u.jsx)("li",{children:"Java"}),Object(u.jsx)("li",{children:"SQL"}),Object(u.jsx)("li",{children:"MongoDB"}),Object(u.jsx)("li",{children:"jQuery"}),Object(u.jsx)("li",{children:"CSS/HTML5"}),Object(u.jsx)("li",{children:"Responsive Web Design"})]})]})},C=r(67);function z(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var N=r(66),F={container:{flexGrow:1},form:{display:"flex",flexFlow:"row wrap",gap:20},info:{flex:"1 1 30%",fontSize:"50%"},message:{flex:"1 1 80%",fontSize:"50%"},error:{fontSize:"50%"}};var A=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(d.a)(e,2),r=t[0],n=t[1],a=Object(i.useState)(""),c=Object(d.a)(a,2),s=c[0],l=c[1],o=function(e){var t=e.target,i=Object(C.a)({},r);i[t.name]=t.value,n(i),z(i.email)&&l("")},h=function(){return!!z(r.email)||(l("Valid email is required"),!1)},j=function(){return!!r.name.trim()||(l("Name required"),!1)},b=function(){return!!r.message.trim()||(l("Message required"),!1)};return Object(u.jsxs)("article",{children:[Object(u.jsxs)("form",{id:"contact-form",style:F.form,children:[Object(u.jsx)("input",{value:r.email,name:"email",onChange:o,onBlur:h,type:"email",placeholder:"Email",style:F.info}),Object(u.jsx)("input",{value:r.name,name:"name",onChange:o,onBlur:j,type:"text",placeholder:"Name",style:F.info}),Object(u.jsx)("textarea",{value:r.message,name:"message",onChange:o,onBlur:b,type:"text",placeholder:"Message",style:F.message,rows:"5"}),Object(u.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),h()&&j()&&b()?(N.a.send("service_ql4acuo","template_5d2olti",r,"WI8VAVeHF_AjbZwSc").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Message sent!"),n({name:"",email:"",message:""})):alert("Message failed!")},children:"Submit"})]}),s&&Object(u.jsx)("div",{children:Object(u.jsx)("p",{style:F.error,children:s})})]})};var D=function(){return Object(u.jsxs)("section",{className:"page",style:{paddingBottom:"20vh"},children:[Object(u.jsx)("h2",{children:"Contact Me"}),Object(u.jsx)(A,{})]})},I=r(63),M={iconBox:{display:"flex",justifyContent:"center",gap:20},icon:{fontSize:"300%"},footer:{marginTop:"10vh",textAlign:"center",fontSize:"50%",justifySelf:"flex-end",zIndex:1}};var P=function(){return Object(u.jsxs)("footer",{style:M.footer,children:[Object(u.jsxs)("section",{style:M.iconBox,children:[Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:vince.lee.dev@gmail.com",children:Object(u.jsx)(I.a,{style:M.icon})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/StarryBlue7",children:Object(u.jsx)(x.a,{style:M.icon})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/vince-lee",children:Object(u.jsx)(x.b,{style:M.icon})})]}),Object(u.jsx)("p",{children:"\xa9 Vince Lee 2022"})]})},V={main:{overflow:"hidden",minHeight:"100vh",flexGrow:1,height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",marginRight:"calc(-1 * (100vw - 100%))"},spacer:{flexGrow:1}};var L=function(){var e=Object(l.e)().pathname;return Object(u.jsxs)("main",{style:V.main,children:[Object(u.jsx)(f,{currentPage:e}),Object(u.jsx)(h.a,{bottom:!0,collapse:!0,when:"/about"===e,children:Object(u.jsx)(g,{})}),Object(u.jsx)(h.a,{bottom:!0,collapse:!0,when:"/portfolio"===e,children:Object(u.jsx)(_,{})}),Object(u.jsx)(h.a,{bottom:!0,collapse:!0,when:"/resume"===e,children:Object(u.jsx)(B,{})}),Object(u.jsx)(h.a,{bottom:!0,collapse:!0,when:"/contact"===e,children:Object(u.jsx)(D,{})}),Object(u.jsx)("div",{style:V.spacer}),Object(u.jsx)(P,{})]})},E=r(64),H=r.n(E),T=r(65),J={background:{overflowX:"hidden"}};var R=function(){return Object(u.jsxs)("div",{id:"body",style:J.background,children:[Object(u.jsx)(H.a,{id:"tsparticles",options:T}),Object(u.jsx)(L,{})]})};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(s.a,{basename:"/portfolio-iv",children:Object(u.jsx)(l.c,{children:Object(u.jsx)(l.a,{path:"*",element:Object(u.jsx)(R,{}),exact:!1,strict:!1})})})}),document.getElementById("root"))},62:function(e){e.exports=JSON.parse('[{"title":"Kitschy | Kitchen Helper","img_url":"https://immense-lake-41636.herokuapp.com/images/kitschy.gif","deployed_url":"https://starryblue7.github.io/kitschy-app/","github_url":"https://github.com/StarryBlue7/kitschy-app"},{"title":"Tech Blog","img_url":"https://github.com/StarryBlue7/tech-blog/raw/main/images/comment-demo.gif","deployed_url":"https://secret-harbor-03518.herokuapp.com/","github_url":"https://github.com/StarryBlue7/tech-blog"},{"title":"Celebrity Showdown","img_url":"https://immense-lake-41636.herokuapp.com/images/celebrity-showdown.gif","deployed_url":"https://powerful-badlands-23075.herokuapp.com/","github_url":"https://github.com/StarryBlue7/celebrity-showdown"},{"title":"Fitness Tracker","img_url":"https://github.com/StarryBlue7/fitness-tracker/raw/main/images/workout-dashboard.gif","deployed_url":"https://dry-waters-62412.herokuapp.com/?id=61a5ce52c2897300167bbf7a","github_url":"https://github.com/StarryBlue7/fitness-tracker"},{"title":"Catventure!","img_url":"https://github.com/StarryBlue7/catventure-game/raw/main/screenshots/rpg-demo.gif","deployed_url":"https://catventure.herokuapp.com/","github_url":"https://github.com/StarryBlue7/catventure-game"},{"title":"Cashew Storefront","img_url":"https://github.com/StarryBlue7/react-storefront/raw/main/demo/cart.gif","deployed_url":"https://react-stripe-storefront.herokuapp.com/","github_url":"https://github.com/StarryBlue7/react-storefront"}]')},65:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":25,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":1,"sync":false}},"line_linked":{"enable":true,"distance":190,"color":"#ffffff","opacity":0.2,"width":3},"move":{"enable":true,"speed":0.7,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},72:function(e,t,r){}},[[350,1,2]]]);
//# sourceMappingURL=main.71d7da70.chunk.js.map