import {
  Server,
  CheckCircle,
  Rocket,
  GitBranch,
} from "lucide-react";

import StatCardPro from "../ui/StatCardPro";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <StatCardPro
        icon={<Server size={30} />}
        title="Running Pods"
        value="12"
        subtitle="2 added today"
      />

      <StatCardPro
        icon={<CheckCircle size={30} />}
        title="Healthy Services"
        value="5"
        subtitle="100% healthy"
      />

      <StatCardPro
        icon={<Rocket size={30} />}
        title="Deployments"
        value="8"
        subtitle="3 this week"
      />

      <StatCardPro
        icon={<GitBranch size={30} />}
        title="Pipeline Success"
        value="100%"
        subtitle="No failures"
      />

    </div>
  );
}
