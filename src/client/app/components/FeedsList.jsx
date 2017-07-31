import React from 'react'
import FeedsListEntry from './FeedsListEntry.jsx'


const FeedsList = ({ feeds }) => {

    return (
        <ul>
        {
            feeds.map((feed) => {
                return <FeedsListEntry feed={feed}/>
            })
        }
        </ul>
    )
}


export default FeedsList