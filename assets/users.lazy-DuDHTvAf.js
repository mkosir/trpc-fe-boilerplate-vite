import{t as a,j as e,c as d}from"./index-x0H1xtD1.js";import{L as o}from"./Loader-RnUXkkHF.js";const u=({user:s})=>{const t=a.useContext(),l=async c=>{console.info("Deleted user: ",c),await t.user.list.invalidate()},{mutate:n,isLoading:i}=a.user.destroy.useMutation({onSuccess:l}),r=()=>{n({id:s.id})};return e.jsxs("div",{className:"mb-4 mr-4 flex w-72 justify-between rounded-md bg-blueSky-50/5 p-3 shadow shadow-blueSky-500/60",children:[e.jsxs("div",{children:[e.jsx("div",{children:s.name}),e.jsx("div",{className:"italic text-gray-400",children:s.username}),e.jsx("div",{className:"capitalize",children:s.role}),e.jsx("button",{className:"rounded bg-blueSky-400 p-0.5 px-2 text-xs text-white hover:bg-blueSky-500 active:bg-blueSky-600",disabled:i,onClick:r,children:i?e.jsx("span",{className:"animate-pulse",children:"Deleting..."}):"Delete"})]}),e.jsx("img",{src:s.imageUrl??"no-user.jpg",alt:s.username,className:"ml-4 h-24 rounded"})]})},m=()=>{const{data:s}=a.user.list.useQuery();return e.jsxs("div",{children:[e.jsx("h3",{children:"👤 Users"}),e.jsx("div",{className:"mt-4 flex flex-wrap",children:s?s.map(t=>e.jsx(u,{user:t},t.id)):e.jsx(o,{})})]})},j=d("/users")({component:m});export{j as Route};
