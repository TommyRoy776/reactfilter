(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),l=n.n(r),s=(n(24),n(3)),i=n(4),c=n(1),d=n(6),u=n(5);n(25),n(26);n(16);var f=[{id:1,text:"DJI",age:3,power:111,motor:!0},{id:2,text:"HolyStone",age:11,power:17,motor:!1},{id:3,text:"JJRC",age:20,power:68,motor:!0},{id:4,text:"Potensic",age:36,power:37,motor:!1}],b=n(29),p=n(28);n(11);a.Component;var g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(b.a,{variant:"outline-primary",value:this.props.value,onClick:this.props.handleClick},this.props.text)}}]),n}(a.Component),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.Component,a.Component;var v=n(13),E=n(9),y=n(10),w=[{id:1,text:"DJI",headlessMode:!0,brushlessMotor:!1,foldable:!0,speed:100},{id:2,text:"HolyStone",headlessMode:!0,brushlessMotor:!0,foldable:!1,speed:200},{id:3,text:"JJRC",headlessMode:!1,brushlessMotor:!1,foldable:!1,speed:300},{id:4,text:"Potensic",headlessMode:!1,brushlessMotor:!0,foldable:!1,speed:400}],M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).filteredCollected=function(){var t={headlessMode:[],brushlessMotor:[],foldable:[],speed:[]},n=e.state.passingTags,a=n.headlessMode,o=n.brushlessMotor,r=n.foldable,l=n.speed;for(var s in a)a[s]&&t.headlessMode.push(s);for(var i in o)o[i]&&t.brushlessMotor.push(i);for(var c in r)r[c]&&t.foldable.push(c);for(var d in l)l[d]&&t.speed.push(d);return e.setState({collected:t}),t},e.allFilterClickListener=function(t,n){console.log("FILTER clicked",t.target.dataset.name);var a=t.target.dataset.name;e.setState((function(e){return{passingTags:Object(y.a)(Object(y.a)({},e.passingTags),{},Object(E.a)({},n,Object(y.a)(Object(y.a)({},e.passingTags[n]),{},Object(E.a)({},a,!e.passingTags[n][a]))))}})),t.target.classList.contains("Selected")?t.target.classList.remove("Selected"):t.target.classList.add("Selected"),e.changeTable()},e.multiPropsFilter=function(t){var n=e.filteredCollected();console.log(n);var a=Object.keys(n);return console.log(a.toString()),t.filter((function(e){return a.every((function(t){return!n[t].length||(Array.isArray(e[t])?e[t].some((function(e){return n[t].includes(e)})):n[t].includes(e[t].toString()))}))}))},e.searchProducts=function(){return e.multiPropsFilter(w).filter((function(t){return t.name.toLowerCase().includes(e.state.passingTags.search.inputTerm)}))},e.changeTable=function(){e.setState({tableData:e.multiPropsFilter(w)},(function(){console.log(e.state.tableData),e.generateButton()}))},e.changeTags=function(){var t=Object.assign({},e.state.passingTags);for(var n in t)for(var a in t[n])t[n][a]=!1,console.log(t[n][a]);return t},e.generateButton=function(){var t=e.selectButton(),n=e.filteredCollected();for(var a in t)document.getElementById("group-"+a).innerHTML="";for(var a in t){var o,r=Object(v.a)(t[a]);try{var l=function(){var t=s=o.value,r=a,l=document.createElement("BUTTON");l.classList.add("btn","btn-outline-dark"),l.innerHTML=t,l.dataset.name=s,l.onclick=function(t){return e.allFilterClickListener(t,r)},document.getElementById("group-"+a).appendChild(l),n[a].includes(s.toString())&&l.classList.add("Selected")};for(r.s();!(o=r.n()).done;){var s;l()}}catch(i){r.e(i)}finally{r.f()}}},e.selectButton=function(){var t,n={headlessMode:[],brushlessMotor:[],foldable:[],speed:[]},a=Object(v.a)(e.state.tableData);try{for(a.s();!(t=a.n()).done;){var o=t.value;for(var r in o)n.hasOwnProperty(r)&&(n[r].includes(o[r])||n[r].push(o[r]))}}catch(l){a.e(l)}finally{a.f()}for(var r in n)console.log(n[r][0]),"boolean"===typeof n[r][0]&&n[r].sort((function(e,t){return e===t?0:e?-1:1})),"number"===typeof n[r][0]&&n[r].sort((function(e,t){return e-t}));return console.log(n),n},e.showState=function(){console.log("HT "+e.state.passingTags.headlessMode.true),console.log("HF "+e.state.passingTags.headlessMode.false),console.log(e.filteredCollected()),console.log(e.multiPropsFilter(w))},e.state={passingTags:{headlessMode:{true:!1,false:!1},brushlessMotor:{true:!1,false:!1},foldable:{true:!1,false:!1},speed:{100:!1,200:!1,300:!1,400:!1}},tableData:w,collected:null},e.renderItems=e.renderItems.bind(Object(c.a)(e)),e.showState=e.showState.bind(Object(c.a)(e)),e.multiPropsFilter=e.multiPropsFilter.bind(Object(c.a)(e)),e.filteredCollected=e.filteredCollected.bind(Object(c.a)(e)),e.reset=e.reset.bind(Object(c.a)(e)),e.selectButton=e.selectButton.bind(Object(c.a)(e)),e.generateButton=e.generateButton.bind(Object(c.a)(e)),e.changeTags=e.changeTags.bind(Object(c.a)(e)),e}return Object(i.a)(n,[{key:"renderItems",value:function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.text),o.a.createElement("td",null,e.headlessMode.toString()),o.a.createElement("td",null,e.brushlessMotor.toString()),o.a.createElement("td",null,e.foldable.toString()))}},{key:"reset",value:function(){var e=this;this.setState({passingTags:this.changeTags()},(function(){e.changeTable()}))}},{key:"componentDidMount",value:function(){this.generateButton()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("section",{id:"intro"},o.a.createElement("h1",null,"Drone Filter"),o.a.createElement("p",{id:"description"},"A filter for drone customer")),o.a.createElement("section",{id:"buttons"},o.a.createElement("h3",null,"Search"),o.a.createElement("label",{for:"fname"},"headlessMode"),o.a.createElement("div",{class:"btn-group right",id:"btn-group0",role:"group","aria-label":"Basic example"},o.a.createElement("button",{type:"button",class:"btn btn-outline-dark",onClick:function(){return e.reset()}},"reset"),o.a.createElement("button",{type:"button",class:"btn btn-outline-dark"},"Advanced Mode")),o.a.createElement("div",{class:"btn-group",id:"group-headlessMode",role:"group","aria-label":"Basic example"}),o.a.createElement("label",{for:"fname"},"brushlessMotor"),o.a.createElement("div",{class:"btn-group",id:"group-brushlessMotor",role:"group","aria-label":"Basic example"}),o.a.createElement("label",{for:"fname"},"foldable"),o.a.createElement("div",{class:"btn-group",id:"group-foldable",role:"group","aria-label":"Basic example"}),o.a.createElement("label",{for:"fname"},"Speed"),o.a.createElement("div",{class:"btn-group",id:"group-speed",role:"group","aria-label":"Basic example"}),o.a.createElement("br",null),o.a.createElement("label",null,"......")),o.a.createElement("section",{id:"table"},o.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,size:"sm",id:"TableContent"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Text"),o.a.createElement("th",null,"headlessMode"),o.a.createElement("th",null,"brushlessMotor"),o.a.createElement("th",null,"foldable"))),o.a.createElement("tbody",null,this.state.tableData.map(this.renderItems)))))}}]),n}(a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",{id:"show-area"}),o.a.createElement(M,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactfilter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/reactfilter","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.cb5c0ac8.chunk.js.map