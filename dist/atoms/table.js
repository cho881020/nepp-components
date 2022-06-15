"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TD = exports.TH = exports.TR = exports.Table = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Table = styled_components_1.default.table `
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
`;
exports.TR = styled_components_1.default.tr `
  border-bottom: 1px solid #dfe0e0;
`;
exports.TH = styled_components_1.default.th `
  text-align: ${({ left }) => (left ? "left" : "center")};
  color: #989899;
  background: #fafafc;
  border-top: 1px solid #000;
  height: 45px;
  font-size: 14px;
`;
exports.TD = styled_components_1.default.td `
  font-weight: 400;
  font-size: 14px;
  height: 60px;
  text-align: ${({ left }) => (left ? "left" : "center")};
`;
exports.default = {
    Table: exports.Table,
    TR: exports.TR,
    TH: exports.TH,
    TD: exports.TD
};
