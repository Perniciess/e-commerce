import clsx from "clsx";
import { useId, PropsWithRef, TextareaHTMLAttributes } from "react";

export type UiTextAreaProps = {
    className?: string;
    label?: string;
    placeholder?: string;
    textareaProps?: PropsWithRef<TextareaHTMLAttributes<HTMLTextAreaElement>>;
};

export function UiTextArea({
    className,
    placeholder,
    label,
    textareaProps,
}: UiTextAreaProps) {
    const id = useId();
    return (
        <div className={clsx(className, "flex flex-col gap-1")}>
            {label && (
                <label htmlFor={id} className="block">
                    {label}
                </label>
            )}
            <textarea
                {...textareaProps}
                placeholder={placeholder}
                id={id}
                className={clsx(
                    textareaProps?.className,
                    "rounded-md h-20 border resize-none outline-none px-3 py-2",
                )}
            />
        </div>
    );
}
