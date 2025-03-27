import tasksModel from "../models/tasksModel.js";

const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};
const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask);
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await tasksModel.deleteTask(id);
  return res.status(202).json({ message: "Task deleted!" });
};
const updateTask = async (req, res) => {
  const { id } = req.params;
  await tasksModel.updateTask(id, req.body);
  return res.status(202).json({ message: "Task updated!" });
};

export default { getAll, createTask, deleteTask, updateTask };
