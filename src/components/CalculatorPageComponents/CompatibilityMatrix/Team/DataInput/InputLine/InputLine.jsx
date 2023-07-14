import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { Input, RemoveBtn } from './InputLine.styled';

import { ReactComponent as Plus } from 'images/Calculator/CompatibilityMatrix/plus.svg';

const InputLine = ({ index, register, remove, setValue }) => {
  const { t } = useTranslation('calc');
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
    <Box
      display="flex"
      gridGap={['5px', null, '8px']}
      mb="8px"
      alignItems="center"
    >
      <Input
        type="text"
        {...register(`info.${index}.name`)}
        placeholder={t('personalMatrixNamePlaceholder')}
      />
      <Input
        width={['140px', '210px', '240px']}
        type="text"
        placeholder={t('personalMatrixDatePlaceholder')}
        {...register(`info.${index}.date`, {
          onChange: onChange,
          required: { value: true, message: t('personalMatrixDateRequired') },
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: t('personalMatrixDatePattern'),
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
