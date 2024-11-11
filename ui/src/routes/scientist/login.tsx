import { createFileRoute } from "@tanstack/react-router";
import Login from "../../pages/scientist/Login";

export const Route = createFileRoute("/scientist/login")({
  component: Login,
});
