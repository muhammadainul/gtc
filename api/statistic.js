const express = require('express')
const router = express.Router()

const Carousel = require('../services/carousel')
const Tryout = require('../services/tryout')
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

    const categoryData = await Tryout.GetCategory(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/statistic', {
        page: 'statistic',
        carouselData,
        infoKiri,
        infoKanan,
        categoryData,
        session: req.session.user
    })
})

module.exports = router