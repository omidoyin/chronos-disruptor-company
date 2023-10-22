// import logo from './logo.svg';
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import Projects from "./componets/Projects";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import ProjectDetails from "./componets/ProjectDetails";
import Experience from "./componets/Experience";
import ScrollToTop from "./componets/ScrollToTop";

// TO BE ADDED TO THE PACKAGE JSON BEFORE THE DEPENDENCIES FOR GITHUB PAGES DEPLOY
// "homepage": "https://omidoyin.github.io/My_Portfolio",
function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;
