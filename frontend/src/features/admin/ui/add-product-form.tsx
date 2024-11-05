import React from "react";
import { UiSelect } from "@/shared/ui/ui-select";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiTextArea } from "@/shared/ui/ui-textarea";
import { useAddProductForm } from "../model/use-add-product-form";
import { getBrandOptions } from "../model/use-get-brands";
import {
    getCategoriesOptions,
    useCategoryState,
} from "../model/use-get-categories";
import { size } from "./config";
import { UiButton } from "@/shared/ui/ui-button";
import { UiAddBrandModal } from "@/widgets/add-brand-modal/ui/add-brand-modal";
import { UiAddCategoryModal } from "@/widgets/add-category-modal/ui/ui-add-category-modal";
import { UiAddSubCategoryModal } from "@/widgets/add-category-modal/ui/ui-add-subcategory-modal";


export function AddProductForm() {
    const { handleSubmit, register, isSuccess } = useAddProductForm();
    const brand_list = getBrandOptions();
    const category_list = getCategoriesOptions();
    const { selectedCategory, subcategoryList, handleCategoryChange } =
        useCategoryState(category_list);

    return (
        <div className="flex flex-row gap-4">
            <form
                className="flex flex-col gap-2 text-center w-3/4"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <UiTextField
                    label="Название"
                    inputProps={{
                        type: "text",
                        autoComplete: "off",
                        ...register("name", { required: true }),
                        className: "rounded-md",
                    }}
                />
                <UiTextField
                    label="Цена"
                    inputProps={{
                        type: "text",
                        autoComplete: "off",
                        ...register("price", { required: true }),
                        className: "rounded-md",
                    }}
                />
                <section className="grid grid-cols-2 gap-4">
                    <UiSelect
                        label="Категория"
                        options={category_list}
                        selectProps={{
                            onChange: handleCategoryChange,
                        }}
                    />
                    <UiSelect
                        label="Подкатегория"
                        options={subcategoryList}
                        selectProps={{
                            ...register("category_id", { required: true }),
                        }}
                    />
                    <UiSelect
                        label="Бренд"
                        options={brand_list}
                        selectProps={{
                            ...register("brand_id", { required: true }),
                        }}
                    />
                    <UiSelect
                        label="Размер"
                        options={size}
                        selectProps={{
                            ...register("size", { required: true }),
                        }}
                    />
                </section>
                <UiTextField
                    label="Цвет"
                    inputProps={{
                        type: "text",
                        autoComplete: "off",
                        ...register("color", { required: true }),
                        className: "rounded-md",
                    }}
                />
                <UiTextArea
                    label="Описание"
                    textareaProps={{
                        ...register("description", { required: true }),
                        className: "rounded-md",
                    }}
                />
                <UiButton variant="black" className="self-center" type="submit">
                    Добавить
                </UiButton>
            </form>
            <section>
                <UiAddCategoryModal />
                <UiAddSubCategoryModal />
                <UiAddBrandModal />
            </section>
        </div>
    );
}
