import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {
    const type = 'submit';
    const onClick = () => console.log('Login with another style');
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
