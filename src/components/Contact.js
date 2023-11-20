import HoverableLink from "./HoberableLink"

function Contact(){
    return(
        <>
            <span className="light-text">
                <HoverableLink to="mailto:darkghoust10@gmail.com" text="Email ↗"/>
            </span>
            <span className="light-text">
                <HoverableLink to="https://www.linkedin.com/in/andrii-oleniuk-3b0a3b170/" text="LinkedIn ↗"/>
            </span>
            <span className="light-text">
                <HoverableLink to="https://github.com/DarkGhoust" text="GitHub ↗"/>
            </span>
        </>
    )
}

export default Contact