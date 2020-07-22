import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => (
        <header>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/roster'>Roster</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </div>
        </header>
)

// above links with render the components on client side.
export default Header;