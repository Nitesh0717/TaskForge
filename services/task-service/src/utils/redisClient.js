const { createClient } = require("redis");

const publisher = createClient({
  url: "redis://redis:6379"
});

publisher.on("error", (err) => {
  console.error("Redis Error:", err);
});

(async () => {
  await publisher.connect();
  console.log("Redis Publisher Connected");
})();

module.exports = publisher;
