// プラグインを読み込み
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

//Sassをコンパイルするタスク
const compileSass = () =>
  // scssファイルを取得
  src("scss/**/*")
    // scssのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded" 
      })
    )
    // cssフォルダー以下に保存
    .pipe(dest("css"));

//scssファイルを監視し、変更があったらscssをcssに変換
const watchSassFiles = () => watch("scss/**/*", compileSass);

// npx gulpコマンド実行時、watchSassFilesが実行される
//exports.default = watchSassFiles;
exports.default = compileSass;