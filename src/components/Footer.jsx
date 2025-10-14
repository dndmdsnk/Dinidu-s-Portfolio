import { FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black
    backdrop-blur-md border-t border-white/10 text-white py-12 px-6 sm:px-16 md:px-24 lg:px-32">
      
      {/* Gradient accent line */}
     

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-lg">Contact Me</h2>
          <p className="text-white/80 text-sm md:text-base">Email: <a href="mailto:dndmdsnk@gmail.com" className="hover:text-sky-400 transition-colors duration-300">dndmdsnk@gmail.com</a></p>
          <p className="text-white/80 text-sm md:text-base">Phone: <a href="tel:+94704335931" className="hover:text-sky-400 transition-colors duration-300">+94 70 433 5931 </a></p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-lg">Follow Me</h2>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/dndmdsnk" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/share/16tR5kE8ph/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & copyright */}
      <div className="mt-10 border-t border-white/40 pt-6 text-center text-white/80 text-sm">
        &copy; {new Date().getFullYear()} Dinidu Madusanka. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
