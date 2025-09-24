import "./App.css";
import Header from "./components/Header";
import ForecastCard from "./components/ForecastCard";
import ForecastTable from "./components/ForecastTable";
function App() {
	function handleSearch() {}
	return (
		<>
			<form onSubmit={handleSearch} id="search-form">
				<input type="text" name="" id="search-input" />
				<button id="search-button">Search</button>
			</form>
			<Header />
			<ForecastCard />
			<ForecastTable />
		</>
	);
}

export default App;
