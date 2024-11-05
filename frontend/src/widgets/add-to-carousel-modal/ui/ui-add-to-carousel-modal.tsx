import { useEffect, useState } from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useAddToCarouselForm } from "../model/use-add-to-carousel-form";

export function UiAddToCarouselModal() {
    const [showModal, setShowModal] = useState(false);

    const { handleSubmit, isPending, register, errorMessage, isSuccess } =
	useAddToCarouselForm();
    useEffect(() => {
        if (isSuccess) {
            setShowModal(false);
        }
    }, [isSuccess]);

    return (
        <>
            <UiButton
                variant="black"
                className="mt-2 w-full h-12"
                onClick={() => setShowModal(true)}
            >
                Добавить в карусель
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
                                        Добавление товара в карусель
                                    </h4>
                                </div>
                                <UiTextField
                                    label="Ключ продукта"
                                    inputProps={{
                                        type: "text",
                                        autoComplete: "off",
                                        ...register("product_id", {
                                            required: true,
                                        }),
                                        className: "rounded-lg",
                                    }}
                                />
                                <UiButton
                                    variant="black"
                                    className="mt-2 mx-auto"
                                    disabled={isPending}
                                >
                                    Добавить
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

