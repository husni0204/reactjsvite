import React from 'react';

const Input = ({ type = 'text', ...props }) => {
    return <input
        {...props}
        className={'text-blue-900 transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 border-slate-300 shadow-sm rounded-lg'}
        type={type} />;
};

export default Input;
