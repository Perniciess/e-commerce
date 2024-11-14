import { UiDescription } from "@/widgets/description/ui/ui-description";
import { UiDefaultLayout } from "@/shared/ui/layouts/ui-layout-default-page";
import { UiProductsList } from "@/widgets/catalog/ui/ui-products-list";
import { useGetProducts } from '@/features/admin/model/use-get-products'

export default function Home() {

    const { data: products } = useGetProducts();
    
    const counter = products?.length
    return (
        <>
            <UiDefaultLayout>
                <div className='text-xl flex justify-end mr-10'>Количество кроссовок: {counter}</div>
                <UiDescription />

                <UiProductsList title="Популярные товары" />
            </UiDefaultLayout>
        </>
    );
}
