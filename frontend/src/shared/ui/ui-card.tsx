import clsx from "clsx";


export type UiCardProps = {
    className?: string;
    children?: React.ReactNode;
};

export const UiCard = ({ children, className }: UiCardProps) => {
    return (
        <div className={clsx("bg-[#17171BFF] rounded-lg shadow-xl p-4 text-white", className)}>
            {children}
        </div>
    );
};
