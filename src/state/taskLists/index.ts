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
    case TaskListsActions.CREATE_TASK:
      const foundTaskListIndex = state.taskLists.findIndex(
        (taskList) => taskList.date.getTime() === action.payload.date.getTime()
      );
      const foundTaskList = state.taskLists[foundTaskListIndex];

      const newTaskList = {
        id: "",
        title: action.payload.title,
        completed: false,
      };

      console.log(state);

      if (foundTaskListIndex >= 0) {
        foundTaskList.taskLists.push(newTaskList);

        return {
          ...state,
          taskLists: state.taskLists.map((taskList, index) => {
            if (index === foundTaskListIndex) return foundTaskList;

            return taskList;
          }),
        };
      } else {
        return {
          ...state,
          taskLists: [
            ...state.taskLists,
            {
              date: action.payload.date,
              taskLists: [newTaskList],
            },
          ],
        };
      }
    default:
      return state;
  }
};

export * from "./actions";
