import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #dfe0e0;
  border-right: 1px solid #dfe0e0;
`;
export const ItemsTitle = styled.div`
  height: 45px;
  background: #edf1fa;
  border: 1px solid #d7e2fb;
  border-top: 1px solid #000;
  font-weight: 500;
  color: #0043b7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.div`
  display: flex;
  width: ${({ size = 1 }: { size?: number }) => `${100 / size}%`};
  border-top: 1px solid #dfe0e0;
  min-height: 60px;
`;

export const Name = styled.div`
  background: #fafafc;
  border-left: 1px solid #dfe0e0;
  width: 140px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 17px;
  span {
    color: #ff0000;
    margin-left: 2px;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  flex: 1;
  font-size: 14px;
  border-left: 1px solid #dfe0e0;
  position: relative;
`;

export default {
  Items,
  Item,
  Name,
  Value
}