const {
  create,
  getAll,
} = require("../../controller/columnDashboard/columnDashboardController");
const express = require("express");
const api = express.Router();

api.post("/dashboard", create);
api.get("/dashboard", getAll);

module.exports = api;
