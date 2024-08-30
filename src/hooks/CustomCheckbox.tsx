import React, { useState } from 'react';
import './CustomCheckbox.css';

// Define the props for the CustomCheckbox component
interface CustomCheckboxProps {
  checked: boolean;       
  onChange: (checked: boolean) => void; 
}

export default function CustomCheckbox({ checked, onChange }: CustomCheckboxProps) {
  // Local state to manage the checkbox's checked state
  const [isChecked, setIsChecked] = useState(checked);

  // Handle checkbox toggle
  const handleToggle = () => {
    const newCheckedState = !isChecked; 
    setIsChecked(newCheckedState);     
    onChange(newCheckedState);           
  };

  return (
    <div
      className={`checkbox-container ${isChecked ? 'active' : ''}`} // Apply 'active' class if checked
      onClick={handleToggle} 
    >
      <div className="checkmark"></div> {/* Visual representation of the checkmark */}
    </div>
  );
}
