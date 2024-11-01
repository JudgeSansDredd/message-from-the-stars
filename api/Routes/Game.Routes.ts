import { FastifyInstance } from "fastify";
import { getAlienCode } from "../GamePieces/functions";

async function routes(fastify: FastifyInstance, options: any) {
  fastify.get("/", async (request, reply) => {
    return getAlienCode();
  });
}

export default routes;
