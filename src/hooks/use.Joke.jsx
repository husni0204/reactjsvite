import axios from 'axios';
import { useEffect, useState } from 'react';

const useJoke = (name) => {
    const [jokes, setJokes] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios.get(`https://api.chucknorris.io/jokes/random?name=${name}`);
            console.log('data jokes', data);
            setJokes(data);
        };
        getJoke().then((r) => r);
    }, [name]);
    return jokes;
}

export default useJoke