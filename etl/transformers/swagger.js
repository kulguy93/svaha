class SwaggerTransformer {
  static get targetLoaders() {
    return ['SwaggerLoader']
  }

  static async transform(data) {
    const {consumes, produces, paths, info, definitions} = data
    const result = {consumes, produces, operations: [], definitions: {}}
    for (const eachDefinitionName of Object.keys(definitions)) {
      const resultDefinitionName = eachDefinitionName.replace(/[- ]/g, '_')
      result.definitions[resultDefinitionName] = Object.keys(definitions[eachDefinitionName].properties || {})
    }

    for (const eachPath of Object.keys(paths)) {
      const eachPathDefinitions = paths[eachPath]
      const globalParameters = eachPathDefinitions.parameters || []
      for (const eachMethod of Object.keys(eachPathDefinitions)) {
        if (eachMethod === 'parameters' || !eachPathDefinitions[eachMethod].operationId) {
          continue
        }
        const methodParameters = eachPathDefinitions[eachMethod].parameters || []
        const eachOperationObject = {
          method: eachMethod,
          operationId: eachPathDefinitions[eachMethod].operationId.replace(/[- ]/g, '_'),
          parameters: {
            body: [],
            query: [],
            path: [],
          },
        }
        for (const eachParam of methodParameters.concat(globalParameters)) {
          let dataToPush = eachParam.name
          if (eachParam.schema && eachParam.schema.$ref) {
            let definitionName = eachParam.schema.$ref.replace('#/definitions/', '')
            dataToPush = {
              definition: definitionName.replace(/[- ]/g, '_'),
            }
          }

          eachOperationObject.parameters[eachParam.in].push(dataToPush)
        }
        result.operations.push(eachOperationObject)
      }
    }

    return result
  }
}

module.exports = SwaggerTransformer
