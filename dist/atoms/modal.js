"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalTitle = exports.ModalContainer = exports.Backdrop = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Backdrop = styled_components_1.default.div `
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
exports.ModalContainer = styled_components_1.default.div `
  background: #fff;
  padding: 30px 40px;
  width: 90%;
  max-width: ${({ large }) => !large && "750px"};
`;
exports.ModalTitle = styled_components_1.default.div `
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
