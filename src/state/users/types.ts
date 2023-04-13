import { User } from "../../models";

export interface UsersState {
  loading: boolean;
  users: User[];
}

export enum UsersActions {
  FETCH_USERS = "@@users/FETCH_USERS",
}
