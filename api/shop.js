const express = require('express')
const router = express.Router()

const Tryout = require('../services/tryout')
const Package = require('../services/package')
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
    const packageData = await Package.GetDataPackage(token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/shop', {
        page: 'shop',
        packageData: packageData.data,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.post('/get', isAuthenticated, async (req, res) => {
    const packageData = await Package.GetDataPackage(token)

    return res.json(packageData)
})

router.post('/buy', isAuthenticated, async (req, res) => {
    const data = req.body

    const buyPackage = await Package.Buy(data, token)

    return res.json(buyPackage)
})

router.get('/category/:id', isAuthenticated, async (req, res) => {
    const param = req.params

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const tryoutData = await Tryout.GetTryout(param.id, token)

    res.render('pages/shop/list', {
        page: 'tryout',
        carouselData,
        infoKiri,
        infoKanan,
        tryoutData,
        session: req.session.user
    })
})

module.exports = router