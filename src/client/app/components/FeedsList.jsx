import React from 'react'
import FeedsListEntry from './FeedsListEntry.jsx'

//each post should have a user data in it


const FeedsList = ({ feeds, user }) => {

    return (
        <ul>
        {
            feeds.map((feed) => {
                return <FeedsListEntry feed={feed} user={user}/>
            })
        }
        </ul>
    )
}


export default FeedsList