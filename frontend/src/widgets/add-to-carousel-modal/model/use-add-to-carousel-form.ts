import { categoriesAddToCarousel } from "@/shared/api/apiSlice";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useAddToCarouselForm() {


    const { register, handleSubmit } = useForm<{
        product_id: string;
    }>();

    const categoriesAddToCarouselMutation = useMutation({
        mutationFn: categoriesAddToCarousel,
        

    });

    const errorMessage = categoriesAddToCarouselMutation.error
        ? "Ошибка"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) =>
            categoriesAddToCarouselMutation.mutate(data),
        ),
        isPending: categoriesAddToCarouselMutation.isPending,
        isSuccess: categoriesAddToCarouselMutation.isSuccess,
    };
}
