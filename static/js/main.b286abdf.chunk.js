(this.webpackJsonpsatagro=this.webpackJsonpsatagro||[]).push([[0],{11:function(t,e,a){t.exports={error:"error_error__C1CwC",errorTitle:"error_errorTitle__17BZN",errorPicture:"error_errorPicture__cTYVT"}},12:function(t,e,a){t.exports={container:"plans_container__3zMl1",wrapper:"plans_wrapper__2f64X",loading:"plans_loading__3H48q"}},2:function(t,e,a){t.exports={container:"card_container__mPLjn",premium:"card_premium__HS1ZI",button:"card_button__1MlrB",price:"card_price__34ZCc",priceCurrency:"card_priceCurrency__7fBFR",priceCurrencyIcon:"card_priceCurrencyIcon__260ZO",priceYear:"card_priceYear__1vxj2",priceYearPln:"card_priceYearPln__3fVrC",text:"card_text__3ZnxU",text__last:"card_text__last__2u2OQ",textWrapper:"card_textWrapper__lNdD2",textList:"card_textList__2vcNE",title:"card_title__3ghvj",titleWrapper:"card_titleWrapper__3Z2o0",red:"card_red__3tRvA",blue:"card_blue__3pSHX",btnRed:"card_btnRed__1KG8R",btnBlue:"card_btnBlue__3oje_"}},23:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var r=a(1),c=a.n(r),n=a(16),i=a.n(n),s=(a(23),a(5)),l=a.n(s),o=a(10),f=a(6),j=a(12),d=a.n(j),p=a(0);a(26).config();var h=c.a.createContext({location:"PL"}),b=c.a.createContext(void 0);function u(t){var e=t.children,a=Object(r.useState)("PL"),c=Object(f.a)(a,2),n=c[0],i=c[1];Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["PL","CZ","LT","SK"],t.next=3,m();case 3:a=t.sent,e.includes(a.country_code)&&i(a.country_code);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var s={location:n},j={setLocation:i};return Object(p.jsx)(h.Provider,{value:s,children:Object(p.jsx)(b.Provider,{value:j,children:e})})}function x(){var t=c.a.useContext(h);if(void 0===t)throw new Error("useLocationState must be used within a LocationProvider");return t}function m(){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.ipdata.co/?api-key=".concat("09e466a124a43f63aa7cdbb65834b2d586b9ab0994e5efd70f794b7e"));case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var A={PL:{fetchError:"Pobieranie danych nie powiod\u0142o si\u0119",offer:"Oferta",starter:{price:"Gratis",description:["1 pole do 50 ha"],button:"Za\u0142\xf3\u017c konto"},professional:{description:["Monitoring satelitarny gospodarstwa","Mapy aplikacyjne","Wsparcie pobierania pr\xf3b glebowych","Obs\u0142uga techniczna"],button:"Kup teraz"},premium:{description:["Wszystkie us\u0142ugi Professional","Wysoko rozdzielczy monitoring \u201ePlanet\u201d","Integracja sensor\xf3w (IoT, stacje meteo)","Doradztwo agronomiczne"],button:"Kup teraz"},year:"rok"},CZ:{fetchError:"Sta\u017een\xed dat se nezda\u0159ilo ",offer:"Nab\xeddka",starter:{price:"Zdarma",description:["1 pole do 50 ha"],button:"VYTVO\u0158IT \xda\u010cET"},professional:{description:["Satelitn\xed monitoring farmy","Aplika\u010dn\xed mapy","Podpora procesu vzorkov\xe1n\xed p\u016fdy","Technick\xe1 podpora"],button:"KUP TE\u010e"},premium:{description:["V\u0161echny slu\u017eby Professionall","Monitoring ve vysok\xe9m rozli\u0161en\xed 'Planet'","Integrace senzor\u016f (IoT, meteostanice)","Agronomick\xe1 konzultace (anglicky a polsky)"],button:"KUP TE\u010e"},year:"rok"},LT:{fetchError:"Nepavyko atsisi\u0173sti duomen\u0173",offer:"Pasi\u016blymas",starter:{price:"Nemokamai ",description:["1 laukas iki 50 ha"],button:"Sukurti paskyr\u0105"},professional:{description:["Palydovinis \u016bkio steb\u0117jimas","Program\u0173 \u017eem\u0117lapiai","Parama dirvo\u017eemio m\u0117giniams imti","Technin\u0117 pagalba"],button:"pirkti dabar"},premium:{description:["Visos profesionalios paslaugos","Didel\u0117s skiriamosios gebos \u201eplanetos\u201c steb\u0117jimas","Jutiklio integracija (daikt\u0173 internetas, meteorologin\u0117s stotys)","Agronomin\u0117s konsultacijos"],button:"pirkti dabar"},year:"metus"},SK:{fetchError:"S\u0165ahovanie d\xe1t zlyhalo",offer:"Ponuka",starter:{price:"Zadarmo ",description:["1 pole do 50 ha"],button:"Vytvori\u0165 \xfa\u010det"},professional:{description:["Satelitn\xe9 sledovanie farmy","Aplika\u010dn\xe9 mapy","Podpora vzorkovania p\xf4dy","Technick\xe1 podpora"],button:"K\xfapte teraz"},premium:{description:["V\u0161etky profesion\xe1lne slu\u017eby","Monitorovanie plan\xe9ty vo vysokom rozl\xed\u0161en\xed","Integr\xe1cia senzorov (IoT, meteorologick\xe9 stanice)","Agronomick\xe9 poradenstvo"],button:"K\xfapte teraz"},year:"rok"}},g=a(3),y=a(2),_=a.n(y),v=a(4),w=a(17),P=a(18),k=a.n(P),M=a(14),E=a.n(M),L=function(t){var e=t.type,a=t.price,r=t.currency,c=x().location,n=A[c].year,i=A[c].starter.price,s=Object(v.a)(_.a.priceYear,Object(g.a)({},_.a.priceYearPln,"PL"===c));return"starter"===e?Object(p.jsx)("p",{className:_.a.price,children:i}):Object(p.jsxs)("p",{className:_.a.price,children:[a," ",Object(p.jsx)("span",{className:_.a.priceCurrency,children:"PLN"!==r?Object(p.jsx)(w.Icon,{icon:function(t){switch(t){case"CZK":return k.a;case"EUR":default:return E.a}}(r),className:_.a.priceCurrencyIcon}):"PLN"}),Object(p.jsxs)("span",{className:s,children:["ha / ",n]})]})},C=function(t){var e,a,r=t.type,c=t.price,n=t.currency,i=t.buttonText,s=t.children,l=Object(v.a)(_.a.titleWrapper,(e={},Object(g.a)(e,_.a.red,"premium"===r),Object(g.a)(e,_.a.blue,"professional"===r),e)),o=Object(v.a)(_.a.button,(a={},Object(g.a)(a,_.a.btnRed,"premium"===r),Object(g.a)(a,_.a.btnBlue,"professional"===r),a)),f=Object(v.a)(_.a.container,Object(g.a)({},_.a.premium,"premium"===r));return Object(p.jsxs)("section",{className:f,children:[Object(p.jsxs)("div",{className:l,children:[Object(p.jsx)("h2",{className:_.a.title,children:r.toUpperCase()}),Object(p.jsx)(L,{type:r,price:c,currency:n})]}),Object(p.jsxs)("div",{className:_.a.textWrapper,children:[s,Object(p.jsx)("button",{className:o,children:i.toUpperCase()})]})]})},Z=function(t){var e=t.description;return Object(p.jsx)("ul",{className:_.a.textList,children:e.map((function(t,a){return a===e.length-1?Object(p.jsx)("li",{className:"".concat(_.a.text," ").concat(_.a.text__last),children:t},a):Object(p.jsx)("li",{className:_.a.text,children:t},a)}))})},N=function(t){var e=t.currency,a=t.price,r=x().location,c=A[r].starter.description,n=A[r].starter.button;return Object(p.jsx)(C,{type:"starter",currency:e,price:a,buttonText:n,children:Object(p.jsx)(Z,{description:c})})},R=function(t){var e=t.price,a=t.currency,r=x().location,c=A[r].premium.description,n=A[r].premium.button;return Object(p.jsx)(C,{type:"premium",price:e,currency:a,buttonText:n,children:Object(p.jsx)(Z,{description:c})})},V=function(t){var e=t.price,a=t.currency,r=x().location,c=A[r].professional.description,n=A[r].professional.button;return Object(p.jsx)(C,{type:"professional",price:e,currency:a,buttonText:n,children:Object(p.jsx)(Z,{description:c})})},I=a(7),S=a.n(I),B=function(){var t=x().location,e=function(){var t=c.a.useContext(b);if(void 0===t)throw new Error("useLocationDispatch must be used within a LocationProvider");return t}().setLocation,a=function(e){return Object(v.a)(S.a.flag,Object(g.a)({},S.a.flagActive,e===t))};return Object(p.jsxs)("div",{className:S.a.flagsWrapper,children:[Object(p.jsx)("button",{onClick:function(){return e("PL")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA/BAMAAADkhXBTAAAAD1BMVEX////jQ2PcFDzuip7////0clvrAAAAAnRSTlO/7yV7gKYAAAAwSURBVHicY2QgGTC6jGoZ1TKqZVTLqJYRpsWYdC1Ko1pGtYxqGdUyqmWEaREkWQsAYPMMeAxx35kAAAAASUVORK5CYII=",alt:"",className:a("PL")})}),Object(p.jsx)("button",{onClick:function(){return e("SK")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAYAAABqS6DaAAAFXElEQVR4Ae2aY5AkTxDF9/PftrU82+buzNm2bdu2bdu2ubb3PGbr/S9qYvow03s9Z+SLeF+qo3Im6hfVmdlVfgmpD6S3x2Q/kN4qERACQiIgBIREQAgIiYAQEBIBISAkAkIiIASEREAISDYS0zMgxMS+WsfGERC1MtVuBN0v/75ySw4HAVEjY/lQ1Yvq3LgFYkYmxLR0Zt1v/qrnirfvEBA1MhQooXpRbROnwS3+4mWfdogQF09A1EgflE/1oppbdoBbjpVrfQLCX70ONSIg/+RQu6js9eaWbdR434BcuPR+Aek46yxepsesu8EC634P8L4bGjSDuUU76HMXlsf0uQrBLUu3PpDH/XPBVKM+LD36KQM5dRZbz6Sw334f7PexdiVepkv22gOIonK+mDwDbklGI4TEZFbCPlEuxydAvHv3sbxyRTEed/QERqy6xn77PfDLB1Ku337A6VQGMn4yfBV/7oIykIOH2a4kIAquPPAAJLNFGciUmfJO4E6ehnPLdjg3bIZbbGzjFnCHjrp2jiCAv3xVuWTevQ+TNoUTECVrhx2GpDcoJ/AyVWDIU/SJMf3fIXDL3KrDk8/+ywmTprYykO27MH1rJAFRcu1RR9n7X12VpAxEfVO5FXN2RhMQJTcYd5x13d4WzzpoOIyVtND9FawWCOvaDUXLwtKlFwzFynnEdKzZgEV7YwmIkptOPAkxJdUbEJZbmCQJ4p27rg+EN8MhhEfCLTE1zTUWGc3yDDgObpm0dTyBrFiNZQfjCYiSW087zcpWr0D0BryIjFVreAJZtAxrjiYSEAWz5kaIivEOxGJlPYqYnAL+9DlWITk3b2OVllv8mYfjmx6O7dwD7vhJFkuy2107pHo9j5j2uQux6WQyAVFy2+lnIETHegViqt8U+n9z+p7Ufw+AsXI1GPIW9QQyfzEByc4Nxh5n7/7XVGWxpL54PyV1RZfuvdfVqf/632sBwh0+htFrrhMQJf9Yfx0AwFCiwusAwg60Gk84QUCyc1yGEZYefX0CEp6sw/nou7jfsqPqeYbcRVgJHdh6CwHJzvN3x7AqSc2iRv2ZF6XKjZXn/hU2D7sD1e0uS8/+SMwyPev/EJCKAw5AstqgD8gjL97dX/1x1L8UzvxbDA9+ceWXjN+DkbPiNI/5X2mW4vh/JeW54X/lxwH/skj9/YlDL1Y6T9wYTkCe5U+quV5bthFj2cKd/6cogitNl5/nqzAZV/4phK6FOynGyF1xCgNWr0Q/eezb0MVYmtPVHBrLhUISJYS03UZA1LjDzLPsI2NiYCH8XWXO088ZoC81yxTmy1A8xj7TLMfOwIpw7tmPzadU9x8E5PMaqxCVqseKocteeuwmNSeB4wXkbL+NgPjisn33gec4VKo+/aXF/CV0IdKjUuTeg4D46LHrb+BOUiYCQ+e8cKwvNMtxdM0RVh5/UWP1+wmkddEeeJVuW7wXrp0MR+z5aPwVOt+HP+eZO9ZP34oHt3XopRnKYr+P9nsN92/ZB0X+7HnEXYhGUJjPO4WVwVvm7IB47x6MpSqymO+rGZDXBYU7chz3krNQ0Yec8k/oXJzfdYZ9sDSWZA0jAXlp/iMAjqUrIXA8RndfzHJCdjDq1JmOeym3wV+6Il+MICCvwJb2XdklufBj11FW67lb/g2dh80ztwOiyA6gdH8EsnkE5BXakK8YuH0HAUlii58rbDZ+CluIcT0Xw6I3sWNgUw35hJCAvC6bG7Vklx1Enof5vpGdu1uHj3nNu4KAeBzRWjr3hG3CVOgD88rjBIRMQMgEhICQCQgBIRMQAkImIASETEDIBISAkAnIuwskgvz2+H81+JtdzG1VmQAAAABJRU5ErkJggg==",alt:"",className:a("SK")})}),Object(p.jsx)("button",{onClick:function(){return e("CZ")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAMAAABdlVDoAAAAS1BMVEXXFBrTFh1sL1D02tz53d6DkK4VRH02PGs3PGt0LEx1LEuyHSyzHCzTFRvUFRzXFBoRRX6Ior8WSYE+aJZjX4TT3efriYz6+/z///80Wqe8AAAABnRSTlPU1en4+PtAtsV6AAAA6ElEQVR42rXPuVVDMQAAQQH2BwxG4rCh/0oJN1Yw28C8HeenE2+s79ufbqz19fnrkdUMRJqBSDMQaQYizUikGYk0Q5FmJNIMRZqRSDMUaUYizVCkGYk0Q5FmJNIMRZqRSDMUaUYizVCkGYk0Q5FmJNIMRZqRSDMUaUYizVCkGYfUz327XeR4vc7tNpHnt1kAaQMhbTCkDYe0wZA2HNIGQ9pwSBsMacMhbTCkDYe0wZA2HNIGRo5LGwp5eZ8TIW18TIe0wZA2HNIGQ9pwSBsMacMhbTCkDYe04ZA2INIGRNqASBsQeXwYvH/aEdiCmtytLgAAAABJRU5ErkJggg==",alt:"",className:a("CZ")})}),Object(p.jsx)("button",{onClick:function(){return e("LT")},className:S.a.button,children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEX9uRMAakTBJy2z1jQzAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg==",alt:"",className:a("LT")})})]})},z=a(11),T=a.n(z),Y=function(){return Object(p.jsxs)("svg",{id:"aa03ddf9-f8f2-4819-a4ce-be9b0a220741","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"1119.60911",height:"699",viewBox:"0 0 1119.60911 699",className:T.a.errorPicture,children:[Object(p.jsx)("title",{children:"fetch error"}),Object(p.jsx)("circle",{cx:"292.60911",cy:"213",r:"213",fill:"#f2f2f2"}),Object(p.jsx)("path",{d:"M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356",transform:"translate(-31.39089 -100.5)",fill:"#f50057"}),Object(p.jsx)("path",{d:"M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288",transform:"translate(-31.39089 -100.5)",fill:"#f50057"}),Object(p.jsx)("path",{d:"M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M117.22379,292.83905s15.41555-.47479,20.06141-3.783,23.713-7.2585,24.86553-1.95278,23.16671,26.38821,5.76263,26.5286-40.43935-2.711-45.07627-5.53549S117.22379,292.83905,117.22379,292.83905Z",transform:"translate(-31.39089 -100.5)",fill:"#a8a8a8"}),Object(p.jsx)("path",{d:"M168.224,311.78489c-17.40408.14042-40.43933-2.71094-45.07626-5.53548-3.53126-2.151-4.93843-9.86945-5.40926-13.43043-.32607.014-.51463.02-.51463.02s.97638,12.43276,5.61331,15.2573,27.67217,5.67589,45.07626,5.53547c5.02386-.04052,6.7592-1.82793,6.66391-4.47526C173.87935,310.756,171.96329,311.75474,168.224,311.78489Z",transform:"translate(-31.39089 -100.5)",opacity:"0.2"}),Object(p.jsx)("ellipse",{cx:"198.60911",cy:"424.5",rx:"187",ry:"25.43993",fill:"#3f3d56"}),Object(p.jsx)("ellipse",{cx:"198.60911",cy:"424.5",rx:"157",ry:"21.35866",opacity:"0.1"}),Object(p.jsx)("ellipse",{cx:"836.60911",cy:"660.5",rx:"283",ry:"38.5",fill:"#3f3d56"}),Object(p.jsx)("ellipse",{cx:"310.60911",cy:"645.5",rx:"170",ry:"23.12721",fill:"#3f3d56"}),Object(p.jsx)("path",{d:"M494,726.5c90,23,263-30,282-90",transform:"translate(-31.39089 -100.5)",fill:"none",stroke:"#2f2e41","stroke-miterlimit":"10","stroke-width":"2"}),Object(p.jsx)("path",{d:"M341,359.5s130-36,138,80-107,149-17,172",transform:"translate(-31.39089 -100.5)",fill:"none",stroke:"#2f2e41","stroke-miterlimit":"10","stroke-width":"2"}),Object(p.jsx)("path",{d:"M215.40233,637.78332s39.0723-10.82,41.47675,24.04449-32.15951,44.78287-5.10946,51.69566",transform:"translate(-31.39089 -100.5)",fill:"none",stroke:"#2f2e41","stroke-miterlimit":"10","stroke-width":"2"}),Object(p.jsx)("path",{d:"M810.09554,663.73988,802.218,714.03505s-38.78182,20.60284-11.51335,21.20881,155.73324,0,155.73324,0,24.84461,0-14.54318-21.81478l-7.87756-52.719Z",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M785.21906,734.69812c6.193-5.51039,16.9989-11.252,16.9989-11.252l7.87756-50.2952,113.9216.10717,7.87756,49.582c9.185,5.08711,14.8749,8.987,18.20362,11.97818,5.05882-1.15422,10.58716-5.44353-18.20362-21.38921l-7.87756-52.719-113.9216,3.02983L802.218,714.03506S769.62985,731.34968,785.21906,734.69812Z",transform:"translate(-31.39089 -100.5)",opacity:"0.1"}),Object(p.jsx)("rect",{x:"578.43291",y:"212.68859",width:"513.25314",height:"357.51989",rx:"18.04568",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"595.70294",y:"231.77652",width:"478.71308",height:"267.83694",fill:"#3f3d56"}),Object(p.jsx)("circle",{cx:"835.05948",cy:"223.29299",r:"3.02983",fill:"#f2f2f2"}),Object(p.jsx)("path",{d:"M1123.07694,621.32226V652.6628a18.04341,18.04341,0,0,1-18.04568,18.04568H627.86949A18.04341,18.04341,0,0,1,609.8238,652.6628V621.32226Z",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("polygon",{points:"968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 651.452 645.651 962.312 645.651 968.978 667.466",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M1125.828,762.03359c-.59383,2.539-2.83591,5.21743-7.90178,7.75032-18.179,9.08949-55.1429-2.42386-55.1429-2.42386s-28.4804-4.84773-28.4804-17.573a22.72457,22.72457,0,0,1,2.49658-1.48459c7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z",transform:"translate(-31.39089 -100.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M1125.828,762.03359c-22.251,8.526-42.0843,9.1622-62.43871-4.975-10.26507-7.12617-19.59089-8.88955-26.58979-8.75618,7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z",transform:"translate(-31.39089 -100.5)",opacity:"0.1"}),Object(p.jsx)("ellipse",{cx:"1066.53846",cy:"654.13477",rx:"7.87756",ry:"2.42386",fill:"#f2f2f2"}),Object(p.jsx)("circle",{cx:"835.05948",cy:"545.66686",r:"11.51335",fill:"#f2f2f2"}),Object(p.jsx)("polygon",{points:"968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 968.978 667.466",opacity:"0.1"}),Object(p.jsx)("rect",{x:"108.60911",y:"159",width:"208",height:"242",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"87.60911",y:"135",width:"250",height:"86",fill:"#3f3d56"}),Object(p.jsx)("rect",{x:"87.60911",y:"237",width:"250",height:"86",fill:"#3f3d56"}),Object(p.jsx)("rect",{x:"87.60911",y:"339",width:"250",height:"86",fill:"#3f3d56"}),Object(p.jsx)("rect",{x:"271.60911",y:"150",width:"16",height:"16",fill:"#f50057",opacity:"0.4"}),Object(p.jsx)("rect",{x:"294.60911",y:"150",width:"16",height:"16",fill:"#f50057",opacity:"0.8"}),Object(p.jsx)("rect",{x:"317.60911",y:"150",width:"16",height:"16",fill:"#f50057"}),Object(p.jsx)("rect",{x:"271.60911",y:"251",width:"16",height:"16",fill:"#f50057",opacity:"0.4"}),Object(p.jsx)("rect",{x:"294.60911",y:"251",width:"16",height:"16",fill:"#f50057",opacity:"0.8"}),Object(p.jsx)("rect",{x:"317.60911",y:"251",width:"16",height:"16",fill:"#f50057"}),Object(p.jsx)("rect",{x:"271.60911",y:"352",width:"16",height:"16",fill:"#f50057",opacity:"0.4"}),Object(p.jsx)("rect",{x:"294.60911",y:"352",width:"16",height:"16",fill:"#f50057",opacity:"0.8"}),Object(p.jsx)("rect",{x:"317.60911",y:"352",width:"16",height:"16",fill:"#f50057"}),Object(p.jsx)("circle",{cx:"316.60911",cy:"538",r:"79",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"280.60911",y:"600",width:"24",height:"43",fill:"#2f2e41"}),Object(p.jsx)("rect",{x:"328.60911",y:"600",width:"24",height:"43",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{cx:"300.60911",cy:"643.5",rx:"20",ry:"7.5",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{cx:"348.60911",cy:"642.5",rx:"20",ry:"7.5",fill:"#2f2e41"}),Object(p.jsx)("circle",{cx:"318.60911",cy:"518",r:"27",fill:"#fff"}),Object(p.jsx)("circle",{cx:"318.60911",cy:"518",r:"9",fill:"#3f3d56"}),Object(p.jsx)("path",{d:"M271.36733,565.03228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S277.74622,593.59986,271.36733,565.03228Z",transform:"translate(-31.39089 -100.5)",fill:"#f50057"}),Object(p.jsx)("ellipse",{cx:"417.21511",cy:"611.34365",rx:"39.5",ry:"12.40027",transform:"translate(-238.28665 112.98044) rotate(-23.17116)",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{cx:"269.21511",cy:"664.34365",rx:"39.5",ry:"12.40027",transform:"translate(-271.07969 59.02084) rotate(-23.17116)",fill:"#2f2e41"}),Object(p.jsx)("path",{d:"M394,661.5c0,7.732-19.90861,23-42,23s-43-14.268-43-22,20.90861-6,43-6S394,653.768,394,661.5Z",transform:"translate(-31.39089 -100.5)",fill:"#fff"})]})},U=function(t){var e=t.error;return Object(p.jsxs)("div",{className:T.a.error,children:[Object(p.jsx)("h2",{className:T.a.errorTitle,children:e}),Object(p.jsx)(Y,{})]})},D=function(){var t=Object(r.useState)(),e=Object(f.a)(t,2),a=e[0],c=e[1],n=Object(r.useState)(),i=Object(f.a)(n,2),s=i[0],j=i[1],h=Object(r.useState)(),b=Object(f.a)(h,2),u=b[0],m=b[1],O=Object(r.useState)(!1),g=Object(f.a)(O,2),y=g[0],_=g[1],v=Object(r.useState)(void 0),w=Object(f.a)(v,2),P=w[0],k=w[1],M=x().location;return Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,fetch("https://app.satagro.pl/api/plans/?region=".concat(M,"&units=metrics"));case 4:return e=t.sent,t.next=7,e.json();case 7:if((a=t.sent).length){t.next=10;break}throw new Error("Brak danych");case 10:c(Q(a).starter),j(Q(a).premium),m(Q(a).professional),_(!1),t.next=21;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0),k(A[M].fetchError),_(!1);case 21:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[M]),y?Object(p.jsx)("div",{className:d.a.loading,children:"Loading..."}):P?Object(p.jsx)("div",{children:Object(p.jsx)(U,{error:P})}):Object(p.jsx)("div",{className:d.a.container,children:Object(p.jsxs)("div",{className:d.a.wrapper,children:[a&&Object(p.jsx)(N,{currency:a.currency,price:a.price}),s&&Object(p.jsx)(R,{price:s.price,currency:s.currency}),u&&Object(p.jsx)(V,{price:u.price,currency:u.currency}),Object(p.jsx)(B,{})]})})};function Q(t){var e=["starter","premium","professional"],a=t.filter((function(t){return e.includes(t.plan.name.toLowerCase())})),r=a.find((function(t){return"starter"===t.plan.name.toLowerCase()})),c=a.find((function(t){return"premium"===t.plan.name.toLowerCase()})),n=a.find((function(t){return"professional"===t.plan.name.toLowerCase()}));return{starter:G(r),premium:G(c),professional:G(n)}}function G(t){return t?{price:t.yearly_rate,currency:t.currency,language:t.region}:null}var H=a(8),W=a.n(H),X=a(9),J=a.n(X),F=function(){return Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:J.a.heroPicture,viewBox:"0 0 733.82 503.768",children:Object(p.jsxs)("g",{id:"Group_16","data-name":"Group 16",transform:"translate(-196.555 -165.086)",children:[Object(p.jsx)("path",{id:"Path_204","data-name":"Path 204",d:"M261.846,378.459a45.126,45.126,0,1,1,0-90.252H672.56a45.126,45.126,0,1,1,0,90.252Z",transform:"translate(-20.165 -123.12)",fill:"#e6e6e6"}),Object(p.jsx)("path",{id:"Path_205","data-name":"Path 205",d:"M264.96,297.207a39.24,39.24,0,0,0,0,78.48H675.674a39.24,39.24,0,1,0,0-78.48Z",transform:"translate(-23.279 -126.234)",fill:"#fff"}),Object(p.jsx)("rect",{id:"Rectangle_15","data-name":"Rectangle 15",width:"1.308",height:"78.48",transform:"translate(364.961 170.972)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_17","data-name":"Rectangle 17",width:"1.308",height:"78.48",transform:"translate(527.808 170.972)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_7","data-name":"Rectangle 7",width:"161.539",height:"78.48",transform:"translate(366.269 170.972)",fill:"#0367a6"}),Object(p.jsx)("path",{id:"Path_198","data-name":"Path 198",d:"M276.268,206.815a24,24,0,1,0,24,24,24,24,0,0,0-24-24Zm0,7.2a7.2,7.2,0,1,1-7.2,7.2A7.2,7.2,0,0,1,276.268,214.016Zm0,34.662a17.484,17.484,0,0,1-14.4-7.685c.115-4.8,9.6-7.442,14.4-7.442s14.285,2.642,14.4,7.442a17.513,17.513,0,0,1-14.4,7.685Z",transform:"translate(170.844 -20.53)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_200","data-name":"Path 200",d:"M620.7,206.815a24,24,0,1,0,24,24,24,24,0,0,0-24-24Zm0,7.2a7.2,7.2,0,1,1-7.2,7.2A7.2,7.2,0,0,1,620.7,214.015Zm0,34.662a17.484,17.484,0,0,1-14.4-7.685c.115-4.8,9.6-7.442,14.4-7.442s14.285,2.642,14.4,7.442a17.513,17.513,0,0,1-14.4,7.685Z",transform:"translate(-336.439 -20.53)",fill:"#e6e6e6"}),Object(p.jsx)("path",{id:"Path_242","data-name":"Path 242",d:"M620.7,206.815a24,24,0,1,0,24,24,24,24,0,0,0-24-24Zm0,7.2a7.2,7.2,0,1,1-7.2,7.2A7.2,7.2,0,0,1,620.7,214.015Zm0,34.662a17.484,17.484,0,0,1-14.4-7.685c.115-4.8,9.6-7.442,14.4-7.442s14.285,2.642,14.4,7.442a17.513,17.513,0,0,1-14.4,7.685Z",transform:"translate(-10.892 -20.53)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_9","data-name":"Rectangle 9",width:"56",height:"56",rx:"6",transform:"translate(419.112 288.229)",fill:"#0367a6"}),Object(p.jsx)("ellipse",{id:"Ellipse_29","data-name":"Ellipse 29",cx:"134.439",cy:"18",rx:"134.439",ry:"18",transform:"translate(661.497 632.854)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_12","data-name":"Rectangle 12",width:"56",height:"56",rx:"6",transform:"translate(581.812 288.049)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_13","data-name":"Rectangle 13",width:"40.798",height:"40.798",transform:"translate(589.812 295.83)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_202","data-name":"Path 202",d:"M253.345,218.766l-7.075-9.1,4.114-3.2,3.35,4.307,11.318-11.946,3.785,3.585Z",transform:"translate(191.14 106.158)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_203","data-name":"Path 203",d:"M425.345,218.766l-7.075-9.1,4.114-3.2,3.35,4.307,11.317-11.946,3.785,3.585Z",transform:"translate(182.106 106.158)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_18","data-name":"Rectangle 18",width:"56",height:"56",rx:"6",transform:"translate(256.265 288.049)",fill:"#e6e6e6"}),Object(p.jsx)("rect",{id:"Rectangle_19","data-name":"Rectangle 19",width:"40.798",height:"40.798",transform:"translate(264.265 295.83)",fill:"#fff"}),Object(p.jsx)("path",{id:"Path_243","data-name":"Path 243",d:"M425.345,218.766l-7.075-9.1,4.114-3.2,3.35,4.307,11.317-11.946,3.785,3.585Z",transform:"translate(-143.441 106.158)",fill:"#e6e6e6"}),Object(p.jsxs)("g",{id:"Group_15","data-name":"Group 15",children:[Object(p.jsx)("path",{id:"Path_257","data-name":"Path 257",d:"M340.66,397.363H327.48l-6.268-50.837,19.452,0Z",transform:"translate(545.904 239.259)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_258","data-name":"Path 258",d:"M320.6,387.355h25.418v16H304.6a16,16,0,0,1,16-16Z",transform:"translate(543.364 245.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_259","data-name":"Path 259",d:"M223.865,397.363h-13.18l-6.268-50.837,19.452,0Z",transform:"translate(528.049 239.259)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_260","data-name":"Path 260",d:"M203.81,387.355h25.418v16H187.806a16,16,0,0,1,16-16Z",transform:"translate(525.51 245.5)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_261","data-name":"Path 261",d:"M487.471,249.585V243.82a37.18,37.18,0,0,1,37.18-37.18h0a37.18,37.18,0,0,1,37.18,37.18v5.764a26.8,26.8,0,0,1-26.8,26.8H514.275a26.8,26.8,0,0,1-26.8-26.8Z",transform:"translate(308.465 9.946)",fill:"#2f2e41"}),Object(p.jsx)("ellipse",{id:"Ellipse_36","data-name":"Ellipse 36",cx:"28.316",cy:"28.316",rx:"28.316",ry:"28.316",transform:"translate(804.801 231.687)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_263","data-name":"Path 263",d:"M386.583,329.1a10.811,10.811,0,0,1,16.463,1.934l24.273-4.591,6.388,14.07-34.37,6A10.869,10.869,0,0,1,386.583,329.1Z",transform:"translate(292.514 28.216)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_264","data-name":"Path 264",d:"M515.087,284.516l.317.481-39.8,26.221-67.164,21.447a4.044,4.044,0,0,0-2.781,4.31l1.465,12.62a4.036,4.036,0,0,0,4.854,3.48l63.212-13.549a22.833,22.833,0,0,0,8.5-3.742L528.4,303.969A11.5,11.5,0,0,0,515.4,285Z",transform:"translate(295.954 21.634)",fill:"#ccc"}),Object(p.jsx)("path",{id:"Path_265","data-name":"Path 265",d:"M574.076,590.876a5.209,5.209,0,0,1-4.771-3.115l-60.421-149.3a1.729,1.729,0,0,0-3.238.182L456.351,583.993a5.189,5.189,0,0,1-6.781,3.333l-16.53-6.2a5.175,5.175,0,0,1-3.34-4.271c-7.437-64.782,57.413-228.3,58.069-229.946l.182-.455,59.116,13.077.123.134c23.585,25.73,42.971,188.012,46.618,220.283a5.163,5.163,0,0,1-3.425,5.472l-14.591,5.16a5.139,5.139,0,0,1-1.716.295Z",transform:"translate(299.543 31.32)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_266","data-name":"Path 266",d:"M515.547,375.9c-14.323,0-30.291-2.856-35.206-14.642l-.113-.271.153-.251c3.88-6.366,9.007-17.224,6.251-19.263-5.429-4.014-8.064-10.618-7.83-19.628.508-19.559,13.835-36.925,33.163-43.212h0a147.146,147.146,0,0,1,16.443-4.234,27.993,27.993,0,0,1,23.21,5.732,28.276,28.276,0,0,1,10.486,21.755c.2,20.9-3.015,50.015-19.5,70a5.128,5.128,0,0,1-3.036,1.765A140.9,140.9,0,0,1,515.547,375.9Z",transform:"translate(307.138 20.219)",fill:"#ccc"}),Object(p.jsx)("path",{id:"Path_267","data-name":"Path 267",d:"M506.106,364.845a11.017,11.017,0,0,1,13.464-7.683,10.843,10.843,0,0,1,1.669.618l18.43-16.773,12.818,8.635L526.13,372.966a11,11,0,0,1-12.466,5.288,10.83,10.83,0,0,1-7.558-13.409Z",transform:"translate(311.251 30.487)",fill:"#ffb8b8"}),Object(p.jsx)("path",{id:"Path_268","data-name":"Path 268",d:"M534.283,373.874A5.174,5.174,0,0,1,531,372.7l-7.268-5.939a5.188,5.188,0,0,1,.126-8.134l30.484-23.38a1.733,1.733,0,0,0,.327-2.415l-18.815-24.875a15.316,15.316,0,0,1,1.023-19.731h0a15.273,15.273,0,0,1,20.622-1.649l.119.126,19.647,28.133a17.515,17.515,0,0,1-.415,27.883l-39.481,30.134a5.2,5.2,0,0,1-3.088,1.017Z",transform:"translate(313.718 21.67)",fill:"#ccc"}),Object(p.jsx)("path",{id:"Path_269","data-name":"Path 269",d:"M497.965,240.705V226.656L523.047,215.7l23.916,10.952v14.049a2.306,2.306,0,0,1-2.306,2.306H500.271a2.306,2.306,0,0,1-2.306-2.306Z",transform:"translate(310.07 11.332)",fill:"#2f2e41"}),Object(p.jsx)("circle",{id:"Ellipse_30","data-name":"Ellipse 30",cx:"15.722",cy:"15.722",r:"15.722",transform:"translate(838.852 199.377)",fill:"#2f2e41"}),Object(p.jsx)("path",{id:"Path_185","data-name":"Path 185",d:"M896.5,218.806a15.715,15.715,0,0,1,18.8-15.417,15.715,15.715,0,1,0-9.764,29.629,15.709,15.709,0,0,1-9.032-14.212Z",transform:"translate(-56.438 -12.141)",fill:"#2f2e41"})]})]})})},K=function(){var t=x().location;console.log(t);var e=A[t].offer;return Object(p.jsxs)("div",{className:J.a.wrapper,children:[Object(p.jsx)(F,{}),Object(p.jsx)("h1",{className:J.a.title,children:e}),Object(p.jsx)("p",{className:J.a.heroText,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit veniam sed nesciunt voluptate commodi nam? Est sit officiis aliquam vel provident ad veritatis veniam, maiores velit, repellat, saepe aspernatur!"})]})};var q=function(){return Object(p.jsxs)("div",{className:W.a.container,children:[Object(p.jsx)("div",{className:W.a.top,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:W.a.curved,children:Object(p.jsx)("path",{fillOpacity:"1",d:"M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"})})}),Object(p.jsx)("div",{className:W.a.main,children:Object(p.jsxs)(u,{children:[Object(p.jsx)(K,{}),Object(p.jsx)(D,{})]})}),Object(p.jsx)("div",{className:W.a.bottom,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:W.a.curvedBottom,children:Object(p.jsx)("path",{fillOpacity:"1",d:"M0,224L288,64L576,160L864,288L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"})})})]})},$=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(e){var a=e.getCLS,r=e.getFID,c=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),r(t),c(t),n(t),i(t)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),$()},7:function(t,e,a){t.exports={button:"flags_button__SQaOa",flagsWrapper:"flags_flagsWrapper__3_oij",flag:"flags_flag__1c-Fp",flagActive:"flags_flagActive__1b_NA"}},8:function(t,e,a){t.exports={bottom:"app_bottom__11DEb",container:"app_container__3FwrV",curved:"app_curved__xcUz6",curvedBottom:"app_curvedBottom__3wQO3",top:"app_top__Vf_zF",main:"app_main__1NOZK"}},9:function(t,e,a){t.exports={wrapper:"hero_wrapper__Q6134",title:"hero_title__1MRGV",heroText:"hero_heroText__3omzt",heroPicture:"hero_heroPicture__o_ClS"}}},[[29,1,2]]]);
//# sourceMappingURL=main.b286abdf.chunk.js.map