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
    <div className="flex gap-4 h-12">
      <CheckButton isChecked={isChecked} onChange={onCheck} />
      <div
        className="cursor-pointer flex border-secondary border-t border-b w-full items-center"
        onClick={() => (onClick ? onClick() : {})}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};
