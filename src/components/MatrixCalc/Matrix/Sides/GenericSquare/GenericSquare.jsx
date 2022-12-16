import { Box } from 'components/Box';
import {
  BottomLeftElement,
  BottomRightElement,
  Layout,
  TopLeftElement,
  TopRightElement,
} from './GenericSquare.styled';

export const GenericSquare = ({ data }) => {
  return (
    <Box
      width="437px"
      height="437px"
      //   border="3px solid black"
      position="absolute"
      top="17.5%"
      left="17.5%"
    >
      <Layout x="-10%" y="-15%" top="0" left="0" start={true}>
        <TopLeftElement>{data.topLeft1}</TopLeftElement>
        <TopLeftElement>{data.topLeft2}</TopLeftElement>
        <TopLeftElement>{data.topLeft3}</TopLeftElement>
      </Layout>
      <Layout
        x="-90%"
        y="-15%"
        top="0"
        left="100%"
        direction="row-reverse"
        start={true}
      >
        <TopRightElement>{data.topRight1}</TopRightElement>
        <TopRightElement>{data.topRight2}</TopRightElement>
        <TopRightElement>{data.topRight3}</TopRightElement>
      </Layout>
      <Layout x="-5%" y="-90%" top="100%" left="0">
        <BottomLeftElement>{data.bottomLeft1}</BottomLeftElement>
        <BottomLeftElement>{data.bottomLeft2}</BottomLeftElement>
        <BottomLeftElement>{data.bottomLeft3}</BottomLeftElement>
      </Layout>
      <Layout x="-90%" y="-92%" top="100%" left="100%" direction="row-reverse">
        <BottomRightElement>{data.bottomRight1}</BottomRightElement>
        <BottomRightElement>{data.bottomRight2}</BottomRightElement>
        <BottomRightElement>{data.bottomRight3}</BottomRightElement>
      </Layout>
    </Box>
  );
};
