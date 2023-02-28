import express from "express"
import {delById, toursAll, singleById, addtour,checkReq } from '../controllers/toursController.mjs'


const router = express.Router()

router
.route('/')
        .get(toursAll)
        .post(checkReq, addtour)

router
.route('/:id')
        .get(singleById)
        .delete(delById)

export default  router