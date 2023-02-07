const express = require('express')
const mongooes = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/auth') 
const app = express()
const connectDB = async () => {
    try {
        await mongooes.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-shop.adagbkw.mongodb.net/?retryWrites=true&w=majority`)
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();

app.get('/', (req, res) => res.send("Web shop server"))
app.use(express.json()); //read any data sent in body with header applcation/json
app.use(cors()); //Enable All CORS Requests

app.use('/api/auth', authRouter)

const PORT = 5001

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));