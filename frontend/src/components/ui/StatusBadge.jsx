export default function StatusBadge({
  status = "Healthy",
}) {
  const colors = {
    Healthy:
      "bg-green-500/10 text-green-400 border-green-500/20",

    Running:
      "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

    Warning:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

    Critical:
      "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span
      className={`
        px-3 py-1
        rounded-full
        border
        text-sm
        font-medium
        ${colors[status]}
      `}
    >
      {status}
    </span>
  );
}
