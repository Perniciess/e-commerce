import { categoriesDeleteFromCarousel } from "@/shared/api/apiSlice";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useDeleteFromCarouselForm() {


    const { register, handleSubmit } = useForm<{
        product_id: string;
    }>();

    const categoriesDeleteFromCarouselMutation = useMutation({
        mutationFn: categoriesDeleteFromCarousel,
        

    });

    const errorMessage = categoriesDeleteFromCarouselMutation.error
        ? "Ошибка"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) =>
            categoriesDeleteFromCarouselMutation.mutate(data),
        ),
        isPending: categoriesDeleteFromCarouselMutation.isPending,
        isSuccess: categoriesDeleteFromCarouselMutation.isSuccess,
    };
}
