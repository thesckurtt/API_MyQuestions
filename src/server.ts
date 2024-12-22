import { fastify, FastifyRequest, FastifyReply } from "fastify";
import dotenv from "dotenv";
import { APLICATION_LISTENING_PORT, APP_DEBUG } from "./APP/Config/config.js";
import { API_PREFIX_ROUTE } from "./APP/Routes/prefix_routes.js";
import { publicRoutes } from "./APP/Routes/public.js";
import jwtPlugin from "@fastify/jwt";
import { loginRoutes } from "./APP/Routes/logins.js";

dotenv.config();

export const server = fastify({
  logger: false,
});

server.register(jwtPlugin, {
  secret: process.env.JWT_SECRET ?? "SXOX9bkUH04$vovRQFN0Hx02",
});

/**
 * Auth Decorate
 * Implemented authentication with jwt
 */
server.decorate(
  "authenticate",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.code(401).send({ error: "Unauthorized" });
    }
  }
);

server.register(publicRoutes, { prefix: API_PREFIX_ROUTE });
server.register(loginRoutes, { prefix: API_PREFIX_ROUTE });

server.listen(
  {
    host: "0.0.0.0",
    port: APLICATION_LISTENING_PORT,
  },
  (error, address) => {
    if (error) {
      console.log(error);
    } else {
      console.log("\n Application in URL: " + address + "\n");
    }
  }
);
