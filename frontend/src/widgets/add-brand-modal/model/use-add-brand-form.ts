import { categoriesAddBrand } from "@/shared/api/apiSlice";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useAddBrandForm() {
    const { register, handleSubmit } = useForm<{
        brand_name: string;
    }>();

    const categoriesAddBrandMutation = useMutation({
        mutationFn: categoriesAddBrand,
        

    });

    const errorMessage = categoriesAddBrandMutation.error
        ? "Ошибка"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) =>
            categoriesAddBrandMutation.mutate(data),
        ),
        isPending: categoriesAddBrandMutation.isPending,
        isSuccess: categoriesAddBrandMutation.isSuccess,
    };
}
