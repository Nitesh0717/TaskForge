export default function PageHeader({
  title,
  subtitle,
}) {
  return (
    <div
      className="
      rounded-3xl
      p-8
      bg-gradient-to-r
      from-cyan-600/20
      via-purple-600/20
      to-indigo-600/20
      border border-slate-800
      "
    >
      <h1 className="text-5xl font-black">
        {title}
      </h1>

      <p className="text-slate-400 mt-3">
        {subtitle}
      </p>
    </div>
  );
}
