import HoverableLink from "./HoberableLink"

function Projects(){
    return(
        <>
            <h2>Pet projects</h2>
            <ul>
                <li className="light-text"><HoverableLink to="#" text="Nonogram ↗"/></li>
            </ul>
            <hr className="spacer"/>
            <h2>Work projects</h2>
            <ul>
                <li>Website for ordering assets <p className="light-text monospace">(Laravel, SQL, React)</p></li>
                <li>Web games for offline events <p className="light-text monospace">(Node.js, MongoDB, React)</p></li>
                <li>File uploader using Google drive API <p className="light-text monospace">(React)</p></li>
                <li>Interactive books <p className="light-text monospace">(JS, CSS, HTML)</p></li>
                <li>Landing pages <p className="light-text monospace">(Wordpress)</p></li>
            </ul>
        </>
    )
}

export default Projects