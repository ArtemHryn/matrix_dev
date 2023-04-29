import { Box } from 'components/Box';
import React from 'react';
import { Input, RemoveBtn } from './InputLine.styled';

import { ReactComponent as Plus } from 'images/Calculator/CompatibilityMatrix/plus.svg';

const InputLine = ({ index, register, remove, setValue }) => {
  const onChange = e => {
    let inputDate = e.target.value.replace(/\D/g, '');
    if (inputDate.length > 8) {
      inputDate = inputDate.substr(0, 8);
    }
    if (inputDate.length > 4) {
      inputDate = inputDate.substr(0, 4) + '.' + inputDate.substr(4);
    }
    if (inputDate.length > 2) {
      inputDate = inputDate.substr(0, 2) + '.' + inputDate.substr(2);
    }
    setValue(`info.${index}.date`, inputDate);
  };

  return (
    <Box display="flex" gridGap="5px" mb="8px" alignItems="center">
      <Input
        type="text"
        {...register(`info.${index}.name`)}
        placeholder="Имя"
      />
      <Input
        width="135px"
        type="text"
        placeholder="Дата  (10.02.2000)"
        {...register(`info.${index}.date`, {
          onChange: onChange,
          required: { value: true, message: 'Введите дату' },
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: 'Введите дату в формате dd.mm.yyyy',
          },
        })}
      />
      {index > 2 && (
        <RemoveBtn type="button" onClick={() => remove(index)}>
          <Plus />
        </RemoveBtn>
      )}
    </Box>
  );
};

export default InputLine;
