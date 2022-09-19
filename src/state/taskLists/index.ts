import { Reducer } from "redux";
import { TaskListsActions, TaskListsState } from "./types";
import { initialState } from "./utils";

export const taskListsReducer: Reducer<TaskListsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TaskListsActions.TOGGLE_TASK_COMPLETION:
      return {
        ...state,
        taskLists: state.taskLists.map((taskItems) => {
          const index = taskItems.taskLists.findIndex(
            (value) => value.id === action.payload.id
          );

          if (index >= 0) {
            taskItems.taskLists[index].completed =
              !taskItems.taskLists[index].completed;
          }

          return taskItems;
        }),
      };
    default:
      return state;
  }
};

export * from "./actions";
