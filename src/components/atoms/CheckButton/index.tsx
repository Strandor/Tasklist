import React from "react";
import { CheckButtonProps } from "./types";

export const CheckButton = ({ isChecked, onChange }: CheckButtonProps) => {
  return (
    <div
      className={`relative border-2 aspect-square cursor-pointer ${
        isChecked ? "border-success" : "border-secondary"
      } ${
        isChecked ? "hover:border-secondary" : "hover:border-success"
      } hover:opacity-30 rounded-full`}
      onClick={() => (onChange ? onChange() : {})}
    >
      {isChecked && (
        <img
          src="/checkmark.svg"
          className="absolute top-0 bottom-0 right-0 left-0 h-full w-full p-4"
        />
      )}
    </div>
  );
};
