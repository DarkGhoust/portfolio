import React from "react"
import Glitch from "./Glitch"
import "../css/glitch.css"

function VerticalGlitch({text}){
    const phrases = ["REACT", "CSS", "HTML", "LARAVEL", "PHP", "JS", "作成する", "維持する", "発達", "導入", "問題を解決する", "アイデアを提供する" ]
    const [currentText, setCurrentText] = React.useState("REACT")

    const randomPhrase = () =>{
        return phrases[Math.floor(Math.random()*phrases.length)]
    }

    React.useEffect(()=>{
        
    }, [])

    setTimeout(() => {
        setCurrentText(randomPhrase())
    }, 3000);

    return(
        <div className="vertical_glitch">
            <Glitch text={currentText} />
        </div>
    )
}

export default VerticalGlitch