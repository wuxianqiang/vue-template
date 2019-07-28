"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = require("./utils/get");

var _ora = _interopRequireDefault(require("ora"));

var _inquirer = _interopRequireDefault(require("inquirer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 通过配置文件，获取信息
// 让用户手动选择模板
let install = async () => {
  let loading = (0, _ora.default)('fetching template....');
  loading.start();
  let list = await (0, _get.repoList)();
  loading.succeed();
  list = list.map(({
    name
  }) => name); // console.log(list)

  let answer = _inquirer.default.prompt([{
    type: 'list',
    name: 'project',
    choices: list,
    questions: 'pleace choice template'
  }]); // 项目名称


  let project = answer.project; // console.log(answer.project)

  loading = (0, _ora.default)('fetching tag....');
  loading.start();
  list = await (0, _get.tagList)(project);
  loading.succeed();
  answer = _inquirer.default.prompt([{
    type: 'list',
    name: 'tag',
    choices: list,
    questions: 'pleace choice tag'
  }]); // 版本号

  let tag = answer.tag; // 下载文件\

  loading = (0, _ora.default)('download template....');
  loading.start();
  await (0, _get.downloadLocal)(project, tag);
  loading.succeed(); // my-cli init
  // vue会使用模板引擎
  // vue init 把当前的下载的模板 生成到目录中
};

var _default = install;
exports.default = _default;