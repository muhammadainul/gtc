const debug = require('debug')
const log = debug('gtc:services:blog:')

const { Get, Post } = require('../helpers/helpers')

async function GetBuku (token) {
    log('GetBuku', token)
    try {
        const url = myConfig.api + "buku/"
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

async function Buy (id_buku, token) {
    log('Buy', { id_buku, token })
    try {
        const url = myConfig.api + "pemesananbuku/"
        const headers = { Authorization: 'Bearer ' + token }
        const body = { id_buku }

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

module.exports = {
    GetBuku, 
    Buy
}