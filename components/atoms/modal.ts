import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div<{ large?: boolean }>`
  background: #fff;
  padding: 30px 40px;
  width: 90%;
  max-width: ${({ large }) => !large && "750px"};
`;

export const ModalTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
