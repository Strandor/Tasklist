import React, { useState } from "react";
import { UpdateModalProps } from "./types";

export const UpdateModal = ({
  onClose,
  onUpdateTitle,
  onUpdateDeadline,
  onUpdateDescription,
  description,
  deadline,
  title,
}: UpdateModalProps) => {
  const [inputTitle, setInputTitle] = useState(title);

  return (
    <div
      className="fixed flex items-center justify-center w-screen h-screen bg-black/50 z-10 backdrop-blur"
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          if (onClose) onClose();
        }
      }}
    >
      <div className="bg-white p-4 rounded flex flex-col gap-4">
        <input
          type="text"
          value={inputTitle}
          placeholder="Title"
          className="bold text-xl"
          onChange={(e) => setInputTitle(e.target.value)}
          onBlur={() => {
            if (onUpdateTitle) onUpdateTitle(inputTitle);
          }}
        />
        <div>
          <div className="text-xs font-bold">DESCRIPTION</div>
          <input
            type="text"
            defaultValue={description}
            onBlur={(e) => {
              if (onUpdateDescription) onUpdateDescription(e.target.value);
            }}
            placeholder="Description"
          />
        </div>
        <div>
          <div className="text-xs font-bold">DEADLINE</div>
          <input
            type="date"
            placeholder="Deadline"
            defaultValue={deadline.toISOString().substring(0, 10)}
            onChange={(e) => {
              if (onUpdateDeadline) onUpdateDeadline(e.target.valueAsDate);
            }}
          />
        </div>
      </div>
    </div>
  );
};
