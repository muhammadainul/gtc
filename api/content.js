const express = require('express')
const router = express.Router()

const Content = require('../services/content')

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next()
    } else {
        res.redirect('/login')
    }
}

router.post('/read', isAuthenticated, async (req, res) => {
    const contentId = req.body

    await Content.ReadContent(contentId, token)
})

router.post('/get', isAuthenticated, async (req, res) => {
    const typeContent = req.body

    const materiData = await Content.GetContentData(typeContent.type, token)

    return res.json(materiData.data)
})

module.exports = router