import React from 'react'
import PostcardsListItem from './PostcardListItem/PostcardsListItem'
import postcardsArray from './postcardsArray'

const PostcardsList = () => {
    return (
        <>
            {postcardsArray.map(
                ({ id, image, pubDate, title, desc, category }) => (
                    <div className="postcards__item blog-item" key={id}>
                        <PostcardsListItem
                            image={image}
                            pubDate={pubDate}
                            title={title}
                            desc={desc}
                            category={category}
                        />
                    </div>
                )
            )}
        </>
    )
}
export default PostcardsList
