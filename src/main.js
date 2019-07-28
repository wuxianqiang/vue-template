import program from 'commander';
import {VERSION} from './utils/constants'
import main from './index'

let actionMap = {
  install: {
    alias: 'i',
    description: 'install template',
    examples: [
      'my-cli i',
      'my-cli install'
    ]
  },
  config: {
    alias: 'c',
    description: 'config .zfclirc',
    examples: [
      'my-cli config set <k> <v>'
    ]
  },
  '*': {
    description: 'not found',
    examples: []
  }
}

Object.keys(actionMap).forEach(action => {
  program
    .command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      if (action === 'config') {
        console.log(process.argv.slice(3))
        main(action, ...process.argv.slice(3))
      }
      if (action === 'install') {
        main(action)
      }
    }
  );
})

function help () {
  console.log('\r\n' + 'how to use command')
  Object.keys(actionMap).forEach(action => {
    actionMap[action].examples.forEach(example => {
      console.log('  - ' + example)
    })
  })
}
program.on('-h', help);
program.on('--help', help)

program.version(VERSION, '-v --version').parse(process.argv)
