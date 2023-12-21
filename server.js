const express = require('express');
const app = express();
const port = 3000;
const blogRouter = require('./router/routes')
const bodyparser = require('body-parser')
const ejs = require('ejs');



// middlewares
app.use('/routes' ,blogRouter);
app.set('view engine', 'ejs');



app.listen(port,(req, res)=>{
    console.log('app open')
})

