const express = require('express')
const router = express.Router()

const Berita = require('../services/blog')
const Promo = require('../services/promo')
const Carousel = require('../services/carousel')
const Infokiri = require('../services/infokiri')
const Infokanan = require('../services/infokanan')

// const isAuthenticated = (req, res, next) => {
//     if (req.session.user) {
//         return next()
//     } else {
//         res.redirect('/login')
//     }
// }

router.get('/', async (req, res) => {
	const [
        beritaData,
        carouselData,
        promoData,
		infoKiri,
		infoKanan
    ] = await Promise.all([
        Berita.GetBeritaData(),
        Carousel.GetCarouselData(),
        Promo.GetPromoData(),
		Infokiri.GetInfoKiri(),
		Infokanan.GetInfoKanan()
    ])

	res.render('pages/home', { 
		page: 'home',
		beritaData,
		carouselData,
		promoData,
		infoKiri,
		infoKanan,
		session: req.session.user
	})
})

router.get('/pengenalan', async (req, res) => {
	const carouselData = await Carousel.GetCarouselData()

	const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

	res.render('pages/pengenalan', { 
		page: 'pengenalan',
		carouselData,
		infoKiri,
		infoKanan,
		session: req.session.user
	})
})

router.get('/panduan', async (req, res) => {
	const carouselData = await Carousel.GetCarouselData()

	const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

    res.render('pages/panduan', {
        page: 'panduan',
		carouselData,
		infoKiri,
		infoKanan,
		session: req.session.user
    })
})

router.get('/faq', async (req, res) => {
	const carouselData = await Carousel.GetCarouselData()

	const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

	res.render('pages/faq', {
		page: 'faq',
		carouselData,
		infoKiri,
		infoKanan,
		session: req.session.user
	})
})

router.get('/registrasi', async (req, res) => {
	res.render('pages/registrasi', {
		page: 'registrasi',
		session: req.session.user
	})
})

router.get('/login', async (req, res) => {
	res.render('pages/login', {
		page: 'login',
		session: req.session.user
	})
})

router.post('/berita', async (req, res) => {
	const beritaData = await Berita.GetBeritaData()

	return res.json(beritaData)
})

router.get('/berita/:id', async (req, res) => {
	const param = req.params

	const result = await Berita.GetBeritaDetail(param.id)

	const beritaData = await Berita.GetBeritaData()

	const carouselData = await Carousel.GetCarouselData()

	const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

	return res.render('pages/home/berita', {
		page: 'home',
		beritaData,
		carouselData,
		infoKiri,
		infoKanan,
		result,
		session: req.session.user
	})
})

router.post('/promo', async (req, res) => {
	const promoData = await Promo.GetPromoData()

	return res.json(promoData)
})

router.get('/promo/:id', async (req, res) => {
	const param = req.params

	const result = await Promo.GetPromoDetail(param.id)

	const promoData = await Promo.GetPromoData()

	const carouselData = await Carousel.GetCarouselData()

	const infoKiri = await Infokiri.GetInfoKiri()

	const infoKanan = await Infokanan.GetInfoKanan()

	return res.render('pages/home/promo', {
		page: 'home',
		promoData,
		carouselData,
		infoKiri,
		infoKanan,
		result,
		session: req.session.user
	})
})

router.post('/carousel', async (req, res) => {
	const carouselData = await Carousel.GetCarouselData()

	return res.json(carouselData)
})

router.post('/berita/get', async (req, res) => {
	const data = req.body

	const result = await Berita.GetBeritaDetail(data.id)

	return res.json(result)
})

module.exports = router