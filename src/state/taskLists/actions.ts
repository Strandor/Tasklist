import { TaskListsActions } from "./types";

export const toggleCompletionTask = (id: string) => {
  return {
    type: TaskListsActions.TOGGLE_TASK_COMPLETION,
    payload: {
      id: id,
    },
  };
};

export const createTask = (title: string, date: Date) => {
  return {
    type: TaskListsActions.CREATE_TASK,
    payload: {
      title: title,
      date: date,
    },
  };
};
