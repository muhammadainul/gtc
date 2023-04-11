const express = require('express')
const router = express.Router()

const User = require('../services/user')

router.post('/login', async (req, res) => {
    const data = req.body

    const result = await User.SignIn(data)

    const userData = await User.GetUserData(result.token)

    if (result.success == true) { 
        req.session.user = userData.data
        token = result.token
    }
    
    return res.json(result)
})
    
router.post('/register', async (req, res) => {
    const data = req.body

    const result = await User.SignUp(data)

    return res.json(result)
})

router.get('/logout', async (req, res) => {
    req.session.destroy(function (){
        console.log('logout!')
        res.redirect('/')
    })
})

module.exports = router