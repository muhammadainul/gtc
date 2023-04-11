const express = require('express')
const router = express.Router()
const { filter } = require('lodash')

const Carousel = require('../services/carousel')
const Latihan = require('../services/latihan')
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
    
    res.render('pages/latihan', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/kategori', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()
    
    res.render('pages/latihan/kategori', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/kategori/bab', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const result = await Latihan.GetLatihanBab(token)
    
    res.render('pages/latihan/bab', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        result,
        session: req.session.user
    })
})

router.get('/kategori/tryout/:id', isAuthenticated, async (req, res) => {
    const param = req.params

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const result = await Latihan.GetCategoryLatihan(param.id, token)
    
    res.render('pages/latihan/list', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        result,
        session: req.session.user
    })
})

router.get('/kategori/bab/:id', isAuthenticated, async (req, res) => {
    const param = req.params

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const result = await Latihan.GetCategoryLatihan(param.id, token)
    
    res.render('pages/latihan/list-bab', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        result,
        session: req.session.user
    })
})


router.post('/list/soal', async (req, res) => {
    const data = req.body

    const result = await Latihan.GetSoal(data.id, token)
    
    return res.json(result)
})

router.get('/kategori/tryout', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const kategoryTryout = await Latihan.GetLatihanTryout(token) 
    
    res.render('pages/latihan/tryout', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        kategoryTryout,
        session: req.session.user
    })
})

router.get('/list/petunjuk', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/latihan/petunjuk', {
        page: 'latihan',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.post('/start', async (req, res) => {
    const data = req.body

    const result = await Latihan.GetQuestion(data, token)

    return res.json(result)
})

router.post('/save', async (req, res) => {
    const data = req.body

    const answerData = await Latihan.SaveAnswer(data, token, req.session.user.namalengkap)
    console.log('ANSWER', answerData)

    return res.json(answerData)
})

router.post('/result', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Latihan.GetResult(data, token)

    return res.json({ session: req.session.user.namalengkap, result })
})

router.post('/pembahasan', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Latihan.GetPembahasan(data, token)

    return res.json(result)
})

module.exports = router