import { postLogin } from "../Controllers/LoginController.js";
export async function loginRoutes(fastify) {
    fastify.post("/login", postLogin);
}
