import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
	return (
		<Router>
			<ReactNotification className="notifications"/>
			<Routes>
				<Route
					path="/"
					exact
					element={
						<>
							<Header />
							<div className="content">
								<Home />
								<About />
								<Skills />
								<Projects />
								<Contact />
							</div>
							<Footer />
						</>
					}
				/>
				<Route path="/resume" element={<Resume />} />
				<Route path="*" element={<div className=""> Oops Looks like this page is empty try a different page! </div>} />
			</Routes>
		</Router>
	);
}

export default App;
