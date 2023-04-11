const debug = require('debug')
const log = debug('gtc:services:package:')

const { Get } = require('../helpers/helpers')

async function GetDataPackage (token) {
    log('GetDataPackage', token)
    try {
        const url = myConfig.api + "package/"
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

async function Buy (data, token) {
    log('Buy', { data, token })
    try {
        const url = myConfig.api + "package/" + data.id_package + "/buy/" + data.id_tryout
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
    GetDataPackage,
    Buy
}