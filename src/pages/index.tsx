import { useEffect, useReducer, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "../components";
import { UpdateModal } from "../components/atoms";
import { TaskItem } from "../components/molecules/TaskItem";
import { TaskList } from "../components/organisms";
import { Task } from "../models";
import { AppStore } from "../state";
import {
  createTask,
  fetchTasks,
  toggleCompletionTask,
  updateTask,
} from "../state/taskLists";

const HomePage = () => {
  const taskLists = useSelector((store: AppStore) => store.taskLists.taskLists);
  const dispatch = useDispatch();

  const [noDays, setNoDays] = useState(40);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

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

      const tasks = taskLists.filter(
        (task) => date.getTime() == task.deadline.getTime()
      );

      reactNodes.push(
        <TaskList
          date={date}
          onCreateTask={(title) => dispatch(createTask(title, date))}
        >
          {tasks.map((taskItem) => (
            <TaskItem
              isChecked={taskItem.completed}
              title={taskItem.title}
              onClick={() => setSelectedTask(taskItem)}
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
    <>
      {selectedTask ? (
        <UpdateModal
          title={selectedTask.title}
          description={selectedTask.description}
          deadline={selectedTask.deadline}
          onUpdateTitle={(title) =>
            dispatch(
              updateTask({
                id: selectedTask.id,
                title: title,
              })
            )
          }
          onUpdateDescription={(description) => {
            dispatch(
              updateTask({
                id: selectedTask.id,
                description: description,
              })
            );
          }}
          onUpdateDeadline={(deadline) => {
            dispatch(
              updateTask({
                id: selectedTask.id,
                deadline: deadline,
              })
            );
          }}
          onClose={() => setSelectedTask(undefined)}
        />
      ) : undefined}
      <InfiniteScroll
        dataLength={noDays}
        next={() => setNoDays(noDays + 10)}
        hasMore={true}
        loader={<h1>Loading</h1>}
      >
        {createTaskLists()}
      </InfiniteScroll>
    </>
  );
};

export default HomePage;
