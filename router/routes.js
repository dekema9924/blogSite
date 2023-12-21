const express = require('express');
const router = express.Router();




router.get('/', (req, res)=>{

    const article = [{
        title: 'title',
        date: new Date(),
        description : 'blog description'
    },
    {
        title: 'title2',
        date: new Date(),
        description : 'blog description2'
    }
]
    res.render('home', {
        articles: article
    }) 
      
    
})


//new article route
router.get('/new', (req, res)=>{
    res.render('new')
})

//save new post

router.post('/newarticle', async (req, res)=>{
    console.log('new post added');
    let title = req.body.title;
    console.log(title)

})

//edit route
router.get('/edit', (req,res)=>{
    res.render('edit')
})





module.exports = router;