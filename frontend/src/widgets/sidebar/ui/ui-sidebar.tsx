import { UiLink } from '@/shared/ui/ui-link'
import clsx from 'clsx'

interface SidebarItem {
	label: string
	icon: () => JSX.Element
	href: string
}

interface UiSidebarProps {
	items: SidebarItem[]
	logo?: string
	sidebar_route: string
}

export const UiSidebar = ({ items, logo, sidebar_route }: UiSidebarProps) => {
	return (
		<aside className={clsx('w-64 bg-white border-r border-zinc-200 h-screen flex flex-col')}>
			<div className='flex h-16 border-b border-gray-200 items-center justify-center'>
				<UiLink variant='none' href={sidebar_route}>
					<p className='text-3xl text-gray-900 items-center'>ITEMCLUB</p>
					{logo}
				</UiLink>
			</div>

			<nav className='flex-1 overflow-y-auto'>
				<ul className='p-4 space-y-2'>
					{items.map((item, index) => (
						<UiLink
							variant='none'
							key={index}
							href={item.href}
							className='flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg'
						>
							<span className='mr-3'>{item.icon()}</span>
							<span>{item.label}</span>
						</UiLink>
					))}
				</ul>
			</nav>
		</aside>
	)
}
