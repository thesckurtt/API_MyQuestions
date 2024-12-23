/**
 * #### The listening application port
 * Neon use by default 1000
 */
import dotenv from "dotenv";
dotenv.config();
export const APLICATION_LISTENING_PORT = Number(process.env.PORT) ?? 1000;
export const APP_DEBUG = Boolean(process.env.APP_DEBUG) ?? false;
