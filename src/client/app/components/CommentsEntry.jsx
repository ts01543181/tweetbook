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


    render() {
    
        return (
            <li>
                <img src={this.state.pic} className="comment-profile"/>
                {this.props.userComment}
            </li>
        )
    }
}

export default CommentEntry