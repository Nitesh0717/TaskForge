export const cpuData = [
  { time: "10:00", cpu: 35 },
  { time: "10:10", cpu: 48 },
  { time: "10:20", cpu: 40 },
  { time: "10:30", cpu: 66 },
  { time: "10:40", cpu: 52 },
  { time: "10:50", cpu: 78 },
  { time: "11:00", cpu: 70 },
];

export const podData = [
  {
    name: "auth-service",
    status: "Running",
    replicas: "1/1",
  },
  {
    name: "task-service",
    status: "Running",
    replicas: "1/1",
  },
  {
    name: "notification-service",
    status: "Running",
    replicas: "1/1",
  },
  {
    name: "api-gateway",
    status: "Running",
    replicas: "1/1",
  },
];

export const deploymentActivity = [
  "Build Successful",
  "Docker Image Created",
  "Image Pushed",
  "Kubernetes Deployment",
  "Health Check Passed",
];
