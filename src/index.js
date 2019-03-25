const processSpec = require('./svaha').processSpec
const {Command, flags} = require('@oclif/command')

class SvahaCommand extends Command {
  async run() {
    const {flags, args} = this.parse(SvahaCommand)
    processSpec(args.spec, flags.output)
  }
}

SvahaCommand.args = [
  {name: 'spec'},
]

SvahaCommand.description = `Describe the command here
...
Extra documentation goes here
`

SvahaCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  output: flags.string({char: 'o', description: 'output dir'}),
}

module.exports = SvahaCommand
