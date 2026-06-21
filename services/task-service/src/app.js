require("dotenv").config();

const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

client.collectDefaultMetrics();

const register = client.register;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "task-service",
    status: "healthy"
  });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Task Service running on port ${PORT}`
  );
});
