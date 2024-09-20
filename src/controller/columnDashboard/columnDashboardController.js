const {
  createColumn,
  getAllColumns,
  getColumnOne,
} = require("./services/columnDashboard");

const create = async (req, res) => {
  try {
    const { title, position } = req.body;

    const variables = {
      title,
      position,
    };

    const backloag = createColumn(variables);

    return res.status(201).json({
      message: "Column created",
      dashboard: backloag,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, dashboard: {} });
  }
};

const getAll = async (req, res) => {
  try {
    return res.status(200).json({
      message: "All columns",
      dashboard: await getAllColumns(),
    });
  } catch (error) {
    res.status(500).json({ message: error.message, dashboard: [] });
  }
};

module.exports = {
  create,
  getAll,
};
