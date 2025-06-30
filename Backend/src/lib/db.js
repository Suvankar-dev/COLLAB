import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MOONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    const conn = await mongoose.connect(process.env.MOONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
