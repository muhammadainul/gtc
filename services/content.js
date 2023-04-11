const debug = require('debug')
const log = debug('gtc:services:content:')

const { Get } = require('../helpers/helpers')

async function ReadContent (contentId, token) {
    log('ReadContent', { contentId, token })
    try {
        const url = myConfig.api + "content/" + contentId.id
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

async function GetContentData (typeContent, token) {
    log('GetContentData', { typeContent, token })
    try {
        const url = myConfig.api + "content/?" + typeContent
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
    ReadContent,
    GetContentData
}