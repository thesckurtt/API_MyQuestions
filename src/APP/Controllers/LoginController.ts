import { prisma } from "../Config/db_config.js";
import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { QuestionType } from "../Types/QuestionType.js";
import { DataReturnType } from "../Types/DataReturnType.js";
import { DONT_HAVE_QUESTIONS_IN_DB } from "../Messages/ApiErrors.js";
import jwtPlugin from "@fastify/jwt";
import { server } from "../../server.js";
import { UserCrudType, UserType} from "../Types/UserType.js"
import bcrypt from "bcrypt";
import dotenv from "dotenv";

interface LoginRequest {
  username: string;
  password: string;
}

export async function postLogin(
  request: FastifyRequest<{ Body: LoginRequest }>,
  reply: FastifyReply
) {
  dotenv.config();
  try {
    const { email, password } = request.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return reply.code(400).send({ error: "email and password are required" });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    const isValidPassword : boolean = await bcrypt.compare(password, user?.passwordHash ?? "");

    // console.log(`${user}, ${isValidPassword}`)

    if (user && isValidPassword) {
      const token = server.jwt.sign({ name: user.name }, { expiresIn: "10m" });
      return { token };
    }

    reply.code(401).send({ error: "Unauthorized" });
  } catch (error: any) {
    reply
      .code(500)
      .send({
        error: "Internal Server Error",
        message: `${process.env.APP_DEBUG == "true" ? error.message : "error"}`,
      });
  }
}
