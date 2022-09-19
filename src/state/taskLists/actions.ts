import { TaskListsActions } from "./types";

export const toggleCompletionTask = (id: string) => {
  return {
    type: TaskListsActions.TOGGLE_TASK_COMPLETION,
    payload: {
      id: id,
    },
  };
};
