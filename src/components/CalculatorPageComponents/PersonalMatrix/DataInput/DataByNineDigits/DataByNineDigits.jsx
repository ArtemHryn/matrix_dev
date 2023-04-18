import React from 'react';
import { BoxTitle, FlipButton } from '../DataInput.styled';
import { BackCard, DataInput, DataList, FlippToFrontBtn } from './DataByNineDigits.styled';

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

const DataByNineDigits = ({ isFlipped, setIsFlipped, register, setValue }) => {
  const onChange = e => {
    const { name, value } = e.target;
    if (value > 22) {
      setValue(name, 22);
      return;
    }
    setValue(name, value);
    return;
  };

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
          <FlippToFrontBtn />
        </FlipButton>
      )}
      <BoxTitle>Ввод данных</BoxTitle>
      <DataList>
        {table.map(({ name }) => (
          <li key={name}>
            <DataInput
              type="number"
              {...register(`${name}`, {
                max: { value: 22 },
                onChange: onChange,
              })}
            />
          </li>
        ))}
      </DataList>
    </BackCard>
  );
};

export default DataByNineDigits;
