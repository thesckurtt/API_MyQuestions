import { FastifyInstance, FastifyRequest, FastifyReply} from "fastify";


export async function dashboardRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", fastify.authenticate);
  fastify.get("/", () => {
    return "hello dashboard / ";
  })
}