import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export type UiButtonVariant = 'black' | 'white' | 'gray'

export type UiButtonProps = {
	variant: UiButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export function UiButton({ className, variant, ...props }: UiButtonProps) {
	return (
		<button
			{...props}
			className={clsx(
				className,
				'px-4 h-10  rounded-md cursor-pointer flex gap-2 items-center justify-center',
				{
					black: 'text-white bg-slate-900 hover:bg-slate-800 font-Inter',
					white: 'text-black bg-white  outline outline-[#CBD5E1] text-Inter',
					gray: 'text-zinc-500 bg-zinc-100 hover:bg-zinc-200 font-Inter',
				}[variant]
			)}
		></button>
	)
}


