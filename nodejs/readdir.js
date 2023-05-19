const testFolder = "../data/";
const fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
  //   files.forEach((file) => {
  console.log(filelist);
  //   });
});
