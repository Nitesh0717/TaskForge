const subscriber = require("../config/redis");

const startConsumer = async () => {
  await subscriber.connect();

  console.log("Redis Subscriber Connected");

  await subscriber.subscribe(
    "task-events",
    (message) => {
      console.log(
        "Notification Received:",
        message
      );
    }
  );
};

module.exports = startConsumer;
