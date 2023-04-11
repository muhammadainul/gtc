const debug = require('debug')
const log = debug('gtc:services:notif:')

const { Get } = require('../helpers/helpers')

async function GetNotif (token) {
    log('GetNotif', token)
    try {
        const url = myConfig.api + "notification/"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )

        // log('response', response)
        return response
    } catch (error) {
        return error
    }
}

async function ReadNotif (notifId, token) {
    log('ReadNotif', { notifId, token })
    try {
        const url = myConfig.api + `notification/${notifId}/read`
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
    GetNotif,
    ReadNotif
}