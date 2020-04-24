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
    [
      'import',
      {
        libraryName: 'react-feather',
        libraryDirectory: 'dist/icons',
        camel2DashComponentName: true,
        customName: (name) => {
          if (name === 'trash2') {
            return 'react-feather/dist/icons/trash-2'
          }

          return `react-feather/dist/icons/${name}`
        },
      },
      'import-react-feather',
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
