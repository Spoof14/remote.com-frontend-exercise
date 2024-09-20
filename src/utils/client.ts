import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

export const defaultQueryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
      staleTime: Infinity,
    },
  },
};

export const buildQueryClient = () => new QueryClient(defaultQueryClientConfig);

const queryClient = buildQueryClient();
export default queryClient;
