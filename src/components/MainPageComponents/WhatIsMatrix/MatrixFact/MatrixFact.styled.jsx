import styled from 'styled-components';

export const FactElement = styled.li`
  position: relative;
  max-width: 300px;
  padding: 45px 18px 45px 24px;
  margin-bottom: 15px;

  border: 1px solid #72499b;
  border-radius: 30px;
  overflow: hidden;
  :last-child {
    margin-bottom: 0;
  }
`;

export const FactTitle = styled.h3`
  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;

  letter-spacing: 0.01em;

  width: 50%;
  padding-bottom: 30px;

  color: #72499b;
`;

export const Img = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
`;
export const OneFact = styled.p`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  color: #494949;
`;
