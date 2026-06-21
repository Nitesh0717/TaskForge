require("dotenv").config();

const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

client.collectDefaultMetrics();

const register = client.register;

app.use(cors());

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://auth-service:5000",
    changeOrigin: true,
    pathRewrite: (path) => {
      return "/api/auth" + path;
    }
  })
);

app.use(
  "/api/tasks",
  createProxyMiddleware({
    target: "http://task-service:5001",
    changeOrigin: true,
    pathRewrite: (path) => {
      return "/api/tasks" + path;
    }
  })
);

app.get("/health", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "healthy"
  });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
