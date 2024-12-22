import { fastify } from "fastify";
import dotenv from "dotenv";
import { APLICATION_LISTENING_PORT, APP_DEBUG } from "./APP/Config/config.js";
import { API_PREFIX_ROUTE } from "./APP/Routes/prefix_routes.js"
import publicRoutes from "./APP/Routes/public.js";

dotenv.config();

export const server = fastify({
  logger: APP_DEBUG,
});

server.register(publicRoutes, { prefix: API_PREFIX_ROUTE });

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
