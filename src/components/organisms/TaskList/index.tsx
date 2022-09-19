import { CreateTaskItem } from "../../atoms/CreateTaskItem";
import { TaskItem } from "../../molecules/TaskItem";
import { TaskListProps } from "./types";

export const TaskList = ({ date, children, onCreateTask }: TaskListProps) => {
  return (
    <div>
      <h4>
        {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
      </h4>
      <div>{children}</div>
      <CreateTaskItem onSubmit={onCreateTask} />
    </div>
  );
};
