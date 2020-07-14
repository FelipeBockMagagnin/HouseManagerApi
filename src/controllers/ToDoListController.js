module.exports = {
  index (request, response) {
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
      },
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

    return response.json(todolist)
  }
}
