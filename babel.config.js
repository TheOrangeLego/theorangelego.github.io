module.exports = function( api ) {
  api.cache( true )
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': 'src'
          },
          extensions: ['.ts', '.tsx'],
          root: ['src']
        }
      ]
    ],
    presets: ['babel-preset-expo'],
  }
}
