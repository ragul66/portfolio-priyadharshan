// src/components/TypingText.js
import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index < text.length && !isDeleting) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (isDeleting && displayText !== "") {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex(0); // Reset to start typing again
    } else if (index === text.length && !isDeleting) {
      const timeoutId = setTimeout(() => setIsDeleting(true), 1000); // Delay before deleting starts
      return () => clearTimeout(timeoutId);
    }
  }, [index, isDeleting, displayText, text, speed]);

  return (
    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
      {displayText}
      <span className="blinking-cursor">|</span>
    </h2>
  );
};

export default TypingText;
