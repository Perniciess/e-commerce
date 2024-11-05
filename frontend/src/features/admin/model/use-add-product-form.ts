import { productsAddProduct } from "@/shared/api/apiSlice";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";


export function useAddProductForm() {
    const { register, handleSubmit, reset } = useForm<{
        id: number;
        name: string;
        price: number;
        description: string;
        size: string;
        color: string;
        category_id: string;
        brand_id: string;
        image: FileList;
    }>();

    const addProductMutation = useMutation({
        mutationFn: async (formData: FormData) => productsAddProduct(formData),
        onSuccess: () => {
            reset();
        },
    });

    const errorMessage = addProductMutation.error ? "Ошибка" : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("color", data.color);
            formData.append("brand_id", data.brand_id);
            formData.append("category_id",data.category_id);
            formData.append("price", String(data.price));
            formData.append("size", data.size);
            formData.append("description", data.description);
            formData.append("image", data.image[0]); //
            addProductMutation.mutate(formData);
        }),
        isPending: addProductMutation.isPending,
        isSuccess: addProductMutation.isSuccess
    };
}


