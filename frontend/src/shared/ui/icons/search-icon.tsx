export const UiIconSearch = ({
    className,
    color,
}: {
    className?: string;
    color?: string;
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className={className}
        >
            <path
                fill={color}
                d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"
            />
        </svg>
    );
};
