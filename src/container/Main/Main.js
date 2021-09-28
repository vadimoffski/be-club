import React from 'react'
import './Main.css'
import mainPicture from './images/home-pic1.jpg'
import PostcardsList from '../../components/Postcards/PostcardsList'

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
                                <PostcardsList />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
