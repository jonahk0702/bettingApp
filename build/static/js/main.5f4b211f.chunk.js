(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),s=t.n(l),c=(t(80),t(6)),o=t(7),i=t(10),m=t(8),u=t(9),h=(t(81),t(27),t(63)),d=t.n(h),b=t(116),p=t(117),E=t(67),f=t(118),w=t(124),v=t(70),g=t(123),y=t(121),N=t(122),k=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{bg:"dark",variant:"dark"},r.a.createElement(g.a.Brand,{href:"/Explore"},"Custom Bets"),r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(y.a.Link,{href:"/Explore"},"Explore"),r.a.createElement(y.a.Link,{href:"/Create-Bet"},"Create a Bet"),r.a.createElement(y.a.Link,{href:"/My-Bets"},"My bets"),r.a.createElement(y.a.Link,{href:"/profile"},"Profile")),r.a.createElement(N.a,{inline:!0},r.a.createElement(y.a.Link,{href:"/"},"Sign out")))}}]),a}(n.Component),C=t(69),O=(t(54),t(120)),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).buy=function(){console.log(""),window.location.href="/Explore"},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(O.a.Header,{closeButton:!0}),r.a.createElement(O.a.Body,{className:"tc"},r.a.createElement("h4",{className:"tc"},"You are about to: "),r.a.createElement("p",null,"Bet that XXXX ",r.a.createElement("br",null),"You are betting BXXX with odds of XXX Well you ID shoud be ",this.props.ID,". The price is ",this.props.Price,". The odds are",this.props.Odds,". The Exipiry is ",this.props.Expiry)),r.a.createElement(O.a.Footer,null,r.a.createElement(C.a,{onClick:this.props.onHide},"Cancel"),r.a.createElement(C.a,{onClick:this.buy},"Buy!")))}}]),a}(r.a.Component),B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this))).state={ID:111111,Price:0,Odds:"",Expiry:"",BetDiscription:"XXX",modalShow:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"bl br tc",href:""},r.a.createElement(b.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{md:!0,className:"f4 tc bt bb ma1"},this.props.name),r.a.createElement(E.a,{xs:2,className:"bb bt ma1"},"1:3"),r.a.createElement(E.a,{xs:2,className:"bb bt ma1"},"BXX.XX"),r.a.createElement(E.a,{xs:2,className:"bb bt ma1"},"01.01.2020")),r.a.createElement("hr",null),r.a.createElement(p.a,{className:"tc"},r.a.createElement(E.a,{className:"xl"},r.a.createElement(C.a,{variant:"primary",onClick:function(){return window.location.href="/Explore"},className:"ma1 reds tc w-20 h-20"},"More Info"),r.a.createElement(C.a,{variant:"primary",onClick:function(){return e.setState({modalShow:!0})},className:"ma1 reds tc w-20 h-20"},"Take Bet!"),r.a.createElement(j,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},ID:this.state.ID,Price:this.state.Price,Odds:this.state.Odds,Expiry:this.state.Expiry}))))),r.a.createElement("br",null))}}]),a}(n.Component),S=(n.Component,function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this))).state={},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"        ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"tc i f1 font"},"A complete guide to Sevens!"),r.a.createElement("br",null),r.a.createElement(b.a,{className:"tc f3 bg-grey"},r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"pa4 ma5 ba"},r.a.createElement("h3",{className:"i"},"How does the game actualy work?"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"pointer"},"It is a simple maths game where one uses their memery and fast mutiplication in order to count as high as possible but their is a twist. In the begining you will be asked to choose a number from 3 - 9. When counting you will not be allowed to mention this number or any number that contains this number.")),r.a.createElement(E.a,{className:"pa4 ma5 ba"},r.a.createElement("h3",{className:"i"},"How to improve my score?"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"pointer"},"One of the best ways to improve your score is to use numbers you are more familiar with. As an eight is given as much weight as a seven, lower number can often five you higher scores. In the end the best way to win is to preactise the hardest."))),r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"pa4 ma5 ba"},r.a.createElement("h3",{className:"i"},"How does ranking work?"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"pointer"},"Ranking works complty off your high score. It is merely an ordered list of the users with the highest high scores. Look above about how to get your score higher.")),r.a.createElement(E.a,{className:"pa4 ma5 ba"},r.a.createElement("h3",{className:"i"},"Terms and conditions"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"pointer"},"Whenever a user creates an account they have to agree to our terms and conditions. This basically cover us incase our game is too fun and the user gets cannot play another game. Or if our game makes the user too smart for their own good. Also they have to take pity on an idea that would have been a really cool month long project, done in a fraction of the time needed.")))),r.a.createElement("br",null))}}]),a}(n.Component)),x=(n.Component,t(119)),I=t(66),A=(t(61),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).buy=function(){console.log(""),window.location.href="/Explore"},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(O.a.Header,{closeButton:!0}),r.a.createElement(O.a.Body,{className:"tc ma3"},r.a.createElement("h4",{className:"tc"},"Are you sure you want to create and take the bet: "),r.a.createElement("p",null,"Are you sure you want to bet ",this.props.betdiscription,". You will bet B",this.props.price,", at the odds of ",this.props.odds,". This bet will expire on ",this.props.expiry," and the default winner will be ",this.props.defualtwinner,".")),r.a.createElement(O.a.Footer,null,r.a.createElement(C.a,{onClick:this.props.onHide},"Cancel"),r.a.createElement(C.a,{onClick:this.buy},"Buy!")))}}]),a}(r.a.Component)),P="",F="",X="",L="",D="\u2022",H="",R="",T="",M="",W=(n.Component,t(72)),Y=t(26),U=(t(62),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this))).enterPassword=function(e){t.setState({password:e.target.value})},t.enterUsername=function(e){t.setState({email:e.target.value})},t.check=function(){window.location.href="/Explore"},t.state={email:" ",password:" "},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mw5 mw7-ns center br5 black"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("article",{className:"br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR"},r.a.createElement("main",{className:"pa4 black-80 tc"},r.a.createElement("div",{className:""},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black  w-100",type:"email",name:"email-address",id:"email-address",onChange:this.enterUsername})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black w-100",type:"password",name:"password",id:"password",onChange:this.enterPassword}))),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",onClick:this.check},"Sign in")),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("a",{href:"/Create-Account",className:"f6 link dim black db pointer"},"Create an Account"))))))}}]),a}(r.a.Component)),V=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{bg:"dark",variant:"dark"},r.a.createElement(g.a.Brand,{href:"/"},"Custom Bets"),r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/howWeWork"},"How does this work"),r.a.createElement(y.a.Link,{href:"/Our-Fees"},"Our fees")),r.a.createElement(N.a,{inline:!0},r.a.createElement(y.a.Link,{href:"/sign-In"},"Sign In/Create Account")))}}]),a}(n.Component),q=(n.Component,t(43),n.Component,n.Component,n.Component,t(71)),J="pa2 input-reset ba bg-transparent hover-bg-black w-100",_="Please select a country",z=" ",G="",$="",K="",Q=J,Z=J,ee=J,ae=J,te="",ne="",re=1,le=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={Country:"",firstName:"",dateOfBirth:"",email:"",password:"",passwordConfirm:"",IdNumber:"",num:"",gender:"Female"},t.ValidateFirst=function(){var e=t.state,a=e.firstName,n=e.dateOfBirth,r=e.email;""===a&&(Q+="  invalidbw1",K="Please note all fields are required"),""===n&&(Z+=" invalid bw1",K="Please note all fields are required"),""!==a&&(Q="pa2 input-reset ba bg-transparent hover-bg-black w-100"),""!==n&&(Z="pa2 input-reset ba bg-transparent hover-bg-black w-100"),""===r&&(ee+=" invalid bw1 "),r.includes(".")&&r.includes("@")?(ee=J,te=""):(ee+=" invalid bw1 ",te="Please enter a valid email adress"),""!==a&&""!==n&&r.includes(".")&&r.includes("@")&&(re=2,K=""),t.setState({num:"a"})},t.ValidateFinal=function(){var e=!0,a=t.state,n=a.Country,r=a.password,l=a.passwordConfirm,s=a.IdNumber;""===r&&(ae+=" invalid bw1 ",e=!1),""===l&&(ae+=" invalid bw1 ",e=!1),""===s?(G=" invalid bw1",$="Please enter a valid Idenitifaction Number",e=!1):(G="",$=""),""===n?(z=" invalid bw1 ",e=!1):z=" black ",r.length<8||r.toUpperCase()===r||r.toLowerCase()===r||isNaN(parseFloat(r))&&isFinite(r)?(ne="Please chose a valid password. Check below for our password guidlines.",e=!1):r===l?(ne="",ae=J):(ne="Please make sure the passwords match",e=!1),t.setState({num:"a"}),e&&(window.location.href="/Explore")},t.radioChange=function(e){t.setState({gender:e.currentTarget.value})},t.enterEmail=function(e){t.setState({email:e.target.value})},t.enterPassword=function(e){t.setState({password:e.target.value})},t.enterName=function(e){t.setState({firstName:e.target.value})},t.enterSurname=function(e){t.setState({secondName:e.target.value}),console.log(e.target.value)},t.enterDateofBirth=function(e){t.setState({dateOfBirth:e.target.value})},t.enterconPassword=function(e){t.setState({passwordConfirm:e.target.value})},t.enterIDNum=function(e){t.setState({IdNumber:e})},t.enterUsername=function(e){t.setState({Country:e.target.value})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"selectCountry",value:function(e){this.setState({Country:e}),_=e}},{key:"render",value:function(){var e,a,t=this,n=this.state.country;return 1===re?(e=r.a.createElement("div",null,r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Full Name"),r.a.createElement("input",{placeholder:"IE John Smith",type:"name",onChange:this.enterName,className:Q})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Date of Birth"),r.a.createElement("input",{onChange:this.enterDateofBirth,type:"date",placeholder:"YYYY/MM/DD",className:Z})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email Adress"),r.a.createElement("input",{onChange:this.enterEmail,className:ee,placeholder:"Example@gmail.com"}),te),r.a.createElement("br",null),r.a.createElement("div",{className:"mt3 tl br2 ba pa3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Gender"),r.a.createElement("input",{type:"radio",value:"Male",checked:"Male"===this.state.gender,onChange:this.radioChange,defaultChecked:!0}),"Male",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",value:"Female",checked:"Female"===this.state.gender,onChange:this.radioChange}),"Female",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",value:"Other",checked:"Other"===this.state.gender,onChange:this.radioChange}),"Other",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",value:"Rather",checked:"Rather"===this.state.gender,onChange:this.radioChange}),"Rather not say"),r.a.createElement("h5",null,r.a.createElement("i",null,K)),r.a.createElement("br",null),r.a.createElement("input",{onClick:this.ValidateFirst,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Next"})),a=r.a.createElement("div",null)):(e=r.a.createElement("div",null),a=r.a.createElement("div",null,r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),r.a.createElement("input",{type:"password",onChange:this.enterPassword,className:ae}),ne),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Confirm Password"),r.a.createElement("input",{type:"password",onChange:this.enterconPassword,className:ae})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Country of Residence"),r.a.createElement(q.a,{defaultOptionLabel:_,value:"country",className:z,onChange:function(e){return t.selectCountry(e)}})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},n," Idenitifaction Number"),r.a.createElement("input",{type:"text",className:G,onChange:this.enterIDNum}),r.a.createElement("br",null),$),r.a.createElement("div",{className:"mt3"},r.a.createElement("input",{onClick:this.ValidateFinal,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Create Account!"})),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{className:"br3 ba tl pa3"},"For security purposes, your password must contain: ",r.a.createElement("br",null),"- An Upper case",r.a.createElement("br",null),"- A Lower Case",r.a.createElement("br",null),"- A Letter",r.a.createElement("br",null),"- A Number",r.a.createElement("br",null),"- At least seven charactors"))),r.a.createElement("div",null,r.a.createElement("div",{className:"mw5 mw7-ns center br5 black"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("article",{className:"br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR"},r.a.createElement("main",{className:"pa4 black-80 tc"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 ph0 mh0"},"Register"),r.a.createElement("a",{href:"/sign-In",className:"f6 link dim black db pointer tc"},"Already have an account?"),e,a,r.a.createElement("br",null))))),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null))}}]),a}(n.Component),se=(n.Component,n.Component,n.Component,function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.backgroundOptions={particles:{number:{value:200,density:{enable:!0,value_area:800}}}},t.requireAuth=function(e,a){a({pathname:"/sign-In"})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{className:"particles",params:this.backgroundOptions}),r.a.createElement(W.a,null,r.a.createElement(Y.c,null,"Each pages just needs it own Route. The borswer and switch is n=just needed.",r.a.createElement(Y.a,{exact:!0,path:"/",component:S}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(111),t(112),t(113);s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,a,t){},54:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},75:function(e,a,t){e.exports=t(115)},80:function(e,a,t){},81:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.5f4b211f.chunk.js.map