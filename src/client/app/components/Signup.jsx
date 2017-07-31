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
        .then(({data}) => {
            if (data === 'success') {
                alert('Your account was created successfully!')
                this.props.history.push('/')
            } else {
                alert('The username has been taken')
                return
            }
        })
    }

    render() {
        return  (
            <div>
                <span>Username</span><input id="username" type="text"/>
                <span>Password</span><input id="password" type="password"/>
                <button onClick={this.signUp}>Create Account</button>
            </div>
        )
    }
}


export default Signup