import { forwardRef, useEffect, useRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input
            ref={ref}
            {...props}
            className={
                'text-blue-900 transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 border-slate-300 shadow-sm rounded-lg'
            }
            type={type}
        />
))

// const Input = forwardRef(({ type = 'text', ...props }, ref) => {
//     return (
//         <input
//             ref={ref}
//             {...props}
//             className={
//                 'text-blue-900 transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 border-slate-300 shadow-sm rounded-lg'
//             }
//             type={type}
//         />
//     );
// });

export default Input;
