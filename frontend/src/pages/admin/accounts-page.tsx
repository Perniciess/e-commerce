import { UserList } from '@/features/admin/ui/get-users-list'
import { UiLayoutAdminPage } from "@/shared/ui/layouts/ui-layout-admin-page";

export default function AccountsPage() {
    return (
        <div>
            <UiLayoutAdminPage
                title="Список пользователей"
                description="Управление пользователями"
            >
                <UserList />
            </UiLayoutAdminPage>
        </div>
    );
}
