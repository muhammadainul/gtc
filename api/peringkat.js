const express = require('express')
const router = express.Router()

const User = require('../services/user')
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
    const scoreData = await User.GetScoreboard(token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/peringkat', {
        page: 'peringkat',
        scoreData,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

module.exports = router