/** Description: Synchronous file read and write
 *  Synchronous means will block the code execution until the file is read or written
 *  This is not recommended for large files
 *  Synchronous IO is blocking, 
 *  meaning that the program will wait until the file is read or written
 *  nodejs is single-threaded, so this is not a good practice
 */
import { readFileSync, writeFileSync} from "node:fs"

const file = readFileSync("./txt/input.txt", "utf-8", (err) => {
        if (err) throw err;
        console.log("File read")
})

const output = `This is what we read: ${file} \n Created on ${Date.now()}`

writeFileSync("./txt/output.txt", output, 'UTF-8',(err) => {
        if (err) throw err;      
        console.log("File written")
})
