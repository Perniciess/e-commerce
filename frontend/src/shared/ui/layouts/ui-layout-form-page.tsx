import { UiLogo } from '@/shared/ui/icons/ui-logo-icon'
import { ReactNode } from 'react'

export function UiFormPageLayout({ title, form }: { form?: ReactNode; title: string }) {
	return (
		<div className='flex flex-row min-h-screen'>
			<div className='bg-[#17171BFF] w-1/2'>
				<div className='flex flex-col justify-start items-start pt-2 pl-2 grow'>
					<UiLogo color='white' />
				</div>
				<div className='bottom-1 left-0 absolute pb-4 pl-6 max-w-[50%]'>
					<p className='text-white font-italic leading-5'>
						Это библиотека, которая сэкономит ваше время в поиске одежды. Чем меньше времени Вы тратите на
						поиск уникальной одежды, тем больше эмоций Вы сможете заполучить.
					</p>
				</div>
			</div>
			<div className='flex justify-center items-center w-1/2'>
				<div className='bg-white px-14 py-8 pb-14 w-full max-w-[400px]'>
					<h1 className='mb-6 font-bold text-2xl text-center'>{title}</h1>
					{form}
				</div>
			</div>
		</div>
	)
}
