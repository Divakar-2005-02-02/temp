const {readFile,writeFile}=require('fs')

readFile('./File/first.txt',(err,result)=>{
    if(err){
        console.log(err);
        return; 
    }
    else{
        console.log(result.toString());
    }
})