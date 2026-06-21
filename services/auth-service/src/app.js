require("dotenv").config();

const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

client.collectDefaultMetrics();

const register = client.register;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
