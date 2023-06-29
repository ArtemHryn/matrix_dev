import { Box } from 'components/Box';
import dariPhoto from 'images//hero/dariPhoto.webp';
import dariPhotoTab from 'images/hero/DarinaInHero.webp';
import dariPhotoDesk from 'images/hero/heroDariPhoto.webp';
import heroStar from 'images//hero/hero_star.png';
import {
  Image,
  ImgStar,
  MatrxiLink,
  MoveText,
  ProjectText,
  ServicesLink,
  Title,
} from './Hero.styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MainHero = () => {
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();
  return (
    <Box as="section" py={['40px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        display={[null, null, 'flex']}
        position="relative"
      >
        <Box pt={[null, null, '124px']}>
          <Box
            display={[null, 'flex', 'flex']}
            flexDirection="column"
            alignItems={['center', 'center', 'flex-start']}
            mb={[null, null, '80px']}
          >
            <ProjectText>{t('projectText')}</ProjectText>
            <Title>Dari.Karma</Title>
            <MoveText>{t('heroChoose')}</MoveText>
          </Box>
          <picture>
            <source srcSet={dariPhotoTab} media="(min-width: 768px)" />
            <source srcSet={dariPhoto} />
            <Image srcSet={dariPhoto} alt="Дарина Дупак" />
          </picture>
          <Box display={[null, 'flex', 'flex']}>
            <ServicesLink
              href="#4methods"
              onMouseEnter={() => setClicked(true)}
              clicked={clicked}
            >
              {t('heroButton1')}
            </ServicesLink>
            <MatrxiLink to="calculator"> {t('heroButton2')}</MatrxiLink>
          </Box>
        </Box>
        <Box
          as="img"
          src={dariPhotoDesk}
          alt="Дарина Дупак"
          width="624"
          display={['none', 'none', 'block']}
        />
        <ImgStar src={heroStar} alt="star" loading="lazy" />
      </Box>
    </Box>
  );
};
