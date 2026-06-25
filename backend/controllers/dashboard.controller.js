import { dashboardOverview } from "../services/dashboard.service.js";

export async function getOverview(req, res) {
  try {
    const data = await dashboardOverview();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Dashboard API Error",
    });
  }
}
