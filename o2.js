const opn = require('opn');
let urls = [
'http://www.feemoo.com/s/dxl9hrr0',
'http://www.feemoo.com/s/257bacsy',
'http://www.feemoo.com/s/hrrvv2io',
'http://www.feemoo.com/s/2e6aljt3',
'http://www.feemoo.com/s/kb1qtufm',
'http://www.feemoo.com/s/q39fcyy5',
'http://www.feemoo.com/s/fzhemtf2',
'http://www.feemoo.com/s/rtdumn81',
'http://www.feemoo.com/s/0duj5rtj',
'http://www.feemoo.com/s/fksz012c',
'http://www.feemoo.com/s/9a2d7wns'
];

for(let url of urls){
    //console.log(id+i)
    opn(url);
}

