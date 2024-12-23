import { question } from "../Controllers/PublicController.js";
/**
 * #### The public routes of API
 * @param fastify - FastifyInstance
 */
export async function publicRoutes(fastify) {
    fastify.get("/question", question);
}
