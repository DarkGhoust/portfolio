import React from "react"
import { Link } from "react-router-dom"

function Menu(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/bio">Bio</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
        </nav>
    )
}

export default Menu