import { fastify } from "fastify";
import dotenv from "dotenv";
import { APLICATION_LISTENING_PORT } from "./APP/Config/config.js";
import { API_PREFIX_ROUTE, DASHBOARD_API_ROUTE } from "./APP/Routes/prefix_routes.js";
import { publicRoutes } from "./APP/Routes/public.js";
import jwtPlugin from "@fastify/jwt";
import { loginRoutes } from "./APP/Routes/logins.js";
import { dashboardRoutes } from "./APP/Routes/dashboard.js";
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
server.decorate("authenticate", async (request, reply) => {
    try {
        await request.jwtVerify();
    }
    catch (err) {
        reply.code(401).send({ error: "Unauthorized" });
    }
});
server.register(publicRoutes, { prefix: API_PREFIX_ROUTE });
server.register(loginRoutes, { prefix: API_PREFIX_ROUTE });
server.register(dashboardRoutes, {
    preHandler: [server.authenticate], // Uso seguro do authenticate
    prefix: DASHBOARD_API_ROUTE,
});
server.get("/protected", { preHandler: [server.authenticate] }, async (request, reply) => {
    reply.send({ message: "This is a protected route" });
});
server.listen({
    host: "0.0.0.0",
    port: APLICATION_LISTENING_PORT,
}, (error, address) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("\n Application in URL: " + address + "\n");
    }
});
