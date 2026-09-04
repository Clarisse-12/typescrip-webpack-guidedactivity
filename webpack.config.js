const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/main.ts',

  // Configuration for the generated bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Tell Webpack how to process TypeScript files
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // Allow Webpack to resolve TypeScript and JavaScript files
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // Development mode makes debugging easier
  mode: 'development',

  // Helps us debug the original TypeScript code
  devtool: 'inline-source-map',
};