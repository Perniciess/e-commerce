import { SignOutButton } from "@/features/auth/ui/sign-out-button";
import { UiLayoutUserPage } from "@/shared/ui/layouts/ui-layout-user-page";

export default function UserSettingsPage() {
    return (
        <UiLayoutUserPage
            title="Настройки"
            description="Дополнительные настройки Вашего профиля"
        >
            <SignOutButton />
        </UiLayoutUserPage>
    );
}
