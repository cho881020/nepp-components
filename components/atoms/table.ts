import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
`;
export const TR = styled.tr`
  border-bottom: 1px solid #dfe0e0;
`;
export const TH = styled.th`
  text-align: ${({ left }: { left?: boolean }) => (left ? "left" : "center")};
  color: #989899;
  background: #fafafc;
  border-top: 1px solid #000;
  height: 45px;
  font-size: 14px;
`;
export const TD = styled.td`
  font-weight: 400;
  font-size: 14px;
  height: 60px;
  text-align: ${({ left }: { left?: boolean }) => (left ? "left" : "center")};
`;

export default {
  Table,
  TR,
  TH,
  TD
}