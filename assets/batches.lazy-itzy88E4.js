import{t as i,j as s,c as l}from"./index-x0H1xtD1.js";import{L as a}from"./Loader-RnUXkkHF.js";const r=()=>{const{data:e}=i.batch.list.useQuery();return s.jsxs("div",{children:[s.jsx("h3",{children:"💊 Batches"}),s.jsxs("div",{className:"my-2 italic",children:["Total No. of batches: ",e==null?void 0:e.length]}),e?s.jsx("ul",{className:"list-inside list-disc",children:e.map(t=>s.jsxs("li",{children:[t.title," - ",t.weight,"kg - ",t.purity,"%"]},t.id))}):s.jsx(a,{})]})},n=l("/batches")({component:r});export{n as Route};
