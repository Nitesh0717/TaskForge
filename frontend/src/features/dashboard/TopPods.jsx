const pods = [
  ["task-service",85],
  ["auth-service",67],
  ["api-gateway",45],
  ["notification",32],
  ["mongodb",18],
];

export default function TopPods(){

return(

<div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-6">
Top Pods by CPU
</h2>

<div className="space-y-6">

{pods.map(([name,cpu])=>(

<div key={name}>

<div className="flex justify-between">

<span>{name}</span>

<span>{cpu}%</span>

</div>

<div className="w-full h-2 bg-slate-800 rounded-full mt-2">

<div
className="h-2 rounded-full bg-cyan-400"
style={{width:`${cpu}%`}}
/>

</div>

</div>

))}

</div>

</div>

)

}
