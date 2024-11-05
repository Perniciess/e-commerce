import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/shared/api/apiSlice";

export function useGetUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });
}
