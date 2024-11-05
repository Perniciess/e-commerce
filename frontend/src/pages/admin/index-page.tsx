import { IndexAdminPage } from '@/features/admin/ui/index-admin-page'
import { UiLayoutAdminPage } from "@/shared/ui/layouts/ui-layout-admin-page";

export default function AdminIndexPage() {
    return (
        <div className="">
            <UiLayoutAdminPage
                title="Панель управления"
                description="Дэшбоард"
            >
                <IndexAdminPage />
            </UiLayoutAdminPage>
        </div>
    );
}
