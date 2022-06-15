"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.Name = exports.Item = exports.ItemsTitle = exports.Items = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Items = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #dfe0e0;
  border-right: 1px solid #dfe0e0;
`;
exports.ItemsTitle = styled_components_1.default.div `
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
exports.Item = styled_components_1.default.div `
  display: flex;
  width: ${({ size = 1 }) => `${100 / size}%`};
  border-top: 1px solid #dfe0e0;
  min-height: 60px;
`;
exports.Name = styled_components_1.default.div `
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
exports.Value = styled_components_1.default.div `
  display: flex;
  align-items: center;
  padding: 12px;
  flex: 1;
  font-size: 14px;
  border-left: 1px solid #dfe0e0;
  position: relative;
`;
exports.default = {
    Items: exports.Items,
    Item: exports.Item,
    Name: exports.Name,
    Value: exports.Value
};
