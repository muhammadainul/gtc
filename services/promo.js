const debug = require('debug')
const log = debug('gtc:services:promo:')

const { Get } = require('../helpers/helpers')

async function GetPromoData () {
    log('GetPromoData')
    try {
        const url = myConfig.api + "promo/"
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

async function GetPromoDetail (id) {
    log('GetPromoDetail', id)
    try {
        const url = myConfig.api + "promo/" + id
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
    GetPromoData,
    GetPromoDetail
}