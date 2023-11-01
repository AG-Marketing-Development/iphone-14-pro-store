import React, { useState, useEffect } from 'react';
import './DropDownCC.css';

const DropDownCC = ({ expiryDate, onExpiryChange }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear(); // Defined at the top level
  const currentMonth = currentDate.getMonth() + 1;

  // State to manage both month and year
  const [localExpiry, setLocalExpiry] = useState(expiryDate);

  // Function to validate the expiry date
  const validateExpiryDate = (expiry) => {
    const expiryMonth = parseInt(expiry.month, 10);
    const expiryYear = parseInt(expiry.year, 10);

    // Check if both month and year are selected
    if (!expiryMonth || !expiryYear) return false;

    // Check if the expiry date is in the future
    return expiryYear > currentYear || (expiryYear === currentYear && expiryMonth >= currentMonth);
  };

  // Derived state to check validity
  const isValid = validateExpiryDate(localExpiry);

  // Effect to report the change up to the parent component
  useEffect(() => {
    onExpiryChange(localExpiry);
  }, [localExpiry, onExpiryChange]);

  // Event handlers for month and year change
  const handleMonthChange = (e) => {
    setLocalExpiry({ ...localExpiry, month: e.target.value });
  };

  const handleYearChange = (e) => {
    setLocalExpiry({ ...localExpiry, year: e.target.value });
  };

  // Options for month and year
  const monthOptions = Array.from(new Array(12), (val, index) => ({
    value: index + 1,
    label: (index + 1).toString().padStart(2, '0')
  }));

  const yearOptions = Array.from(new Array(20), (val, index) => ({
    value: currentYear + index,
    label: (currentYear + index).toString()
  }));

  return (
    <div className="form-double-column">
      <div className="dropdown-cc-container">
        <select name="expiryMonth" value={localExpiry.month} onChange={handleMonthChange} className="dropdown-cc">
          <option value="">MM</option>
          {monthOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown-cc-container">
        <select name="expiryYear" value={localExpiry.year} onChange={handleYearChange} className="dropdown-cc">
          <option value="">YYYY</option>
          {yearOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {!isValid && <p className="error-message">Please select a valid expiry date.</p>}
    </div>
  );
};

export default DropDownCC;
