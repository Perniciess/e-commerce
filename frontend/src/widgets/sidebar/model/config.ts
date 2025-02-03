import { ROUTES } from '@/shared/routing/routes'
import { AccountsIcon } from '../ui/icons/accounts-icon'
import { AddProductIcon } from '../ui/icons/add-product-icon'
import { BuyListIcon } from '../ui/icons/buy-list-icon'
import { CarouselIcon } from '../ui/icons/carousel-icon'
import { PopularProductsIcon } from '../ui/icons/popular-products-icon'
import { ProductsIcon } from '../ui/icons/products-icon'
import { SettingsIcon } from '../ui/icons/settings-icon'
import { UserIcon } from '../ui/icons/user-icon'

export const sidebarItemsAdmin = [
	{
		label: 'Аккаунты',
		icon: AccountsIcon,
		href: ROUTES.ADMIN_ACCOUNTS,
	},
	{
		label: 'Список товаров',
		icon: ProductsIcon,
		href: ROUTES.ADMIN_LIST_PRODUCTS,
	},
	{
		label: 'Добавить товар',
		icon: AddProductIcon,
		href: ROUTES.ADMIN_ADD_PRODUCT,
	},

	{
		label: 'Настройки карусели',
		icon: CarouselIcon,
		href: ROUTES.ADMIN_CAROUSEL_SETTINGS,
	},

	{
		label: 'Настройка популярных товаров',
		icon: PopularProductsIcon,
		href: ROUTES.ADMIN_POPULAR_PRODUCTS_SETTINGS,
	},
]

export const sidebarItems = [
	{
		label: 'Профиль',
		icon: UserIcon,
		href: ROUTES.ACCOUNT,
	},
	{
		label: 'История покупок',
		icon: BuyListIcon,
		href: ROUTES.HISTORY,
	},
	{
		label: 'Настройки',
		icon: SettingsIcon,
		href: ROUTES.SETTINGS,
	},
]
