const debug = require('debug')
const log = debug('gtc:services:infokanan:')

const { Get } = require('../helpers/helpers')

async function GetInfoKanan () {
    log('GetInfoKanan')
    try {
        const url = myConfig.api + "info/kanan"
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
    GetInfoKanan
}