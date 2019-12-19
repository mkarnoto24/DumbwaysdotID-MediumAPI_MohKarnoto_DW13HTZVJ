
const Category = require('../models').categories  //import categories models 
const Article = require('../models').articles //import articles models 
const User = require('../models').users //import users models 

exports.index = (req, res) => {

    Article.findAll({
        include: [
            {
                model: Category,
                as: "categoryId"
            },
            {
                model: User,
                as: "authorId"
            },
        ]
    }).then(article => res.send(article))
}

//10 ARTIKEL TERAKHIR
exports.show_latest = (req, res) => {

    Article.findAll({
        include: [
            {
                model: Category,
                as: "categoryId"
            },
            {
                model: User,
                as: "authorId"
            },
        ],
        order: [
            ['createdAt', 'DESC']
        ],
        limit: 10
    }).then(article => res.send(article))
}
exports.show_by_categoryId = (req, res) => {

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
        ], where: { category_id: req.params.id }
    }).then(articles => res.send(articles)).catch(err => res.send(err))
}
