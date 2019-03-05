module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    context: __dirname,
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        }
      ]
    }
  }
  