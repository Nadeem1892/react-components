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
  // Handle value change in input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Class names based on size prop
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-3 px-4 text-base',
    large: 'py-4 px-5 text-lg',
  };

  // Check if there’s an error
  const hasError = !!errorMessage || (required && !value);

  return (
    <div className="mb-4 text-input-container">
      {/* Label */}
      <label htmlFor={label} className="block mb-2 text-sm font-semibold text-input-label">
        {label}
      </label>

      {/* Input field */}
      <input
        type={type}
        id={label}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className={`w-full border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 ease-in-out ${sizeClasses[size]} ${hasError ? 'border-red-500' : 'border-gray-300'}`}
      />

      {/* Error message */}
      {(hasError || errorMessage) && (
        <p className="mt-1 text-xs text-red-500 error-message">
          {hasError ? 'This field is required.' : errorMessage}
        </p>
      )}
    </div>
  );
};

export default ATMTextInputField;
