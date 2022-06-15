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
exports.BtnGray = exports.BtnSkyBlue = exports.BtnGreen = exports.BtnBlack = exports.BtnPink = exports.BtnWhite = exports.BtnBlue = exports.Btn = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.Btn = styled_components_1.default.button.attrs(({ type }) => ({ type: type !== null && type !== void 0 ? type : "button" })) `
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 12px 15px;
  font-weight: 500;
  font-size: 14px;

  ${({ large }) => large &&
    (0, styled_components_1.css) `
      font-weight: 700;
      min-width: 150px;
    `}

  ${({ small }) => small &&
    (0, styled_components_1.css) `
      padding: 7px 10px;
      font-size: 12px;
      line-height: 17px;
    `}

    ${({ xSmall }) => xSmall &&
    (0, styled_components_1.css) `
      padding: 5px 7px;
      font-size: 12px;
      line-height: 17px;
    `}

  &+& {
    margin-left: 5px;
  }
`;
exports.BtnBlue = (0, styled_components_1.default)(exports.Btn) `
  background: #0043b7;
  color: #fff;
  ${({ outline }) => outline &&
    (0, styled_components_1.css) `
      border: 1px solid #0043b7;
      background: #fff;
      color: #0043b7;
    `}

  ${({ noline }) => noline &&
    (0, styled_components_1.css) `
      background: #fff;
      color: #0043b7;
    `}
`;
exports.BtnWhite = (0, styled_components_1.default)(exports.Btn) `
  border: 1px solid #dfe0e0;
  color: #989899;
`;
exports.BtnPink = (0, styled_components_1.default)(exports.Btn) `
  background: #ff4090;
  color: #fff;
`;
exports.BtnBlack = (0, styled_components_1.default)(exports.Btn) `
  background: #383838;
  color: #fff;
`;
exports.BtnGreen = (0, styled_components_1.default)(exports.Btn) `
  background: #69d49a;
  color: #fff;
  ${({ outline }) => outline &&
    (0, styled_components_1.css) `
      border: 1px solid #69d49a;
      background: #fff;
      color: #69d49a;
    `}
`;
exports.BtnSkyBlue = (0, styled_components_1.default)(exports.Btn) `
  background: #ecf3ff;
  color: #5792f5;
`;
exports.BtnGray = (0, styled_components_1.default)(exports.Btn) `
  background: #f0f0f2;
  color: #989899;
`;
exports.default = {
    Btn: exports.Btn,
    BtnBlue: exports.BtnBlue,
    BtnWhite: exports.BtnWhite,
    BtnPink: exports.BtnPink,
    BtnBlack: exports.BtnBlack,
    BtnGreen: exports.BtnGreen,
    BtnSkyBlue: exports.BtnSkyBlue,
    BtnGray: exports.BtnGray
};
