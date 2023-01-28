import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper';
import {
  Cont,
  FeedbackDescription,
  FeedbackTitle,
  Separator,
  YourDarina,
} from './CustomerReviewers.styled';
import { Box } from 'components/Box';
import feedback1 from 'images/customerReviewers/feedback1.png';
import feedback2 from 'images/customerReviewers/feedback2.png';
import feedback3 from 'images/customerReviewers/feedback3.png';
import goldenSeparator from 'images/customerReviewers/goldenSeparator.png';
import { ReactComponent as HeardIcon } from 'images/customerReviewers/heard.svg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export const CustomerReviewers = () => {
  return (
    <Box as="section" pt="40px" pb="40px" id="feedback">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Box display={[null, 'flex', 'flex']} alignItems='center' justifyContent='space-between'>
          <FeedbackTitle>Отзывы</FeedbackTitle>
          <FeedbackDescription>
            Я буду рада стать твоим проводником в новом этапе твоей жизни!
          </FeedbackDescription>
        </Box>
        <YourDarina>
          ваша Дарина <HeardIcon />
        </YourDarina>

        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          autoplay={true}
          navigation
          modules={[Thumbs, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <Cont src={feedback1} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback2} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback3} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback1} alt="feedback" />
          </SwiperSlide>
        </Swiper>
        <Separator src={goldenSeparator} alt="golden stars" />
      </Box>
    </Box>
  );
};
