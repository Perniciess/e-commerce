import { ROUTES } from '@/shared/routing/routes'
import { sidebarItemsAdmin } from '@/widgets/sidebar/model/sidebarConstants'
import { UiSidebar } from '@/widgets/sidebar/ui/ui-sidebar'

export function UiLayoutAdminPage({
	children,
	title,
	description,
}: {
	children: React.ReactNode
	title: string
	description: string
}) {
	return (
		<div className='flex w-5/6'>
			<UiSidebar items={sidebarItemsAdmin} logo='Панель администратора' sidebar_route={ROUTES.ADMIN_INDEX} />
			<div className='flex flex-col flex-grow min-h-screen'>
				<div className='flex flex-col pt-2 px-4 space-y-2 ml-4 flex-grow pb-4'>
					<div className=''>
						<p className='font-semibold text-xl mt-4'>{title}</p>
						<p className='mt-2 mb-2 text-zinc-400'>{description}</p>
						<hr className='border-zinc-200' />
					</div>
					{children}
				</div>
			</div>
		</div>
	)
}
