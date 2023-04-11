const express = require('express')
const fs = require('fs')
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const app = express()

require('dotenv').config()
global.myConfig = require('./config/services')[process.env.NODE_ENV]

global.token = ''

if (!fs.existsSync('./views')) fs.mkdirSync('./views')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

if (!fs.existsSync('./public')) fs.mkdirSync('./public')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

app.use(cookieParser())
app.use(session({
    secret              : process.env.SESSION_SECRET,
    cookie              : { maxAge: 7200000 },
    resave              : false,
    saveUninitialized   : false
}))

app.use(async (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({})
    }
    next()
})

// routes
app.use('/', require('./api/index'))
app.use('/history', require('./api/history'))
app.use('/profile', require('./api/profile'))
app.use('/shop', require('./api/shop'))
app.use('/video', require('./api/video'))
app.use('/buku', require('./api/book'))
app.use('/peringkat', require('./api/peringkat'))
app.use('/blog', require('./api/blog'))
app.use('/belajar', require('./api/belajar'))
app.use('/notifikasi', require('./api/notifikasi'))
app.use('/statistic', require('./api/statistic'))
app.use('/tryout', require('./api/tryout'))
app.use('/latihan', require('./api/latihan'))
app.use('/user', require('./api/user'))
app.use('/content', require('./api/content'))
app.use('/dailynotes', require('./api/dailynotes'))

module.exports = app