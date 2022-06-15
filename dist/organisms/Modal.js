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
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const modal_1 = require("../atoms/modal");
const Modal = ({ activator, content, }) => {
    const [show, setShow] = (0, react_1.useState)(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const target = show && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(modal_1.Backdrop, { onClick: (e) => {
                if (e.currentTarget !== e.target)
                    return;
                handleClose();
            } }, content(handleClose))));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        activator(handleOpen),
        (0, react_dom_1.createPortal)(target, document.body)));
};
exports.default = Modal;
