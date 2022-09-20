import { Request, Response } from "express";
import * as Models from "../../../models";

export default async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({
      message: "Missing id",
    });
    return;
  }
  const taskList = await Models.TaskLists.findOne({ id: id });

  const { completed } = req.body;
  await taskList.update({
    completed: completed,
  });

  res.send({
    id: taskList.id,
    title: taskList.title,
    deadline: taskList.deadline,
    completed: taskList.completed,
  });
};
