import { ROUTES } from "@/shared/routing/routes";
import { BuyListIcon } from "./icons/buy-list-icon";
import { SettingsIcon } from "./icons/settings-icon";
import { UserIcon } from "./icons/user-icon";

export const sidebarItems = [
    {
        label: "Профиль",
        icon: UserIcon,
        href: ROUTES.ACCOUNT,
    },
    {
        label: "История покупок",
        icon: BuyListIcon,
        href: ROUTES.HISTORY,
    },
    {
        label: "Настройки",
        icon: SettingsIcon,
        href: ROUTES.SETTINGS,
    },
];
