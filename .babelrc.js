module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'react-use',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
      'import-react-use',
    ],

    // for emotion
    'transform-inline-environment-variables',
    [
      'babel-plugin-jsx-pragmatic',
      { export: 'jsx', module: '@emotion/core', import: '___EmotionJSX' },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      { pragma: '___EmotionJSX', pragmaFrag: 'React.Fragment' },
    ],
    'emotion',
  ],
}
