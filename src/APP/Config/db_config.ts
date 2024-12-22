import dotenv from "dotenv";
dotenv.config();

import { neon } from "@neondatabase/serverless";
import { dot } from "node:test/reporters";

const sql = neon(String(process.env.DATABASE_URL));
