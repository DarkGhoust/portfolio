import Menu from "./components/Menu"
import BgMatrix from "./components/BgMatrix"
import AppRoutes from "./components/AppRoutes"
import VerticalGlitch from "./components/VerticalGlitch"

function App() {
	return (
		<>
			<div className="header">
				<h1>Andrii Oleniuk</h1>
				<p className="light-text monospace">Full stack developer</p>
				<Menu />
			</div>
			<BgMatrix />
			<main>
				<div className="glitch_container">
					<span className="light-text monospace" style={{paddingLeft: "0.6em"}}>Skills</span>
					<VerticalGlitch text="Text"/>
				</div>
				<div className="routes_container">
					<div className="page d-flex f-column">
						<AppRoutes />
					</div>
				</div>
			</main>
		</>
	)
}

export default App
