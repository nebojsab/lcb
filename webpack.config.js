const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  mode: 'none',
  entry: ['./src/index.js', './src/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/',
              name: '[name].css',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/assets/images/',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: __dirname + '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Banana Banana',
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}

module.exports = config
