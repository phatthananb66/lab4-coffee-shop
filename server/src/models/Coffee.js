<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,      // แนะนำใช้ FLOAT
    type: DataTypes.STRING,      // hot / iced / frappe
    status: DataTypes.STRING     // available / out of stock
  })

  return Coffee
=======
// src/models/Coffee.js
module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        type: DataTypes.STRING, // hot, iced, frappe
      description: DataTypes.STRING
    })
    return Coffee
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
}
