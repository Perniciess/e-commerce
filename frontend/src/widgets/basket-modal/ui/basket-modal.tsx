import { useState } from "react";
import { UiBasketIcon } from "@/shared/ui/icons/basket-icon";
import { UiButton } from "@/shared/ui/ui-button";

export function UiBasketModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button type="button" onClick={() => setShowModal(true)}>
                <UiBasketIcon className='mr-2'/>
            </button>
            {showModal ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => setShowModal(false)}
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-2 mb-4 text-left">
                                <h4 className="text-lg font-medium text-gray-800">
                                    Корзина
                                </h4>
                            </div>
							<UiButton variant="black" >Перейти к оформлению</UiButton>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
