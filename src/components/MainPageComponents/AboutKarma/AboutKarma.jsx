import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  smallStar,
  crystal,
  mirrorCrystal,
  handWithJel,
  handWithJelTab,
  hands,
  plant,
  handWithFlower,
  handsTab,
  plantTab,
  handWithFlowerTab,
  handsContainerImgDesc,
  handWithJelDesc,
  handsDesc,
  plantDesc,
  handWithFlowerDesc,
} from './';

import {
  AboutDesc,
  AboutReasonContainer,
  CrystalContainer,
  CrystalImg,
  HandImg,
  HandsContainer,
  UnderHandImg,
  TextNearHands,
  Title,
  TitleStarImg,
  TextUnderContainer,
  AboutResultText,
} from './AboutKarma.styled';
import { useTranslation } from 'react-i18next';

const sectionGradient =
  'linear-gradient(to bottom,#fff,rgba(158, 118, 255, 0.23) 26%,rgba(158, 118, 255, 0.23) 81%,#fff 100%)';

export const AboutKarma = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [showPlant, setShowplant] = useState(false);
  const [showHandWithFlower, setShowHandWithFlower] = useState(false);
  const [showHands, setShowHands] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!inView) {
      setShowplant(inView);
      setShowHandWithFlower(inView);
      setShowHands(inView);
      return;
    }
    setTimeout(() => setShowplant(inView), 1300);
    setTimeout(() => setShowHandWithFlower(inView), 2800);
    setTimeout(() => setShowHands(inView), 4300);
  }, [inView]);
  return (
    <Box
      as="section"
      py={['40px', '40px', '90px']}
      backgroundImage={[
        sectionGradient,
        sectionGradient,
        `url(${handsContainerImgDesc}), ${sectionGradient}`,
      ]}
      backgroundPosition={[null, null, '0 350px, 0 0']}
      backgroundSize={[null, null, 'contain, auto']}
      backgroundRepeat="no-repeat"
    >
      <Box maxWidth={['400px', '768px', '1440px']} px={['60px', '33px', '100px']} m="0 auto">
        <Box position="relative" mb="39px">
          <Title>{t('aboutKarmaTitle')}</Title>
          <TitleStarImg src={smallStar} alt="star" />
        </Box>
        <Box display={[null, 'flex', 'flex']} mb="45px">
          <AboutReasonContainer
            p="18px 32px 18px 5px"
            mb="11px"
            mr={[null, '13px', '25px']}
            justifyContent={[null, null, 'flex-start']}
          >
            <CrystalContainer mr={['5px', '5px', '50px']}>
              <CrystalImg src={crystal} alt="crystal" left="40%" width="55" />
            </CrystalContainer>
            <AboutDesc>{t('aboutKarmaDesc1')}</AboutDesc>
          </AboutReasonContainer>
          <AboutReasonContainer
            p={['18px 5px 18px 32px', null, '18px 35px 18px 1px']}
            flexDirection="row-reverse"
          >
            <AboutDesc>{t('aboutKarmaDesc2')}</AboutDesc>
            <CrystalContainer ml="5px" mr={[null, null, '15px']}>
              <CrystalImg src={mirrorCrystal} alt="crystal" left="60%" width="55" />
            </CrystalContainer>
          </AboutReasonContainer>
        </Box>
        <HandsContainer ref={ref}>
          <TextNearHands>{t('aboutKarmaNearHands')}</TextNearHands>

          <div>
            <UnderHandImg top={['10%', '20%', '92%']} left={['-20%', '15%', '16%']}></UnderHandImg>
            <picture>
              <source srcSet={handWithJelDesc} media="(min-width: 1440px)" />
              <source srcSet={handWithJelTab} media="(min-width: 768px)" />
              <source srcSet={handWithJel} />
              {inView && (
                <HandImg
                  srcSet={handWithJel}
                  alt="Darina"
                  top={['10%', '15%', '74%']}
                  left={['-20%', '10%', '8%']}
                  width={['149px', '148px', '212px']}
                  loading="lazy"
                  className="animate__fadeInDown"
                />
              )}
            </picture>
          </div>
          <div>
            <UnderHandImg bottom={['5%', '-10%', '60%']} left={['1%', '80%', '86%']}></UnderHandImg>
            <picture>
              <source srcSet={handsDesc} media="(min-width: 1440px)" />
              <source srcSet={handsTab} media="(min-width: 768px)" />
              <source srcSet={hands} />
              {inView && showHands && (
                <HandImg
                  srcSet={hands}
                  alt="Darina"
                  bottom={['3%', '-15%', '56%']}
                  left={['0%', '80%', '83%']}
                  width={['109px', '137px', '167px']}
                  loading="lazy"
                  className="animate__fadeInDown"
                />
              )}
            </picture>
          </div>
          <div>
            <UnderHandImg top={['3%', '10%', '29%']} right={['2%', '49%', '61%']}></UnderHandImg>
            <picture>
              <source srcSet={plantDesc} media="(min-width: 1440px)" />
              <source srcSet={plantTab} media="(min-width: 768px)" />
              <source srcSet={plant} />
              {inView && showPlant && (
                <HandImg
                  srcSet={plant}
                  alt="Darina"
                  top={['-12%', '10%', '13%']}
                  right={['-8%', '42%', '56%']}
                  width={['164px', '207px', '254px']}
                  loading="lazy"
                  className="animate__fadeInDown"
                />
              )}
            </picture>
          </div>
          <div>
            <UnderHandImg
              bottom={['22%', '31%', '70%']}
              right={['-15%', '22%', '26%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handWithFlowerDesc} media="(min-width: 1440px)" />
              <source srcSet={handWithFlowerTab} media="(min-width: 768px)" />
              <source srcSet={handWithFlower} />
              {inView && showHandWithFlower && (
                <HandImg
                  srcSet={handWithFlower}
                  alt="Darina"
                  bottom={['13%', '13%', '57%']}
                  right={['-18%', '20%', '22%']}
                  width={['168px', '185px', '226px']}
                  loading="lazy"
                  className="animate__fadeInDown"
                />
              )}
            </picture>
          </div>
        </HandsContainer>
        <TextUnderContainer>{t('aboutKarmaTextUnderContainer')}</TextUnderContainer>
        <AboutResultText>{t('aboutKarmaResultText')}</AboutResultText>
      </Box>
    </Box>
  );
};
