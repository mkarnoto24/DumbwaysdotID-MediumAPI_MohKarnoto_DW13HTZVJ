const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.users

exports.login = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    User.findOne({
        where: { email, password }
    }).then(users => {
        if (users) {
            const token = jwt.sign({ userId: users.id }, "my-secret-key")

            res.send({
                users,
                token
            })
        } else {
            res.send({
                error: true,
                message: "Wrong Email or Password"
            })
        }
    })

}
