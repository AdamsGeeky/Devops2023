import express from "express"
import {delById, toursAll, singleById, addtour } from '../controllers/toursController.mjs'


const router = express.Router()

router
.route('/')
        .get(toursAll)
        .post(addtour)

router
.route('/:id')
        .get(singleById)
        .delete(delById)

export default  router