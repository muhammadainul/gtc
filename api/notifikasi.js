const express = require('express')
const router = express.Router()

const Notif = require('../services/notif')
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
    const result = await Notif.GetNotif(token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()
    
    res.render('pages/notifikasi', {
        page: 'notifikasi',
        result: result.data,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.post('/get', isAuthenticated, async (req, res) => {
    const result = await Notif.GetNotif(token)

    return res.json(result)
})

router.post('/read', isAuthenticated, async (req, res) => {
    const notifId = req.body

    await Notif.ReadNotif(notifId.id, token)
})

module.exports = router