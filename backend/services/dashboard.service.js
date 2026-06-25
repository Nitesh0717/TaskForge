import { coreApi, appsApi } from "../config/kubernetes.js";

export async function dashboardOverview() {
  try {
    const [
      podsRes,
      servicesRes,
      namespacesRes,
      nodesRes,
      deploymentsRes,
    ] = await Promise.all([
      coreApi.listPodForAllNamespaces(),
      coreApi.listServiceForAllNamespaces(),
      coreApi.listNamespace(),
      coreApi.listNode(),
      appsApi.listDeploymentForAllNamespaces(),
    ]);

    const pods = podsRes.items ?? podsRes.body?.items ?? [];
    const services = servicesRes.items ?? servicesRes.body?.items ?? [];
    const namespaces = namespacesRes.items ?? namespacesRes.body?.items ?? [];
    const nodes = nodesRes.items ?? nodesRes.body?.items ?? [];
    const deployments =
      deploymentsRes.items ?? deploymentsRes.body?.items ?? [];

    return {
      pods: {
        total: pods.length,
        running: pods.filter(p => p.status?.phase === "Running").length,
        pending: pods.filter(p => p.status?.phase === "Pending").length,
        failed: pods.filter(p => p.status?.phase === "Failed").length,
      },

      deployments: deployments.length,

      services: services.length,

      namespaces: namespaces.length,

      nodes: nodes.length,

      podList: pods.map(p => ({
        name: p.metadata?.name,
        namespace: p.metadata?.namespace,
        status: p.status?.phase,
      })),
    };

  } catch (err) {
    console.error(err);
    throw err;
  }
}
