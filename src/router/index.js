const task = require("./task/task");
const columnDashboard = require("./columnsDashboard/columnDashboard");

const registerRouter = (app) => {
  app.use("/api", task);
  app.use("/api", columnDashboard);
};

module.exports = registerRouter;
