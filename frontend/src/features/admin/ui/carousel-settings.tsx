import { UiTable } from "@/shared/ui/ui-table";
import { useGetCarousel } from "../model/use-get-carousel";
import { carousel_headers } from "./config";
import { UiAddToCarouselModal } from "@/widgets/add-to-carousel-modal/ui/ui-add-to-carousel-modal";
import { UiRemoveFromCarouselModal } from '@/widgets/add-to-carousel-modal/ui/ui-remove-from-carousel-modal'

export function CarouselSettings() {
    const { data: carousel } = useGetCarousel();
    const tableData = carousel
        ? carousel.flatMap((item) => {
              return item.product.map((product) => {
                  return [
                      product.name,
                      product.categories[0].parent.name,
                      product.categories[0].name,
                      product.brand.brand_name,
                  ];
              });
          })
        : [];
    return (
        <>
            <section>
                <div className="rounded-lg overflow-x-auto">
                    <UiTable
                        headers={carousel_headers}
                        data={tableData}
                        className=""
                    />
                </div>
            </section>
            <section className='flex flex-row gap-4'>
                <UiAddToCarouselModal />
                <UiRemoveFromCarouselModal />
            </section>
        </>
    );
}
