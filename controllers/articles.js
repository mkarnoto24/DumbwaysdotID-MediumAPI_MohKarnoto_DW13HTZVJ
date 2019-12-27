const Category = require('../models').categories  //import categories models 
const Article = require('../models').articles //import articles models 
const User = require('../models').users //import users models 
const Comment = require('../models').comment //import users models 

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
    }).then(article => res.send(article)).catch(err => res.send(err))
}

//10 ARTIKEL TERAKHIR
exports.showLatest = (req, res) => {

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
            ['id', 'DESC'],
            ['createdAt', 'DESC']
        ],
        limit: 10
    }).then(article => res.send(article)).catch(err => res.send(err))
}
exports.showByCategoryId = (req, res) => {

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
exports.showByArticleId = (req, res) => {

    Article.findOne({
        include: [
            {
                model: Category,
                as: "categoryId",
                attributes: ["name"]
            },
            {
                model: User,
                as: "authorId"
            },
            {
                model: Comment,
                as: "commentId"
            }
        ], where: { id: req.params.id }
    }).then(articles => res.send(articles)).catch(err => res.send(err))


}
exports.store = (req, res) => {
    Article.create(req.body).then(article => {
        res.send({
            message: "success",
            article
        })
    }).catch(err => res.send(err))

}
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
exports.delete = (req, res) => {

    Article.destroy({ where: { id: req.params.id } }).then(id => {
        res.send({
            message: "success",
            id
        })
    })
}


// article by person
exports.showByUserId = (req, res) => {

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
        ], where: { user_id: req.params.id }
    }).then(articles => res.send(articles)).catch(err => res.send(err))
}
// exports.store = (req, res) => {
//     Article.create(req.body).then(article => {
//         res.send({
//             message: "success",
//             article
//         })
//     }).catch(err => res.send(err))

// }
// exports.update = (req, res) => {
//     Article.update(
//         req.body,
//         { where: { id: req.params.id } }
//     ).then(article => {
//         res.send({
//             message: "success",
//             article
//         })
//     })
// }
// exports.delete = (req, res) => {

//     Article.destroy({ where: { id: req.params.id } }).then(id => {
//         res.send({
//             message: "success",
//             id
//         })
//     })
// }