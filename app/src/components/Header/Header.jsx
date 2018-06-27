import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {

    return (
        <header>
            <nav>
                <ul className="header">
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link className="link" to='/followers'>Followers</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;