
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
// exports.show = (req, res) => {
//     // connection.query(`SELECT * FROM categories WHERE id=${req.params.id}`, (err, rows) => {
//     //     if (err) throw err

//     //     res.send(rows[0])
//     // })

//     Rest.findOne({ where: { name: req.params.name } }).then(category => res.send(category))
// }
// exports.store = (req, res) => {
//     // const { name, is_published, is_archived } = req.body

//     // connection.query(`INSERT INTO categories (name, is_published,is_archived) VALUES ('${name}','${is_published}','${is_archived}')`, (err) => {
//     //     if (err) throw err
//     // })

//     // res.send({
//     //     success: true,
//     //     data: req.body
//     // })

//     Rest.create(req.body).then(category => {
//         res.send({
//             message: "success",
//             category
//         })
//     })
// }
// exports.update = (req, res) => {
//     // const { name, is_published, is_archived } = req.body

//     // connection.query(`UPDATE categories SET name='${name}',is_published='${is_published}',is_archived='${is_archived}' WHERE id='${req.params.id}'`, (err) => {
//     //     if (err) throw err
//     // })

//     // res.send({
//     //     success: true,
//     //     data: req.body
//     // })

//     Rest.update(
//         req.body,
//         { where: { id: req.params.id } }
//     ).then(category => {
//         res.send({
//             message: "success",
//             category
//         })
//     })
// }
// exports.delete = (req, res) => {

//     // connection.query(`DELETE FROM categories WHERE id='${req.params.id}'`, (err) => {
//     //     if (err) throw err
//     // })

//     // res.send({
//     //     success: true,
//     //     data: req.body
//     // })

//     Rest.destroy({ where: { id: req.params.id } }).then(category => {
//         res.send({
//             message: "success",
//             category
//         })
//     })
// }