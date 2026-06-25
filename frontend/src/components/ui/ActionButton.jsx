export default function ActionButton({
  children,
  variant = "primary",
}) {
  return (
    <button
      className={
        variant === "primary"
          ? `
          px-5 py-3
          rounded-xl
          bg-cyan-500
          text-black
          font-semibold
          hover:scale-105
          transition-all
        `
          : `
          px-5 py-3
          rounded-xl
          border border-slate-700
          hover:border-cyan-500
          transition-all
        `
      }
    >
      {children}
    </button>
  );
}
