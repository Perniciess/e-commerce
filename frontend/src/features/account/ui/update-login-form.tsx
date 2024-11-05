import { useSessionQuery } from "@/entities/session/queries";
import { useUpdateLoginForm } from "@/features/account/model/use-update-login-form";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";

export function UpdateLoginForm() {
    const { handleSubmit, isPending, register, errorMessage } =
        useUpdateLoginForm();

    const login = useSessionQuery().data?.login;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <UiTextField
                    className="mt-2 "
                    label="Имя пользователя"
                    placeholder={login}
                    inputProps={{
                        type: "login",
                        ...register("login", { required: false }),
                        className: "rounded-md"
                    }}
                />
                <p className="text-xs mr-4 text-zinc-400">
                    Это ваше имя пользователя. Вы можете менять его только раз в
                    30 дней.
                </p>
            </div>
            <UiButton
                disabled={isPending}
                variant="black"
                className="mt-3"
            >
                Изменить
            </UiButton>

            {errorMessage && (
                <div className="text-rose-600">{errorMessage}</div>
            )}
        </form>
    );
}
