const fs = require('fs');

fs.writeFile('example.txt','this is an example',(err)=>{
  if(err)
    console.log(err);
  else{
    console.log('File successfully created');
    fs.readFile('example.txt','utf8',(err, file)=> {
      if(err)
        cosole.log(err);
      else
        console.log(file);
    });
  }
});

fs.rename('example.txt', 'example2.txt', (err)=>{
  if(err)
    console.log(err);
  else
    console.log('successfully renamed the file');
});

fs.appendFile('example2.txt', 'some data being appended', (err)=>{
  if(err)
    console.log(err);
  else
    console.log('successfully appended data to file');
});

fs.unlink('example2.txt', (err)=>{
  if(err)
    console.log(err);
  else
    console.log('success');
});

fs.mkdir('tutorial',(err)=>{
  if(err)
    console.log(err);
  else{
    fs.rmdir('tutorial', (err)=>{
      if(err)
        console.log(err);
      else{
        console.log('successfully deleted the folder');
      }
    }
  }
});

fs.mkdir('tutorial',(err)=>{
  if(err)
    console.log(err);
  else{
    fs.writeFile('./tutorial/example.txt','sample text to insert', (err)=>{
      if(err)
        console.log(err);
      else{
        console.log('successfully created file');
      }
    });
  }
}

fs.rmdir('tutorial',(err)=> {
  if(err)
    console.log(err);
  else{
    console.log('deleted folder');
  }
});
