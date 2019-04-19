class SwaggerExtractor {
  static get targetTransformers() {
    return ['SwaggerTransformer']
  }

  static async extract() {
    return require('../input/mi-core')
  }
}

module.exports = SwaggerExtractor
