import { PrismaClient } from "@prisma/client";
import { LoremGenerator } from "../../Dev/Utils/LoremGenerator.js";
import dotenv from "dotenv";
dotenv.config();
/**
 * ### Questions
 * function for seeding data in the database -- Questions Table
 * @param turns - defines how many records will be inserted in the database
 */
export async function Questions(turns) {
    const prisma = new PrismaClient();
    if (typeof turns === "number" && turns >= 1) {
        console.time();
        for (let i = 1; i <= turns; i++) {
            try {
                const questionData = {
                    title: LoremGenerator.LoremPhrase(5, "The ", "?"),
                    description: LoremGenerator.LoremPhrase(10),
                    alternativeA: LoremGenerator.LoremPhrase(1),
                    alternativeB: LoremGenerator.LoremPhrase(1),
                    alternativeC: LoremGenerator.LoremPhrase(1),
                    alternativeD: LoremGenerator.LoremPhrase(1),
                    correctAlternative: "c",
                };
                const result = await prisma.questions.create({ data: questionData });
                if (Boolean(process.env.APP_DEBUG)) {
                    console.log(result);
                }
            }
            catch (error) {
                if (Boolean(process.env.APP_DEBUG)) {
                    console.log(error);
                }
                else {
                    console.error("Error: Not seeded.");
                }
            }
            finally {
                await prisma.$disconnect();
            }
        }
        console.timeEnd();
    }
    else {
        try {
            const questionData = {
                title: LoremGenerator.LoremPhrase(5, "The ", "?"),
                description: LoremGenerator.LoremPhrase(10),
                alternativeA: LoremGenerator.LoremPhrase(1),
                alternativeB: LoremGenerator.LoremPhrase(1),
                alternativeC: LoremGenerator.LoremPhrase(1),
                alternativeD: LoremGenerator.LoremPhrase(1),
                correctAlternative: "c",
            };
            const result = await prisma.questions.create({ data: questionData });
            if (Boolean(process.env.APP_DEBUG)) {
                console.log(result);
            }
        }
        catch (error) {
            if (Boolean(process.env.APP_DEBUG)) {
                console.log(error);
            }
            else {
                console.error("Error: Not seed.");
            }
        }
        finally {
            await prisma.$disconnect();
        }
    }
}
