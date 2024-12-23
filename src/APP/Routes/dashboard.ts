import { FastifyInstance } from "fastify";
import {
  addQuestion,
  editQuestion,
  deleteQuestion,
  viewQuestion,
  getAllQuestion
} from "../Controllers/DashboardController.js";
export async function dashboardRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", fastify.authenticate);

  fastify.get("/", () => {
    return "Welcome";
  });

  fastify.get("/questions/all", getAllQuestion)

  fastify.get("/question/view/:id", viewQuestion);

  fastify.post("/question/add", addQuestion);

  fastify.put("/question/edit/:id", editQuestion);

  fastify.delete("/question/delete/:id", deleteQuestion);
}
