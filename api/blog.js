const express = require('express')
const router = express.Router()

const Blog = require('../services/blog')
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

    res.render('pages/blog', {
        page: 'blog',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/universitas', isAuthenticated, async (req, res) => {
    const universitasData = await Blog.GetUniversitas(token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/blog/kampus', {
        page: 'blog',
        universitasData: universitasData.data,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/universitas/detail/:id', isAuthenticated, async (req, res) => {
    const universitasId = req.params

    const universitasData = await Blog.GetUniversitasData(universitasId.id, token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/blog/info', {
        page: 'blog',
        universitasData: universitasData.data,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/jurusan', isAuthenticated, async (req, res) => {
    const jurusanData = await Blog.GetJurusan(token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/blog/jurusan', {
        page: 'blog',
        jurusanData: jurusanData.data,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/jurusan/detail/:id', isAuthenticated, async (req, res) => {
    const jurusanId = req.params

    const jurusanData = await Blog.GetJurusanData(jurusanId.id, token)

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/blog/detail', {
        page: 'blog',
        jurusanData: jurusanData.data,
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

module.exports = router