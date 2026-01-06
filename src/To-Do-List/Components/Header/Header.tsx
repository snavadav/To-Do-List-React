import { TitleBar } from './TitleBar';
import { NavBar } from './NavBar';


export const Header = () => {
    return (
        <div>
            <header className='header'>
                <TitleBar title='To-do-list' />
                <NavBar />
            </header>
        </div>
    );
};

