import { createFileRoute } from "@tanstack/react-router";
import EnterCode from "../../Pages/Alien/EnterCode";
import { getAlienCodeQueryOptions } from "../../Queries/Alien";

export const Route = createFileRoute("/alien/enter-code")({
  loader: ({ context }) => {
    const { queryClient } = context;
    queryClient.ensureQueryData(getAlienCodeQueryOptions());
  },
  component: EnterCode,
});
