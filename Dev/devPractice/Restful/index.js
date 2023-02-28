import express from 'express';
import morgan from 'morgan';
// for __dirname to work in ES6
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// for __dirname to work in ES6
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// Routers
import toursRouter from './routes/tourRouter.js'
import usersRouter from './routes/userRouter.js' 
const PORT = process.env.PORT || 3000

// init express
const app = express()
app.use(express.static(`${__dirname}/public`))

// middlewares
app.use(morgan('dev')) // for logging requests status
app.use(express.json()) // for modifying req.body
// mounting the route
app.use('/api/v1/tours', toursRouter)
app.use('/api/v1/users',usersRouter)


// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `)
})
