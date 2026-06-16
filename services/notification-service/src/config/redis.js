const { createClient } = require("redis");

const subscriber = createClient({
  url: process.env.REDIS_URL
});

subscriber.on("error", (err) => {
  console.error("Redis Error:", err);
});

module.exports = subscriber;
