import { useState } from "react";

const CheckboxFilter = ({ title, options, onChange }) => {
    
    const [ selectedOptions, setSelectedOptions ] = useState({});

    const handleCheckboxChange = (option) => {
        const updatedOptions = { ...selectedOptions };
        updatedOptions[option] = !selectedOptions[option];
        setSelectedOptions(updatedOptions);
        onChange(updatedOptions);
    };

    return (
        <>
            <h2 className="filter-title">{title}</h2>
            <div className="dropdown-filter-container">
                {Object.keys(options).map((option) => (
                    <label htmlFor={option} key={option} className="check-filter-label">
                        <input
                            type="checkbox"
                            id={option}
                            className="check-filter-checkbox"
                            checked={ selectedOptions[option] || false }
                            onChange={() => handleCheckboxChange(option)}
                        />
                        {options[option]}
                    </label>
                ))}
            </div>
        </>
    )
}

export default CheckboxFilter;