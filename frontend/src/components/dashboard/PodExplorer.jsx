const pods = [
  {
    name: "auth-service",
    status: "Running",
    cpu: "35m",
    memory: "128Mi",
    restarts: 0,
  },
  {
    name: "task-service",
    status: "Running",
    cpu: "42m",
    memory: "145Mi",
    restarts: 0,
  },
  {
    name: "notification-service",
    status: "Running",
    cpu: "20m",
    memory: "95Mi",
    restarts: 1,
  },
];

export default function PodExplorer() {
  return (
    <div className="bg-[#111827]/80 rounded-3xl border border-slate-800 p-6">
      <h2 className="text-xl font-bold mb-6">
        Pod Explorer
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-slate-400 border-b border-slate-800">
            <th className="text-left py-3">Pod</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">CPU</th>
            <th className="text-left py-3">Memory</th>
            <th className="text-left py-3">Restarts</th>
          </tr>
        </thead>

        <tbody>
          {pods.map((pod) => (
            <tr
              key={pod.name}
              className="border-b border-slate-900 hover:bg-slate-900"
            >
              <td className="py-4">{pod.name}</td>
              <td className="py-4 text-green-400">
                {pod.status}
              </td>
              <td className="py-4">{pod.cpu}</td>
              <td className="py-4">{pod.memory}</td>
              <td className="py-4">{pod.restarts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
