import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from './../../img/svgs/logo.svg'

function Header() {
    const [active, setActive] = useState('nav_menu');
    const navToggle = () => {
        active === 'nav_menu'
            ? setActive('nav_menu nav_active')
            : setActive('nav_menu');
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header_logo">
                        <a href="@"><img src={logo} alt="Logo" /></a>
                    </div>
                    <div className="navigation">
                        <ul className={active}>
                            <li><a href="#categories">CATEGORIES</a></li>
                            <li><a href="#drops">DROPPED OUT</a></li>
                            <li><a href="#footer">ABOUT US</a></li>
                        </ul>
                    </div>
                    <div onClick={navToggle} className='bx bx-menu' id="menu-icon"></div>
                </div>
            </div>
        </header>
    )
}

export default Header 