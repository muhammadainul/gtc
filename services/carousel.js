const debug = require('debug')
const log = debug('gtc:services:carousel:')

const { Get } = require('../helpers/helpers')

async function GetCarouselData () {
    log('GetCarouselData')
    try {
        const url = myConfig.api + "carousel/"
        const headers = {}
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
    GetCarouselData
}