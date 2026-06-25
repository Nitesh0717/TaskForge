import * as k8s from "@kubernetes/client-node";
import dotenv from "dotenv";

dotenv.config();

const kc = new k8s.KubeConfig();
kc.loadFromFile(process.env.KUBECONFIG);

export const coreApi = kc.makeApiClient(k8s.CoreV1Api);
export const appsApi = kc.makeApiClient(k8s.AppsV1Api);
