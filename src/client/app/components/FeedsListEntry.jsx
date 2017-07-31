import React from 'react'

const FeedsListEntry = ({ feed }) => {
    return (
        <li>{feed.user}: <br/>
        {feed.message}</li>
    )
}









export default FeedsListEntry