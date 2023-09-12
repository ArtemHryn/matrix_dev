import { Box } from 'components/Box';
import { AnimatedContainer, Description, Img, Link, ModalTitle, Price } from './Modal.styled';

import BottomBtnsNav from '../BottomBtnsNav';

import modal_integrity from 'images/Calculator/instruction/modal_integrity.webp';
import modal_instruction from 'images/Calculator/instruction/modal_instruction.webp';
import bg_instruction from 'images/Calculator/instruction/bg_instruction.svg';
import bg_integrity from 'images/Calculator/instruction/bg_integrity.svg';

const ModalContent = ({ title, description, href, linkText, price, setPage, page = 1 }) => {
  return (
    <>
      <AnimatedContainer
        initial={{ opacity: 0, x: '100%', transition: { duration: 0.5 } }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: '-100%', transition: { duration: 0.5 } }}
      >
        <Box
          backgroundImage={page === 1 ? `url('${bg_instruction}')` : `url('${bg_integrity}')`}
          backgroundRepeat="no-repeat"
          backgroundSize={page === 1 ? ['350px', '440px', '400px'] : ['200px', '250px', '240px']}
          backgroundPosition={
            page === 1
              ? ['-65px 104%', '10px 100%', '-60px 100%']
              : ['15% 97%', '22% 90%', '8% 75%']
          }
          p={['0px 30px 20px', null, '0px 90px 40px']}
        >
          <Box
            display={[null, null, 'flex']}
            flexDirection="row-reverse"
            gridGap={[null, null, '110px']}
            alignItems="center"
          >
            <Box mb={['36px', '40px', '0px']}>
              <ModalTitle>{title}</ModalTitle>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
              <Box
                display="flex"
                flexDirection={['column', null, 'row-reverse']}
                gridGap={['38px', '49px', '30px']}
                justifyContent={[null, null, 'flex-end']}
                alignItems={[null, null, 'center']}
              >
                {price && <Price>{price}</Price>}
                <Link href={href} target="_blank" rel="noreferrer noopener">
                  {linkText}
                </Link>
              </Box>
            </Box>
            <Img
              src={page === 1 ? modal_instruction : modal_integrity}
              alt="Мобільний з калькулятором"
            />
          </Box>
        </Box>
      </AnimatedContainer>
      <Box p={['0px 30px 47px', null, '0px 90px 34px']}>
        <BottomBtnsNav page={page} setPage={setPage} />
      </Box>
    </>
  );
};

export default ModalContent;
