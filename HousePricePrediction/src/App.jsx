import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CheckPrice from "./components/pages/CheckPrice";

function App() {
	return (
		<div>
			<BrowserRouter>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/checkprice" element={<CheckPrice />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
