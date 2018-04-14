const opn = require('opn');
const options = process.argv;
let id = parseInt(options[2])*10+1;

for(let i=0;i<10;i++){
    //console.log(id+i)
    opn(`http://www.567pan.com/file-${id+i}.html`);
}

