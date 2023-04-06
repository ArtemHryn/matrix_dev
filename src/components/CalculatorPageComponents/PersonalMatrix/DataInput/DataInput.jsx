import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import DataByDate from './DataByDate/DataByDate';
import { Form, SubmitBtn } from './DataInput.styled';
import DataByNineDigits from './DataByNineDigits/DataByNineDigits';
import { useMatrix } from 'pages/Calculator';

const DataInput = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { setIsGenerated, setDate } = useMatrix();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = data => {
    if (isFlipped) {
      delete data.date;
      delete data.name;
      setIsGenerated(isFlipped);
      setDate(data);
      return;
    }
    const [day, month, year] = data.date.split('.');
    setDate({ day, month, year });
    setIsGenerated(isFlipped);
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.date && <p>{errors.date.message}</p>}
        <DataByDate
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          register={register}
          setValue={setValue}
        />
        <DataByNineDigits
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          register={register}
        />
        <SubmitBtn
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Рассчитать
        </SubmitBtn>
      </Form>
    </Box>
  );
};

export default DataInput;
