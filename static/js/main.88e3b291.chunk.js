(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{53:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(0),c=t.n(r),o=t(24),i=t.n(o),s=t(6),d=t.n(s),p=t(13),l=t(8),u=t(5),f=t(29),m=t(25),b=t.n(m).a.create({baseURL:"https://pokeapi.co/api/v2/pokemon/"}),x=Object(r.createContext)({}),g=function(n){var e=n.children,t=Object(r.useState)([]),c=Object(u.a)(t,2),o=c[0],i=c[1],s=Object(r.useState)([]),d=Object(u.a)(s,2),p=d[0],l=d[1],f=Object(r.useState)(""),m=Object(u.a)(f,2),g=m[0],j=m[1];Object(r.useEffect)((function(){b.get("?offset=0&limit=20").then((function(n){l(n.data.count),i(n.data.results),j(n.data.next)}))}),[]);var h=Object(r.useCallback)((function(n){i([]),i(n)}),[i,o]);return Object(a.jsx)(x.Provider,{value:{pokemons:o,setPokemons:h,count:p,setCountPokemons:l,nextPage:g,setNextPage:j},children:e})},j=function(){var n=Object(r.useContext)(x);if(!n)throw new Error("usePokemons must be used within a pokemons provider");return n},h=t(3),v=t(4);function y(){var n=Object(h.a)(["\n\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    background-color: rgba(0, 0, 0, 0.90);\n    margin-top: -80px;\n\n    padding: 26px 56px;\n    width: 100%;\n    max-width: 1080;\n    z-index: 999;\n\n    h1 {\n        color: #F2D94E;\n        font-weight: 500;\n    }\n\n    .search {\n\n        width: 90%;\n        max-width: 400px;\n        background-color: #fff;\n        border-radius: 16px;\n        padding: 4px 16px;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        input {\n            border: none;\n            font-size: 18px;\n            width: 300px;\n            text-transform: uppercase;\n            background-color: transparent;\n        }\n\n        button {\n            background-color: transparent;\n            border: none;\n            opacity: 0.7;\n            transition: all 0.5s ease;\n            cursor: pointer;\n\n            &:hover {\n                opacity: 1; \n            }\n\n            svg {\n                font-size: 24px;\n                color: #256ab0;\n            }\n        }\n\n    }\n\n    \n\n"]);return y=function(){return n},n}var k=v.c.div(y()),O=function(){var n=j(),e=n.count,t=n.setPokemons,c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],p=function(){var n=Object(l.a)(d.a.mark((function n(){var a,r,c,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=i.length<=2?20:e,n.next=3,b.get("?limit=".concat(a));case 3:r=n.sent,c=r.data.results,o=[],t([]),c.forEach((function(n){n.name.includes(i.toLowerCase())&&o.push(n)})),t(o),s("");case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.jsxs)(k,{children:[Object(a.jsx)("h1",{children:"Pok\xe9dex"}),Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{type:"text",placeholder:"Search by name",onChange:function(n){return s(n.target.value)},value:i}),Object(a.jsx)("button",{onClick:p,children:Object(a.jsx)(f.a,{})})]})]})};function w(){var n=Object(h.a)(["\n\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    background-color: rgba(0, 0, 0, 0.95);\n\n    padding: 16px 26px;\n    width: 100%;\n    max-width: 1080;\n\n    h1 {\n        color: #36c3f9;\n        font-size: 16px;\n        font-weight: 300;\n    } \n\n    a {\n        text-decoration: none;\n        color: #36c3f9; \n    }  \n\n"]);return w=function(){return n},n}var S=v.c.div(w()),P=function(){return Object(a.jsx)(S,{children:Object(a.jsxs)("h1",{children:["Created by ",Object(a.jsx)("a",{href:"http://fabioalbiero.com",children:"F\xe1bo Henriqe Albiero"})," @2020"]})})},q=t.p+"static/media/pokeball-open2.dab0aae8.png",z=t.p+"static/media/bug.8f6085a7.svg",C=t.p+"static/media/dark.63dfb385.svg",N=t.p+"static/media/dragon.7730bdf3.svg",Z=t.p+"static/media/electric.f7718e9a.svg",_=t.p+"static/media/fairy.cd828f2a.svg",E=t.p+"static/media/fighting.4ed2b52f.svg",F=t.p+"static/media/fire.10d9997b.svg",M=t.p+"static/media/flying.cbf76191.svg",B=t.p+"static/media/ghost.5cb59cb8.svg",L=t.p+"static/media/grass.fd120c52.svg",X=t.p+"static/media/ground.e8b90db4.svg",Y=t.p+"static/media/ice.ce39130a.svg",D=t.p+"static/media/normal.b4f01adf.svg",J=t.p+"static/media/poison.e881e99e.svg",R=t.p+"static/media/psychic.9f6dee4d.svg",T=t.p+"static/media/rock.680f2b05.svg",A=t.p+"static/media/steel.6f6f09a5.svg",H=t.p+"static/media/water.7ec20dac.svg";function I(){var n=Object(h.a)([" width: ","px "]);return I=function(){return n},n}function U(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    perspective: 1580px;\n\n    .card {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;   \n        transform-style: preserve-3d;     \n\n        margin: 24px;\n        padding: 26px;\n\n        width: 280px;\n        height: 360px;\n        box-shadow: 0 8px 16px rgba(0,0,0, .4), 0 0 26px rgba(0,0,0, .15);\n        background-color: #fff;\n        border: 1px solid rgba(60, 68, 76, 0.95);\n        border-radius: 5px; \n\n        background-color: rgba(40, 48, 56, 0.90);\n\n        .image-container {\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            \n            .pokeball-image {\n                height: 130px;\n                z-index: 1;\n                transition: all 0.5s ease;\n            }\n\n            .pokemon-image {\n                position: absolute;\n                height: 190px;\n                z-index: 2;\n                transition: all 0.5s ease;\n            }\n        }\n\n\n        main {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n\n            width: 100%;\n            transition: all 0.5s ease;\n\n            h2 {\n                color: #F2D94E;\n                font-size: 24px;\n                font-weight: 500;\n                margin: 16px 0;\n                text-transform: uppercase;\n            }\n\n            .experience {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: #fff;\n                width: 100%;\n                padding: 4px 8px;\n\n                .inner-experience {\n                    background-color: #6f6f6f;\n                    width: 200px;\n                    border-radius: 8px;\n                    margin: 6px 0;\n\n                    div {\n                        font-size: 12px;\n                        text-align: right;\n                        padding-right: 4px;\n                        background-color: #36c3f9;\n                        border-radius: 8px;\n                        color: #30303f;\n                        ",";\n                    }\n                }                \n            }\n\n            .types {\n                width: 100%;\n\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                padding: 8px;\n                color: #fff;\n            }\n\n\n            button {\n                background-color: transparent;\n                border: none;\n                padding: 5px 8px;\n                margin: 2px;\n                opacity: 0.8;\n                transition: all 0.5s ease;\n                cursor: pointer;\n\n                &:hover {\n                    opacity: 1; \n                }\n\n                img {\n                    width: 32px;\n                }\n            }\n        }\n        \n    }\n    \n\n"]);return U=function(){return n},n}var G=v.c.div(U(),(function(n){var e=n.experience;return Object(v.b)(I(),e/2)})),K={bug:z,dark:C,dragon:N,electric:Z,fairy:_,fighting:E,fire:F,flying:M,ghost:B,grass:L,ground:X,ice:Y,normal:D,poison:J,psychic:R,rock:T,steel:A,water:H},Q=function(n){var e=n.pokemon,t=n.handlePokemonsByType,c=Object(r.useState)({}),o=Object(u.a)(c,2),i=o[0],s=o[1];Object(r.useEffect)((function(){b.get(e.url).then((function(n){var e=n.data,t=e.name,a=e.abilities,r=e.base_experience,c=e.types,o=e.sprites,i={name:t,base_experience:r,abilities:a.map((function(n){return n.ability})),types:c.map((function(n){return n.type})),avatar:o.other.dream_world.front_default,avatar_original:o.other["official-artwork"].front_default};s(i)}))}),[s]);return i.name?Object(a.jsx)(G,{id:"container-".concat(i.name),onMouseEnter:function(){var n=document.querySelector("#card-".concat(i.name)),e=document.querySelector("#pokeball-".concat(i.name)),t=document.querySelector("#pokemon-".concat(i.name)),a=document.querySelector("#main-".concat(i.name));n.style.transition="none",e.style.transform=" translateZ(80px) rotateZ(16deg)",t.style.transform=" translateZ(280px) rotateZ(-4deg)",a.style.transform=" translateZ(68px)"},onMouseMove:function(n){var e=document.querySelector("#container-".concat(i.name)),t=document.querySelector("#card-".concat(i.name)),a=e.getBoundingClientRect(),r=(n.clientX-a.left-130)/10,c=(n.clientY-a.top-180)/10;t.style.transform="rotateY(".concat(r,"deg) rotateX(").concat(c,"deg) ")},onMouseLeave:function(){var n=document.querySelector("#card-".concat(i.name)),e=document.querySelector("#pokeball-".concat(i.name)),t=document.querySelector("#pokemon-".concat(i.name)),a=document.querySelector("#main-".concat(i.name));n.style.transform="rotateY(0deg) rotateX(0deg) ",n.style.transition="all 0.5s ease",e.style.transform=" translateZ(0px) rotateZ(0deg)",t.style.transform=" translateZ(0px) rotateZ(0deg)",a.style.transform=" translateZ(0px)"},experience:i.base_experience,children:Object(a.jsxs)("div",{className:"card",id:"card-".concat(i.name),children:[Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("img",{className:"pokeball-image",id:"pokeball-".concat(i.name),src:q,alt:"pokeball"}),Object(a.jsx)("img",{className:"pokemon-image",id:"pokemon-".concat(i.name),src:i.avatar_original,alt:"pokemon"})]}),Object(a.jsxs)("main",{id:"main-".concat(i.name),children:[Object(a.jsx)("h2",{children:i.name}),Object(a.jsx)("div",{className:"experience",children:Object(a.jsx)("div",{className:"inner-experience",children:Object(a.jsx)("div",{children:i.base_experience})})}),Object(a.jsx)("div",{className:"types",children:i.types.map((function(n){return Object(a.jsx)("button",{onClick:function(){return t(n.url)},children:Object(a.jsx)("img",{className:"pokemon-image",src:K[n.name],alt:n.name})},n.name)}))})]})]})}):null};function V(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 24px;\n    width: 100%;\n    max-width: 1080px;\n    margin: auto;\n    margin-top: 80px;\n\n    main {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n    }\n\n    footer {\n        padding: 26px;\n\n        button {\n            background-color: #256ab0;\n            color: #fff;\n            font-size: 22px;\n            font-weight: 700;\n            border: none;\n            border-radius: 3px;\n            padding: 16px 26px;\n            opacity: 0.4;\n            transition: all 0.5s ease;\n            cursor: pointer;\n\n            &:hover {\n                opacity: 0.8; \n            }\n        }\n    }\n\n"]);return V=function(){return n},n}var W=v.c.div(V()),$=function(){var n=j(),e=n.pokemons,t=n.setPokemons,r=n.nextPage,c=n.setNextPage,o=function(){var n=Object(l.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.get(r);case 2:a=n.sent,t([].concat(Object(p.a)(e),Object(p.a)(a.data.results))),c(a.data.next);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=Object(l.a)(d.a.mark((function n(e){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.get(e);case 2:a=n.sent,t(a.data.pokemon.map((function(n){return n.pokemon})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return e.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsxs)(W,{children:[Object(a.jsx)("main",{children:e&&e.map((function(n){return Object(a.jsx)(Q,{handlePokemonsByType:i,pokemon:n},n.name)}))}),Object(a.jsx)("footer",{children:Object(a.jsx)("button",{onClick:o,children:"Show me more pokemons"})})]}),Object(a.jsx)(P,{})]}):null},nn=t.p+"static/media/background.d1193634.jpg";function en(){var n=Object(h.a)(["\n   \n   * {\n       padding: 0;\n       margin: 0;\n       box-sizing: border-box; \n   }\n\n   body {\n        font-family: Signika, sans-serif;\n        color: #262626;\n        width: 100%;\n        height: 100%;\n\n        background-color: rgba(0, 0, 0, .05);\n        background-image: url(",");\n        background-position: center;\n        background-size:cover;\n        background-repeat: no-repeat;\n    \n        background-attachment: fixed; \n\n        width: 100%;\n   }\n\n"]);return en=function(){return n},n}var tn=Object(v.a)(en(),nn);var an=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(tn,{}),Object(a.jsx)(g,{children:Object(a.jsx)($,{})})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(an,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.88e3b291.chunk.js.map