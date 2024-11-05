import { useSessionQuery } from "@/entities/session/queries";
import { useUpdateEmailForm } from "@/features/account/model/use-update-email-form";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";

export function UpdateEmailForm() {
    const { handleSubmit, isPending, register, errorMessage } =
        useUpdateEmailForm();
    const email = useSessionQuery().data?.email;

    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <UiTextField
                        className="mt-10"
                        label="Электронная почта"
                        placeholder={email}
                        inputProps={{
                            type: "email",
                            ...register("email", { required: false }),
                            className: "rounded-md"
                        }}
                    />
                    <p className="text-xs mr-4 text-zinc-400">
                        Это ваша электронная почта. Вы можете менять её только
                        раз в 30 дней.
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
