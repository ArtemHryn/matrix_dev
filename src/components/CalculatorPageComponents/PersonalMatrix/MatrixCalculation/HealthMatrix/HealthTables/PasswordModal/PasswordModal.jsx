import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Box } from 'components/Box';
import {
  ModalBackdrop,
  ModalInput,
  ModalTitle,
  PasswordForm,
  SubmitBtn,
} from './PasswordModal.styled';

const modalRoot = document.querySelector('#modal-root');

const PasswordModal = ({
  setShowPasswordModal,
  onFormSubmit,
  formError,
  setFormError,
  passValue,
  setPassValue,
}) => {
  const { t } = useTranslation('calc');
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        setShowPasswordModal(false);
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [setShowPasswordModal]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowPasswordModal(false);
    }
  };

  return createPortal(
    <ModalBackdrop onClick={onBackdropClick}>
      <PasswordForm onSubmit={onFormSubmit}>
        <ModalTitle>{t('healthAuthorPasswordModalData')}</ModalTitle>
        <Box mb={['20px']}>
          <ModalInput
            type="password"
            placeholder="Пароль"
            value={passValue}
            onChange={({ target }) => {
              setPassValue(target.value);
              setFormError('');
            }}
          />
          {formError && <p>{formError}</p>}
        </Box>
        <SubmitBtn type="submit">OK</SubmitBtn>
      </PasswordForm>
    </ModalBackdrop>,
    modalRoot
  );
};

export default PasswordModal;
