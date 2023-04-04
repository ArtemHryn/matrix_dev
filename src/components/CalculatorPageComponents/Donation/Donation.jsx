import { Box } from 'components/Box';
import React from 'react';
import {
  BkCoffeeLogo,
  DonationLink,
  Img,
  LikeTheProject,
  SaveService,
} from './Donation.styled';

import star from 'images/Calculator/Donation/star.webp';
import image from 'images/Calculator/Donation/image.webp';

const gradients = [
  'radial-gradient(circle, rgba(173,93,201,0.3) 30%, rgba(255,255,255,0.01) 60%)',
  'radial-gradient(circle, rgba(173,93,201,0.3) 20%, rgba(255,255,255,0.01) 60%)',
];

const Donation = () => {
  return (
    <Box
      id="donation"
      as="section"
      py={['40px']}
      background={[gradients[0], gradients[1]]}
    >
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['37px', '32px', '60px']}
        m="0 auto"
      >
        <LikeTheProject>
          Если тебе понравился калькулятор, <br />
          ты{' '}
          <LikeTheProject as="span" fontWeight="600">
            можешь угостить
          </LikeTheProject>{' '}
          команду разработчиков{' '}
          <LikeTheProject as="span" fontWeight="600">
            чашечкой кофе
          </LikeTheProject>
          .
        </LikeTheProject>
        <SaveService>
          Это поможет сохранить сервис бесплатным и работать над его
          улучшениями.
        </SaveService>
        <DonationLink
          href="https://www.buymeacoffee.com/dari.karma"
          target="_blank"
        >
          <BkCoffeeLogo />
          Buy me a coffee
        </DonationLink>
        <Img
          src={star}
          alt="star"
          width="32px"
          top={['-4%', '-5%']}
          left={['4%', '2%']}
        />
        <Img
          src={star}
          alt="star"
          width={['22px', '28px']}
          bottom="8%"
          right={['12%', '20%']}
        />
        <Img
          src={image}
          alt="asterism"
          width={['240px', '340px']}
          bottom={['-8%', '-15%']}
          right={['-1%', '10%']}
        />
      </Box>
    </Box>
  );
};

export default Donation;
