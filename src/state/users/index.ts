import { Reducer } from "redux";
import { UsersActions, UsersState } from "./types";
import { initialState } from "./utils";

export const usersReducer: Reducer<UsersState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UsersActions.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export * from "./actions";
