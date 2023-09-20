import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useMatrix } from 'pages/Calculator';
import DataByDate from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByDate/DataByDate';
import DataByNineDigits from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByNineDigits/DataByNineDigits';
import {
  Form,
  SubmitBtn,
} from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput.styled';

const DataInput = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { setIsGenerated, setDate, setShowMatrix, setName } = useMatrix();
  const { t } = useTranslation('calc');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (isFlipped) {
      delete data.date;
      delete data.name;
      setIsGenerated(isFlipped);
      setDate(data);
      setShowMatrix(true);
      document.activeElement.blur();
      return;
    }
    const [day, month, year] = data.date.split('.');
    setDate({ day, month, year });
    setIsGenerated(isFlipped);
    setName(data.name);
    setShowMatrix(true);
    document.activeElement.blur();
  };

  return (
    <Form mb={['80px']} onSubmit={handleSubmit(onSubmit)}>
      <DataByDate
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        register={register}
        setValue={setValue}
        errors={errors}
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
        {t('personalMatrixCalc')}
      </SubmitBtn>
    </Form>
  );
};

export default DataInput;
