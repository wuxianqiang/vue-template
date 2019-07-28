"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOWNLOAD = exports.DEFAULTS = exports.RC = exports.VERSION = void 0;

var _package = require("../../package.json");

const VERSION = _package.version; // 找到用户的跟目录

exports.VERSION = VERSION;
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
const RC = `${HOME}/.zfclirc`; // RC 配置模板下载的地方

exports.RC = RC;
const DEFAULTS = {
  registry: 'qq-template',
  // 配置模板的名称
  type: 'orgs' // 配置是组织还是个人

};
exports.DEFAULTS = DEFAULTS;
const DOWNLOAD = `${HOME}/.template`;
exports.DOWNLOAD = DOWNLOAD;