import { Box } from 'components/Box';
import { OpenInstructionModalBtn } from './Instruction.styled';
import IntegrityArrow from 'components/Common/IntegrityArrow/IntegrityArrow';

const BottomBtnsNav = ({ setShowModal, setPage, page }) => {
  return (
    <Box display="flex" flexDirection={['column', null, 'row']} gridGap={['16px', null, '28px']}>
      <OpenInstructionModalBtn
        aria-label="Показати модальне вікно"
        onClick={() => {
          setShowModal && setShowModal(true);
          setPage(1);
        }}
        type="button"
        border={page === 1 && '1px solid #9071AF'}
      >
        Видеоинструкция к калькулятору {page === 1 && <IntegrityArrow />}
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
        бесплатные Вебинары INTEGRITY {page === 2 && <IntegrityArrow />}
      </OpenInstructionModalBtn>
    </Box>
  );
};

export default BottomBtnsNav;
