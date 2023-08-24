import React, { useState } from 'react';
import { bookSearch, bookstoreState } from '../core/services';
import useObservableValue from '../hooks/useObservableValue';

interface Option {
  value: string;
  label: string;
}

interface ComboBoxProps {
  onSelectGenre: (genre: string) => void
}

const options = bookstoreState.getGenres()
  .map(item => ({
    label: item,
    value: item
  }))

const SelectGenre: React.FC<ComboBoxProps> = ({ onSelectGenre }) => {

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [available] = useObservableValue(bookSearch.getAvailableFilteredBooks(), 0)

  return (
    <div className='flex gap-4 text-white w-auto text-left rounded-md border p-4 border-gray-500' >

      <div className='w-60'>
        <label className="block mb-2 text-sm font-medium">Selecciona un género</label>
        <select
          value={selectedOption?.value || ''}
          onChange={(e) => {
            const selectedValue = e.target.value;
            const selected = options.find((option) => option.value === selectedValue);
            setSelectedOption(selected || null);
            onSelectGenre(selected.value)
          }}
          className="bg-amber-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>Selecciona una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <p className='text-2xl text-cyan-500 m-6'>{available} Disponibles</p>
    </div>
  );
};

export default SelectGenre;
