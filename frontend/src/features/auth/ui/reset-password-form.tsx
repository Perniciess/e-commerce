import { useSignInForm } from "@/features/auth/model/use-sign-in-form";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";

export function ResetPasswordForm() {
    const { handleSubmit, isPending, register, errorMessage } = useSignInForm();
    return (
        <form
            className="flex flex-col gap-4 text-center"
            onSubmit={handleSubmit}
        >
            <UiTextField
                label="Электронная почта"
                inputProps={{
                    type: "email",
                    ...register("email", { required: true }),
                }}
            />
            <UiButton
                disabled={isPending}
                variant="black"
                className="self-center"
            >
                Сбросить пароль
            </UiButton>
            {errorMessage && (
                <div className="text-rose-600">{errorMessage}</div>
            )}
        </form>
    );
}
