import React from 'react'
import './Main.css'
import PostcardsList from '../../components/Postcards/PostcardsList'
import SliderList from '../../components/Slider/SliderList'

const Main = () => {
    return (
        <>
            <main className="page">
                <SliderList />
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
