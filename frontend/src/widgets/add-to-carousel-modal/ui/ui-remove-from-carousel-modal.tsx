import { useEffect, useState } from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { useGetCarouselOptions } from "../model/use-get-carousel-options";
import { useDeleteFromCarouselForm } from "../model/use-delete-from-carousel-form";
import { UiSelect } from "@/shared/ui/ui-select";

export function UiRemoveFromCarouselModal() {
    const [showModal, setShowModal] = useState(false);

    const carouselOptions = useGetCarouselOptions();

    const { handleSubmit, isPending, register, errorMessage, isSuccess } =
    useDeleteFromCarouselForm();
    
    useEffect(() => {
        if (isSuccess) {
            setShowModal(false);
        }
    }, [isSuccess]);

    return (
        <>
            <UiButton
                variant="gray"
                className="mt-2 w-full h-12"
                onClick={() => setShowModal(true)}
            >
                Удалить из карусели
            </UiButton>

            {showModal ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal(false)}
                    ></div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center jus min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg text-center">
                                <div className="mt-2 mb-4 text-center">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        Удаление товара из карусели
                                    </h4>
                                </div>
                                <UiSelect
                                    label="Выберите товар"
                                    options={carouselOptions}
                                    selectProps={{...register("product_id")}}
                                />

                                <UiButton
                                    variant="black"
                                    className="mt-2 mx-auto"
                                    disabled={isPending}
                                >
                                    Удалить
                                </UiButton>
                            </div>
                        </div>
                        {errorMessage && (
                            <div className="text-rose-600">
                                "{errorMessage}"
                            </div>
                        )}
                    </form>
                </div>
            ) : null}
        </>
    );
}
