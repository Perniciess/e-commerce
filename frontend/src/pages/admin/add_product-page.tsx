import { AddProductForm } from '@/features/admin/ui/add-product-form'
import { UiLayoutAdminPage } from "@/shared/ui/layouts/ui-layout-admin-page";

export function AddProductPage() {
    return (
        <div className="">
            <UiLayoutAdminPage
                title="Добавление товара"
                description="Добавление нового товара в магазин"
            >
                <AddProductForm />
            </UiLayoutAdminPage>
        </div>
    );
}
