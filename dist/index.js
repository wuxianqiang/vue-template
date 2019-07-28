"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = require("./utils/common");

var _path = require("path");

let apply = (action, ...args) => {
  (0, _common.betterRequire)((0, _path.resolve)(__dirname, `./${action}`))(...args);
}; // 主控制流程
// 分配到指定文件


var _default = apply;
exports.default = _default;