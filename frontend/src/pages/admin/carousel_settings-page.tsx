import { UiLayoutAdminPage } from "@/shared/ui/layouts/ui-layout-admin-page";
import { CarouselSettings } from "@/features/admin/ui/carousel-settings";

export default function CarouselSettingsPage() {
    return (
        <div>
            <UiLayoutAdminPage
                title="Настройка карусели"
                description="Управление товарами в карусели"
            >
				<CarouselSettings />
            </UiLayoutAdminPage>
        </div>
    );
}
