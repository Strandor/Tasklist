import { TaskListsState } from "./types";

export const initialState: TaskListsState = {
  loading: false,
  taskLists: [
    {
      date: new Date(),
      taskLists: [
        {
          id: "id1",
          title: "Hello",
          completed: false,
        },
      ],
    },
  ],
};
