import express from 'express'
import { userById, userByName, usersByName,
    getAllUsers, addUser, updateUser, 
    delUserById } from '../controllers/usersController.mjs'

const router = express.Router()
router
.route('/')
        .get(getAllUsers)
        .post(addUser)
router
.route('/:id')
        .get(userById)
        .patch(updateUser)
        .delete(delUserById)
router
.route('/name/:name')
        .get(userByName)
router
.route('/name')
        .get(usersByName)


export default router 