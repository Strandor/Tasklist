import { Task } from "../../models";

export interface TaskListsState {
  loading: boolean;
  taskLists: Task[];
}

export enum TaskListsActions {
  TOGGLE_TASK_COMPLETION = "@@taskLists/TOGGLE_TASK_COMPLETION",
  CREATE_TASK = "@@taskLists/CREATE_TASK",
  FETCH_TASKS = "@@taskLists/FETCH_TASKS",
  UPDATE_TASK = "@@taskLists/UPDATE_TASK",
}

export interface TaskUpdateAction {
  id: string;
  title?: string;
  deadline?: Date;
  description?: string;
}
