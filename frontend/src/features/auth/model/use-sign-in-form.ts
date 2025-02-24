import { authSignIn } from "@/shared/api/apiSlice";
import { ROUTES } from "@/shared/routing/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignInForm() {
    const router = useRouter();
    const { register, handleSubmit } = useForm<{
        email: string;
        password: string;
    }>();

    const signInMutation = useMutation({
        mutationFn: authSignIn,
        onSuccess() {
            router.push(ROUTES.HOME);
        },
    });

    const errorMessage = signInMutation.error
        ? "Ошибка авторизации"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
        isPending: signInMutation.isPending,
    };
}
