const express = require('express');
const router = express.Router();
const article_db = require('../database/pg');
let article;





//home route
router.get('/', (req, res)=>{
    let sql = "SELECT title, id, description, submission_date FROM Articles ORDER BY ID DESC "
    article_db.query(sql,(err, data)=>{
        if(err){
            console.error("error executing query", err.stack)
        }else{
            //getting blogs from database
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
    let{title, description, markdown} =req.body
    let sql = `INSERT INTO Articles (title, description, markdown) VALUES ('${title}', '${description}', '${markdown}')`;
   article_db.query(sql, (err, result)=>{
        if(err){
            console.error("error executing query", err.stack)
        }
            console.log('blog created ')
            res.redirect('/routes')  
    })
})

//edit route
router.get('/edit', (req,res)=>{
    res.render('edit')
})

//readmore route
router.get('/readmore/:id', (req, res)=>{
    let{title, id, description, markdown} =req.body;
    const blog_id = req.params.id;//get blog id and search db for it
    // console.log(blog_id);
    let sql = `SELECT title, id, description, submission_date, markdown FROM Articles WHERE id = '${blog_id}'`
    article_db.query(sql, (err, result)=>{
        if(err){
            console.error("error executing query", err.stack)
        }else{
            let blog_post = result.rows
            console.log(blog_post[0].title)
            console.log(blog_post[0].submission_date)
            const post = [{
                title: blog_post[0].title,
                date: blog_post[0].submission_date,
                markdown: blog_post[0].markdown
            }]
            res.render('readmore', {blogs: post})
        }
    })
})





module.exports = router;


