import express from 'express'
import TodoController from './controllers/ToDoListController'
const routes = express.Router()

routes.get('/todolist', TodoController.index)

export default routes 
