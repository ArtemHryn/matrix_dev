import styled from 'styled-components';

export const CardElement = styled.li`
  position: relative;
  max-width: 300px;
  margin-bottom: 52px;

  background-color: ${p => p.theme.colors.white};
  border-radius: 30px;

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    :last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    max-width: calc((100% - 50px) / 2);
    margin: 0 14px 40px 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    max-width: calc((100% - 120px) / 4);
    margin: 0 14px 35px 0;
  }
`;

export const MainImg = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const StarImg = styled.img`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const CardTitle = styled.h4`
  padding: 160px 27px 20px 32px;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.main};
  //dots like border
  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 280px;
    padding: 185px 27px 20px 32px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 250px;
    padding: 160px 27px 20px 32px;
  }
`;

export const CardDescription = styled.p`
  padding: 0 22px 0 32px;
  margin-bottom: 10px;

  font-size: 17px;
  line-height: 1.24;

  color: ${p => p.theme.colors.third};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 80px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  transform: translate(0%, 50%);

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.white};

  background-color: #9071af;
  border-radius: 50px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: translate(0%, 50%) scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 238px;
    height: 52px;

    font-size: 18px;
    line-height: 1.22;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    transform: translate(0%, 50%);
    :hover,
    :focus {
      transform: translate(0%, 50%) scale(1.05);
    }
  }
`;
