const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const targetPath = args[0] ? path.normalize(args[0]) : './';

let activeProcessCount = 0;

let tree = {
  files: [],
  folders: [targetPath],
};

crawler(targetPath);

function crawler(targetPath) {
  activeProcessCount ++;

  fs.readdir(targetPath, {withFileTypes: true}, (error, files) => {
    if (error !== null) {
      console.log(`${error.message} \n`);
      process.exit();
    }

    files.forEach((file) => {
      if (file.isDirectory()) {
        let innerFolder = path.normalize(`${targetPath}/${file.name}`);

        tree.folders.push(innerFolder);
        crawler(innerFolder);
      } else {
        tree.files.push(path.normalize(`${targetPath}/${file.name}`));
      }
    });

    activeProcessCount --;

    if (activeProcessCount === 0) {
      tree.folders = tree.folders.sort();
      tree.files = tree.files.sort();

      showResult();
    }
  });
}

function showResult() {
  console.log(`targetPath: ${targetPath} \n`);
  console.log(JSON.stringify(tree, null, 2));
}
