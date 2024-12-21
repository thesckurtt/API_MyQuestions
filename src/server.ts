import Fastify from 'Fastify';
import dotenv from 'dotenv';
dotenv.config();

/**
 * #### The listening application port
 * Neon use by default 1000
 */
const APLICATION_PORT : number | string = Number(process.env.PORT) ?? 1000;
const APP_DEBUG : boolean = Boolean(process.env.APP_DEBUG) ?? false;

const fastify = Fastify({
  logger: APP_DEBUG
});

fastify.get("/", (request, reply)=>{
  return "hello";
});

// console.log(APLICATION_PORT);

fastify.listen({
  host: "0.0.0.0",
  port: APLICATION_PORT,
});