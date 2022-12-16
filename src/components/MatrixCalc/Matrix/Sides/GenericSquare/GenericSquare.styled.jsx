import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: ${p => p.top};
  left: ${p => p.left};
  transform: translate(${p => p.x}, ${p => p.y});
  display: flex;
  flex-direction: ${p => (p.direction ? p.direction : 'row')};
  align-items: ${p => (p.flexStart ? 'flex-start' : 'flex-end')};
`;

export const TopLeftElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;

  color: #000000;

  :not(:first-child) {
    margin-left: 8px;
    margin-top: 33px;
  }
  :last-child {
    margin-left: 7px;
    margin-top: 61px;
  }
`;

export const TopRightElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;

  color: #000000;
  :not(:first-child) {
    margin-right: 5px;
    margin-top: 31px;
  }
  :last-child {
    margin-right: 8px;
    margin-top: 61px;
  }
`;

export const BottomLeftElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;

  color: #000000;

  :not(:first-child) {
    margin-left: 5px;
    margin-bottom: 33px;
  }
  :last-child {
    margin-bottom: 66px;
  }
`;

export const BottomRightElement = styled.span`
  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;

  color: #000000;

  :not(:first-child) {
    margin-right: 5px;
    margin-bottom: 30px;
  }
  :last-child {
    margin-right: 6px;
    margin-bottom: 60px;
  }
`;
