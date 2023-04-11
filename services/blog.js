const debug = require('debug')
const log = debug('gtc:services:blog:')

const { Get } = require('../helpers/helpers')

async function GetUniversitas (token) {
    log('GetUniversitas', token)
    try {
        const url = myConfig.api + "universitas/"
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

async function GetUniversitasData (universitasId, token) {
    log('GetUniversitasData', { universitasId, token })
    try {
        const url = myConfig.api + "universitas/" + universitasId
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )

        log('response', response.data)
        return response
    } catch (error) {
        return error
    }
}

async function GetJurusan (token) {
    log('GetJurusan', token)
    try {
        const url = myConfig.api + "jurusan/"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )

        log('response', response.data)
        return response
    } catch (error) {
        return error
    }
}

async function GetJurusanData (jurusanId, token) {
    log('GetJurusanData', { jurusanId, token })
    try {
        const url = myConfig.api + "jurusan/" + jurusanId
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

async function GetBeritaData () {
    log('GetBeritaData')
    try {
        const url = myConfig.api + "berita/"
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

async function GetBeritaDetail (id) {
    log('GetBeritaDetail')
    try {
        const url = myConfig.api + "berita/" + id
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
    GetUniversitas,
    GetUniversitasData,
    GetJurusan,
    GetJurusanData,
    GetBeritaData,
    GetBeritaDetail
}