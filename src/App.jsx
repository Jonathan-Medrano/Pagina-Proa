import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pathway from "./pages/Pathway.jsx";
import News from "./pages/News.jsx";
import Courses from "./pages/Courses.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pathway" element={<Pathway />} />
        <Route path="/news" element={<News />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
