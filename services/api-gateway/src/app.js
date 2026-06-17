require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path) => {
      return "/api/auth" + path;
    }
  })
);

app.use(
  "/api/tasks",
  createProxyMiddleware({
    target: process.env.TASK_SERVICE_URL,
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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
