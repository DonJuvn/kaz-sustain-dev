import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Potential from "./components/potential";
import Team from "./components/team";
import Guide from "./components/guide";

function App() {
   return (
      <div className="App">
         <Menu />
         <About />
         <Potential />
         <Guide />
         <Team />
      </div>
   );
}

export default App;
