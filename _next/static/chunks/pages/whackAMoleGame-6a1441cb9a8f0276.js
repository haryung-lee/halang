(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{8036:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/whackAMoleGame",function(){return t(6023)}])},6023:function(e,n,t){"use strict";t.r(n),t.d(n,{Button:function(){return y},default:function(){return x}});var r=t(7297),i=t(5893),o=t(7294),l=t(9521);function s(){let e=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  img {\n    position: absolute;\n  }\n  .hidden {\n    display: none;\n  }\n\n  .hole {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .hole-front {\n    bottom: -3rem;\n    top: 90%;\n    left: 50%;\n    transform: translate(-50%);\n  }\n\n  .dead-mole,\n  .mole,\n  .bomb,\n  .touch-bomb {\n    cursor: pointer;\n    top: 15%;\n    left: 50%;\n    transform: translate(-50%);\n  }\n"]);return s=function(){return e},e}let a=e=>{let{onClick:n,index:t}=e;return(0,i.jsxs)(u,{className:"target",children:[(0,i.jsx)("img",{src:"/assets/images/hole.png",alt:"두더지 구멍",width:90,className:"hole"}),(0,i.jsx)("img",{src:"/assets/images/mole.png",alt:"두더지",width:90,height:90,className:"mole hidden",onClick:e=>n(e,t,1)}),(0,i.jsx)("img",{src:"/assets/images/dead-mole.png",alt:"죽은 두더지",width:90,height:90,className:"dead-mole hidden"}),(0,i.jsx)("img",{src:"/assets/images/bomb.png",alt:"폭탄",width:90,height:90,className:"bomb hidden",onClick:e=>n(e,t,-1)}),(0,i.jsx)("img",{src:"/assets/images/touch-bomb.png",alt:"폭탄 터짐",width:90,height:90,className:"touch-bomb hidden"})]},t)},u=l.ZP.div(s());var d=t(9209);function c(){let e=(0,r.Z)(["\n  width: 40rem;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin: 0 auto;\n"]);return c=function(){return e},e}function m(){let e=(0,r.Z)(["\n  height: 4rem;\n  background-color: ",";\n  border-radius: 1rem 1rem 0 0;\n"]);return m=function(){return e},e}function h(){let e=(0,r.Z)(["\n  height: 1.5rem;\n  width: 90%;\n  margin: 1.25rem auto;\n  background-color: ",";\n  border-radius: 1rem;\n"]);return h=function(){return e},e}function f(){let e=(0,r.Z)(["\n  height: 100%;\n  background-color: orange;\n  border-radius: 1rem;\n  width: 100%;\n"]);return f=function(){return e},e}function g(){let e=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 1rem;\n  place-items: center;\n  background-color: #4fa54f;\n  height: 35rem;\n"]);return g=function(){return e},e}function b(){let e=(0,r.Z)(["\n  background-color: ",";\n  font-size: ",";\n  color: white;\n  padding: 1rem 0;\n  border-radius: 0 0 1rem 1rem;\n  height: 4rem;\n  box-sizing: border-box;\n  ","\n"]);return b=function(){return e},e}function p(){let e=(0,r.Z)(["\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  ","\n  font-size: ",";\n  color: white;\n"]);return p=function(){return e},e}let w=()=>{let[e,n]=(0,o.useState)(0),[t,r]=(0,o.useState)(!1),[l,s]=(0,o.useState)(!1),u=Array.from({length:9}),d=(0,o.useRef)(null),c=()=>{if(t)return;let e=3e3;r(!0),s(!1),n(0);let i=setInterval(()=>{h()},950),o=()=>{e<=0?clearInterval(l):(e--,d.current&&(d.current.style.width="".concat(e/3e4*1e3,"%")))},l=setInterval(o,10);setTimeout(()=>{clearInterval(i),r(()=>!1),s(!0)},3e4)},m=(e,t,r)=>{n(e=>e+r);let i=e.currentTarget;i.classList.add("hidden");let o=i.nextElementSibling;null==o||o.classList.remove("hidden"),clearTimeout(u[t]),setTimeout(()=>{null==o||o.classList.add("hidden")},500)},h=()=>{let e=document.querySelectorAll(".target");u.forEach((n,t)=>{if(n)return;let r=Math.random();if(r<.2){let i=e[t].querySelector(".mole");u[t]=setTimeout(()=>{null==i||i.classList.add("hidden"),u[t]=0},1e3),null==i||i.classList.remove("hidden")}else if(r<.3){let o=e[t].querySelector(".bomb");u[t]=setTimeout(()=>{null==o||o.classList.add("hidden"),u[t]=0},1e3),null==o||o.classList.remove("hidden")}})};return(0,i.jsxs)(v,{children:[(0,i.jsx)(Z,{children:(0,i.jsx)(j,{children:(0,i.jsx)(k,{ref:d})})}),(0,i.jsxs)(_,{children:[Array.from({length:9}).map((e,n)=>(0,i.jsx)(a,{onClick:m,index:n})),l&&(0,i.jsxs)(N,{children:[e,"점 이에요\uD83D\uDC4F"]})]}),t?(0,i.jsx)(y,{as:"div",children:e}):(0,i.jsx)(y,{type:"button","aria-label":"시작 버튼",onClick:c,children:"게임 시작"})]})};var x=w;let v=l.ZP.div(c()),Z=l.ZP.div(m(),e=>{let{theme:n}=e;return n.color.primaryBlue}),j=l.ZP.div(h(),e=>{let{theme:n}=e;return n.color.bgColor}),k=l.ZP.input(f()),_=l.ZP.div(g()),y=l.ZP.button(b(),e=>{let{theme:n}=e;return n.color.primaryBlue},e=>{let{theme:n}=e;return n.fontSize.md},d._),N=l.ZP.div(p(),d._,e=>{let{theme:n}=e;return n.fontSize.xl})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8036)}),_N_E=e.O()}]);