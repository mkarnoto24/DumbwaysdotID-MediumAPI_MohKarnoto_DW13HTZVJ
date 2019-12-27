const Follow = require('../models').follow
//const User = require('../models').users

exports.add = (req, res) => {
    Follow.create(req.body)
        .then(follow => {
            res.send({
                message: "Success Following!",
                follow
            })
        }).catch(err => res.send(err))
}