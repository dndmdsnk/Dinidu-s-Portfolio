import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa"; // 🔥 Added icons for mobile menu

import sakura from "../assets/sakura.mp3";
import logo from "../assets/images/logo.png";
import { HomeInfo, Loader, TypewriterText } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";
import CV from "/Dinidu_CV.pdf" // Your CV file


const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 🍔 Mobile menu state

  useEffect(() => {
    if (isPlayingMusic) audioRef.current.play();
    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* 🌐 Top Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-white font-bold text-xl tracking-wide">DINIDU</h1>
         
        </div>
  


        {/* Desktop Links */}
        <div className="hidden sm:flex gap-8 items-center">
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-sky-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white text-lg font-medium hover:text-sky-400 transition-colors duration-300"
          >
            Projects
          </Link>
           
          <Link to="/contact" className="text-white hover:text-sky-400 transition-colors duration-300 font-medium text-lg">Contact</Link>
          <button 
           className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-md hover:scale-105"><a href={CV} download='CV'>Download CV</a></button>

          <a
            href="https://github.com/dndmdsnk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-sky-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* 📱 Mobile Dropdown Menu */}
      <div
        className={`sm:hidden absolute top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-white">
          <Link
            to="/about"
            className="text-lg hover:text-sky-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-lg hover:text-sky-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link to="/contact" className="text-lg hover:text-sky-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <button 
           className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-md hover:scale-105"><a href={CV} download='CV' onClick={() => setIsMenuOpen(false)}>Download CV</a></button>

          <a
            href="https://github.com/dndmdsnk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-sky-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* 🌸 Home Info Overlay */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* 🎨 3D Scene */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* 🎵 Music Control */}
      <div className="absolute bottom-3 left-3 z-50">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
      
    </section>
    
  );
};

export default Home;
