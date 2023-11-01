import React, { useState, useEffect } from 'react';

import './DropDownCC.css';

const DropDownCC = ({ expiryDate, onExpiryChange }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear(); 
  const currentMonth = currentDate.getMonth() + 2;

  // State to manage both month and year
  const [localExpiry, setLocalExpiry] = useState(expiryDate);

  const [touched, setTouched] = useState({
    month: false,
    year: false
  });

  // Function to validate the expiry date
  const validateExpiryDate = (expiry) => {
    const expiryMonth = parseInt(expiry.month, 10);
    const expiryYear = parseInt(expiry.year, 10);

    
    if (!expiryMonth || !expiryYear) return false;

    
    return expiryYear > currentYear || (expiryYear === currentYear && expiryMonth >= currentMonth);
  };

 
  const isValid = validateExpiryDate(localExpiry);


  useEffect(() => {
    onExpiryChange(localExpiry);
  }, [localExpiry, onExpiryChange]);

 
  const handleMonthChange = (e) => {
    setLocalExpiry({ ...localExpiry, month: e.target.value });
    setTouched({ ...touched, month: true });
  };

  const handleYearChange = (e) => {
    setLocalExpiry({ ...localExpiry, year: e.target.value });
    setTouched({ ...touched, year: true });
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


  const showValidationError = !isValid && touched.month && touched.year;

  return (
    <React.Fragment>
    <div className="form-double-column">
      <div className="dropdown-cc-container">
      <label>Month</label>
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
      <label>Year</label>
        <select name="expiryYear" value={localExpiry.year} onChange={handleYearChange} className="dropdown-cc">
          <option value="">YYYY</option>
          {yearOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div>
        {showValidationError && <p className="error-message">Please select a valid expiry date.</p>}
    </div>
    </React.Fragment>
  );
};

export default DropDownCC;
