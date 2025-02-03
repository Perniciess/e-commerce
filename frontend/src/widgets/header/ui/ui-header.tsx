import { ROUTES } from '@/shared/routing/routes'
import { UiLogo } from '@/shared/ui/icons/ui-logo-icon'
import { UiLink } from '@/shared/ui/ui-link'
import { UiProfile } from '@/widgets/header/ui/ui-profile'
import clsx from 'clsx'
import { UiNavbar } from './ui-navbar'

export function UiHeader({ className }: { className?: string }) {
	return (
		<header
			className={clsx(
				className,
				'px-3 py-1 border-b border-b-slate-300 bg-white w-full fixed items-center top-0 z-50',
			)}
		>
			<div className='flex w-full items-center justify-center'>
				<UiLink variant='none' href={ROUTES.HOME} className='flex flex-row items-center justify-center'>
					<UiLogo className='h-12 w-12' />
					<p className='ml-1 text-xl'>ITEMCLUB</p>
				</UiLink>
				<UiNavbar />
				<UiProfile />
			</div>
		</header>
	)
}
