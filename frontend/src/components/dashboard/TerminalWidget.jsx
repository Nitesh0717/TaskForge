export default function TerminalWidget() {
  const logs = [
    "$ kubectl get pods",
    "auth-service      Running",
    "task-service      Running",
    "notification      Running",
    "",
    "$ kubectl get svc",
    "api-gateway       ClusterIP",
    "",
    "$ deployment successful",
  ];

  return (
    <div
      className="
      bg-black
      rounded-3xl
      border
      border-slate-800
      overflow-hidden
      "
    >
      <div
        className="
        px-5
        py-3
        bg-slate-900
        border-b
        border-slate-800
        flex
        items-center
        gap-2
        "
      >
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />

        <span className="ml-3 text-slate-400">
          cluster-terminal
        </span>
      </div>

      <div className="p-5 font-mono text-green-400 space-y-2 h-[320px]">
        {logs.map((log, index) => (
          <div key={index}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
