const fs = require('fs');

const readStream = fs.createReadStream('./example.txt');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data', (chunk)=>{
  console.log(chunk);
  writeStream.wrtie(chunk);
  
});
