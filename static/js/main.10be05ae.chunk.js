(this.webpackJsonpsatagro=this.webpackJsonpsatagro||[]).push([[0],[,,function(e,t,a){e.exports={btnPremium:"card_btnPremium__1-PxR",btnProfessional:"card_btnProfessional__3QlRi",button:"card_button__1MlrB",container:"card_container__mPLjn",premium:"card_premium__HS1ZI",premiumContainer:"card_premiumContainer__14twb",price:"card_price__34ZCc",priceCurrency:"card_priceCurrency__7fBFR",priceCurrencyIcon:"card_priceCurrencyIcon__260ZO",priceYear:"card_priceYear__1vxj2",priceYearPln:"card_priceYearPln__3fVrC",professional:"card_professional__3Sclk",text:"card_text__3ZnxU",text__last:"card_text__last__2u2OQ",textList:"card_textList__2vcNE",textWrapper:"card_textWrapper__lNdD2",title:"card_title__3ghvj",titleWrapper:"card_titleWrapper__3Z2o0"}},,,,,function(e,t,a){e.exports={button:"flags_button__SQaOa",flag:"flags_flag__1c-Fp",flagActive:"flags_flagActive__1b_NA",flagsWrapper:"flags_flagsWrapper__3_oij"}},function(e,t,a){e.exports={bottom:"app_bottom__11DEb",container:"app_container__3FwrV",curved:"app_curved__xcUz6",curvedBottom:"app_curvedBottom__3wQO3",main:"app_main__1NOZK",top:"app_top__Vf_zF"}},function(e,t,a){e.exports={logo:"hero_logo__280qW",heroPicture:"hero_heroPicture__o_ClS",heroText:"hero_heroText__3omzt",title:"hero_title__1MRGV",wrapper:"hero_wrapper__Q6134"}},,function(e,t,a){e.exports={error:"error_error__C1CwC",errorPicture:"error_errorPicture__cTYVT",errorTitle:"error_errorTitle__17BZN"}},,function(e,t,a){e.exports={loading:"plans_loading__3H48q",wrapper:"plans_wrapper__2f64X"}},,,,,,function(e,t,a){e.exports={ldsSpinner:"loadingSpinner_ldsSpinner__2YQmT"}},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),c=a(16),n=a.n(c),s=(a(24),a(5)),o=a.n(s),l=a(10),j=a(6),f=a(13),d=a.n(f),p=a(0);a(27).config();var h=i.a.createContext({location:"PL"}),x=i.a.createContext(void 0);function u(e){var t=e.children,a=Object(r.useState)("PL"),i=Object(j.a)(a,2),c=i[0],n=i[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["PL","CZ","LT","SK"],e.next=3,m();case 3:a=e.sent,t.includes(a.country_code)&&n(a.country_code);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s={location:c},f={setLocation:n};return Object(p.jsx)(h.Provider,{value:s,children:Object(p.jsx)(x.Provider,{value:f,children:t})})}function b(){var e=i.a.useContext(h);if(void 0===e)throw new Error("useLocationState must be used within a LocationProvider");return e}function m(){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://geolocation-db.com/json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A={PL:{fetchError:"Pobieranie danych nie powiod\u0142o si\u0119",offer:"Oferta",starter:{price:"Gratis",description:["1 pole do 50 ha"],button:"Za\u0142\xf3\u017c konto"},professional:{description:["Monitoring satelitarny gospodarstwa","Mapy aplikacyjne","Wsparcie pobierania pr\xf3b glebowych","Obs\u0142uga techniczna"],button:"Kup teraz"},premium:{description:["Wszystkie us\u0142ugi Professional","Wysoko rozdzielczy monitoring \u201ePlanet\u201d","Integracja sensor\xf3w (IoT, stacje meteo)","Doradztwo agronomiczne"],button:"Kup teraz"},year:"rok"},CZ:{fetchError:"Sta\u017een\xed dat se nezda\u0159ilo ",offer:"Nab\xeddka",starter:{price:"Zdarma",description:["1 pole do 50 ha"],button:"VYTVO\u0158IT \xda\u010cET"},professional:{description:["Satelitn\xed monitoring farmy","Aplika\u010dn\xed mapy","Podpora procesu vzorkov\xe1n\xed p\u016fdy","Technick\xe1 podpora"],button:"KUP TE\u010e"},premium:{description:["V\u0161echny slu\u017eby Professionall","Monitoring ve vysok\xe9m rozli\u0161en\xed 'Planet'","Integrace senzor\u016f (IoT, meteostanice)","Agronomick\xe1 konzultace (anglicky a polsky)"],button:"KUP TE\u010e"},year:"rok"},LT:{fetchError:"Nepavyko atsisi\u0173sti duomen\u0173",offer:"Pasi\u016blymas",starter:{price:"Nemokamai ",description:["1 laukas iki 50 ha"],button:"Sukurti paskyr\u0105"},professional:{description:["Palydovinis \u016bkio steb\u0117jimas","Program\u0173 \u017eem\u0117lapiai","Parama dirvo\u017eemio m\u0117giniams imti","Technin\u0117 pagalba"],button:"pirkti dabar"},premium:{description:["Visos profesionalios paslaugos","Didel\u0117s skiriamosios gebos \u201eplanetos\u201c steb\u0117jimas","Jutiklio integracija (daikt\u0173 internetas, meteorologin\u0117s stotys)","Agronomin\u0117s konsultacijos"],button:"pirkti dabar"},year:"metus"},SK:{fetchError:"S\u0165ahovanie d\xe1t zlyhalo",offer:"Ponuka",starter:{price:"Zadarmo ",description:["1 pole do 50 ha"],button:"Vytvori\u0165 \xfa\u010det"},professional:{description:["Satelitn\xe9 sledovanie farmy","Aplika\u010dn\xe9 mapy","Podpora vzorkovania p\xf4dy","Technick\xe1 podpora"],button:"K\xfapte teraz"},premium:{description:["V\u0161etky profesion\xe1lne slu\u017eby","Monitorovanie plan\xe9ty vo vysokom rozl\xed\u0161en\xed","Integr\xe1cia senzorov (IoT, meteorologick\xe9 stanice)","Agronomick\xe9 poradenstvo"],button:"K\xfapte teraz"},year:"rok"}},g=a(3),y=a(2),w=a.n(y),v=a(4),k=a(17),C=a(18),E=a.n(C),M=a(14),P=a.n(M),R=function(e){var t=e.type,a=e.price,r=e.currency,i=b().location,c=A[i].year,n=A[i].starter.price,s=Object(v.a)(w.a.priceYear,Object(g.a)({},w.a.priceYearPln,"PL"===i));return"starter"===t?Object(p.jsx)("p",{className:w.a.price,children:n}):Object(p.jsxs)("p",{className:w.a.price,children:[a," ",Object(p.jsx)("span",{className:w.a.priceCurrency,children:"PLN"!==r?Object(p.jsx)(k.Icon,{icon:function(e){switch(e){case"CZK":return E.a;case"EUR":default:return P.a}}(r),className:w.a.priceCurrencyIcon}):"PLN"}),Object(p.jsxs)("span",{className:s,children:["ha / ",c]})]})},I=function(e){var t,a,r=e.type,i=e.price,c=e.currency,n=e.buttonText,s=e.children,o=Object(v.a)(w.a.titleWrapper,(t={},Object(g.a)(t,w.a.premium,"premium"===r),Object(g.a)(t,w.a.professional,"professional"===r),t)),l=Object(v.a)(w.a.button,(a={},Object(g.a)(a,w.a.btnPremium,"premium"===r),Object(g.a)(a,w.a.btnProfessional,"professional"===r),a)),j=Object(v.a)(w.a.container,Object(g.a)({},w.a.premiumContainer,"premium"===r));return Object(p.jsxs)("section",{className:j,children:[Object(p.jsxs)("div",{className:o,children:[Object(p.jsx)("h2",{className:w.a.title,children:r.toUpperCase()}),Object(p.jsx)(R,{type:r,price:i,currency:c})]}),Object(p.jsxs)("div",{className:w.a.textWrapper,children:[s,Object(p.jsx)("button",{className:l,children:n.toUpperCase()})]})]})},L=function(e){var t=e.description;return Object(p.jsx)("ul",{className:w.a.textList,children:t.map((function(e,a){return a===t.length-1?Object(p.jsx)("li",{className:"".concat(w.a.text," ").concat(w.a.text__last),children:e},a):Object(p.jsx)("li",{className:w.a.text,children:e},a)}))})},Z=function(e){var t=e.currency,a=e.price,r=b().location,i=A[r].starter.description,c=A[r].starter.button;return Object(p.jsx)(I,{type:"starter",currency:t,price:a,buttonText:c,children:Object(p.jsx)(L,{description:i})})},V=function(e){var t=e.price,a=e.currency,r=b().location,i=A[r].premium.description,c=A[r].premium.button;return Object(p.jsx)(I,{type:"premium",price:t,currency:a,buttonText:c,children:Object(p.jsx)(L,{description:i})})},_=function(e){var t=e.price,a=e.currency,r=b().location,i=A[r].professional.description,c=A[r].professional.button;return Object(p.jsx)(I,{type:"professional",price:t,currency:a,buttonText:c,children:Object(p.jsx)(L,{description:i})})},N=a(7),S=a.n(N),T=function(){var e=b().location,t=function(){var e=i.a.useContext(x);if(void 0===e)throw new Error("useLocationDispatch must be used within a LocationProvider");return e}().setLocation,a=function(t){return Object(v.a)(S.a.flag,Object(g.a)({},S.a.flagActive,t===e))};return Object(p.jsxs)("div",{className:S.a.flagsWrapper,children:[Object(p.jsx)("button",{onClick:function(){return t("PL")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA/BAMAAADkhXBTAAAAD1BMVEX////jQ2PcFDzuip7////0clvrAAAAAnRSTlO/7yV7gKYAAAAwSURBVHicY2QgGTC6jGoZ1TKqZVTLqJYRpsWYdC1Ko1pGtYxqGdUyqmWEaREkWQsAYPMMeAxx35kAAAAASUVORK5CYII=",alt:"",className:a("PL")})}),Object(p.jsx)("button",{onClick:function(){return t("SK")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAYAAABqS6DaAAAFXElEQVR4Ae2aY5AkTxDF9/PftrU82+buzNm2bdu2bdu2ubb3PGbr/S9qYvow03s9Z+SLeF+qo3Im6hfVmdlVfgmpD6S3x2Q/kN4qERACQiIgBIREQAgIiYAQEBIBISAkAkIiIASEREAISDYS0zMgxMS+WsfGERC1MtVuBN0v/75ySw4HAVEjY/lQ1Yvq3LgFYkYmxLR0Zt1v/qrnirfvEBA1MhQooXpRbROnwS3+4mWfdogQF09A1EgflE/1oppbdoBbjpVrfQLCX70ONSIg/+RQu6js9eaWbdR434BcuPR+Aek46yxepsesu8EC634P8L4bGjSDuUU76HMXlsf0uQrBLUu3PpDH/XPBVKM+LD36KQM5dRZbz6Sw334f7PexdiVepkv22gOIonK+mDwDbklGI4TEZFbCPlEuxydAvHv3sbxyRTEed/QERqy6xn77PfDLB1Ku337A6VQGMn4yfBV/7oIykIOH2a4kIAquPPAAJLNFGciUmfJO4E6ehnPLdjg3bIZbbGzjFnCHjrp2jiCAv3xVuWTevQ+TNoUTECVrhx2GpDcoJ/AyVWDIU/SJMf3fIXDL3KrDk8/+ywmTprYykO27MH1rJAFRcu1RR9n7X12VpAxEfVO5FXN2RhMQJTcYd5x13d4WzzpoOIyVtND9FawWCOvaDUXLwtKlFwzFynnEdKzZgEV7YwmIkptOPAkxJdUbEJZbmCQJ4p27rg+EN8MhhEfCLTE1zTUWGc3yDDgObpm0dTyBrFiNZQfjCYiSW087zcpWr0D0BryIjFVreAJZtAxrjiYSEAWz5kaIivEOxGJlPYqYnAL+9DlWITk3b2OVllv8mYfjmx6O7dwD7vhJFkuy2107pHo9j5j2uQux6WQyAVFy2+lnIETHegViqt8U+n9z+p7Ufw+AsXI1GPIW9QQyfzEByc4Nxh5n7/7XVGWxpL54PyV1RZfuvdfVqf/632sBwh0+htFrrhMQJf9Yfx0AwFCiwusAwg60Gk84QUCyc1yGEZYefX0CEp6sw/nou7jfsqPqeYbcRVgJHdh6CwHJzvN3x7AqSc2iRv2ZF6XKjZXn/hU2D7sD1e0uS8/+SMwyPev/EJCKAw5AstqgD8gjL97dX/1x1L8UzvxbDA9+ceWXjN+DkbPiNI/5X2mW4vh/JeW54X/lxwH/skj9/YlDL1Y6T9wYTkCe5U+quV5bthFj2cKd/6cogitNl5/nqzAZV/4phK6FOynGyF1xCgNWr0Q/eezb0MVYmtPVHBrLhUISJYS03UZA1LjDzLPsI2NiYCH8XWXO088ZoC81yxTmy1A8xj7TLMfOwIpw7tmPzadU9x8E5PMaqxCVqseKocteeuwmNSeB4wXkbL+NgPjisn33gec4VKo+/aXF/CV0IdKjUuTeg4D46LHrb+BOUiYCQ+e8cKwvNMtxdM0RVh5/UWP1+wmkddEeeJVuW7wXrp0MR+z5aPwVOt+HP+eZO9ZP34oHt3XopRnKYr+P9nsN92/ZB0X+7HnEXYhGUJjPO4WVwVvm7IB47x6MpSqymO+rGZDXBYU7chz3krNQ0Yec8k/oXJzfdYZ9sDSWZA0jAXlp/iMAjqUrIXA8RndfzHJCdjDq1JmOeym3wV+6Il+MICCvwJb2XdklufBj11FW67lb/g2dh80ztwOiyA6gdH8EsnkE5BXakK8YuH0HAUlii58rbDZ+CluIcT0Xw6I3sWNgUw35hJCAvC6bG7Vklx1Enof5vpGdu1uHj3nNu4KAeBzRWjr3hG3CVOgD88rjBIRMQMgEhICQCQgBIRMQAkImIASETEDIBISAkAnIuwskgvz2+H81+JtdzG1VmQAAAABJRU5ErkJggg==",alt:"",className:a("SK")})}),Object(p.jsx)("button",{onClick:function(){return t("CZ")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAMAAABdlVDoAAAAS1BMVEXXFBrTFh1sL1D02tz53d6DkK4VRH02PGs3PGt0LEx1LEuyHSyzHCzTFRvUFRzXFBoRRX6Ior8WSYE+aJZjX4TT3efriYz6+/z///80Wqe8AAAABnRSTlPU1en4+PtAtsV6AAAA6ElEQVR42rXPuVVDMQAAQQH2BwxG4rCh/0oJN1Yw28C8HeenE2+s79ufbqz19fnrkdUMRJqBSDMQaQYizUikGYk0Q5FmJNIMRZqRSDMUaUYizVCkGYk0Q5FmJNIMRZqRSDMUaUYizVCkGYk0Q5FmJNIMRZqRSDMUaUYizVCkGYfUz327XeR4vc7tNpHnt1kAaQMhbTCkDYe0wZA2HNIGQ9pwSBsMacMhbTCkDYe0wZA2HNIGRo5LGwp5eZ8TIW18TIe0wZA2HNIGQ9pwSBsMacMhbTCkDYe04ZA2INIGRNqASBsQeXwYvH/aEdiCmtytLgAAAABJRU5ErkJggg==",alt:"",className:a("CZ")})}),Object(p.jsx)("button",{onClick:function(){return t("LT")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEX9uRMAakTBJy2z1jQzAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg==",alt:"",className:a("LT")})})]})},J=a(11),Y=a.n(J),Q=function(){return Object(p.jsxs)("svg",{id:"aa03ddf9-f8f2-4819-a4ce-be9b0a220741","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"1119.60911",height:"699",viewBox:"0 0 1119.60911 699",className:Y.a.errorPicture,children:[Object(p.jsx)("title",{children:"fetch error"}),Object(p.jsx)("circle",{cx:"292.60911",cy:"213",r:"213",fill:"#f2f2f2"}),Object(p.jsx)("path",{d:"M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356",transform:"translate(-31.39089 -100.5)",fill:"#f50057"}),Object(p.jsx)("path",{d:"M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288",transform:"translate(-31.39089 -100.5)",fill:"#f50057"}),Object(p.jsx)("path",{d:"M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M117.22379,292.83905s15.41555-.47479,20.06141-3.783,23.713-7.2585,24.86553-1.95278,23.16671,26.38821,5.76263,26.5286-40.43935-2.711-45.07627-5.53549S117.22379,292.83905,117.22379,292.83905Z",transform:"translate(-31.39089 -100.5)",fill:"#a8a8a8"}),Object(p.jsx)("path",{d:"M168.224,311.78489c-17.40408.14042-40.43933-2.71094-45.07626-5.53548-3.53126-2.151-4.93843-9.86945-5.40926-13.43043-.32607.014-.51463.02-.51463.02s.97638,12.43276,5.61331,15.2573,27.67217,5.67589,45.07626,5.53547c5.02386-.04052,6.7592-1.82793,6.66391-4.47526C173.87935,310.756,171.96329,311.75474,168.224,311.78489Z",transform:"translate(-31.39089 -100.5)",opacity:"0.2"}),Object(p.jsx)("ellipse",{cx:"198.60911",cy:"424.5",rx:"187",ry:"25.43993",fill:"#3f3d56"}),Object(p.jsx)("ellipse",{cx:"198.60911",cy:"424.5",rx:"157",ry:"21.35866",opacity:"0.1"}),Object(p.jsx)("ellipse",{cx:"836.60911",cy:"660.5",rx:"283",ry:"38.5",fill:"#3f3d56"}),Object(p.jsx)("ellipse",{cx:"310.60911",cy:"645.5",rx:"170",ry:"23.12721",fill:"#3f3d56"}),Object(p.jsx)("path",{d:"M494,726.5c90,23,263-30,282-90",transform:"translate(-31.39089 -100.5)",fill:"none",stroke:"#2f2e41",strokeMiterlimit:"10",strokeWidth:"2"}),Object(p.jsx)("path",{d:"M341,359.5s130-36,138,80-107,149-17,172",transform:"translate(-31.39089 -100.5)",fill:"none",stroke:"#2f2e41",strokeMiterlimit:"10",strokeWidth:"2"}),Object(p.jsx)("path",{d:"M215.40233,637.78332s39.0723-10.82,41.47675,24.04449-32.15951,44.78287-5.10946,51.69566",transform:"translate(-31.39089 -100.5)",fill:"none",stroke:"#2f2e41",strokeMiterlimit:"10",strokeWidth:"2"}),Object(p.jsx)("path",{d:"M810.09554,663.73988,802.218,714.03505s-38.78182,20.60284-11.51335,21.20881,155.73324,0,155.73324,0,24.84461,0-14.54318-21.81478l-7.87756-52.719Z",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M785.21906,734.69812c6.193-5.51039,16.9989-11.252,16.9989-11.252l7.87756-50.2952,113.9216.10717,7.87756,49.582c9.185,5.08711,14.8749,8.987,18.20362,11.97818,5.05882-1.15422,10.58716-5.44353-18.20362-21.38921l-7.87756-52.719-113.9216,3.02983L802.218,714.03506S769.62985,731.34968,785.21906,734.69812Z",transform:"translate(-31.39089 -100.5)",opacity:"0.1"}),Object(p.jsx)("rect",{x:"578.43291",y:"212.68859",width:"513.25314",height:"357.51989",rx:"18.04568",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"595.70294",y:"231.77652",width:"478.71308",height:"267.83694",fill:"#3f3d56"}),Object(p.jsx)("circle",{cx:"835.05948",cy:"223.29299",r:"3.02983",fill:"#f2f2f2"}),Object(p.jsx)("path",{d:"M1123.07694,621.32226V652.6628a18.04341,18.04341,0,0,1-18.04568,18.04568H627.86949A18.04341,18.04341,0,0,1,609.8238,652.6628V621.32226Z",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("polygon",{points:"968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 651.452 645.651 962.312 645.651 968.978 667.466",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M1125.828,762.03359c-.59383,2.539-2.83591,5.21743-7.90178,7.75032-18.179,9.08949-55.1429-2.42386-55.1429-2.42386s-28.4804-4.84773-28.4804-17.573a22.72457,22.72457,0,0,1,2.49658-1.48459c7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M1125.828,762.03359c-22.251,8.526-42.0843,9.1622-62.43871-4.975-10.26507-7.12617-19.59089-8.88955-26.58979-8.75618,7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z",transform:"translate(-31.39089 -100.5)",opacity:"0.1"}),Object(p.jsx)("ellipse",{cx:"1066.53846",cy:"654.13477",rx:"7.87756",ry:"2.42386",fill:"#f2f2f2"}),Object(p.jsx)("circle",{cx:"835.05948",cy:"545.66686",r:"11.51335",fill:"#f2f2f2"}),Object(p.jsx)("polygon",{points:"968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 968.978 667.466",opacity:"0.1"}),Object(p.jsx)("rect",{x:"108.60911",y:"159",width:"208",height:"242",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"87.60911",y:"135",width:"250",height:"86",fill:"#3f3d56"}),Object(p.jsx)("rect",{x:"87.60911",y:"237",width:"250",height:"86",fill:"#3f3d56"}),Object(p.jsx)("rect",{x:"87.60911",y:"339",width:"250",height:"86",fill:"#3f3d56"}),Object(p.jsx)("rect",{x:"271.60911",y:"150",width:"16",height:"16",fill:"#f50057",opacity:"0.4"}),Object(p.jsx)("rect",{x:"294.60911",y:"150",width:"16",height:"16",fill:"#f50057",opacity:"0.8"}),Object(p.jsx)("rect",{x:"317.60911",y:"150",width:"16",height:"16",fill:"#f50057"}),Object(p.jsx)("rect",{x:"271.60911",y:"251",width:"16",height:"16",fill:"#f50057",opacity:"0.4"}),Object(p.jsx)("rect",{x:"294.60911",y:"251",width:"16",height:"16",fill:"#f50057",opacity:"0.8"}),Object(p.jsx)("rect",{x:"317.60911",y:"251",width:"16",height:"16",fill:"#f50057"}),Object(p.jsx)("rect",{x:"271.60911",y:"352",width:"16",height:"16",fill:"#f50057",opacity:"0.4"}),Object(p.jsx)("rect",{x:"294.60911",y:"352",width:"16",height:"16",fill:"#f50057",opacity:"0.8"}),Object(p.jsx)("rect",{x:"317.60911",y:"352",width:"16",height:"16",fill:"#f50057"}),Object(p.jsx)("circle",{cx:"316.60911",cy:"538",r:"79",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"280.60911",y:"600",width:"24",height:"43",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"328.60911",y:"600",width:"24",height:"43",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{cx:"300.60911",cy:"643.5",rx:"20",ry:"7.5",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{cx:"348.60911",cy:"642.5",rx:"20",ry:"7.5",fill:"#2f2e41"}),Object(p.jsx)("circle",{cx:"318.60911",cy:"518",r:"27",fill:"#fff"}),Object(p.jsx)("circle",{cx:"318.60911",cy:"518",r:"9",fill:"#3f3d56"}),Object(p.jsx)("path",{d:"M271.36733,565.03228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S277.74622,593.59986,271.36733,565.03228Z",transform:"translate(-31.39089 -100.5)",fill:"#f50057"}),Object(p.jsx)("ellipse",{cx:"417.21511",cy:"611.34365",rx:"39.5",ry:"12.40027",transform:"translate(-238.28665 112.98044) rotate(-23.17116)",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{cx:"269.21511",cy:"664.34365",rx:"39.5",ry:"12.40027",transform:"translate(-271.07969 59.02084) rotate(-23.17116)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M394,661.5c0,7.732-19.90861,23-42,23s-43-14.268-43-22,20.90861-6,43-6S394,653.768,394,661.5Z",transform:"translate(-31.39089 -100.5)",fill:"#fff"})]})},U=function(e){var t=e.error;return Object(p.jsxs)("section",{className:Y.a.error,children:[Object(p.jsx)("h3",{className:Y.a.errorTitle,children:t}),Object(p.jsx)(Q,{})]})},B=a(19),G=a.n(B),H=function(){return Object(p.jsxs)("div",{className:G.a.ldsSpinner,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})};function D(e){if(e)return{price:e.yearly_rate,currency:e.currency,language:e.region}}function z(e){var t=["starter","premium","professional"],a=e.filter((function(e){return t.includes(e.plan.name.toLowerCase())})),r=a.find((function(e){return"starter"===e.plan.name.toLowerCase()})),i=a.find((function(e){return"premium"===e.plan.name.toLowerCase()})),c=a.find((function(e){return"professional"===e.plan.name.toLowerCase()}));return{starter:D(r),premium:D(i),professional:D(c)}}var W=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(),n=Object(j.a)(c,2),s=n[0],f=n[1],h=Object(r.useState)(),x=Object(j.a)(h,2),u=x[0],m=x[1],O=Object(r.useState)(!0),g=Object(j.a)(O,2),y=g[0],w=g[1],v=Object(r.useState)(void 0),k=Object(j.a)(v,2),C=k[0],E=k[1],M=b().location;return Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a,r,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,fetch("https://app.satagro.pl/api/plans/?region=".concat(M,"&units=metric"));case 4:return t=e.sent,e.next=7,t.json();case 7:if((a=e.sent).length){e.next=10;break}throw new Error("Brak danych");case 10:if(r=z(a),c=r.starter,n=r.premium,s=r.professional,i(c),f(n),m(s),w(!1),c||n||s){e.next=17;break}throw new Error("Brak danych");case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0),E(A[M].fetchError),w(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[M]),y?Object(p.jsx)("div",{className:d.a.loading,children:Object(p.jsx)(H,{})}):C?Object(p.jsx)(U,{error:C}):Object(p.jsxs)("div",{className:d.a.wrapper,children:[a&&Object(p.jsx)(Z,{currency:a.currency,price:a.price}),s&&Object(p.jsx)(V,{price:s.price,currency:s.currency}),u&&Object(p.jsx)(_,{price:u.price,currency:u.currency}),Object(p.jsx)(T,{})]})},K=a(8),X=a.n(K),q=a(9),F=a.n(q),$=function(){return Object(p.jsxs)("svg",{viewBox:"875.074 354.117 733.851 503.767",className:F.a.heroPicture,children:[Object(p.jsxs)("g",{id:"Group_16","data-name":"Group 16",transform:"matrix(1, 0, 0, 1, 678.550598, 189.02948)",children:[Object(p.jsx)("path",{id:"Path_204","data-name":"Path 204",d:"M261.846,378.459a45.126,45.126,0,1,1,0-90.252H672.56a45.126,45.126,0,1,1,0,90.252Z",transform:"translate(-20.165 -123.12)",fill:"#e6e6e6"}),Object(p.jsx)("path",{id:"Path_205","data-name":"Path 205",d:"M264.96,297.207a39.24,39.24,0,0,0,0,78.48H675.674a39.24,39.24,0,1,0,0-78.48Z",transform:"translate(-23.279 -126.234)",fill:"#fff"}),Object(p.jsx)("rect",{id:"Rectangle_17","data-name":"Rectangle 17",width:"1.308",height:"78.48",transform:"translate(527.808 170.972)",fill:"#e6e6e6"}),Object(p.jsx)("path",{id:"Rectangle_7","data-name":"Rectangle 7",fill:"#03588d",d:"M 528.848 169.787 H 651.147 A 39.24 39.24 0 0 1 690.387 209.027 V 211.735 A 36.532 36.532 0 0 1 653.855 248.267 H 528.848 V 169.787 Z"}),Object(p.jsx)("path",{id:"Path_198","data-name":"Path 198",d:"M 618.326 184.532 C 599.851 184.532 588.304 204.532 597.542 220.532 C 606.779 236.532 629.873 236.532 639.111 220.532 C 641.217 216.884 642.326 212.745 642.326 208.532 C 642.326 195.278 631.581 184.532 618.326 184.532 Z M 618.326 191.732 C 623.869 191.732 627.333 197.732 624.562 202.532 C 621.79 207.332 614.862 207.332 612.091 202.532 C 611.459 201.438 611.126 200.196 611.126 198.932 C 611.127 194.956 614.35 191.733 618.326 191.733 Z M 618.326 226.394 C 612.552 226.368 607.163 223.492 603.926 218.709 C 604.041 213.909 613.526 211.267 618.326 211.267 C 623.126 211.267 632.611 213.909 632.726 218.709 C 629.486 223.488 624.1 226.363 618.326 226.394 Z",fill:"#fff"}),Object(p.jsx)("rect",{id:"Rectangle_9","data-name":"Rectangle 9",width:"56",height:"56",rx:"6",transform:"translate(419.112 288.229)",fill:"#03588d"}),Object(p.jsx)("ellipse",{id:"Ellipse_29","data-name":"Ellipse 29",cx:"134.439",cy:"18",rx:"134.439",ry:"18",transform:"translate(661.497 632.854)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_12","data-name":"Rectangle 12",width:"56",height:"56",rx:"6",transform:"translate(581.812 288.049)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_13","data-name":"Rectangle 13",width:"40.798",height:"40.798",transform:"translate(589.812 295.83)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_202","data-name":"Path 202",d:"M253.345,218.766l-7.075-9.1,4.114-3.2,3.35,4.307,11.318-11.946,3.785,3.585Z",transform:"translate(191.14 106.158)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_203","data-name":"Path 203",d:"M425.345,218.766l-7.075-9.1,4.114-3.2,3.35,4.307,11.317-11.946,3.785,3.585Z",transform:"translate(182.106 106.158)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_18","data-name":"Rectangle 18",width:"56",height:"56",rx:"6",transform:"translate(256.265 288.049)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_19","data-name":"Rectangle 19",width:"40.798",height:"40.798",transform:"translate(264.265 295.83)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_243","data-name":"Path 243",d:"M425.345,218.766l-7.075-9.1,4.114-3.2,3.35,4.307,11.317-11.946,3.785,3.585Z",transform:"translate(-143.441 106.158)",fill:"#e6e6e6"}),Object(p.jsxs)("g",{id:"Group_15","data-name":"Group 15",children:[Object(p.jsx)("path",{id:"Path_257","data-name":"Path 257",d:"M340.66,397.363H327.48l-6.268-50.837,19.452,0Z",transform:"translate(545.904 239.259)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_258","data-name":"Path 258",d:"M320.6,387.355h25.418v16H304.6a16,16,0,0,1,16-16Z",transform:"translate(543.364 245.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_259","data-name":"Path 259",d:"M223.865,397.363h-13.18l-6.268-50.837,19.452,0Z",transform:"translate(528.049 239.259)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_260","data-name":"Path 260",d:"M203.81,387.355h25.418v16H187.806a16,16,0,0,1,16-16Z",transform:"translate(525.51 245.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_261","data-name":"Path 261",d:"M487.471,249.585V243.82a37.18,37.18,0,0,1,37.18-37.18h0a37.18,37.18,0,0,1,37.18,37.18v5.764a26.8,26.8,0,0,1-26.8,26.8H514.275a26.8,26.8,0,0,1-26.8-26.8Z",transform:"translate(308.465 9.946)",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{id:"Ellipse_36","data-name":"Ellipse 36",cx:"28.316",cy:"28.316",rx:"28.316",ry:"28.316",transform:"translate(804.801 231.687)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_263","data-name":"Path 263",d:"M386.583,329.1a10.811,10.811,0,0,1,16.463,1.934l24.273-4.591,6.388,14.07-34.37,6A10.869,10.869,0,0,1,386.583,329.1Z",transform:"translate(292.514 28.216)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_264","data-name":"Path 264",d:"M515.087,284.516l.317.481-39.8,26.221-67.164,21.447a4.044,4.044,0,0,0-2.781,4.31l1.465,12.62a4.036,4.036,0,0,0,4.854,3.48l63.212-13.549a22.833,22.833,0,0,0,8.5-3.742L528.4,303.969A11.5,11.5,0,0,0,515.4,285Z",transform:"translate(295.954 21.634)",fill:"#ccc"}),Object(p.jsx)("path",{id:"Path_265","data-name":"Path 265",d:"M574.076,590.876a5.209,5.209,0,0,1-4.771-3.115l-60.421-149.3a1.729,1.729,0,0,0-3.238.182L456.351,583.993a5.189,5.189,0,0,1-6.781,3.333l-16.53-6.2a5.175,5.175,0,0,1-3.34-4.271c-7.437-64.782,57.413-228.3,58.069-229.946l.182-.455,59.116,13.077.123.134c23.585,25.73,42.971,188.012,46.618,220.283a5.163,5.163,0,0,1-3.425,5.472l-14.591,5.16a5.139,5.139,0,0,1-1.716.295Z",transform:"translate(299.543 31.32)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_266","data-name":"Path 266",d:"M515.547,375.9c-14.323,0-30.291-2.856-35.206-14.642l-.113-.271.153-.251c3.88-6.366,9.007-17.224,6.251-19.263-5.429-4.014-8.064-10.618-7.83-19.628.508-19.559,13.835-36.925,33.163-43.212h0a147.146,147.146,0,0,1,16.443-4.234,27.993,27.993,0,0,1,23.21,5.732,28.276,28.276,0,0,1,10.486,21.755c.2,20.9-3.015,50.015-19.5,70a5.128,5.128,0,0,1-3.036,1.765A140.9,140.9,0,0,1,515.547,375.9Z",transform:"translate(307.138 20.219)",fill:"#ccc"}),Object(p.jsx)("path",{id:"Path_267","data-name":"Path 267",d:"M506.106,364.845a11.017,11.017,0,0,1,13.464-7.683,10.843,10.843,0,0,1,1.669.618l18.43-16.773,12.818,8.635L526.13,372.966a11,11,0,0,1-12.466,5.288,10.83,10.83,0,0,1-7.558-13.409Z",transform:"translate(311.251 30.487)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_268","data-name":"Path 268",d:"M534.283,373.874A5.174,5.174,0,0,1,531,372.7l-7.268-5.939a5.188,5.188,0,0,1,.126-8.134l30.484-23.38a1.733,1.733,0,0,0,.327-2.415l-18.815-24.875a15.316,15.316,0,0,1,1.023-19.731h0a15.273,15.273,0,0,1,20.622-1.649l.119.126,19.647,28.133a17.515,17.515,0,0,1-.415,27.883l-39.481,30.134a5.2,5.2,0,0,1-3.088,1.017Z",transform:"translate(313.718 21.67)",fill:"#ccc"}),Object(p.jsx)("path",{id:"Path_269","data-name":"Path 269",d:"M497.965,240.705V226.656L523.047,215.7l23.916,10.952v14.049a2.306,2.306,0,0,1-2.306,2.306H500.271a2.306,2.306,0,0,1-2.306-2.306Z",transform:"translate(310.07 11.332)",fill:"#2f2e41"}),Object(p.jsx)("circle",{id:"Ellipse_30","data-name":"Ellipse 30",cx:"15.722",cy:"15.722",r:"15.722",transform:"translate(838.852 199.377)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_185","data-name":"Path 185",d:"M896.5,218.806a15.715,15.715,0,0,1,18.8-15.417,15.715,15.715,0,1,0-9.764,29.629,15.709,15.709,0,0,1-9.032-14.212Z",transform:"translate(-56.438 -12.141)",fill:"#2f2e41"})]})]}),Object(p.jsx)("image",{width:"200",height:"45",x:"954.526",y:"377.977",transform:"matrix(1.348704, 0, 0, 1.390771, -374.748993, -159.997009)",href:"data:image/png;base64,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"})]})},ee=function(){var e=b().location,t=A[e].offer;return Object(p.jsxs)("div",{className:F.a.wrapper,children:[Object(p.jsx)($,{}),Object(p.jsx)("h1",{className:F.a.title,children:t}),Object(p.jsx)("p",{className:F.a.heroText,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit veniam sed nesciunt voluptate commodi nam? Est sit officiis aliquam vel provident ad veritatis veniam, maiores velit, repellat, saepe aspernatur!"})]})};var te=function(){return Object(p.jsxs)("div",{className:X.a.container,children:[Object(p.jsx)("div",{className:X.a.top,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:X.a.curved,children:Object(p.jsx)("path",{fillOpacity:"1",d:"M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"})})}),Object(p.jsx)("div",{className:X.a.main,children:Object(p.jsxs)(u,{children:[Object(p.jsx)(ee,{}),Object(p.jsx)(W,{})]})}),Object(p.jsx)("div",{className:X.a.bottom,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:X.a.curvedBottom,children:Object(p.jsx)("path",{fillOpacity:"1",d:"M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"})})})]})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),i(e),c(e),n(e)}))};n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(te,{})}),document.getElementById("root")),ae()}],[[30,1,2]]]);
//# sourceMappingURL=main.10be05ae.chunk.js.map