import mongoose from "mongoose";
import { env } from "../config/env";
import { Logger } from "../config/logger"; // Supondo que você tenha um logger configurado

export async function createConnection() {
  try {
    await mongoose.connect(env.MONGO_URL);
    Logger.info("Database connected successfully");
  } catch (err) {
    Logger.error("Error connecting to the database", err);
    throw err; // Re-throw the error to be caught by the caller
  }
}
