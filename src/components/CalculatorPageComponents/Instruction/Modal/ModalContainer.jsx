import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Box } from 'components/Box';
import { Button, ModalContainerBox } from './Modal.styled';

import { ReactComponent as CloseModal } from 'images/modals/closeModal.svg';

const modalRoot = document.querySelector('#modal-root');

const ModalContainer = ({ setShowModal, children }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
      document.body.style.overflow = 'visible';
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
        zIndex="100"
        onClick={onBackdropClick}
      >
        <ModalContainerBox>
          <Button onClick={() => setShowModal(false)}>
            <CloseModal />
          </Button>
          {children}
        </ModalContainerBox>
      </Box>
    </motion.div>,
    modalRoot
  );
};

export default ModalContainer;
