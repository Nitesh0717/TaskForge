import DashboardLayout from "../features/dashboard/DashboardLayout";

import DashboardHeader from "../features/dashboard/DashboardHeader";
import KPICards from "../features/dashboard/KPICards";
import InfrastructureMap from "../features/dashboard/InfrastructureMap";
import ResourceCharts from "../features/dashboard/ResourceCharts";
import TopPods from "../features/dashboard/TopPods";
import RecentDeployments from "../features/dashboard/RecentDeployments";
import LiveLogs from "../features/dashboard/LiveLogs";
import Pipelines from "../features/dashboard/Pipelines";
import Alerts from "../features/dashboard/Alerts";
import SystemStatus from "../features/dashboard/SystemStatus";
import QuickActions from "../features/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <DashboardLayout
      header={<DashboardHeader />}
      kpis={<KPICards />}
      overview={<InfrastructureMap />}
      resource={<ResourceCharts />}
      topPods={<TopPods />}
      deployments={<RecentDeployments />}
      logs={<LiveLogs />}
      pipeline={<Pipelines />}
      alerts={<Alerts />}
      system={<SystemStatus />}
      actions={<QuickActions />}
    />
  );
}
