import { Box } from 'components/Box';
import { Layout } from '../Sides/GenericSquare/GenericSquare.styled';
import {
  InnerBottom,
  InnerCorners,
  InnerLeftRight,
  InnerTop,
} from './SoulCrystal.styled';

export const SoulCrystal = ({ data }) => {
  return (
    <Box
      position="absolute"
      width="310px"
      height="312px"
      top="26.5%"
      left="27%"
    >
      <Layout x="-50%" y="-55%" top="0" left="50%" flexStart={true}>
        <InnerTop>{data.innerTop1}</InnerTop>
        <InnerTop>{data.innerTop2}</InnerTop>
        <InnerTop>{data.innerTop3}</InnerTop>
      </Layout>
      <Layout x="-49%" y="-50%" top="50%" left="0" direction="column">
        <InnerLeftRight>{data.innerLeft1}</InnerLeftRight>
        <InnerLeftRight>{data.innerLeft2}</InnerLeftRight>
        <InnerLeftRight>{data.innerLeft3}</InnerLeftRight>
      </Layout>
      <Layout x="-49%" y="-50%" top="50%" left="100%" direction="column">
        <InnerLeftRight>{data.innerRight1}</InnerLeftRight>
        <InnerLeftRight>{data.innerRight1}</InnerLeftRight>
        <InnerLeftRight>{data.innerRight1}</InnerLeftRight>
      </Layout>
      <Layout x="-50%" y="-52%" top="100%" left="50%">
        <InnerBottom>{data.innerBottom1}</InnerBottom>
        <InnerBottom>{data.innerBottom2}</InnerBottom>
        <InnerBottom>{data.innerBottom3}</InnerBottom>
      </Layout>
      <InnerCorners x="11%" y="9%">
        {data.innerTopLeft}
      </InnerCorners>
      <InnerCorners x="82%" y="9%">
        {data.innerTopRight}
      </InnerCorners>
      <InnerCorners x="12%" y="79%">
        {data.innerBottomLeft}
      </InnerCorners>
      <InnerCorners x="82%" y="79%">
        {data.innerBottomRight}
      </InnerCorners>
    </Box>
  );
};
