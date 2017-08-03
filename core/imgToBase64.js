const glob = require('glob');
const fs = require('fs');
const {PREFIX_API} = require('../src/configure');
/**
 * 将小图片压缩成base64，并追加进style.scss文件
 * 每次图片修改后，需要手动执行此文件
 * by 2017.01.13 genbin
 */
const toBase64 = () => {
  glob('../public/thumbs/*.png', {}, (er, files) => {
    files.map((file) => {
      const bitmap = fs.readFileSync(file);
      const strBase64 = new Buffer(bitmap).toString('base64');
      const clsName = file.replace('.png','').replace('../public/thumbs/','');
      let clsRow = `.img-${clsName} {background-image: url(data:image/png;base64,${strBase64});} \n\n`;

      fs.appendFile('../src/formComposer/style.scss', clsRow, (er, files) => {
        if (er) {
          console.info('error is ', er);
        } else {
          console.info('style.scss is appended.');
        }
      });
    });
  });
};

toBase64();
