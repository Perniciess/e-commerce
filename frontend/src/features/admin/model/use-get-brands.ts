import { useQuery } from "@tanstack/react-query";
import { categoriesGetBrands } from "@/shared/api/apiSlice";

export function useGetBrands() {
    return useQuery({
        queryKey: ["brands"],
        queryFn: categoriesGetBrands,
    });
}

export function getBrandOptions() {
	const { data: brands, error } = useGetBrands();
  
	if (!brands) return [{ value: "1", label: "Нет брендов" }];
  
	if (error) return [{ value: "1", label: "Ошибка" }];

	return [
	  { value: "", label: "" },
	  ...brands.map((brand) => ({
		value: brand.brand_id?.toString() || "",
		label: brand.brand_name,
	  })),
	];
  }
