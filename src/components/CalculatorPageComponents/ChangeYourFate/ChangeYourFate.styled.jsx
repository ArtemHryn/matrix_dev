import styled from 'styled-components';

export const Logo = styled.p`
  font-family: ${p => p.theme.fonts.title};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 0.66;
  letter-spacing: 0.01em;
  text-align: center;
  color: {p => p.theme.colors.main};
`;

export const Line = styled.p`
  margin: 0 auto;
  position: relative;
  display: inline-block;
  padding: 0 20px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 1px solid ${p => p.theme.colors.main};
  }
`;

export const Karmolog = styled.span`
   font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 0.66;
  letter-spacing: 0.01em;
  color: {p => p.theme.colors.main};
    position: relative;
  z-index: 2;
  background-color: white;
  padding: 0 10px
`;
