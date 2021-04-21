const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: 'ignoredBundle.js',
    path: __dirname + '/client/dist'
  },
  watch: true,
  plugins: [new ESLintPlugin()]
};
