import{r as a,j as s}from"./index-BX_YitLm.js";const h=r=>{const[n,t]=a.useState(0),[u,l]=a.useState("0.0"),o=({target:{value:e}})=>{l(e)},[d,i]=a.useState("0.0"),m=({target:{value:e}})=>{i(e)},[c,p]=a.useState([{name:"reset",value:"0.0"},{name:"0.1 SOL",value:"0.1"},{name:"0.5 SOL",value:"0.5"},{name:"1 SOL",value:"1"}]);return a.useEffect(()=>{},[]),s.jsx("div",{className:"swapfixedcoin",children:s.jsxs("div",{className:"swapfixedcoin_box",children:[s.jsxs("div",{className:"swap_tab",children:[s.jsx("div",{className:n===0?"btn btn_active":"btn",onClick:()=>t(0),children:"Buy"}),s.jsx("div",{className:n===1?"btn btn_active":"btn",onClick:()=>t(1),children:"Sell"})]}),s.jsxs("div",{className:"explain",children:[s.jsx("div",{children:"switch to Spookio"}),s.jsx("div",{children:"Set max slippage"})]}),n===0&&s.jsxs("div",{className:"input_box",children:[s.jsxs("div",{className:"input_info",children:[s.jsx("input",{type:"number",className:"input",value:u,onChange:o}),s.jsx("span",{className:"symbol",children:"SOL"}),s.jsx("img",{src:"https://picsum.photos/50/50",alt:"",className:"icon"})]}),s.jsx("div",{className:"input_default",children:c.map(e=>s.jsx("div",{onClick:()=>l(e.value),children:e.name},e.name))})]}),n===1&&s.jsxs("div",{className:"input_box",children:[s.jsxs("div",{className:"input_info",children:[s.jsx("input",{type:"number",className:"input",value:d,onChange:m}),s.jsx("span",{className:"symbol",children:"WLD"}),s.jsx("img",{src:"https://picsum.photos/50/50",alt:"",className:"icon"})]}),s.jsx("div",{className:"input_default",children:c.map(e=>s.jsx("div",{onClick:()=>i(e.value),children:e.name},e.name))})]}),s.jsx("div",{className:"swap_btn",children:" place trade "})]})})};export{h as default};
