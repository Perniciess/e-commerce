import { useSessionQuery } from "@/entities/session/queries";
import { userUpdateData } from "@/shared/api/apiSlice";
import { ROUTES } from "@/shared/routing/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useUpdateLoginForm() {
    const router = useRouter();
    const { register, handleSubmit } = useForm<{
        login: string;
    }>();

    const updateUserLogin = useMutation({
        mutationFn: ({ id, ...data }: { id: number; login: string }) => {
            const login = data.login || "";
            return userUpdateData({ id, login });
        },
        onSuccess() {
            router.push(ROUTES.ACCOUNT);
        },
    });
    const userId = useSessionQuery().data?.id;

    const errorMessage = updateUserLogin.error
        ? "Ошибка обновления данных"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => {
            updateUserLogin.mutate({ id: userId ?? 0, ...data });
        }),
        isPending: updateUserLogin.isPending,
    };
}
