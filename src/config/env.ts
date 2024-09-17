import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  MONGO_URL: z.string(),
});

const getEnv = envSchema.safeParse(process.env);

if (!getEnv.success) {
  const errorMessage = "load environment failed";
  console.error(errorMessage, getEnv.error.format());
  throw new Error(errorMessage);
}

export const env = getEnv.data;
