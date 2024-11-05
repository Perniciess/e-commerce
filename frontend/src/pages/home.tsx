import { UiDescription } from "@/widgets/description/ui/ui-description";
import { UiDefaultLayout } from "@/shared/ui/layouts/ui-layout-default-page";
import { UiProductsList } from "@/widgets/catalog/ui/ui-products-list";

export default function Home() {
    return (
        <>
            <UiDefaultLayout>
                <UiDescription />

                <UiProductsList title="Популярные товары" />
            </UiDefaultLayout>
        </>
    );
}
