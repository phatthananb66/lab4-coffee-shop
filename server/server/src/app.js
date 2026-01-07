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
