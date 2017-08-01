import React, { Component }from 'react'
import { Route, Link } from 'react-router-dom'


const Nav = (props) => {

    
    return (
        <div id="nav-bar">
            <ul>
                props.links.map(link => <NavLink link={link}/>)
            </ul>
        </div>
    )
}

export default Nav