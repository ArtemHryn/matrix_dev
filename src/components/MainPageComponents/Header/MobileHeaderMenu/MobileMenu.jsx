import { motion, AnimatePresence } from 'framer-motion';
import { Box } from 'components/Box';
import menuButton from 'images/menuButton.svg';
import { useState } from 'react';
import { ShowMenu } from './ShowMenu/ShowMenu';
import { OpenModalButton } from './MobileMenu.styled';

export const MainPageHeader = ({ navigationList }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Box
      position="relative"
      display={['flex', 'none', 'none']}
      justifyContent="center"
      alignItems="center"
      pt="20px"
      pb="20px"
      px="60px"
      maxWidth={['430px', '768px', '1440px']}
      m="0 auto"
      height="37px"
      zIndex="10"
    >
      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {showMenu ? (
          <ShowMenu
            setShowMenu={setShowMenu}
            key="11"
            navigationList={navigationList}
          />
        ) : (
          <motion.button
            key="2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenu(true)}
          >
            <OpenModalButton src={menuButton} alt="menu button" />
          </motion.button>
        )}
      </AnimatePresence>
    </Box>
  );
};
