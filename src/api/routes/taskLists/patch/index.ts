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

  const { completed, title, deadline, description, assignees } = req.body;
  if (completed) {
    await taskList.update({
      completed: completed,
    });
  }

  if (title) {
    await taskList.update({
      title: title,
    });
  }

  if (deadline) {
    await taskList.update({
      deadline: new Date(deadline),
    });
  }

  if (description) {
    await taskList.update({
      description: description,
    });
  }

  if (assignees) {
    await taskList.update({
      assignees: assignees,
    });
  }

  res.send({
    id: taskList.id,
    title: taskList.title,
    deadline: taskList.deadline,
    completed: taskList.completed,
    description: taskList.description,
  });
};
