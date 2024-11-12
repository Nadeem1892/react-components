import React, { useState } from 'react';

// Define the props for the TextField component
interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
  errorMessage?: string;
  size?: 'small' | 'medium' | 'large';  // For controlling size of input
  customClass?: string;  // For custom additional styling (optional)
}

const ATMTextInputField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  type = 'text',
  errorMessage,
  size = 'medium',
  customClass = '',  // Accepts any custom class passed from the parent
}) => {
  // Size classes based on the 'size' prop
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-3 px-4 text-base',
    large: 'py-4 px-5 text-lg',
  };

  // State to track if the input is touched (user has interacted with it)
  const [isTouched, setIsTouched] = useState(false);

  // Determine if the input has an error (either due to validation or custom error message)
  const hasError = (required && !value && isTouched) || !!errorMessage;
  const isValid = required && value && !hasError;

  // Handle input focus and blur events
  const handleFocus = () => {
    setIsTouched(true);
  };

  // Dynamic border color logic
  const borderColor = hasError
    ? 'border-red-500' // Red border if there's an error
    : isValid
    ? 'border-green-500' // Green border if input is valid
    : 'border-gray-300'; // Default gray border when untouched or invalid

  return (
    <div className={`mb-4 ${customClass}`}>
      {/* Label */}
      <label htmlFor={label} className="block mb-2 text-sm font-semibold text-gray-400">
        {label}
      </label>
      
      {/* Input Field */}
      <input
        type={type}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className={`w-full rounded-lg focus:outline-none bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out 
          ${sizeClasses[size]} 
          ${borderColor}`}
      />
      
      {/* Error message */}
      {hasError && (
        <p className="mt-1 text-xs text-red-500">{errorMessage || 'This field is required.'}</p>
      )}
      {/* Success message */}
      {isValid && !hasError && (
        <p className="mt-1 text-xs text-green-500">Valid input!</p>
      )}
    </div>
  );
};

export default ATMTextInputField;
