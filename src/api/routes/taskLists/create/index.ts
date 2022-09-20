import { Request, Response } from "express";
import * as Models from "../../../models";
import { v4 } from "uuid";

export default async (req: Request, res: Response) => {
  try {
    const { title, date } = req.body;

    const parsedDate = new Date(date);

    const id = v4();
    const taskList = await Models.TaskLists.create({
      id,
      title: title,
      deadline: parsedDate,
      completed: false,
    });

    res.send(taskList);
  } catch (error) {
    res.status(500).send({
      message: "Error while creating task",
    });

    console.log(error);
  }
};
