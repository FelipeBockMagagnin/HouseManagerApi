const express = require('express')

const TodoController = require('./controllers/ToDoListController')
const routes = express.Router()

routes.get('/todolist', TodoController.index)

module.exports = routes
