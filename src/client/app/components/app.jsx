import React from 'react'
import {render} from 'react-dom'
import axios from 'axios'
import $ from 'jquery'
import FeedsList from './FeedsList.jsx'



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

  //this component should know who the current logged in user fomr Login component

  createNewFeed() {
    let feed = {
      user: 'fake user',
      message: $('#feedInput').val()
    }
    $('#feedInput').val('')

    axios.post('/api/tweets', feed)
    .then(data => {
      console.log(data)
      this.setState({feeds: data.data})
    })
  }


  render () {
    return (
      <div id="app-container">
        <h1>Twittler</h1>
        <h3>Welcome! Person</h3>

        <input type="text" placeholder="say something!" id="feedInput"/><button onClick={this.createNewFeed}>Post</button>
        <FeedsList feeds={this.state.feeds}/>
      </div>
    )
  }
}


export default App