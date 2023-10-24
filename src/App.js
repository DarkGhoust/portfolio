import Menu from "./components/Menu"
import AppRoutes from "./components/AppRoutes"
import VerticalGlitch from "./components/VerticalGlitch"

function App() {
	return (
		<>
			<header>
				<h1>Andrii Oleniuk</h1>
				<p className="light-text monospace">Full stack developer</p>
				<Menu />
			</header>
			<main>
				<div className="glitch_container">
					<span className="light-text monospace">Skills</span>
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
