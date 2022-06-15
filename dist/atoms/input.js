"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = exports.Input = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Input = styled_components_1.default.input `
  padding: 10px;
  background: #ffffff;
  outline: none;
  border: 1px solid #dfe0e0;
  font-size: 14px;
  width: ${({ width }) => width !== null && width !== void 0 ? width : "100%"};
  max-width: ${({ middle }) => middle && "400px"};
  width: ${({ small }) => small && "90px"};
  height: 40px;
`;
exports.Textarea = styled_components_1.default.textarea.attrs(({ rows }) => ({
    rows: rows !== null && rows !== void 0 ? rows : 4,
})) `
  width: 100%;
  resize: none;
  border: 1px solid #dfe0e0;
  padding: 15px;
`;
exports.default = {
    Input: exports.Input,
    Textarea: exports.Textarea
};
