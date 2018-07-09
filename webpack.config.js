const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  'entry': './src/index.js',
  'output': {
    'path': path.join(__dirname, '/dist'),
    'filename': 'bundle.js'
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': 'babel-loader'
      },
      {
        'test': /\.scss$/,
        'use': [
          MiniCssExtractPlugin.loader,
          {
            'loader': 'css-loader',
            'options': {
              'minimize': true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        'test': /\.(gif|ico|jpg|png|svg)$/,
        'use': 'file-loader'
      }
    ]
  },
  'plugins': [
    new HtmlWebpackPlugin({
      'template': './src/index.html',
      'minify': {
        'collapseWhitespace': true
      }
    }),
    new MiniCssExtractPlugin({
      'filename': 'bundle.css'
    })
  ]
}
