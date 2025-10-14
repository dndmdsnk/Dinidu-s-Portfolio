import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import bgVdeo from "../assets/videos/contactbg.mp4";
import CV from "/Dinidu_CV.pdf";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_EMAIL_ACCESS_KEY,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!", {
          style: {
            background: "rgba(17, 25, 40, 0.75)", // glassy dark blue background
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#E0F2FE", // light cyan text
            padding: "14px 18px",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "500",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          },
          iconTheme: {
            primary: "#38bdf8", // Tailwind sky-400
            secondary: "#0c1724", // deep navy contrast
          },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        
        toast.error("Failed to send message. Please try again.", {
          style: {
            background: "rgba(17, 25, 40, 0.75)", // glassy dark blue background
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#E0F2FE", // light cyan text
            padding: "14px 18px",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "500",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          },
          iconTheme: {
            primary: "#38bdf8", // Tailwind sky-400
            secondary: "#0c1724", // deep navy contrast
          },
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        style: {
          background: "rgba(17, 25, 40, 0.75)", // glassy dark blue background
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#E0F2FE", // light cyan text
          padding: "14px 18px",
          borderRadius: "12px",
          fontSize: "1rem",
          fontWeight: "500",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        },
        iconTheme: {
          primary: "#38bdf8", // Tailwind sky-400
          secondary: "#0c1724", // deep navy contrast
        },
      });
     
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
          <Link to="/projects" className="text-white hover:text-sky-400 text-lg font-medium">
            Projects
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
          <Link to="/projects" className="text-lg hover:text-sky-400" onClick={() => setIsMenuOpen(false)}>
            Projects
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

      {/* Contact Section */}
      <div className="pt-28 pb-16 px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">
            Contact Me
          </h2>
          <p className="text-center text-white/80 mb-6 text-sm sm:text-base">
            Have a question or a project idea? Let’s talk!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-white font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm resize-none"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <motion.button
            disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base transition-all duration-300 shadow-md"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
