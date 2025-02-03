import clsx from 'clsx'
import { PropsWithRef, SelectHTMLAttributes } from 'react'

export type UiSelectProps = {
	className?: string
	options: { value: string; label: string }[]
	selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>
	label: string
}

export function UiSelect({ className, options, selectProps, label }: UiSelectProps) {
	return (
		<div className={clsx('flex flex-col', className)}>
			<label className='mr-2 mb-2'>{label}</label>
			<select
				{...selectProps}
				className={clsx('w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-black bg-white')}
			>
				{options.map((option, index) => (
					<option key={index} value={option.value} className='font-Inter'>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}
