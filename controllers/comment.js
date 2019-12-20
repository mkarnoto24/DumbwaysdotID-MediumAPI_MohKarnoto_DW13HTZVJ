const Comment = require('../models').comment
const Article = require('../models').articles //import articles models 
//const User = require('../models').users //import users models 


//  
exports.add = (req, res) => {
    Comment.create(req.body)
        .then(comment => {
            res.send({
                message: "Success",
                comment
            })
        }).catch(err => res.send(err))
}
exports.update = (req, res) => {
    Comment.update(req.body, { where: { article_id: req.params.id } }).then(comment => {
        res.send({
            message: "Success!",
            comment
        })
    }).catch(err => (res.send(err)))
}

exports.delete = (req, res) => {
    Comment.destroy({ where: { article_id: req.params.id } }).then(comment => {
        res.send({
            message: "Deleted!",
            comment
        })
    }).catch(err => res.send(err))
}
exports.show = (req, res) => {
    Comment.findAll({
        include: [
            {
                model: Article,
                as: "articleId"
            }
        ], where: { article_id: req.params.id }
    }).then(comment => res.send(comment)).catch(err => res.send(err))
}