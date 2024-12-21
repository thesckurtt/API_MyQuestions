import { fastify } from "fastify";
import dotenv from 'dotenv';
import {APLICATION_LISTENING_PORT, APP_DEBUG} from "./APP/Config/config.js";

dotenv.config()


export const server = fastify({
  logger: APP_DEBUG
});

server.get("/", (request, reply)=>{
  return "hello";
});


console.log();

server.listen({
  host: "0.0.0.0",
  port: APLICATION_LISTENING_PORT
});