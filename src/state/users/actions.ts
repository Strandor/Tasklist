import axios from "axios";
import { Task } from "../../models";
import { UsersActions } from "./types";

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get("/api/users").then((users) => {
      dispatch({
        type: UsersActions.FETCH_USERS,
        payload: users.data.map((task) => {
          return {
            id: task.id,
            name: task.name,
          };
        }),
      });
    });
  };
};
