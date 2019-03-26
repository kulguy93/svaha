const R = require('ramda')

const definitionTemplate = ({key, props}) => `
const ${key} = ${JSON.stringify(props)}
`

const  parametrsTemplate = R.compose(
  R.join(',\n'),
  R.map(([key, value]) => `${key}: ${R.is(String, value) ? value : JSON.stringify(value)}`),
  R.toPairs,
)

const operationTemplate = ({operationId, method, path, parameters}) => `
${operationId}({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      ${parametrsTemplate(parameters)}
    }
    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '${path}',
        domain,
        params,
      }),
      method: '${method}',
      headers: withDefaultHeaders(params.headers), ${R.prop('body', parameters) ? '\nbody: params.body' : ''}
    }

    return request(requestParams)
},
`

const baseTemplate = () => `import getEnv from 'utils/getEnv'
import { createApiInstance, createUrl } from 'data-provider'
import * as R from 'ramda'
`

const operationsTemplate = ({namespace, operations}) => `
const ${namespace} = {
  ${operations}
}

export default ${namespace}
`

const defaultHeadersTemplate = ({consumes, produces}) => `
const defaultHeaders =  {
    'Accept'      : '${consumes}',
    'Content-Type': '${produces}',
}

const withDefaultHeaders = R.mergeRight(defaultHeaders)
`

module.exports = {
  definitionTemplate,
  defaultHeadersTemplate,
  baseTemplate,
  operationsTemplate,
  operationTemplate,
}
