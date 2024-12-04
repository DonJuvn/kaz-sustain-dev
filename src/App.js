import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./pages/Home";
import PageOne from "./pages/AboutUs";
import PageTwo from "./pages/pageTwo";
import PageThree from "./pages/pageThree";

import "./App.css";

function App() {
   return (
      <Router>
         <div className="App">
            <Menu />
            <About />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<PageOne />} />
               <Route path="/guide" element={<PageTwo />} />
               <Route path="/activity" element={<PageThree />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
