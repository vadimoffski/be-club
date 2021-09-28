import React from 'react'
import './Main.css'
import mainPicture from './images/home-pic1.jpg'
import postcard1 from './images/postcard/pic-1.jpg'
import postcard2 from './images/postcard/pic-2.jpg'
import postcard3 from './images/postcard/pic-3.jpg'
import postcard4 from './images/postcard/pic-4.jpg'
import postcard5 from './images/postcard/pic-5.jpg'
import postcard6 from './images/postcard/pic-6.jpg'

const Main = () => {
    return (
        <>
            <main className="page">
                <div className="page__main-block main-block">
                    <div className="main-block__container _container">
                        <div className="main-block__body">
                            <h1 className="main-block__title">Make Clubbing</h1>
                            <div className="main-block__text">Great Again!</div>
                            <div className="main-block__buttons">
                                <a href="/" className="main-block__button">
                                    More about us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="main-block__image _ibg">
                        <img src={mainPicture} alt="home-pic1" />
                    </div>
                </div>
                <div className="page__postcards postcards">
                    <div className="postcards__container _container">
                        <div className="postcards__body">
                            <div className="postcards__row">
                                <div className="postcards__item blog-item">
                                    <div className="blog-item__image blog-image">
                                        <a href="/">
                                            <img
                                                src={postcard1}
                                                alt="pic-1"
                                                className="blog-image__scale"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-item__date blog-date">
                                        <div className="blog-date__desc">
                                            February 6, 2019
                                        </div>
                                        <h2 className="blog-item__title blog-title">
                                            <a
                                                href="/"
                                                className="blog-title__link"
                                            >
                                                QUISQUE FACILISIS NEC CONGUE
                                                PORTA
                                            </a>
                                        </h2>
                                        <div className="blog-item-desc">
                                            Morbi scelerisque malesuada enim sit
                                            amet sollicitudin cras
                                        </div>
                                    </div>
                                    <div className="blog-item__footer blog-foo">
                                        <div className="blog-foo__categorie categorie">
                                            <a
                                                href="/"
                                                className="categorie__link"
                                            >
                                                Popular
                                            </a>
                                        </div>
                                        <div className="blog-foo__btn">
                                            <button className="favorite-btn">
                                                <span className="noliked"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="postcards__item blog-item">
                                    <div className="blog-item__image blog-image">
                                        <a href="/">
                                            <img
                                                className="blog-image__scale"
                                                src={postcard2}
                                                alt="pic-2"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-item__date blog-date">
                                        <div className="blog-date__desc">
                                            February 6, 2019
                                        </div>
                                        <h2 className="blog-item__title blog-title">
                                            <a
                                                href="/"
                                                className="blog-title__link"
                                            >
                                                QUISQUE FACILISIS NEC CONGUE
                                                PORTA
                                            </a>
                                        </h2>
                                        <div className="blog-item-desc">
                                            Fusce volutpat tincidunt ex mauris
                                            vitae porttitor metus
                                        </div>
                                    </div>
                                    <div className="blog-item__footer blog-foo">
                                        <div className="blog-foo__categorie categorie">
                                            <a
                                                href="/"
                                                className="categorie__link"
                                            >
                                                Popular
                                            </a>
                                        </div>
                                        <div className="blog-foo__btn">
                                            <button className="favorite-btn">
                                                <span className="noliked"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="postcards__item blog-item">
                                    <div className="blog-item__image blog-image">
                                        <a href="/">
                                            <img
                                                className="blog-image__scale"
                                                src={postcard3}
                                                alt="pic-3"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-item__date blog-date">
                                        <div className="blog-date__desc">
                                            February 6, 2019
                                        </div>
                                        <h2 className="blog-item__title blog-title">
                                            <a
                                                href="/"
                                                className="blog-title__link"
                                            >
                                                QUISQUE FACILISIS NEC CONGUE
                                                PORTA
                                            </a>
                                        </h2>
                                        <div className="blog-item-desc">
                                            Duis condimentum malesuada conguen
                                            nulla ultrices nunc a augue.
                                        </div>
                                    </div>
                                    <div className="blog-item__footer blog-foo">
                                        <div className="blog-foo__categorie categorie">
                                            <a
                                                href="/"
                                                className="categorie__link"
                                            >
                                                Popular
                                            </a>
                                        </div>
                                        <div className="blog-foo__btn">
                                            <button className="favorite-btn">
                                                <span className="noliked"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="postcards__item blog-item">
                                    <div className="blog-item__image blog-image">
                                        <a href="/">
                                            <img
                                                className="blog-image__scale"
                                                src={postcard4}
                                                alt="pic-4"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-item__date blog-date">
                                        <div className="blog-date__desc">
                                            February 6, 2019
                                        </div>
                                        <h2 className="blog-item__title blog-title">
                                            <a
                                                href="/"
                                                className="blog-title__link"
                                            >
                                                QUISQUE FACILISIS NEC CONGUE
                                                PORTA
                                            </a>
                                        </h2>
                                        <div className="blog-item-desc">
                                            Morbi scelerisque malesuada enim sit
                                            amet sollicitudin cras
                                        </div>
                                    </div>
                                    <div className="blog-item__footer blog-foo">
                                        <div className="blog-foo__categorie categorie">
                                            <a
                                                href="/"
                                                className="categorie__link"
                                            >
                                                Popular
                                            </a>
                                        </div>
                                        <div className="blog-foo__btn">
                                            <button className="favorite-btn">
                                                <span className="noliked"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="postcards__item blog-item">
                                    <div className="blog-item__image blog-image">
                                        <a href="/">
                                            <img
                                                className="blog-image__scale"
                                                src={postcard5}
                                                alt="pic-5"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-item__date blog-date">
                                        <div className="blog-date__desc">
                                            February 6, 2019
                                        </div>
                                        <h2 className="blog-item__title blog-title">
                                            <a
                                                href="/"
                                                className="blog-title__link"
                                            >
                                                QUISQUE FACILISIS NEC CONGUE
                                                PORTA
                                            </a>
                                        </h2>
                                        <div className="blog-item-desc">
                                            Fusce volutpat tincidunt ex mauris
                                            vitae porttitor metus.
                                        </div>
                                    </div>
                                    <div className="blog-item__footer blog-foo">
                                        <div className="blog-foo__categorie categorie">
                                            <a
                                                href="/"
                                                className="categorie__link"
                                            >
                                                Popular
                                            </a>
                                        </div>
                                        <div className="blog-foo__btn">
                                            <button className="favorite-btn">
                                                <span className="noliked"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="postcards__item blog-item">
                                    <div className="blog-item__image blog-image">
                                        <a href="/">
                                            <img
                                                className="blog-image__scale"
                                                src={postcard6}
                                                alt="pic-6"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-item__date blog-date">
                                        <div className="blog-date__desc">
                                            February 6, 2019
                                        </div>
                                        <h2 className="blog-item__title blog-title">
                                            <a
                                                href="/"
                                                className="blog-title__link"
                                            >
                                                QUISQUE FACILISIS NEC CONGUE
                                                PORTA
                                            </a>
                                        </h2>
                                        <div className="blog-item-desc">
                                            Duis condimentum malesuada conguen
                                            nulla ultrices nunc a augue
                                        </div>
                                    </div>
                                    <div className="blog-item__footer blog-foo">
                                        <div className="blog-foo__categorie categorie">
                                            <a
                                                href="/"
                                                className="categorie__link"
                                            >
                                                Popular
                                            </a>
                                        </div>
                                        <div className="blog-foo__btn">
                                            <button className="favorite-btn">
                                                <span className="noliked"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
