(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{8036:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/whackAMoleGame",function(){return t(8898)}])},8898:function(e,n,t){"use strict";t.r(n);var r=t(7297),s=t(5893),l=t(7294),i=t(9521);function o(){let e=(0,r.Z)(["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n\n  gap: 1rem;\n  place-items: center;\n\n  background-color: green;\n  border-radius: 1rem;\n  height: 100%;\n"]);return o=function(){return e},e}function a(){let e=(0,r.Z)(["\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  font-size: ",";\n  color: white;\n"]);return a=function(){return e},e}function d(){let e=(0,r.Z)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n"]);return d=function(){return e},e}function m(){let e=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  img {\n    position: absolute;\n  }\n  .hidden {\n    display: none;\n  }\n\n  .hole {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .hole-front {\n    bottom: -3rem;\n    top: 90%;\n    left: 50%;\n    transform: translate(-50%);\n  }\n\n  .dead-mole,\n  .mole,\n  .bomb,\n  .touch-bomb {\n    cursor: pointer;\n    top: 15%;\n    left: 50%;\n    transform: translate(-50%);\n  }\n"]);return m=function(){return e},e}let u=()=>{let[e,n]=(0,l.useState)(0),[t,r]=(0,l.useState)(!1),[i,o]=(0,l.useState)(1e4);Array.from({length:9});let a=()=>{if(t)return;r(()=>!0);let e=setInterval(()=>{i>0&&u(),o(e=>e-1e3)},1e3);setTimeout(()=>{r(()=>!1),o(1e4),n(0),clearInterval(e)},1e4)},d=e=>{n(e=>e+1);let t=e.currentTarget;t.classList.add("hidden");let r=t.nextElementSibling;null==r||r.classList.remove("hidden"),setTimeout(()=>{null==r||r.classList.add("hidden")},500)},m=e=>{n(e=>e-1);let t=e.currentTarget;t.classList.add("hidden");let r=t.nextElementSibling;null==r||r.classList.remove("hidden"),setTimeout(()=>{null==r||r.classList.add("hidden")},500)},u=()=>{let e=document.querySelectorAll(".target"),n=e[Math.floor(Math.random()*e.length)],t=n.querySelector(0===Math.floor(2*Math.random())?".mole":".bomb");null==t||t.classList.remove("hidden"),setTimeout(()=>{null==t||t.classList.add("hidden")},Math.floor(1e3*Math.random())+500)};return(0,s.jsxs)(c,{children:[!t&&(0,s.jsx)(h,{type:"button","aria-label":"시작 버튼",onClick:a,children:"게임 시작"}),(0,s.jsxs)(g,{children:["✅점수 : ",e," ⏱️남은 시간 : ",i/1e3,"초"]}),Array.from({length:9}).map((e,n)=>(0,s.jsxs)(f,{className:"target",children:[(0,s.jsx)("img",{src:"/assets/images/hole.png",alt:"두더지 구멍",width:100,className:"hole"}),(0,s.jsx)("img",{src:"/assets/images/mole.png",alt:"두더지",width:100,height:100,className:"mole hidden",onClick:d}),(0,s.jsx)("img",{src:"/assets/images/dead-mole.png",alt:"죽은 두더지",width:100,height:100,className:"dead-mole hidden"}),(0,s.jsx)("img",{src:"/assets/images/bomb.png",alt:"폭탄",width:100,height:100,className:"bomb hidden",onClick:m}),(0,s.jsx)("img",{src:"/assets/images/touch-bomb.png",alt:"폭탄 터짐",width:100,height:100,className:"touch-bomb hidden"})]},n))]})};n.default=u;let c=i.ZP.div(o()),h=i.ZP.button(a(),e=>{let{theme:n}=e;return n.fontSize.xl}),g=i.ZP.span(d()),f=i.ZP.div(m())}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8036)}),_N_E=e.O()}]);