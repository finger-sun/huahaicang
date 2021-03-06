var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理,内联样式  注意后添加的
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]' //目标文件夹
        }
      }, //添加对字体文件的支持。

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    // //配置服务器
    // proxy:{
    //    '/v4/api/*': {
    //           target: 'http://m.maizuo.com',
    //           host: 'm.maizuo.com',
    //           changeOrigin:true
    //       }
    // }
    //请求nodejs 爬取的数据  locahost：3000
    proxy:{
       '/api/*': {
              target: 'http://localhost:3000',
              host: 'localhost:3000',
              changeOrigin:true
          }
    }

     /*
      在前端 发起 /v4/api/billboard/home请求
            转发到  http://m.maizuo.com/v4/api/billboard/home
     */
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',

  plugins:[
    new webpack.ProvidePlugin({
        axios: 'axios'  //各个模块都可以使用axios
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/zh-cn/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
