const { filter, head } = require('lodash')
const debug = require('debug')
const log = debug('gtc:services:latihan:')

const { Post, Get } = require('../helpers/helpers')

async function GetCategory (token) {
    log('GetCategory', token)
    try {
        const url = myConfig.api + "latihan/category"
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

async function GetCategoryLatihan (id, token) {
    log('GetCategoryLatihan', { id, token })
    try {
        const url = myConfig.api + "latihan/category/" + id
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

async function GetLatihanBab (token) {
    log('GetLatihanBab', token)
    try {
        const url = myConfig.api + "latihan/category/?type=perbab"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )

        log('response', response)

        const data = filter(response.data, { 'type': 'perbab' })

        return data
    } catch (eror) {
        return error
    }
}

async function GetLatihanTryout (token) {
    log('GetLatihanTryout', token)
    try {
        const url = myConfig.api + "latihan/category/?type=tryout"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )

        log('response', response)

        const data = filter(response.data, { 'type': 'tryout' })

        return data
    } catch (error) {
        return error
    }
}

async function GetSoal (id, token) {
    log('GetSoal', { id, token })
    try {
        const url = myConfig.api + "latihan/" + id
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

async function GetQuestion (data, token) {
    log('GetQuestion', { data, token })
    try {
        const url = myConfig.api + "latihan/" + data.id + "/" + data.num + "/start"
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

async function GetResult (data, token) {
    log('GetResult', { data, token })
    try {
        const url = myConfig.api + "latihan/" + data.id + "/" + data.num + "/result"
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

async function GetPembahasan (data, token) {
    log('GetPembahasan', { data, token })
    try {
        const url1 = myConfig.api + "latihan/" + data.id + "/" + data.num + "/pembahasan"
        const url2 = myConfig.api + "answer/latihan/" + data.id + "/" + data.num
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const pembahasan = await Get(
            url1,
            headers,
            body
        )

        log('response', pembahasan)

        if (pembahasan.success == true) {
            const answer = await Get(
                url2,
                headers,
                body
            )

            log('response', answer)
            
            let data = []
            let index = 0
            pembahasan.data.forEach(value => {
                data.push({
                    question: value.question,
                    choices: value.choices,
                    answer: value.answer,
                    userAnswer: answer.answer[index],
                    explanation: value.explanation,

                })
                index++
            })

            return data
        }
    } catch (error) {
        return error
    }
}

async function SaveAnswer (data, token, namalengkap) {
    log('SaveAnswer', { data, token, namalengkap })
    try {
        const answer = data.answer.map((i) => Number(i))
        const url = myConfig.api + "answer/latihan/" + data.id + "/" + data.num
        const headers = { Authorization: 'Bearer ' + token }
        const body = { "answer": answer }

        const response = await Post(
            url,
            headers,
            body
        )

        log('response', response)

        if (response.success == true) {
            const url = myConfig.api + "latihan/" + data.id + "/" + data.num + "/finish"
            const headers = { Authorization: 'Bearer ' + token }
            const body = {}

            const response = await Get(
                url, headers, body
            )

            log('response', response)

            if (response.success == true) {
                await new Promise(resolve => setTimeout(resolve, 5000))

                const url = myConfig.api + "latihan/" + data.id + "/" + data.num + "/result"
                const headers = { Authorization: 'Bearer ' + token }
                const body = {}

                const response = await Get(
                    url, headers, body
                )
                log('response', response)

                if (response.success == false) { return response }
                
                const result = { session: namalengkap, result: response }

                return result
            } else {
                return response
            }
        } else {
            return response
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    GetCategory,
    GetCategoryLatihan,
    GetLatihanBab,
    GetLatihanTryout,
    GetSoal,
    GetQuestion,
    GetResult,
    GetPembahasan,
    SaveAnswer
}