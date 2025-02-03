import { UiLink } from '@/shared/ui/ui-link'
import { NavbarPoints } from '../model/config'

export function UiNavbar() {
	return (
		<nav className='w-full'>
			<div className='justify-center items-center flex'>
				<ul className='items-center justify-center flex space-x-4'>
					{NavbarPoints.map(points => (
						<li key={points.id} className=' hover:text-zinc-400'>
							<UiLink variant='none' href={points.href}>
								{points.tittle}
							</UiLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
