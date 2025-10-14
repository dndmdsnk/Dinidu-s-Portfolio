import react from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <div>
        <Toaster position='top-center'/>

          <Routes path="/*">
            <Route path="/projects" element={<Projects/>} />
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
