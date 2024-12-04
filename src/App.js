import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Potential from "./components/potential";
import Team from "./components/team";
import Guide from "./components/guide";
import Commitet from "./components/commitet";
import Footer from "./components/footer";
import BgMain from "./components/bg-main";

function App() {
   return (
      <div className="App">
         <Menu />
         <About />
         <BgMain />
         <Potential />
         <Guide />
         <Team />
         <Commitet />
         <Footer />
      </div>
   );
}

export default App;
