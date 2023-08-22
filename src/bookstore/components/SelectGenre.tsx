import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface ComboBoxProps {
  options: Option[];
  onSelectGenre: (genre: string) => void
}

const SelectGenre: React.FC<ComboBoxProps> = ({ options, onSelectGenre }) => {
  
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  return (
    <div className="relative">
      <select
        value={selectedOption?.value || ''}
        onChange={(e) => {
          const selectedValue = e.target.value;
          const selected = options.find((option) => option.value === selectedValue);
          setSelectedOption(selected || null);
          onSelectGenre(selected.value)
        }}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="" disabled>Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenre;
