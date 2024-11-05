import { UiLayoutAdminPage } from "@/shared/ui/layouts/ui-layout-admin-page";
import { ProductsList } from "@/features/admin/ui/get-products-list";
export default function ProductsPage() {
    return (
        <div className="">
            <UiLayoutAdminPage
                title="Список товаров"
                description="Управление товарами"
            >
                <ProductsList />
            </UiLayoutAdminPage>
        </div>
    );
}
