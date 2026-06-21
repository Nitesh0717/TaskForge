require("dotenv").config();

const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const startConsumer = require(
  "./services/notificationConsumer"
);

const app = express();

client.collectDefaultMetrics();

const register = client.register;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "notification-service",
    status: "healthy"
  });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, async () => {
  console.log(
    `Notification Service running on port ${PORT}`
  );

  await startConsumer();
});
