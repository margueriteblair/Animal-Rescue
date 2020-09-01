
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

// app.use('/', homeRouter)
// app.use('/user', userRouter)



app.listen(process.env.PORT, () => {
    console.log(`Successfully listening to port ${process.env.PORT}`)
})


