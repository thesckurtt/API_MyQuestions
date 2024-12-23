import { prisma } from "../Config/db_config.js";
export async function getAllQuestion(request, reply) {
    const questions = await prisma.questions.findMany();
    return questions;
}
export async function viewQuestion(request, reply) {
    const questionId = request.params.id ?? "";
    const question = await prisma.questions.findFirst({
        where: {
            id: questionId,
        },
    });
    if (question === null) {
        return reply.code(404).send();
    }
    return question;
}
export async function addQuestion(request, reply) {
    if (!request.body) {
        return reply.code(400).send({ error: "Request body is required" });
    }
    const { title, description, alternativeA, alternativeB, alternativeC, alternativeD, correctAlternative, } = request.body || {};
    console.log(title, description, alternativeA, alternativeB, alternativeC, alternativeD, correctAlternative);
    const dataQuestion = {
        title,
        description,
        alternativeA,
        alternativeB,
        alternativeC,
        alternativeD,
        correctAlternative,
    };
    const result = await prisma.questions.create({ data: dataQuestion });
    console.log(result);
    return result;
}
export async function editQuestion(request, reply) {
    if (!request.params.id) {
        return reply.code(400).send({ error: "missing id parameter" });
    }
    if (!request.body) {
        return reply.code(400).send({ error: "Request body is required" });
    }
    const { title, description, alternativeA, alternativeB, alternativeC, alternativeD, correctAlternative, } = request.body || {};
    const questionId = request.params.id ?? null;
    const question = await prisma.questions.findFirst({
        where: {
            id: questionId,
        },
    });
    const result = await prisma.questions.update({
        where: { id: questionId },
        data: {
            title,
            description,
            alternativeA,
            alternativeB,
            alternativeC,
            alternativeD,
            correctAlternative,
        },
    });
    return result;
}
export async function deleteQuestion(request, reply) {
    if (!request.params.id) {
        return reply.code(400).send({ error: "missing id parameter" });
    }
    const questionId = request.params.id;
    const question = await prisma.questions.findFirst({
        where: {
            id: questionId,
        },
    });
    if (!question) {
        return reply.code(404).send();
    }
    const result = await prisma.questions.delete({
        where: {
            id: questionId,
        },
    });
    return result;
}
