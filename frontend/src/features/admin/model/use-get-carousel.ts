import { useQuery } from "@tanstack/react-query";
import { categoriesGetCarousel } from "@/shared/api/apiSlice";

export function useGetCarousel() {
    return useQuery({
        queryKey: ["carousel"],
        queryFn: categoriesGetCarousel,
    });
}

