const express = require('express')
const router = express.Router()

const Buku = require('../services/book')
const Carousel = require('../services/carousel')
const Infokiri = require('../services/infokiri')
const Infokanan = require('../services/infokanan')

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next()
    } else {
        res.redirect('/login')
    }
}

router.get('/', isAuthenticated, async (req, res) => {
    const [
        carouselData, 
        bukuData,
        infoKiri,
        infoKanan
    ] = await Promise.all([
        Carousel.GetCarouselData(),
        Buku.GetBuku(token),
        Infokiri.GetInfoKiri(),
        Infokanan.GetInfoKanan()
    ])

    res.render('pages/book', {
        page: 'book',
        carouselData,
        infoKiri,
        infoKanan,
        bukuData,
        session: req.session.user
    })
})

router.post('/get', isAuthenticated, async (req, res) => {
    const bukuData = await Buku.GetBuku(token)

    return res.json(bukuData)
})

router.post('/buy', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Buku.Buy(data.id, token)

    return res.json(result)
})

module.exports = router