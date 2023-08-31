import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Use 'element' instead of 'component' */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
