import styled from 'styled-components';
import { border, flexbox, space, typography } from 'styled-system';

export const SectionName = styled.p`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(249, 237, 255, 0.7) 100%
  );
  border: 0.7px solid ${p => p.theme.colors.text};
  border-radius: 7px;

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.57;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};

  margin-bottom: 3px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 78px;
    font-size: 29px;
    margin-bottom: 6px;
    border: 1px solid ${p => p.theme.colors.text};
    border-radius: 13px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 75px;
    font-size: 30px;
    line-height: 1.13;
  }
`;

export const KarmaElementInfoTitle = styled.p`
  display: flex;
  align-items: center;

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.32;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};
  height: 100%;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 29px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 26px;
    line-height: 1.12;
  }
  ${flexbox}
  ${border}
  ${space}
`;

export const ElemenInfoList = styled.ul`
  background: rgba(255, 255, 255, 0.7);
  background-color: transparent;
  border: 0.5px solid rgba(114, 73, 155, 0.7);
  border-radius: 12px;
  margin-bottom: 4px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border: 1px solid rgba(114, 73, 155, 0.7);
    border-radius: 23px;
    margin-bottom: 7px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    border-radius: 17px;
    margin-bottom: 0px;
  }
`;

export const ElemenInfoItem = styled.li`
  display: flex;
  align-items: center;
  height: 28px;
  border-bottom: 0.6px solid rgba(144, 113, 175, 0.7);
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 52px;
    border-bottom: 1px solid rgba(144, 113, 175, 0.7);
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 42px;
  }
  ${border}
`;

export const KarmaListInfoText = styled(KarmaElementInfoTitle)`
  font-family: ${p => p.theme.fonts.bona};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 0.81;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    line-height: 1.18;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 16px;
  }
  ${typography}
`;
