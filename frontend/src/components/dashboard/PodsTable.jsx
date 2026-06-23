const pods = [
  ["auth-service", "Running"],
  ["task-service", "Running"],
  ["notification-service", "Running"],
  ["api-gateway", "Running"],
];

export default function PodsTable() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">
      <h2 className="text-xl font-semibold mb-4">
        Kubernetes Pods
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-slate-400">
            <th>Pod</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {pods.map(([name, status]) => (
            <tr key={name}>
              <td className="py-3">{name}</td>

              <td className="text-green-400">
                {status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
