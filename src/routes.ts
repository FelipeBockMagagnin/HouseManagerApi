import express from 'express'
import TodoController from './controllers/ToDoListController'

const routes = express.Router()
const todoController = new TodoController();

routes.get("/todolist/:id", todoController.index)

export default routes 
