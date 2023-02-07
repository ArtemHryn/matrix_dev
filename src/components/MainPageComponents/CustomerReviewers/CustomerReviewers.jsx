import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Thumbs,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper';
import {
  Cont,
  FeedbackDescription,
  FeedbackTitle,
  Separator,
  YourDarina,
} from './CustomerReviewers.styled';
import { Box } from 'components/Box';
import feedback1 from 'images/customerReviewers/1.jpg';
import feedback2 from 'images/customerReviewers/2.jpg';
import feedback3 from 'images/customerReviewers/3.jpg';
import feedback4 from 'images/customerReviewers/4.jpg';
import feedback5 from 'images/customerReviewers/5.jpg';
import feedback6 from 'images/customerReviewers/6.jpg';
import feedback7 from 'images/customerReviewers/7.jpg';
import feedback8 from 'images/customerReviewers/8.jpg';
import feedback9 from 'images/customerReviewers/9.jpg';
import feedback10 from 'images/customerReviewers/10.jpg';
import feedback11 from 'images/customerReviewers/11.jpg';
import feedback12 from 'images/customerReviewers/12.jpg';
import feedback13 from 'images/customerReviewers/13.jpg';
import goldenSeparator from 'images/customerReviewers/goldenSeparator.png';
import { ReactComponent as HeardIcon } from 'images/customerReviewers/heard.svg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';


export const CustomerReviewers = () => {
  const [swiperStyleNumber, setSwiperStyleNumber] = useState(null)
  const [ref, {width}] = useMeasure()

  useEffect(() => {
    if (width === 1440) {
      setSwiperStyleNumber(3);
    }
    if (width === 768) {
      setSwiperStyleNumber(1);
    }
    if (width === 430) {
      setSwiperStyleNumber(1);
        }
  }, [width]);

  return (
    <Box as="section" py={['40px', '40px', '90px']} id="feedback">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        ref={ref}
      >
        <Box
          display={[null, 'flex', 'flex']}
          alignItems="center"
          justifyContent="space-between"
        >
          <FeedbackTitle>Отзывы</FeedbackTitle>
          <FeedbackDescription>
            Я буду рада стать твоим проводником в новом этапе твоей жизни!
          </FeedbackDescription>
        </Box>
        <YourDarina>
          ваша Дарина <HeardIcon />
        </YourDarina>

        <Swiper
          slidesPerView={swiperStyleNumber}
          // spaceBetween={10}
          autoplay={true}
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          modules={[Thumbs, Navigation, Autoplay, Pagination, EffectCoverflow]}
        >
          <SwiperSlide>
            <Cont src={feedback13} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback1} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback2} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback12} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback3} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback4} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback6} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback5} alt="feedback" />
          </SwiperSlide>

          <SwiperSlide>
            <Cont src={feedback7} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback8} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback9} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback10} alt="feedback" />
          </SwiperSlide>
          <SwiperSlide>
            <Cont src={feedback11} alt="feedback" />
          </SwiperSlide>
        </Swiper>
        <Separator src={goldenSeparator} alt="golden stars" />
      </Box>
    </Box>
  );
};
