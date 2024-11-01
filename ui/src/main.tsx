import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { routeTree } from "./routeTree.gen";

// Set up axios
axios.defaults.baseURL = import.meta.env.VITE_API_BASEPATH;

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { queryClient },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
