import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';

const SelectWithDifferentAppearances = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log('Selected option:', selectedValue);
  };

  return (
    <Select
      placeholder='Select option'
      onChange={handleSelectChange}
      value={selectedOption}
      variant='filled' // You can customize the appearance here (outline, filled, flushed, unstyled)
    >
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  );
};

export default SelectWithDifferentAppearances;
