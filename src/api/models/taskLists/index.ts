import mongoose from "mongoose";
const { Schema } = mongoose;

const taskListsSchema = new Schema({
  id: String,
  title: String,
  description: String,
  deadline: Date,
  completed: Boolean,
  assignees: [
    {
      type: String,
    },
  ],
});

export const TaskLists = mongoose.model("taskLists", taskListsSchema);
