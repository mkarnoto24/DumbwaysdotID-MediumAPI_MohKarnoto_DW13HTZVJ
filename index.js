const express = require('express')

//init bodyParser
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 4000

//allow this app to receive incoming json request
app.use(bodyParser.json())

//enable CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//import categories
const RestController = require('./controllers/categories')

app.group("/api/v1", (router) => {

    //GET list route: simply send arr of obj categories on your user screen
    router.get('/categories', RestController.index)

    //GET detail route: send the category obj, by received name request params
    router.get('/category/:name', RestController.show)

    //POST route: menambahkan data ke rest api
    router.post('/category', RestController.store)

    //PATCH route: update data
    //by object id
    router.patch('/category/:id', RestController.update)

    //DELETE route: delete the category obj, by received id request params
    router.delete('/category/:id', RestController.delete)

})

app.get('/', (req, res) => {
    res.send("test")
})

app.listen(port, () => console.log(`Listening on port ${port}!`))