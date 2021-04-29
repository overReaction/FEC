const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  mode: 'production',
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
  plugins: [new ESLintPlugin(), new TerserPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 2
      })
    ]
  }
};

// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   mode: 'production',
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   },
//   output: {
//     filename: 'ignoredBundle.js',
//     path: __dirname + '/client/dist'
//   },
//   watch: true,
//   plugins: [new ESLintPlugin(), new BundleAnalyzerPlugin()],
//   optimization: {
//     minimize: true,
//     minimizer: [
//       new TerserPlugin({
//         parallel: 2
//       })
//     ]
//   }
// };
