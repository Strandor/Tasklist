import { CreateTaskItem } from "../../atoms/CreateTaskItem";
import { TaskItem } from "../../molecules/TaskItem";
import { TaskListProps } from "./types";

export const TaskList = ({ date, children, onCreateTask }: TaskListProps) => {
  return (
    <div>
      <h4>{date.toISOString().substring(0, 10)}</h4>
      <div>{children}</div>
      <CreateTaskItem onSubmit={onCreateTask} />
    </div>
  );
};
