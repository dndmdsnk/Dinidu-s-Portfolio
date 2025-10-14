import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiPostgresql,
  SiThreedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.png"; // Your logo
import { Loader } from "../components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Bird, Island, Plane, Sky } from "../models";
import bgVdeo from "../assets/videos/aboutbg.mp4"; // Your background video
import CV from "/Dinidu_CV.pdf"; // Your CV file
import avatar from "../assets/images/avatar.png";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timelineData = [
    {
      date: "2023 - Present",
      title: "MERN Stack Developer",
      desc: "Building web apps with React, Node.js, Express & MongoDB.",
      color: "bg-cyan-400",
    },
    {
      date: "2020 - 2023",
      title: "Lanka Nippon Biztec Institute",
      desc: "Undergraduate Computer Science Student",
      color: "bg-purple-500",
    },
  ];

  const skills = [
    { icon: <FaHtml5 />, color: "text-orange-500" },
    { icon: <FaCss3Alt />, color: "text-blue-500" },
    { icon: <FaJs />, color: "text-yellow-400" },
    { icon: <FaReact />, color: "text-cyan-400" },
    { icon: <FaNodeJs />, color: "text-green-500" },
    { icon: <SiTailwindcss />, color: "text-sky-400" },
    { icon: <SiMui />, color: "text-purple-400" },
    { icon: <SiMongodb />, color: "text-green-600" },
    { icon: <SiPostgresql />, color: "text-blue-700" },
    { icon: <SiThreedotjs />, color: "text-gray-700" },
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
        Your browser does not support the video tag.
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
          <Link
            to="/"
            className="text-white hover:text-sky-400 transition-colors duration-300 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-sky-400 transition-colors duration-300 font-medium text-lg"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-sky-400 transition-colors duration-300 font-medium text-lg "
          >
            Contact
          </Link>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-md hover:scale-105">
            <a href={CV} download="CV">
              Download CV
            </a>
          </button>
          <a
            href="https://github.com/dndmdsnk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-sky-400 transition-colors duration-300"
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
          <Link
            to="/"
            className="text-lg hover:text-sky-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg hover:text-sky-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-sky-400"
            onClick={() => setIsMenuOpen(false)}
          >
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

      {/* Content */}
      <div className="pt-28 px-6 sm:px-16 md:px-24 lg:px-32 pb-16 flex flex-col gap-16">
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl overflow-hidden"
        >
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-600/10 pointer-events-none"></div>

          {/* Avatar with glow */}
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-sky-400/30 rounded-full animate-pulse"></div>
            <img
              src={avatar}
              alt="Avatar"
              className="relative w-30 h-30 rounded-full border-4 border-white/40 shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="relative flex flex-col gap-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I'm <span className="text-sky-400">Dinidu Madusanka</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              <span className="text-sky-300 font-semibold">
                MERN Stack Developer
              </span>{" "}
              skilled in building dynamic, responsive web applications using{" "}
              <span className="text-purple-300">React</span>,{" "}
              <span className="text-cyan-300">Node.js</span>, and{" "}
              <span className="text-blue-300">Three.js</span>. Passionate about
              crafting visually stunning digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 flex flex-wrap justify-center gap-8 shadow-xl overflow-hidden"
        >
          {/* Light gradient background accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 to-transparent pointer-events-none"></div>

          <h3 className="w-full text-center text-white text-2xl font-bold mb-4">
            My <span className="text-sky-400">Tech Stack</span>
          </h3>

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.3,
                rotate: 5,
                boxShadow: "0 0 20px rgba(56,189,248,0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`${skill.color} text-5xl cursor-pointer transition-transform duration-300`}
            >
              {skill.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative flex flex-col gap-12"
        >
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 via-purple-500 to-pink-500 rounded-full"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative flex gap-6"
            >
              <div
                className={`relative w-5 h-5 rounded-full ${item.color} mt-2 flex-shrink-0 shadow-[0_0_20px] shadow-${item.color}/50`}
              ></div>
              <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <span className="text-white/80 text-sm">{item.date}</span>
                <p className="mt-2 text-white/90">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
