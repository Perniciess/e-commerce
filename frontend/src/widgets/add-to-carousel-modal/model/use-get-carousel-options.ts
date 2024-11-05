import { useGetCarousel } from "@/features/admin/model/use-get-carousel";


export function useGetCarouselOptions() {
    const { data: carousels, error } = useGetCarousel();

    if (!carousels) return [{ value: "1", label: "Нет каруселей" }];

    if (error) return [{ value: "1", label: "Ошибка" }];

    return carousels.flatMap((option) =>
        option.product.map((type) => ({
            value: type.product_id,
            label: `${type.brand.brand_name} - ${type.name}`,
        })),
    );
}
