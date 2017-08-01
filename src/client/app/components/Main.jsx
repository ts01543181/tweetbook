import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './app.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Profile from './Profile.jsx'
import Nav from './Nav.jsx'

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={Signup}/> 
                    <Route exact path="/home" component={App}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/nav" component={Nav} />
                </Switch>
            </BrowserRouter>
        )
    }
}



export default Main