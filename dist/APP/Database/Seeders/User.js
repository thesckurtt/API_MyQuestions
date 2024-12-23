import { LoremGenerator } from "../../Dev/Utils/LoremGenerator.js";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
export async function User(turns) {
    const prisma = new PrismaClient();
    dotenv.config();
    if (typeof turns === "number" && turns >= 1) {
        for (let i = 1; i <= turns; i++) {
            try {
                const { name, email, passwordHash, isAdmin } = await LoremGenerator.LoremUser();
                const UserData = {
                    name,
                    email,
                    passwordHash,
                    isAdmin,
                };
                console.log(UserData);
                const start = performance.now();
                const result = await prisma.user.create({ data: UserData });
                const end = performance.now();
                console.log(`Execution time: ${end - start} ms`);
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
                prisma.$disconnect();
            }
        }
    }
    else {
        try {
            const { name, email, passwordHash, isAdmin } = await LoremGenerator.LoremUser();
            const UserData = {
                name,
                email,
                passwordHash,
                isAdmin,
            };
            console.log(UserData);
            const start = performance.now();
            const result = await prisma.user.create({ data: UserData });
            const end = performance.now();
            console.log(`Execution time: ${end - start} ms`);
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
            prisma.$disconnect();
        }
    }
}
