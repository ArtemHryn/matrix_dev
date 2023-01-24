import styled from 'styled-components';

export const CardElement = styled.li`
  position: relative;
  max-width: 300px;
  margin-bottom: 52px;

  background-color: #ffffff;
  border-radius: 30px;
  :last-child {
    margin-bottom: 0;
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

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: #72499b;
  //dots like border
  background-image: linear-gradient(
    to right,
    #000 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 15px 2px;
  background-repeat: repeat-x;
`;

export const CardDescription = styled.p`
  padding: 0 22px 0 32px;
  margin-bottom: 10px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;

  color: #494949;
`;

export const Price = styled.p`
  padding: 0 22px 0 32px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;

  color: #000000;
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
  line-height: 19px;
  letter-spacing: 0.03em;

  color: #ffffff;

  background-color: #9071af;
  border-radius: 50px;
`;
