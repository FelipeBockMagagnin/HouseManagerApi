class TodoController {
  index(request, response) {
    const todolist = [
      {
        name: 'carlos',
        date: '10-03-2020'
      },
      {
        name: 'carlos',
        date: '10-03-2020'
      },
      {
        name: 'carlos',
        date: '10-03-2020'
      }
    ]

    console.log('recebida requisicao: ', request.route)
    return response.json(todolist)
  }
}

export default TodoController