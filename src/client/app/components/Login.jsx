import React, { Component }from 'react'

class Login extends Component {


    render() {
        return (
            <div id="login-container">
                <h2>Please log in to continue</h2>
                <input type="text" />
                <input type="password" />
                <button id="login">Login</button>
            </div>
        )
    }
}