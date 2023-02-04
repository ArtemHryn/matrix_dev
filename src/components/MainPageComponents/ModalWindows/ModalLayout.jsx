import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Box } from 'components/Box';
import { ModalContainer } from './ModalLayout.styled';
import { motion } from 'framer-motion';

const modalRoot = document.querySelector('#modal-root');

export const ModalLayout = ({ setShowModal, children }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', onCloseByEscape);

    disableBodyScroll(modalRoot);

    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
      enableBodyScroll(modalRoot);
    };
  }, [setShowModal]);

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
        <ModalContainer>{children}</ModalContainer>
      </Box>
      ,
    </motion.div>,
    modalRoot
  );
};
