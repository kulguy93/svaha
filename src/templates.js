const operationTemplate = ({operationId, method, path}) => `
${operationId}({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '${path}',
        domain,
        params,
      }),
      method: '${method}',
      headers: withDefaultHeaders(params.headers),
      body: params.body
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
  defaultHeadersTemplate,
  baseTemplate,
  operationsTemplate,
  operationTemplate,
}
