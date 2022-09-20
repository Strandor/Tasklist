import { useEffect, useReducer, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "../components";
import { TaskItem } from "../components/molecules/TaskItem";
import { TaskList } from "../components/organisms";
import { AppStore } from "../state";
import {
  createTask,
  fetchTasks,
  toggleCompletionTask,
} from "../state/taskLists";

const HomePage = () => {
  const taskLists = useSelector((store: AppStore) => store.taskLists.taskLists);
  const dispatch = useDispatch();

  const [noDays, setNoDays] = useState(40);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const createTaskLists = () => {
    const reactNodes = [];
    for (let i = 0; i < noDays; i++) {
      const date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      date.setDate(date.getDate() + i);

      const taskListIndex = taskLists.findIndex(
        (value) => value.date.getTime() === date.getTime()
      );

      reactNodes.push(
        <TaskList
          date={date}
          onCreateTask={(title) => dispatch(createTask(title, date))}
        >
          {taskListIndex >= 0 &&
            taskLists[taskListIndex].taskLists.map((taskItem) => (
              <TaskItem
                isChecked={taskItem.completed}
                title={taskItem.title}
                onCheck={(completed) =>
                  dispatch(toggleCompletionTask(taskItem.id, completed))
                }
              />
            ))}
        </TaskList>
      );
    }

    return reactNodes;
  };

  return (
    <InfiniteScroll
      dataLength={noDays}
      next={() => setNoDays(noDays + 10)}
      hasMore={true}
      loader={<h1>Loading</h1>}
    >
      {createTaskLists()}
    </InfiniteScroll>
  );
};

export default HomePage;
