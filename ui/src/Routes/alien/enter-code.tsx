import { createFileRoute } from "@tanstack/react-router";
import EnterCode from "../../Pages/Alien/EnterCode";

export const Route = createFileRoute("/alien/enter-code")({
  component: EnterCode,
});
