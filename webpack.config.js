/*eslint-env node */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  library: 'VueMsgbox',
  libraryTarget: 'umd',
  filename: 'vue-msgbox.js',
  path: './lib'
};
options.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};
options.plugins = [new ExtractTextPlugin('vue-msgbox.css')];
options.vue.loaders.css = ExtractTextPlugin.extract('style', 'css');
module.exports = options;
