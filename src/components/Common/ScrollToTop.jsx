import { useEffect, useState } from 'react';
import { ScrollToTopBtn } from './Common.styled';
import { ReactComponent as Arrow } from 'images/FreeRecommendations/rightArrow.svg';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const onScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollToTopBtn
      display={showButton ? null : 'none'}
      onClick={onScrollToTop}
    >
      {' '}
      <Arrow stroke="#9071af" />
    </ScrollToTopBtn>
  );
};

export default ScrollToTop;
