import express from 'express';
import morgan from 'morgan';

// Routers
import toursRouter from './routes/tourRouter.js'
import usersRouter from './routes/userRouter.js' 
const PORT = process.env.PORT || 3000

// init express
const app = express()

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
