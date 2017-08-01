import React, {Component} from 'react'
import axios from 'axios'
import $ from 'jquery'

class Signup extends Component {
    constructor(props) {
        super(props)
        
        this.signUp = this.signUp.bind(this)
    }

    signUp() {
        let sn = $('#username').val()
        let pw = $('#password').val()
        
        if(sn === '' || pw === '') {
            return
        }

        $('#username').val('')
        $('#password').val('')
        let user = {username:sn, password:pw}

        axios.post('/api/signup', user)
        .then((data) => {
            if (data.data === 'success') {
                alert('Your account was created successfully!')
                this.props.history.push('/login')
            } else {
                alert('The username has been taken')
                
            }
        })
    }

    render() {
        return  (
            <div>
                <h2 className="title">TweetBook</h2>
                <div className="signup-container">
                <div><span>Username</span><input type="text" id="username"/></div>
                <div><span>Password</span><input id="password" type="password"/></div>
                <button onClick={this.signUp}>Create Account</button>
                </div>
            </div>
        )
    }
}


export default Signup