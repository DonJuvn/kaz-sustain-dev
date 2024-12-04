import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./pages/Home";
import PageOne from "./pages/pageOne";
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
               <Route path="/page-one" element={<PageOne />} />
               <Route path="/page-two" element={<PageTwo />} />
               <Route path="/page-three" element={<PageThree />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
