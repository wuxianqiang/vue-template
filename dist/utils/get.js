"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = exports.download = exports.tagList = exports.repoList = void 0;

var _request = _interopRequireDefault(require("request"));

var _rc = require("../utils/rc");

var _downloadGetRepo = _interopRequireDefault(require("download-get-repo"));

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fetch = async url => {
  return new Promise((resolve, reject) => {
    let config = {
      url,
      method: 'get',
      headers: {
        'user-agent': 'xxx'
      }
    };
    (0, _request.default)(config, (err, response, body) => {
      if (err) {
        reject(err);
      }

      resolve(JSON.parse(body));
    });
  });
};

const repoList = async () => {
  let config = await (0, _rc.getAll)();
  let api = `https://api.github.com/${config.type}/${config.registry}/repos`;
  return await fetch(api);
}; // 拉取项目的tags


exports.repoList = repoList;

const tagList = async repos => {
  let config = await (0, _rc.getAll)();
  let api = `https://api.github.com/repos/${config.registry}/${repos}/tags`;
  return await fetch(api);
};

exports.tagList = tagList;

const download = async (src, dist) => {
  return new Promise((resolve, reject) => {
    (0, _downloadGetRepo.default)(src, dist, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.download = download;

let downloadLocal = async (project, version) => {
  let conf = await (0, _rc.getAll)();
  let api = `${conf.registry}/${project}`;

  if (version) {
    api += `#${version}`;
  }

  return await download(api, _constants.DOWNLOAD + '/' + project);
};

exports.downloadLocal = downloadLocal;