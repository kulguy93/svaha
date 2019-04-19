const extractors = require('./extractors')
const transformers = require('./transformers')
const loaders = require('./loaders')
const extractedData = {}
const transformedData = {};

(async () => {
  try {
    for (const eachExtractor of extractors) {
      const data = await eachExtractor.extract()
      eachExtractor.targetTransformers.forEach(eachTargetName => extractedData[eachTargetName] = data)
    }

    for (const eachTransformer of transformers) {
      const data = await eachTransformer.transform(extractedData[eachTransformer.name])
      eachTransformer.targetLoaders.forEach(eachTargetName => transformedData[eachTargetName] = data)
    }

    for (const eachLoader of loaders) {
      await eachLoader.load(transformedData[eachLoader.name])
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    process.exit(0)
  }
})()
