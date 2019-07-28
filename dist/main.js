"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let actionMap = {
  install: {
    alias: 'i',
    description: 'install template',
    examples: ['my-cli i', 'my-cli install']
  },
  config: {
    alias: 'c',
    description: 'config .zfclirc',
    examples: ['my-cli config set <k> <v>']
  },
  '*': {
    description: 'not found',
    examples: []
  }
};
Object.keys(actionMap).forEach(action => {
  _commander.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
    if (action === 'config') {
      console.log(process.argv.slice(3));
      (0, _index.default)(action, ...process.argv.slice(3));
    }

    if (action === 'install') {
      (0, _index.default)(action);
    }
  });
});

function help() {
  console.log('\r\n' + 'how to use command');
  Object.keys(actionMap).forEach(action => {
    actionMap[action].examples.forEach(example => {
      console.log('  - ' + example);
    });
  });
}

_commander.default.on('-h', help);

_commander.default.on('--help', help);

_commander.default.version(_constants.VERSION, '-v --version').parse(process.argv);