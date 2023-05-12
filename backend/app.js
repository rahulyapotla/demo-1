const http = require("http");
const fs = require("fs");
const port = 8080;
const host = 'localhost';
const server = http.createServer((req,res) => 
{res.setHeader('Content-Type', 'text/html');
let path = '../frontend/'
res.statusCode = 200;

    if(req.url === '/')
    {
    path =  path + 'index.html';
    }
    

   
    fs.readFile( path, (err, data) => {
        if (err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.write(data);
            res.end();
        }
    }
    );
}
);

server.listen(port,host, () =>
{
    console.log('The server is running', port);
}
);