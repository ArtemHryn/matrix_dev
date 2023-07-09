import { useTranslation } from 'react-i18next';
import { BoxTitle, FlipButton, FlipButtonSvg } from '../DataInput.styled';
import { Error, FrontCard, Input } from './DataByDate.styled';

const DataByDate = ({
  isFlipped,
  setIsFlipped,
  register,
  setValue,
  errors,
  index,
  infoErrors,
}) => {
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
    setValue(
      `${index || index === 0 ? `info.${index}.date` : 'date'}`,
      inputDate
    );
  };
  const showError = !!infoErrors && !!infoErrors[index];

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

        <BoxTitle>{t('personalMatrixBoxTitle')}</BoxTitle>
        <Input
          type="text"
          placeholder={t('personalMatrixNamePlaceholder')}
          mb={['5px']}
          {...register(
            `${index || index === 0 ? `info.${index}.name` : 'name'}`
          )}
        />
        <Input
          type="text"
          placeholder={t('personalMatrixDatePlaceholder')}
          {...register(
            `${index || index === 0 ? `info.${index}.date` : 'date'}`,
            {
              onChange: onChange,
              required: {
                value: !isFlipped,
                message: t('personalMatrixDateRequired'),
              },
              pattern: {
                value: /^\d{2}\.\d{2}\.\d{4}$/,
                message: t('personalMatrixDatePattern'),
              },
            }
          )}
        />
        {errors.date && <Error>{errors.date.message}</Error>}
        {showError && <Error>{infoErrors[index].date.message}</Error>}
      </FrontCard>
    </>
  );
};

export default DataByDate;
