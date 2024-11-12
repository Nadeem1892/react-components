import React, { useState } from 'react';
import ATMTextInputField from '../components/inputs/ATMTextInputField';

const GroupsInputs: React.FC = () => {
  const [smallValue, setSmallValue] = useState('');
  const [mediumValue, setMediumValue] = useState('');
  const [largeValue, setLargeValue] = useState('');

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-10 bg-gray-900'>
      {/* Heading Section */}
      <div className='text-center text-white'>
        <h1 className='mb-2 text-5xl font-bold'>React Components</h1>
        <h2 className='text-4xl font-semibold'>Input Fields</h2>
        <p className='mt-4 text-lg'>
          Explore different sizes of input fields in React with Tailwind CSS styling.
        </p>
      </div>

      {/* Input Fields Section */}
      <div className='w-[70%]'>
        <ATMTextInputField
          label="Small Input"
          value={smallValue}
          onChange={(e) => setSmallValue(e)}
          size="small"
          placeholder="Small size"
        />

        <ATMTextInputField
          label="Medium Input"
          value={mediumValue}
          onChange={(e) => setMediumValue(e)}
          size="medium"
          placeholder="Medium size"
        />

        <ATMTextInputField
          label="Large Input"
          value={largeValue}
          onChange={(e) => setLargeValue(e)}
          size="large"
          placeholder="Large size"
        />
      </div>
    </div>
  );
};

export default GroupsInputs;
