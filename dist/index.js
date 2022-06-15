"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = __importDefault(require("./atoms/buttons"));
const input_1 = __importDefault(require("./atoms/input"));
const item_1 = __importDefault(require("./atoms/item"));
const table_1 = __importDefault(require("./atoms/table"));
const Modal_1 = __importDefault(require("./organisms/Modal"));
const Dropdown_1 = __importDefault(require("./organisms/Dropdown"));
exports.default = {
    buttons: buttons_1.default, inputs: input_1.default, item: item_1.default, table: table_1.default,
    Dropdown: Dropdown_1.default, Modal: Modal_1.default
};
