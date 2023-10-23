import Menu from "./components/Menu"
import AppRoutes from "./components/AppRoutes"

function App() {
	return (
		<>
			<header>
				<h1>Andrii Oleniuk</h1>
				<h5>Full stack developer</h5>
				<Menu />
			</header>
			<main>
				<AppRoutes />
			</main>
		</>
	)
}

export default App
