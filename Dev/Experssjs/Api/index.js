import express from 'express';
import morgan from 'morgan';
import courses from './models/course.mjs';
import Joi from 'joi';

const port = process.env.PORT || 3000;

// initialize express
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// courses routes
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// get single course
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(arr => arr.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

// post course
app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body, schema);

    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        // tutor: req.body.tutor,
        // description: req.body.description
    };
    courses.push(course);
    res.send(course);
});



// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`); 
});

