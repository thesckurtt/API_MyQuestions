import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { question } from "../Controllers/PublicController.js";
/**
 * #### The public routes of API
 * @param fastify - FastifyInstance
 */
export default async function publicRoutes(fastify: FastifyInstance) {
  fastify.get("/question", question);
}
