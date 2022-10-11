import React, { useState } from 'react'
import Button from './Button';

const Counter = ({ initialValue }) => {
    
    const [counter, setCounter] = useState(initialValue)
    function handleClick() {
        setCounter((prevState) => prevState + 1);
    }

    return (
        <div>
            <h1 className={'text-5xl font-bold'}>{counter}</h1>
            <div className={'mt-5 flex items-center gap-2'}>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    +3
                </Button>
            </div>
        </div>
    );
}

export default Counter