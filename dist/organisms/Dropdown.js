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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Dropdown = ({ activator, content, }) => {
    const el = (0, react_1.useRef)(null);
    const [show, setShow] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        var _a;
        const onClick = (e) => {
            var _a;
            if (!((_a = el.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setShow(false);
            }
        };
        (_a = document.getElementById("root")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", onClick);
        return () => {
            var _a;
            (_a = document.getElementById("root")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", onClick);
        };
    }, []);
    return (react_1.default.createElement(Wrapper, { ref: el },
        activator(() => setShow((prev) => !prev)),
        show && react_1.default.createElement(Content, null, content)));
};
const Wrapper = styled_components_1.default.div `
  position: relative;
`;
const Content = styled_components_1.default.div `
  position: absolute;
  z-index: 1;
`;
exports.default = Dropdown;
