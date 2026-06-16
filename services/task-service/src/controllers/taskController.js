const Task = require("../models/Task");
const publisher = require("../config/redis");

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.userId
    });

    await publisher.publish(
      "task-events",
      JSON.stringify({
        event: "TASK_CREATED",
        taskId: task._id.toString(),
        title: task.title
      })
    );

    res.status(201).json(task);
  } catch (error) {
    console.error("CREATE TASK ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.userId
    });

    res.json(tasks);
  } catch (error) {
    console.error("GET TASKS ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    Object.assign(task, req.body);

    await task.save();

    await publisher.publish(
      "task-events",
      JSON.stringify({
        event: "TASK_UPDATED",
        taskId: task._id.toString(),
        title: task.title
      })
    );

    res.json(task);
  } catch (error) {
    console.error("UPDATE TASK ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    await publisher.publish(
      "task-events",
      JSON.stringify({
        event: "TASK_DELETED",
        taskId: task._id.toString(),
        title: task.title
      })
    );

    await task.deleteOne();

    res.json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    console.error("DELETE TASK ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};
