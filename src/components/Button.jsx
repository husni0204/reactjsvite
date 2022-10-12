import clsx from 'clsx';

const Button = ({ className = 'bg-blue-600', children, text, type = 'submit', ...props }) => {
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 font-medium whitespace-nowrap inline-flex justify-center items-center gap-x-2  text-white px-4 h-10 rounded'
            )}>
            {text || children}
        </button>
    );
};

export default Button;
