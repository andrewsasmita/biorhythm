var User = require ('../models/user')

class UserController {

    static login (req, res) {

        

    }

    static create (req, res) {

        var hash = bcrypt.hashSync(req.body.password, 8)

        User.create({
            email: req.body.email,
            password: hash,
            name: req.body.name
        }, (err, users) => {
            if (err) {res.status(401).json(err)}
            res.status(201).json(users)
        })

    }

    static read (req, res) {

    }

    static update (req, res) {

    }

    static delete (req, res) {

    }
}

module.exports = UserController