import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    if (!uri) {
      console.error("❌ MONGO_URL not provided in .env file");
      process.exit(1);
    }

    await mongoose.connect(uri);

    console.log(`✅ MongoDB Connected Successfully`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit app if DB fails
  }
};
