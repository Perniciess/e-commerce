import { ROUTES } from "@/shared/routing/routes";
import { AccountsIcon } from "./icons/accounts-icon";
import { AddProductIcon } from "./icons/add-product-icon";
import { ProductsIcon } from "./icons/products-icon";
import { CarouselIcon } from "./icons/carousel-icon";
import { PopularProductsIcon } from "./icons/popular-products-icon";

export const sidebarItemsAdmin = [
    {
        label: "Аккаунты",
        icon: AccountsIcon,
        href: ROUTES.ADMIN_ACCOUNTS,
    },
    {
        label: "Список товаров",
        icon: ProductsIcon,
        href: ROUTES.ADMIN_LIST_PRODUCTS,
    },
    {
        label: "Добавить товар",
        icon: AddProductIcon,
        href: ROUTES.ADMIN_ADD_PRODUCT,
    },

    {
        label: "Настройки карусели",
        icon: CarouselIcon,
        href: ROUTES.ADMIN_CAROUSEL_SETTINGS,
    },

    {
        label: "Настройка популярных товаров",
        icon: PopularProductsIcon,
        href: ROUTES.ADMIN_POPULAR_PRODUCTS_SETTINGS,
    },
];
