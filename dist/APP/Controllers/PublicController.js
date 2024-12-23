import { prisma } from "../Config/db_config.js";
import { DONT_HAVE_QUESTIONS_IN_DB } from "../Messages/ApiErrors.js";
export async function question(request, reply) {
    const count = await prisma.questions.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuestion = (await prisma.questions.findMany({
        skip: randomIndex,
        take: 1,
    }))[0];
    if (randomQuestion != null) {
        const dataReturn = {
            id: randomQuestion.id,
            title: randomQuestion.title,
            description: randomQuestion.description,
            alternatives: {
                a: randomQuestion.alternativeA,
                b: randomQuestion.alternativeB,
                c: randomQuestion.alternativeC,
                d: randomQuestion.alternativeD,
            },
            correct_alternative: randomQuestion.correctAlternative,
        };
        return dataReturn;
    }
    else {
        return DONT_HAVE_QUESTIONS_IN_DB;
    }
}
