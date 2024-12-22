import { FastifyInstance } from "fastify";
import { postLogin } from "../Controllers/LoginController.js";

export async function loginRoutes(fastify: FastifyInstance) {
  fastify.post("/login", postLogin);
}
