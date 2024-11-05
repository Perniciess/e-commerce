import { authGetSessionInfo } from "@/shared/api/apiSlice";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const sessionKey = ["session"];

export function useSessionQuery() {
  return useQuery({
    queryKey: sessionKey,
    queryFn: authGetSessionInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useResetSession() {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries();
}
