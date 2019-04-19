const processSpec = require('../etl');
const {Command, flags} = require('@oclif/command');

class SvahaCommand extends Command {
  async run() {
    await processSpec(this.parse(SvahaCommand))
  }
}

SvahaCommand.description = `Describe the command here
...
Extra documentation goes here
`;

SvahaCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  output: flags.string({char: 'o', description: 'output dir'}),
  input: flags.string({char: 'i', description: 'input dir'})
};

module.exports = SvahaCommand;
