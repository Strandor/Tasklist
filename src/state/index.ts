import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { taskListsReducer } from "./taskLists";
import { usersReducer } from "./users";

// initial states here
export const rootReducer = combineReducers({
  taskLists: taskListsReducer,
  users: usersReducer,
});

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export type AppStore = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper(makeStore);
