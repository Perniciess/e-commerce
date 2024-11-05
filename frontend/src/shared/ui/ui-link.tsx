import Link from 'next/link'
import clsx from 'clsx'


export type UiLinkVariant = 'black' | 'gray' | 'white' | 'none'

export type UiLinkProps = {
	variant: UiLinkVariant
} & Parameters<typeof Link>[0]

export function UiLink({ className, variant, ...props }: UiLinkProps) {
	return (
		<Link
			{...props}
			className={clsx(
				className,
				'p-1 cursor-pointer',
				{
					black: 'text-slate-900',
					gray: 'text-zinc-500 hover:text-zinc-400',
					white: 'text-white hover:text-white',
					none: ''
				}[variant]
			)}
		></Link>
	)
}
