import { TaskItem } from "../../molecules/TaskItem";
import { TaskListProps } from "./types";

export const TaskList = ({ date, children }: TaskListProps) => {
  return (
    <div>
      <h4>
        {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
      </h4>
      <div>{children}</div>
    </div>
  );
};
