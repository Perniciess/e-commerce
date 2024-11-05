import { UiLogo } from "@/shared/ui/icons/ui-logo-icon";
import { UiLink } from "@/shared/ui/ui-link";
import { FaInstagram, FaTelegramPlane, FaVk } from "react-icons/fa";
import { footerDescriptions } from "./config";
import { ROUTES } from "@/shared/routing/routes";

export function UiFooter() {
    return (
        <footer className="flex items-center bg-[#17171BFF] px-3 py-10 text-white">
            <div className="flex flex-col  mt-6 ml-10 items-center">
                <UiLink
                    variant="none"
                    href={ROUTES.HOME}
                    className="flex flex-row items-center justify-center"
                >
                    <UiLogo color='white' />
                    <p className="ml-1 text-lg">ITEMCLUB</p>
                </UiLink>

                <div
                    className={"flex justify-center flex-row items-start pt-4"}
                >
                    <FaTelegramPlane className="ml-1 size-6" />
                    <FaInstagram className="ml-4 size-6" />
                    <FaVk className="ml-4 size-6" />
                </div>
            </div>
            <div className="gap-y-12 sm:gap-x-6 lg:gap-x-8 lg:gap-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ml-8">
                {footerDescriptions.map((perk) => (
                    <div className="flex flex-col items-start mt-6 ml-10 text-center">
                        <h3 className="mr-4 text-[#818181FF] text-bold text-xl">
                            {perk.name}
                        </h3>
                        <div
                            className={
                                "flex justify-center flex-col items-start"
                            }
                        >
                            {perk.description.map((item, index) => (
                                <UiLink
                                    variant="white"
                                    href={perk.link[index]}
                                    key={index}
                                >
                                    {item}
                                </UiLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
}
