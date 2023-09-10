import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({ selected, setSelected }) {
    const [isActive, setisActive] = useState(false);
    const [buttonText, setButtonText] = useState("Escolha um e-mail");

    const options = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com"];

    const handleOptionClick = (option) => {
        setSelected(option);
        setButtonText(option);
        setisActive(false);
    };

    return (
        <div className="dropdown">
            <div className='dropdown-btn' onClick={e => setisActive(!isActive)}>
                {buttonText}
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className='dropdown-item'
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;