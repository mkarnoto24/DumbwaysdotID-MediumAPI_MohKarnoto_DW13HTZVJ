//const connection = require('../db')
// const models = require('../models')
// const Rest = models.categories

// exports.index = (req, res) => {
//     Rest.findAll().then(categories => res.send(categories))
// }
const Rest = require('../models').categories


exports.index = (req, res) => {

    /* ========use mysql query=========*/
    // connection.query('SELECT * FROM categories', (err, rows) => {
    //     if (err) throw err

    //     res.send(rows)
    // })

    /*======== use sequelize query====== */
    Rest.findAll().then(categories => res.send(categories))
        .catch(err => res.send(err))
}
exports.show = (req, res) => {
    // connection.query(`SELECT * FROM categories WHERE id=${req.params.id}`, (err, rows) => {
    //     if (err) throw err

    //     res.send(rows[0])
    // })

    Rest.findOne({ where: { name: req.params.name } })
        .then(category => res.send(category))
        .catch(err => res.send(err))
}
exports.store = (req, res) => {
    // const { name, is_published, is_archived } = req.body

    // connection.query(`INSERT INTO categories (name, is_published,is_archived) VALUES ('${name}','${is_published}','${is_archived}')`, (err) => {
    //     if (err) throw err
    // })

    // res.send({
    //     success: true,
    //     data: req.body
    // })

    Rest.create(req.body).then(category => {
        res.send({
            message: "success",
            category
        })
    })
}
exports.update = (req, res) => {
    // const { name, is_published, is_archived } = req.body

    // connection.query(`UPDATE categories SET name='${name}',is_published='${is_published}',is_archived='${is_archived}' WHERE id='${req.params.id}'`, (err) => {
    //     if (err) throw err
    // })

    // res.send({
    //     success: true,
    //     data: req.body
    // })

    Rest.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(category => {
        res.send({
            message: "success",
            category
        })
    })
}
exports.delete = (req, res) => {

    // connection.query(`DELETE FROM categories WHERE id='${req.params.id}'`, (err) => {
    //     if (err) throw err
    // })

    // res.send({
    //     success: true,
    //     data: req.body
    // })

    Rest.destroy({ where: { id: req.params.id } }).then(category => {
        res.send({
            message: "success",
            category
        })
    })
}