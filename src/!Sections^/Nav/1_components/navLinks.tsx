import ActiveLink from './ActiveLink';

const Nav2 = () => (
    <nav>
        <style jsx>{`
            .nav-link {
                text-decoration: none;
            }
        `}</style>
        <ul className='nav'>
            <li>
                <ActiveLink activeClassName='active' href='/'>
                    <a className='nav-link'>Fire</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName='active' href='/about'>
                    <a className='nav-link'>Chirps</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName='active' href='/blog'>
                    <a className='nav-link'>Categories</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName='active' href='/[slug]' as='/dynamic-route'>
                    <a className='nav-link'>Circles</a>
                </ActiveLink>
            </li>
        </ul>
    </nav>
);

export default Nav2;
