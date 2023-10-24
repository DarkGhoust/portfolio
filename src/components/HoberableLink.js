import React from "react"
import Glitch from "./Glitch"
import { Link } from "react-router-dom"


function HoverableLink({to, text}){
    const [isHovered, setIsHovered] = React.useState(false)

    return(
        <Link to={to} 
            onMouseEnter={() => { setIsHovered(true) }} 
            onMouseLeave={() => { setIsHovered(false) }}
        >{!isHovered ? text : <Glitch text={text}/> }</Link>
    )
}

export default HoverableLink