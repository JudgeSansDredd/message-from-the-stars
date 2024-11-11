import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => <MainLayout />,
  }
);
