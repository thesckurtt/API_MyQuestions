import { prisma } from "../Config/db_config.js";
import { server } from "../../server.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
export async function postLogin(request, reply) {
    dotenv.config();
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return reply.code(400).send({ error: "email and password are required" });
        }
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        const isValidPassword = await bcrypt.compare(password, user?.passwordHash ?? "");
        if (user && isValidPassword) {
            const token = server.jwt.sign({ name: user.name }, { expiresIn: "40m" });
            return { token };
        }
        reply.code(401).send({ error: "Unauthorized" });
    }
    catch (error) {
        reply.code(500).send({
            error: "Internal Server Error",
            message: `${process.env.APP_DEBUG == "true" ? error.message : "error"}`,
        });
    }
}
