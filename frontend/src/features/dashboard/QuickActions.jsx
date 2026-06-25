const actions = [
"Deploy New Service",
"View Logs",
"Scale Deployment",
"Restart Pod",
];

export default function QuickActions(){

return(

<div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-6">
Quick Actions
</h2>

<div className="space-y-4">

{actions.map(action=>(

<button
key={action}
className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition"
>

{action}

</button>

))}

</div>

</div>

)

}
