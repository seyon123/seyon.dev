import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact component={""} />
        <Route path='/about' component={""} />
        <Route path='/skills' component={""} />
        <Route path='/projects' component={""} />
        <Route path='/contact' component={""} />
        <Route path='/resume' component={""} />
      </Routes>
    </Router>
  );
}

export default App;
