import { motion } from 'framer-motion';
import { CloseModal, MenuItem, MenuLink, MenuList } from '../MobileMenu.styled';
import closeModal from 'images/Header/closeModal.png';
import { useEffect } from 'react';

const animation = {
  initial: {
    scale: 0,
    opacity: 0.3,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', duration: 0.6 },
  },
  exit: {
    scale: 0,
    opacity: 0.3,
    transition: {
      duration: 0.6,
      type: 'spring',
    },
  },
};


export const ShowMenu = ({ setShowMenu, navigationList }) => {
  useEffect(() => {
    const onBackdropClick = e => {
      if (e.target.dataset.name !== 'modal') {
        setShowMenu(false);
      }
    };
    window.addEventListener('click', onBackdropClick);
    return () => {
      window.removeEventListener('click', onBackdropClick);
    };
  }, [setShowMenu]);

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
    >
      <MenuList data-name="modal">
        <MenuItem>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenu(false)}
          >
            <CloseModal src={closeModal} alt="menu button" />
          </motion.button>
        </MenuItem>
        {navigationList.map(({ name, href }) => (
          <MenuItem key={name} onClick={() => setShowMenu(false)}>
            <MenuLink href={href}>{name}</MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </motion.div>
  );
};
