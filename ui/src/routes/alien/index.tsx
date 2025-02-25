import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/alien/")({
  component: () => <div>/Alien route</div>,
  //   component: Alien,
});
