"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = exports.PageContainer = exports.PageLayout = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.PageLayout = styled_components_1.default.div `
  margin: 60px 90px;
`;
exports.PageContainer = styled_components_1.default.div `
  border: 1px solid #e6e6e6;
  padding: 40px;
  margin-top: 15px;
  background: #fff;
`;
exports.PageHeader = styled_components_1.default.header `
  display: flex;
  align-items: center;
  height: 88px;
  border-bottom: 1px solid #e4e6e6;
  padding: 36px 90px 17px;
`;
