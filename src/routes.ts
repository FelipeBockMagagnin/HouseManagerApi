import express from 'express';
import TodoController from './controllers/ToDoListController';

const routes = express.Router();
const todoController = new TodoController();

routes.get("/todolist", todoController.index);
routes.post("/todolist", todoController.create);
routes.delete("/todolist/:id", todoController.delete);

export default routes;
