import React from 'react'
import {render} from 'react-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import FeedsList from './FeedsList.jsx'
import Nav from './Nav.jsx'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      feeds: []
    }
    this.createNewFeed = this.createNewFeed.bind(this)
  }

  componentWillMount() {
    axios.get('/api/tweets')
    .then(data => this.setState({feeds: data.data}))
  }

  createNewFeed() {
    let feed = {
      user: this.props.location.state.data.username,
      message: $('#feedInput').val()
    }
    $('#feedInput').val('')

    axios.post('/api/tweets', feed)
    .then(data => {
      this.setState({feeds: data.data})
    })
  }


  render () {
    let userInfo = {
      pathname: '/profile',
      user: this.props.location.state.data
    }
    
    return (
      <div id="app-container">
        <h1>Welcome to TweetBook</h1>
        {/* <Nav user={this.props.location.state.data}/> */}
         <Link to={userInfo}><button id="profile-button">Profile</button></Link>

        <input type="text" placeholder="say something!" id="feedInput"/><button onClick={this.createNewFeed}>Post</button>
        <FeedsList feeds={this.state.feeds} user={userInfo.user} className="feed-list"/>
        
      </div>
    )
  }
}


export default App