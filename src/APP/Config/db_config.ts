import dotenv from "dotenv";
dotenv.config();
import { neon } from "@neondatabase/serverless";

export const sql = neon(String(process.env.DATABASE_URL));
