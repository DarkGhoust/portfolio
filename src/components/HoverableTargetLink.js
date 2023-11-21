import React from "react"
import Glitch from "./Glitch"
import { Link } from "react-router-dom"


function HoverableTargetLink({to, text}){
    const [isHovered, setIsHovered] = React.useState(false)

    return(
        <a href={to} 
            target="_blank"
            onMouseEnter={() => { setIsHovered(true) }} 
            onMouseLeave={() => { setIsHovered(false) }}
        >{!isHovered ? text : <Glitch text={text}/> }</a>
    )
}

export default HoverableTargetLink