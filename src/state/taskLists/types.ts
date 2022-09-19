import { TaskList } from "../../models";

export interface TaskListsState {
  loading: boolean;
  taskLists: TaskList[];
}

export enum TaskListsActions {
  TOGGLE_TASK_COMPLETION = "@@taskLists/TOGGLE_TASK_COMPLETION",
  CREATE_TASK = "@@taskLists/CREATE_TASK",
}
