const express = require('express')

//init bodyParser
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 4000

//allow this app to receive incoming json request
app.use(bodyParser.json())

//enable CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//import categories
const CategoryController = require('./controllers/categories')
const ArticleController = require('./controllers/articles')

app.group("/api/v1", (router) => {

    // CATEGORY ROUTER
    router.get('/categories', CategoryController.index) //get all
    router.get('/category/:name', CategoryController.show) // get by name
    router.post('/category', CategoryController.store) // add category
    router.patch('/category/:id', CategoryController.update) //update category
    router.delete('/category/:id', CategoryController.delete) //delete category

    //ARTICLE ROUTER
    router.get('/articles', ArticleController.index) //get all
    router.get('/articles/:populer', ArticleController.showLatest) //get latest article limit 10
    router.get('/category/:id/articles', ArticleController.showByCategoryId) //get by category
    router.get('/article/:id', ArticleController.showByArticleId) //get by id article


})

app.listen(port, () => console.log(`Listening on port ${port}!`))