import axios from "axios";
import { Task } from "../../models";
import { TaskListsActions } from "./types";

export const toggleCompletionTask = (id: string, completed: boolean) => {
  axios.patch(`/api/taskLists/${id}`, {
    completed: completed,
  });
  return {
    type: TaskListsActions.TOGGLE_TASK_COMPLETION,
    payload: {
      id: id,
    },
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    axios.get("/api/taskLists").then((tasks) => {
      dispatch({
        type: TaskListsActions.FETCH_TASKS,
        payload: tasks.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            deadline: new Date(task.deadline),
            completed: task.completed,
          };
        }),
      });
    });
  };
};

export const createTask = (title: string, date: Date) => {
  axios.post("/api/taskLists", {
    title: title,
    date: date,
  });
  return {
    type: TaskListsActions.CREATE_TASK,
    payload: {
      title: title,
      date: date,
    },
  };
};
