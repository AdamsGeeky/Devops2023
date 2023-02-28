import fs from 'fs';
// for __dirname to work in ES6
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// for __dirname to work in ES6
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const toursData = JSON.parse(fs.readFileSync(`${__dirname}/../data/data/tours-simple.json`));
// GET METHOD
const toursAll =(req, res) => {
    res.status(200).json({
        // this info is for the client
        status: 'success',
        code: 200,
        createAt: req.requestTime,
        results: toursData.length,
        // this is the actual data
        data: {
            tours: toursData
        } 
})}

// GET single
const singleById = (req, res) => {
    const id = req.params.id * 1;
    if(id > toursData.length){
        return res.status(404).json({
            status: 'Data not found',
            code: 404
        })
    }
    const singleData = toursData.find(ele => ele.id === id)
    res.status(200).json({
        // this info is for the client
        status: 'success',
        code: 200,
        // this is the actual data
        data: {
            tours: singleData
        } 
    });
}
// DELETE single
const delById = (req, res) => {
    const id = req.params.id * 1;
    if(id > toursData.length){
        return res.status(404).json({
            status: 'Data not found',
            code: 404
        })
    }
    res.status(204).json({
        // this info is for the client
        status: 'success',
        code: 204,
        // this is the actual data
        data: null
    });
}
// POST METHOD
const addtour =(req, res) => {
    // console.log(req.body)
    const newId = toursData[toursData.length - 1].id + 1
// combine the id and the body to create a new object of the new data
    const addData = Object.assign({id: newId}, req.body) 
    toursData.push(addData)
    // write the new data to the file system to make it permanent
    fs.writeFile(`${__dirname}/../data/data/tours-simple.json`, JSON.stringify(toursData), err => {
        res.status(201).json({
            status: 'Created',
            code: 201,
            data: {
                tour: addData
            }
        })
    })
}


export {toursAll, singleById, addtour, delById}