const Linter = require('eslint').Linter
const linter = new Linter()

const config = {
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      classes: true,
      ecmaVersion: 6,
    },
    sourceType: 'module',
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
    'promise',
    'styled-components-config',
    'class-property',
  ],
  globals: {
    __DEV__: false,
    __TEST__: false,
    __PROD__: false,
    __COVERAGE__: false,
  },
  rules: {
    indent: [2, 2, {SwitchCase: 1}],
    semi: [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'function-paren-newline': [2, 'consistent'],
    'arrow-parens': [2, 'always'],
    'jsx-quotes': [2, 'prefer-double'],
    quotes: [2, 'backtick'],
    'max-len': [2, 120, 2],
    'no-underscore-dangle': [2, {
      allow: ['__INITIAL_STATE__'],
    }],
    'multiline-ternary': [2, 'always-multiline'],
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'before',
        '||': 'before',
      },
    }],
    'no-useless-escape': [2],
    'object-curly-spacing': [2, 'always'],
    'react/jsx-max-props-per-line': [2, {maximum: 2}],
    'no-param-reassign': [2, {props: false}],
    'key-spacing': [2, {
      afterColon: true,
      mode: 'minimum',
      align: {
        beforeColon: false,
        afterColon: true,
        on: 'colon',
      },
    }],
    'no-unused-expressions': [2, {
      allowTernary: true,
      allowShortCircuit: true,
    }],
    'react/jsx-filename-extension': [2, {extensions: ['.js']}],
    'react/require-default-props': [2],
    'jsx-a11y/label-has-for': [2, {
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: true,
    }],
    'react/jsx-handler-names': [2, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/prefer-stateless-function': [2],
    'no-useless-constructor': [2],
    'no-mixed-operators': [2, {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    }],
    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true, // The true value here is for backward compatibility
      allowLiteral: true,
      allowObject: true,
    }],
    /* disablers */
    'no-plusplus': 0, // no thanks
    'import/no-named-as-default': 0, // export const Some =..., export default Some
    'jsx-a11y/no-autofocus': 0, // focus-based navigation in form
    'import/prefer-default-export': 0, // domains
    'no-confusing-arrow': 0, // too hard to maintain
    'linebreak-style': 0, // git controles it
    'no-nested-ternary': 0, // maybe later
    'react/prop-types': 0, // dont use proptypes
    'react/no-array-index-key': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0, // needs resolvers
    'import/no-extraneous-dependencies': 0, // needs resolvers
    'import/no-webpack-loader-syntax': 0, // why not? we are uses webpack!
    'no-shadow': 1, // I prefer to use simple names, but there are not many of them
    'react/jsx-closing-tag-location': 0, // Allow to use && with element
    /* TODO enable and remove */
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
}

const fix = text => {
  const {fixed, output, messages} = linter.verifyAndFix(text, config)
  console.log(fixed, messages)
  return output
}

module.exports = {
  fix,
}
