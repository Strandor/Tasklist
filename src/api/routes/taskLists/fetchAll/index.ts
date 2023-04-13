import { Request, Response } from "express";
import * as Models from "../../../models";

export default async (req: Request, res: Response) => {
  const taskLists = await Models.TaskLists.find().populate("assignees");

  res.send(
    taskLists.map((taskList) => ({
      id: taskList.id,
      title: taskList.title,
      deadline: taskList.deadline,
      completed: taskList.completed,
      description: taskList.description,
      assignees: taskList.assignees.map((a) => a),
    }))
  );
};
