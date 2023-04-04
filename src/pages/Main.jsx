import { useEffect } from 'react';
import { Box } from 'components/Box';
import { AboutKarma } from 'components/MainPageComponents/AboutKarma/AboutKarma';
import { Author } from 'components/MainPageComponents/Author/Author';
import { CalculateYourMatrix } from 'components/MainPageComponents/CalculateYourMatrix/CalculateYourMatrix';
import { CustomerReviewers } from 'components/MainPageComponents/CustomerReviewers/CustomerReviewers';
import { Footer } from 'components/MainPageComponents/Footer/Footer';
import { FreeRecommendations } from 'components/MainPageComponents/FreeRecommendations/FreeRecommendations';
import { MainHero } from 'components/MainPageComponents/Hero/Hero';
import { ServicesAndPrice } from 'components/MainPageComponents/ServicesAndPrice/ServicesAndPrice';
import { WaysToTransformation } from 'components/MainPageComponents/WaysToTransformation/WaysToTransformation';
import { WhatIsMatrix } from 'components/MainPageComponents/WhatIsMatrix/WhatIsMatrix';
import { WhatPeopleAsk } from 'components/MainPageComponents/WhatPeopleAsk/WhatPeopleAsk';
import backgroundFooterImage from 'images/backgroundPlanet.png';
import { MatrixPlusAndMinus } from 'components/MainPageComponents/MatrixPlusAndMinus/MatrixPlusAndMinus';
import { Header } from 'components/MainPageComponents/Header/Header';
import navigationList from 'components/MainPageComponents/Header/navigationList';
import { useLocation } from 'react-router-dom';

const imgLink = `url(${backgroundFooterImage})`;

const Main = ({ setIsMain }) => {
  const location = useLocation();
  useEffect(() => {
    setIsMain(true);
    if (location.state && location.state.from) {
      const section = document.getElementById(`${location.state.from}`);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, setIsMain]);
  return (
    <>
      <Box backgroundImage="linear-gradient(to bottom,rgba(158, 118, 255, 0.18) 50%,#fff)">
        <Header navigationList={navigationList} />
        <MainHero />
      </Box>
      <Author />
      <AboutKarma />
      <WhatIsMatrix />
      <MatrixPlusAndMinus />
      <WaysToTransformation />
      <ServicesAndPrice />
      <CustomerReviewers />
      <CalculateYourMatrix />
      <WhatPeopleAsk />
      <Box backgroundImage={imgLink} backgroundSize="cover">
        <FreeRecommendations />
        <Footer />
      </Box>
    </>
  );
};

export default Main;
