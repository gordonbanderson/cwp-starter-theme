let mix = require('laravel-mix');

mix.autoload({
  jquery: ['$', 'jQuery', 'window.jQuery'],
  'popper.js/dist/umd/popper.js': ['Popper']
})

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
});

//mix.js("src/js/main.js", "js/main.js");
//mix
//  .sass("src/scss/main.scss", "css/main.css")
//  .sass("src/scss/editor.scss", "css/editor.css");

//mix.copy("src/images", "images");v

mix.sass("src/scss/main.scss", "css/main.css")
  .sass("src/scss/editor.scss", "css/editor.css")
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', 'stage-2']
              ]
            }
          }]
        },
        {
          test: /\.(scss)$/,
          use: extractSass.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
          })
        }
      ]
    }
  });
