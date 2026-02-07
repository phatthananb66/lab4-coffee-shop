// src/routes.js
const CoffeeController = require('./controllers/CoffeeController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
    // เส้นทางสำหรับจัดการเมนูกาแฟ (Coffee Routes)
    app.get('/coffees', CoffeeController.index)      // ดูเมนูทั้งหมด
    app.post('/coffee', CoffeeController.create)     // เพิ่มเมนู
    app.put('/coffee/:coffeeId', CoffeeController.put) // แก้ไขเมนู
    app.delete('/coffee/:coffeeId', CoffeeController.remove) // ลบเมนู
    app.get('/coffee/:coffeeId', CoffeeController.show) // ดูเมนูรายตัว
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
}

