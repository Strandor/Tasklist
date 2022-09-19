import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "../components";
import { TaskItem } from "../components/molecules/TaskItem";
import { TaskList } from "../components/organisms";
import { AppStore } from "../state";
import { toggleCompletionTask } from "../state/taskLists";

const HomePage = () => {
  const taskLists = useSelector((store: AppStore) => store.taskLists.taskLists);
  const dispatch = useDispatch();

  return (
    <div className="m-4 flex flex-col gap-10">
      {taskLists.map((taskList) => (
        <TaskList date={taskList.date}>
          {taskList.taskLists.map((taskItem) => (
            <TaskItem
              isChecked={taskItem.completed}
              title={taskItem.title}
              onCheck={() => dispatch(toggleCompletionTask(taskItem.id))}
            />
          ))}
        </TaskList>
      ))}
    </div>
  );
};

export default HomePage;
