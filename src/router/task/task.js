const {
  getTaskAll,
  getTaskOne,
} = require("../../controller/task/taskController");
const express = require("express");
const api = express.Router();

api.get("/tasks", getTaskAll);
api.get("/task", getTaskOne);

module.exports = api;
