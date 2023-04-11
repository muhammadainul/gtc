const express = require('express')
const router = express.Router()

const Tryout = require('../services/tryout')
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
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const result = await Tryout.GetCategory(token)

    res.render('pages/history', {
        page: 'history',
        carouselData,
        infoKiri,
        infoKanan,
        result,
        session: req.session.user
    })
})

module.exports = router