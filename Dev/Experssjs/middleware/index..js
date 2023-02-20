import express from 'express';
// for logging http requests status to console
import morgan from 'morgan';
// halmet for security
import helmet from 'helmet';
// path
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import { log, auth } from './logger.mjs';

// app object
const app = express();

// middleware - json
app.use(express.json());
app.use(helmet());

// middleware - morgan at development evrionment only
if (app.get('env') === 'development') {
    app.use(morgan('dev'));
    console.log('Morgan enabled...');
}
// app.use(express.static('assets'));
app.use(express.static(__dirname + '/assets'));
// middleware - userdefined logging
app.use(log);
app.use(auth);

console.log(__dirname);
console.log(`Node Environment: ${process.env.NODE_ENV}`);
console.log(`App: ${app.get('env')}`);


// object
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];
// port
const port = process.env.PORT || 3000;

// root
app.get('/', (req, res) => {
    res.send('Hello World!');
});     

// api
app.get('/api', (req, res) => {
    res.send(courses);
});

// home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
    });



// localhost
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});