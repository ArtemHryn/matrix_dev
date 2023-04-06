import React from 'react';
import { BoxTitle, FlipButton } from '../DataInput.styled';
import { BackCard, DataInput, DataList } from './DataByNineDigits.styled';

const table = [
  { name: 'topLeft1' },
  { name: 'month' },
  { name: 'topRight1' },
  { name: 'day' },
  { name: 'center' },
  { name: 'year' },
  { name: 'bottomLeft1' },
  { name: 'bottom1' },
  { name: 'bottomRight1' },
];

const DataByNineDigits = ({ isFlipped, setIsFlipped, register }) => {
  return (
    <BackCard
      initial={{ rotateY: 180 }}
      animate={{ rotateY: isFlipped ? 0 : 180 }}
      transition={{ duration: 0.6 }}
    >
      {isFlipped && (
        <FlipButton
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFlipped(false)}
          type="button"
        >
          Flip
        </FlipButton>
      )}
      <BoxTitle>Вввод данных</BoxTitle>
      <DataList>
        {table.map(input => (
          <li key={input.name}>
            <DataInput name={input.name} {...register(`${input.name}`)} />
          </li>
        ))}
      </DataList>
    </BackCard>
  );
};

export default DataByNineDigits;
