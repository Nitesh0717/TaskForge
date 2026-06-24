import { podData } from "../../data/dashboardData";

export default function PodStatusTable() {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6">
      <h2 className="text-xl font-semibold mb-4">
        Kubernetes Pods
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-slate-400">
            <th className="text-left py-2">Pod</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Replicas</th>
          </tr>
        </thead>

        <tbody>
          {podData.map((pod) => (
            <tr
              key={pod.name}
              className="border-t border-slate-800"
            >
              <td className="py-3">{pod.name}</td>

              <td className="py-3 text-green-400">
                {pod.status}
              </td>

              <td className="py-3">
                {pod.replicas}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
