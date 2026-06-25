import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const coreApi = kc.makeApiClient(k8s.CoreV1Api);

console.log("Kubernetes client initialized successfully.");
console.log(
  Object.getOwnPropertyNames(Object.getPrototypeOf(coreApi))
);
