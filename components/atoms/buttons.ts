import styled, { css } from "styled-components";

export const Btn = styled.button.attrs(({ type }) => ({ type: type ?? "button" }))<{
  large?: boolean;
  small?: boolean;
  xSmall?: boolean;
}>`
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 12px 15px;
  font-weight: 500;
  font-size: 14px;

  ${({ large }) =>
    large &&
    css`
      font-weight: 700;
      min-width: 150px;
    `}

  ${({ small }) =>
    small &&
    css`
      padding: 7px 10px;
      font-size: 12px;
      line-height: 17px;
    `}

    ${({ xSmall }) =>
    xSmall &&
    css`
      padding: 5px 7px;
      font-size: 12px;
      line-height: 17px;
    `}

  &+& {
    margin-left: 5px;
  }
`;

export const BtnBlue = styled(Btn)<{ outline?: boolean; noline?: boolean }>`
  background: #0043b7;
  color: #fff;
  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid #0043b7;
      background: #fff;
      color: #0043b7;
    `}

  ${({ noline }) =>
    noline &&
    css`
      background: #fff;
      color: #0043b7;
    `}
`;

export const BtnWhite = styled(Btn)`
  border: 1px solid #dfe0e0;
  color: #989899;
`;

export const BtnPink = styled(Btn)`
  background: #ff4090;
  color: #fff;
`;

export const BtnBlack = styled(Btn)`
  background: #383838;
  color: #fff;
`;

export const BtnGreen = styled(Btn)`
  background: #69d49a;
  color: #fff;
  ${({ outline }: { outline?: boolean }) =>
    outline &&
    css`
      border: 1px solid #69d49a;
      background: #fff;
      color: #69d49a;
    `}
`;

export const BtnSkyBlue = styled(Btn)`
  background: #ecf3ff;
  color: #5792f5;
`;

export const BtnGray = styled(Btn)`
  background: #f0f0f2;
  color: #989899;
`;

export default {
  Btn,
  BtnBlue,
  BtnWhite,
  BtnPink,
  BtnBlack,
  BtnGreen,
  BtnSkyBlue,
  BtnGray
}