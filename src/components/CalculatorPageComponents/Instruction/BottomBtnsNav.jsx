import { useTranslation } from 'react-i18next';

import { Box } from 'components/Box';
import { OpenInstructionModalBtn } from './Instruction.styled';
import IntegrityArrow from 'components/Common/IntegrityArrow/IntegrityArrow';

const BottomBtnsNav = ({ setShowModal, setPage, page }) => {
  const {t} = useTranslation('calc')
  return (
    <Box display="flex" flexDirection={['column', null, 'row-reverse']} gridGap={['16px', null, '28px']}>
      <OpenInstructionModalBtn
        aria-label="Показати модальне вікно"
        onClick={() => {
          setShowModal && setShowModal(true);
          setPage(1);
        }}
        type="button"
        border={page === 1 && '1px solid #9071AF'}
      >
        {t('instructionBtn1')} {page === 1 && <IntegrityArrow />}
      </OpenInstructionModalBtn>
      <OpenInstructionModalBtn
        aria-label="Показати модальне вікно"
        type="button"
        border={page === 2 && '1px solid #9071AF'}
        onClick={() => {
          setShowModal && setShowModal(true);
          setPage(2);
        }}
      >
        {t('instructionBtn2')} {page === 2 && <IntegrityArrow />}
      </OpenInstructionModalBtn>
    </Box>
  );
};

export default BottomBtnsNav;
