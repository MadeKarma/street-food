import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOld from "./pages/HomeOld";
import Home from "./pages/HomeNew";
import Header from "./component/Navbar";
import About from "./pages/About";
// import Search from "./component/Search";
import DetailCategory from "./pages/DetailCategory";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/food/:strCategory" element={<DetailCategory />} /> */}
          {/* <Route path="/meal/:idMeal" /> */}
        </Routes>
      </Router>
    </div>
  );
}
