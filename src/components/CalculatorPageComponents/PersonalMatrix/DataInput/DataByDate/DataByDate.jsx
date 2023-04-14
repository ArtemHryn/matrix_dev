import React from 'react';
import { BoxTitle, FlipButton, FlipButtonSvg } from '../DataInput.styled';
import { Error, FrontCard, Input } from './DataByDate.styled';

const DataByDate = ({
  isFlipped,
  setIsFlipped,
  register,
  setValue,
  errors,
}) => {
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
    setValue('date', inputDate);
  };
  return (
    <>
      <FrontCard
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {!isFlipped && (
          <FlipButton
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFlipped(true)}
            type="button"
          >
            <FlipButtonSvg />
          </FlipButton>
        )}

        <BoxTitle>Ввод данных</BoxTitle>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          mb={['5px']}
          {...register('name')}
        />
        <Input
          type="text"
          placeholder="Дата  (10.02.2000)"
          {...register('date', {
            onChange: onChange,
            required: { value: true, message: 'Введите дату' },
            pattern: {
              value: /^\d{2}\.\d{2}\.\d{4}$/,
              message: 'Введите дату в формате dd.mm.yyyy',
            },
          })}
        />
        {errors.date && <Error>{errors.date.message}</Error>}
      </FrontCard>
    </>
  );
};

export default DataByDate;
