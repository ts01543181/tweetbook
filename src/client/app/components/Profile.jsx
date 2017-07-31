import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import FeedsList from './FeedsList.jsx'



class Profile extends Component {
    constructor(props) {
        super()
        this.state = {
            userTweets: [],
            userImage: ''
        }
        this.submitPost = this.submitPost.bind(this)
        this.handleImageUpload = this.handleImageUpload.bind(this)
    }

    componentWillMount() {
        axios.get(`/api/user/${this.props.location.user.username}`)
        .then(messageData => {
            axios.get(`/api/user/img/${this.props.location.user.username}`)
            .then(userData => {
                console.log(messageData, userData)
                this.setState({
                    userTweets: messageData.data,
                    userImage: userData.data.profilePicture
                })
            })
        })
    }

    handleImageUpload(e) {
        let reader = new FileReader()
        let currentFile = e.target.files[0]
        
        reader.onloadend = () => {
            let user = {
                username: this.props.location.user.username,
                imgURL: String(reader.result)
            }
            
            axios.post(`/api/user/img`, user)
            .then(data => {
                this.setState({
                    userImage: reader.result
                })
            })
        }

        reader.readAsDataURL(currentFile)
    }

    submitPost() {


    }


    render() {

        let name = this.props.location.user.username
        // let pic = this.props.location.user.img
        return (
            <div id="profile-container">
                <h1>{name}</h1>
                <div>
                    {
                        this.state.userImage ? <img src={this.state.userImage} alt="success" /> 
                        : 
                        <div>
                            <h3>Upload Your Imaged</h3>
                            <input type="file" onChange={(e) => this.handleImageUpload(e)}/>
                            <button onClick="">Upload</button>
                        </div>
                    }
                </div>
                <div>
                    post something
                    <input type="text" id="userInput"/><button onClick={this.submitPost}>Post</button>
                </div>
                <FeedsList feeds={this.state.userTweets}/>
            </div>
        )
    }
}



export default Profile