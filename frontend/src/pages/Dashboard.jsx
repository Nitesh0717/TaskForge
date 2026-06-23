import HeroSection from "../components/dashboard/HeroSection";
import StatsCards from "../components/cards/StatsCards";
import ResourceChart from "../components/charts/ResourceChart";
import PodsTable from "../components/dashboard/PodsTable";

export default function Dashboard() {
  return (
    <div className="p-8">

      <HeroSection />

      <StatsCards />

      <div className="grid grid-cols-2 gap-6 mt-8">
        <ResourceChart />
        <PodsTable />
      </div>

    </div>
  );
}
