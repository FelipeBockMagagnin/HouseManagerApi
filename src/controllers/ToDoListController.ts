import { Request, Response } from 'express'
import db from '../../data/db'

export default class TodoController {
  async index(req: Request, res: Response) {
    const id: Number = Number.parseInt(req.params.id);
    const todos = await db("todolist");
    const item = todos.find(element => element.id == id);

    if(item === undefined){
      return res.status(204).send()
    }

    return res.status(200).json(item);
  }
}