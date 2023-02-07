import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { Box } from 'components/Box';
import { Button, ModalContainer } from './ModalLayout.styled';

import { ReactComponent as CloseModal } from 'images/modals/closeModal.svg';
import star from 'images/modals/star.png';

const modalRoot = document.querySelector('#modal-root');

export const ModalLayout = ({
  setShowModal,
  children,
  boxShadow,
  backgroundColor,
}) => {
  const [ref, { width }] = useMeasure();

  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    console.log()
    if (width >= 1440) {
      disableBodyScroll(modalRoot);
    }
    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
      if (width >= 1440) {
        enableBodyScroll(modalRoot);
      }
    };
  }, [setShowModal, width]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };
  return createPortal(
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Box
        ref={ref}
        position="fixed"
        top="0px"
        left="0px"
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="1000"
        onClick={onBackdropClick}
      >
        <ModalContainer backgroundColor={backgroundColor} boxShadow={boxShadow}>
          <Button onClick={() => setShowModal(false)}>
            <CloseModal />
          </Button>
          <Box
            position="absolute"
            backgroundColor="#FFFFFF"
            border="1px solid #C8B3E6;"
            borderRadius="50%"
            top={['15px', '26px', '36px']}
            right={['15px', '26px', '36px']}
            width={['40px', '49px']}
            height={['40px', '49px']}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="5px"
          >
            <img src={star} alt="star" />
          </Box>
          {children}
        </ModalContainer>
      </Box>
    </motion.div>,
    modalRoot
  );
};
