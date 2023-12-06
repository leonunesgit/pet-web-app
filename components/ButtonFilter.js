import { useState } from "react";

const icons = {
    Dog: '/dog.svg',
    Cat: '/cat.svg',
    Other: '/other.svg'
}

const ButtonFilter = ({ title, options, onChange }) => {
    
    const [ selectedOptions, setSelectedOptions ] = useState({ Dog: false, Cat: false, Other: false });
    
    const handleButtonChange = (option) => {
        const updatedOptions = { ...selectedOptions };
        updatedOptions[option] = !selectedOptions[option];
        setSelectedOptions(updatedOptions);
        onChange(updatedOptions);
    };

    return (
        <>
          <div className="pet-filter-buttons">
            <h2 className="filter-title">{title}</h2>
            <div className="button-filter-container">
                {Object.keys(icons).map((option) => (
                    <button className={selectedOptions[option] ? 'button-filter active' : 'button-filter inactive'} key={option} onClick={() => handleButtonChange(option)} >
                        {<img className="button-svg-filter" src={icons[option]}></img>}
                        {option}
                    </button>
                ))}
            </div>
          </div>
        </>
    )
}

export default ButtonFilter;