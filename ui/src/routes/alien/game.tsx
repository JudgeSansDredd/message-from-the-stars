import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/alien/game")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /alien/game!";
}
