"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThirdwebProvider } from "thirdweb/react";
import { ReactNode, useState } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
        <ThirdwebProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </ThirdwebProvider>
    </QueryClientProvider>
  );
}
