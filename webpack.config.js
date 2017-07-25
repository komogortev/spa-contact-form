var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//names of libs to pass as vendor.js bundle file taken from dependancies in package.js
const VENDOR_LIBS = [
    'react', 'lodash', 'redux', 'react-redux', 'react-dom', 
    'faker', 'react-input-range', 'react-router',  'redux-form', 'redux-thunk',
];

module.exports = [{
  //JS
  entry: {
    bundle: ['./src/index.js', './assets/js/menu.js'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
     //create a bundle file named after entry points 
    filename: '[name].[chunkhash].js' //add chunkhash to distinguish build version
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            // 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            // 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            {
              loader: 'url-loader',
              //transpiles small images in data:image base64 string
              options: {limit: 40000}
            },
            'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    //ensure bundles have no duplicate code in them
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest'] //manifest if vendor has actually changed
    }),
    //automatically add bundles into index.html
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('app.[contenthash].css', {
      allChunks: true
    })
  ],
  
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: process.env.IP,
    port: process.env.PORT,
    public: "heroku-kom-wp2-komogortev.c9users.io"
  },
  
}];
 