import React, {Component} from 'react'
import axios from 'axios'
import {Redirect,Link, withRouter} from 'react-router-dom'
import $ from 'jquery'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authenticated:false
        }
        this.checkCredentials = this.checkCredentials.bind(this)
    }

    checkCredentials() {
        let sn = $('#username').val()
        let pw = $('#password').val()
        
        if(sn === '' || pw === '') {
            return
        }
        $('#username').val('')
        $('#password').val('')
        let user = {username:sn, password:pw}
        axios.post('/api/login', user)
        .then(({data}) => {
            if (data) {
                this.props.history.push('/home', {data})
            } else {
                alert('wrong username or password')
            }
        })
    }


    render() {
        return (
            <div>
                <span>Username</span><input id="username" type="text"/>
                <span>Password</span><input id="password" type="password"/>
                <button onClick={this.checkCredentials}>Login</button>
            </div>
        )
    }
}

export default withRouter(Login)