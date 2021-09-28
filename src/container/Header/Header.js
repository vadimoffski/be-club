import React from 'react'
import './Header.css'
import logo from './images/logo.png'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__container _container">
                    <a href="/" className="header__logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="/" className="menu__link">
                                    Home
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link">
                                    Categories
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link">
                                    About
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link">
                                    Contact
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/" className="menu__link favorite">
                                    Favorites
                                    <span className="favorite__liked"></span>
                                    <span className="favorite__count"> 0</span>
                                </a>
                            </li>
                        </ul>
                        <div className="nav-mobile-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
