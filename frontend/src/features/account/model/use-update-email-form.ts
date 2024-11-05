import { useSessionQuery } from "@/entities/session/queries";
import { userUpdateData } from "@/shared/api/apiSlice";
import { ROUTES } from "@/shared/routing/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useUpdateEmailForm() {
    const router = useRouter();
    const { register, handleSubmit } = useForm<{
        email: string;
    }>();

    const updateUserEmail = useMutation({
        mutationFn: ({ id, ...data }: { id: number; email: string }) => {
            const email = data.email || "";
            return userUpdateData({ id, email });
        },
        onSuccess() {
            router.push(ROUTES.ACCOUNT);
        },
    });
    const userId = useSessionQuery().data?.id;

    const errorMessage = updateUserEmail.error
        ? "Ошибка обновления данных"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => {
            updateUserEmail.mutate({ id: userId ?? 0, ...data });
        }),
        isPending: updateUserEmail.isPending,
    };
}
