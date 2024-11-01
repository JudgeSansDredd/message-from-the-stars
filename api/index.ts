import Fastify from "fastify";
import GameRoutes from "./Routes/Game.Routes";

const fastify = Fastify({ logger: true });

fastify.get("/", (req, res) => {
  return { hello: "world" };
});

fastify.register(GameRoutes, { prefix: "/game" });

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
