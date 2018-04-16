let mix = require("laravel-mix");
let path = require('path');

mix.webpackConfig({
  externals: {
    '$': 'jQuery',
    'jquery': 'jQuery'
  }
});

mix.setPublicPath('dist');

mix.autoload({
  jquery: ['$', 'jQuery', 'window.jQuery'],
  'popper.js/dist/umd/popper.js': ['Popper']
})

// do bootstrap4 separately
mix.sass('src/scss/bootstrap.scss', 'css/bootstrap4.css')
  .js('src/js/bootstrap.js', 'js/bootstrap4.js')
 ;

// app and then editor
mix.js("src/js/main.js", "js/main.js")
  .sass("src/scss/main.scss", "css/main.css")
  .sass("src/scss/editor.scss", "css/editor.css")
;


mix.copy("src/images", "images");
