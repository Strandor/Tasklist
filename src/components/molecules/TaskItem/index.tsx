import React from "react";
import { CheckButton } from "../../atoms";
import { TaskItemProps } from "./types";

export const TaskItem = ({
  isChecked,
  title,
  onCheck,
  onClick,
}: TaskItemProps) => {
  return (
    <div className="flex gap-4 h-12 items-center">
      <div className="h-5 w-5">
        <CheckButton isChecked={isChecked} onChange={onCheck} />
      </div>
      <div
        className={`cursor-pointer h-full flex border-secondary border-b w-full items-center ${
          isChecked ? "line-through" : ""
        }`}
        onClick={() => (onClick ? onClick() : {})}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};
