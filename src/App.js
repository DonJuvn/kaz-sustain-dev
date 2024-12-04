import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Potential from "./components/potential";

function App() {
   return (
      <div className="App">
         <Menu />
         <About />
         <Potential />
      </div>
   );
}

export default App;
