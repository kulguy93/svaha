const fse = require('fs-extra')
const fs = require('fs')
const R = require('ramda')
const path = require('path')
const operationsTemplate = require('./templates').operationsTemplate
const operationTemplate = require('./templates').operationTemplate
const defaultHeadersTemplate = require('./templates').defaultHeadersTemplate
const baseTemplate = require('./templates').baseTemplate

function processSpec(specPath, output = __dirname) {
  fse.ensureDirSync(output)

  const specText = fs.readFileSync(specPath, 'UTF-8')

  let outputPath = path.format({
    dir : output,
    name: path.basename(specPath, '.json'),
    ext : '.js',
  })
  fs.writeFileSync(outputPath, processSwagger(JSON.parse(specText)))
}

function processSwagger(spec) {
  let result = baseTemplate()
  const {consumes, produces, paths, info} = spec

  result += defaultHeadersTemplate({
    consumes,
    produces,
  })

  let operationsString = ''

  const pathsStrings = Object.keys(paths)
  pathsStrings.forEach(path => {
    const {parameters, ...methods} = paths[path]
    const operations = R.compose(
      R.map(
        R.compose(
          R.over(
            R.lensProp('operationId'),
            R.replace(/-|[ ]/g, '_'),
          ),
          ([method, operation]) => ({
            method,
            path,
            parameters,
            ...operation,
          }),
        ),
      ),
      R.filter(
        R.compose(
          R.is(String),
          R.path([1, 'operationId']),
        ),
      ),
      R.toPairs,
    )(methods)
    operationsString += operations.map(operationTemplate).join('')
    // console.log(operations)
  })

  result += operationsTemplate({
    namespace : info.title,
    operations: operationsString,
  })

  return result
}

module.exports = {
  processSpec,
}
