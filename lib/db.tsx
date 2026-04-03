import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined");
    }

    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("DB ERROR:", error);
    throw error;
  }
};