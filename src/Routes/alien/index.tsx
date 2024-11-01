import { createFileRoute } from "@tanstack/react-router";
import Alien from "../../Pages/Alien";

export const Route = createFileRoute("/alien/")({
  component: () => <Alien />,
  //   component: Alien,
});
