import type { InputHTMLAttributes, PropsWithRef } from 'react'
import clsx from 'clsx'
import { useId } from 'react'

export interface UiTextFieldProps {
    className?: string
    label?: string
    placeholder?: string
    error?: string
    inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export function UiTextField({ className, error, placeholder, label, inputProps }: UiTextFieldProps) {
    const id = useId()
    return (
        <div className={clsx(className, 'flex flex-col gap-1')}>
            {label !== null && (
                <label htmlFor={id} className="block">
                    {label}
                </label>
            )}
            <input
                {...inputProps}
                placeholder={placeholder}
                id={id}
                className={clsx(inputProps?.className, 'h-8 border px-3 outline-none')}
            />
            <div className="text-sm text-rose-400">{error}</div>
        </div>
    )
}
