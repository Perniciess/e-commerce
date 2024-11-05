import clsx from 'clsx'
import { InputHTMLAttributes, useId, PropsWithRef } from 'react'

export type UiTextFieldProps = {
	className?: string
	label?: string
	placeholder?: string
	error?: string
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export function UiTextField({
	className,
	error,
	placeholder,
	label,
	inputProps,
}: UiTextFieldProps) {
	const id = useId()
	return (
		<div className={clsx(className, 'flex flex-col gap-1')}>
			{label && (
				<label htmlFor={id} className='block'>
					{label}
				</label>
			)}
			<input
				{...inputProps}
				placeholder={placeholder}
				id={id}
				className={clsx(
					inputProps?.className,
					'border h-8 outline-none px-3',
					
				)}
			/>
			<div className='text-rose-400 text-sm'>{error}</div>
		</div>
	)
}
