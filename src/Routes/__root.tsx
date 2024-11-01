import { createRootRoute } from "@tanstack/react-router";
import MainLayout from "../Layouts/MainLayout";

export const Route = createRootRoute({
  component: () => <MainLayout />,
});
