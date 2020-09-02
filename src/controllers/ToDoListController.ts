import { Request, Response } from 'express'

export default class TodoController {
  index(req: Request, res: Response) {
    const id: Number = Number.parseInt(req.params.id);

    const todolist = [
      {
        id: 1,
        name: 'carlos',
        date: '10-03-2020'
      },
      {
        id: 2,
        name: 'carlos',
        date: '10-03-2020'
      },
      {
        id: 3,
        name: 'carlos',
        date: '10-03-2020'
      }
    ]

    const item = todolist.find(element => element.id == id);

    if(item === undefined){
      return res.status(204).send()
    }

    return res.status(200).json(item);
  }
}