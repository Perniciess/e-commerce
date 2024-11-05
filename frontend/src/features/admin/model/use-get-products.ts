import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/shared/api/apiSlice";

export function useGetProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
}
