import { Box } from 'components/Box';
import DataByDate from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByDate/DataByDate';
import DataByNineDigits from 'components/CalculatorPageComponents/PersonalMatrix/DataInput/DataByNineDigits/DataByNineDigits';
import React, { useEffect, useState } from 'react';

const PartnerData = ({ register, setValue, errors, infoErrors, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setValue(`info[${index}].isGenerated`, isFlipped);
  }, [index, isFlipped, setValue]);
  return (
    <Box position="relative">
      <DataByDate
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        register={register}
        setValue={setValue}
        errors={errors}
        infoErrors={infoErrors}
        index={index}
      />
      <DataByNineDigits
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        register={register}
        setValue={setValue}
        index={index}
      />
    </Box>
  );
};

export default PartnerData;
