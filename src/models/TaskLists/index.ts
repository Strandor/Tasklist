import React from "react";
import { Task } from "../Task";

export interface TaskList {
  date: Date;
  taskLists: Task[];
}
