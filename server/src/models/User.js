<<<<<<< HEAD
const bcrypt = require('bcrypt')

async function hashPassword (user) {
  if (!user.changed('password')) return

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(user.password, salt)
  user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  })

  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
  }

  return User
}
=======
const {User} = require('../models')
const bcrypt = require('bcrypt')

async function hashPassword (user, options) {
    if (!user.changed('password')) {
        return
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    User.prototype.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password)
    }

    return User
}
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
