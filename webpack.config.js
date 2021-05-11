const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  entry: './build/dist/index.js',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './production/'),
  },
  externals: [nodeExternals()],
};