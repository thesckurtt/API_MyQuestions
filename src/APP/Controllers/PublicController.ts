import { prisma } from "../Config/db_config.js";
import { FastifyRequest, FastifyReply } from "fastify";

export async function question(request: FastifyRequest, reply: FastifyReply) {
  // const json = {
  //   id: "3e1c7b69-a5c3-46d9-9f1b-9a8d58d4db23",
  //   title: "What is the capital of France?",
  //   description: "Choose the correct alternative for the capital city of France.",
  //   alternatives: {
  //     a: "Berlin",
  //     b: "Madrid",
  //     c: "Paris",
  //     d: "Rome"
  //   },
  //   correct_alternative: "c"
  // }
  // const count = await prisma.questions.count();
  // const count = await prisma.questions.count();

  // return count;

  // return json;

  const count = await prisma.questions.count();

  const randomIndex = Math.floor(Math.random() * count);

  const randomQuestion = await prisma.questions.findMany({
    skip: randomIndex,
    take: 1,
  });

  return randomQuestion[0];
}
