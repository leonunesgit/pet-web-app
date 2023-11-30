import { useState } from "react";

const icons = {
    Dog: 'Dog',
    Cat: 'Cat',
    Other: 'Other'
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
            <h2 className="filter-title">{title}</h2>
            <div className="dropdown-filter-container">
                {Object.keys(icons).map((option) => (
                    <button className={selectedOptions[option] ? 'button-filter active' : 'button-filter inactive' } key={option} onClick={handleButtonChange(option)} >
                        {icons[option]}
                        {option}
                    </button>
                ))}
            </div>
        </>
    )
}

export default ButtonFilter;