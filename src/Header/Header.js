import React from 'react';
import './Header.scss';
import logo from './logo.svg'

const Header = () => {
    return (
        <header>
            <img className='logo' src={logo} alt='Logo for the BitLy Sailing Times Calculator 2022'/>
        </header>
    )
}

export default Header;