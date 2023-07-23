import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
  typography,
} from 'styled-system';

export const SetCardTypeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - 5px) / 2);
  height: 34px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;

  color: ${p => p.theme.colors.activeBtn};

  background-color: ${p => p.theme.colors.white};
  border-radius: 10px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 10px) / 2);
    height: 34px;
    font-size: 20px;
    line-height: 1.2;
    height: 48px;
  }
  ${space}
  ${color}
  ${shadow}
  ${layout}
  ${background}
`;

export const CardName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 237, 255, 0.7) 100%);
  border: 0.7px solid ${p => p.theme.colors.text};
  border-radius: 8px;
  margin-bottom: 4px;

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.69;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 29px;
    height: 70px;
    margin-bottom: 7px;
    border-radius: 15px;
    border: 1px solid #72499b;
  }
`;

export const ChakraTableTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 33px;
  min-width: 75px;
  border-right: 0.5px solid ${p => p.theme.colors.main};

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.24;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    min-width: 141px;
    height: 52px;
    font-size: 26px;
    border-right: 1px solid ${p => p.theme.colors.main};
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    min-width: 190px;
  }
  ${flexbox};
  ${border}
`;

export const List = styled.ul`
  background: rgba(255, 255, 255, 0.5);
  border: 0.5px solid ${p => p.theme.colors.text};
  border-radius: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border-radius: 22px;
    border: 1px solid ${p => p.theme.colors.text};
  }
`;

export const ChakraElement = styled.li`
  display: flex;
  align-items: center;
  padding-left: 13px;
  border-bottom: 0.5px solid #9071af;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border-bottom: 1px solid #9071af;
  }
  ${border}
`;

export const Exclamation = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;

  font-family: ${p => p.theme.fonts.digits};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.18;
  color: ${p => p.theme.colors.main};
  cursor: pointer;
  ${color}
  transition: all 250ms linear;
  &:hover,
  &:focus {
    scale: 1.15;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;

export const ChakraText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  flex: 1;
  min-width: 75px;

  border-right: 0.5px solid #9071af;

  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;

  color: #464646;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 52px;
    min-width: 141px;
    border-right: 1px solid #9071af;
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    min-width: 190px;
  }
  ${flexbox};
  ${border}
  ${layout}
  ${typography}
`;

export const Warning = styled.span`
  color: #9072af;
  font-family: Cormorant;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: 0.01em;
  text-align: center;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 26px;
  }
`;

export const WarningText = styled(Warning)`
  font-weight: 400;
  display: block;
  letter-spacing: 100%;
`;

export const TipHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 20px 10px;
  background-image: linear-gradient(to right, #9072af 10%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 10px 2px;
  background-repeat: repeat-x;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 0px 30px 30px 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const TipHeaderText = styled.p`
  color: #72499b;
  text-align: center;
  font-family: Cormorant;
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.68;
  letter-spacing: 0.208px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 32px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const TipGoalText = styled.p`
  color: #4b216c;
  font-family: Cormorant;
  font-size: 14px;
  font-weight: 600;
  line-height: 0.82;
  letter-spacing: 0.077px;
  text-transform: lowercase;
  padding: 15px 12px;
  background-image: linear-gradient(to right, #9072af 10%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 10px 2px;
  background-repeat: repeat-x;
  text-align: right;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 15px 22px 15px 85px;
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const TipDesc = styled.p`
  color: #4b216c;
  font-family: Cormorant;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 0.084px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const TipDescName = styled(TipDesc)`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.68;
  letter-spacing: 0.103px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;
