import { Routes, Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Projects from "./Projects"

function AppRoutes() {
	return (
		<>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contacts" element={<Contact />}/>
                <Route path="/projects" element={<Projects />}/>
            </Routes>
		</>
	)
}

export default AppRoutes


