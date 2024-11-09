import  { useState } from 'react';
import TextInput from '../components/inputs/ATMTextInputField';

const GroupsInputs: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    // Example of email validation
    if (!value.includes('@')) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 app-container bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form>
          <TextInput
            label="Email"
            value={email}
            onChange={handleEmailChange}
            required={true}
            errorMessage={emailError}
            type="email"
            placeholder="Enter your email"
            size="medium"
          />
          <TextInput
            label="Password"
            value={password}
            onChange={setPassword}
            required={true}
            type="password"
            placeholder="Enter your password"
            size="medium"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white transition duration-200 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupsInputs;
