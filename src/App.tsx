import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOld from "./pages/HomeOld";
import Home from "./pages/HomeNew";
import Navbar from "./component/Navbar";
import About from "./pages/About";
// import Search from "./component/Search";
import DetailCategory from "./pages/DetailCategory";
import DetailMeal from "./pages/DetailMeal";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/food/:strCategory" element={<DetailCategory />} /> */}
          <Route path="/meal/:idMeal" element={<DetailMeal />} />
        </Routes>
      </Router>
    </div>
  );
}
