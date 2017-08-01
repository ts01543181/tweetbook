import React from 'react'
import CommentEntry from './CommentsEntry.jsx'
import axios from 'axios'

const Comments = ({ commentList }) => {

    
    return (
        <ul className="comment-container">

            {
                commentList.map(entry => {
                    entry = entry.split(':')
                    let user = entry[0]
                    let userComment = entry[1]
                    return <CommentEntry username={user} userComment={userComment}/>
                })
            }
        </ul>
    )
}


export default Comments