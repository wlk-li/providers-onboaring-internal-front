import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Header } from "./-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const PrivateLayout = () => {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-4 p-4">
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </main>
    </div>
  );
};

export const Route = createFileRoute("/_private")({
  // TODO: Add authentication middleware logic to restrict access to private routes.
  component: PrivateLayout,
});
