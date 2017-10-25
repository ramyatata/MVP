module.exports = {
  entry: __dirname + '/client/components/app.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        presets: ['es2015', 'react']
      }
    }]

  }

}