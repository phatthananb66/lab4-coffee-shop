<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models') // เรียกใช้ sequelize object ที่เราสร้างไว้
const config = require('./config/config')

const app = express()

// --- Middleware Section ---
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// --- Routes Section ---
require('./routes')(app)

// --- Server Startup Section ---
const port = config.port

// สั่ง Sync ฐานข้อมูลก่อน แล้วค่อยเริ่ม Server
// force: false หมายถึง ถ้ามีตารางอยู่แล้ว ไม่ต้องลบสร้างใหม่ (รักษาข้อมูลเดิมไว้)
sequelize.sync({ force: false }).then(() => {
    app.listen(config.port, function () {
        console.log('CoffeeShop Server running on port ' + config.port)
        })
    })

=======
let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// STATUS
app.get('/status', function (req, res) {
    res.send('Hello nodejs server')
})

// Hello
app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
})

// GET user by id
app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน id: ' + req.params.userId)
})

// GET all users
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
})

// CREATE user
app.post('/user', function (req, res) {
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
})

// EDIT user
app.put('/user/:userId', function (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน id: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

// DELETE user
app.delete('/user/:userId', function (req, res) {
    res.send('ทำการลบผู้ใช้งาน id: ' + req.params.userId)
})

let port = 8081
app.listen(port, function () {
    console.log('server running on ' + port)
})
>>>>>>> 428c46f3a2fab43bdc494251a56ba8375d3e4b2a
