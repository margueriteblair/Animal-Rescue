
//npm packages
const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config();
const morgan = require('morgan')

//env vars
let mongooseURI = process.env.MONGO_URL

//setting up the app.js page
let app = express(); //your application is an instance of express
app.use(express.static('public')); //allows static html files to be process
app.use(express.json()) //allows json files to be processed


if (typeof(process.env.MONGO_URL) === "string") {
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        console.log(error ? `\nError Connecting to MongoDB: ${error.message || error} \n` : `Server Connected to DB`
        )})        
} else {console.error('Invalid connection to database, URI type isnt a string')}

//imported
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter')

app.use('/', homeRouter)
app.use('/user', userRouter)



app.listen(process.env.PORT, () => {
    console.log(`Successfully listening to port ${process.env.PORT}`)
})


