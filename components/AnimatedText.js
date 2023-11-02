import { useEffect, useState } from "react";

const AnimatedText = () => {
    const [currentWordIndex, setCurrentWordIndex ] = useState(0);
    const [slideOut, setSlideOut] = useState('');
    const words = ['pet', 'amigo'];
    const transitionInterval = 4000;

    useEffect(() => {
        const intervalId = setInterval(transitionWord, transitionInterval);

        return () => {
            clearInterval(intervalId);
        }
    }, [currentWordIndex]);

    const transitionWord = () => {
        const nextWordIndex = (currentWordIndex + 1) % words.length;
        setSlideOut('slide-out');
        setTimeout(() => {
            setCurrentWordIndex(nextWordIndex);
            setSlideOut('');
        }, 1000);
    }

    return (
        <h2 className="static-text">
            Adote um&nbsp;
            <span className="word-transition">
                <span className={`animated-text ${slideOut}`}>{words[currentWordIndex]}</span>
            </span>
        </h2>
    )
}

export default AnimatedText;