import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './app.jsx'

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/> */}
                    <Route exact path="/" component={App}/>
                </Switch>
            </BrowserRouter>
        )
    }
}



export default Main