import React from 'react';
import './GameButton.css';

const GameButton = ({onButtonClick, className, text}) => {
    return(
        <div className="game-button">
            <button className={className} onClick={onButtonClick}>{text}</button>
        </div>
    )
}

export default GameButton;