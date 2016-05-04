paths = {}
paths.src =
  pug: "views"
  stylus: "assets/stylus"
  babel: "assets/babel"
  image: "assets/image"
  bower: ".."

paths.dest =
  html: "public"
  css: "public/assets/css"
  js: "public/assets/js"
  image: "public/assets/image"
  bower: "public/assets/vendor"

module.exports =
  paths: paths
