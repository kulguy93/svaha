const fs = require('fs').promises
const ejs = require('ejs')
const path = require('path')

const DATA_PROVIDERS_VIEW_PATH = path.resolve(__dirname, '../templates/data-providers.js.ejs')
const MI_CORE_INSTANCE_VIEW_PATH = path.resolve(__dirname, '../templates/mi-core-instance.js.ejs')

const ejsPromise = async (path, data) => {
  return new Promise((resolve, reject) => ejs.renderFile(path, data, (err, result) => err ? reject(err) : resolve(result)))
}

class SwaggerLoader {
  static async load(data, cliParams) {
    const DATA_PROVIDERS_OUTPUT_PATH = path.resolve(cliParams.output, './data-providers.js')
    const MI_CORE_INSTANCE_OUTPUT_PATH = path.resolve(cliParams.output, './mi-core-instance.js')

    const dataProvidersFile = await ejsPromise(DATA_PROVIDERS_VIEW_PATH, data)
    await fs.writeFile(DATA_PROVIDERS_OUTPUT_PATH, dataProvidersFile)
    const miCoreInstanceFile = await ejsPromise(MI_CORE_INSTANCE_VIEW_PATH, data)
    await fs.writeFile(MI_CORE_INSTANCE_OUTPUT_PATH, miCoreInstanceFile)
  }
}

module.exports = SwaggerLoader
