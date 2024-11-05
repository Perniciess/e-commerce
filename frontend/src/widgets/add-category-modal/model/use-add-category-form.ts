import { categoriesAddCategory } from "@/shared/api/apiSlice";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useAddCategoryForm() {
    const { register, handleSubmit } = useForm<{
        name: string;
        parentId?: string
    }>();

    const categoriesAddCategoryMutation = useMutation({
        mutationFn: categoriesAddCategory,
        

    });

    const errorMessage = categoriesAddCategoryMutation.error
        ? "Ошибка"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) =>
            categoriesAddCategoryMutation.mutate(data),
        ),
        isPending: categoriesAddCategoryMutation.isPending,
        isSuccess: categoriesAddCategoryMutation.isSuccess,
    };
}
