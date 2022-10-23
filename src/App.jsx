import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter';
import Input from './components/Input';
import Label from './components/Label';
import PlaceContentCenter from './components/PlaceContentCenter';
import Todo from './components/Todo';
import useJoke from './hooks/use.Joke';

const App = () => {
    const type = 'submit';
    const onClick = () => console.log('Login with another style');

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const namaRef = useRef('')
    const [nama, setNama] = useState('Rezky')
    const jokes = useJoke(nama)
    const generateJoke = (e) => {
        e.preventDefault()
        setNama(namaRef.current.value) 
    }

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }
        getUsers().then((r) => r);
    }, []);

    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    const inputRef = useRef(null);
    // const [tick, setTick] = useState(0);

    const handleClick = () => {
        inputRef.current.focus();
        // tick.current = tick.current + 1;
        // console.log(tick.current);
        // const nextTick = tick + 1;
        // setTick(nextTick);
        // console.log(nextTick);
    };

    return (
        <>
            <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
                <div className={'flex gap-x-2'}>
                    <Button
                        {...{
                            type: 'submit',
                            onClick: () => console.log('Register with another style'),
                        }}>
                        <IconBrandFacebook />
                        Register
                    </Button>
                    <Button {...{ type, onClick }}>
                        <IconBrandTwitter />
                        Login
                    </Button>
                    <Button className={'bg-black'} onClick={() => console.log('Login')}>
                        <IconBrandGithub />
                        Login
                    </Button>
                    <Button className={'bg-red-700'} onClick={() => console.log('Login')} type='reset'>
                        <IconBrandYoutube />
                        Login
                    </Button>
                </div>
            </div>
            <div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'}>
                <div className='max-w-md w-full'>
                    <Card>
                        <Card.Title>Hello React</Card.Title>
                        <Card.Body>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, sunt. Voluptatum facere officia expedita voluptate quia
                            deserunt commodi nobis fugiat, quidem inventore fuga earum libero, totam alias quam optio ratione.
                        </Card.Body>
                        <Card.Footer>
                            <Button>Register</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>

            <PlaceContentCenter>
                <Counter initialValue={10} />
                <Card>
                    <Card.Title>Sign up for new account</Card.Title>
                    <form onSubmit={submit}>
                        <Card.Body>
                            <div className={'mb-5 border rounded-lg p-4'}>
                                <p>Name : {form.name || '-----'}</p>
                                <p>Email : {form.email || '-----'}</p>
                            </div>
                            <div className={'mb-6'}>
                                <Label htmlFor='name' value={'Name'} />
                                <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                            </div>
                            <div className={'mb-6'}>
                                <Label htmlFor='email' value={'Email'} />
                                <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button className={'bg-black'}>
                                <IconBrandGithub />
                                Register
                            </Button>
                        </Card.Footer>
                    </form>
                </Card>
            </PlaceContentCenter>
            <PlaceContentCenter>
                <Todo />
            </PlaceContentCenter>
            <PlaceContentCenter>
                <Card>
                    <Card.Title>useRef Hooks</Card.Title>
                    <Card.Body>
                        <Input placeholder={'email'} isFocused className={'border border-slate-500'} />
                        <Input placeholder={'password'} className={'border border-slate-500'} />
                        <Button onClick={handleClick}>Tick</Button>
                    </Card.Body>
                    {/* <Card.Footer>You clicked {tick.current} times.</Card.Footer> */}
                </Card>
            </PlaceContentCenter>
            <PlaceContentCenter>
                <Card>
                    <Card.Title>Users : {users.length}</Card.Title>
                    <Card.Body>
                        {loading ? (
                            <div>Loading brooo...</div>
                        ) : (
                            <ol>
                                {users.map((user) => (
                                    <li key={user.id}>
                                        {user.name} - {user.username}
                                    </li>
                                ))}
                            </ol>
                        )}
                    </Card.Body>
                </Card>
            </PlaceContentCenter>
            <PlaceContentCenter>
                <Card>
                    <Card.Title>Joke</Card.Title>
                    <Card.Body>
                        <p className={'mb-4'}>
                            {jokes.value}
                        </p>
                        <Input ref={namaRef} />
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={generateJoke}>Generate a Joke</Button>
                    </Card.Footer>
                </Card>
            </PlaceContentCenter>
        </>
    );
};

const Title = () => {
    <>
        <h1>Hello World</h1>
        <h4>Hello World</h4>
    </>;
};

export default App;
