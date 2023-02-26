import http from "node:http"
import url from "node:url"
import fs from "node:fs"
const server = http.createServer((req, res)=>{
  
    const urlpath = req.url;

    if(urlpath == "/api" | urlpath == "/home")
    {    
        fs.readFile("./message.json", "utf-8", (err, data)=>{
            if(err) throw err;
            res.writeHead(200,
                {
                    "Content-Type": "application/json"
                })
            res.end(data);

        })
    }else if (urlpath == "/books") {
        res.writeHead(200)
        res.end(' 🌎   🌎 hello world 🔥')
    } else{
        res.writeHead(404);
        res.end('page not found');
    }

    
})

server.listen(3000, '127.0.0.1',()=>{
    console.log('🔥🔥🔥🔥🔥 saver running on port 3000....🔥🔥🔥🔥')
})