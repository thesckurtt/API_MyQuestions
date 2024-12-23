import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../Config/db_config.js";

interface QuestionView {
  id: string;
}

export async function viewQuestion(
  request: FastifyRequest<{Params: QuestionView }>,
  reply: FastifyReply
) {
  const questionId = request.params.id ?? "";

  const question = await prisma.questions.findFirst({
    where: {
      id: questionId,
    },
  });

  if(question === null){
    return reply.code(404).send();
  }
  return question;
}

export async function addQuestion(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return "addQuestion";
}

export async function editQuestion(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return "editQuestion";
}

export async function deleteQuestion(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return "deleteQuestion";
}
