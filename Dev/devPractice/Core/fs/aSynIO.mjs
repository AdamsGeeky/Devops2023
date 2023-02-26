/**
 *  Asynchronous IO
 *  Asynchronous IO is non-blocking, meaning that the program can continue to
 *  This is a good prectice for Node.js because it is single-threaded.
 *  
 */
import { readFile, writeFile } from "fs"

readFile("./Data/Qoutes.json", "utf-8", (err, data)=>{
        writeFile("message.json", data, 'utf-8', (err)=>{
            console.log('Data write... 🥑')
        })
});
