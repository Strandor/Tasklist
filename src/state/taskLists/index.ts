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
        taskLists: state.taskLists.map((task) => {
          if (task.id === action.payload.id)
            return {
              ...task,
              completed: action.payload.completed,
            };

          return task;
        }),
      };
    case TaskListsActions.UPDATE_TASK:
      return {
        ...state,
        taskLists: state.taskLists.map((task) => {
          if (task.id === action.payload.id)
            return {
              ...task,
              ...action.payload,
            };

          return task;
        }),
      };

    case TaskListsActions.FETCH_TASKS:
      return {
        ...state,
        taskLists: action.payload,
      };
    case TaskListsActions.CREATE_TASK:
      const newTaskList = {
        id: "",
        title: action.payload.title,
        completed: false,
        deadline: action.payload.deadline,
      };

      return {
        ...state,
        taskLists: [...state.taskLists, newTaskList],
      };

    default:
      return state;
  }
};

export * from "./actions";
