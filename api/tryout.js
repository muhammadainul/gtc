const express = require('express')
const router = express.Router()

const Carousel = require('../services/carousel')
const Tryout = require('../services/tryout')
// const Latihan = require('../services/latihan')
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
    
    res.render('pages/tryout', {
        page: 'tryout',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.get('/category/:id', isAuthenticated, async (req, res) => {
    const param = req.params

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const tryoutData = await Tryout.GetTryout(param.id, token)

    res.render('pages/tryout/list', {
        page: 'tryout',
        carouselData,
        infoKiri,
        infoKanan,
        tryoutData,
        session: req.session.user
    })
})

router.get('/category/detail/:id', isAuthenticated, async (req, res) => {
    const param = req.params

    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    const tryoutData = await Tryout.GetTryoutDetail(param.id, token)

    res.render('pages/tryout/detail', {
        page: 'tryout',
        carouselData,
        infoKiri,
        infoKanan,
        tryoutData,
        session: req.session.user
    })
})

router.post('/list/soal', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Tryout.GetSoal(data.id, token)

    return res.json(result)
})

router.get('/list/petunjuk', isAuthenticated, async (req, res) => {
    const carouselData = await Carousel.GetCarouselData(token)

    const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/tryout/petunjuk', {
        page: 'tryout',
        carouselData,
        infoKiri,
        infoKanan,
        session: req.session.user
    })
})

router.post('/statistic', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Tryout.GetStatistic(data.id_category, token)

    return res.json(result)
})

router.post('/start', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Tryout.GetQuestion(data, token)

    return res.json(result)
})

router.post('/save', async (req, res) => {
    const data = req.body

    const answerData = await Tryout.SaveAnswer(data, token, req.session.user.namalengkap)

    return res.json(answerData)
})

router.post('/result', async (req, res) => {
    const data = req.body

    const result = await Tryout.GetResult(data, token)

    return res.json({ session: req.session.user.namalengkap, result })
})

router.post('/pembahasan', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Tryout.GetPembahasan(data, token)

    return res.json(result)
})

router.post('/history', isAuthenticated, async (req, res) => {
    const data = req.body

    const result = await Tryout.GetHistory(data, token)

    return res.json(result)
})

module.exports = router