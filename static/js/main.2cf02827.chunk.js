(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(16),r=t.n(c),o=(t(26),t(3));t(28);var s=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)," "),": ",e.alert.msg))};function i(e){var a={color:"dark"===e.mode?"white":"#131212",backgroundColor:"light"===e.mode?"white":"#131212"};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-2",style:a},n.a.createElement("h1",null," About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item",style:a},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null," Creator"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},"Hi! My name is Ifham and I am currently pursuing my B.tech degree, I have interst in web development."))),n.a.createElement("div",{className:"accordion-item",style:a},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"App"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},"I created this app to help you guys Alter a text in any way you want, UpperCase, LowerCase, Speech all these things you can do with this app in just a click."))),n.a.createElement("div",{className:"accordion-item",style:a},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Dark Mode"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},"This app also has a dark mode for the nightowls, switch the button on the top right hand side."))))))}var m=t(8);function d(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/about"},"About")))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-3")},n.a.createElement("input",{className:"form-check-input",onClick:function(){e.toggleMode()},type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function u(e){var a=Object(l.useState)(""),t=Object(o.a)(a,2),c=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",{style:{color:"light"===e.mode?"black":"white"}}," ",e.heading," "),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"MyBox",className:"form-label text-".concat("light"===e.mode?"dark":"light")},"Enter the text here"),n.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){console.log("OnChnage button was clicked"),r(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#000000",color:"light"===e.mode?"black":"white"},id:"MyBox",rows:"10"})),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-2 my-1",onClick:function(){console.log("Uppercase button was clicked");var a=c.toUpperCase();r(a),e.showAlert("Text has been converted into Uppercase","success")},id:"butt1"}," Convert To UpperCase"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var a=c.toLowerCase();r(a),e.showAlert("Text has been converted into lowercase","success")},id:"butt2"}," Convert To LowerCase"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-2 my-1",onClick:function(){r(""),e.showAlert("Text has been cleared","success")},id:"butt3"}," Clear all text"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-warning mx-2 my-1",onClick:function(){var a=new SpeechSynthesisUtterance;a.text=c,window.speechSynthesis.speak(a),e.showAlert("Computer is speaking the text","success")},id:"butt3"}," Speak the text")),n.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h3",null,"Your Text Summary"),n.a.createElement("p",null," ",c.split(/\s+/).filter(function(e){return 0!==e.length}).length," words, ",c.length," characters"),n.a.createElement("p",null,"Can be read in = ",.008*c.split(/\s+/).filter(function(e){return 0!==e.length}).length," minutes"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,c.length>0?c:"Type to preview your text here.")))}d.defaultProps={title:"Set title here"};var h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(null),b=Object(o.a)(r,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(d,{title:"TextAlter",mode:t,toggleMode:function(){"dark"===t?(c("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success")):(c("dark"),document.body.style.backgroundColor="#131212",E("Dark mode has been enabled","success"))}}),n.a.createElement(s,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/about",element:n.a.createElement(i,{mode:t})}),n.a.createElement(h.a,{path:"/",element:n.a.createElement(u,{heading:"Enter text to analyze",mode:t,showAlert:E})})))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,31)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()}},[[17,3,2]]]);
//# sourceMappingURL=main.2cf02827.chunk.js.map