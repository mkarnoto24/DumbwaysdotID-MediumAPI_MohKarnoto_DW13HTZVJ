const Category = require('../models').categories  //import categories models 
const Article = require('../models').articles //import articles models 
const User = require('../models').users //import users models 
//const Comment = require('../models').comment //import users models
//article by user(person)
exports.showArticleByUser = (req, res) => {
    Article.findAll({
        include: [
            {
                model: Category,
                as: "categoryId"
            },
            {
                model: User,
                as: "authorId"
            }
        ], where: { author_id: req.params.id }
    }).then(articles => res.send(articles))
    .catch(err => res.send(err))
}

//untuk update berdasarkan user id yang login
exports.update = (req, res) => {
    Article.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(article => {
        res.send({
            message: "success",
            article
        })
    })
}


//untuk delete berdasarkan user id
exports.delete = (req, res) => {

    Article.destroy({ where: { author_id: req.params.id, id: req.params.id } }).then(id => {
        res.send({
            message: "success",
            id
        })
    })
}
