import React from 'react';
import './Bar.css';

const Bar = ({ label, value, maxValue }) => {
    return(
        <div className="bar-main">
            <div className="label">{label}</div>
            <div className="max">
                <div className="value" style={{ width: `${(value / maxValue) * 100}%`}}></div>
            </div>
        </div>
    )
}

export default Bar;
