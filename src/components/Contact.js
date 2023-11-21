import HoverableTargetLink from "./HoverableTargetLink"

function Contact(){
    return(
        <>
            <span className="light-text spacer">
                <HoverableTargetLink to="mailto:darkghoust10@gmail.com" text="Email ↗"/>
            </span>
            <span className="light-text spacer">
                <HoverableTargetLink to="https://www.linkedin.com/in/andrii-oleniuk-3b0a3b170/" text="LinkedIn ↗"/>
            </span>
            <span className="light-text spacer">
                <HoverableTargetLink to="https://github.com/DarkGhoust" text="GitHub ↗"/>
            </span>
        </>
    )
}

export default Contact