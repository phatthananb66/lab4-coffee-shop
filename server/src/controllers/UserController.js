<<<<<<< HEAD
const { User } = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
  // ===============================
  // get all users
  // ===============================
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'The users information was incorrect'
      })
    }
  },

  // ===============================
  // create user (ADMIN)
  // ===============================
  async create (req, res) {
    try {
      // 👉 ถ้า admin สร้าง user ใหม่
      // 👉 ให้ hash password ด้วย (เพื่อความปลอดภัย)
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10)
      }

      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: err.message
      })
    }
  },

  // ===============================
  // update user
  // ===============================
  async put (req, res) {
    try {
      // 👉 ถ้ามีการแก้ password
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10)
      }

      await User.update(req.body, {
        where: {
          id: req.params.userId
        }
      })

      res.send(req.body)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'Update user incorrect'
      })
    }
  },

  // ===============================
  // delete user
  // ===============================
  async remove (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The user information was incorrect'
        })
      }

      await user.destroy()
      res.send(user)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  },

  // ===============================
  // get user by id
  // ===============================
  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.send(user)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  }
}
=======
<<<<<<< HEAD
const {User} = require('../models')

module.exports = {
    // get all user
    async index (req, res) {
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },

    // create user
    async create (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(500).send({
         error: 'Create user incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put (req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // delete user
    async remove (req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })

            if(!user){
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }

            await user.destroy()
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    },
 // get user by id
    async show (req, res) {
        try {
            const user = await User.findByPk(req.params.userId)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}
=======
module.exports = {
    // get all user
    index (req, res) {
        res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
    },
 
    // create user
    create (req, res) {
        res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    },
 
    // edit user, suspend, active
    put (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },
 
    // delete user
    remove (req, res) {
        res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },
 
    // get user by id
    show (req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
    }
}
>>>>>>> 428c46f3a2fab43bdc494251a56ba8375d3e4b2a
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
