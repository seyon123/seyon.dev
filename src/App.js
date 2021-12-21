import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route
					path="/"
					exact
					element={
						<div className="content">
							<Home />
							<About />
							<Skills />
						</div>
					}
				/>
				<Route path="*" element={<>Oops Looks like this page is empty try a different page!</>} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
