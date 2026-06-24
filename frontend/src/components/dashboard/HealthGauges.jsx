export default function HealthGauges() {
  const metrics = [
    { name: "CPU", value: 68 },
    { name: "Memory", value: 42 },
    { name: "Network", value: 81 },
    { name: "Storage", value: 55 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((item) => (
        <div
          key={item.name}
          className="bg-[#111827]/80 rounded-2xl p-5 border border-slate-800"
        >
          <h3 className="text-slate-400">
            {item.name}
          </h3>

          <div className="mt-3">
            <div className="w-full bg-slate-800 h-3 rounded-full">
              <div
                className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-3 rounded-full"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>

            <p className="mt-2 font-bold text-xl">
              {item.value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
