import React from 'react'
import PropTypes from 'prop-types'
import './PostcardsListItem.css'
const PostcardsListItem = ({ image, pubDate, title, desc, category }) => {
    return (
        <>
            <div className="blog-item__image blog-image">
                <a href="/">
                    <img
                        src={image}
                        alt="pic-1"
                        className="blog-image__scale"
                    />
                </a>
            </div>
            <div className="blog-item__date blog-date">
                <div className="blog-date__desc">{pubDate}</div>
                <h2 className="blog-item__title blog-title">
                    <a href="/" className="blog-title__link">
                        {title}
                    </a>
                </h2>
                <div className="blog-item-desc">{desc}</div>
            </div>
            <div className="blog-item__footer blog-foo">
                <div className="blog-foo__categorie categorie">
                    <a href="/" className="categorie__link">
                        {category}
                    </a>
                </div>
                <div className="blog-foo__btn">
                    <button className="favorite-btn">
                        <span className="noliked"></span>
                    </button>
                </div>
            </div>
        </>
    )
}

PostcardsListItem.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    pubDate: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    category: PropTypes.string,
}

PostcardsListItem.defaultProps = {
    desc: 'no desc',
}

export default PostcardsListItem
