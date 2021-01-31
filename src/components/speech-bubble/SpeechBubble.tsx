import React from 'react';
import './SpeechBubble.scss';
import SpeechBubbleImg from '../../assets/speech-bubble.png';
const SpeechBubble: React.FC = function ({ children }) {
    return (
        <div className="speech-bubble">
            <img src={SpeechBubbleImg} />
            <span>{children}</span>
        </div>
    );
};

export default SpeechBubble;
