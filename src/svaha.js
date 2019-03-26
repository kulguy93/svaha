const fse = require('fs-extra')
const fs = require('fs')
const R = require('ramda')
const path = require('path')
const {fix} = require('./lint')
const {definitionTemplate} = require('./templates')
const operationsTemplate = require('./templates').operationsTemplate
const operationTemplate = require('./templates').operationTemplate
const defaultHeadersTemplate = require('./templates').defaultHeadersTemplate
const baseTemplate = require('./templates').baseTemplate

const toSnakeCase = R.replace(/-|[ ]/g, '_')

function processSpec(specPath, output = __dirname) {
  fse.ensureDirSync(output)

  const specText = fs.readFileSync(specPath, 'UTF-8')

  let outputPath = path.format({
    dir: output,
    name: path.basename(specPath, '.json'),
    ext: '.js',
  })
  fs.writeFileSync(outputPath, fix(processSwagger(JSON.parse(specText))))
}

const processDefinitions = R.compose(
  R.join(''),
  R.map(
    (([key, value]) => definitionTemplate({key: toSnakeCase(key), props: R.keys(R.prop('properties', value))}))
  ),
  R.toPairs
)

function processSwagger(spec) {
  let result = baseTemplate()
  const {consumes, produces, paths, info, definitions} = spec

  result += defaultHeadersTemplate({
    consumes,
    produces,
  })

  let operationsString = ''

  result += processDefinitions(definitions)

  const pathsStrings = Object.keys(paths)
  pathsStrings.forEach(path => {
    const {parameters, ...methods} = paths[path]

    const operations = R.compose(
      R.map(
        R.compose(
          R.over(
            R.lensProp(['parameters']),
            R.unless(R.isNil,
              R.compose(
                R.mapObjIndexed(
                  R.ifElse(
                    R.compose(
                      R.equals('body'),
                      R.nthArg(1),
                    ),
                    R.compose(
                      toSnakeCase,
                      R.replace('#/definitions/', ''),
                      R.ifElse(R.is(String), R.identity, R.compose(R.always('{}'))),
                      R.path([0, 'schema', '$ref']),
                    ),
                    R.map(R.prop('name'))
                  )
                ),
                R.groupBy(R.prop('in')),
              ),
            ),
          ),
          R.over(
            R.lensProp('operationId'),
            toSnakeCase,
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
    namespace: info.title,
    operations: operationsString,
  })

  return result
}

module.exports = {
  processSpec,
}
