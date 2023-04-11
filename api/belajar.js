const express = require('express')
const router = express.Router()

const Content = require('../services/content')
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
    const carouselData = await Carousel.GetCarouselData()

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/belajar', {
        page: 'belajar',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/ebook', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData()

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/belajar/ebook', {
        page: 'belajar',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/materi', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData()

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/belajar/materi', {
        page: 'belajar',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

// router.get('/ebook/detail', isAuthenticated, async (req, res) => {
//     const typeContent = req.query

//     const type = `type=${typeContent.type}`

//     const materiData = await Content.GetContentData(type, token)

//     res.render('pages/belajar/detail', {
//         page: 'belajar',
//         session: req.session.user,
//         materiData: materiData.data
//     })
// })

router.get('/materi/detail/?', isAuthenticated, async (req, res) => {
    const typeContent = req.query

    const type = `type=${typeContent.type}`

    const materiData = await Content.GetContentData(type, token)

    const carouselData = await Carousel.GetCarouselData()

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/belajar/detail', {
        page: 'belajar',
        session: req.session.user,
        carouselData,
        infoKiri,
        infoKanan,
        materiData: materiData.data
    })
})

module.exports = router