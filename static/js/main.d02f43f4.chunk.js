(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{53:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),o=t.n(a),c=t(24),i=t.n(c),s=t(6),l=t.n(s),d=t(13),u=t(8),p=t(5),x=t(29),m=t(25),f=t.n(m).a.create({baseURL:"https://pokeapi.co/api/v2/pokemon/"}),b=Object(a.createContext)({}),g=function(n){var e=n.children,t=Object(a.useState)([]),o=Object(p.a)(t,2),c=o[0],i=o[1],s=Object(a.useState)([]),l=Object(p.a)(s,2),d=l[0],u=l[1],x=Object(a.useState)(""),m=Object(p.a)(x,2),g=m[0],j=m[1];Object(a.useEffect)((function(){f.get("?offset=0&limit=20").then((function(n){u(n.data.count),i(n.data.results),j(n.data.next)}))}),[]);var h=Object(a.useCallback)((function(n){i([]),i(n)}),[i,c]);return Object(r.jsx)(b.Provider,{value:{pokemons:c,setPokemons:h,count:d,setCountPokemons:u,nextPage:g,setNextPage:j},children:e})},j=function(){var n=Object(a.useContext)(b);if(!n)throw new Error("usePokemons must be used within a pokemons provider");return n},h=t(3),y=t(4);function v(){var n=Object(h.a)(["\n\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    background-color: rgba(0, 0, 0, 0.90);\n    margin-top: -80px;\n\n    padding: 26px 56px;\n    width: 100%;\n    max-width: 1080;\n    z-index: 999;\n\n    h1 {\n        color: #F2D94E;\n        font-weight: 500;\n    }\n\n    .search {\n\n        width: 90%;\n        max-width: 400px;\n        background-color: #fff;\n        border-radius: 16px;\n        padding: 4px 16px;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        input {\n            border: none;\n            font-size: 18px;\n            width: 300px;\n            text-transform: uppercase;\n            background-color: transparent;\n        }\n\n        button {\n            background-color: transparent;\n            border: none;\n            opacity: 0.7;\n            transition: all 0.5s ease;\n            cursor: pointer;\n\n            &:hover {\n                opacity: 1; \n            }\n\n            svg {\n                font-size: 24px;\n                color: #256ab0;\n            }\n        }\n\n    }\n\n    \n\n"]);return v=function(){return n},n}var O=y.c.div(v()),k=function(){var n=j(),e=n.count,t=n.setPokemons,o=Object(a.useState)(""),c=Object(p.a)(o,2),i=c[0],s=c[1],d=function(){var n=Object(u.a)(l.a.mark((function n(){var r,a,o,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length<=2?20:e,n.next=3,f.get("?limit=".concat(r));case 3:a=n.sent,o=a.data.results,c=[],t([]),o.forEach((function(n){n.name.includes(i.toLowerCase())&&c.push(n)})),t(c),s("");case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(O,{children:[Object(r.jsx)("h1",{children:"Pok\xe9dex"}),Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{type:"text",placeholder:"Search by name",onChange:function(n){return s(n.target.value)},value:i}),Object(r.jsx)("button",{onClick:d,children:Object(r.jsx)(x.a,{})})]})]})};function w(){var n=Object(h.a)(["\n\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    background-color: rgba(0, 0, 0, 0.95);\n\n    padding: 16px 26px;\n    width: 100%;\n    max-width: 1080;\n\n    h1 {\n        color: #36c3f9;\n        font-size: 16px;\n        font-weight: 300;\n    } \n\n    a {\n        text-decoration: none;\n        color: #36c3f9; \n    }  \n\n"]);return w=function(){return n},n}var S=y.c.div(w()),P=function(){return Object(r.jsx)(S,{children:Object(r.jsxs)("h1",{children:["Created by ",Object(r.jsx)("a",{href:"http://fabioalbiero.com",children:"F\xe1bo Henriqe Albiero"})," @2020"]})})},q=t.p+"static/media/pokeball-open2.dab0aae8.png";function z(){var n=Object(h.a)([" width: ","px "]);return z=function(){return n},n}function C(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    perspective: 1580px;\n\n    .card {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;   \n        transform-style: preserve-3d;     \n\n        margin: 24px;\n        padding: 26px;\n\n        width: 280px;\n        height: 360px;\n        box-shadow: 0 8px 16px rgba(0,0,0, .4), 0 0 26px rgba(0,0,0, .15);\n        background-color: #fff;\n        border: 1px solid rgba(60, 68, 76, 0.95);\n        border-radius: 5px; \n\n        background-color: rgba(40, 48, 56, 0.90);\n\n        .image-container {\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            \n            .pokeball-image {\n                height: 130px;\n                z-index: 1;\n                transition: all 0.5s ease;\n            }\n\n            .pokemon-image {\n                position: absolute;\n                height: 190px;\n                z-index: 2;\n                transition: all 0.5s ease;\n            }\n        }\n\n\n        main {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n\n            width: 100%;\n            transition: all 0.5s ease;\n\n            h2 {\n                color: #F2D94E;\n                font-size: 24px;\n                font-weight: 500;\n                margin: 16px 0;\n                text-transform: uppercase;\n            }\n\n            .experience {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: #fff;\n                width: 100%;\n                padding: 4px 8px;\n\n                .inner-experience {\n                    background-color: #6f6f6f;\n                    width: 200px;\n                    border-radius: 8px;\n                    margin: 6px 0;\n\n                    div {\n                        font-size: 12px;\n                        text-align: right;\n                        padding-right: 4px;\n                        background-color: #36c3f9;\n                        border-radius: 8px;\n                        color: #30303f;\n                        ",";\n                    }\n                }                \n            }\n\n            .types {\n                width: 100%;\n\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                padding: 8px;\n                color: #fff;\n            }\n\n\n            button {\n                background-color: transparent;\n                border: none;\n                padding: 5px 8px;\n                margin: 2px;\n                opacity: 0.8;\n                transition: all 0.5s ease;\n                cursor: pointer;\n\n                &:hover {\n                    opacity: 1; \n                }\n\n                img {\n                    width: 32px;\n                }\n            }\n        }\n        \n    }\n    \n\n"]);return C=function(){return n},n}var N=y.c.div(C(),(function(n){var e=n.experience;return Object(y.b)(z(),e/2)})),Z=function(n){var e=n.pokemon,t=n.handlePokemonsByType,o=Object(a.useState)({}),c=Object(p.a)(o,2),i=c[0],s=c[1];Object(a.useEffect)((function(){f.get(e.url).then((function(n){var e=n.data,t=e.name,r=e.abilities,a=e.base_experience,o=e.types,c=e.sprites,i={name:t,base_experience:a,abilities:r.map((function(n){return n.ability})),types:o.map((function(n){return n.type})),avatar:c.other.dream_world.front_default,avatar_original:c.other["official-artwork"].front_default};s(i)}))}),[s]);return i.name?Object(r.jsx)(N,{id:"container-".concat(i.name),onMouseEnter:function(){var n=document.querySelector("#card-".concat(i.name)),e=document.querySelector("#pokeball-".concat(i.name)),t=document.querySelector("#pokemon-".concat(i.name)),r=document.querySelector("#main-".concat(i.name));n.style.transition="none",e.style.transform=" translateZ(80px) rotateZ(16deg)",t.style.transform=" translateZ(280px) rotateZ(-4deg)",r.style.transform=" translateZ(68px)"},onMouseMove:function(n){var e=document.querySelector("#container-".concat(i.name)),t=document.querySelector("#card-".concat(i.name)),r=e.getBoundingClientRect(),a=(n.clientX-r.left-130)/10,o=(n.clientY-r.top-180)/10;t.style.transform="rotateY(".concat(a,"deg) rotateX(").concat(o,"deg) ")},onMouseLeave:function(){var n=document.querySelector("#card-".concat(i.name)),e=document.querySelector("#pokeball-".concat(i.name)),t=document.querySelector("#pokemon-".concat(i.name)),r=document.querySelector("#main-".concat(i.name));n.style.transform="rotateY(0deg) rotateX(0deg) ",n.style.transition="all 0.5s ease",e.style.transform=" translateZ(0px) rotateZ(0deg)",t.style.transform=" translateZ(0px) rotateZ(0deg)",r.style.transform=" translateZ(0px)"},experience:i.base_experience,children:Object(r.jsxs)("div",{className:"card",id:"card-".concat(i.name),children:[Object(r.jsxs)("div",{className:"image-container",children:[Object(r.jsx)("img",{className:"pokeball-image",id:"pokeball-".concat(i.name),src:q,alt:"pokeball"}),Object(r.jsx)("img",{className:"pokemon-image",id:"pokemon-".concat(i.name),src:i.avatar_original,alt:"pokemon"})]}),Object(r.jsxs)("main",{id:"main-".concat(i.name),children:[Object(r.jsx)("h2",{children:i.name}),Object(r.jsx)("div",{className:"experience",children:Object(r.jsx)("div",{className:"inner-experience",children:Object(r.jsx)("div",{children:i.base_experience})})}),Object(r.jsx)("div",{className:"types",children:i.types.map((function(n){return Object(r.jsx)("button",{onClick:function(){return t(n.url)},children:Object(r.jsx)("img",{className:"pokemon-image",src:"public/images/".concat(n.name,".svg"),alt:n.name})},n.name)}))})]})]})}):null};function _(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 24px;\n    width: 100%;\n    max-width: 1080px;\n    margin: auto;\n    margin-top: 80px;\n\n    main {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n    }\n\n    footer {\n        padding: 26px;\n\n        button {\n            background-color: #256ab0;\n            color: #fff;\n            font-size: 22px;\n            font-weight: 700;\n            border: none;\n            border-radius: 3px;\n            padding: 16px 26px;\n            opacity: 0.4;\n            transition: all 0.5s ease;\n            cursor: pointer;\n\n            &:hover {\n                opacity: 0.8; \n            }\n        }\n    }\n\n"]);return _=function(){return n},n}var E=y.c.div(_()),F=function(){var n=j(),e=n.pokemons,t=n.setPokemons,a=n.nextPage,o=n.setNextPage,c=function(){var n=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get(a);case 2:r=n.sent,t([].concat(Object(d.a)(e),Object(d.a)(r.data.results))),o(r.data.next);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=Object(u.a)(l.a.mark((function n(e){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get(e);case 2:r=n.sent,t(r.data.pokemon.map((function(n){return n.pokemon})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return e.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsxs)(E,{children:[Object(r.jsx)("main",{children:e&&e.map((function(n){return Object(r.jsx)(Z,{handlePokemonsByType:i,pokemon:n},n.name)}))}),Object(r.jsx)("footer",{children:Object(r.jsx)("button",{onClick:c,children:"Show me more pokemons"})})]}),Object(r.jsx)(P,{})]}):null},M=t.p+"static/media/background.d1193634.jpg";function B(){var n=Object(h.a)(["\n   \n   * {\n       padding: 0;\n       margin: 0;\n       box-sizing: border-box; \n   }\n\n   body {\n        font-family: Signika, sans-serif;\n        color: #262626;\n        width: 100%;\n        height: 100%;\n\n        background-color: rgba(0, 0, 0, .05);\n        background-image: url(",");\n        background-position: center;\n        background-size:cover;\n        background-repeat: no-repeat;\n    \n        background-attachment: fixed; \n\n        width: 100%;\n   }\n\n"]);return B=function(){return n},n}var L=Object(y.a)(B(),M);var X=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{}),Object(r.jsx)(g,{children:Object(r.jsx)(F,{})})]})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(X,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d02f43f4.chunk.js.map