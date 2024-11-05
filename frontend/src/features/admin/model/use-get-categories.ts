import { useQuery } from "@tanstack/react-query";
import { categoriesGetCategories } from "@/shared/api/apiSlice";
import { useState } from "react";


export function useGetCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: categoriesGetCategories,
    });
}

export function getCategoriesOptions() {
    const { data: categories, error, isLoading } = useGetCategories();

    if (isLoading) return [{ value: "", label: "" }];
    if (!categories) return [{ value: "0", label: "Нет категории" }];
    if (error) return [{ value: "0", label: "Ошибка" }];

    // Преобразование данных категорий в формат опций
    const options = [
        ...categories.map((category: any) => {
            if (category.id === "f7235d44-7f6c-405e-8d4b-12c7e35bc4b5") {
                return { value: "0", label: " ", children: [] };
            }
            return {
                value: category.id?.toString() || "",
                label: category.name,
                children: (category.children || []).map((child: any) => ({
                    value: child.id.toString(),
                    label: child.name,
                })),
            };
        }),
    ];
    const index = options.findIndex((option) => option.value === "0");
    if (index !== -1) {
        const [zeroCategory] = options.splice(index,1);
        options.unshift(zeroCategory);
    }

    

    return options;
}

export function useCategoryState(category_list: any[]) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subcategoryList, setSubcategoryList] = useState([]);

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        const selectedCategoryObj = category_list.find(
            (category) => category.value === selectedValue,
        );
        setSubcategoryList(
            selectedCategoryObj ? selectedCategoryObj.children : [],
        );
    };

    return {
        selectedCategory,
        subcategoryList,
        handleCategoryChange,
    };
}
