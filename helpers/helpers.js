const __request = require("request");

exports.Post = (url, headers, body) => {
    return new Promise((resolve, reject) => {
        try {
            let options = {
                url     : url,
                headers : headers,
                body    : body,
                json    : true
            };
            __request.post(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.PostWithFiles = (url, headers, formData) => {
    return new Promise((resolve, reject) => {
        try {
            let options = {
                url      : url,
                headers  : headers,
                formData : formData
            };
            __request.post(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.Get = (url, headers, body) => {
    return new Promise((resolve, reject) => {
        try {
            let options = {
                url     : url,
                headers : headers,
                body    : body,
                json    : true
            };
            __request.get(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.Put = (url, headers, body) => {
    return new Promise((resolve, reject) => {
        try {
            let options = {
                url     : url,
                headers : headers,
                body    : body,
                json    : true
            };
            __request.put(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.Delete = (url, headers, body) => {
    return new Promise((resolve, reject) => {
        try {
            let options = {
                url     : url,
                headers : headers,
                body    : body,
                json    : true
            };
            __request.delete(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};