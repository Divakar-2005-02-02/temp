const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.write('Welcome to our home page')
}
if(req.url=='/about'){
    res.write('Welcome to our about page and it is a short history about our page')
}
else{
    res.write('<h1>404 Not Found</h1>')
}
res.end()
})
server.listen(5000)

//to install packages globally
//npm install -g package name
//npm init -y
//npm i bootstrap
