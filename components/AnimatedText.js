import { useState } from "react";

const AnimatedText = () => {
    const [currentWordIndex, setCurrentWordIndex ] = useState(0);
    const [slideOut, setSlideOut] = useState('');
    const words = ['pet', 'amigo'];
    const transitionInterval = 5000;

    //Todo: Set here the algorighm on the next class

    return (
        <h2 className="static-text">
            Adote um&nbsp;
            <span className="word-transition">
                <span className={`animated-text ${slideOut}`}></span>
            </span>
        </h2>
    )
}

export default AnimatedText;