import fs from 'fs';
// for __dirname to work in ES6
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// for __dirname to work in ES6
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const userData = JSON.parse(fs.readFileSync(`${__dirname}/../data/data/users.json`));
// GET METHOD

const getAllUsers = (req, res) => {
    res.status(200).json({
        // this info is for the client
        status: 'ok',
        code: 200,
        createAt: req.requestTime,
        results: userData.length,
        // this is the actual data
        data: {
            users: userData
        } 
    });
}
// userById
const userById = (req, res) => {
    const id = req.params.id * 1;
    const user = userData.find(el => el.id === id);
    if(!user){
        return res.status(404).json({
            status: 'not found',
            code: 404,
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
            user
        }
    })
}
// Get user by name using regular expression
const userByName = (req, res) => {
    const name = req.params.name;
    const user = userData.find(el => el.name === name);
    if(!user){
        return res.status(404).json({
            status: 'not found',
            code: 404,
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
            user
        }
    })
}

// get users with same name using regular expression
const usersByName = (req, res) => {
    const name = req.params.name;
    const users = userData.filter(el => el.name === name);
    if(!users){
        return res.status(404).json({
            status: 'not found',
            code: 404,
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
            users
        }
    })
}


// post method
const addUser = (req, res) => {
    const newId = userData[userData.length - 1].id + 1;
    const newUser = Object.assign({id: newId}, req.body);
    userData.push(newUser);
    fs.writeFile(`${__dirname}/../data/data/users.json`, JSON.stringify(userData), err => {
        res.status(201).json({
            status: 'Created',
            code: 201,
            data: {
                user: newUser
            }
        })
    })
}
// update user
const updateUser = (req, res) => {
    const id = req.params.id * 1;
    const user = userData.find(el => el.id === id);
    if(!user){
        return res.status(404).json({
            status: 'not found',
            code: 404,
            message: 'Invalid ID'
        })
    }
    const updatedUser = Object.assign(user, req.body);
    fs.writeFile(`${__dirname}/../data/data/users.json`, JSON.stringify(userData), err => {
        res.status(200).json({
            status: 'ok',
            code: 200,
            data: {
                user: updatedUser
            }
        })
    })
}
// delete user
const delUserById = (req, res) => {
    const id = req.params.id * 1;
    const user = userData.find(el => el.id === id);
    if(!user){
        return res.status(404).json({
            status: 'not found',
            code: 404,
            message: 'Invalid ID'
        })
    }
    // indexOf method to get the index of the item in the array
    const index = userData.indexOf(user);
    // splice method to remove the item from the array 
    userData.splice(index, 1);
    fs.writeFile(`${__dirname}/../data/data/users.json`, JSON.stringify(userData), err => {
        res.status(204).json({
            status: 'no content',
            code: 204,
            data: null
        })
    })
}

// export 
export { getAllUsers,addUser, 
        userById, updateUser, 
        delUserById, userByName, 
        usersByName }
