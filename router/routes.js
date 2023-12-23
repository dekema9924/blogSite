const express = require('express');
const router = express.Router();
const article_db = require('../database/pg');
let article;





//home route
router.get('/', (req, res)=>{
    let sql = "SELECT title, description, submission_date FROM Articles ORDER  BY submission_date "
    article_db.query(sql,(err, data)=>{
        if(err){
            console.error("error executing query", err.stack)
        }else{
            blog = data.rows
            console.log(data.rows)
            res.render('home', {articles: blog})
        }
        article_db.end
    
    })
   
})



//new article route
router.get('/new', (req, res)=>{
    res.render('new')
})

//save new post

router.post('/newarticle', async (req, res)=>{
    // let title = req.body.title;
    // let description = req.body.description;
    // let markdown = req.body.description;
    let{title, description, markdown} =req.body

    let sql = `INSERT INTO Articles (title, description) VALUES ('${title}', '${description}')`;
 

   article_db.query(sql, (err, result)=>{
        if(err){
            console.error("error executing query", err.stack)
        }
            console.log('blog created ' + result.rowCount)
            res.redirect('/routes')
        
    })
    


})

//edit route
router.get('/edit', (req,res)=>{
    res.render('edit')
})





module.exports = router;


// let data = result.rows;
//             async function getblog(){
                // for await(const blog_data of data){
                    //  article = [{
                    //     title: blog_data.title,
                    //     date: blog_data.submission_date,
                    //     description: blog_data.description
                    // }]
                    // res.render('home', {articles: article}) 
                // }
//             }
//             getblog();