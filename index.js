const express = require('express')
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

env.config();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use('/api', require('./routes/employee'));
app.use('/api', require('./routes/task'));

mongoose.connect(process.env.MONGO_URL)
    .then((x) => {
        console.log('Connected to Mongo! Database name: Emp-Task')
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} `)
})
