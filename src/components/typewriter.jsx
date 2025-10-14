import { useEffect, useState } from "react";

const TypewriterText = ({
  text = "Use the arrow keys to fly the plane — and discover my story at every stop.",
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1500,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (isTyping && index < text.length) {
      // typing phase
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isTyping && index === text.length) {
      // pause after full sentence
      timer = setTimeout(() => setIsTyping(false), pauseTime);
    } else if (!isTyping && index > 0) {
      // deleting phase
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isTyping && index === 0) {
      // restart typing after deleting
      timer = setTimeout(() => setIsTyping(true), 500);
    }

    return () => clearTimeout(timer);
  }, [index, isTyping, text, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <h2
      className={`text-center text-white text-lg sm:text-xl font-medium mt-4 tracking-wide ${className}`}
    >
      {displayedText}
      <span className="animate-pulse text-sky-300">|</span>
    </h2>
  );
};

export default TypewriterText;
