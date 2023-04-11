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
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/video', {
        page: 'video',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/materi', isAuthenticated, async (req, res) => {
    const typeContent = 'type=videomateri'

    const videoMateri = await Content.GetContentData(typeContent, token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/video/materi', {
        page: 'video',
        session: req.session.user,
        videoMateri: videoMateri.data,
        carouselData,
        infoKiri,
        infoKanan
    })
})

router.get('/tips-trick', isAuthenticated, async (req, res) => {
    const typeContent = 'type=videotips'

    const videoMateri = await Content.GetContentData(typeContent, token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/video/tips-trick', {
        page: 'video',
        carouselData,
        infoKiri,
        infoKanan,
        videoMateri: videoMateri.data,
        session: req.session.user
    })
})

router.get('/bahas-soal', isAuthenticated, async (req, res) => {
    const typeContent = 'type=videobahas'

    const videoMateri = await Content.GetContentData(typeContent, token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/video/bahas-soal', {
        page: 'video',
        carouselData,
        infoKiri,
        infoKanan,
        videoMateri: videoMateri.data,
        session: req.session.user
    })
})

module.exports = router