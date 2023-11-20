import React from "react"
import HoverableLink from "./HoberableLink"
import Radio from "./Radio"
import { Link } from "react-router-dom"

import "../css/menu.css"

function Menu(){
    const [buttons, setButtons] = React.useState([
        {
            name: "HOME",
            to: "/",
            isActive: true
        },
        {
            name: "PROJECTS",
            to: "/projects",
            isActive: false
        },
        {
            name: "CONTACTS",
            to: "/contacts",
            isActive: false
        },
    ])

    const changeActive = (id) =>{
        const newButtons = buttons.map(item => {
            item.isActive = false
            return item
        })
        newButtons[id].isActive = true
        setButtons(newButtons)
    }

    const buttonsHTML = buttons.map((item, id) => 
        <Link to={item.to} onClick={ () => {changeActive(id)} }>
            <Radio isChecked={item.isActive} />
            <HoverableLink to={item.to} text={item.name} />
        </Link>
    )

    return(
        <nav className="monospace">
            {buttonsHTML}
        </nav>
    )
}

export default Menu