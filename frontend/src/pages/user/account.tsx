import { UpdateEmailForm } from "@/features/account/ui/update-email-form";
import { UpdateLoginForm } from "@/features/account/ui/update-login-form";
import { UiLayoutUserPage } from "@/shared/ui/layouts/ui-layout-user-page";


export default function AccountPage() {
    return (
        <UiLayoutUserPage
            title="Профиль"
            description="Обновите настройки своей учетной записи."
        >
            <UpdateLoginForm />
            <UpdateEmailForm />
        </UiLayoutUserPage>
    );
}
