import React from 'react'
import './Footer.css'

import linkedin from './images/icon-1.png'
import behance from './images/icon-2.png'
import facebook from './images/icon-3.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__top">
                    <div className="footer__main _container">
                        <div className="subscribe__column">
                            <h3 className="subscribe__title">
                                Subscribe to our Blog
                            </h3>
                            <p className="subscribe__text">
                                Sign up for free and be the first to get
                                notified about new posts.
                            </p>
                            <form action="#" className="subscribe__form">
                                <input
                                    type="email"
                                    className="subscribe__input"
                                    placeholder="Your e-mail"
                                />
                                <button
                                    type="submit"
                                    name="submit"
                                    className="subscribe__btn"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <nav className="footer__menu">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <a href="/" className="footer__link">
                                            <img
                                                src={linkedin}
                                                alt="linkedin"
                                            />
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="/" className="footer__link">
                                            <img src={behance} alt="behance" />
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="/" className="footer__link">
                                            <img
                                                src={facebook}
                                                alt="facebook"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer__buttom">
                    <div className="footer__container _container">
                        <div className="copyright">
                            © 2021 Betheme by
                            <a href="https://muffingroup.com">Muffin group</a>|
                            All Rights Reserved | Powered by
                            <a href="https://wordpress.org">WordPress</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
