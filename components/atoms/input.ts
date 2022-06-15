import styled from "styled-components";

export const Input = styled.input<{
  width?: string;
  small?: boolean;
  middle?: boolean;
}>`
  padding: 10px;
  background: #ffffff;
  outline: none;
  border: 1px solid #dfe0e0;
  font-size: 14px;
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ middle }) => middle && "400px"};
  width: ${({ small }) => small && "90px"};
  height: 40px;
`;

export const Textarea = styled.textarea.attrs(({ rows }) => ({
  rows: rows ?? 4,
}))`
  width: 100%;
  resize: none;
  border: 1px solid #dfe0e0;
  padding: 15px;
`;

export default {
  Input,
  Textarea
}