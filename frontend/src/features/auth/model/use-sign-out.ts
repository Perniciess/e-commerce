import { useResetSession } from "@/entities/session/queries";
import { authSignOut } from "@/shared/api/apiSlice";
import { ROUTES } from "@/shared/routing/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
    const resetSession = useResetSession();
    const router = useRouter();

    const singOutMutation = useMutation({
        mutationFn: authSignOut,
        async onSuccess() {
            router.push(ROUTES.HOME);
            resetSession();
        },
    });

    return {
        isLoading: singOutMutation.isPending,
        signOut: singOutMutation.mutate,
    };
}
