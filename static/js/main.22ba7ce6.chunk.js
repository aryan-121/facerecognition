(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{106:function(e,t,n){},109:function(e,t,n){},466:function(e,t,n){},467:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){"use strict";n.r(t);var s=n(11),a=n.n(s),i=n(55),c=n.n(i),r=(n(106),n(107),n(96)),l=n(97),o=n(101),b=n(100),d=n(2),j=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(d.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(d.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(d.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(d.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(d.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},h=(n(109),function(e){var t=e.box,n=e.imageUrl;return Object(d.jsx)("div",{className:"center ma",children:Object(d.jsxs)("div",{className:"absolute mt2",children:[Object(d.jsx)("img",{id:"inputImage",src:n,alt:"",width:"500px",height:"auto"}),Object(d.jsx)("div",{className:"boundingBox",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})]})})}),m=n(98),u=n.n(m),g=n(56),p=n.n(g),x=n(99),O=n.n(x),w=(n(466),function(){return Object(d.jsx)("div",{className:"ma4 mt0",children:Object(d.jsx)(O.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(d.jsx)("div",{className:"Tilt-inner pa3",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"60px",height:"60px"})})})})}),f=(n(467),function(e){var t=e.onRouteChange;return Object(d.jsx)("div",{children:Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(d.jsx)("div",{className:"lh-copy mt3",children:Object(d.jsx)("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})})}),A=function(e){var t=e.onRouteChange;return Object(d.jsx)("div",{children:Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})}),Object(d.jsx)("div",{className:"lh-copy mt3"})]})})})})},N=(n(468),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try!"}),Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"pa4 br3 shadow-5 form center",children:[Object(d.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(d.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer",onClick:n,children:"Detect"})]})})]})}),v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"white f3",children:"Aryan, your current rank is..."}),Object(d.jsx)("div",{className:"white f1",children:"#5"})]})},k=new p.a.App({apiKey:"5ff12855257044688263c54ee7341fba"}),C={particles:{number:{value:70,density:{enable:!0,value_area:700}}}},E=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).calclulateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),s=Number(n.width),a=Number(n.height);return{leftCol:t.left_col*s,topRow:t.top_row*a,rightCol:s-t.right_col*s,bottomRow:a-t.bottom_row*a}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),k.models.predict(p.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calclulateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signin"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,s=e.route,a=e.box;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u.a,{className:"particles",params:C}),Object(d.jsx)(j,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===s?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"aligning",children:[Object(d.jsx)(w,{}),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit})]})]}),Object(d.jsx)(h,{box:a,imageUrl:n})]}):"signin"===s?Object(d.jsx)(f,{onRouteChange:this.onRouteChange}):Object(d.jsx)(A,{onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,470)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),y()}},[[469,1,2]]]);
//# sourceMappingURL=main.22ba7ce6.chunk.js.map