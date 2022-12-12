import styled from 'styled-components';

export const Matriximg = styled.img`
width: 1000px`;
export const MonthLayout = styled.div`
  position: absolute;
  top: 0%;
  right: 50%;
  border-radius: 50%;
  transform: translate(50%, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MatrixMonth = styled.span`
  font-size: ${p => p.size};
  margin-bottom: 30px;
`;

export const DayLayout = styled.div`
  position: absolute;
  top: 50%;
  right: 100%;
  border-radius: 50%;
  transform: translate(114%, -52%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatrixDay = styled.span`
  font-size: ${p => p.size};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  :not(:first-child) {
    margin-left: 22px;
  }
`;

export const YearLayout = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  border-radius: 50%;
  transform: translate(-14%, -47%);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;

export const MatrixYear = styled.span`
  font-size: ${p => p.size};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  :not(:last-child) {
    margin-left: 22px;
  }

`;

export const BottomLayout = styled.div`
  position: absolute;
  top: 100%;
  right: 50%;
  border-radius: 50%;
  transform: translate(45%, -115%);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

export const MatrixBottom = styled.span`
  font-size: ${p => p.size};
  /* padding: 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  :not(:first-child) {
    margin-bottom: 28px;
  }
`;

export const ComfortZone = styled.span`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(45%, -50%);
  width: 50px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

