var path = require('path')
var webpack = require('webpack')
var cssnext = require('cssnext');
var precss = require('precss');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  resolve: {
      extensions: ['', '.js', '.scss', '.css'],
      alias: {
        materialize_css: __dirname + "/node_modules/materialize-css/"
      }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.scss/,
      exclude: [/node_module/],
      loader: 'style!css!sass!postcss'
    },
    {
      test: /\.css/,
      //exclude: [/node_module/],
      loader: 'style!css'
    },{
      test: /\.(png|svg|jpg|woff|woff2|ttf|eot)$/,
      loader: 'url?limit=81920'
    },
    {
      test: /\.json/,
      //exclude: [/node_module/],
      loader: 'json'
    }]
  },
  postcss: function() {
    return [
      cssnext({
        autoprefixer: ['last 2 version']
      }),
      precss
    ]
  }
}