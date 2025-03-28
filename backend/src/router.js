import express from "express";
import tasksController from "./controllers/tasksController.js";
import tasksMiddleware from "./middlewares/tasksMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => res.send("Main route"));
router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddleware.validateTask, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddleware.validateTask,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask,
);

export default router;
