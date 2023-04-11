const { filter, chunk } = require('lodash')
const debug = require('debug')
const log = debug('gtc:services:tryout:')

const { Post, Get } = require('../helpers/helpers')

async function GetStatistic (id_category, token) {
    log('GetStatistic', { id_category, token })
    try {
        const url = myConfig.api + "tryout/category/" + id_category + "/?eligible=1"
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

async function GetCategory (token) {
    log('GetCategory', token)
    try {
        const url = myConfig.api + "tryout/category"
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

async function GetCategoryTryout (token) {
    log('GetCategoryTryout', token)
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
        log('data', data)

        return data
    } catch (error) {
        return error
    }
}

async function GetTryout (id, token) {
    log('GetTryout', { id, token })
    try {
        const url = myConfig.api + "tryout/category/"
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )   
        log('response', response)
    
        if (id == 1) {
            return response.data.slice(0, 8)
        } else if (id == 2) {
            return response.data.slice(8, 23)
        } else if (id == 3) {
            return response.data.slice(23, 35)
        } else if (id == 4) {
            return response.data[34]
        } else if (id == 5) {
            return response.data.slice(36, 79)
        } else if (id == 6) {
            return response.data[79]
        } else if (id == 7) {
            return response.data.slice(80, 92)
        } else if (id == 8) {
            return response.data.slice(92, 116)
        } else if (id == 9) {
            return response.data.slice(116, 132)
        } else if (id == 10) {
            return response.data.slice(132, 170)
        } else {
            return response.data.slice
        }
    } catch (error) {
        return error
    }
}

async function GetTryoutDetail (id, token) {
    log('GetTryoutDetail', { id, token })
    try {
        const url = myConfig.api + "tryout/" + id
        const headers = { Authorization: 'Bearer ' + token }
        const body = {}

        const response = await Get(
            url,
            headers,
            body
        )
        
        const data = { response, id: id }
        log('response', data)

        return data
    } catch (error) {
        return error
    }
}

async function GetSoal (id, token) {
    log('GetSoal', { id, token })
    try {
        const url = myConfig.api + "tryout/category/" + id
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
        const url = myConfig.api + "tryout/" + data.id + "/" + data.num + "/start"
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

async function SaveAnswer (data, token, namalengkap) {
    log('SaveAnswer', { data, token, namalengkap })
    try {
        const answer = data.answer.map((i) => Number(i))
        const url = myConfig.api + "answer/" + data.id + "/" + data.num
        const headers = { Authorization: 'Bearer ' + token }
        const body = { "answer": answer }
        
        const response = await Post(
            url,
            headers,
            body
        )

        log('response', response)

        if (response.success == true) {
            const url = myConfig.api + "tryout/" + data.id + "/" + data.num + "/finish"
            const headers = { Authorization: 'Bearer ' + token }
            const body = {}

            const response = await Get(
                url, headers, body
            )

            log('response', response)

            if (response.success == true) {
                await new Promise(resolve => setTimeout(resolve, 5000))
                
                const url = myConfig.api + "tryout/" + data.id + "/" + data.num + "/result"
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

async function GetResult (data, token) {
    log('GetResult', { data, token })
    try {
        const url = myConfig.api + "tryout/" + data.id + "/" + data.num + "/result"
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
        const url1 = myConfig.api + "tryout/" + data.id + "/" + data.num + "/pembahasan"
        const url2 = myConfig.api + "answer/" + data.id + "/" + data.num
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

async function GetHistory (data, token) {
    log('GetHistory', { data, token })
    try {
        const url = myConfig.api + "tryout/category/" + data.id + "/history"
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
    GetStatistic,
    GetCategory,
    GetCategoryTryout,
    GetTryout,
    GetTryoutDetail,
    GetSoal,
    GetQuestion,
    SaveAnswer,
    GetResult,
    GetPembahasan,
    GetHistory
}