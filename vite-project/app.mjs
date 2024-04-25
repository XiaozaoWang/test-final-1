// our api
import './config.mjs';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

const books = [
        {title: 'dune', _id: 1},
        {title: 'it', _id: 2},
        {title: 'the stand', _id: 3},
        {title: 'the hobbit', _id: 4},
]


app.get('/api/books', (req, res) => {
        res.json(books);
});

app.get('/api/regular', (req, res) => {
        res.json({message: 'hello from regular'});
});


app.get('/api/delayed', (req, res) => {
    setTimeout(() => {
        res.json({message: 'hello from delayed'});
    }, 2000);
});

// console.log(process.env.VITE_REACT_API_URL);
app.listen(process.env.VITE_REACT_API_PORT || 3001);
console.log('server is running on port 3001');