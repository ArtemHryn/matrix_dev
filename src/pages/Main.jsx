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

const imgLink = `url(${backgroundFooterImage})`;

export const Main = ({ setIsMain }) => {
  useEffect(() => setIsMain(true), [setIsMain]);
  return (
    <>
      <MainHero />
      <Author />
      <AboutKarma />
      <WhatIsMatrix />
      <MatrixPlusAndMinus />
      <WaysToTransformation />
      <ServicesAndPrice />
      <CustomerReviewers />
      <CalculateYourMatrix />
      <WhatPeopleAsk />
      <Box backgroundImage={imgLink} backgroundSize="100%">
        <FreeRecommendations />
        <Footer />
      </Box>
    </>
  );
};
