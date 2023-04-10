import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import DataByDate from './DataByDate/DataByDate';
import { Form, SubmitBtn } from './DataInput.styled';
import DataByNineDigits from './DataByNineDigits/DataByNineDigits';
import { useMatrix } from 'pages/Calculator';

const DataInput = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { setIsGenerated, setDate, setShowMatrix, setName } = useMatrix();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = data => {
    if (isFlipped) {
      delete data.date;
      delete data.name;
      setIsGenerated(isFlipped);
      setDate(data);
      setShowMatrix(true);
      return;
    }
    const [day, month, year] = data.date.split('.');
    setDate({ day, month, year });
    setIsGenerated(isFlipped);
    setName(data.name);
    setShowMatrix(true);
  };


  return (
    <Box mb={['80px']}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          setValue={setValue}
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
