import { createFileRoute } from "@tanstack/react-router";
import EnterCode from "../../pages/alien/EnterCode";
import { getAlienCodeQueryOptions } from "../../queries/Alien";

export const Route = createFileRoute("/alien/enter-code")({
  loader: ({ context }) => {
    const { queryClient } = context;
    queryClient.ensureQueryData(getAlienCodeQueryOptions());
  },
  component: EnterCode,
});
