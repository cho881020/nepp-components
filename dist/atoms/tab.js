"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabLine = exports.Tab = exports.activeTabStyle = exports.TabConatiner = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.TabConatiner = styled_components_1.default.div `
  display: flex;
  height: 46px;
`;
const TabParent = styled_components_1.default.div `
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe0e0;
  border-bottom: 1px solid #000;
  background-color: #fafafc;
  cursor: pointer;
`;
exports.activeTabStyle = (0, styled_components_1.css) `
  border: 1px solid #000000;
  border-bottom: none;
  background-color: #fff;
  color: #000;
`;
exports.Tab = (0, styled_components_1.default)(TabParent) `
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #989899;
  ${({ isActive }) => isActive && exports.activeTabStyle}
`;
exports.TabLine = styled_components_1.default.div `
  border-bottom: 1px solid #000000;
  flex: 1;
`;
