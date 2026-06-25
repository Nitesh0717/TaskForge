export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-[#111827]/80
        backdrop-blur-xl
        border border-slate-800
        rounded-3xl
        shadow-[0_0_30px_rgba(0,0,0,0.25)]
        hover:border-cyan-500/40
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
