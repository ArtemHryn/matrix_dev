import styled from 'styled-components';

export const MasterClassCardElement = styled.li`
  padding: 34px 24px;
  border: 1px solid #72499b;
  border-radius: 30px;

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    :first-child {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-right: 10px;
    width: calc((100% - 20px) / 2);
    height: 745px;
    :first-child {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: calc((100% - 30px) / 2);
    :first-child {
      margin-right: 20px;
    }
    height: 675px;
  }
`;

export const TitleContainer = styled.div`
  padding-bottom: 34px;
  margin-bottom: 34px;

  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding-top: 34px;
  }
`;

export const CardTitle = styled.h4`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  background-color: #f5f1ff;
  border-radius: 100px;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding-top: 34px;
    padding-bottom: 34px;
  }
`;

export const Img = styled.img`
  left: 10px;
  position: absolute;
  padding: 7px;
  background-color: #ffffff;
  border-radius: 50%;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
   width: 64px;
  }
`;

export const ServiceList = styled.ul`
  list-style-type: disc;
  padding-left: 24px;
  padding-bottom: 34px;
  margin-bottom: 34px;

  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
`;

export const ServiceText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;

  color: ${p => p.theme.colors.third};
`;

export const ServiceFormat = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.7);

  padding-bottom: 34px;
  margin-bottom: 34px;
  padding-left: 25px;

  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 0;
    width: 290px;
    background-image: linear-gradient(
      to top,
      #000 10%,
      rgba(255, 255, 255, 0) 0%
    );
    background-repeat: repeat-y;
    background-position: right;
    background-size: 2px 15px;
  }
`;

export const ServiceDuration = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);

  padding-left: 25px;
`;

export const ServicePrice = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);

  padding-left: 25px;
  margin-bottom: 34px;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 0;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  height: 52px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.03em;

  color: #ffffff;

  background-color: #9071af;
  border-radius: 50px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 260px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 460px;
  }
`;
