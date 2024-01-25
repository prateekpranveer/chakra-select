import React, { useState } from 'react';
import { Select, Icon } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md'; // You can use any icon library

const SelectWithDifferentIcons = () => {
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
      icon={<Icon as={MdArrowDropDown} />} // You can use any icon component here
    >
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  );
};

export default SelectWithDifferentIcons;
