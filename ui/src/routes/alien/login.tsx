import { createFileRoute } from "@tanstack/react-router";
import Login from "../../pages/alien/Login";

export const Route = createFileRoute("/alien/login")({
  component: Login,
});
