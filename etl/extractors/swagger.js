class SwaggerExtractor {
  static get targetTransformers() {
    return ['SwaggerTransformer']
  }

  static async extract(cliParams) {
    return require(cliParams.input)
  }
}

module.exports = SwaggerExtractor
