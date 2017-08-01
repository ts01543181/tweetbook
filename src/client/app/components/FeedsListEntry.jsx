import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Comments from './Comments.jsx'
import $ from 'jquery'


class FeedsListEntry extends Component{

    constructor(props) {
        super()
        this.state = {
            comments: [],
            profilePicture: '',
            inputVal: '',
            originalPo: ''
        }
        this.submitComment = this.submitComment.bind(this)
        this.showComment = this.showComment.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.hideComment = this.hideComment.bind(this)
    }


    componentWillMount() {
        axios.get(`/api/tweets/comments/${this.props.feed.user}`)
        .then(({data}) => {
            this.setState({
                profilePicture: data.profilePicture,
                originalPo: data
            })
        })
        
    }

    submitComment() {
        console.log('fired')
        let comment = this.state.inputVal
        if (comment.length > 0) {
            //remember to parse it when you get back from server
            let feed = {
                comment,
                feed: this.props.feed,
                user: this.props.user.username
            }
            
            axios.post('/api/tweets/comments', feed)
            .then(({data}) => {
                let comments = data.comments.split(',').slice(1)
                this.setState({
                    comments
                })
            })
        }
        
    }

    hideComment(){
        this.setState({
            comments:[]
        })
    }

    showComment() {  
        axios.get(`/api/tweets/showComments/${this.props.feed.id}`)
        .then(({data}) => {
            this.setState({
                comments: data
            })
        })
    }

    updateInput(val) {
        this.setState({
            inputVal: val
        })
    }

    render() {
        return (
            <div className="tweet-container">
                <Link to={{pathname: '/profile',user: this.state.originalPo}}>
                <img src={this.state.profilePicture} className="tweet-image" onClick={this.showProfile}/>
                </Link>
                <li className="feed-list-entry">{this.props.feed.user}: <br/>
                {this.props.feed.message}<br/>
                </li>
                <button className="show-comment" onClick={this.showComment}>Show Comments</button>
                <button className="hide-comment" onClick={this.hideComment}>Hide Comment</button><br/>
                <input type="text" placeholder="write a comment..." className="comment-field" 
                onChange={(e) => {
                    this.updateInput(e.target.value)
                }} onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        this.submitComment()
                        e.target.value = ''
                    }

                }}/>
                <Comments commentList={this.state.comments} />
            </div>
        )
    }
}









export default FeedsListEntry