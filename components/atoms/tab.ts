import styled, { css } from "styled-components";

export const TabConatiner = styled.div`
  display: flex;
  height: 46px;
`;

const TabParent = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe0e0;
  border-bottom: 1px solid #000;
  background-color: #fafafc;
  cursor: pointer;
`;

export const activeTabStyle = css`
  border: 1px solid #000000;
  border-bottom: none;
  background-color: #fff;
  color: #000;
`;

export const Tab = styled(TabParent)`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #989899;
  ${({ isActive }: { isActive?: boolean }) => isActive && activeTabStyle}
`;

export const TabLine = styled.div`
  border-bottom: 1px solid #000000;
  flex: 1;
`;
