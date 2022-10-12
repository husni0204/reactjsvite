import React from 'react';

const Card = ({ children }) => {
    return <div className={'shadow rounded-lg overflow-hidden bg-emerald-600'}>{children}</div>;
};

const Title = ({ children }) => {
    return (
        <div className={'p-4 border-b'}>
            <h1 className={'text-xl font-semibold text-sky-900 p-4'}>{children}</h1>
        </div>
    );
};

const Body = ({ children }) => {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
};

const Footer = ({ children }) => {
    return <div className={'bg-green-800 p-4'}>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
