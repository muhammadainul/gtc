const debug = require('debug')
const log = debug('gtc:services:notes:')

const { Get } = require('../helpers/helpers')

async function GetData (token) {
    log('GetDailynotes', token)
    try {
        const url = myConfig.api + "dailynotes/"
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
    GetData
}