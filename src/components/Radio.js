import React from "react"

import "../css/radio.css"

function Radio({isChecked}){
    return(
        <label className="radio_container">
            <input type="radio" checked={isChecked}/>
            <span class="checkmark"></span>
        </label>
    )
}

export default Radio