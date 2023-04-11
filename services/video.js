const debug = require('debug')
const log = debug('gtc:services:video:')

const { Post, Get } = require('../helpers/helpers')

async function GetVideoMateri (token) {
    log('getVideoMateri', token)
    try {
        const query = 'type=videomateri'
        const url = myConfig.api + "content/?" + query
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

module.exports = {
    GetVideoMateri
}