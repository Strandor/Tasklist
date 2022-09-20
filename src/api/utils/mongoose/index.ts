import mongoose from "mongoose";

export const connectMongoose = async () => {
  mongoose.connect(
    "mongodb+srv://steinar:steinar1@cluster0.uvju2v3.mongodb.net/?retryWrites=true&w=majority"
  );
};
