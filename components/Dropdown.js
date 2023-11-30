import { useState } from "react";

const DropdownFilter = ({ title, options, onChange }) => {
    
    const [ selectedOption, setSelectedOption ] = useState('');

    const handleDropdownChange = (event) => {
        const newSelectedOption = event.target.value;
        setSelectedOption(newSelectedOption);
        onChange(newSelectedOption);
    };

    return (
        <>
            <h2 className="filter-title">{title}</h2>
            <div className="dropdown-filter-container">
                <select
                    id="filterDropdown"
                    className="dropdown-filter-dropdown"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                >
                    <option value="" className="dropdown-filter-option">Todos</option>
                    {Object.keys(options).map((option) => (
                        <option key={option} value={option}>
                            {options[option]}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default DropdownFilter;