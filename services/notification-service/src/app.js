require("dotenv").config();

const express = require("express");
const cors = require("cors");

const startConsumer = require(
  "./services/notificationConsumer"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "notification-service",
    status: "healthy"
  });
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, async () => {
  console.log(
    `Notification Service running on port ${PORT}`
  );

  await startConsumer();
});
