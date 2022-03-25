import logo from "./logo.svg";
import "./App.css";
import Login from "./components/containers/pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import POS from "./components/containers/pages/pos/pos";
import { Pages } from "./common/constantUtilities";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path={Pages.Login} element={<Login />} />
					<Route path={Pages.POS} element={<POS />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
