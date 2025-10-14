import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import bgVdeo from "../assets/videos/projectbg.mp4"; // your background video
import CV from "/Dinidu_CV.pdf";

const Projects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🧩 Project Data
  const projects = [
    {
      title: "Glow Theory Cosmetic Web Site With Admin Dashboard ",
      description:
        "A MERN Stack-based web application for listing and selling cosmetics.(Useremail: hernen23@gmail.com Password: hc23233)",
      tech: ["React", "Node.js","Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/dndmdsnk/CBC-backend.git",
      demo: "https://glow-theory-frontend-1n1p.vercel.app",
      image: "/p1.PNG",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Vite, and Three.js featuring interactive 3D elements and smooth animations.",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/dndmdsnk/portfolio",
      demo: "https://diniduportfolio.vercel.app",
      image: "/projects/portfolio.jpg",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and customers with a real-time data visualization system.",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/dndmdsnk/ecommerce-dashboard",
      demo: "https://ecommerce-dashboard-demo.vercel.app",
      image: "/projects/dashboard.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVdeo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-white font-bold text-xl tracking-wide">DINIDU</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-8 items-center">
          <Link to="/" className="text-white hover:text-sky-400 text-lg font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-sky-400 text-lg font-medium">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-sky-400 text-lg font-medium">
            Contact
          </Link>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-md hover:scale-105">
            <a href={CV} download="CV">Download CV</a>
          </button>
          <a
            href="https://github.com/dndmdsnk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-sky-400"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-white">
          <Link to="/" className="text-lg hover:text-sky-400" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-lg hover:text-sky-400" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="text-lg hover:text-sky-400" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-md hover:scale-105">
            <a href={CV} download="CV" onClick={() => setIsMenuOpen(false)}>
              Download CV
            </a>
          </button>
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

      {/* Project Section */}
      <div className="pt-28 pb-16 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center"
        >
          My Projects
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-5 shadow-lg flex flex-col hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-4 border border-white/20"
              />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-sky-600/30 text-sky-200 rounded-full border border-sky-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-lg bg-white/20 hover:bg-white/30 text-sky-300 font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
