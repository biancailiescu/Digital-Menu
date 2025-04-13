import React, { useState } from "react";
import "style/Dropdown.css"; 

interface DropdownProps {
  options: string[];
  onSelect: (option: string | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string | null) => {
    onSelect(option);
    setIsOpen(false); 
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        Filter
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => handleSelect(null)}>
            All
          </button>
          {options.map((option) => (
            <button
              key={option}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;