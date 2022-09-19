import React, { useState } from "react";
import { CreateTaskItemProps } from "./types";

export const CreateTaskItem = ({ onSubmit }: CreateTaskItemProps) => {
  const [value, setValue] = useState("");

  const submit = () => {
    if (onSubmit) onSubmit(value);
    setValue("");
  };

  return (
    <div className="flex gap-4 h-12 items-center">
      <div className="h-5 w-5"></div>
      <input
        type="text"
        placeholder="Enter a task"
        className="w-full h-full"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            submit();
          }
        }}
        onBlur={submit}
      />
    </div>
  );
};
