import { FastifyRequest, FastifyReply } from "fastify";

export async function question(request: FastifyRequest, reply: FastifyReply) {
  return "controller question"
}