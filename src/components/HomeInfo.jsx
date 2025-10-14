import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { arrow } from "../assets/icons";
import { TypewriterText } from "../components";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const HomeInfo = ({ currentStage }) => {
  return (
    <div className="relative z-20 flex justify-center items-center">
      <AnimatePresence mode="wait">
        {currentStage === 1 && (
          <motion.div
            key="stage1"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="backdrop-blur-lg bg-gradient-to-br from-blue-600/60 to-indigo-500/60 border border-white/20 
                       rounded-2xl p-6 sm:p-8 text-center shadow-2xl max-w-xl mx-4"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Hi, I’m <span className="text-sky-300">Dinidu</span> 👋
            </h1>
            <p className="mt-3 text-gray-200 text-lg sm:text-xl">
              A Web Developer from <span className="font-semibold text-white">Sri Lanka</span>
            </p>

            <TypewriterText
  text="Use the arrows to fly — uncover my story along the way."
  typingSpeed={60}
  deletingSpeed={40}
  pauseTime={1500}
  className="text-sky-300 font-semibold drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
/>

          </motion.div>
        )}

        {currentStage === 2 && (
          <motion.div
            key="stage2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="backdrop-blur-xl bg-gradient-to-br from-purple-500/60 to-pink-500/60 border border-white/20 
                       rounded-2xl p-6 sm:p-8 text-center shadow-2xl max-w-xl mx-4"
          >
            <p className="text-lg sm:text-xl text-gray-100 mb-4">
              Self-learning, fast learner, <br /> and always exploring new tech.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 
                         text-white font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Learn more
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </Link>
          </motion.div>
        )}

        {currentStage === 3 && (
          <motion.div
            key="stage3"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/60 to-teal-500/60 border border-white/20 
                       rounded-2xl p-6 sm:p-8 text-center shadow-2xl max-w-xl mx-4"
          >
            <p className="text-lg sm:text-xl text-gray-100 mb-4">
              Led multiple projects to success. <br /> Curious about the results?
            </p>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 
                         text-white font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Visit my portfolio
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </Link>
          </motion.div>
        )}

        {currentStage === 4 && (
          <motion.div
            key="stage4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="backdrop-blur-xl bg-gradient-to-br from-indigo-600/60 to-blue-600/60 border border-white/20 
                       rounded-2xl p-6 sm:p-8 text-center shadow-2xl max-w-xl mx-4"
          >
            <p className="text-lg sm:text-xl text-gray-100 mb-4">
              Need a project done or looking for a dev? <br /> I’m just a few keystrokes away.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 
                         text-white font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Let’s talk
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeInfo;
