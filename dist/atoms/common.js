"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexGrow = exports.SpaceBetween = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SpaceBetween = styled_components_1.default.div `
  margin-top: ${({ noMargin }) => !noMargin && "25px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
exports.FlexGrow = styled_components_1.default.div `
  flex: 1;
`;
