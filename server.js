const express = require('express');
const app = express();
const port = 3000;
const blogRouter = require('./router/routes')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');





// middlewares
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/routes' ,blogRouter);




app.get('/', (req, res)=>{
    res.redirect('/routes')
} )


app.listen(port,(req, res)=>{
    console.log('app open')
})

