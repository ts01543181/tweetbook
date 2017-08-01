import React, { Component } from 'react'
import axios from 'axios'

class CommentEntry extends Component {
    constructor(props) {
        super()
        this.state = {
            pic: ''
        }
    }
    
    componentWillMount() {
        axios.get(`/api/tweets/comments/${this.props.username}`)
        .then(({data}) => {
            this.setState({
                pic: data.profilePicture
            })
        })
    }

    showProfile() {
        
    }

    render() {
    
        return (
            <li className="comment-entry">
                <img src={this.state.pic} className="comment-profile" onClick={this.showProfile}/>
                {this.props.userComment}
            </li>
        )
    }
}

export default CommentEntry