<<<<<<< HEAD
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
  async register (req, res) {
    try {
      const { email } = req.body

      const existingUser = await User.findOne({ where: { email } })
      if (existingUser) {
        return res.status(400).send({ error: 'Email already exists' })
      }

      // ✅ ส่ง password plain → ให้ Model hash
      const user = await User.create(req.body)

      res.send(user.toJSON())
    } catch (err) {
      console.error(err)
      res.status(500).send({ error: 'Register failed' })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ where: { email } })
      if (!user) {
        return res.status(403).send({ error: 'User/Password not correct' })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({ error: 'User/Password not correct' })
      }

      const userJSON = user.toJSON()

      const token = jwt.sign(
        userJSON,
        config.authentication.jwtSecret,
        { expiresIn: 60 * 60 * 24 * 7 } // 7 วัน
      )

      res.send({ user: userJSON, token })
    } catch (err) {
      console.error(err)
      res.status(500).send({ error: 'Login failed' })
    }
  }
}
=======
const {User} = require('../models')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'The content information was incorrect'
            })
        }
    },
    
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            
            if(!user) {
                return res.status(403).send({
                    error: 'User/Password not correct'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'User/Password not correct'
                })
            }

            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        } catch (error) {
            res.status(500).send({
                error: 'Error! from get user'
            })
        }
    }
}
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
