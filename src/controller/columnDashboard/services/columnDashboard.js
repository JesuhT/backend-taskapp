const { ColumnDashboard } = require("../../../models");

const createColumn = async (props) => {
  try {
    return await ColumnDashboard.create({ ...props });
  } catch (error) {
    console.log(error);
  }
};

const getAllColumns = async () => {
  try {
return await ColumnDashboard.find({});
  } catch (error) {
    console.log(error);
  }
};

const getColumnOne = async (props) => {
  try {
    return res.status(200).json({
      message: "Column",
      dashboard: await ColumnDashboard.findOne({ ...props }),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, dashboard: {} });
  }
};

module.exports = {
  createColumn,
  getAllColumns,
  getColumnOne,
};
