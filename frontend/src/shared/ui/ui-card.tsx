import clsx from 'clsx'

export interface UiCardProps {
    className?: string
    children?: React.ReactNode
}

export const UiCard = ({ children, className }: UiCardProps) => {
    return <div className={clsx('rounded-lg bg-[#17171BFF] p-4 text-white shadow-xl', className)}>{children}</div>
}
