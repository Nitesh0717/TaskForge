export default function DashboardLayout({
  header,
  kpis,
  overview,
  resource,
  topPods,
  deployments,
  logs,
  pipeline,
  alerts,
  system,
  actions,
}) {
  return (
    <div className="p-6 space-y-6 bg-[#0B1120] min-h-screen">

      {header}

      {kpis}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-4">
          {overview}
        </div>

        <div className="col-span-5">
          {resource}
        </div>

        <div className="col-span-3">
          {topPods}
        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-4">
          {deployments}
        </div>

        <div className="col-span-5">
          {logs}
        </div>

        <div className="col-span-3">
          {pipeline}
        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-4">
          {alerts}
        </div>

        <div className="col-span-4">
          {system}
        </div>

        <div className="col-span-4">
          {actions}
        </div>

      </div>

    </div>
  );
}
