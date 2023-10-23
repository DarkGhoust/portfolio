import "../css/glitch.css"

function Glitch({text}){
    return(
        <span className="glitch layers" data-text={text}>
            <span>{text}</span>
        </span>
    )
}

export default Glitch