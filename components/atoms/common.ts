import styled from "styled-components";

export const SpaceBetween = styled.div<{ noMargin?: boolean }>`
  margin-top: ${({ noMargin }) => !noMargin && "25px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexGrow = styled.div`
  flex: 1;
`;
