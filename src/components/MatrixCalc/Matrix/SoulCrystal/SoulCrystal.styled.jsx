import styled from 'styled-components';

export const InnerTop = styled.span`
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
  :first-child {
    font-size: 22px;
    margin-right: 41px;
    margin-top: 8px;
  }
  :last-child {
    font-size: 22px;
    margin-left: 41px;
    margin-top: 8px;
  }
`;

export const InnerLeftRight = styled.span`
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
  :first-child {
    font-size: 22px;
    margin-bottom: 32px;
  }
  :last-child {
    font-size: 22px;
    margin-top: 30px;
  }
`;

export const InnerBottom = styled.span`
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

  :first-child {
    font-size: 22px;
    margin-right: 41px;
  }
  :last-child {
    font-size: 22px;
    margin-left: 41px;
  }
`;

export const InnerCorners = styled.span`
position: absolute;
  top: ${p => p.y};
  left: ${p => p.x};

  font-family: 'Cormorant';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;

  color: #000000;
`;
