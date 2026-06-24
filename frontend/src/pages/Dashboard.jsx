import HeroSection from "../components/dashboard/HeroSection";
import StatsCards from "../components/cards/StatsCards";

import ClusterTopology from "../components/dashboard/ClusterTopology";
import DeploymentTimelinePro from "../components/dashboard/DeploymentTimelinePro";

import HealthGauges from "../components/dashboard/HealthGauges";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import AlertsPanel from "../components/dashboard/AlertsPanel";

import ResourceUsageChart from "../components/charts/ResourceUsageChart";
import PodExplorer from "../components/dashboard/PodExplorer";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">

      <HeroSection />

      <StatsCards />

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          <ClusterTopology />
        </div>

        <div className="col-span-4">
          <HealthGauges />
        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          <DeploymentTimelinePro />
        </div>

        <div className="col-span-4">
          <ActivityFeed />
        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          <ResourceUsageChart />
        </div>

        <div className="col-span-4">
          <AlertsPanel />
        </div>

      </div>

      <PodExplorer />

    </div>
  );
}
