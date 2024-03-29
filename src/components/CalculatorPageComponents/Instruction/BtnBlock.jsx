import { Box } from 'components/Box';
import { OpenModalBtn, UnderBtnText } from './Instruction.styled';
import InstructionBtn from 'components/Common/InstructionBtn/InstructionBtn';

const BtnBlock = ({ btnName, textAlign = null, setShowModal, setPage, ...props }) => {
  return (
    <Box gridGap={['16px', '20px', '30px']} position="relative" zIndex="0" {...props}>
      <OpenModalBtn
        onClick={() => {
          setShowModal(true);
          setPage();
        }}
      >
        <InstructionBtn />
      </OpenModalBtn>
      <UnderBtnText textAlign={textAlign}>{btnName}</UnderBtnText>
    </Box>
  );
};

export default BtnBlock;
