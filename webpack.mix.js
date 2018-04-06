let mix = require("laravel-mix");
let path = require('path');

mix.webpackConfig({
  externals: {
    '$': 'jQuery',
    'jquery': 'jQuery'
  }
});

//this fixes an API change introduced at //https://github.com/webpack/webpack/issues/4549
mix.setPublicPath(
  path.resolve(__dirname, 'dist')
);

mix.autoload({
  jquery: ['$', 'jQuery', 'window.jQuery'],
  'popper.js/dist/umd/popper.js': ['Popper']
})

// do bootstrap4 separately
mix.sass('src/scss/bootstrap.scss', 'css/bootstrap4.css')
  .js('src/js/bootstrap.js', 'js/bootstrap4.js')
 ;

mix.js("src/js/main.js", "js/main.js")
.sass("src/scss/main.scss", "css/main.css")
;


mix.copy("src/images", "images");
