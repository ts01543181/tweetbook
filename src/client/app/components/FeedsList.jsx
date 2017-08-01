import React from 'react'
import FeedsListEntry from './FeedsListEntry.jsx'

//each post should have a user data in it


const FeedsList = ({ feeds, user }) => {

    return (
        <ul className="feed-list-container">
        {
            feeds.map((feed) => {
                return <FeedsListEntry feed={feed} user={user} className="feed"/>
            })
        }
        </ul>
    )
}


export default FeedsList