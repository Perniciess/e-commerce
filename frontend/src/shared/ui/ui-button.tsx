import type { ButtonHTMLAttributes } from 'react'
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
                'flex h-10  cursor-pointer items-center justify-center gap-2 rounded-md px-4',
                {
                    black: 'text-white bg-slate-900 hover:bg-slate-800 font-Inter',
                    white: 'text-black bg-white  outline outline-[#CBD5E1] text-Inter',
                    gray: 'text-zinc-500 bg-zinc-100 hover:bg-zinc-200 font-Inter',
                }[variant],
            )}
        >
        </button>
    )
}
