import axios from "axios";
import { Task } from "../../models";
import { TaskListsActions, TaskUpdateAction } from "./types";

export const updateTask = (updateTask: TaskUpdateAction) => {
  axios.patch(`/api/taskLists/${updateTask.id}`, updateTask);
  return {
    type: TaskListsActions.UPDATE_TASK,
    payload: updateTask,
  };
};

export const toggleAssignee = (id: string, assigneeId: string) => {
  return (dispatch, getState) => {
    const state = getState();
    const taskList = state.taskLists.taskLists.find((a) => a.id == id);

    const containsAssignee =
      taskList.assignees.findIndex((a) => a == assigneeId) !== -1;

    if (containsAssignee) {
      dispatch(
        updateTask({
          id: id,
          assignees: taskList.assignees.filter((a) => a !== assigneeId),
        })
      );
    } else {
      dispatch(
        updateTask({
          id: id,
          assignees: [...taskList.assignees, assigneeId],
        })
      );
    }
  };
};

export const toggleCompletionTask = (id: string, completed: boolean) => {
  axios.patch(`/api/taskLists/${id}`, {
    completed: completed,
  });
  return {
    type: TaskListsActions.TOGGLE_TASK_COMPLETION,
    payload: {
      id: id,
      completed: completed,
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
            description: task.description,
            assignees: task.assignees,
          };
        }),
      });
    });
  };
};

export const createTask = (title: string, deadline: Date) => {
  axios.post("/api/taskLists", {
    title: title,
    date: deadline,
  });
  return {
    type: TaskListsActions.CREATE_TASK,
    payload: {
      title: title,
      deadline: deadline,
    },
  };
};
