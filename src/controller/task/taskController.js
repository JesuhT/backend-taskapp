const tasksData = require("../../db/task");
const {Task} = require("../../models");

const getTaskAll = (req, res) => {
  try {
    return res.status(200).send(tasksData);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getTaskOne = (req, res) => {
  try {
    const { id, title } = req.query;

    let task = [];

    if (id) {
      task = tasksData.data.find((task) => task.id === parseInt(id));
    }

    if (title) {
      if (task.length === 0) {
        task = tasksData.data.find((task) => task.title === title);
      } else {
        task = task.find((task) => task.name === title);
      }
    }

    if (!task) {
      return res.status(404).send({ message: {} });
    }
    return res.status(200).send(task);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  getTaskAll,
  getTaskOne,
};
