// プラグインを読み込み
const { src, dest, watch } = require("gulp");
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');

//media queryをまとめるタスク
const mediaQueryPacked = () =>
  // cssファイルを取得
  src("css/**/*")
    // media queryのとりまとめを実行
    .pipe(
      postcss([mqpacker()])
    )
    // cssフォルダー以下に保存
    .pipe(dest("css"));

// npx gulpコマンド実行
exports.default = mediaQueryPacked;