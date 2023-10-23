import React from "react"
import Glitch from "./Glitch"
import { Link } from "react-router-dom"

import "../css/menu.css"

function Menu(){
    const enableGlitch = (e) =>{
        e.target.innerHTML = <Glitch text={e.target.innerHTML}/>
    }

    return(
        <nav>
            <HoverableLink to="/" text="Home" />
            <HoverableLink to="/projects" text="Projects" />
            <HoverableLink to="/contacts" text="Contacts" />
        </nav>
    )
}

function HoverableLink({to, text}){
    const [isHovered, setIsHovered] = React.useState(false)

    return(
        <Link to={to} 
            onMouseEnter={() => { setIsHovered(true) }} 
            onMouseLeave={() => { setIsHovered(false) }}
        >{!isHovered ? text : <Glitch text={text}/> }</Link>
    )
}

export default Menu