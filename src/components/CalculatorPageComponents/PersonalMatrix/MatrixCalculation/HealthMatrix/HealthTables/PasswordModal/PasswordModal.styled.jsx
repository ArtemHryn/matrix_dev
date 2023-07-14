import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 326px;
  min-height: 204px;
  border-radius: 14px;
  border: 0.5px solid #72499b;
  background: linear-gradient(180deg, #fff 0%, #f9edff 100%);
  padding: 34px 30px;
`;

export const ModalTitle = styled.p`
  color: ${p => p.theme.colors.text};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.01px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ModalInput = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 7px;
  border: 0.6px solid #ffa3da;
  background: rgba(255, 255, 255, 0.5);

  font-family: Cormorant;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding-left: 15px;
  &::placeholder {
    color: rgba(73, 73, 73, 0.8);
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    #fff 19.44%,
    #f5e9ff 52.78%,
    #f7c8ff 100%
  );
  margin-left: auto;

  color: ${p => p.theme.colors.text};
  font-family: Cormorant;
  font-size: 16px;
  font-weight: 500;
`;
