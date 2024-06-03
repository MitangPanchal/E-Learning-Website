import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/e-learn-platform");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
