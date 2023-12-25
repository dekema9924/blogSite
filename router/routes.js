const express = require('express');
const router = express.Router();
const article_db = require('../database/pg');


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
//add new post
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
router.get('/edit/:id', (req,res)=>{
    let{title, id, description, markdown} =req.body;
    const _id = req.params.id;//get blog id and search db for it
     console.log(_id);
    let sql = `SELECT title, id, description, submission_date, markdown FROM Articles WHERE id = '${_id}'`
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
                markdown: blog_post[0].markdown,
                description: blog_post[0].description,
                id: blog_post[0].id
            }]
          
            res.render('edit', {edit_blog: post})
        }
    })
    
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
                markdown: blog_post[0].markdown,
                id: blog_post[0].id
            }]
            res.render('readmore', {blogs: post})
        }
    })
})

//deletes route
router.delete('/:id', (req, res)=>{
    console.log('delete route')
    let _id = req.params.id;
    let q = `DELETE FROM Articles WHERE id = ${_id}`
    article_db.query(q, (req, results)=>{
        res.redirect('/routes')
    })
})


// update post route
router.patch('/save/:id',(req,res)=>{
    article_db.connect((err)=>{
        let _id = req.params.id
        let{title, description, markdown} =req.body
    
        let q = `UPDATE Articles SET title = '${title}', description = '${description}', markdown ='${markdown}' WHERE id = '${_id}'`
        article_db.query(q, (err, result)=>{
            if(err){
                console.error("error executing query", err.stack)
            }else{
                if (err) throw err;
                  res.redirect('/routes')
                  console.log('blog updated')
            } 
        })
    }) 
})



module.exports = router;


