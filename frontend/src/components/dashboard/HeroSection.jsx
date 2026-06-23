import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-3xl
      p-8
      bg-gradient-to-r
      from-indigo-600
      via-purple-600
      to-cyan-600
      shadow-2xl
      mb-8
    "
    >
      <h1 className="text-5xl font-bold">
        TaskForge Platform
      </h1>

      <p className="mt-4 text-lg text-white/90">
        Cloud Native DevOps Platform with Kubernetes,
        Monitoring, CI/CD and Observability.
      </p>

      <div className="mt-6 flex gap-4">
        <div className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur">
          Kubernetes Active
        </div>

        <div className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur">
          Prometheus Connected
        </div>

        <div className="bg-white/10 px-5 py-3 rounded-xl backdrop-blur">
          Grafana Healthy
        </div>
      </div>
    </motion.div>
  );
}
