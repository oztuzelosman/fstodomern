const todo_models = require("../models/todo_models");

const getAll = async (req, res) => {
  try {
    const getAllTodos = await todo_models.find({});
    res.status(200).json({ success: true, data: getAllTodos });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createNew = async (req, res) => {
  try {
    const newTodo = await todo_models.create(req.body);
    res.status(201).json({ success: true, data: newTodo });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTaskWid = async (req, res) => {
  try {
    const getTodoWid = await todo_models.findOne({ _id: req.params.id });
    if (!getTodoWid) {
      return res.status(404).json({ msg: "no task with this id" });
    }
    res.status(200).json({ success: true, data: getTodoWid });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAll,
  createNew,
  getTaskWid,
};
