import connection from "./connection.js";

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title, content } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query =
    "INSERT INTO tasks(title, content, status, created_at) VALUES (?,?,?,?)";

  const [createTask] = await connection.execute(query, [
    title,
    content,
    "pending",
    dateUTC,
  ]);

  return { insertId: createTask.insertId };
};

const deleteTask = async (id) => {
  const [removedTask] = await connection.execute(
    "DELETE FROM tasks WHERE id = ?",
    [id],
  );
  return removedTask;
};

const updateTask = async (id, task) => {
  const { title, content, status } = task;

  const query =
    "UPDATE tasks SET title = ?, content = ?, status = ? WHERE id = ?";

  const [updatedTask] = await connection.execute(query, [
    title,
    content,
    status,
    id,
  ]);
  return updatedTask;
};

export default { getAll, createTask, deleteTask, updateTask };
