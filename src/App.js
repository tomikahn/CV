import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";
import Navigation from "./components/Navigation";
import About from "./pages/About"

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Landing></Landing>
      <About></About>
    </>
  );
}

export default App;
