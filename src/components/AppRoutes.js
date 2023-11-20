import { Routes, Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Projects from "./Projects"

function AppRoutes() {
	return (
		<>
            <Routes>
                <Route path="/portfolio/" element={<Home />}/>
                <Route path="/portfolio/contacts" element={<Contact />}/>
                <Route path="/portfolio/projects" element={<Projects />}/>
            </Routes>
		</>
	)
}

export default AppRoutes


