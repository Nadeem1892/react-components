import React from 'react';

// Define types for the component props
interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  size?: 'small' | 'medium' | 'large';  // Size prop
}

const ATMTextInputField: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  maxLength = 255,
  errorMessage,
  type = 'text',
  size = 'medium',  // Default size is 'medium'
}) => {
  // Handle change event for input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Determine input size classes based on the 'size' prop
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-3 px-4 text-base',
    large: 'py-4 px-5 text-lg',
  };

  // Determine if there is an error based on required field and value
  const hasError = required && !value;

  return (
    <div className="mb-4 text-input-container">
      <label htmlFor={label} className="block mb-1 text-sm font-semibold text-input-label">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className={`text-input-field w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[size]} ${hasError || errorMessage ? 'border-red-500' : ''}`}
      />
      {/* Show error message */}
      {hasError && <p className="mt-1 text-xs text-red-500 error-message">This field is required.</p>}
      {errorMessage && <p className="mt-1 text-xs text-red-500 error-message">{errorMessage}</p>}
    </div>
  );
};

export default ATMTextInputField;

