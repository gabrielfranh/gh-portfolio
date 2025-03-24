import { useState, useEffect } from 'react';

import '../../styles/components/home/Typewriter.css'

interface TypewriterProps {
  text: string;
  delay?: number;
  repeat?: boolean;
  onComplete?: any
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 100, repeat = false, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (repeat) {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    else {
        if (onComplete)
            onComplete();
    }
  }, [currentIndex, delay, text, repeat]);

  return (
    <span>
      {currentText}
      <span className="blinking-cursor"></span>
    </span>
  );
};

export default Typewriter;
