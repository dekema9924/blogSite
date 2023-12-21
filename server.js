const express = require('express');
const app = express();
const port = 3000;
const blogRouter = require('./router/routes')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const path = require('path');



// middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/routes' ,blogRouter);




app.listen(port,(req, res)=>{
    console.log('app open')
})

