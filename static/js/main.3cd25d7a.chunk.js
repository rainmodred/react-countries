(this["webpackJsonpreact-countries"]=this["webpackJsonpreact-countries"]||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,d=t(1),l=t.n(d),b=t(35),s=t.n(b),u=t(25),p=t(6),j=t(45),h=t(67),x=t(38),O=t(10),f=t(7),g=t(19),m=t(3),v=f.a.button(r||(r=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  padding: 5px;\n  font-size: 14px;\n  font-family: inherit;\n  color: inherit;\n"]))),w=f.a.span(a||(a=Object(p.a)(["\n  font-weight: 600;\n"])));function y(e){var n=e.mode,t=e.onModeChange,r="light"===n?Object(m.jsx)(g.d,{size:"18px"}):Object(m.jsx)(g.c,{size:"18px"});return Object(m.jsxs)(v,{onClick:t,children:[r,Object(m.jsx)(w,{children:"Dark mode"})]})}var k=f.a.div(c||(c=Object(p.a)(["\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 0.2rem 0.4rem 0px;\n  background: ",";\n"])),(function(e){return e.theme.elementBackground})),C=f.a.div(i||(i=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 80px;\n  @media (max-width: 768px) {\n    padding: 0 30px;\n  }\n"]))),S=f.a.span(o||(o=Object(p.a)(["\n  font-size: 20px;\n  font-weight: 800;\n"])));function B(e){var n=e.mode,t=e.onThemeChange;return Object(m.jsx)(k,{children:Object(m.jsxs)(C,{children:[Object(m.jsx)(S,{children:"Where in the world?"}),Object(m.jsx)(y,{mode:n,onModeChange:t})]})})}var z,D,L,F=t(21),R=t(11),T=f.a.div(z||(z=Object(p.a)(["\n  background: ",";\n  border-radius: 6px;\n  position: relative;\n  width: 100%;\n  @media (min-width: 769px) {\n    max-width: 480px;\n  }\n"])),(function(e){return e.theme.elementBackground})),E=f.a.div(D||(D=Object(p.a)(["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  left: 30px;\n  transform: translateY(-50%);\n"]))),I=f.a.input(L||(L=Object(p.a)(["\n  background: inherit;\n  border-radius: 6px;\n  color: inherit;\n  padding: 20px 10px 20px 75px;\n  border: none;\n  width: 100%;\n"])));function N(e){var n=e.onSearchChange,t=Object(O.f)();return Object(m.jsxs)(T,{children:[Object(m.jsx)(E,{children:Object(m.jsx)(g.e,{color:t.text})}),Object(m.jsx)(I,{onChange:function(e){return n(e.target.value.toLowerCase())},type:"search",placeholder:"Search for a country...","aria-label":"Search"})]})}var P,W,q,A,M,Q,V=t(27),J=(t(59),t(4));function K(e){var n=e.defaultValue,t=e.options,r=e.onFilterChange,a=Object(O.f)();return Object(J.c)(V.b,{"aria-labelledby":"my-label",defaultValue:"all",onChange:function(e){return r(e)},css:{width:"200px",height:"55px",background:"".concat(a.elementBackground),borderRadius:"6px"},children:[Object(J.b)(V.a,{css:{display:"flex",height:"100%",border:"none",borderRadius:"6px",padding:"22px"},arrow:Object(J.b)(g.b,{size:"16px"})}),Object(J.b)(V.e,{css:{marginTop:"10px",borderRadius:"6px",background:"".concat(a.elementBackground),cursor:"pointer"},children:Object(J.c)(V.c,{children:[Object(J.b)(V.d,{value:"all",children:n}),t.map((function(e){return Object(J.b)(V.d,{value:e,children:e},e)}))]})})]})}function Y(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var $,G=f.a.li(P||(P=Object(p.a)(["\n  background: ",";\n  border-radius: 6px;\n  overflow: hidden;\n"])),(function(e){return e.theme.elementBackground})),H=Object(f.a)(F.b)(W||(W=Object(p.a)(["\n  display: grid;\n  grid-template-rows: 160px auto;\n  cursor: pointer;\n  transition: opacity 400ms ease;\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),U=f.a.img(q||(q=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),X=f.a.div(A||(A=Object(p.a)(["\n  width: 100%;\n  padding: 25px;\n"]))),Z=f.a.h3(M||(M=Object(p.a)(["\n  font-size: 18px;\n  margin-bottom: 20px;\n"]))),_=f.a.p(Q||(Q=Object(p.a)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])));function ee(e){var n=e.name,t=e.code,r=e.population,a=e.region,c=e.capital,i=e.flag,o="detail/".concat(t);return Object(m.jsx)(G,{children:Object(m.jsxs)(H,{to:o,children:[Object(m.jsx)(U,{src:i,loading:"lazy",alt:"Flag of ".concat(n)}),Object(m.jsxs)(X,{children:[Object(m.jsx)(Z,{children:n}),Object(m.jsxs)(_,{children:[Object(m.jsx)("b",{children:"Population:"})," ",Y(r)]}),Object(m.jsxs)(_,{children:[Object(m.jsx)("b",{children:"Region:"})," ",a]}),Object(m.jsxs)(_,{children:[Object(m.jsx)("b",{children:"Capital:"})," ",c]})]})]})})}var ne=f.a.ul($||($=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0, 260px));\n  gap: 75px;\n  justify-content: center;\n"])));function te(e){var n=e.countries;return Object(m.jsx)(ne,{children:n.map((function(e){var n=e.alpha3Code,t=e.name,r=e.flag,a=e.population,c=e.region,i=e.capital;return Object(m.jsx)(ee,{name:t,code:n,flag:r,population:a,region:c,capital:i},n)}))})}function re(e){var n=e.error;return Object(m.jsxs)("div",{children:["There was an error:"," ",Object(m.jsx)("pre",{style:{whiteSpace:"normal"},children:n.message})]})}var ae=t(12),ce=t(47),ie=Object(ae.c)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),oe=Object(f.a)(ce.a)({animation:"".concat(ie," 1s linear infinite")});oe.defaultProps={"aria-label":"loading"};var de=t(23),le=t(68),be=t(20),se=t.n(be),ue=t(32),pe="https://restcountries.eu/rest/v2";function je(e){return he.apply(this,arguments)}function he(){return(he=Object(ue.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.fetch("".concat(pe,"/").concat(n)).then(function(){var e=Object(ue.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:if(t=e.sent,!n.ok){e.next=7;break}return e.abrupt("return",t);case 7:return e.abrupt("return",Promise.reject(t));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(ue.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je("all"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(ue.a)(se.a.mark((function e(n){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je("alpha/".concat(n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge,me=3e5;function ve(e){var n=Object(x.b)();return{queryKey:["country",e],queryFn:function(){return function(e){return fe.apply(this,arguments)}(e)},initialData:function(){var t;return null===(t=n.getQueryData("countries"))||void 0===t?void 0:t.find((function(n){return n.alpha3Code===e}))},staleTime:me}}var we=f.a.div(ge||(ge=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 45px 0;\n  gap: 10%;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: 30px;\n  }\n"]))),ye=["Africa","Americas","Asia","Europe","Oceania"];function ke(){var e=function(){var e=Object(x.b)(),n=Object(le.a)("countries",xe,{retry:1,staleTime:me,initialData:function(){return e.getQueryData("countries")}});return Object(de.a)(Object(de.a)({},n),{},{countries:n.data})}(),n=e.isLoading,t=e.isError,r=e.error,a=e.countries,c=Object(d.useState)(""),i=Object(u.a)(c,2),o=i[0],l=i[1],b=Object(d.useState)(""),s=Object(u.a)(b,2),p=s[0],j=s[1];var h=""===p||"all"===p?a:(console.log(p),null===a||void 0===a?void 0:a.filter((function(e){return e.region===p}))),O=(null===h||void 0===h?void 0:h.filter((function(e){return e.name.toLowerCase().includes(o)})))||[];return Object(J.c)(J.a,{children:[Object(J.c)(we,{children:[Object(J.b)(N,{onSearchChange:l}),Object(J.b)(K,{defaultValue:"Filter by Region",onFilterChange:j,options:ye})]}),n&&Object(J.b)("div",{css:{display:"flex",justifyContent:"center"},children:Object(J.b)(oe,{})}),t?Object(J.b)(re,{error:r}):Object(J.b)(te,{countries:O})]})}var Ce,Se,Be,ze,De,Le=t(69),Fe=t(49),Re=t(37),Te=f.a.div(Ce||(Ce=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 120px;\n  @media (max-width: 1100px) {\n    grid-template-columns: 1fr;\n    row-gap: 50px;\n  }\n"]))),Ee=Object(f.a)(F.b)(Se||(Se=Object(p.a)(["\n  border-radius: 6px;\n  padding: 6px 24px;\n  box-shadow: 0 0 4px 0 rgb(0 0 0 / 29%);\n  white-space: nowrap;\n"]))),Ie=f.a.div(Be||(Be=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"])));function Ne(e){var n=e.name,t=e.nativeName,r=e.flag,a=e.population,c=e.region,i=e.subregion,o=e.capital,d=e.topLevelDomain,l=e.currencies,b=e.languages,s=e.borders;return Object(J.c)(Te,{children:[Object(J.b)("img",{css:{maxWidth:"100%"},src:r,alt:"Flag of ".concat(n)}),Object(J.c)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(J.b)("h3",{css:{fontSize:"24px",marginBottom:"35px"},children:n}),Object(J.c)("div",{css:Object(Re.a)({display:"flex",justifyContent:"space-between",marginBottom:"75px"},"@media (max-width: 768px)",{flexDirection:"column",gap:"50px"}),children:[Object(J.c)(Ie,{children:[Object(J.c)("p",{children:[Object(J.b)("b",{children:"Native Name: "}),t]}),Object(J.c)("p",{children:[Object(J.b)("b",{children:"Population: "}),Y(a)]}),Object(J.c)("p",{children:[Object(J.b)("b",{children:"Region: "}),c]}),Object(J.c)("p",{children:[Object(J.b)("b",{children:"Sub Region: "}),i]}),Object(J.c)("p",{children:[Object(J.b)("b",{children:"Capital: "}),o]})]}),Object(J.c)(Ie,{children:[Object(J.c)("p",{children:[Object(J.b)("b",{children:"Top Level Domain: "}),d.join(", ")]}),Object(J.c)("p",{children:[Object(J.b)("b",{children:"Currencies: "}),l.map((function(e){return e.name})).join(", ")]}),Object(J.c)("p",{children:[Object(J.b)("b",{children:"Languages: "}),b.map((function(e){return e.name})).join(", ")]})]})]}),Object(J.c)("div",{css:{display:"flex",gap:"10px","@media (max-width: 768px)":{flexDirection:"column"}},children:[Object(J.b)("b",{css:{whiteSpace:"nowrap"},children:"Border Countries:"}),Object(J.b)("ul",{css:{display:"flex",gap:"20px 10px",flexWrap:"wrap"},children:s.map((function(e){var n=e.name,t=e.code;return Object(J.b)("li",{children:Object(J.b)(Ee,{to:"/detail/".concat(t),children:n})},t)}))})]})]})]})}var Pe,We=f.a.div(ze||(ze=Object(p.a)(["\n  font-size: 16px;\n"]))),qe=Object(f.a)(F.b)(De||(De=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  border: none;\n  border-radius: 6px;\n  box-shadow: 0 0 7px 0 rgb(0 0 0 / 29%);\n  padding: 10px 0;\n  width: 136px;\n  font-size: 16px;\n  margin: 65px 0;\n  @media (max-width: 768px) {\n    margin: 50px 0;\n  }\n"])));function Ae(e){var n=e.children;return Object(J.c)(We,{children:[Object(J.c)(qe,{to:"/",children:[Object(J.b)(g.a,{}),"Back"]}),Object(J.b)("div",{css:{display:"flex",justifyContent:"center"},children:n})]})}function Me(){var e,n=function(e){var n=Object(le.a)(ve(e));return Object(de.a)(Object(de.a)({},n),{},{country:n.data})}(Object(R.g)().id),t=n.isSuccess,r=n.isError,a=n.isLoading,c=n.country,i=n.error,o=(null===(e=c)||void 0===e?void 0:e.borders)||[],d=Object(Le.a)(null===o||void 0===o?void 0:o.map((function(e){return ve(e)})));if(d.every((function(e){return e.isSuccess}))&&(c=Object(de.a)(Object(de.a)({},c),{},{borders:d.map((function(e){return{name:e.data.name,code:e.data.alpha3Code}}))})),a)return Object(J.b)(Ae,{children:Object(J.b)(oe,{})});if(r)return Object(J.b)(Ae,{children:Object(J.b)(re,{error:i})});if(t){var l=c,b=l.name,s=l.nativeName,u=l.flag,p=l.population,j=l.region,h=l.subregion,x=l.capital,O=l.topLevelDomain,f=l.currencies,g=l.languages,m=l.borders;return Object(J.b)(Ae,{children:Object(J.b)(Fe.ErrorBoundary,{FallbackComponent:re,children:Object(J.b)(Ne,{name:b,nativeName:s,flag:u,population:p,region:j,subregion:h,capital:x,topLevelDomain:O,currencies:f,languages:g,borders:m})})})}}var Qe=f.a.div(Pe||(Pe=Object(p.a)(["\n  padding: 0 80px 20px 80px;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n  @media (max-width: 768px) {\n    padding: 0 30px 20px 30px;\n  }\n"])));function Ve(){return Object(m.jsx)(F.a,{children:Object(m.jsxs)(R.d,{children:[Object(m.jsx)(R.b,{exact:!0,path:"/",children:Object(m.jsx)(ke,{})}),Object(m.jsx)(R.b,{exact:!0,path:"/detail/:id",children:Object(m.jsx)(Me,{})}),Object(m.jsx)(R.b,{exact:!0,path:"*",children:Object(m.jsx)(R.a,{to:"/"})})]})})}function Je(){return Object(m.jsx)(Qe,{children:Object(m.jsx)(Ve,{})})}var Ke,Ye,$e="hsl(0, 0%, 100%)",Ge={background:"hsl(0, 0%, 98%)",elementBackground:$e,text:"hsl(200, 15%, 8%)"},He={background:"hsl(207, 26%, 17%)",elementBackground:"hsl(209, 23%, 22%)",text:$e};function Ue(){var e=Object(O.f)();return Object(J.b)(ae.a,{styles:Object(ae.b)(Ke||(Ke=Object(p.a)(["\n        html {\n          box-sizing: border-box;\n        }\n\n        *,\n        *::before,\n        *::after {\n          box-sizing: inherit;\n          margin: 0;\n          padding: 0;\n        }\n\n        body {\n          font-family: Nunito Sans, sans-serif;\n          font-size: 14px;\n          background: ",";\n          color: ",";\n        }\n\n        ul {\n          list-style: none;\n        }\n\n        a {\n          text-decoration: none;\n        }\n\n        button,\n        a {\n          background: ",";\n          color: ",";\n          cursor: pointer;\n          transition: opacity 200ms ease;\n          :hover {\n            opacity: 0.8;\n          }\n        }\n      "])),e.background,e.text,e.elementBackground,e.text)})}var Xe=f.a.div(Ye||(Ye=Object(p.a)(["\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  row-gap: 5px;\n  height: 100%;\n"]))),Ze=new h.a({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});var _e=function(){var e=function(){var e=Object(d.useState)((function(){return window.localStorage.getItem("mode")||"dark"})),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(d.useEffect)((function(){var e=window.localStorage.getItem("mode");e&&r(e)}),[]),[t,function(){"light"===t?(window.localStorage.setItem("mode","dark"),r("dark")):(window.localStorage.setItem("mode","light"),r("light"))}]}(),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(m.jsxs)(x.a,{client:Ze,children:[Object(m.jsxs)(O.c,{theme:"light"===t?Ge:He,children:[Object(m.jsx)(Ue,{}),Object(m.jsxs)(Xe,{children:[Object(m.jsx)(B,{mode:t,onThemeChange:r}),Object(m.jsx)(Je,{})]})]}),Object(m.jsx)(j.ReactQueryDevtools,{initialIsOpen:!1})]})};s.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(_e,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3cd25d7a.chunk.js.map