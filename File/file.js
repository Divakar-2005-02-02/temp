const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./File/first.txt','utf-8');
const second=readFileSync('./File/second.txt','utf-8');

console.log(first,second)
//to create a new file and add the contents
writeFileSync('./File/result-sync.txt',`Here is the result ${first},${second}`);
//to append
writeFileSync('./File/result-sync.txt',`Here is the result ${first},${second}`,{flag:'a'});
