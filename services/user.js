const debug = require('debug')
const log = debug('gtc:services:user:')

const { Post, Get } = require('../helpers/helpers')

async function SignIn (data) {
    log('SignIn', data)
    try {
        const url = myConfig.api + "user/login"
        const headers = {}
        const body = data

        const response = await Post(
            url,
            headers,
            body
        )

        log('response', response)
        return response
    } catch (error) {
        return error
    }
}

async function SignUp (data) {
    log('SignUp', data) 
    try {
        const url = myConfig.api + "user/register"
        const headers = {}
        const body = data

        const response = await Post(
            url,
            headers,
            body
        )

        log('response', response)
        return response
    } catch (error) {
        return error
    }
}

async function GetUserData (token) {
    log('GetUserData', token)
    try {
        const url = myConfig.api + "user/me"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers, 
            body
        )

        log('response', response)
        return response
    } catch (error) {
        return error
    }
}

async function GetScoreboard (token) {
    log('GetScoreboard', token)
    try {
        const url = myConfig.api + "user/scoreboard"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers, 
            body
        )

        log('response', response)
        return response.data
    } catch (error) {
        return error
    }
}

module.exports = {
    SignIn,
    SignUp,
    GetUserData,
    GetScoreboard
}