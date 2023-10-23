import Menu from "./components/Menu"
import AppRoutes from "./components/AppRoutes"

function App() {
	return (
		<>
			<header>
				<h1>Andrii Oleniuk</h1>
				<h2>Full stack developer</h2>
				<Menu />
			</header>
			<main>
				<AppRoutes />
			</main>
		</>
	)
}

export default App
