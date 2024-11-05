import { authSignUp } from "@/shared/api/apiSlice";
import { ROUTES } from "@/shared/routing/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
    const router = useRouter();
    const { register, handleSubmit } = useForm<{
        email: string;
        login: string;
        password: string;
    }>();

    const signUpMutation = useMutation({
        mutationFn: authSignUp,
        onSuccess() {
            router.push(ROUTES.HOME);
        },
    });

    const errorMessage = signUpMutation.error
        ? "Ошибка регистрации"
        : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
        isPending: signUpMutation.isPending,
    };
}
