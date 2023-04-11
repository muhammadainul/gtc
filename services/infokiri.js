const debug = require('debug')
const log = debug('gtc:services:infokiri:')

const { Get } = require('../helpers/helpers')

async function GetInfoKiri () {
    log('GetInfoKiri')
    try {
        const url = myConfig.api + "info/kiri"
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
    GetInfoKiri
}