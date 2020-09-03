import { Request, Response } from 'express'
import db from '../../data/db'

export default class TodoController {
  async index(req: Request, res: Response) {
    const todos = await db("todolist").select('*');

    if(todos === undefined){
      return res.status(404).send()
    }

    return res.status(200).json(todos);
  }

  async create(req: Request, res: Response) {
    const { title, name, description } = req.body;

    const [id] = await db('todolist').insert({
      "title": title,
      "name": name,
      "description": description
    }).returning('id');

    return res.json({ id });
  }

  async delete(req: Request, res: Response){
    const { id } = req.params;

    const todo = await db("todolist")
      .where("id", id)
      .select("id")
      .first();

    if(todo == undefined){
      return res.status(404).send();
    }

    await db("todolist")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
}