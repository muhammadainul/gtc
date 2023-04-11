const express = require('express')
const router = express.Router()

const Dailynotes = require('../services/dailynotes')

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next()
    } else {
        res.redirect('/login')
    }
}

router.post('/get', isAuthenticated, async (req, res) => {
    const contentData = await Dailynotes.GetData(token)

    return res.json(contentData)
})

module.exports = router